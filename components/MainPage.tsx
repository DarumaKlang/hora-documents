// components/MainPage.tsx
import React from 'react';
import ServicePackageCard from './Globaly/ServicePackageCard';
import { LuFileText } from 'react-icons/lu'; // ใช้ icon ที่คุณต้องการ
import { BiSearchAlt } from 'react-icons/bi';

// Component หลักที่รวม ServicePackageCard และ ReportTable เข้าด้วยกัน
const MainPage = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">บริการของเรา</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ServicePackageCard
                    title="บริการดูดวง 7 ตัว 9 ฐาน รายปี"
                    price="฿249"
                    description="ทำนายพื้นดวงปีปัจจุบันตามวันเวลาเกิดและปีปฏิทินเดือน..."
                    buttonText="บริการดูดวง"
                />
                <ServicePackageCard
                    title="บริการตรวจดวงชะตากำเนิด"
                    price="฿299"
                    description="ตรวจสอบรายละเอียดดวงชะตากำเนิดตามหลักการพยากรณ์ 7 ตัว 9 ฐาน..."
                    buttonText="บริการตั้งชื่อ"
                />
            </div>

            <button className="w-full bg-dark-green text-white py-3 rounded-md mb-4 hover:opacity-90">
                <span className="font-bold text-lg">ดูดวงรายเดือน VIP คลิกเลย</span>
            </button>
            <button className="w-full bg-accent-yellow text-white py-3 rounded-md mb-8 hover:opacity-90">
                <span className="font-bold text-lg">ตั้งชื่อลูกหลาน มงคล คลิกเลย!</span>
            </button>

        </div>
    );
};

export default MainPage;