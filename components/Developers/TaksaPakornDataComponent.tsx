'use client';

import React, { useState } from 'react';
import { taksaPakornData } from '@/data/taksaPakornData';

const days = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];

export default function TaksaDropdown() {
    const [selectedDay, setSelectedDay] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDay(event.target.value);
    };

    const selectedData = taksaPakornData.find(data => data.day === selectedDay);

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-teal-800 flex flex-col h-full w-full">
            <h2 className="text-2xl font-bold text-secondary-gold mb-2">
                ทักษาปกรณ์
            </h2>
            <div className="mb-4">
                <label htmlFor="day-select" className="block text-md font-medium text-gray-600">
                    เลือกวันเกิดของคุณ :
                </label>
                <select
                    id="day-select"
                    className="text-xs mt-1 block w-full pl-3 pr-10 py-2 border-secondary-gold/30 bg-teal-800 text-gray-400 focus:outline-none focus:ring-secondary-gold focus:border-secondary-gold rounded-md"
                    value={selectedDay}
                    onChange={handleSelectChange}
                >
                    <option value="" className="bg-gray-800 text-white">-- โปรดเลือกวัน --</option>
                    {days.map(day => (
                        <option key={day} value={day} className="bg-gray-800 text-white">
                            วัน{day}
                        </option>
                    ))}
                </select>
            </div>

            {selectedData && (
                <div className="bg-white/10 p-4 pt-2 rounded-lg shadow-md border border-secondary-gold/30">
                    <h4 className="text-md font-semibold text-secondary-gold mb-2">อักขระมงคลสำหรับผู้เกิดวัน{selectedData.day}</h4>

                    <ul className="list-none space-y-2 mb-2 text-xs">
                        {selectedData.attributes.map((attr, index) => (
                            <li key={index}>
                                <div className="font-medium text-gray-600">{attr.title} ({attr.symbol}):</div>
                                <p className="text-gray-400">{attr.description}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="text-red-400 text-xs">
                        <span className="font-medium">อักษรที่ควรหลีกเลี่ยง ({selectedData.unlucky.symbol}) ({selectedData.unlucky.title}):</span>
                        <p className="text-gray-500 mt-1">{selectedData.unlucky.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}