// src/components/Developers/CountdownCanvas.tsx

'use client';

import React from 'react';
import PlanetAnimation from './PlanetAnimation';
import { usePlanetData, PlanetInfo } from '@/hooks/usePlanetData';

const CountdownCanvas: React.FC = () => {
    const planetsInfo = usePlanetData();

    // กำหนดสีสำหรับดาวแต่ละดวง
    const planetColors = {
        'sun': '#FFD700',
        'moon': '#C0C0C0',
        'mars': '#B22222',
        'mercury': '#A9A9A9',
        'jupiter': '#CD853F',
        'venus': '#F5DEB3',
        'saturn': '#DAA520',
        'rahu': '#4B0082',
        'uranus': '#87CEEB',
        'ketu': '#556B2F',
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
                ปฏิทินการย้ายราศี (Canvas Animation)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {planetsInfo.map(planet => (
                    <PlanetAnimation
                        key={planet.id}
                        name={planet.name}
                        timeLeft={planet.timeLeft}
                        nextTransit={planet.nextTransit}
                        isCurrentTransit={planet.isCurrentTransit ?? false}
                        color={planetColors[planet.id as keyof typeof planetColors] || '#696969'}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountdownCanvas;