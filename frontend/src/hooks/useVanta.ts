import { useEffect } from "react";

export function useVanta() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        let vantaEffect: any;

        const loadVanta = async () => {
            const THREE = await import("three");
            (window as any).THREE = THREE;
            const DOTS = (await import("vanta/src/vanta.dots")).default;

            vantaEffect = DOTS({
                el: "#hero-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xd76b30,
                backgroundColor: 0x000000,
                spacing: 17.0,
                showLines: false,
            });

            const handleResize = () => vantaEffect?.resize();
            window.addEventListener("resize", handleResize);
            window.addEventListener("orientationchange", handleResize);

            setTimeout(() => vantaEffect?.resize(), 500);
        };

        loadVanta();

        return () => {
            vantaEffect?.destroy();
        };
    }, []);
}