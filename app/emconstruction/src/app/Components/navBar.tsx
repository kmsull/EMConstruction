import React from 'react';
import '../globals.css'
import Link from 'next/link'
import logo from '../assets/images/EMConstructionLogo.png';

const NavBar = () => {
    return (
        <nav className="flex gap-4 p-4 bg-black-200">
            <ul className="flex gap-4">
                <li>
                    <Link href="/">
                        <Image className='flex items-center' src={logo} alt="Home / EMCon Logo" width={64} height={64} />
                    </Link>
                </li>
                <li>
                    <Link className="text-white-500" href="/Portfolio">Services</Link>
                </li>
                <li>
                    <Link className="text-white-500" href="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
