import { Briefcase, Code, Award, CheckCircle } from "lucide-react"
import { IArcTimelineItem } from "../types/arcTimeLine.types"

export const timelineData: IArcTimelineItem[] = [
    {
        time: "2025",
        steps: [
            {
                icon: Code,
                content:
                    "Started building a full-stack HR platform using Next.js and NestJS.",
            },
            {
                icon: Briefcase,
                content:
                    "Designed microservices architecture and implemented authentication and authorization.",
            },
            {
                icon: Briefcase,
                content:
                    "Led backend architecture decisions and improved system scalability.",
            },
            {
                icon: Briefcase,
                content: "Delivered production-ready features and APIs.",
            },
        ],
    },
    {
        time: "2024",
        steps: [
            {
                icon: Award,
                content:
                    "Earned certifications in Web Development and Cloud Fundamentals.",
            },
            {
                icon: CheckCircle,
                content:
                    "Participated in tech clubs and hackathons focused on real-world problem solving.",
            },
        ],
    },
    {
        time: "2023",
        steps: [
            {
                icon: Code,
                content:
                    "Built multiple React projects and learned TypeScript best practices.",
            },
        ],
    },
]
