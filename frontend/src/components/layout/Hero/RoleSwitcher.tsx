import { AnimatePresence, motion } from "framer-motion";

export default function RoleSwitcher({ role }: { role: string }) {
    return (
        <div className="h-10 sm:h-12 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={role}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl font-semibold text-gray-400 italic"
                >
                    {role}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}