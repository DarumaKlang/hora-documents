// src/app/horoscope/components/HoroscopeGrid.tsx (ไฟล์ที่แก้ไข)

'use client';

import React from 'react';
import HoroscopeCard from './HoroscopeCard';
import { planetsData, Planet, Transit } from '@/data/starData'; // Import ข้อมูลดาว

const horoscopes = [
    { sign: 'ราศีเมษ', kaset: '๓' },
    { sign: 'ราศีพฤษภ', kaset: '๖' },
    { sign: 'ราศีมิถุน', kaset: '๔' },
    { sign: 'ราศีกรกฎ', kaset: '๒' },
    { sign: 'ราศีสิงห์', kaset: '๑' },
    { sign: 'ราศีกันย์', kaset: '๔' },
    { sign: 'ราศีตุล', kaset: '๖' }, // แก้ชื่อให้ตรงกับข้อมูลดาว
    { sign: 'ราศีพิจิก', kaset: '๓' },
    { sign: 'ราศีธนู', kaset: '๕' },
    { sign: 'ราศีมังกร', kaset: '๗' },
    { sign: 'ราศีกุมภ์', kaset: '๘' },
    { sign: 'ราศีมีน', kaset: '๕' },
];

// Helper function เพื่อหาว่าดาวดวงใดอยู่ในราศีใด ณ ปัจจุบัน
const getPlanetsBySign = (sign: string): Planet[] => {
    const now = new Date();
    const planetsInSign: Planet[] = [];

    planetsData.forEach(planet => {
        // หา transit ครั้งสุดท้ายที่เกิดขึ้นก่อนหรือเท่ากับเวลาปัจจุบัน
        const lastTransit = planet.transits
            .filter(t => new Date(t.targetDate) <= now)
            .sort((a, b) => new Date(b.targetDate).getTime() - new Date(a.targetDate).getTime())[0];

        // ถ้ามีข้อมูล transit และราศีตรงกัน ให้เพิ่มดาวเข้าไปในรายการ
        if (lastTransit && lastTransit.sign === sign) {
            planetsInSign.push(planet);
        }
    });

    return planetsInSign;
};

const HoroscopeGrid: React.FC = () => {
    return (

        <div className="bg-white backdrop-blur-md p-4 mb-6 rounded-lg shadow-xl text-teal-700 flex flex-col w-full">
            <h2 className="text-2xl font-bold text-teal-700 p-4">
                ปฏิทินดวงดาว
            </h2>

            <div className="backdrop-blur-md rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {horoscopes.map((horoscope, index) => {
                    const planetsInSign = getPlanetsBySign(horoscope.sign);
                    return (
                        <HoroscopeCard
                            key={index}
                            sign={horoscope.sign}
                            kaset={horoscope.kaset}
                            planetsInSign={planetsInSign} // ส่งข้อมูลดาวไปที่ card
                        />
                    );
                })}
            </div>

        </div>
    );
};

export default HoroscopeGrid;