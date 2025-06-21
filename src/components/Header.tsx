import React from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import useNavigationMenu from 'hooks/useNavigationMenu';


const Header = () => {
    const { toggleMenu, isOpen } = useNavigationMenu();

    return (
        <header className="w-screen p-6 fixed top-0 z-20 bg-black">
            <div className=" flex justify-between items-center ">
                <h1 className="text-white text-3xl underline-half">
                    <span className=" text-[#D76B30]">P</span>
                    <span >ortfolio</span>
                </h1>
                <Navbar />

                <div className="sm:hidden ">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (<NavbarMobile />)}
        </header>
    );
};

export default Header;