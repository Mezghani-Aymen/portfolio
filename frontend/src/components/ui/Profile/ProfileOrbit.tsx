import React from 'react';

const ProfileOrbit = () => (
    <div 
        className="absolute -inset-4 border border-[var(--primary)]/30 rounded-[2rem] z-10 transition-transform duration-300 ease-out"
        style={{
            transform: 'translate(calc(var(--mouse-x) * 0.5), calc(var(--mouse-y) * 0.5)) scale(1.02)'
        }}
    />
);

export default ProfileOrbit;
