"use client"

import React, { useState } from 'react';
import { treeshataData } from '@/data/treeshataData';

interface TreeshataDataProps {
    title: string;
}

const TreeshataDataComponent: React.FC<TreeshataDataProps> = ({ title }) => {
    const [selectedDara, setSelectedDara] = useState('');

    const handleDaraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDara(event.target.value);
    };

    const displayData = treeshataData.find(item => item.dara === selectedDara);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">{title}</h2>
            <div className="text-gray-600">
                <div className="mb-4">
                    <label htmlFor="dara-select" className="block text-gray-700 font-bold mb-2">
                        เลือกดาว
                    </label>
                    <select
                        id="dara-select"
                        value={selectedDara}
                        onChange={handleDaraChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="">-- กรุณาเลือกดาว --</option>
                        {treeshataData.map((item, index) => (
                            <option key={index} value={item.dara}>
                                {item.dara}
                            </option>
                        ))}
                    </select>
                </div>
                {displayData && (
                    <div className="mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
                        <h3 className="text-xl font-semibold text-teal-700 mb-2">{displayData.dara}</h3>
                        <p className="mb-2">
                            <span className="font-bold">แทนด้วย:</span> {displayData.discription}
                        </p>
                        <p>
                            <span className="font-bold">ความหมาย:</span> {displayData.meaning}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TreeshataDataComponent;