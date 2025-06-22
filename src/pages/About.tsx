import React from 'react';
import 'aos/dist/aos.css';
import Section from 'components/Section';
import MyService from 'components/MyService';

const About = () => {

    return (
        <Section id='about' dataAos=" fade-up " dataAosDelay="200" extratClass='flex items-center justify-center flex-col w-full lg:px-28 relative py-10 sm:px-0 px-3 text-center '>
            <h1 className="text-[#D76B30] text-4xl font-bold w-full " data-aos="fade-up">About me</h1>
            <p className="text-[#F5E5D5] text-lg my-4  text-left" data-aos="fade-up" data-aos-delay="200">
                Hi, my name is <span className='font-bold text-[#A3C4E0]'>Mezghani Mohamed Aymen</span>.
                I am a developer specializing in mobile and web applications.
                I am passionate about creating user-friendly experiences and learning new technologies.
                Here are some of the skills I am developing.
            </p>
            <MyService />
        </Section>
    );
};


export default About;