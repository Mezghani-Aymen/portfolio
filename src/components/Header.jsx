import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavItems from './NavItems';

function Header(props) {
    const location = useLocation();
    const [active, setActive] = useState(false);

    // Function to determine if a link is active
    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className='text-white p-5 flex justify-between absolute top-0 w-screen'>
            <div className=''>
                <p>Portfolio</p>
            </div>
            <div className='w-60 text-white'>
                <ul className='flex justify-between'>
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
