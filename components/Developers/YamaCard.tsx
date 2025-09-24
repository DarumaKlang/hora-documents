// src/components/Developers/YamaCard.tsx
'use client';

import React from 'react';
import LuckyDayData from '@/components/Developers/LucyDayDataComponent';
import YamaAthaganClock from '@/components/Developers/YamaAthaganClock';

const YamaCard: React.FC = () => {
    return (
        <div className="bg-white backdrop-blur-md p-8 mb-4 rounded-lg shadow-xl text-teal-800 flex flex-col w-full">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
                YamaCard
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LuckyDayData title="ดิถีฤกษ์ไชย" />
                <YamaAthaganClock />
            </div>
        </div>
    );
};

export default YamaCard;