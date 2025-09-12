import React from 'react';
// ตัวอย่างการแก้ไข
import { LuFileDigit, LuGem, LuCrown, LuCalendarCheck, LuBook } from 'react-icons/lu';
import { BiSearchAlt } from 'react-icons/bi';

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
      <div className="mr-3 text-red-600">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-80 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">หมวดหมู่</h2>
      </div>
      <nav>
        <MenuItem icon={<BiSearchAlt size={20} />} text="วิเคราะห์ชื่อ-นามสกุล" />
        <MenuItem icon={<LuFileDigit size={20} />} text="ค้นหาชื่อดี-นามมงคล" />
        <MenuItem icon={<LuCrown size={20} />} text="ตั้งชื่อลูกชาย-ลูกสาว" />
        <MenuItem icon={<LuGem size={20} />} text="ดูดวงชะตากำเนิด" />
        <MenuItem icon={<LuCalendarCheck size={20} />} text="ดูดวงชะตารายเดือนรายสัปดาห์" />
        <MenuItem icon={<LuBook size={20} />} text="บทความดูดวง" />
      </nav>
    </aside>
  );
};

export default Sidebar;
