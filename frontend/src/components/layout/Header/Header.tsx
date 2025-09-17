'use client';
import React from 'react';
import { MobileMenuProvider } from '@/contexts/MobileMenuContext';
import HeaderContent from '@/components/layout/Header/HeaderContent';

const Header = () => {
    return (
        <MobileMenuProvider>
            <HeaderContent />
        </MobileMenuProvider>
    );
};

export default Header;