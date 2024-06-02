import React, { useEffect, useState } from 'react';
// import gitIcon from '../assets/images/icons/github.png'
// import eyeIcon from '../assets/images/icons/eye.png'
// import detailsIcon from '../assets/images/icons/file-circle-info.png'
import { fetchLogo } from "../services/api";

import '../assets/styles/style.css';

function Cards(props) {
    const { title, type, icon, imgSrc, links } = props;

    const isDisabled = true
    const cardClass = type === 'Projects'
        ? 'flex flex-col text-white justify-center items-center md:py-4 md:px-4 bg_card rounded-3xl p-4 text-center'
        : 'flex flex-col text-white justify-center items-center md:py-4 md:px-4 bg_card rounded-3xl';


    const [logos, setlogo] = useState([]);
    useEffect(() => {
        const getLogo = async () => {
            try {
                const result = await fetchLogo(links);
                setlogo(result);
            } catch (error) {
                console.error("Error fetching images : ", error);
            }
        }
        getLogo();
    }, [links]);

    return (
        <div className={cardClass}>
            {type === 'Projects' && (
                <div className="rounded-2xl overflow-hidden text-black w-auto">
                    <img src={imgSrc} alt="" />
                </div>
            )}
            <h3 className='text-2xl mb-3 text-center mt-5'><span>{icon ? icon : null}</span> {title}</h3>
            <ul className={`my-5 ${type === 'Projects' ? 'flex justify-evenly mt-5 w-full' : 'grid grid-cols-5 md:gap-6 md:grid-cols-8 gap-3'}`}>

                {Object.keys(links).map((key, index) => {
                    const linkValue = links[key];
                    return (
                        <li key={index}>
                            <a className='shadow' href={linkValue !== "null" ? linkValue : '/'}>
                                {/* Use dynamic icons fetched from fetchIcons */}
                                <img src={logos[key]} alt={key} className="w-10 h-10" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Cards
