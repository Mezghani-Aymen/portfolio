// src/@types/react-icon-cloud.d.ts
declare module 'react-icon-cloud' {
    import React from 'react';

    export interface ICloud {
        containerProps?: React.HTMLProps<HTMLDivElement>;
        options?: {
            reverse?: boolean;
            depth?: number;
            wheelZoom?: boolean;
            imageScale?: number;
            activeCursor?: string;
            tooltip?: string;
            initial?: [number, number];
            clickToFront?: number;
            tooltipDelay?: number;
            outlineColour?: string;
            maxSpeed?: number;
            minSpeed?: number;
        };
    }

    export interface SimpleIcon {
        // Define properties based on the actual interface
        slug?: string;
        // Add other properties as needed
    }

    export function fetchSimpleIcons(options: { slugs: string[] }): Promise<{ simpleIcons: Record<string, SimpleIcon> }>;
    export function renderSimpleIcon(args: {
        icon: SimpleIcon;
        bgHex: string;
        fallbackHex: string;
        minContrastRatio: number;
        size: number;
        aProps: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    }): JSX.Element;

    export const Cloud: React.FC<ICloud>;
}