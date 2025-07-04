import React from 'react';
import { navBarList } from 'constants/navBarList';
import NavbarItem from './NavbarItem';
import { NavbarMobileProps } from 'types/navBarMobile';

const NavbarMobile: React.FC<NavbarMobileProps> = ({ scrollToTopAndCloseMenu, closeMenu }) => {
    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <ul className="flex flex-col items-center space-y-4 text-xl">
                {navBarList.map((item, idx) => (
                    <NavbarItem
                        key={item.label}
                        path={item.path}
                        smooth={item.smooth}
                        duration={item.duration}
                        label={item.label}
                        onClick={idx === 0 ? scrollToTopAndCloseMenu : closeMenu}
                        className={item.className}
                    />
                ))}
            </ul>
        </div>
    );
};

export default NavbarMobile;