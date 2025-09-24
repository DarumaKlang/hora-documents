"use client"

import React, { useState } from 'react';
import { luckyDayData } from '@/data/luckyDayData';

interface LuckyDayDataProps {
    title: string;
}

const LuckyDayData: React.FC<LuckyDayDataProps> = ({ title }) => {
    const [selectedDay, setSelectedDay] = useState('');
    const [dayMeaning, setDayMeaning] = useState('');
    const [dayStatus, setDayStatus] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const day = event.target.value;
        setSelectedDay(day);
        const selectedData = luckyDayData.find(data => data.day === day);
        if (selectedData) {
            setDayMeaning(selectedData.meaning);
            setDayStatus(selectedData.status);
        } else {
            setDayMeaning('');
            setDayStatus('');
        }
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-xl mt-4 md:mt-0 flex-1">
            <h2 className="text-3xl font-extrabold text-teal-800 mb-6 text-center">{title}</h2>
            <div className="text-gray-700">
                <div className="mb-6">
                    <label htmlFor="day-select" className="block text-md font-semibold text-gray-800 mb-2">
                        เลือกวัน ข้างขึ้น-ข้างแรม :
                    </label>
                    <div className="relative">
                        <select
                            id="day-select"
                            value={selectedDay}
                            onChange={handleSelectChange}
                            className="block w-full px-4 py-3 text-md text-gray-900 border border-teal-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                        >
                            <option value="">-- กรุณาเลือกวัน --</option>
                            {luckyDayData.map((data, index) => (
                                <option key={index} value={data.day}>
                                    {data.day}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                            <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {selectedDay && (
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 shadow-inner animate-fade-in">
                        <div className="flex items-center mb-4">
                            <span className={`text-3xl mr-3 ${dayStatus === 'ดี' ? 'text-green-600' : 'text-red-600'}`}>
                                {dayStatus === 'ดี' ? '✅' : '❌'}
                            </span>
                            <p className={`text-2xl font-bold ${dayStatus === 'ดี' ? 'text-green-700' : 'text-red-700'}`}>
                                สถานะ: {dayStatus}
                            </p>
                        </div>
                        <p className="text-xl font-medium text-gray-800 leading-relaxed">
                            <span className="font-bold">ความหมาย:</span> {dayMeaning}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LuckyDayData;