import React, { useEffect, useState } from 'react';
import { fetchLogo } from "../services/api";
import '../assets/styles/style.css';
import NavItems from './NavItems';
// import Overlay from './Overlay';
import { click } from '@testing-library/user-event/dist/click';


function Cards(props) {
    const { title, type, imgSrc, links, skills, list } = props;

    const cardClass = type === 'Projects'
        ? 'flex flex-col text-white justify-center items-center md:py-4 md:px-4 bg_card rounded-3xl p-4 text-center relative '
        : 'flex flex-col text-white justify-center items-center md:py-4 md:px-4 bg_card rounded-3xl';

    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayContent, setOverlayContent] = useState(null);

    const handleNavItemClick = (key) => {
        // const details = links[key].details || [];
        // console.log(details);
        // setOverlayContent({ key, details });
        setOverlayVisible(true);

    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        // setOverlayContent(null);
    };

    const [logos, setlogo] = useState([]);
    useEffect(() => {
        if (type === "Projects") {
            const getLogo = async () => {
                try {
                    const result = await fetchLogo(list, type);
                    setlogo(result);
                } catch (error) {
                    console.error("Error fetching images : ", error);
                }
            }
            getLogo();
        }
    }, [list, type]);
    useEffect(() => {
        if (type === "Services") {
            const getLogo = async () => {
                try {
                    const result = await fetchLogo(list, type);
                    setlogo(result);
                } catch (error) {
                    console.error("Error fetching images : ", error);
                }
            }
            getLogo();
        }
    }, [list, type]);

    const arrayIcons = type === "Projects" ? Object.keys(links) : skills
    return (
        <div className={cardClass}>
            {type === 'Projects' && (
                <div className="rounded-2xl overflow-hidden text-black w-auto">
                    <img src={imgSrc} alt="" />
                </div>
            )}
            <h3 className='text-2xl mb-3 text-center mt-5 mx-2'>{title}</h3>
            <ul className={`my-5 ${type === 'Projects' ? 'flex justify-evenly mt-5 w-full' : 'grid grid-cols-5 md:gap-6 xl:grid-cols-8 md:grid-cols-6 gap-3'}`}>
                {arrayIcons.map((key, index) => {
                    return (
                        <NavItems
                            key={index}
                            shadow={true}
                            type={type === "Projects" ? "link" : "null"}
                            href={type === "Projects" && index === 2 ? "null" : type === "Projects" ? links[key] : "null"}
                            action={type === "Projects" && index === 2 ? () => handleNavItemClick(key) : null}
                        >
                            <img src={logos[key]} alt={key} className="w-10 h-10" />
                        </NavItems>

                    );
                })}
            </ul>
            {/* 
            {overlayVisible && (
                <Overlay closeOverlay={closeOverlay} content={overlayContent} />
            )} */}
        </div >
    )
}

export default Cards
