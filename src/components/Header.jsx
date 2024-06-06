import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItems from './NavItems';
import hamburger from '../assets/images/icons/burger.png';
import useActiveColor from '../hooks/useActiveColor';
import useIsMobile from '../hooks/useIsMobile';

function Header(props) {
    const location = useLocation();
    const isActiveLink = (path) => location.pathname === path;


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobile = useIsMobile()
    useActiveColor(mobile);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='flex text-white p-5 justify-between w-screen'>
            <div className='text-3xl flex justify-between w-auto'>
                <p>Portfolio</p>
            </div>
            <div className='sm:hidden'>
                <img src={hamburger} alt="Menu" className="w-10 h-10" onClick={toggleMobileMenu} />
            </div>
            {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 h-screen w-screen bg-black z-10 flex flex-col items-center justify-center">
                    <ul className="flex flex-col items-center">
                        {props.links.map((route, index) => (
                            <NavItems key={index} type="link" href={route.path} active={isActiveLink(route.path)} action={closeMobileMenu}>
                                {route.label}
                            </NavItems>
                        ))}
                    </ul>
                </div>
            )}
            <div className='w-96 text-white hidden sm:block'>
                <ul className='flex justify-evenly text-2xl'>
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
