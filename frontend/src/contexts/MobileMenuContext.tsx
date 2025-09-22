import { createContext, useContext, useState, ReactNode } from 'react';

interface MobileMenuContextProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

export const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(undefined);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
            {children}
        </MobileMenuContext.Provider>
    );
};

export const useMobileMenu = () => {
    const context = useContext(MobileMenuContext);
    if (!context) throw new Error('useMobileMenu must be used within MobileMenuProvider');
    return context;
};
