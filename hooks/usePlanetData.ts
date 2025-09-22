// src/hooks/usePlanetData.ts

import { useState, useEffect } from 'react';
import { planetsData, Planet } from '@/data/starData';

export interface PlanetInfo extends Planet {
    timeLeft: string;
    nextTransit: string;
    isCurrentTransit?: boolean;
}

export const usePlanetData = () => {
    // ...โค้ดส่วนที่เหลือยังคงเดิม
    const [planetsInfo, setPlanetsInfo] = useState<PlanetInfo[]>([]);

    useEffect(() => {
        const calculateTimeLeft = (planet: Planet) => {
            const now = new Date().getTime();
            const nextTransit = planet.transits.find(t => new Date(t.targetDate).getTime() > now);

            if (!nextTransit) {
                const lastTransit = planet.transits.find(t => new Date(t.targetDate).getTime() < now);
                return {
                    timeLeft: 'ไม่มีข้อมูลการย้ายราศีในอนาคต',
                    nextTransit: lastTransit ? `อยู่ใน ${lastTransit.sign}` : 'ไม่มีข้อมูลการย้ายราศี',
                    isCurrentTransit: true,
                };
            }

            const targetTime = new Date(nextTransit.targetDate).getTime();
            const distance = targetTime - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            return {
                timeLeft: `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`,
                nextTransit: `สู่ ${nextTransit.sign}`,
                isCurrentTransit: false,
            };
        };

        const intervalId = setInterval(() => {
            const updatedPlanetsInfo = planetsData.map(planet => ({
                ...planet,
                ...calculateTimeLeft(planet),
            }));
            setPlanetsInfo(updatedPlanetsInfo);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return planetsInfo;
};