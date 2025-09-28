import { useState } from "react";
import { IProject } from "../types/project.types";

export function useProjectNavigation(projects: IProject[]) {
    const [current, setCurrent] = useState(0);

    const nextProject = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const project = projects[current];

    return { current, project, nextProject, prevProject };
}