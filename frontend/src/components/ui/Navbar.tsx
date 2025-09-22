import React from 'react'
import { Link } from 'react-scroll';

interface INavBarProps {
    children?: React.ReactNode;
    className: string;
    links: any[];
    linksClassName?: string;
}

const Navbar = (
    { className, children, links }: INavBarProps
) => {
    return (
        <nav className={className}>
            {
                links?.map((item, index: number) => (
                    <Link key={index}
                        to={item.path}
                        smooth={item.smooth}
                        duration={item.duration}
                        spy={true}
                        className={`transition-colors hover:text-[var(--primary)] cursor-pointer ${item.className ?? ''}`}>
                        {item.label}
                    </Link>
                ))
            }
            {children}
        </nav>
    )
}

export default Navbar