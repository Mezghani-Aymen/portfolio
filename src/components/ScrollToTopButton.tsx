import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`hover:bg-secondary hover:text-primary w-[45px] h-[45px] z-20 fixed hidden sm:block  bottom-5 right-5 rounded-full bg-primary text-white shadow-lg transition-opacity duration-300 justify-center items-center  ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;