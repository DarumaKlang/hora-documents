// components/Developers/SevenCalculator.tsx
'use client';

import React, { useState, useMemo } from 'react';
import SevenTableComponent from '@/components/Developers/SevenTable';

// **********************************************
// 1. ข้อมูลสำหรับ Dropdown
// **********************************************

// 1. วันในสัปดาห์: อาทิตย์=1 ถึง เสาร์=7
const DAYS_OF_WEEK = [
    { label: 'วันอาทิตย์', value: 1 },
    { label: 'วันจันทร์', value: 2 },
    { label: 'วันอังคาร', value: 3 },
    { label: 'วันพุธ', value: 4 },
    { label: 'วันพฤหัสบดี', value: 5 },
    { label: 'วันศุกร์', value: 6 },
    { label: 'วันเสาร์', value: 7 },
];

// 2. เดือนไทย: ๑-๗ แทนค่า 1-7, เดือน ๘-๑๒ แทนค่า 1-5
const THAI_MONTHS = [
    { label: 'เดือน ๑ (ม.ค.)', value: 1 },
    { label: 'เดือน ๒ (ก.พ.)', value: 2 },
    { label: 'เดือน ๓ (มี.ค.)', value: 3 },
    { label: 'เดือน ๔ (เม.ย.)', value: 4 },
    { label: 'เดือน ๕ (พ.ค.)', value: 5 },
    { label: 'เดือน ๖ (มิ.ย.)', value: 6 },
    { label: 'เดือน ๗ (ก.ค.)', value: 7 },
    { label: 'เดือน ๘ (ส.ค.)', value: 1 },
    { label: 'เดือน ๙ (ก.ย.)', value: 2 },
    { label: 'เดือน ๑๐ (ต.ค.)', value: 3 },
    { label: 'เดือน ๑๑ (พ.ย.)', value: 4 },
    { label: 'เดือน ๑๒ (ธ.ค.)', value: 5 },
];

// 3. ปีนักษัตร: แบ่งเป็นสองชุด 7 และ 5
const ZODIAC_YEARS = [
    { label: 'ปีชวด (หนู) - 1', value: 1, type: '7-Base' },
    { label: 'ปีฉลู (วัว) - 2', value: 2, type: '7-Base' },
    { label: 'ปีขาล (เสือ) - 3', value: 3, type: '7-Base' },
    { label: 'ปีเถาะ (กระต่าย) - 4', value: 4, type: '7-Base' },
    { label: 'ปีมะโรง (งูใหญ่) - 5', value: 5, type: '7-Base' },
    { label: 'ปีมะเส็ง (งูเล็ก) - 6', value: 6, type: '7-Base' },
    { label: 'ปีมะเมีย (ม้า) - 7', value: 7, type: '7-Base' },

    { label: 'ปีมะแม (แพะ) - 1', value: 1, type: '5-Base' },
    { label: 'ปีวอก (ลิง) - 2', value: 2, type: '5-Base' },
    { label: 'ปีระกา (ไก่) - 3', value: 3, type: '5-Base' },
    { label: 'ปีจอ (หมา) - 4', value: 4, type: '5-Base' },
    { label: 'ปีกุล (หมู) - 5', value: 5, type: '5-Base' },
];


// **********************************************
// 2. ข้อมูลข้อความคงที่ 7 ช่องสำหรับแต่ละฐาน (Sup Content)
// **********************************************

// ฐานที่ ๑: ฤทธี / อัตตะ...
const BASE_1_TEXT: string[] = [
    'ฤทธี / อัตตะ', 'เถื่อนกำบัง / หินะ', 'พวนเรือโยง / ธะนัง', 'ฟ้างำดิน / ปิตา',
    'ชูพิษแสลง / มาตา', 'เย้าให้ผอม / โภคา', 'ฟ้าสนั่นเสียง / มัฌฌิมา'
];

// ฐานที่ ๒: สีหจักร / ตนุ...
const BASE_2_TEXT: string[] = [
    'สีหจักร / ตนุ', 'พังภูผา / กดุมภะ', 'พวนเรือโยง / สหัชชะ', 'อินทร์พิมาน / พันธุ',
    'แข็งให้อ่อน / ปุตตะ', 'จอมปราสาท / อริ', 'เรียงหลักยืน / ปัตนิ'
];

// ฐานที่ ๓: ลักษณ์ซ่อนเงื่อน / มรณะ...
const BASE_3_TEXT: string[] = [
    'ลักษณ์ซ่อนเงื่อน / มรณะ', 'ม้ากินสวน / ศุภะ', 'ล่อช้างป่า / กำมะ', 'ผลาญศัตรู / ลาภะ',
    'ยอนภูเขา / พยายะ', 'ราชปัญญา / ทาสี', 'ปืนพระราม / ทาสา'
];


interface SevenCalculatorProps {
    title: string;
}

/**
 * ฟังก์ชันสร้างแถวตัวเลข 7 ตัวที่วนรอบ (7-cycle) พร้อมข้อความใต้ตัวเลข (sup content)
 * ปรับขนาดฟอนต์ให้ Responsive: Mobile (text-xs/text-[8px] และ p-0), Desktop (sm:text-lg/sm:text-xs และ sm:p-1)
 */
const generateSevenCycleRow = (startValue: number | null, fixedText: string[]): (React.ReactNode | string)[] => {
    // หากไม่มีค่าที่เลือก ให้แสดงข้อความเสริมเท่านั้น
    if (startValue === null) {
        return fixedText.map((text, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-0 sm:p-1 text-gray-400">
                <span className="text-xs sm:text-lg font-bold">-</span>
                {/* Mobile: text-[8px], Desktop: sm:text-xs (ลดขนาดแล้ว) */}
                <span className="text-[8px] sm:text-xs text-center mt-0 sm:mt-1 leading-none">{text}</span>
            </div>
        ));
    }

    const row: (React.ReactNode | string)[] = [];
    for (let i = 0; i < 7; i++) {
        // สูตรการวนรอบ: (startValue + i - 1) % 7 + 1
        const value = (startValue + i - 1) % 7 + 1;

        const isStartCell = i === 0;
        const subText = fixedText[i]; // ข้อความตายตัวตาม Index (C1, C2, ...)

        row.push(
            // ปรับ Padding: Mobile: p-0, Desktop: sm:p-1
            <div key={i} className="flex flex-col items-center justify-center p-0 sm:p-1">
                {/* ตัวเลขที่วนรอบ: Mobile: text-xs, Desktop: sm:text-lg */}
                <span
                    className={`text-xs sm:text-lg font-bold ${isStartCell ? 'text-teal-700 underline decoration-2 decoration-teal-500' : 'text-gray-800'}`}
                >
                    {value}
                </span>
                {/* ข้อความเสริม (Sup content): Mobile: text-[8px]/mt-0, Desktop: sm:text-xs/sm:mt-1 */}
                <span className="text-[8px] sm:text-xs text-center text-gray-500 mt-0 sm:mt-1 leading-none whitespace-pre-line">
                    {subText}
                </span>
            </div>
        );
    }
    return row;
};

// **********************************************
// 3. Dropdown Component ย่อย
// **********************************************
const Dropdown: React.FC<{
    id: string;
    label: string;
    options: { label: string; value: number }[];
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
            className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        >
            <option value="">-- เลือก{label.substring(2)} --</option>
            {options.map((opt) => (
                <option key={opt.label} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    </div>
);


// **********************************************
// 4. Main Component: SevenCalculatorComponent
// **********************************************
const SevenCalculatorComponent: React.FC<SevenCalculatorProps> = ({ title }) => {
    // สถานะการเลือก
    const [selectedDayValue, setSelectedDayValue] = useState<number | null>(null);
    const [selectedMonthValue, setSelectedMonthValue] = useState<number | null>(null);
    const [selectedZodiacValue, setSelectedZodiacValue] = useState<number | null>(null);

    // สร้างข้อมูลตาราง 3x7 โดยใช้ Logic การวนรอบ 7 และข้อความเสริม
    const tableData = useMemo(() => {
        // สร้างข้อมูลสำหรับ 3 ฐาน
        const row1 = generateSevenCycleRow(selectedDayValue, BASE_1_TEXT);
        const row2 = generateSevenCycleRow(selectedMonthValue, BASE_2_TEXT);
        const row3 = generateSevenCycleRow(selectedZodiacValue, BASE_3_TEXT);

        return [row1, row2, row3];
    }, [selectedDayValue, selectedMonthValue, selectedZodiacValue]);


    // **ข้อมูลสำหรับ SevenTableComponent**
    const tableHeaders = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'];
    const tableRowLabels = ['ฐานที่ ๑', 'ฐานที่ ๒', 'ฐานที่ ๓'];


    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6 border-b pb-4 border-gray-200">{title} </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* 1. Dropdown ฐานที่ ๑ */}
                <Dropdown
                    id="day-select"
                    label="  วันในสัปดาห์ (ฐานที่ ๑)"
                    options={DAYS_OF_WEEK}
                    value={selectedDayValue}
                    onChange={setSelectedDayValue}
                />

                {/* 2. Dropdown ฐานที่ ๒ */}
                <Dropdown
                    id="month-select"
                    label="  เดือนไทย (ฐานที่ ๒)"
                    options={THAI_MONTHS}
                    value={selectedMonthValue}
                    onChange={setSelectedMonthValue}
                />

                {/* 3. Dropdown ฐานที่ ๓ */}
                <Dropdown
                    id="zodiac-select"
                    label="  ปีนักษัตร (ฐานที่ ๓)"
                    options={ZODIAC_YEARS}
                    value={selectedZodiacValue}
                    onChange={setSelectedZodiacValue}
                />
            </div>

            {/* ส่วนแสดงตาราง 7x3 พร้อมค่าตัวเลขที่เลือกใน C1 และการวนรอบ 7 ใน C2-C7 */}
            <SevenTableComponent
                title="ตำราพิชัยสงคราม ๒๑ กลยุทธ์เลข ๗ ตัว"
                headers={tableHeaders}
                rowLabels={tableRowLabels}
                data={tableData}
                className="mt-6"
            />

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักในการทำนายตามตําราพิชัยสงคราม</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>หลัก 1 :</strong> เป็นพื้นฐานกลยุทธ์ทั้งหมด<br />
                    <strong>หลัก 2 :</strong> มีทรัพยากร<br />
                    <strong>หลัก 3 :</strong> ผูกมิตร<br />
                    <strong>หลัก 4 :</strong> หลักการพูด หลักการปกครอง<br />
                    <strong>หลัก 5 :</strong> หลักข้อมูล ข่าวสาร<br />
                    <strong>หลัก 6 :</strong> หลักทรัพย์สิน การใช้ความมงคล มีเป็นปัจจัย หลักโชว์ออฟ แสนยานุภาพ<br />
                    <strong>หลัก 7 :</strong> หลักการถอย ถึงคราวถอยก็ต้องถอย
                </p>
            </div>

        </div>
    );
};

export default SevenCalculatorComponent;