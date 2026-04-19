import { itemVariants } from "@/src/animations/heroAnimations";
import { motion } from "framer-motion";
import { Download, FolderGit2, ChevronRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroActions({ onProjectsActive }: { onProjectsActive: () => void }) {
    return (
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
                href="/mezghanimohamedaymen_CV.pdf"
                download="MezghaniMohamedAymen.pdf"
                className="group relative inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[var(--primary)]/20"
                aria-label="Download CV"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Download className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
            </a>

            <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={onProjectsActive}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group shadow-xl"
            >
                <FolderGit2 className="h-5 w-5 text-[var(--primary)]" />
                <span>View My Work</span>
                <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </ScrollLink>
        </motion.div>

    );
}