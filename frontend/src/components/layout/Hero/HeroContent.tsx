import React from "react";
import { motion } from "framer-motion";
import useRotatingRoles from "@/hooks/useRotatingRoles";
import RoleSwitcher from "./RoleSwitcher";
import TechStack from "./TechStack";
import HeroActions from "./HeroActions";
import { roles, techBadges } from "@/constants/hero";
import useNavbarActions from "@/hooks/useNavbarActions";
import useActiveLink from "@/hooks/useActiveLink";
import { usePathname } from "next/navigation";
import EnhancedProfileImage from "../../ui/EnhancedProfileImage";
import { containerVariants, itemVariants } from "@/src/animations/heroAnimations";

export default function HeroContent() {
    const pathname = usePathname();
    const { setActiveLink } = useActiveLink({ pathname });
    const { handleSetActive } = useNavbarActions({ setActiveLink });

    const currentRole = useRotatingRoles(roles);

    return (
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 justify-between gap-16 py-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:w-3/5 space-y-8"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-6xl font-extrabold text-white">
                        Building Digital Products
                    </h1>
                    <RoleSwitcher role={currentRole} />
                </motion.div>

                <motion.p variants={itemVariants}>
                    I design scalable systems combining frontend & backend.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <TechStack techBadges={techBadges} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <HeroActions onProjectsActive={() => handleSetActive("projects")} />
                </motion.div>
            </motion.div>

            <EnhancedProfileImage src="/aymen_new.png" />
        </div>
    );
}