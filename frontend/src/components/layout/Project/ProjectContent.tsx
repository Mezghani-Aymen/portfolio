"use client";
import React, { useState } from 'react'
import projects from '@/src/constants/projects';
import { motion } from 'framer-motion';
import { Info, ExternalLink, Cpu } from 'lucide-react';
import Image from 'next/image';
import { IProject, ProjectType } from '@/src/types/project.types';
import ProjectDeepDiveModal from '@/components/layout/Project/ProjectDeepDiveModal';
import ProjectLinkButton from '@/components/layout/Project/ProjectLinkButton';
import { Tooltip } from '@/components/ui/Tooltip';



function ProjectContent() {
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        whileHover={{ y: -10 }}
                        className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={"/project/" + project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <div className="space-y-4 my-5">
                                <div className="flex items-center gap-3 text-[var(--primary)] text-lg font-semibold">
                                    <Cpu size={24} />
                                    <h3>Technical Infrastructure</h3>
                                </div>
                                <p className="text-blue-400 leading-relaxed italic font-bold">
                                    {project.deepDive?.architecture ?? "Hello word"}
                                </p>
                            </div>

                            <p className="text-gray-300 font-sm mb-6 flex flex-wrap gap-2 items-start">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-sm text-gray-300 hover:border-[var(--primary)] hover:text-white transition-all duration-300 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </p>
                            <div className="flex gap-4 mt-auto">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-[var(--primary)] text-white h-11 rounded-lg border border-white/10 hover:border-transparent transition-all"
                                >
                                    <Info size={20} />
                                    Deep Dive
                                </button>
                                {
                                    project.type === ProjectType.Personal ?
                                        <ProjectLinkButton sharedLink={project.sharedLink} />
                                        :
                                        <Tooltip content="Private internship project - Access restricted" position="right">
                                            <div
                                                className="w-11 h-11 flex items-center justify-center border border-white/5 rounded-lg bg-white/5 text-gray-600 cursor-not-allowed transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </div>
                                        </Tooltip>
                                }

                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ProjectDeepDiveModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)
                }
            />
        </>
    )
}

export default ProjectContent