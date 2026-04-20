"use client";

import React from "react";
import Section from "@/components/ui/Section";
import BackgroundLayer from "@/components/ui/BackgroundLayer";
import HeroContent from "./HeroContent";
import { useVanta } from "@/src/hooks/useVanta";

const Hero: React.FC = () => {
    useVanta();
    return (
        <Section
            id="hero"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-10"
        >
            <BackgroundLayer id="hero-bg" ariaHidden />
            <HeroContent />
        </Section>
    );
};

export default Hero;
