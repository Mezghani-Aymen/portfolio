import { useState } from 'react';

const useNavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToTopAndCloseMenu = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setIsOpen(false);
    };

    return {
        isOpen,
        toggleMenu,
        closeMenu,
        scrollToTopAndCloseMenu,
    };
};

export default useNavigationMenu;