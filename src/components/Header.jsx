import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItems from './NavItems';
import hamburger from '../assets/images/icons/burger.png'

function Header(props) {
    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path;

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "") {
            document.documentElement.style.setProperty('--activeColor', "black");
        } else {
            document.documentElement.style.setProperty('--activeColor', "rgb(var(--blue))");
        }
    }, [location.pathname]);

    return (
        <nav className='flex text-white p-5 justify-between  w-screen'>
            <div className='text-3xl flex justify-between w-auto'>
                <p>Portfolio</p>
            </div>
            <div className='w-96 text-white  hidden sm:block '>
                <ul className={`flex justify-evenly  text-2xl  `}>
                    {props.links.map((route, index) => (
                        <NavItems key={index} type="link" href={route.path} active={isActiveLink(route.path)}>
                            {route.label}
                        </NavItems>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
