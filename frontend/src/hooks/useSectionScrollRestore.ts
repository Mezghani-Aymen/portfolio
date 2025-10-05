import { useEffect } from 'react'
import { scroller } from "react-scroll";

export function useSectionScrollRestore(pathname: string) {
    useEffect(() => {
        if (pathname === "/") {
            const section = sessionStorage.getItem("scrollToSection");
            if (section) {
                setTimeout(() => {
                    scroller.scrollTo(section, {
                        smooth: true,
                        duration: 500,
                        offset: -80,
                    });
                    sessionStorage.removeItem("scrollToSection");
                }, 200);
            }
        }
    }, [pathname]);
}