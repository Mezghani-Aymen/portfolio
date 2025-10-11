"use client";
import React from 'react'
import ProjectShowcase from './ProjectShowcase'
import ProjectActions from './ProjectActions';
import { ProjectNavigationProvider } from '@/src/contexts/ProjectNavigationContext';
import projects from '@/src/constants/projects';

function ProjectContent() {

    return (
        <ProjectNavigationProvider projects={projects}>
            <div className="w-full flex items-center justify-center gap-10 flex-col">
                <ProjectShowcase />
                <ProjectActions />
            </div>
        </ProjectNavigationProvider>
    )
}

export default ProjectContent