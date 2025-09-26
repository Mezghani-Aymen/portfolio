import Image from "next/image";
import { Github, MoveUpRight } from "lucide-react";
import { useProjectNavigationContext } from "@/src/contexts/ProjectNavigationContext";



export default function ProjectShowcase() {
    const { current, project } = useProjectNavigationContext();

    return (

        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <span className="inline-block bg-[var(--primary)] text-white font-bold text-3xl md:text-4xl px-4 py-1 rounded">
                        {String(current + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-block   text-gray-400 font-sans text-md md:text-xl px-4 py-1 rounded">
                        {project.type}
                    </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold">
                    {project.title}
                </h2>

                <p className="text-gray-300 leading-relaxed min-h-[80px]">
                    {project.description}
                </p>

                <p className="text-blue-400 font-medium">
                    {project.techStack.join(", ")}
                </p>

                <nav className="flex gap-4 pt-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-gray-600 hover:bg-[var(--primary)] transition-colors"
                            aria-label="View live project"
                        >
                            <MoveUpRight className="h-5 w-5" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-gray-600 hover:bg-[var(--primary)] transition-colors"
                            aria-label="View source code"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                </nav>
            </div>

            {/* Right Image */}
            <div className="relative w-full rounded-xl overflow-hidden   border border-[var(--primary)]">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="relative z-10 rounded-xl w-full h-auto object-cover"
                    priority
                />
            </div>

        </div>

    );
}
