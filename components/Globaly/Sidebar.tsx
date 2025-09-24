// components/Sidebar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { 
    LuFileDigit, 
    LuGem, 
    LuCrown, 
    LuCalendarCheck, 
    LuBook, 
    LuCode, 
    LuSettings, 
    LuDatabase, 
    LuPlug,
    LuInfo, 
    LuHeartHandshake,
    LuX
} from 'react-icons/lu';
import { BiSearchAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa'; 
import DonationsPopup from '@/components/Globaly/DonationsPopup';
import { useState } from 'react';

interface MenuItemProps {
    icon: React.ReactNode;
    text: string;
    href?: string;
    isExternal?: boolean; 
    onClick?: () => void; 
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, href, isExternal = false, onClick }) => {
    
    const baseClasses = "flex items-center p-3 text-gray-700 hover:bg-gray-100 cursor-pointer";
    
    if (onClick) {
        return (
            <div className={baseClasses} onClick={onClick}>
                <div className="mr-3 text-teal-800">{icon}</div>
                <span>{text}</span>
            </div>
        );
    }
    
    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                <div className="mr-3 text-teal-800">{icon}</div>
                <span>{text}</span>
            </a>
        );
    }

    return (
        <Link href={href!} className={baseClasses}>
            <div className="mr-3 text-teal-800">{icon}</div>
            <span>{text}</span>
        </Link>
    );
};

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            {/* Overlay for mobile view */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50 md:z-auto`}>
                 <div className="md:hidden flex justify-end p-4">
                    <button 
                        onClick={onClose}
                        type="button" // แก้ไข: เพิ่ม type="button"
                        aria-label="Close sidebar" // แก้ไข: เพิ่ม aria-label สำหรับการเข้าถึง
                    >
                        <LuX size={24} className="text-gray-500" />
                    </button>
                </div>
                
                <div className="p-4 border-b">
                    <h2 className="text-lg text-teal-800 font-semibold">หมวดหมู่</h2>
                </div>
                <nav>
                    <MenuItem href="/contents/mahataksa" icon={<BiSearchAlt size={20} />} text="มหาทักษาพยากรณ์" />
                    <MenuItem href="/contents/sevennum" icon={<LuFileDigit size={20} />} text="พยากรณ์เลข ๗ ตัว" />
                    <MenuItem href="/contents/jakrasri" icon={<LuCrown size={20} />} text="พยากรณ์จักราศี" />
                    <MenuItem href="/contents/yama" icon={<LuGem size={20} />} text="ฤกษ์-ยาม" />
                    <MenuItem href="/contents/starcountdown" icon={<LuCalendarCheck size={20} />} text="ปฏิทินดวงดาว" />
                    <MenuItem href="/contents/content" icon={<LuBook size={20} />} text="บทความดูดวง" />
                </nav>

                <div className="p-4 border-b">
                    <h2 className="text-lg text-teal-800 font-semibold">Developers</h2>
                </div>
                <nav>
                    <MenuItem href="/developers/components" icon={<LuCode size={20} />} text="Components" />
                    <MenuItem href="/developers/functions" icon={<LuSettings size={20} />} text="Functions" />
                    <MenuItem href="/developers/informations" icon={<LuDatabase size={20} />} text="Data Informations" />
                    <MenuItem href="/developers/apis" icon={<LuPlug size={20} />} text="API" />
                </nav>

                <MenuItem href="/about" icon={<LuInfo size={20} />} text="About Us" />
                <MenuItem
                    href="https://github.com/DarumaKlang/hora-documents"
                    icon={<FaGithub size={20} />}
                    text="GitHub Repository"
                    isExternal={true}
                />
                 <MenuItem 
                    onClick={handleOpenPopup} 
                    icon={<LuHeartHandshake size={20} />} 
                    text="Donations"
                />

                <DonationsPopup 
                    isOpen={isPopupOpen} 
                    onClose={handleClosePopup} 
                />
            </aside>
        </>
    );
};

export default Sidebar;