'use client';

import React, { useEffect, useRef } from 'react';

const GRID_SIZE = 50;
const GLOW_RADIUS = 300;
const INTERACTION_RADIUS = 150;
const POINT_RADIUS = 2;

const CyberGridBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        let mouseX = width / 2;
        let mouseY = height / 2;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMouseMove);

        resize();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw grid
            ctx.strokeStyle = 'rgba(215, 107, 48, 0.1)';
            ctx.lineWidth = 1;

            for (let x = 0; x <= width; x += GRID_SIZE) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y <= height; y += GRID_SIZE) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Mouse glow
            const gradient = ctx.createRadialGradient(
                mouseX,
                mouseY,
                0,
                mouseX,
                mouseY,
                GLOW_RADIUS
            );

            gradient.addColorStop(0, 'rgba(215, 107, 48, 0.15)');
            gradient.addColorStop(1, 'rgba(215, 107, 48, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Highlight nearby grid points (optimized area)
            ctx.fillStyle = 'rgba(215, 107, 48, 0.5)';

            const startX = Math.floor((mouseX - INTERACTION_RADIUS) / GRID_SIZE) * GRID_SIZE;
            const endX = Math.ceil((mouseX + INTERACTION_RADIUS) / GRID_SIZE) * GRID_SIZE;

            const startY = Math.floor((mouseY - INTERACTION_RADIUS) / GRID_SIZE) * GRID_SIZE;
            const endY = Math.ceil((mouseY + INTERACTION_RADIUS) / GRID_SIZE) * GRID_SIZE;

            for (let x = startX; x <= endX; x += GRID_SIZE) {
                for (let y = startY; y <= endY; y += GRID_SIZE) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < INTERACTION_RADIUS) {
                        const opacity = 1 - dist / INTERACTION_RADIUS;

                        ctx.beginPath();
                        ctx.arc(x, y, POINT_RADIUS * opacity + 1, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            animationFrameId.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);

            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10 bg-black"
        />
    );
};

export default CyberGridBackground;