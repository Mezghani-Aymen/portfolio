import React from 'react'
import { Logo } from '@/components/ui/Logo'
import { useMobileMenu } from '@/contexts/MobileMenuContext'
import MobileMenu from '@/components/layout/Header/MobileMenu'
import MobileMenuToggle from '@/components/layout/Header/MobileMenuToggle'
import DesktopNavbar from '@/components/layout/Header/DesktopNavbar'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { cn } from '@/lib/utils'

function HeaderContent() {
    const { isMobileMenuOpen } = useMobileMenu()
    const scrollDirection = useScrollDirection(50)

    const isHidden = scrollDirection === 'down' && !isMobileMenuOpen

    return (
        <div className={cn(
            "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-b-[var(--primary)] transition-transform duration-500 ease-in-out",
            isHidden ? "-translate-y-full" : "translate-y-0"
        )}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-14 sm:h-16">
                <Logo type="text" primaryText="Mezghani" secondaryText="Aymen" />
                <DesktopNavbar />
                <MobileMenuToggle />
                {isMobileMenuOpen && <MobileMenu />}
            </div>
        </div>

    )
}

export default HeaderContent