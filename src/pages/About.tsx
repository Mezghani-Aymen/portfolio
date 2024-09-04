import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <div className="p-6 pt-[6rem] mb-0 text-white" id="about">
            <h1 className="text-[#D76B30] text-4xl font-bold" data-aos="fade-up">About me:</h1>
            <p className="text-[#F5E5D5] text-lg my-4" data-aos="fade-up" data-aos-delay="200">
                Hi, my name is <span className='font-bold text-[#A3C4E0]'>Mezghani Mohamed Aymen</span>. I am a developer specializing in mobile and web applications. I am passionate about creating user-friendly experiences and learning new technologies. Here are some of the skills I am developing.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-9">
                <div className="text-[#A3C4E0] border border-customPrimaryColor rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 w-full md:w-60 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
                    <FontAwesomeIcon icon={faCode} className="text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold text-center">WEB DEVELOPMENT</h2>
                </div>
                <div className="border text-[#A3C4E0] border-customPrimaryColor rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 w-full md:w-60 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold text-center">MOBILE DEVELOPMENT</h2>
                </div>
            </div>
        </div>
    );
};


export default About;