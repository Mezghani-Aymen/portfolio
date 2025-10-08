import React from 'react'
import { Terminal, TypingAnimation, AnimatedSpan } from "../../ui/Terminal"

interface ITerminalFlowProps {
    steps: {
        message: string;
        status: "pending" | "success" | "error";
    }[];
}
function TerminalFlow({ steps }: ITerminalFlowProps) {
    return (
        <Terminal>

            <TypingAnimation className="text-muted-foreground">
                {`> Npm send email`}
            </TypingAnimation>

            {steps.map((step, i) => {
                if (step.status === "pending") {
                    return (
                        <TypingAnimation key={i} className="text-blue-500">
                            {`ℹ ${step.message}`}
                        </TypingAnimation>
                    );
                } else if (step.status === "success") {
                    return (
                        <AnimatedSpan key={i} className="text-green-500">
                            ✔ {step.message.replace(/^Verifying /, "")}
                        </AnimatedSpan>
                    );
                } else {
                    return (
                        <AnimatedSpan key={i} className="text-red-500">
                            ✖ {step.message.replace(/^Verifying /, "")}
                        </AnimatedSpan>
                    );
                }
            })}

            <TypingAnimation className="text-muted-foreground mt-2">
                {`> Closing terminal...`}
            </TypingAnimation>
        </Terminal>
    )
}

export default TerminalFlow