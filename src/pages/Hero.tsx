import React, { useEffect, useState } from 'react';
//@ts-ignore
import DOTS from 'vanta/src/vanta.dots';
//@ts-ignore
import image from '../assets/images/mezghani_mohamedAymen.png'

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
    const [dots, setDots] = useState<any>(null);
    const wordsArray = ["Front-end", "Back-end", "Fullstack"];

    useEffect(() => {
        if (!dots) {
            setDots(DOTS({
                el: "#about",
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
    }, []);

    return (
        <div id="about" className='md:h-[555px] h-auto '>

            <div className="flex w-full  items-center justify-around flex-wrap pb-5 md:py-14 px-5 gap-6 ">
                <div className='flex flex-col items-start  text-white md:w-2/4 py-5'>
                    < h1 className="text-3xl mb-3" >
                        Hello, I’m
                    </h1 >
                    <h1 className="text-4xl font-bold mb-1  text-center md:text-left">
                        Mezghani  Mohamed Aymen
                    </h1>
                    <p className="text-lg mb-4 ">
                        <WordRotateDemo class="text-2xl text-[#D76B30] font-bold" text={wordsArray} />
                    </p>
                    <p className='text-lg ' >
                        I am a passionate full-stack developer skilled in building web applications from start to finish. I have hands-on experience with front-end technologies as well as back-end frameworks .I enjoy learning new technologies and am eager to contribute to a team where I can continue to grow and make a positive impact.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href='' className="bg-[#D76B30] text-white py-2 px-4 rounded hover:bg-[#D76B30]">Download CV</a>
                        <a href="#projects" className="bg-white text-[#D76B30] py-2 px-4 rounded hover:bg-[#F5E5D5]">Projects</a>
                    </div>
                </div >
                <div className="image-background">
                    <div className="image-overlay"></div>
                    <img src={image} alt="profile" className="image h-full w-full object-cover" />
                </div>
            </div >
        </div >
    );
};

export default Hero;