"use client";

import { useEffect, useState } from "react";

export default function useAppLoader() {
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let completed = 0;
        const totalTasks = 2; // fonts + window

        const updateProgress = () => {
            completed++;
            const value = Math.min(Math.round((completed / totalTasks) * 100), 99);
            setProgress(value);

            if (completed >= totalTasks) {
                setProgress(100);
                setTimeout(() => setIsReady(true), 400);
            }
        };

        // Fonts
        document.fonts.ready.then(updateProgress);

        // Window load
        if (document.readyState === "complete") {
            updateProgress();
        } else {
            window.addEventListener("load", updateProgress, { once: true });
        }

        return () => {
            window.removeEventListener("load", updateProgress);
        };
    }, []);

    return { progress, isReady };
}