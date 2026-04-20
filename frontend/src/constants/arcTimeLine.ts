import { Briefcase, Code, GraduationCap, Boxes, Calendar, Cpu, Globe, LayoutDashboard, Search, ShieldCheck, Trophy, Users } from "lucide-react"
import { IArcTimelineItem } from "../types/arcTimeLine.types"

export const timelineData: IArcTimelineItem[] = [
    {
        time: "2026",
        steps: [
            {
                icon: GraduationCap,
                content: "Currently an engineering student in computer science",
            },
        ],
    },
    {
        time: "2025",
        steps: [
            {
                icon: Briefcase,
                content: "Worked as a web developer intern at PivaSoftware",
            },
            {
                icon: Cpu,
                content: "Built an HR web app with AI-powered",
            },
            {
                icon: ShieldCheck,
                content: "Implemented secure authentication using Keycloak and JWT",
            },
            {
                icon: Boxes,
                content: "Deployed a microservices system using Docker",
            },
            {
                icon: GraduationCap,
                content: "Graduated with a Bachelor's degree in Computer Science (ISIMS)",
            },
        ],
    },
    {
        time: "2024",
        steps: [
            {
                icon: Briefcase,
                content: "Completed a web development internship building a CMS",
            },
            {
                icon: LayoutDashboard,
                content: "Created an admin dashboard for content management",
            },
            {
                icon: Users,
                content: "Led the web team at Google Student Club ISIMS",
            },
            {
                icon: Trophy,
                content: "Participated in Microsoft Technologies Camp as a prototype designer",
            },
            {
                icon: Code,
                content: "Developed a hackathon dashboard with a team",
            },
        ],
    },
    {
        time: "2023",
        steps: [
            {
                icon: Globe,
                content: "Built a website for Microsoft Tech Club ISIMS",
            },
            {
                icon: Calendar,
                content: "Created a landing page for CodeSell hackathon",
            },
            {
                icon: Users,
                content: "Organized a hackathon and managed participants",
            },
            {
                icon: Search,
                content: "Worked as a data researcher at AIESEC event",
            },
        ],
    },
]