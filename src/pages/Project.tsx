
import React from 'react';
import ProjectCard from '../components/Cards';
//@ts-ignore
import x from '../assets/images/mtx.png'

const Projects = () => {
    const projectData = [
        {
            title: 'Microsoft Tech Club Sfax-ISIMS',
            description: 'A live geolocation app for finding tweets and twitter users around you.',
            liveLink: '',
            githubLink: 'https://github.com/Mezghani-Aymen/MTC-website-Project_Club',
            image: 'mtx.png',
        }
    ];

    return (

        <section className="pt-[6rem] px-4 md:px-9 overflow-hidden " id="projects">
            <div className=" mx-auto text-left" data-aos="fade-down">
                <h2 className="text-4xl font-bold mb-4 text-[#D76B30]">Featured Projects</h2>
                <p className="mb-8 text-[#E0E0E0]">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.</p>
                <div className="pe-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
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