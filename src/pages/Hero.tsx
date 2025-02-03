import React, { useEffect, useState } from 'react';
//@ts-ignore
import DOTS from 'vanta/src/vanta.dots';
//@ts-ignore
import image from '../assets/images/mezghani_mohamedAymen.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyCV from '../assets/data/cv.pdf'

import WordRotate from "../@/components/magicui/word-rotate";
export function WordRotateDemo(props: { class: string; text: string[] }) {
    return (
        <WordRotate
            className={props.class}
            words={props.text}
        />
    );
}

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);
    const [dots, setDots] = useState<any>(null);
    const wordsArray = ["Front-end", "Back-end", "Fullstack", "Mobile"];

    useEffect(() => {
        if (!dots) {
            setDots(DOTS({
                el: "#bg-hero",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xd76b30,
                color2: 0xa3c4e0,
                backgroundColor: 0x0,
                spacing: 17.00,
                showLines: false
            }));
        }

        return () => {
            if (dots) dots.destroy();
        };
    }, [dots]);

    return (
        <div id="bg-hero" className='h-full pt-[5rem] ' data-aos="zoom-out" data-aos-delay="200">
            <div className="flex w-full  items-center justify-around flex-wrap p-0 lg:pt-12 px-5 gap-6 ">
                <div className='flex flex-col items-start  text-white md:w-2/4 py-5' data-aos="zoom-out-right" data-aos-delay="400">
                    < h1 className="text-3xl mb-3" >
                        Hello, I’m
                    </h1 >
                    <h1 className="text-4xl font-bold mb-1  text-center md:text-left">
                        Mezghani  Mohamed Aymen
                    </h1>
                    <p className="text-lg mb-4  mx-auto  sm:mx-0">
                        <WordRotateDemo class="text-2xl text-[#D76B30] font-bold " text={wordsArray} />
                    </p>
                    <p className='text-lg  text-[#E0E0E0]' >
                        I am a passionate full-stack developer skilled in building web applications from start to finish. I have hands-on experience with front-end technologies as well as back-end frameworks .I enjoy learning new technologies and am eager to contribute to a team where I can continue to grow and make a positive impact.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href={MyCV} className="bg-[#D76B30] text-white py-2 px-4 rounded hover:bg-[#D76B30]" data-aos-delay="300" data-aos="fade-up" download="MezghaniMohamedAymen.pdf" >Download CV</a>
                        <a href="#projects" className="bg-white text-[#D76B30] py-2 px-4 rounded hover:bg-[#F5E5D5]" data-aos-delay="300" data-aos="fade-up">Projects</a>
                    </div>
                </div >
                <div className="image-background" data-aos="zoom-out-left" data-aos-delay="400" >
                    <div className="image-overlay"></div>
                    <img src={image} alt="profile" className="image h-full w-full object-cover" />
                </div>
            </div >
        </div >
    );
};

export default Hero;
