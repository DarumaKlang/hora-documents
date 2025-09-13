// components/Developers/PrajomklawDataComponent.tsx
import React from 'react';
import { prajomklawData } from '@/data/prajomklawData';

const PrajomklawDataComponent = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
                คำทำนายเศษพระจอมเกล้า
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prajomklawData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary-gold/20 border-2 border-secondary-gold/50 shadow-md text-xl font-bold text-secondary-gold mb-4">
                            {item.remainder}
                        </div>
                        <h3 className="text-lg font-semibold text-teal-800 leading-snug mb-2">
                            เศษที่ {item.remainder}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                            {item.verse}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrajomklawDataComponent;