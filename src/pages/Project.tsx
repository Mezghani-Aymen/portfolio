
import React from 'react';
import ProjectCard from '../components/Cards';
//@ts-ignore
import MTC from '../assets/images/MTC.png'
//@ts-ignore
import codeSell from '../assets/images/codeSell.png'

const Projects = () => {
    const projectData = [
        {
            title: 'Microsoft Tech Club Sfax-ISIMS',
            description: 'Developed an interactive website for MTC-ISIMS, designed to promote the club\'s activities, enhance community engagement, and streamline the registration process for events and memberships.',
            liveLink: 'https://mezghani-aymen.github.io/MTC-landing-page/',
            githubLink: 'https://github.com/Mezghani-Aymen/MTC-landing-page',
            image: MTC,
        },
        {
            title: 'CodeSell',
            description: 'Landing page was designed and developed to promote and facilitate the registration process for the hackathon organized by Microsoft Tech Club ISIM-Sfax',
            liveLink: 'https://mezghani-aymen.github.io/CodeSell/',
            githubLink: 'https://github.com/Mezghani-Aymen/CodeSell',
            image: codeSell,
        }
    ];

    return (

        <section className="pt-[6rem] px-4 md:px-9 overflow-hidden " id="projects">
            <div className=" mx-auto text-left" data-aos="fade-down">
                <h2 className="text-4xl font-bold mb-4 text-[#D76B30]">Featured Projects</h2>
                <p className="mb-8 text-[#E0E0E0]">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.</p>
                <div className="pe-0 sm:pe-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                 gap-8" data-aos="zoom-in-up">
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            image={x}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;