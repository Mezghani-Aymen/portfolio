import React from 'react';

const FloatingExperienceTag = () => (
    <div 
        className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-950/80 backdrop-blur-md border border-[var(--primary)]/40 rounded-2xl z-40 flex items-center justify-center p-3 shadow-2xl transition-transform duration-500"
        style={{
            transform: 'translate(calc(var(--mouse-x) * 1.5), calc(var(--mouse-y) * 1.5)) rotate(5deg)'
        }}
    >
        <div className="w-full h-full border border-dashed border-[var(--primary)]/30 rounded-lg flex items-center justify-center text-center">
            <span className="text-[var(--primary)] text-[10px] font-bold tracking-tighter leading-tight uppercase">
                Full Stack<br/>Developer
            </span>
        </div>
    </div>
);

export default FloatingExperienceTag;
