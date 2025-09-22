// src/components/Developers/Countdown.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { planetsData, Transit, Planet } from '@/data/starData';

// Component ย่อยสำหรับแสดงผลการนับถอยหลังของดาวแต่ละดวง
const StarCountdown: React.FC<{ planet: Planet }> = ({ planet }) => {
    const [timeLeft, setTimeLeft] = useState<string>('');

    useEffect(() => {
        const now = new Date().getTime();
        const nextTransit = planet.transits.find(transit => new Date(transit.targetDate).getTime() > now);

        if (!nextTransit) {
            setTimeLeft('ไม่มีข้อมูลการย้ายราศีในอนาคต');
            return;
        }

        const targetTime = new Date(nextTransit.targetDate).getTime();

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft(`${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`);
            } else {
                clearInterval(intervalId);
                setTimeLeft(`ถึงเวลาที่ดวง ${planet.name} ย้ายเข้าสู่ ${nextTransit.sign} แล้ว!`);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [planet]);

    return (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-md font-semibold text-gray-800">
                นับถอยหลังของ{planet.name}
            </h3>
            {timeLeft !== 'ไม่มีข้อมูลการย้ายราศีในอนาคต' && (
                <p className="text-sm text-gray-500 mt-1">
                    สู่ {planet.transits.find(t => new Date(t.targetDate).getTime() > new Date().getTime())?.sign}
                </p>
            )}
            <p className="text-sm font-bold mt-2 text-teal-700">
                {timeLeft}
            </p>
        </div>
    );
};

// Component หลักที่ส่งออกไป
const Countdown: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
                เวลานับถอยหลังการย้ายราศี
            </h2>
            <div className="space-y-2 text-sm">
                {planetsData.map(planet => (
                    // กรองดาวที่มีข้อมูลการย้ายราศีในอนาคต
                    planet.transits.some(t => new Date(t.targetDate).getTime() > new Date().getTime()) && (
                        <StarCountdown key={planet.id} planet={planet} />
                    )
                ))}
            </div>
        </div>
    );
};

export default Countdown;