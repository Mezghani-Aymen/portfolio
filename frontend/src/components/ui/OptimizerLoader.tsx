'use client';

import { useEffect, useState } from "react";

interface OptimizingLoaderProps {
    progress: number; 
    size?: number;
    accentColor?: string;
}

const normalize = (v: number) => Math.min(Math.max(v / 100, 0), 1);

const Rings: React.FC<{ progress: number; color: string }> = ({ progress, color }) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - progress);

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" stroke={`${color}33`} strokeWidth="1" fill="none" />
            <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={color}
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 50 50)"
                strokeLinecap="round"
            />
        </svg>
    );
};

const LoaderText: React.FC<{ progress: number; color: string }> = ({ progress, color }) => (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-semibold" style={{ color }}>
            {Math.round(progress * 100)}%
        </span>
        <span className="text-xs tracking-[0.35em] mt-1" style={{ color: `${color}CC` }}>
            OPTIMIZING
        </span>
    </div>
);

const OptimizingLoader: React.FC<OptimizingLoaderProps> = ({ progress, size = 180, accentColor = '#D76B30' }) => {
    const value = normalize(progress);
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (progress >= 100) {
            setIsExiting(true);
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, 800); // Allow time for the fade animation
            return () => clearTimeout(timeout);
        }
    }, [progress]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="relative" style={{ width: size, height: size }}>
                <Rings progress={value} color={accentColor} />
                <LoaderText progress={value} color={accentColor} />
            </div>
        </div>
    );
};

export default OptimizingLoader;