import { useEffect, useState } from 'react'

export default function useActiveLink({ pathname }: { pathname: string }) {
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        const stored = sessionStorage.getItem("activeLink");
        if (stored) setActiveLink(stored);
        else if (pathname === "/") setActiveLink("home");
    }, [pathname]);

    return { activeLink, setActiveLink }
}