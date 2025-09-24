// src/components/UbagongTimes.tsx
'use client';

import React, { JSX, useState } from 'react';
import { FaCalendarDay, FaRegSun, FaRegMoon, FaCloudSun, FaCloudMoon, FaUmbrella, FaCalendarWeek, FaQuestionCircle, FaSun, FaMoon } from 'react-icons/fa';
import { FaStar, FaTimes, FaCircle } from 'react-icons/fa';
import { FaSquareFull } from 'react-icons/fa6';

const ubagongDayData = [
    { day: 'อาทิตย์', times: ['⠛', 'X', ' ', '⠑', '⠂'] },
    { day: 'จันทร์', times: ['⠂', '⠛', 'X', ' ', '⠑'] },
    { day: 'อังคาร', times: ['⠑', '⠂', '⠛', 'X', ' '] },
    { day: 'พุธ', times: [' ', '⠑', '⠂', '⠛', 'X'] },
    { day: 'พฤหัสบดี', times: ['X', ' ', '⠑', '⠂', '⠛'] },
    { day: 'ศุกร์', times: ['⠛', 'X', ' ', '⠑', '⠂'] },
    { day: 'เสาร์', times: ['⠂', '⠛', 'X', ' ', '⠑'] },
];

const ubagongNightData = [
    { day: 'อาทิตย์', times: ['⠂', '⠛', 'X', ' ', '⠑'] },
    { day: 'จันทร์', times: ['⠑', '⠂', '⠛', 'X', ' '] },
    { day: 'อังคาร', times: [' ', '⠑', '⠂', '⠛', 'X'] },
    { day: 'พุธ', times: ['X', ' ', '⠑', '⠂', '⠛'] },
    { day: 'พฤหัสบดี', times: ['⠛', 'X', ' ', '⠑', '⠂'] },
    { day: 'ศุกร์', times: ['⠂', '⠛', 'X', ' ', '⠑'] },
    { day: 'เสาร์', times: ['⠑', '⠂', '⠛', 'X', ' '] },
];

const dayIconMap: { [key: string]: JSX.Element } = {
    'อาทิตย์': <FaRegSun className="text-yellow-500" />,
    'จันทร์': <FaRegMoon className="text-blue-400" />,
    'อังคาร': <FaCloudSun className="text-orange-500" />,
    'พุธ': <FaCloudMoon className="text-green-500" />,
    'พฤหัสบดี': <FaCalendarDay className="text-purple-500" />,
    'ศุกร์': <FaCalendarWeek className="text-pink-500" />,
    'เสาร์': <FaUmbrella className="text-gray-600" />,
};

const dayTimeHeaders = [
    '06:01 - 08:24', '08:25 - 10:48', '10:49 - 13:12', '13:13 - 15:36', '15:37 - 18:00',
];

const nightTimeHeaders = [
    '18:01 - 20:24', '20:25 - 22:48', '22:49 - 01:12', '01:13 - 03:36', '03:37 - 06:00',
];

const symbolMap: { [key: string]: { icon: JSX.Element; color: string; } } = {
    '⠛': { icon: <FaStar />, color: 'text-green-500' },
    '⠑': { icon: <FaCircle />, color: 'text-blue-500' },
    '⠂': { icon: <FaSquareFull />, color: 'text-orange-500' },
    'X': { icon: <FaTimes />, color: 'text-red-500' },
    ' ': { icon: null, color: 'text-gray-500' },
};

const ubagongPoem = [
    { symbol: '⠂', name: 'ศูนย์หนึ่ง', poem: 'ศูนย์หนึ่งอย่าพึ่งจรแม้ราญรอนจะอัปรา', icon: <FaSquareFull /> },
    { symbol: '⠑', name: 'สองศูนย์', poem: 'สองศูนย์เร่งยาตราจะมีลาภสวัสดี', icon: <FaCircle /> },
    { symbol: ' ', name: 'ปลอดศูนย์', poem: 'ปลอดศูนย์พูลสวัสดิ์ภัยพิบัติลาภบ่มี', icon: null },
    { symbol: 'X', name: 'กากบาท', poem: 'กากบาทตัวอัปรีย์แม้จรลีจะอัปรา', icon: <FaTimes /> },
    { symbol: '⠛', name: 'สี่ศูนย์', poem: 'สี่ศูนย์จะพูนผลแม้จรดลดีหนักหนา มีลาภล้นคณนาเร่งยาตราจะมีชัย', icon: <FaStar /> },
];

interface UbagongTimesProps {}

const UbagongTimes: React.FC<UbagongTimesProps> = () => {
    const [activeTab, setActiveTab] = useState<'day' | 'night'>('day');

    const getDayIcon = (dayName: string) => {
        return dayIconMap[dayName] || <FaQuestionCircle className="text-gray-500" />;
    };

    const getSymbolIcon = (symbol: string) => {
        return symbolMap[symbol] || { icon: <FaQuestionCircle />, color: 'text-gray-500' };
    };

    const currentData = activeTab === 'day' ? ubagongDayData : ubagongNightData;
    const currentHeaders = activeTab === 'day' ? dayTimeHeaders : nightTimeHeaders;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">ตารางยามอุบากอง</h2>

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
            <div className="hidden md:block overflow-x-auto text-sm">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gray-100 text-left text-gray-700">
                        <tr>
                            <th className="p-3">วัน</th>
                            {currentHeaders.map((time, index) => (
                                <th key={index} className="p-3 text-center whitespace-nowrap">{time}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50">
                                <td className="p-3 font-semibold flex items-center space-x-2">
                                    {getDayIcon(row.day)}
                                    <span className="hidden lg:inline-block">{row.day}</span>
                                </td>
                                {row.times.map((symbol, i) => {
                                    const { color } = getSymbolIcon(symbol);
                                    return (
                                        <td key={i} className={`p-3 text-center font-bold ${color}`}>
                                            {symbol}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden">
                {currentData.map((row, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-100">
                        <h3 className="text-base font-bold mb-3 flex items-center space-x-2 text-gray-800">
                            {getDayIcon(row.day)}
                            <span>{row.day}</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                            {currentHeaders.map((header, i) => {
                                const symbol = row.times[i];
                                const { icon, color } = getSymbolIcon(symbol);
                                return (
                                    <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-200 space-y-1">
                                        <div className={`text-xl ${color}`}>
                                            {icon}
                                        </div>
                                        <div className="text-xs text-gray-500 text-center">{header}</div>
                                        <div className={`font-semibold ${color}`}>{symbol}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            ---

            {/* ส่วนอธิบายความหมายของสัญลักษณ์เป็นบทกลอนในรูปแบบการ์ด */}
            <div className="mt-8 pt-6">
                <h3 className="text-lg font-bold mb-4 text-center text-gray-800">คำทำนายยามอุบากอง</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ubagongPoem.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center justify-center mb-2">
                                <span className={`text-xl inline-block mr-2 font-semibold ${symbolMap[item.symbol]?.color}`}>
                                    {item.symbol === ' ' ? 'ปลอดศูนย์' : item.symbol}
                                </span>
                                <span className={`text-xl ${symbolMap[item.symbol]?.color}`}>
                                    {item.icon}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 text-center italic">
                                {item.poem}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UbagongTimes;