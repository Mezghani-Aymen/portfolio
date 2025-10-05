import { useRouter } from "next/navigation";

interface NavbarActionsProps {
    setActiveLink: (link: string) => void;
}

const useNavbarActions = ({ setActiveLink }: NavbarActionsProps) => {
    const router = useRouter();

    const handleSetActive = (section: string) => {
        setActiveLink(section);
        sessionStorage.setItem("activeLink", section);
    };

    const handleRedirectScroll = (section: string) => {
        sessionStorage.setItem("scrollToSection", section);
        sessionStorage.setItem("activeLink", section);
        router.push("/");
    };

    return { handleSetActive, handleRedirectScroll };
};

export default useNavbarActions;