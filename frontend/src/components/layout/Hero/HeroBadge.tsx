import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { itemVariants } from "@/src/animations/heroAnimations";

export default function HeroBadge() {
    return (
        <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest"
        >
            <Sparkles size={14} />
            <span>Open to new opportunities</span>
        </motion.div>
    );
}