// src/components/Developers/Planets/SaturnCountdown.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { planetsData } from '@/data/starData';
const SaturnCountdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<string>('');
    const planetData = planetsData.find(p => p.id === 'saturn');
    useEffect(() => {
        if (!planetData) {
            setTimeLeft('ไม่พบข้อมูลดาวเสาร์');
            return;
        }
        const now = new Date().getTime();
        const nextTransit = planetData.transits.find(transit => new Date(transit.targetDate).getTime() > now);
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
                setTimeLeft(`ถึงเวลาที่ดาว ${planetData.name} ย้ายเข้าสู่ ${nextTransit.sign} แล้ว!`);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [planetData]);
    return (
        <div className="p-4 rounded-lg mb-2 bg-gray-100">
            <h3 className="text-md font-semibold text-gray-800">นับถอยหลังของ{planetData?.name}</h3>
            <p className="text-sm text-gray-500 mt-1">สู่ {planetData?.transits.find(t => new Date(t.targetDate).getTime() > new Date().getTime())?.sign}</p>
            <p className="text-sm font-bold mt-2 text-teal-700">{timeLeft}</p>
        </div>
    );
};
export default SaturnCountdown;