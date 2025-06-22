import React from 'react'
import NavbarItem from './NavbarItem';
import { navBarList } from 'constants/navBarList';

const Navbar = () => {
    return (
        <nav className="hidden sm:flex space-x-4 text-xl">
            <ul className="flex space-x-4">
                {navBarList.map((item, idx) => (
                    idx !== 0 ? (
                        <NavbarItem
                            key={idx}
                            path={item.path}
                            smooth={item.smooth}
                            duration={item.duration}
                            label={item.label}
                        />
                    ) : null)
                )}
            </ul>
        </nav>
    )
}

export default Navbar