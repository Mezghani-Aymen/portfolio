import { Download, FolderGit2, ChevronRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroActions({ onProjectsActive }: { onProjectsActive: () => void }) {
    return (
        <div className="flex flex-wrap gap-4 pt-4">
            <a
                href="/mezghanimohamedaymen_CV.pdf"
                download="MezghaniMohamedAymen.pdf"
                className="group relative inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-bold overflow-hidden transition-all hover:scale-105"
            >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
            </a>

            <ScrollLink
                to="projects"
                smooth
                duration={500}
                offset={-80}
                onSetActive={onProjectsActive}
                className="inline-flex items-center gap-3 bg-white/5 border text-white px-8 py-3 rounded-xl cursor-pointer group"
            >
                <FolderGit2 className="h-5 w-5 text-[var(--primary)]" />
                <span>View My Work</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
            </ScrollLink>
        </div>
    );
}