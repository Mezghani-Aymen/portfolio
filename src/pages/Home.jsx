import React, { useEffect, useState } from 'react';
import photo from "../assets/images/mezghani_mohamedAymen.png";
import "../assets/styles/style.css";
import Button from '../components/Buttons'
import { fetchLogo } from "../services/api";
import { Link } from 'react-router-dom';
import ii from "../assets/images/icons/github.png";
import Buttons from '../components/Buttons';

function Home() {
    const [logos, setlogo] = useState([]);

    useEffect(() => {
        const getLogo = async () => {
            try {
                const result = await fetchLogo("Home",);
                setlogo(result);
            } catch (error) {
                console.error("Error fetching images : ", error);
            }
        }
        getLogo();

    }, []);
    const socialArray =
        [
            {
                name: "facebook",
                path: ""
            },
            {
                name: "github",
                path: ""
            },
            {
                name: "linkdin",
                path: ""
            },
        ]
    const className = (false ? "nav-link active " : "nav-link" && true ? " shadow-blue" : "");

    const href = ""
    return (
        <>
            <div className="shape"></div>
            <main className='justify-around w-screen flex items-center text-white sm:px-0 px-5 sm:py-5 pb-5 flex-wrap md:py-0 xl:mt-8 mt-3 '>
                <div className="mx-10  text-2xl flex flex-col  ">
                    <div className='mb-9 h-auto'>
                        <p>Hey there , I'm</p>
                        <p id='Span_Name ' className='text-4xl my-3'>Mezghani Mohamed Aymen</p>
                        <p id='Span_Job' className='text-3xl c-bleu '>Software  Development</p>
                    </div>
                    <p id='discription'>Let's team up and make awesome stuff online. <br />
                        Let's build something awesome together</p>
                    <div className='mx-auto w-max my-5'>
                        <ul className='my-5 flex justify-between mt-5 w-48'>
                            <Link to={href} className={className}> <img src={ii} alt={""} className="w-10 h-10" /></Link>
                            <Link to={href} className={className}> <img src={ii} alt={""} className="w-10 h-10" /></Link>
                            <Link to={href} className={className}> <img src={ii} alt={""} className="w-10 h-10" /></Link>
                            {/* {socialArray.map((item, index) => {
                                return (
                                    <NavItems
                                        key={index}
                                        type="link"
                                        href={item.path}
                                    >
                                        <img src={item.name} alt={key} className="w-10 h-10" />
                                    </NavItems>

                                );
                            })} */}
                        </ul>
                    </div>
                    <Buttons text={<span>Download CV</span>} className="btn-home glassmorphism py-2 px-11  w-auto  mx-auto " />
                </div>
                <div className='rounded-3xl overflow-hidden img_container sm:my-6 mt-9' style={{ width: '390px' }}>
                    <img alt='Img_Profile' src={photo} className=' w-fill h-fill' />
                </div>
            </main >
        </>
    )
}

export default Home