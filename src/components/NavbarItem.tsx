import React from 'react'
import { Link } from 'react-scroll';
import { INavbarItemProps } from 'types/NavbarItem';

const NavbarItem = (
    { path, label, smooth = true, duration = 500, onClick, className }: INavbarItemProps
) => {
    const HEADER_HEIGHT = 40;

    return (
        <li className='cursor-pointer text-white hover:text-[#D76B30]'>
            <Link to={path} smooth={smooth} duration={duration} offset={-HEADER_HEIGHT} onClick={onClick} className={className}>{label}</Link>
        </li>
    )
}

export default NavbarItem