// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="bg-teal-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="md:hidden mr-4">
                    <button
                        onClick={onMenuClick}
                        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                        type="button" 
                        aria-label="Toggle navigation menu"
                    >
                        <LuMenu size={24} />
                    </button>
                </div>
                <Link href="/">
                    <h1 className="text-xl font-bold cursor-pointer">Astrology Documentations</h1>
                </Link>
            </div>
            <div className="flex items-center">
            </div>
        </header>
    );
};

export default Header;