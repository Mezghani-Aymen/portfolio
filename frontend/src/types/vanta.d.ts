declare module "vanta/src/vanta.dots" {
    import * as THREE from "three";

    interface VANTAOptions {
        el: HTMLElement | string;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        scale?: number;
        scaleMobile?: number;
        color?: number;
        color2?: number;
        backgroundColor?: number;
        spacing?: number;
        showLines?: boolean;
        [key: string]: any;
    }

    export default function VANTA(options: VANTAOptions): {
        destroy: () => void;
        resize: () => void;
    };
}