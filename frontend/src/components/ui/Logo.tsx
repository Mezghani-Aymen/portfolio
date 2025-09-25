import React from "react";
import Image from "next/image";
import Icon from "./Icon";

// --- Variants ---
interface ImageLogoProps {
    type: "image";
    src: string;
    alt: string;
    withText?: string;
}

interface TextLogoProps {
    type: "text";
    primaryText: string;
    secondaryText?: string;
}

interface IconLogoProps {
    type: "icon";
    icon: React.ElementType;
    withText?: string;
    iconColor: string,
    textColor: string,
}



type ILogoProps = ImageLogoProps | TextLogoProps | IconLogoProps

export function Logo(props: ILogoProps) {
    switch (props.type) {
        case "image":
            return (
                <div className="flex items-center space-x-2">
                    <Image src={props.src} alt={props.alt} width={32} height={32} />
                    {props.withText && (
                        <span className="font-medium">{props.withText}</span>
                    )}
                </div>
            );

        case "text":
            return (
                <div className="flex items-center space-x-1 text-lg sm:text-2xl">
                    <span className="text-[var(--primary)]">{props.primaryText}</span>
                    {props.secondaryText && <span >{props.secondaryText}</span>}
                </div>
            );

        case "icon":
            return (
                <div className="flex items-center space-x-2">
                    <Icon IconType={props.icon} className={`w-6 h-6 sm:w-8 sm:h-8  ${props.iconColor} `} />
                    {props.withText && (
                        <span className="text-lg sm:text-xl font-bold">{props.withText}</span>
                    )}
                </div>
            );

        default:
            return null;
    }
}