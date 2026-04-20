import { IProject, ProjectType } from "../types/project.types";

const projects: IProject[] = [
    {
        type: ProjectType.Internal,
        title: "HR Application with Intelligent Web Scraping Tool",
        description: `
        A web application for human resources management that includes an intelligent tool for web data extraction.
        It uses Keycloak to handle authentication and authorization securely with JWT tokens.
        The system automates HR processes and includes a smart module that can automatically collect and organize data from selected websites while checking their legality.
        The project is deployed with Docker containers and built with a microservices architecture to make it easy to update, scale, and maintain.`,
        techStack: ["Next.js", "Spring Boot", "Keycloak", "MongoDB", "AI", "Python", "Docker", "Tailwind CSS"],
        imageUrl: "RH_dashbaord.png",
        company: {
            name: "Piva software",
            email: "sales@pivasoftware.com"
        }
    },
    {
        title: "Web application for a Content Management System",
        type: ProjectType.Internal,
        description:
            `Developed and Implemented a Content Management System (CMS) featuring an intuitive admin dashboard to enable administrators to easily manage all website content.
            This solution included building secure user and administrator authentication utilizing Laravel's framework to provide essential role-based access controls.`,
        techStack: ["Laravel", "jQuery", "Ajax", "SQL"],
        imageUrl: "CMS.png",
        company: {
            name: "Société de Multimedia et Développement Informatique [SMDI]",
            email: "contact@smdi.tn"
        }
    },
    {
        title: "Promotional Landing Page for Microsoft Tech Club (MTC-ISIMS)",
        type: ProjectType.Personal,
        description:
            `Designed and developed a high-impact landing page for the Microsoft Tech Club (MTC-ISIMS) focused on increasing visibility and engagement.
            The page effectively promotes the club's activities and features streamlined interfaces for both event and membership registration.
            Built with modern standards using HTML, Tailwind CSS, and JavaScript.`,
        techStack: ["HTML", "CSS", "JavaScript"],
        imageUrl: "MTC.png",
        liveUrl: "https://mezghani-aymen.github.io/MTC-landing-page/",
        githubUrl: "https://github.com/Mezghani-Aymen/MTC-landing-page",
    },
    {
        title: "MTC-ISIMS CodeSell Hackathon Landing Page",
        type: ProjectType.Personal,
        description:
            `Developed an engaging and interactive landing page for the CodeSell Hackathon. The page served as the central hub for event information, showcasing key details, and schedules.`,
        techStack: ["HTML", "CSS", "JavaScript"],
        imageUrl: "codeSell.png",
        liveUrl: "https://mezghani-aymen.github.io/CodeSell/",
        githubUrl: "https://github.com/Mezghani-Aymen/CodeSell",
    },
];

export default projects;