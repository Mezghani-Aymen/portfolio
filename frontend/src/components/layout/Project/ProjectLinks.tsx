import { PersonalProject } from "@/src/types/project.types";
import { Github, MoveUpRight } from "lucide-react";

type Props = {
    project: PersonalProject;
};

export default function ProjectLinks({ project }: Props) {
    return (<nav className="flex gap-6">
        {project.sharedLink.liveUrl && (
            <a
                href={project.sharedLink.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
                View Demo
                <MoveUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
        )}
        {project.sharedLink.github && (
            <a
                href={project.sharedLink.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl border border-gray-700 hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-300"
                aria-label="View source code"
            >
                <Github className="h-6 w-6" />
                <span className="hidden sm:inline">Source Code</span>
            </a>
        )}
    </nav>)
} 