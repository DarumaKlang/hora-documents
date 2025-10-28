// components/Developers/PairedNumberCalculator.tsx
'use client';

import React, { useState, useMemo } from 'react';

// ตัวเลขไทย ๐-๙
const THAI_NUMBERS = [
    { label: '๐', value: 0 },
    { label: '๑', value: 1 },
    { label: '๒', value: 2 },
    { label: '๓', value: 3 },
    { label: '๔', value: 4 },
    { label: '๕', value: 5 },
    { label: '๖', value: 6 },
    { label: '๗', value: 7 },
    { label: '๘', value: 8 },
    { label: '๙', value: 9 },
];

// ข้อมูลคำทำนายคู่เลข (10x10 = 100 คู่)
// คุณสามารถใส่คำทำนายทั้งหมดที่นี่ในภายหลัง
const PREDICTIONS: { [key: string]: string } = {
    '00': 'ได้โอกาศแล้ว ได้โอกาศอีก',
    '01': 'เป็นหัวหน้า',
    '02': '',
    '03': '',
    '04': '',
    '05': '',
    '06': '',
    '07': '',
    '08': '',
    '09': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': '',
    '18': '',
    '19': '',
    '20': '',
    // ... เว้นที่ว่างสำหรับคู่ 2x - 9x
    '99': '',
};

interface PairedNumberCalculatorProps {
    title: string;
}

const PairedNumberCalculator: React.FC<PairedNumberCalculatorProps> = ({ title }) => {
    // ใช้ string เพื่อให้สามารถใช้ '0' และ null ได้ง่าย
    const [number1, setNumber1] = useState<string | null>(null);
    const [number2, setNumber2] = useState<string | null>(null);

    // คำนวณผลทำนายเมื่อมีการเลือกตัวเลข
    const prediction = useMemo(() => {
        if (number1 === null || number2 === null) {
            return {
                pair: null,
                text: 'กรุณาเลือกตัวเลขทั้งสองหลักเพื่อดูคำทำนาย',
            };
        }

        const key = `${number1}${number2}`; // สร้างคีย์ เช่น '00', '01', '99'
        const resultText = PREDICTIONS[key] || 'ไม่มีคำทำนายสำหรับคู่นี้ (อยู่ระหว่างการอัปเดต)';

        return {
            pair: key,
            text: resultText,
        };
    }, [number1, number2]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">{title}</h2>

            <div className="flex gap-4 mb-6">
                {/* Dropdown ตัวเลขหลักที่ 1 */}
                <div className="flex-1">
                    <label htmlFor="num1" className="block text-gray-700 font-bold mb-2">
                        หลักที่ ๑
                    </label>
                    <select
                        id="num1"
                        value={number1 !== null ? number1 : ''}
                        onChange={(e) => setNumber1(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="" disabled>-----</option>
                        {THAI_NUMBERS.map((num) => (
                            <option key={num.value} value={num.value.toString()}>
                                {num.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Dropdown ตัวเลขหลักที่ 2 */}
                <div className="flex-1">
                    <label htmlFor="num2" className="block text-gray-700 font-bold mb-2">
                        หลักที่ ๒
                    </label>
                    <select
                        id="num2"
                        value={number2 !== null ? number2 : ''}
                        onChange={(e) => setNumber2(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="" disabled>-----</option>
                        {THAI_NUMBERS.map((num) => (
                            <option key={num.value} value={num.value.toString()}>
                                {num.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* ส่วนแสดงผลทำนาย */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-[120px] h-auto">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                    {prediction.pair ? `คำทำนายคู่เลข ${THAI_NUMBERS.find(n => n.value.toString() === prediction.pair![0])?.label}${THAI_NUMBERS.find(n => n.value.toString() === prediction.pair![1])?.label}` : 'ผลลัพธ์'}
                </h3>
                <p className={`text-gray-800 ${prediction.pair ? 'font-medium' : 'italic text-sm text-gray-500'}`}>
                    {prediction.text}
                </p>
            </div>
        </div>
    );
};

export default PairedNumberCalculator;