'use client'

import React from 'react';
import Section from '../../ui/Section';
import AboutContent from './AboutContent';
import { ArcTimeline } from '../../ui/arcTimeLine';
import { timelineData } from '@/src/constants/arcTimeLine';

const About = () => {

    return (
        <Section dataAos="fade-up" dataAosDelay="200" className="max-w-8xl mx-auto flex flex-col items-center px-6 justify-between py-14 gap-7" id="about">
            <h1 className="text-[#D76B30] text-4xl font-bold w-full text-center " data-aos="fade-up">About me</h1>
            <AboutContent />
            {timelineData.length != 0 && <div className='w-full p-0' data-aos="fade-down" data-aos-delay={"200"}>
                <h1 className="text-[#D76B30] text-2xl font-bold w-full text-center "  >My career</h1>
                <ArcTimeline data={timelineData} />
            </div>}
        </Section>
    );
};


export default About;