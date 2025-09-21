// components/MainPage.tsx

import React from 'react';
import ServicePackageCard from './Globaly/ServicePackageCard';
import YamaAthaganClock from './Developers/YamaAthaganClock';
import TaksaDropdown from "@/components/Developers/TaksaPakornDataComponent";
import { LuFileText } from 'react-icons/lu'; // หากใช้
import { BiSearchAlt } from 'react-icons/bi'; // หากใช้

// ข้อมูลสำหรับ ServicePackageCard
const servicePackages = [
    {
        title: "บริการดูดวง 7 ตัว 9 ฐาน รายปี",
        price: "฿249",
        description: "ทำนายพื้นดวงปีปัจจุบันตามวันเวลาเกิดและปีปฏิทินเดือน...",
        buttonText: "บริการดูดวง",
    },
    {
        title: "บริการตรวจดวงชะตากำเนิด",
        price: "฿299",
        description: "ตรวจสอบรายละเอียดดวงชะตากำเนิดตามหลักการพยากรณ์ 7 ตัว 9 ฐาน...",
        buttonText: "บริการตั้งชื่อ",
    },
];

// Component หลักที่รวม ServicePackageCard และส่วนอื่นๆ
const MainPage = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">บริการของเรา</h2>

            {/* ส่วน Service Package Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicePackages.map((pkg, index) => (
                    <ServicePackageCard key={index} {...pkg} />
                ))}
            </div>

            {/* ส่วนโปรโมทพิเศษ */}
            <div>
                <button className="w-full bg-dark-green text-white rounded-md hover:opacity-90">
                    <span className="font-bold text-lg">ดูดวงรายเดือน VIP คลิกเลย</span>
                </button>
                <button className="w-full bg-accent-yellow text-white rounded-md hover:opacity-90">
                    <span className="font-bold text-lg">ตั้งชื่อลูกหลาน มงคล คลิกเลย!</span>
                </button>
            </div>

            {/* ส่วนแสดง YamaAthaganClock และ Card Components */}
            <div className="flex flex-col md:flex-row md:space-x-4 gap-4 items-stretch justify-center">
                <div className="flex-1">
                    <YamaAthaganClock />
                </div>
                {/* ตัวอย่างการใช้ Card Component ที่ยังไม่ได้สร้าง */}
                <div className="flex-1">
                    <TaksaDropdown />
                </div>
                <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-inner">
                    <h3 className="text-xl font-semibold">Card Component</h3>
                    <p className="mt-2 text-gray-600">รายละเอียดเพิ่มเติมสำหรับ Card component 2</p>
                </div>
            </div>

        </div>
    );
};

export default MainPage;