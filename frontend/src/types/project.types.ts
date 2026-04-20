export enum ProjectType {
    Internal = "internship",
    Personal = "personal"
}

export interface SharedLinks {
    github: string;
    liveUrl: string;
}

interface BaseProject {
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    deepDive?: {
        challenges: string[];
        solutions: string[];
        results: string[];
        architecture?: string;
        gallery?: string[];
    };
}

export interface PersonalProject extends BaseProject {
    type: ProjectType.Personal;
    sharedLink: SharedLinks;
}

export interface InternalProject extends BaseProject {
    type: ProjectType.Internal;
    company: ICompany
}

export interface ICompany {
    name: string,
    email: string
}
export type IProject = PersonalProject | InternalProject;