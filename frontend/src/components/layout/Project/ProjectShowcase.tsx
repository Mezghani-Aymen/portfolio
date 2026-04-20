"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectNavigationContext } from "@/src/contexts/ProjectNavigationContext";
import { ProjectType } from "@/src/types/project.types";
import CompanyInfo from "./CompanyInfo";
import ProjectLinks from "./ProjectLinks";

export default function ProjectShowcasePremium() {
    const { current, project } = useProjectNavigationContext();

    const isInternal = project.type === ProjectType.Internal
    return (
        <div className="relative mx-auto max-w-7xl px-4 py-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid gap-12 md:grid-cols-2 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-8 min-h-[500px] flex flex-col justify-between">
                        <div className="space-y-8">

                            {/* Header Info */}
                            <div className="flex items-center justify-between gap-4">
                                <motion.span
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    className="inline-block bg-gradient-to-br from-[var(--primary)] to-blue-600 text-white font-bold text-2xl md:text-4xl px-6 py-2 rounded-2xl shadow-lg shadow-blue-500/20"
                                >
                                    {String(current + 1).padStart(2, "0")}
                                </motion.span>

                                <div className="flex flex-col items-end">
                                    <span className={`
                                px-4 py-1 rounded-full text-sm font-medium border text-center ${isInternal
                                            ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                            : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                                        }`}>
                                        {project.type.toLocaleUpperCase()} Project
                                    </span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-md md:text-lg min-h-[180px]">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-sm text-gray-300 hover:border-[var(--primary)] hover:text-white transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Company Info / Links */}
                            <div className="pt-6 border-t border-gray-800/50">
                                {isInternal ? (
                                    <CompanyInfo project={project} />
                                ) : (
                                    <ProjectLinks project={project} />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Segment */}
                    <div className="relative group">
                        {/* Background  glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)] to-blue-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />

                        <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 group-hover:border-[var(--primary)]/50 transition-colors duration-500 aspect-video">
                            <Image
                                src={"project/" + project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}