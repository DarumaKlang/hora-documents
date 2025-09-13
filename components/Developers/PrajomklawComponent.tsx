"use client";

import React, { useState } from 'react';
import { prajomklawData } from '@/data/prajomklawData';

const PrajomklawComponent: React.FC = () => {
    const [birthDayOfWeek, setBirthDayOfWeek] = useState<string>('');
    const [birthMonth, setBirthMonth] = useState<string>('');
    const [birthYear, setBirthYear] = useState<string>('');
    const [zodiacSign, setZodiacSign] = useState<string>('');
    const [result, setResult] = useState<{ remainder: number | null; verse: string }>({ remainder: null, verse: '' });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // Mappings for calculations
    const dayMapping: { [key: string]: number } = {
        'อาทิตย์': 1,
        'จันทร์': 2,
        'อังคาร': 3,
        'พุธ': 4,
        'พฤหัสบดี': 5,
        'ศุกร์': 6,
        'เสาร์': 7,
    };

    const zodiacSigns: string[] = ['ชวด', 'ฉลู', 'ขาล', 'เถาะ', 'มะโรง', 'มะเส็ง', 'มะเมีย', 'มะแม', 'วอก', 'ระกา', 'จอ', 'กุล'];

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();

        const dayNumber = dayMapping[birthDayOfWeek];
        const yearNumber = parseInt(birthYear);
        const monthNumber = parseInt(birthMonth);

        // Calculate zodiac number from B.E. year. Year 2515 B.E. (1972 C.E.) is the start of the 12-year cycle (Year of the Rat/ชวด)
        const zodiacIndex = (yearNumber - 2515) % 12;
        const normalizedIndex = zodiacIndex >= 0 ? zodiacIndex : zodiacIndex + 12;
        const calculatedZodiacSign = zodiacSigns[normalizedIndex];

        // Use zodiac number for calculation. 
        const zodiacNumber = normalizedIndex + 1;

        if (isNaN(yearNumber) || isNaN(monthNumber) || isNaN(dayNumber)) {
            setResult({ remainder: null, verse: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
        } else {
            const sum = zodiacNumber + monthNumber + dayNumber;
            const remainder = sum % 10;
            const foundVerse = prajomklawData.find(item => item.remainder === remainder)?.verse || 'ไม่พบคำทำนาย';

            setZodiacSign(calculatedZodiacSign);
            setResult({ remainder, verse: foundVerse });
        }
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setBirthDayOfWeek('');
        setBirthMonth('');
        setBirthYear('');
        setZodiacSign('');
        setResult({ remainder: null, verse: '' });
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-teal-800 flex flex-col items-center justify-center max-w-sm mx-auto my-6">
            {/* Header section */}
            <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg text-secondary-gold text-center">
                คำทำนายเศษพระจอมเกล้า
            </h1>
            <p className="text-center text-sm mb-2 text-gray-600">
                โปรดกรอกข้อมูลวัน/เดือน/ปีเกิด เพื่อรับคำทำนาย
            </p>

            {/* Main content box */}
            <div className="bg-white p-6 sm:p-8 rounded-lg mt-6 flex flex-col items-start w-full min-h-[400px] transition-all duration-500">
                {isSubmitted ? (
                    // Display results section
                    <div className="w-full h-full flex flex-col items-center text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-secondary-gold drop-shadow-lg animate-fade-in">
                            ผลลัพธ์การคำนวณ
                        </h2>
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-secondary-gold/20 border-4 border-secondary-gold/50 shadow-lg text-4xl font-bold">
                            {result.remainder}
                        </div>
                        <p className="text-lg text-gray-600 animate-fade-in delay-200">
                            ปีนักษัตร: <span className="text-secondary-gold font-bold">{zodiacSign}</span>
                        </p>
                        <p className="text-sm font-medium text-teal-800 whitespace-pre-line animate-fade-in delay-500">
                            {result.verse}
                        </p>
                        <button
                            onClick={handleReset}
                            className="w-full py-3 px-6 rounded-full shadow-lg text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 cursor-pointer"
                        >
                            ลองอีกครั้ง ✨
                        </button>
                    </div>
                ) : (
                    // Input form section
                    <form onSubmit={handleCalculate} className="space-y-12 w-full">
                        <div>
                            <label htmlFor="birthYear" className="block text-sm font-medium text-teal-800">
                                ปีเกิด (พ.ศ.)
                            </label>
                            <input
                                type="number"
                                id="birthYear"
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-gold focus:border-secondary-gold transition-all duration-300"
                                placeholder="เช่น 2540"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="birthMonth" className="block text-sm font-medium text-teal-800">
                                เดือนเกิด (เดือนไทย 1-12)
                            </label>
                            <input
                                type="number"
                                id="birthMonth"
                                value={birthMonth}
                                onChange={(e) => setBirthMonth(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-gold focus:border-secondary-gold transition-all duration-300"
                                min="1"
                                max="12"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="birthDayOfWeek" className="block text-sm font-medium text-teal-800">
                                วันเกิด
                            </label>
                            <select
                                id="birthDayOfWeek"
                                value={birthDayOfWeek}
                                onChange={(e) => setBirthDayOfWeek(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-gray-50 text-gray-900 focus:outline-none focus:ring-1 focus:ring-secondary-gold focus:border-secondary-gold transition-all duration-300"
                                required
                            >
                                <option value="" disabled hidden className="text-gray-400">เลือกวันในสัปดาห์</option>
                                {Object.keys(dayMapping).map((day, index) => (
                                    <option key={index} value={day} className="text-gray-900">
                                        {day}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-full shadow-lg text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 cursor-pointer"
                        >
                            คำนวณเศษ ✨
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PrajomklawComponent;