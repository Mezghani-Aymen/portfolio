import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FormFieldProps {
    label: string;
    type: "text" | "email" | "textarea" | "file";
    error?: string;
}

// Combine input/textarea props based on type
type InputProps = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function FormField({ label, type, error, ...rest }: FormFieldProps & InputProps) {
    const className =
        "mt-1 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D76B30]/60";

    return (
        <label className="flex flex-col gap-1 mt-4">
            <span className="text-xs font-medium text-gray-200">{label}</span>
            {type === "textarea" ? (
                <textarea {...rest} rows={5} className={className + " w-full"} />
            ) : (
                <input type={type} {...rest} className={className} />
            )}
            {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
        </label>
    );
}