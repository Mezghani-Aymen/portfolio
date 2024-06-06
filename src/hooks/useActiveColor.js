import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useActiveColor = (isMobile) => {
    const location = useLocation();
    console.log(isMobile);
    useEffect(() => {
        if (isMobile) {
            document.documentElement.style.setProperty('--activeColor', "rgb(var(--blue))");
        }
        else {
            if (location.pathname === "/" || location.pathname === "") {
                document.documentElement.style.setProperty('--activeColor', "black");
            } else {
                document.documentElement.style.setProperty('--activeColor', "rgb(var(--blue))");
            }
        }
    }, [location.pathname, isMobile]);
};

export default useActiveColor;
