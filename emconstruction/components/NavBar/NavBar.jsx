"use client";

import '../../app/globals.css';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../constants/images/logo/EMConstructionLogo.png';
import MenuPopup from './MenuPopup/MenuPopup';
import Popover from './Popover/Popover'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto py-2 flex items-center place-content-center space-x-40">
                <div className="hidden md:flex items-center">
                    <Link href="/">
                        <Image src={logo} alt="EM Construction Logo" width={64} height={64} />
                    </Link>
                    <Link className='navigationText' href="/">Home</Link>
                </div>
                <div className="hidden md:flex space-x-40">
                    <Popover />
                </div>
                <div className="hidden md:flex space-x-40">
                    <Link className='navigationText' href="/Contact">Contact</Link>
                </div>
                <div className="md:hidden">
                <button onClick={handleMenuToggle} className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden">
                    <MenuPopup onClick={handleMenuToggle} active={menuOpen} />
                </div>
            )}
        </nav>
    );
}