
import React from 'react';
import Section from '../../ui/Section';
import ProjectContent from './ProjectContent';

const Projects = () => {

    return (
        <Section className="max-w-8xl mx-auto flex flex-col items-center px-6 justify-between py-14 gap-10" id="projects">
            <h1 className='text-4xl text-[var(--primary)]'>My Projects</h1>
            <ProjectContent />
        </Section>

    );
};

export default Projects;