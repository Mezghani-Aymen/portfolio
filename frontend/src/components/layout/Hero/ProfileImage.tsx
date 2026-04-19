'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Components
import ProfileGlow from '../../ui/Profile/ProfileGlow';
import ProfileOrbit from '../../ui/Profile/ProfileOrbit';
import FloatingExperienceTag from '../../ui/FloatingActions/FloatingExperienceTag';

interface ProfileImageProps {
    src: string;
    className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        containerRef.current.style.setProperty('--mouse-x', `${x * 40}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y * 40}px`);
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        containerRef.current.style.setProperty('--mouse-x', '0px');
        containerRef.current.style.setProperty('--mouse-y', '0px');
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative w-72 h-96 sm:w-80 sm:h-[480px] group perspective-1000",
                className
            )}
            style={{
                '--mouse-x': '0px',
                '--mouse-y': '0px'
            } as React.CSSProperties}
        >
            <ProfileGlow />
            <ProfileOrbit />

            {/* Main Image Container */}
            <div
                className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900 shadow-2xl z-20 transition-transform duration-300 ease-out"
                style={{
                    transform: 'translate(var(--mouse-x), var(--mouse-y))'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-transparent to-white/5 z-30 pointer-events-none" />

                <Image
                    src={src}
                    alt="Profile Portrait"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                />
            </div>

            <FloatingExperienceTag />
        </div>
    );
};

export default ProfileImage;
