"use client"
import React from 'react'
import dynamic from "next/dynamic";
import Section from '@/components/ui/Section';
import { skillsList } from '@/src/constants/skills';
import { motion } from 'framer-motion';

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
    ssr: false,
});

function Skills() {

    return (
        <Section className="flex items-center justify-center flex-col py-24 gap-12" id='skills'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full text-center space-y-4 mb-8"
            >
                <h2 className="text-[var(--primary)] text-sm font-bold uppercase tracking-[0.3em]">
                    Expertise
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-orange-400">Knowledge</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-orange-400 mx-auto rounded-full" />
            </motion.div>
            <IconCloud iconSlugs={skillsList} />
        </Section>
    )
}

export default Skills