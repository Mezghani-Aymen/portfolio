import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-screen p-6">
            <div className=" flex justify-between items-center ">
                <h1 className="text-white text-3xl underline-half">
                    <span className=" text-[#D76B30]">P</span>
                    <span >ortfolio</span></h1>
                <nav className="hidden lg:flex space-x-4 text-xl">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#projects" className="text-white hover:text-[#D76B30]">Projects</a>
                        </li>
                        <li>
                            <a href="#services" className="text-white hover:text-[#D76B30]">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-[#D76B30] me-5">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="lg:hidden ">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
                    <ul className="flex flex-col items-center space-y-4">
                        <li>
                            <a href="" className="text-purple-500 hover:text-purple-600">Home</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white hover:text-purple-600">Projects</a>
                        </li>
                        <li>
                            <a href="#services" className="text-white hover:text-purple-600">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-purple-600">Contact</a>
                        </li>
                    </ul>
                    {/* <button onClick={toggleMenu} className="mt-4 text-white focus:outline-none">
                        Close
                    </button> */}
                </div>
            )}
        </header>
    );
};

export default Header;