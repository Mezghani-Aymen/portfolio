"use client";

import React from 'react'
import Link from "next/link";
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

function CallToActionContent() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center justify-center space-y-8"
        >
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Ready to Bring Your <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-orange-400">
                        Vision to Life?
                    </span>
                </h2>
                <p className="max-w-xl mx-auto text-lg md:text-xl font-medium text-gray-400">
                    Let&apos;s collaborate on your next project and create something extraordinary together.
                </p>
            </div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 bg-[var(--primary)] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[var(--primary)]/25 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Send className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10 text-lg">Get in Touch</span>
                    <ArrowRight className="h-5 w-5 relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default CallToActionContent