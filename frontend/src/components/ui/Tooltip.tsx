"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'left' | 'center' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'center' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        left: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        right: 'right-0'
    };

    const arrowPositionClasses = {
        left: 'left-4',
        center: 'left-1/2 -translate-x-1/2',
        right: 'right-4'
    };

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute bottom-full mb-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg z-50 border border-white/10 shadow-xl pointer-events-none max-w-[200px] sm:max-w-xs whitespace-normal sm:whitespace-nowrap ${positionClasses[position]}`}
                    >
                        {content}
                        <div className={`absolute top-full -mt-1 border-4 border-transparent border-t-gray-800 ${arrowPositionClasses[position]}`} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
