"use client";
import { ReactNode, useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    /**
     * If null/undefined: modal will NOT auto close.
     * If number (ms) is provided: modal auto-closes after that delay.
     */
    autoCloseMs?: number | null;
}

export default function Modal({
    isOpen,
    onClose,
    children,
    autoCloseMs = null,
}: ModalProps) {
    useEffect(() => {
        if (!isOpen) return;
        if (typeof autoCloseMs === "number") {
            const t = window.setTimeout(onClose, autoCloseMs);
            return () => window.clearTimeout(t);
        }
        // otherwise do not auto-close
    }, [isOpen, onClose, autoCloseMs]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-xl rounded-2xl bg-white/10 shadow-xl p-6">
                {children}
            </div>
        </div>
    );
}