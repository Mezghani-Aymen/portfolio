import React from 'react';
import { motion } from 'framer-motion';

const ProfileGlow = () => (
    <motion.div 
        animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-10 bg-gradient-radial from-[var(--primary)]/40 via-[var(--primary)]/10 to-transparent blur-3xl rounded-full -z-10"
        style={{
            transform: 'translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))'
        }}
    />
);

export default ProfileGlow;
