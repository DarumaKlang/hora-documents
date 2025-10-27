// components/Developers/21strategy.tsx
'use client'; 

import React, { useState, useMemo } from 'react';
import {
    STRATEGIES,
    Strategy,
    HEADER_SUBTITLE,
    CONDITION_NOTES,
    CONDITION_TITLE,
} from '@/data/21strategy';

interface StrategyComponentProps {
    title: string;
}

/**
 * Component สำหรับแสดงรายละเอียดของกลยุทธ์ที่เลือก
 */
const SelectedStrategyDetail: React.FC<{ strategy: Strategy | null }> = ({ strategy }) => {
    if (!strategy) {
        return (
            <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg shadow-inner mt-6">
                <p className="text-xl font-medium">โปรดเลือกกลยุทธ์ที่ท่านสนใจจากรายการด้านบน</p>
                <p className="mt-2 text-sm">เพื่อแสดงรายละเอียดและคำแนะนำทางยุทธศาสตร์</p>
            </div>
        );
    }

    const { number, title, description, prakasit, stars, notes } = strategy;

    return (
        <div className="p-6 md:p-8 bg-white shadow-2xl rounded-xl ring-2 ring-teal-300 border-b-4 border-teal-500 mt-6">
            <h3 className="text-2xl font-extrabold text-teal-700 mb-3 flex items-center">
                <span className="mr-3 w-6 text-center text-3xl">{number}.</span>
                <span className="flex-1">{title.trim()}</span>
            </h3>
            <p className="text-base font-medium text-gray-700 mb-4 whitespace-pre-line border-b pb-4 border-gray-100">
                {description && <span className="italic">({description.trim()})</span>}
            </p>

            <div className="space-y-3 text-gray-700 pt-4">
                <p className="text-base flex">
                    <span className="font-semibold text-gray-900 mr-2 flex-shrink-0">📍 ตำแหน่ง/หลักการ:</span>
                    <span className="flex-1">{prakasit}</span>
                </p>
                
                {notes && notes.length > 0 && (
                    <div className="pt-2">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">รายละเอียดเพิ่มเติม:</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {notes.map((note, index) => (
                                <li key={index} className="text-sm whitespace-pre-line text-gray-600">
                                    {note.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {stars && (
                    <p className="text-lg font-bold text-orange-600 pt-4 border-t border-gray-200 mt-4">
                        {stars} <span className="text-base font-normal text-gray-500">(ระดับความสำคัญ)</span>
                    </p>
                )}
            </div>
        </div>
    );
};


const StrategyComponent: React.FC<StrategyComponentProps> = ({ title }) => {
    const [selectedStrategyNumber, setSelectedStrategyNumber] = useState<number | null>(null);

    const selectedStrategy = useMemo(() => {
        if (selectedStrategyNumber === null) {
            return null;
        }
        return STRATEGIES.find(s => s.number === selectedStrategyNumber) || null;
    }, [selectedStrategyNumber]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const number = value ? parseInt(value) : null; 
        setSelectedStrategyNumber(number);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex-1">
            {/* Header */}
            <h1 className="text-2xl font-bold text-teal-800 mb-2">{title}</h1>
            <p className="mb-6 text-base font-medium text-gray-600 whitespace-pre-line border-b pb-4 border-gray-200">
                {HEADER_SUBTITLE}
            </p>

            {/* Dropdown Selection */}
            <div className="mb-4">
                <label htmlFor="strategy-select" className="block text-gray-700 font-bold mb-2">
                    เลือกกลยุทธ์ที่ต้องการศึกษา
                </label>
                <div className="relative">
                     <select
                        id="strategy-select"
                        value={selectedStrategyNumber !== null ? selectedStrategyNumber.toString() : ''}
                        onChange={handleSelectChange}
                        className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm appearance-none cursor-pointer pr-10"
                    >
                        <option value="" disabled>-- เลือกกลยุทธ์จาก 21 ข้อ --</option>
                        {STRATEGIES.map((strategy) => (
                            <option key={strategy.number} value={strategy.number}>
                                {strategy.number}. {strategy.title}
                            </option>
                        ))}
                    </select>
                    {/* Custom Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Display Selected Strategy Details */}
            <SelectedStrategyDetail strategy={selectedStrategy} />

            {/* ส่วนแสดงเงื่อนไข 8 ข้อ: ถูกย้ายมาไว้ด้านล่าง (Footer) */}
            <footer className="mt-8 pt-4 border-t border-gray-200">
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-md">
                    <p className="font-bold text-lg mb-2 text-teal-700">{CONDITION_TITLE}</p>
                    <ul className="list-none space-y-1 text-sm">
                        {CONDITION_NOTES.map((note, index) => (
                            <li key={index} className="whitespace-pre-line text-gray-700">
                                {note.trim() === '' ? <div className="h-1"></div> : note} 
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default StrategyComponent;