"use client";

import React from 'react';
import Section from '../../ui/Section';
import ProjectContent from './ProjectContent';
import { motion } from 'framer-motion';

const Projects = () => {

    return (
        <Section className="max-w-7xl mx-auto flex flex-col items-center px-6 justify-between gap-16" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full text-center space-y-4 mb-8"
            >
                <h2 className="text-[var(--primary)] text-sm font-bold uppercase tracking-[0.3em]">
                    Portfolio
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-orange-400">Projects</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-orange-400 mx-auto rounded-full" />
            </motion.div>
            <ProjectContent />
        </Section>
    );
};

export default Projects;