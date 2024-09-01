import React from 'react';
//@ts-ignore
import ShineBorder from "../@/components/magicui/shine-border";
//@ts-ignore
import { MagicCard } from "../@/components/magicui/magic-card";


interface ProjectCardProps {
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveLink, githubLink, image }) => {
    return (
        <MagicCard
            className="relative flex w-full flex-col items-center justify-center"
            gradientColor={"#f5e5d577"}
        >
            <ShineBorder
                className="overflow-hidden rounded-lg border border-customAccentColor  md:shadow-xl bg-transparent text-[#F5E5D5]"
            >
                <div className='h-40 mb-3 rounded flex justify-center items-center'>
                    <img src={image} alt={title} className="rounded  object-cover h-full" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#D76B30]">{title}</h3>
                <p className="mb-4 text-center">{description}</p>
                <div className="flex gap-2">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#D76B30] text-[#F5E5D5] py-2 px-4 rounded hover:bg-transparent hover:text-[#F5E5D5] hover:border hover:border-customPrimaryColor relative z-10"
                    >
                        View Live
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-[#E0E0E0] text-[#D76B30]  py-2 px-4 rounded hover:bg-transparent hover:text-[#F5E5D5] hover:border hover:border-customPrimaryColor relative z-10"
                    >
                        Github Repo
                    </a>
                </div>
            </ShineBorder>
        </MagicCard>
    );
};

export default ProjectCard;

