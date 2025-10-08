"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import FormField from "../../ui/FormField";
import useContactForm from "@/src/hooks/useContactForm";
import { useVerificationFlow } from "@/src/hooks/useVerificationFlow";
import Modal from "../../ui/Modal";
import TerminalFlow from "./TerminalFlow";

export default function ContactForm() {
    const { formData, handleChange, resetForm } = useContactForm();
    const { runVerification, steps, isRunning } = useVerificationFlow();
    const [showTerminal, setShowTerminal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowTerminal(true);
        const result = await runVerification(formData);
        if (result === "success") setTimeout(() => resetForm(), 800);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/10 pt-5 px-6 pb-6 shadow-2xl backdrop-blur-lg border border-white/20 [background:linear-gradient(135deg,rgba(215,107,48,0.25),rgba(255,255,255,0.05))]"
                aria-label="Contact form"
            >
                <FormField label="Full Name" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                <FormField label="Email Address" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                <FormField label="Subject" type="text" name="subject" placeholder="Project subject" value={formData.subject} onChange={handleChange} />
                <FormField label="Project Description" type="textarea" name="description" placeholder="Tell me about your project..." value={formData.description} onChange={handleChange} />

                <div className="mt-5 flex items-center justify-center gap-4">
                    <button
                        type="submit"
                        disabled={isRunning}
                        className={`inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm focus:outline-none ${isRunning ? "bg-gray-500/60 cursor-not-allowed" : "bg-[#D76B30]/90 hover:bg-[#D76B30]"
                            }`}
                    >
                        <Send className="w-4 h-4" aria-hidden />
                        {isRunning ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>

            <Modal isOpen={showTerminal} onClose={() => setShowTerminal(false)} autoCloseMs={4000}>
                <TerminalFlow steps={steps} />
            </Modal>
        </>
    );
}