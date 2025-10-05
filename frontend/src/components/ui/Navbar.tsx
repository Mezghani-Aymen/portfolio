import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import useActiveLink from "@/src/hooks/useActiveLink";
import useNavbarActions from "@/src/hooks/useNavbarActions";
import { useSectionScrollRestore } from "@/src/hooks/useSectionScrollRestore";
import Link from "next/link";

interface INavBarProps {
    children?: React.ReactNode;
    className: string;
    links: any[];
}

const Navbar = ({ className, children, links }: INavBarProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const { activeLink, setActiveLink } = useActiveLink({ pathname })
    const { handleSetActive, handleRedirectScroll } = useNavbarActions({ setActiveLink });
    useSectionScrollRestore(pathname)


    return (
        <nav className={className}>
            {links?.map((item, index: number) => {
                // 🏠 Home link
                if (item.path === "") {
                    return (
                        <a
                            key={index}
                            onClick={() => {
                                router.push("/");
                                handleSetActive("hero");
                            }}
                            className={`transition-colors hover:text-[var(--primary)] cursor-pointer 
                ${activeLink === "hero" ? "text-[var(--primary)]" : ""} 
                ${item.className ?? ""}`}
                        >
                            {item.label}
                        </a>
                    );
                }

                // 🌍 Page links
                if (item.path.startsWith("/")) {
                    return (
                        <Link
                            key={index}
                            href={item.path}
                            onClick={() => handleSetActive(item.path)}
                            className={`transition-colors hover:text-[var(--primary)] cursor-pointer 
                            ${activeLink === item.path ? "text-[var(--primary)]" : ""} 
                            ${item.className ?? ""}`}

                        >
                            {item.label}
                        </Link>
                    );
                }

                // 📜 Scroll links (only when on home)
                if (pathname === "/") {
                    return (
                        <ScrollLink
                            key={index}
                            to={item.path}
                            smooth={item.smooth}
                            duration={item.duration}
                            spy={true}
                            offset={-80}
                            onSetActive={() => handleSetActive(item.path)}
                            className={`transition-colors hover:text-[var(--primary)] cursor-pointer 
                ${activeLink === item.path ? "text-[var(--primary)]" : ""} 
                ${item.className ?? ""}`}
                        >
                            {item.label}
                        </ScrollLink>
                    );
                }

                // From another page → go to home then scroll
                return (
                    <span
                        key={index}
                        onClick={() => handleRedirectScroll(item.path)}
                        className={`transition-colors hover:text-[var(--primary)] cursor-pointer 
              ${activeLink === item.path ? "text-[var(--primary)]" : ""} 
              ${item.className ?? ""}`}
                    >
                        {item.label}
                    </span>
                );
            })}
            {children}
        </nav >
    );
};

export default Navbar;