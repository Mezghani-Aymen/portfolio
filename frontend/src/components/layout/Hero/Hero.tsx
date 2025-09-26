"use client";

import React from "react";
import Section from "../../ui/Section";
import { useAOS } from "@/src/hooks/useAOS";
import BackgroundLayer from "../../ui/BackgroundLayer";
import HeroContent from "./HeroContent";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { useVanta } from "@/src/hooks/useVanta";

const Hero: React.FC = () => {

    useAOS(1000);
    useWindowSize();
    useVanta();

    return (
        <Section
            id="hero"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
        >
            <BackgroundLayer id="hero-bg" ariaHidden />
            <HeroContent />
        </Section>
    );
};

export default Hero;
