import React from 'react'
import Navbar from '@/components/ui/Navbar'
import { navBarList } from '@/constants/navBarList';

function DesktopNavbar() {
    return (
        <Navbar className={'hidden md:flex items-center space-x-6 xl:space-x-8'}
            links={navBarList}
        />
    )
}

export default DesktopNavbar