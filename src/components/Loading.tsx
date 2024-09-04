import React from 'react'
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogleDrive, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Loading() {
    return (
        <div className=" relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  animate-[ping_1.5s_ease-in-out_1_3s]  md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-transparent bg-clip-text text-center text-6xl font-semibold leading-none from-primary to-accent">
                Loading....
            </span>

            <OrbitingCircles duration={20} delay={20} radius={80} className="border-0">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-accent" />
            </OrbitingCircles>

            <OrbitingCircles radius={190} duration={20} reverse className="border-0">
                <FontAwesomeIcon icon={faGoogleDrive} size="2x" className="text-primary" />
            </OrbitingCircles>

            <OrbitingCircles radius={150} duration={20} delay={20} reverse className="border-0">
                <FontAwesomeIcon icon={faGithub} size="2x" className="text-secondry" />
            </OrbitingCircles>
        </div>
    );
}
