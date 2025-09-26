import React from 'react'
import { useProjectNavigationContext } from '@/src/contexts/ProjectNavigationContext';
import { ChevronLeft, ChevronRight } from 'lucide-react'



function ProjectActions() {

    const { prevProject, nextProject } = useProjectNavigationContext();

    return (
        <div className='w-full flex items-center justify-center gap-4'>

            <button
                onClick={prevProject}
                className="bg-transparent border border-[var(--primary)] hover:bg-[var(--primary)] p-2 rounded text-[var(--primary)] transition-colors cursor-pointer hover:text-white"
            >
                <ChevronLeft className="h-5 w-5 " />
            </button>

            <button
                onClick={nextProject}
                className="bg-transparent border border-[var(--primary)] hover:bg-[var(--primary)] p-2 rounded text-[var(--primary)] transition-colors cursor-pointer hover:text-white"
            >
                <ChevronRight className="h-5 w-5 " />
            </button>
        </div>
    )
}

export default ProjectActions