import React, { useEffect, useState } from 'react';
import photo from "../assets/images/mezghani_mohamedAymen.png";
import "../assets/styles/style.css";
import CV from '../assets/data/cv.pdf';
import { fetchLogo } from "../services/api";
import Buttons from '../components/Buttons';
import NavItems from '../components/NavItems';

function Home() {
    const [logos, setLogos] = useState({});
    const [list, setList] = useState([])
    const socialArray = [
        {
            name: "facebook",
            path: "https://www.facebook.com/MezghaniMohamedAymen"
        },
        {
            name: "github",
            path: "https://github.com/Mezghani-Aymen"
        },
        {
            name: "linkedin",
            path: "https://www.linkedin.com/in/mezghani-med-aymen/"
        },
    ];

    useEffect(() => { setList(["facebook", "github", "linkedin"]) }, [])


    useEffect(() => {
        const getLogo = async () => {
            try {
                const result = await fetchLogo(list, null);
                setLogos(result);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        getLogo();

    }, [list]);

    return (
        <>
            <div className="shape"></div>
            <main className='justify-around w-screen flex items-center text-white sm:px-0 px-5 sm:py-5 pb-5 flex-wrap md:py-0 xl:mt-8 mt-3'>
                <div className="mx-5 text-2xl flex flex-col">
                    <div className='mb-9 h-auto'>
                        <p>Hey there, I'm</p>
                        <p id='Span_Name' className='text-4xl my-3'>Mezghani Mohamed Aymen</p>
                        <p id='Span_Job' className='text-3xl c-bleu'>Software Development</p>
                    </div>
                    <p id='description'>Let's team up and make awesome stuff online. <br />
                        Let's build something awesome together</p>
                    <div className='mx-auto w-max my-5'>
                        <ul className='my-5 flex justify-between mt-5 w-48'>
                            {socialArray.map((item, index) => (
                                < NavItems
                                    key={index}
                                    type="link"
                                    href={item.path}
                                >
                                    <img src={logos[item.name]} alt={item.name} className="w-10 h-10" />
                                </NavItems>
                            ))}
                        </ul>
                    </div>
                    <Buttons text={<a href={CV} download="Mohamed Aymen_Mezghani-CV">Download CV</a>} className="btn-home glassmorphism py-2 px-11 w-auto mx-auto" />
                </div>
                <div className='rounded-3xl overflow-hidden img_container sm:my-6 mt-9' style={{ width: '390px' }}>
                    <img alt='Img_Profile' src={photo} className='w-full h-full' />
                </div>
            </main >
        </>
    );
}

export default Home;