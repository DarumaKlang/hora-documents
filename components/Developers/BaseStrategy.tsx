// components/Developers/BaseStrategy.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { STRATEGIES } from '@/data/21strategy'; 

// **********************************************
// 1. ข้อมูลหลัก: รายการสำหรับ Dropdown ทั้ง 3 ตัว
// **********************************************

interface DropdownOption {
    label: string;
    value: number; // เลข 1-7 (ตำแหน่งในฐาน)
    type: string; // ชื่อทักษา (บริวาร-มนตรี)
    strategyNumber: number; // เลขกลยุทธ (1-21) ที่เชื่อมโยง
}

// ฐานที่ ๑: อัตตะ
const BASE_1_OPTIONS: DropdownOption[] = [
    { label: 'ฤทธี / อัตตะ', value: 1, type: 'บริวาร', strategyNumber: 1 },
    { label: 'เถื่อนกำบัง / หินะ', value: 2, type: 'อายุ', strategyNumber: 4 },
    { label: 'พวนเรือโยง / ธะนัง', value: 3, type: 'เดช', strategyNumber: 7 },
    { label: 'ฟ้างำดิน / ปิตา', value: 4, type: 'ศรี', strategyNumber: 10 },
    { label: 'ชูพิษแสลง / มาตา', value: 5, type: 'มูลละ', strategyNumber: 13 },
    { label: 'เย้าให้ผอม / โภคา', value: 6, type: 'อุตสาหะ', strategyNumber: 16 },
    { label: 'ฟ้าสนั่นเสียง / มัฌฌิมา', value: 7, type: 'มนตรี', strategyNumber: 19 },
];

// ฐานที่ ๒: ตนุ
const BASE_2_OPTIONS: DropdownOption[] = [
    { label: 'สีหจักร / ตนุ', value: 1, type: 'บริวาร', strategyNumber: 2 },
    { label: 'พังภูผา / กดุมภะ', value: 2, type: 'อายุ', strategyNumber: 5 },
    { label: 'โพงน้ำบ่อ / สหัชชะ', value: 3, type: 'เดช', strategyNumber: 8 }, 
    { label: 'อินทร์พิมาน / พันธุ', value: 4, type: 'ศรี', strategyNumber: 11 },
    { label: 'แข็งให้อ่อน / ปุตตะ', value: 5, type: 'มูลละ', strategyNumber: 14 },
    { label: 'จอมปราสาท / อริ', value: 6, type: 'อุตสาหะ', strategyNumber: 17 },
    { label: 'เรียงหลักยืน / ปัตนิ', value: 7, type: 'มนตรี', strategyNumber: 20 },
];

// ฐานที่ ๓: มรณะ
const BASE_3_OPTIONS: DropdownOption[] = [
    { label: 'ลักษณ์ซ่อนเงื่อน / มรณะ', value: 1, type: 'บริวาร', strategyNumber: 3 },
    { label: 'ม้ากินสวน / ศุภะ', value: 2, type: 'อายุ', strategyNumber: 6 },
    { label: 'ล่อช้างป่า / กำมะ', value: 3, type: 'เดช', strategyNumber: 9 },
    { label: 'ผลาญศัตรู / ลาภะ', value: 4, type: 'ศรี', strategyNumber: 12 },
    { label: 'ยอนภูเขา / พยายะ', value: 5, type: 'มูลละ', strategyNumber: 15 },
    { label: 'ราชปัญญา / ทาสี', value: 6, type: 'อุตสาหะ', strategyNumber: 18 },
    { label: 'ปืนพระราม / ทาสา', value: 7, type: 'มนตรี', strategyNumber: 21 },
];


interface BaseStrategyProps {
    title: string;
}

// **********************************************
// Dropdown Component ย่อย (นำเลข 1-7 ออกจาก opt.value)
// **********************************************
const StrategyDropdown: React.FC<{
    id: string;
    label: string;
    options: DropdownOption[];
    value: number | null;
    onChange: (value: number) => void;
}> = ({ id, label, options, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
            {label}
        </label>
        <select
            id={id}
            value={value !== null ? value : ''}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        >
            <option value="">-- เลือก {label.substring(label.lastIndexOf('('))}</option>
            {options.map((opt) => (
                <option key={opt.strategyNumber} value={opt.strategyNumber}>
                    {/* 👈 ลบ opt.value. ออกจาก Dropdown */}
                    {opt.label} ({opt.type})
                </option>
            ))}
        </select>
    </div>
);


// **********************************************
// Main Component: BaseStrategy
// **********************************************
const BaseStrategyComponent: React.FC<BaseStrategyProps> = ({ title }) => {
    const [strategyBase1, setStrategyBase1] = useState<number | null>(null);
    const [strategyBase2, setStrategyBase2] = useState<number | null>(null);
    const [strategyBase3, setStrategyBase3] = useState<number | null>(null);

    // คำนวณผลสรุป
    const summaryResult = useMemo(() => {
        
        const getResult = (strategyNumber: number | null, options: DropdownOption[], baseIndex: number) => {
            
            if (strategyNumber === null) {
                return { 
                    title: `ฐานที่ ${baseIndex} (ยังไม่ได้เลือก)`, 
                    description: 'กรุณาเลือกหลักกลยุทธที่ต้องการศึกษา',
                    type: 'ไม่ระบุ',
                    prakasit: '',
                };
            }

            const strategyDetails = STRATEGIES.find(s => s.number === strategyNumber);
            const baseDetails = options.find(opt => opt.strategyNumber === strategyNumber);

            if (!strategyDetails) {
                 return { 
                    title: `กลยุทธ (ไม่พบข้อมูล)`, 
                    description: 'ไม่พบรายละเอียดกลยุทธในไฟล์ข้อมูล',
                    type: 'ไม่ระบุ',
                    prakasit: '',
                };
            }
            
            return {
                title: strategyDetails.title,
                description: strategyDetails.description,
                type: baseDetails?.type || 'ไม่ระบุ',
                prakasit: strategyDetails.prakasit,
            };
        };

        return {
            base1: getResult(strategyBase1, BASE_1_OPTIONS, 1),
            base2: getResult(strategyBase2, BASE_2_OPTIONS, 2),
            base3: getResult(strategyBase3, BASE_3_OPTIONS, 3),
        };
    }, [strategyBase1, strategyBase2, strategyBase3]);


    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">{title}</h2>
            
            {/* 1. Dropdowns เรียงตามแนวตั้ง */}
            <div className="space-y-4 mb-8">
                <StrategyDropdown
                    id="strategy-base1"
                    label="กลยุทธในฐานที่ ๑"
                    options={BASE_1_OPTIONS}
                    value={strategyBase1}
                    onChange={setStrategyBase1}
                />
                
                <StrategyDropdown
                    id="strategy-base2"
                    label="กลยุทธในฐานที่ ๒"
                    options={BASE_2_OPTIONS}
                    value={strategyBase2}
                    onChange={setStrategyBase2}
                />
                
                <StrategyDropdown
                    id="strategy-base3"
                    label="กลยุทธในฐานที่ ๓"
                    options={BASE_3_OPTIONS}
                    value={strategyBase3}
                    onChange={setStrategyBase3}
                />
            </div>

            {/* 2. กล่องสรุปผลการเลือกของทั้ง 3 Dropdown */}
            <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-300">
                <h3 className="text-xl font-bold text-purple-800 mb-4">สรุปผลการเลือกกลยุทธ</h3>
                
                {/* สรุป ฐานที่ ๑ */}
                <div className="mb-3 p-3 bg-white rounded-md border border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">
                        ฐานที่ ๑: {summaryResult.base1.type} | {summaryResult.base1.title} 
                        {/* 👈 ลบ summaryResult.base1.strategyNumber ออก */}
                        {summaryResult.base1.prakasit && <span className="text-xs text-gray-500 ml-2">({summaryResult.base1.prakasit})</span>}
                    </p>
                    <p className="text-gray-900 text-sm mt-1 font-medium">
                        คำบรรยาย: {summaryResult.base1.description}
                    </p>
                </div>

                {/* สรุป ฐานที่ ๒ */}
                <div className="mb-3 p-3 bg-white rounded-md border border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">
                        ฐานที่ ๒: {summaryResult.base2.type} | {summaryResult.base2.title}
                        {/* 👈 ลบ summaryResult.base2.strategyNumber ออก */}
                        {summaryResult.base2.prakasit && <span className="text-xs text-gray-500 ml-2">({summaryResult.base2.prakasit})</span>}
                    </p>
                    <p className="text-gray-900 text-sm mt-1 font-medium">
                        คำบรรยาย: {summaryResult.base2.description}
                    </p>
                </div>

                {/* สรุป ฐานที่ ๓ */}
                <div className="p-3 bg-white rounded-md border border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">
                        ฐานที่ ๓: {summaryResult.base3.type} | {summaryResult.base3.title}
                        {/* 👈 ลบ summaryResult.base3.strategyNumber ออก */}
                        {summaryResult.base3.prakasit && <span className="text-xs text-gray-500 ml-2">({summaryResult.base3.prakasit})</span>}
                    </p>
                    <p className="text-gray-900 text-sm mt-1 font-medium">
                        คำบรรยาย: {summaryResult.base3.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BaseStrategyComponent;