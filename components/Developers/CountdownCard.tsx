// src/components/Developers/Countdown.tsx

'use client';

import React from 'react';
import SunCountdown from './Planets/SunCountdown';
import MarsCountdown from './Planets/MarsCountdown';
import MercuryCountdown from './Planets/MercuryCountdown';
import JupiterCountdown from './Planets/JupiterCountdown';
import VenusCountdown from './Planets/VenusCountdown';
import SaturnCountdown from './Planets/SaturnCountdown';
import RahuCountdown from './Planets/RahuCountdown';
import KetuCountdown from './Planets/KetuCountdown';
import UranusCountdown from './Planets/UranusCountdown';

const CountdownCard: React.FC = () => {
    return (
        <div className="bg-white backdrop-blur-md p-8 rounded-lg shadow-xl text-teal-800 flex flex-col w-full">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
                นาฬิกานับถอยหลังดาวย้ายราศี
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SunCountdown />
                <MarsCountdown />
                <MercuryCountdown />
                <JupiterCountdown />
                <VenusCountdown />
                <SaturnCountdown />
                <RahuCountdown />
                <KetuCountdown />
                <UranusCountdown />
            </div>
        </div>
    );
};

export default CountdownCard;