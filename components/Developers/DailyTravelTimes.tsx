// src/components/DailyTravelTimes.tsx
'use client';

import React, { JSX, useState } from 'react';
import {
    FaSun, FaMoon, FaStar, FaGlobe, FaHome, FaQuestionCircle, FaSmileWink,
    FaChartLine, FaCheckCircle, FaMinusCircle,
    FaCalendarAlt, FaCalendarDay, FaCalendarWeek,
    FaCloudSun, FaCloudMoon, FaUmbrella, FaRegSun, FaRegMoon
} from 'react-icons/fa';

// ข้อมูลสำหรับตารางยามยาตรา
const dailyData = {
    day: [
        { day: 'อาทิตย์', times: ['ปลอด', 'ปลอด', 'ปลอด', 'เทพธิดา', 'พิษนาค', 'ฤาษี', 'พิษครุฑ', 'ปลอด'] },
        { day: 'จันทร์', times: ['ปลอด', 'พิษนาค', 'ฤาษี', 'พิษครุฑ', 'ปลอด', 'เทวา', 'เทพธิดา', 'ผีโขมด'] },
        { day: 'อังคาร', times: ['พิษครุฑ', 'ปลอด', 'เทวา', 'พิษสุนัข', 'เทพธิดา', 'พิษนาค', 'ฤาษี', 'พิษครุฑ'] },
        { day: 'พุธ', times: ['เทวา', 'เทพธิดา', 'พิษนาค', 'ฤาษี', 'พิษครุฑ', 'ปลอด', 'เทวา', 'ผีโขมด'] },
        { day: 'พฤหัสบดี', times: ['ฤาษี', 'พระภูมิ', 'ปลอด', 'เทวา', 'เทพธิดา', 'ปลอด', 'ผีโขมด', 'ปลอด'] },
        { day: 'ศุกร์', times: ['เทวา', 'ปลอด', 'เทพธิดา', 'พิษนาค', 'ฤาษี', 'พิษครุฑ', 'ปลอด', 'เทวา'] },
        { day: 'เสาร์', times: ['ผีโขมด', 'พระภูมิ', 'พิษครุฑ', 'ปลอด', 'เทวา', 'ปลอด', 'เทพธิดา', 'พิษนาค'] },
    ],
    night: [
        { day: 'อาทิตย์', times: ['ปลอด', 'ปลอด', 'เทพธิดา', 'เทวา', 'พิษครุฑ', 'ผีโขมด', 'พิษสุนัข', 'ปลอด'] },
        { day: 'จันทร์', times: ['ปลอด', 'เทวา', 'พิษครุฑ', 'พิษนาค', 'ปลอด', 'เทวา', 'ฤาษี', 'ผีโขมด'] },
        { day: 'อังคาร', times: ['พิษครุฑ', 'ผีโขมด', 'ปลอด', 'เทวา', 'ฤาษี', 'เทพธิดา', 'เทวา', 'พระภูมิ'] },
        { day: 'พุธ', times: ['เทพธิดา', 'เทวา', 'ฤาษี', 'เทพธิดา', 'เทวา', 'พระภูมิ', 'พิษนาค', 'ฤาษี'] },
        { day: 'พฤหัสบดี', times: ['ฤาษี', 'เทพธิดา', 'เทวา', 'พิษครุฑ', 'ผีโขมด', 'ปลอด', 'ปลอด', 'พระภูมิ'] },
        { day: 'ศุกร์', times: ['เทวา', 'ปลอด', 'พิษนาค', 'ปลอด', 'ปลอด', 'ฤาษี', 'เทพธิดา', 'พระภูมิ'] },
        { day: 'เสาร์', times: ['พิษนาค', 'ปลอด', 'ปลอด', 'พระภูมิ', 'เทพธิดา', 'เทวา', 'พิษครุฑ', 'ผีโขมด'] },
    ],
};

const iconMap: { [key: string]: { icon: JSX.Element; description: string; color: string; } } = {
    'ปลอด': { icon: <FaCheckCircle />, description: 'ปลอดภัย, เดินทางสะดวก', color: 'text-green-500' },
    'เทวา': { icon: <FaGlobe />, description: 'เป็นมงคล, เดินทางราบรื่น, จะได้ลาภ', color: 'text-blue-500' },
    'เทพธิดา': { icon: <FaChartLine />, description: 'เป็นมงคล, เดินทางราบรื่น, สำเร็จสมประสงค์', color: 'text-blue-500' },
    'ฤาษี': { icon: <FaSmileWink />, description: 'ยามดี, ประสบความสำเร็จ, จะพบผู้ใหญ่ช่วยเหลือ', color: 'text-yellow-500' },
    'พระภูมิ': { icon: <FaHome />, description: 'ยามร้าย, ไม่ควรเดินทาง, จะป่วยไข้', color: 'text-red-500' },
    'ผีโขมด': { icon: <FaHome />, description: 'ยามร้าย, ไม่ควรเดินทาง, จะป่วยไข้', color: 'text-red-500' },
    'พิษครุฑ': { icon: <FaMinusCircle />, description: 'ยามร้าย, ไม่ควรเดินทาง, จะเป็นอันตราย', color: 'text-red-500' },
    'พิษนาค': { icon: <FaStar />, description: 'ยามร้าย, ไม่ควรเดินทาง, จะถูกทำร้าย', color: 'text-red-500' },
    'พิษสุนัข': { icon: <FaStar />, description: 'ยามร้าย, ไม่ควรเดินทาง, จะถูกทำร้าย', color: 'text-red-500' },
};

const dayIconMap: { [key: string]: JSX.Element } = {
    'อาทิตย์': <FaRegSun className="text-yellow-500" />,
    'จันทร์': <FaRegMoon className="text-blue-400" />,
    'อังคาร': <FaCloudSun className="text-orange-500" />,
    'พุธ': <FaCloudMoon className="text-green-500" />,
    'พฤหัสบดี': <FaCalendarDay className="text-purple-500" />,
    'ศุกร์': <FaCalendarWeek className="text-pink-500" />,
    'เสาร์': <FaUmbrella className="text-gray-600" />,
};

// สร้าง Header สำหรับกลางวัน
const dayHeaders = [
    '06.01-07.30', '07.31-09.00', '09.01-10.30', '10.31-12.00',
    '12.01-13.30', '13.31-15.00', '15.01-16.30', '16.31-18.00',
];

// สร้าง Header สำหรับกลางคืน
const nightHeaders = [
    '18.01-19.30', '19.31-21.00', '21.01-22.30', '22.31-24.00',
    '00.01-01.30', '01.31-03.00', '03.01-04.30', '04.31-06.00',
];

// ข้อมูลสำหรับส่วนอธิบายความหมายยาม
const yantraDescriptions = [
    { name: 'ผีโขมด/พระภูมิ', meaning: 'ยาตราจะป่วยไข้' },
    { name: 'พิษนาค', meaning: 'จะตาย' },
    { name: 'พิษสุนัข', meaning: 'จะถูกทำร้าย' },
    { name: 'พิษครุฑ', meaning: 'จะเป็นอันตราย' },
    { name: 'ฤาษี', meaning: 'จะพบผู้ใหญ่ช่วยเหลือ' },
    { name: 'ปลอด', meaning: 'ไม่มีอันตราย' },
    { name: 'เทพธิดา', meaning: 'จะสำเร็จ สมประสงค์' },
    { name: 'เทวา', meaning: 'จะได้ลาภ' },
];

interface DailyTravelTimesProps {}

const DailyTravelTimes: React.FC<DailyTravelTimesProps> = () => {
    const [activeTab, setActiveTab] = useState<'day' | 'night'>('day');

    const getIconAndDescription = (name: string) => {
        return iconMap[name] || { icon: <FaQuestionCircle />, description: 'ไม่ทราบความหมาย', color: 'text-gray-500' };
    };

    const getDayIcon = (dayName: string) => {
        return dayIconMap[dayName] || <FaQuestionCircle className="text-gray-500" />;
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-4 mb-4 md:mt-0 flex-1">
            <h2 className="text-3xl font-extrabold text-teal-800 mb-6 text-center">ยามยาตราประจำวัน</h2>

            {/* Tab Selector */}
            <div className="flex justify-center mb-6 space-x-2">
                <button
                    onClick={() => setActiveTab('day')}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === 'day' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700'}`}
                >
                    <FaSun />
                    <span>ยามกลางวัน</span>
                </button>
                <button
                    onClick={() => setActiveTab('night')}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === 'night' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700'}`}
                >
                    <FaMoon />
                    <span>ยามกลางคืน</span>
                </button>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto text-xs">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-100 text-left text-gray-700">
                        <tr>
                            <th className="p-3">วัน</th>
                            {(activeTab === 'day' ? dayHeaders : nightHeaders).map((time, index) => (
                                <th key={index} className="p-3 text-center whitespace-nowrap">{time}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {(activeTab === 'day' ? dailyData.day : dailyData.night).map((row, index) => (
                            <tr key={index} className="border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50">
                                <td className="p-3 font-semibold flex items-center space-x-2">
                                    {getDayIcon(row.day)}
                                    <span className="hidden lg:inline-block">{row.day}</span>
                                </td>
                                {row.times.map((time, i) => {
                                    const { color } = getIconAndDescription(time);
                                    return (
                                        <td key={i} className={`p-3 text-center ${color}`}>{time}</td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden">
                {(activeTab === 'day' ? dailyData.day : dailyData.night).map((row, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-100">
                        <h3 className="text-base font-bold mb-3 flex items-center space-x-2 text-gray-800">
                            {getDayIcon(row.day)}
                            <span>{row.day}</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                            {(activeTab === 'day' ? dayHeaders : nightHeaders).map((header, i) => {
                                const time = row.times[i];
                                const { icon, description, color } = getIconAndDescription(time);
                                return (
                                    <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-200 space-y-1">
                                        <div className="text-lg">{icon}</div>
                                        <div className={`font-semibold ${color}`}>{time}</div>
                                        <p className="text-xs text-gray-500 text-center">{description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- ส่วนอธิบายความหมายยาม (เป็นข้อความธรรมดา) --- */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-center text-gray-800">คำอธิบายยามยาตรา</h3>
                <div className="text-gray-700 space-y-2 text-sm">
                    <p>
                        <span className="font-semibold">ตกยามผีโขมด พระภูมิ :</span> ยาตราจะป่วยไข้
                    </p>
                    <p>
                        <span className="font-semibold">ตกยามพิษนาค :</span> จะตาย
                    </p>
                    <p>
                        <span className="font-semibold">ตกยามพิษสุนัข :</span> จะถูกทำร้าย
                    </p>
                    <p>
                        <span className="font-semibold">ตกพิษครุฑ :</span> จะเป็นอันตราย
                    </p>
                    <p>
                        <span className="font-semibold">ตกยามฤาษี :</span> จะพบผู้ใหญ่ช่วยเหลือ
                    </p>
                    <p>
                        <span className="font-semibold">ตกยามปลอด :</span> ไม่มีอันตราย
                    </p>
                    <p>
                        <span className="font-semibold">ตกยามเทพธิดา :</span> จะสำเร็จ สมประสงค์
                    </p>
                    <p>
                        <span className="font-semibold">ตกยามเทวา:</span> จะได้ลาภ
                    </p>
                </div>
            </div>

        </div>
    );
};

export default DailyTravelTimes;