// Projects.tsx

import React from 'react';
import ProjectCard from '../components/Cards';

const Projects = () => {
    const projectData = [
        {
            title: 'TWINDER',
            description: 'A live geolocation app for finding tweets and twitter users around you.',
            liveLink: 'https://example.com/twinder', // Update with actual link
            githubLink: 'https://github.com/example/twinder',
            image: '/path/to/twinder-image.png', // Update with actual image path
        },
        // {
        //     title: 'LIVENTS',
        //     description: 'A video streaming app with live geolocation for streaming events.',
        //     liveLink: 'https://example.com/livents', // Update with actual link
        //     githubLink: 'https://github.com/example/livents',
        //     image: '/path/to/livents-image.png', // Update with actual image path
        // },
        // {
        //     title: 'MOOVE',
        //     description: 'Mobile app for booking instant pickup & dropoff across major cities.',
        //     liveLink: 'https://example.com/moove', // Update with actual link
        //     githubLink: 'https://github.com/example/moove',
        //     image: '/path/to/moove-image.png', // Update with actual image path
        // },
        // {
        //     title: 'MOOVE',
        //     description: 'Mobile app for booking instant pickup & dropoff across major cities.',
        //     liveLink: 'https://example.com/moove', // Update with actual link
        //     githubLink: 'https://github.com/example/moove',
        //     image: '/path/to/moove-image.png', // Update with actual image path
        // },
    ];

    return (
        <section className="py-10 px-4 md:px-5 overflow-x-hidden ">
            <div className=" mx-auto text-left">
                <h2 className="text-4xl font-bold mb-4">Featured Projects:</h2>
                <p className="mb-8">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.</p>
                <div className="pe-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                 gap-8">
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;