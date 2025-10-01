import { createContext, useContext } from "react";
import { useProjectNavigation } from "@/src/hooks/useProjectNavigation";
import { IProject } from "../types/project.types";

interface ProjectNavigationProviderProps {
    projects: IProject[];
    children: React.ReactNode;
}

interface ProjectNavigationContextValue {
    current: number;
    project: IProject;
    nextProject: () => void;
    prevProject: () => void;
}

const ProjectNavigationContext = createContext<ProjectNavigationContextValue | null>(null);

export function ProjectNavigationProvider({ projects, children }: ProjectNavigationProviderProps) {
    const navigation = useProjectNavigation(projects);
    return (
        <ProjectNavigationContext.Provider value={navigation}>
            {children}
        </ProjectNavigationContext.Provider>
    );
}

export function useProjectNavigationContext() {
    const context = useContext(ProjectNavigationContext);
    if (!context) {
        throw new Error("useProjectNavigationContext must be used inside ProjectNavigationProvider");
    }
    return context;
}