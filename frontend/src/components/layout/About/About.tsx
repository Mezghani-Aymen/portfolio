'use client'

import React from 'react';
import Section from '@/components/ui/Section';
import AboutContent from '@/components/layout/About/AboutContent';
import { ArcTimeline } from '@/components/ui/arcTimeLine';
import { timelineData } from '@/src/constants/arcTimeLine';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section
            className="relative max-w-7xl mx-auto flex flex-col items-center px-6 justify-between py-12 gap-12 overflow-hidden"
            id="about"
        >
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full text-center space-y-4"
            >
                <h2 className="text-[var(--primary)] text-sm font-bold uppercase tracking-[0.3em]">
                    Discover
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-orange-400">Me</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-orange-400 mx-auto rounded-full" />
            </motion.div>

            <AboutContent />

            {timelineData.length != 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='w-full space-y-12'
                >
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">My Career Journey</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A timeline of my professional growth, key milestones, and technical achievements.</p>
                    </div>
                    <ArcTimeline data={timelineData} />
                </motion.div>
            )}
        </Section>
    );
};


export default About;