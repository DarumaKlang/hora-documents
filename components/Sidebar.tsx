import React from 'react';
import {
    LuFileDigit,
    LuGem,
    LuCrown,
    LuCalendarCheck,
    LuBook,
    LuCode,
    LuSettings,
    LuDatabase,
    LuPlug, // ไอคอนสำหรับ API
    LuInfo // ไอคอนสำหรับ About Us
} from 'react-icons/lu';
import { BiSearchAlt } from 'react-icons/bi';
import Link from 'next/link';

interface MenuItemProps {
    icon: React.ReactNode;
    text: string;
    href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, href }) => {
    return (
        <Link href={href}>
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                <div className="mr-3 text-teal-800">{icon}</div>
                <span>{text}</span>
            </div>
        </Link>
    );
};

const Sidebar: React.FC = () => {
    return (
        <aside className="w-full md:w-90 rounded-lg overflow-hidden">

            <div className="w-full md:w-80 bg-white shadow-lg rounded-lg overflow-hidden mb-4">

                <div className="p-4 border-b">
                    <h2 className="text-lg text-teal-800 font-semibold">หมวดหมู่</h2>
                </div>

                <nav>
                    <MenuItem href="/contents/" icon={<BiSearchAlt size={20} />} text="วิเคราะห์ชื่อ-นามสกุล" />
                    <MenuItem href="/contents/" icon={<LuFileDigit size={20} />} text="ค้นหาชื่อดี-นามมงคล" />
                    <MenuItem href="/contents/" icon={<LuCrown size={20} />} text="ตั้งชื่อลูกชาย-ลูกสาว" />
                    <MenuItem href="/contents/" icon={<LuGem size={20} />} text="ดูดวงชะตากำเนิด" />
                    <MenuItem href="/contents/" icon={<LuCalendarCheck size={20} />} text="ดูดวงชะตารายเดือนรายสัปดาห์" />
                    <MenuItem href="/contents/" icon={<LuBook size={20} />} text="บทความดูดวง" />
                </nav>

            </div>

            <div className="w-full md:w-80 bg-white shadow-lg rounded-lg overflow-hidden mb-5">

                <div className="p-4 border-b">
                    <h2 className="text-lg text-teal-800 font-semibold">Developers</h2>
                </div>

                <nav>
                    <MenuItem href="/developers/components" icon={<LuCode size={20} />} text="Components" />
                    <MenuItem href="/developers/functions" icon={<LuSettings size={20} />} text="Functions" />
                    <MenuItem href="/developers/informations" icon={<LuDatabase size={20} />} text="Data Informations" />
                    <MenuItem href="/developers/apis" icon={<LuPlug size={20} />} text="API" />
                </nav>

            </div>

            <div className="w-full md:w-80 bg-white shadow-lg rounded-lg overflow-hidden mb-5">
                <MenuItem href="/about" icon={<LuInfo size={20} />} text="About Us" />
            </div>

        </aside>
    );
};

export default Sidebar;