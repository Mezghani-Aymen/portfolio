import { focusAreas } from "@/src/constants/focusAreas";
import { motion } from "framer-motion";

export default function FocusAreas() {
    return (<motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
        {focusAreas.map((area, index) => (
            <div
                key={index}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/30 transition-colors group"
            >
                <area.icon className="text-[var(--primary)] mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-white font-bold mb-1">{area.title}</h4>
                <p className="text-xs text-gray-400 leading-snug">{area.description}</p>
            </div>
        ))}
    </motion.div>
    )
}