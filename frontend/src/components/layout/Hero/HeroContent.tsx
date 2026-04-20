import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Hooks
import useRotatingRoles from "@/src/hooks/useRotatingRoles";
import useActiveLink from "@/src/hooks/useActiveLink";
import useNavbarActions from "@/src/hooks/useNavbarActions";

// Constants
import { roles, techBadges } from "@/src/constants/hero";

// Animations
import { containerVariants, itemVariants } from "@/src/animations/heroAnimations";

// Components
import HeroBadge from "./HeroBadge";
import RoleSwitcher from "./RoleSwitcher";
import HeroDescription from "./HeroDescription";
import TechStack from "./TechStack";
import HeroActions from "./HeroActions";
import ProfileImage from "./ProfileImage";

export default function HeroContent() {
    const pathname = usePathname();
    const { setActiveLink } = useActiveLink({ pathname });
    const { handleSetActive } = useNavbarActions({ setActiveLink });

    const currentRole = useRotatingRoles(roles);

    return (
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 justify-between gap-16 py-10">
            {/* Left Area */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start text-left lg:w-3/5 space-y-8"
            >
                <HeroBadge />

                {/* Main Heading & Role Swapper */}
                <motion.div variants={itemVariants} className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Building Digital <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-orange-400">
                            Products
                        </span>
                    </h1>

                    <RoleSwitcher role={currentRole} />
                </motion.div>

                <HeroDescription />

                <TechStack techBadges={techBadges} />

                <HeroActions onProjectsActive={() => handleSetActive("projects")} />
            </motion.div>

            {/* Right Area */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="lg:w-2/5 flex justify-center lg:justify-end"
            >
                <ProfileImage src="/images/mezghani_mohamedAymen.png" />
            </motion.div>
        </div>
    );
}