import React from 'react';
import Link from 'next/link'; // Import Link component

const Header: React.FC = () => {
    return (
        <header className="bg-teal-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* <img src="/images/logo.png" alt="79hora.com" className="h-8" /> */}

                {/* ใช้ Link component เพื่อสร้างลิงก์ */}
                <Link href="/">
                    <h1 className="text-xl font-bold ml-2 cursor-pointer">Astrology Documentations</h1>
                </Link>
            </div>
            <div className="flex items-center">
            </div>
        </header>
    );
};

export default Header;