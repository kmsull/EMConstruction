import React from 'react';
import '../globals.css'
import Link from 'next/link'
import logo from './assets/images/EMConstructionLogo.png';

const NavBar = () => {
    return (
        <nav className="flex gap-4 p-4 bg-black-200">
            <ul className="flex gap-4">
                <li>
                    <image href="../img/EMConstructionLogo.png"></image>
                </li>
                <li>
                    <Link className="text-white-500" href="/">Home</Link>
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
