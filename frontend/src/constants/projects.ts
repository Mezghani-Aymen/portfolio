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
        imageUrl: "/RH_dashbaord.png",
        company: {
            name: "Piva software",
            email: "sales@pivasoftware.com"
        },
        deepDive: {
            "challenges": [
                "Unifying fragmented HR workflows into a central scalable platform",
                "Handling diverse, unstructured data from external sources",
                "Ensuring strict role-based access control (RBAC) across a distributed microservices environment",
                "Coordinating real-time notifications and state management across 10+ independent services"
            ],
            "solutions": [
                "Architected a robust Microservices system using Spring Boot with Eureka for service discovery",
                "Integrated AI-driven automated data parsing",
                "Implemented a centralized Security Gateway using Keycloak for enterprise-grade authentication",
                "Developed a modern, responsive Next.js frontend with unified API routing via Spring Cloud Gateway"
            ],
            "results": [
                "360-degree visibility into employee life cycles and organizational hierarchy",
                "Significant reduction in manual data entry through AI-enhanced",
                "Highly available and horizontally scalable system ready for containerized deployment",
                "Secure multi-tenant environment supporting Admin, HR, Manager, and Employee roles"
            ],
            "architecture": "Distributed Microservices Architecture with Centralized Service Discovery, Federated Identity Management, and AI-Integrated"
        }

    },
    {
        title: "Web application for a Content Management System",
        type: ProjectType.Internal,
        description:
            `Developed and Implemented a Content Management System (CMS) featuring an intuitive admin dashboard to enable administrators to easily manage all website content.
            This solution included building secure user and administrator authentication utilizing Laravel's framework to provide essential role-based access controls.`,
        techStack: ["Laravel", "jQuery", "Ajax", "SQL"],
        imageUrl: "/CMS.png",
        company: {
            name: "Société de Multimedia et Développement Informatique [SMDI]",
            email: "contact@smdi.tn"
        },
        deepDive: {
            challenges: [
                "Managing complex membership histories across multiple periods and roles",
                "Implementing secure, multi-tier authentication for both administrative and general users",
                "Enabling non-technical admins to manage dynamic landing page content and site navigation",
                "Handling structured tracking for ornithological data (bird rings/bagues) within a standard CMS"
            ],
            solutions: [
                "Architected a period-based relational model to track member status and committee history over time",
                "Configured dual Laravel Guards (Admin vs. Web) with custom middleware and email verification workflows",
                "Developed a modular CMS backend for managing slides, navigation links, and dynamic information cards",
                "Decoupled route management into domain-specific files for maintainable administrative logic"
            ],
            results: [
                "Automated member onboarding and verification, reducing manual administrative overhead",
                "Centralized organizational knowledge including historical committee lists and member archives",
                "Increased content agility allowing instant updates to news, articles, and associations events",
                "Seamless mobile-responsive experience via Tailwind CSS and Alpine.js integration"
            ],
            architecture: "Monolithic MVC Architecture with a Centralized Management Hub and Role-Based Access Control"
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
        imageUrl: "/MTC.png",
        sharedLink: {
            liveUrl: "https://mezghani-aymen.github.io/MTC-landing-page/",
            github: "https://github.com/Mezghani-Aymen/MTC-landing-page",
        },
        deepDive: {
            "challenges": [
                "Designing an engaging platform to attract and consolidate a community of student tech enthusiasts",
                "Effectively organizing diverse information such as committee members, events, and training activities",
                "Ensuring seamless navigation and interaction to boost the club's visibility on campus"
            ],
            "solutions": [
                "Built a visually immersive single-page layout featuring an introductory dynamic background video",
                "Implemented interactive content sliders and structured sections for intuitive information discovery",
                "Integrated direct contact features and interactive location mapping to streamline member outreach"
            ],
            "results": [
                "Established a modern, professional, and cohesive online presence for the student organization",
                "Enhanced student engagement and accessibility to club resources, hackathons, and updates",
                "Simplified the process for new prospects to connect with the club's leadership and participate"
            ],
            "architecture": "Responsive Single-Page Structure with Section-Based Navigation and Interactive Content Modules"
        }

    },
    {
        title: "MTC-ISIMS CodeSell Hackathon Landing Page",
        type: ProjectType.Personal,
        description:
            `Developed an engaging and interactive landing page for the CodeSell Hackathon. The page served as the central hub for event information, showcasing key details, and schedules.`,
        techStack: ["HTML", "Tailwind CSS", "JavaScript"],
        imageUrl: "/codeSell.png",
        sharedLink: {
            liveUrl: "https://mezghani-aymen.github.io/CodeSell/",
            github: "https://github.com/Mezghani-Aymen/CodeSell",
        },
        deepDive: {
            challenges: [
                "Designing an attractive and modern landing page to represent the event",
                "Implementing an accurate real-time countdown timer for the launch",
                "Ensuring the event schedule and layout work perfectly on mobile phones"
            ],
            solutions: [
                "Written a clean JavaScript script to handle the countdown automatically",
                "Leveraged Tailwind CSS to build a fast, responsive, and clean user interface"
            ],
            results: [
                "A professional landing page that effectively builds excitement for the event",
                "A clear and easy-to-read schedule for all participants to follow",
                "A lightweight and fast website that works smoothly on any device"
            ],
            architecture: "Static Landing Page"
        }

    },
];

export default projects;