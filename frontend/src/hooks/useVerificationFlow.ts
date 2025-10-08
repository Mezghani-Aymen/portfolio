import { useState } from "react";
import { contactSchema, ContactFormData } from "@/src/schemas/contactSchema";
import { ZodError } from "zod";

export type Step = { message: string; status: "pending" | "success" | "error" };

export function useVerificationFlow() {
    const [steps, setSteps] = useState<Step[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

    const runVerification = async (data: ContactFormData) => {
        if (isRunning) return;

        setIsRunning(true);
        setSteps([]);

        // small initial delay
        await sleep(800);

        const fields: (keyof ContactFormData)[] = ["name", "email", "subject", "description"];

        for (const key of fields) {
            const label = key[0].toUpperCase() + key.slice(1);

            // append pending step
            setSteps((prev) => [...prev, { message: `Verifying ${label}...`, status: "pending" }]);
            await sleep(800);

            // validate using Zod per field
            const singleSchema = contactSchema.pick({ [key]: true });
            const result = singleSchema.safeParse({ [key]: data[key] });

            // Use ZodError properly
            let message: string;
            if (result.success) {
                message = `${label} verified`;
            } else if (result.error instanceof ZodError) {
                message = result.error.issues.map(err => err.message).join(", ");
            } else {
                message = `${label} invalid or empty`;
            }

            setSteps((prev) => [
                ...prev,
                {
                    message,
                    status: result.success ? "success" : "error",
                },
            ]);

            await sleep(400);

            if (!result.success) {
                setIsRunning(false);
                return "error";
            }
        }

        // sending step
        setSteps((prev) => [...prev, { message: "Sending email...", status: "pending" }]);
        await sleep(1200);
       
       

        // TODO:Call Backend Logic  
        setSteps((prev) => [...prev, { message: "✅ Success! Mail sent.", status: "success" }]);

        setIsRunning(false);
        return "success";


    };

    return { steps, runVerification, isRunning };
}