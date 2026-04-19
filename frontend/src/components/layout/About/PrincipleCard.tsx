"use client";

import React from 'react'
import Icon from '../../ui/Icon';
import { motion } from 'framer-motion';

interface IPrincipleCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    index: number;
}

export const PrincipleCard = (
    { title, description, icon, index }: IPrincipleCardProps
) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="
                relative flex flex-col items-center justify-start 
                rounded-3xl p-8
                bg-white/5 backdrop-blur-xl
                border border-white/10
                text-center text-white
                shadow-2xl shadow-black/20
                overflow-hidden group
            "
            role="region"
            aria-label={title}
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[var(--primary)]/10 blur-2xl rounded-full group-hover:bg-[var(--primary)]/20 transition-colors" />

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/5 transition-all duration-300 shadow-inner">
                <Icon IconType={icon} className="w-8 h-8 text-[var(--primary)] group-hover:scale-110 transition-transform" />
            </div>

            <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
        </motion.div>
    );
};