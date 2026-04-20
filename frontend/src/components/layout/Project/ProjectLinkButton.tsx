"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Globe, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SharedLinks } from '@/src/types/project.types';
// import { Tooltip } from '../../ui/Tooltip';

interface ProjectLinkButtonProps {
    sharedLink?: SharedLinks;
}

const ProjectLinkButton: React.FC<ProjectLinkButtonProps> = ({ sharedLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const hasGithub = !!sharedLink?.github;
    const hasLive = !!sharedLink?.liveUrl;
    // const hasAny = hasGithub || hasLive;

    // Handle clicks outside to close the menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // if (!hasAny) {
    //     return (
    //         <Tooltip content="Private internship project - Access restricted" position="right">
    //             <div 
    //                 className="w-16 h-11 flex items-center justify-center border border-white/5 rounded-lg bg-white/5 text-gray-600 cursor-not-allowed transition-colors"
    //             >
    //                 <ExternalLink size={20} />
    //             </div>
    //         </Tooltip>
    //     );
    // }

    // Only one link available
    if (hasGithub && !hasLive) {
        return (
            <a
                href={sharedLink?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-lg hover:border-[var(--primary)] text-gray-400 hover:text-white transition-colors bg-white/5 group"
                title="View on GitHub"
            >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
        );
    }

    if (!hasGithub && hasLive) {
        return (
            <a
                href={sharedLink?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-lg hover:border-[var(--primary)] text-gray-400 hover:text-white transition-colors bg-white/5 group"
                title="View Live Demo"
            >
                <Globe size={20} className="group-hover:scale-110 transition-transform" />
            </a>
        );
    }

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-11 flex items-center justify-center border rounded-lg transition-all duration-300 gap-1 ${isOpen
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-white/10 text-gray-400 hover:text-white hover:border-[var(--primary)] bg-white/5"
                    }`}
            >
                <div className="relative flex items-center justify-between w-full px-2">
                    <ExternalLink size={20} />
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 1 : 0.5 }}
                        className="relative"
                    >
                        <ChevronUp size={12} />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full right-0 mb-3 w-40 bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
                    >
                        <div className="p-1 flex flex-col gap-1">
                            <a
                                href={sharedLink?.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[var(--primary)] hover:text-white transition-colors rounded-lg group"
                                onClick={() => setIsOpen(false)}
                            >
                                <Globe size={16} />
                                <span>Live Demo</span>
                            </a>
                            <div className="h-[1px] bg-white/5 mx-2" />
                            <a
                                href={sharedLink?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[var(--primary)] hover:text-white transition-colors rounded-lg group"
                                onClick={() => setIsOpen(false)}
                            >
                                <Github size={16} />
                                <span>Source Code</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectLinkButton;
