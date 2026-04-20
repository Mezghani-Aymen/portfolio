'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
// import ChatWindow from './ChatWindow';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const [isChatOpen, setIsChatOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Show scroll to top button after 300px
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY > 300);

            // Calculate scroll progress percentage
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (windowHeight > 0) {
                const progress = (currentScrollY / windowHeight) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // const toggleChat = () => {
    //     setIsChatOpen(!isChatOpen);
    // };

    // SVG Progress Circle properties
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollProgress / 100) * circumference;

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 p-4 pointer-events-none">
            {/* TODO: Add chat window */}

            <div className="flex flex-col items-center gap-4 pointer-events-auto">
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            className="relative group"
                        >
                            {/* Scroll Progress Circle */}
                            <svg className="absolute -inset-1 w-[52px] h-[52px] -rotate-90 pointer-events-none" viewBox="0 0 52 52">
                                <circle
                                    cx="26"
                                    cy="26"
                                    r={radius}
                                    fill="transparent"
                                    stroke="currentColor"
                                    className="text-[var(--primary)] opacity-10"
                                    strokeWidth="2"
                                />
                                <motion.circle
                                    cx="26"
                                    cy="26"
                                    r={radius}
                                    fill="transparent"
                                    stroke="var(--primary)"
                                    strokeWidth="2"
                                    strokeDasharray={circumference}
                                    initial={{ strokeDashoffset: circumference }}
                                    animate={{ strokeDashoffset: offset }}
                                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                                    strokeLinecap="round"
                                />
                            </svg>

                            <button
                                onClick={scrollToTop}
                                className={cn(
                                    "relative flex items-center justify-center w-11 h-11 rounded-full",
                                    "bg-black/40 backdrop-blur-md border border-[var(--primary)]/30 text-[var(--primary)]",
                                    "hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-lg"
                                )}
                                aria-label="Scroll to top"
                            >
                                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* TODO: Add chatbot  */}
            </div>
        </div>
    );
};

export default FloatingActions;
