import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/src/animations/heroAnimations";

export default function HeroDescription() {
    return (
        <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
        >
            I design and architect complete digital ecosystems—merging intuitive frontends with high-performance backends. I don’t just build apps; I create scalable tools that solve real-world problems.
        </motion.p>
    );
}
