import { Download, FolderGit2 } from 'lucide-react';
import React from 'react'
import ProfileImage from './ProfileImage';

function HeroContent() {
    // const wordsArray = [
    //     "Full-Stack Developer",
    //     "DevOps Enthusiast & Testing",
    //     "AI-Integrator",
    // ];

    return (

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 justify-between  ">
            {/* Left text */}
            <div
                className="flex flex-col items-start text-white md:w-1/2 py-6 gap-4"
                data-aos="zoom-out-right"
            >
                {/* <h1 className="text-3xl sm:text-4xl font-light">Hello, I’m</h1> */}
                {/* <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    Mezghani Mohamed Aymen
                </h2> */}

                <h1 className="text-3xl sm:text-4xl font-light">Tailored for You</h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[var(--primary)]  ">
                    Custom Web Solutions
                </h2>

                {/* <div className="text-4xl sm:text-5xl font-bold text-[#D76B30] h-12"> */}
                {/* TODO: Replace with WordRotate later */}
                {/* {wordsArray[0]} */}
                {/* </div> */}

                <p className="text-lg text-gray-200 leading-relaxed">
                    I craft complete digital experiences—from intuitive designs to powerful systems behind the scenes.
                    I love turning ideas into tools people can actually use.
                    I’m currently exploring ways to speed up development with CI/CD workflows, testing, and AI integration.
                    {/* I really enjoy making complete web applications, creating everything
                    from the user-friendly design you see on the screen to the strong
                    systems that work behind it. I'm always excited to build useful
                    tools. Currently, I'm diving into making development smoother
                    (DevOps), building automated testing solutions, and integrating
                    artificial intelligence (AI). */}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <a
                        href="/MezghaniMohamedAymen.pdf"
                        download="MezghaniMohamedAymen.pdf"
                        className="inline-flex items-center gap-2 bg-[#D76B30] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-[#b55220] active:bg-[#8a3d17] transition justify-center"
                        aria-label="Download CV"
                    >
                        <Download className="h-5 w-5" />
                        <span className='hidden sm:block'>Download</span>
                        <span className=''>CV</span>
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 bg-white text-[#D76B30] px-5 py-2 rounded-lg font-medium shadow-md hover:bg-gray-200 active:bg-gray-300 transition justify-center"
                        aria-label="View Projects"
                    >
                        <FolderGit2 className="h-5 w-5" />
                        Projects
                    </a>

                    {/* <a
                        href="#projects"
                        className="sm:inline-flex items-center gap-2 bg-transparent border border-white text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-[#D76B30] active:bg-[#D76B30] transition justify-center hidden"
                        aria-label="View Projects"
                    >
                        <FolderGit2 className="h-5 w-5" />
                        Projects
                    </a> */}
                </div>
            </div>

            {/* Right placeholder image / visual */}
            <ProfileImage />
        </div>
    )
}

export default HeroContent