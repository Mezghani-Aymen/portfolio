'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, TrendingUp, Cpu } from 'lucide-react';
import { IProject } from '@/src/types/project.types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProjectDeepDiveModalProps {
    project: IProject | null;
    onClose: () => void;
}

const ProjectDeepDiveModal: React.FC<ProjectDeepDiveModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    const deepDive = project.deepDive || {
        challenges: ["Empty"],
        solutions: ["Empty"],
        results: ["Empty"],
        architecture: "Empty"
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className={cn(
                        "relative w-full max-w-4xl bg-gray-950/80 border border-[var(--primary)]/30 rounded-3xl overflow-hidden shadow-2xl z-10",
                        "max-h-[90vh] overflow-y-auto"
                    )}
                >
                    {/* Hero Header */}
                    <div className="relative h-48 sm:h-64 w-full">
                        <Image
                            src={"project/" + project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="absolute bottom-6 left-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 text-[var(--primary)] font-medium text-sm">
                                {project.techStack.slice(0, 4).map(tech => (
                                    <span key={tech}>#{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 space-y-12">
                        {/* Summary Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 text-[var(--primary)] text-lg font-semibold">
                                <Cpu size={24} />
                                <h3>Technical Infrastructure</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed italic">
                                {deepDive.architecture}
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Challenges */}
                            <section className="space-y-4">
                                <div className="flex items-center gap-3 text-red-400 text-lg font-semibold">
                                    <AlertCircle size={24} />
                                    <h3>The Challenges</h3>
                                </div>
                                <ul className="space-y-3">
                                    {deepDive.challenges.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                            <span className="text-red-400 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Solutions */}
                            <section className="space-y-4">
                                <div className="flex items-center gap-3 text-emerald-400 text-lg font-semibold">
                                    <CheckCircle2 size={24} />
                                    <h3>Engineered Solutions</h3>
                                </div>
                                <ul className="space-y-3">
                                    {deepDive.solutions.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                            <span className="text-emerald-400 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Impact / Results */}
                        <section className="bg-[var(--primary)]/5 border border-[var(--primary)]/20 p-6 rounded-2xl space-y-4">
                            <div className="flex items-center gap-3 text-[var(--primary)] text-lg font-semibold">
                                <TrendingUp size={24} />
                                <h3>Impact & Results</h3>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-6">
                                {deepDive.results.map((result, i) => (
                                    <div key={i} className="text-center p-4 border border-[var(--primary)]/10 bg-black/20 rounded-xl">
                                        <p className="text-white text-sm font-medium">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectDeepDiveModal;
