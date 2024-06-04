
import { Home, Section, Contact } from '../pages/index';

export const getNavigation = () => {
    return [
        { label: "Home", path: "/" || "", layout: () => <Home />, status: true },
        { label: "Projects", path: "/projects", layout: () => <Section name="Projects" />, status: false },
        { label: "Services", path: "/services", layout: () => <Section name="Services" />, status: false },
        { label: "Contact", path: "/contact", layout: () => <Contact />, status: false }
    ];
};