export interface IProject {
    title: string;
    type: "internship" | "personal";
    description: string;
    techStack: string[];
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
}