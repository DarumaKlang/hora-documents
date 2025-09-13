// src/components/MainContent.tsx
import React from 'react';
import { LuFileText } from 'react-icons/lu'; // ใช้ icon ที่คุณต้องการ
import { BiSearchAlt } from 'react-icons/bi';

// Component สำหรับการ์ดแพ็กเกจ
const ServicePackageCard: React.FC<{ title: string; price: string; description: string; buttonText: string }> = ({
    title,
    price,
    description,
    buttonText,
}) => (
    <div className="border border-package-border rounded-lg p-6 mb-4 bg-white shadow-sm">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-primary-red text-2xl font-bold mb-4">{price}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-primary-red text-white px-6 py-2 rounded-md hover:opacity-90">
            {buttonText}
        </button>
    </div>
);

// Component สำหรับตารางรายงาน
const ReportTable = () => (
    <div className="bg-white border border-package-border rounded-lg shadow-sm overflow-hidden">
        <h4 className="font-semibold text-lg p-4 bg-gray-50 border-b">รายงานย่อเมฆมงคล 15 รายชื่อ</h4>
        <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันเกิด</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ราศีไทย</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ราศีเมษ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">เพศ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ความหมาย</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ศิริกานต์</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">24</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ราศีธนู</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Si Ra Kan</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">หญิง</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ผู้มีพรสวรรค์ดีเด่น</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

// Component หลักที่รวม ServicePackageCard และ ReportTable เข้าด้วยกัน
const MainContent = () => {
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

            <ReportTable />
        </div>
    );
};

export default MainContent;