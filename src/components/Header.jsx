import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        handleLinkClick(); 
    };
    return (
        <header className="w-screen p-6 fixed top-0 z-20 bg-black">
            <div className=" flex justify-between items-center ">
                <h1 className="text-white text-3xl underline-half">
                    <span className=" text-[#D76B30]">P</span>
                    <span >ortfolio</span></h1>
                <nav className="hidden sm:flex space-x-4 text-xl">
                    <ul className="flex space-x-4">
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>

                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="contact" smooth={true} duration={500} className=" me-5">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="sm:hidden ">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
                    <ul className="flex flex-col items-center space-y-4 text-xl">
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="" smooth={true} duration={500} onClick={scrollToTop}>
                                Home
                            </Link>
                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>
                                Projects
                            </Link>
                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="skills" smooth={true} duration={500} onClick={handleLinkClick}>
                                Skills
                            </Link>
                        </li>
                        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
                            <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;