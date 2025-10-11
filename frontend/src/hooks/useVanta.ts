import { useEffect } from "react";

type VantaEffect = {
  destroy: () => void;
  resize: () => void;
};

export function useVanta(): void {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let vantaEffect: VantaEffect | null = null;

    const loadVanta = async () => {
      // Dynamically import THREE and Vanta.DOTS
      const THREE = await import("three");
      (window as unknown as { THREE: typeof THREE }).THREE = THREE;

      const DOTS = (await import("vanta/src/vanta.dots")).default as (options: Record<string, unknown>) => VantaEffect;

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