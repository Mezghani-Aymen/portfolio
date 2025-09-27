"use client";

import React from "react";
import { principles } from "@/src/constants/principles";
import { PrincipleCard } from "./PrincipleCard";

const Principle: React.FC = () => {

    return (
        <div
            className={`
                py-6
                grid 
                gap-6 
                transition-all 
                duration-300
                grid-cols-1  
                md:grid-cols-3 md:gap-8  `}
        >
            {
                principles.map((feature, idx) => (
                    <PrincipleCard key={idx} {...feature} />
                ))
            }
        </div >
    );
};

export default Principle;
