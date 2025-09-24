// src/app/horoscope/components/HoroscopeCard.tsx (ไฟล์ที่แก้ไข)

'use client';

import React from 'react';
import { Planet } from '@/data/starData'; // Import Planet interface

type HoroscopeCardProps = {
    sign: string;
    // แก้ไข kaset จาก number เป็น string
    kaset: string;
    planetsInSign: Planet[];
};

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({ sign, kaset, planetsInSign }) => {
    return (
        <div className="bg-white rounded-lg border bg-card text-card-foreground shadow-sm p-4 text-center">
            <h3 className="text-xl font-bold">{sign}</h3>
            {/* เปลี่ยนการแสดงผลจาก degree เป็น kaset */}
            <p className="text-sm text-muted-foreground mt-2">เกษตรเจ้าเรือน : {kaset}</p>

            {/* ส่วนแสดงผลดาว */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                {planetsInSign.length > 0 ? (
                    planetsInSign.map(planet => (
                        <span key={planet.id} className="bg-teal-200 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {planet.name}
                        </span>
                    ))
                ) : (
                    <span className="text-xs text-gray-500">ไม่มีดาวในราศีนี้</span>
                )}
            </div>
        </div>
    );
};

export default HoroscopeCard;