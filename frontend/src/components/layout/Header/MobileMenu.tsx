import React from 'react'
import Navbar from '@/components/ui/Navbar';
import { navBarList } from '@/constants/navBarList';

const MobileMenu = () => {
    return (
        <div className={`md:hidden absolute top-full right-1/12 sm:right-1/12 mt-2 w-48 backdrop-blur-sm border rounded-xl shadow-lg z-50 transition-all duration-300 bg-black border-[var(--primary)]`}> {/* Mobile menu :  dark:bg-[var(--bg-gray-900-095)] dark:border-[var(--border-gray-700-3)] bg-[var(--bg-white-095)] border-[var(--border-gray-300-3)]*/}
            <div className="p-4">
                <Navbar className={'flex flex-col space-y-3'}
                    links={navBarList}
                    linksClassName='text-center text-sm font-medium'
                >
                </Navbar>
            </div>
        </div>
    )
}

export default MobileMenu