"use client";

import React from 'react'
import Principle from '@/components/layout/About/Principle'
import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react';
import FocusAreas from '@/components/layout/About/FocusAreas';

export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Bio Story */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I&apos;m a passionate <span className="text-[var(--primary)] font-semibold">Full-Stack Developer</span> who began coding as a curious student, turning small ideas into interactive websites.
                            My journey has been defined by a relentless drive to understand how every layer of the digital stack communicates.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Through hands-on internships and complex production projects, I have mastered the art of balancing
                            <span className="text-[var(--primary)] font-medium"> aesthetic precision</span> with
                            <span className="text-[var(--primary)] font-medium"> backend performance</span>.
                            I don&apos;t just write code; I architect ecosystems that feel effortless to the end-user.
                        </p>
                    </div>

                    <div className="pt-6 space-y-4 border-t border-white/5">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Rocket className="text-[var(--primary)]" size={20} />
                            Continuous Growth
                        </h3>
                        <p className="text-gray-400">
                            Currently, I&apos;m deep-diving into <span className="text-gray-200">distributed systems</span>,
                            <span className="text-gray-200">advanced caching strategies</span>, and
                            <span className="text-gray-200">cloud-native deployment workflows</span>.
                            I believe in building for the future while maintaining the highest front-end standards.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: Focus Areas */}
                <FocusAreas />
            </div>

            {/* Principles Section */}
            <div className="space-y-8">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <Principle />
            </div>
        </div>
    )
}

