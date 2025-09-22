import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { MenuToggleButton } from "@/components/ui/MenuToggleButton";

export default function MobileMenuToggle() {
    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
    return (
        <MenuToggleButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    );
}
