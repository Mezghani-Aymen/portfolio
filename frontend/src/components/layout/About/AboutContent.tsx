import React from 'react'
import Principle from './Principle'

export default function AboutContent() {
    return (
        <div className='flex justify-center items-center flex-col' data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg text-left sm:px-16" >
                I’m a passionate web developer who began coding as a curious student turning small ideas into interactive websites.
                Through my internships I gained hands-on experience in both frontend and backend development, which helped me understand how every layer of a website works together.
                Now I enjoy creating projects that combine intuitive, polished interfaces with reliable server-side functionality, delivering fast and scalable solutions.
                <br />
                <br />
                I believe a great website should not only look beautiful but also solve real problems and feel effortless to use.
                Every project is an opportunity to craft something meaningful and impactful while continuing to grow as a developer.
                <br />
                Currently Exploring
                I’m expanding my backend knowledge with deployment workflows, caching, and DevOps fundamentals to build more scalable applications—while keeping my main focus on creating exceptional front-end experiences.
            </p>

            <Principle />
        </div>
    )
}
