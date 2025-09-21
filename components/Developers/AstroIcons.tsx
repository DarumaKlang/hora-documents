// src/components/AstroIcons.tsx
'use client';

// Icons from Lucide (lu)
import {
  LuSun, LuMoon, LuStar, LuSparkles, LuSatellite, LuStarHalf, LuStarOff,
  LuEclipse, LuOrbit, LuTelescope, LuPlane // Corrected from LuPlanet
} from 'react-icons/lu';

// Icons from Game Icons (gi) - Corrected imports for Zodiac signs and other symbols
import {
  GiAries, GiAquarius, GiCancer, GiCapricorn, GiGemini, GiLeo, GiLibra,
  GiPisces, GiSagittarius, GiScorpio, GiTaurus, GiVirgo, GiGalaxy,
  GiStarSwirl, GiCometSpark, GiMoon, GiStarFormation, GiOrbital
} from 'react-icons/gi';

// Icons from Font Awesome (fa)
import {
  FaSun, FaMoon, FaStar, FaMeteor, FaSatellite, FaRegStar, FaRegSun
} from 'react-icons/fa';

import { useState } from 'react';

// Combined and corrected list of icons
const astroIcons = [
  // Lucide Icons (lu) - Corrected
  { name: 'LuSun (ดวงอาทิตย์)', component: LuSun },
  { name: 'LuMoon (ดวงจันทร์)', component: LuMoon },
  { name: 'LuStar (ดวงดาว)', component: LuStar },
  { name: 'LuSparkles (ประกายดาว)', component: LuSparkles },
  { name: 'LuSatellite (ดาวเทียม)', component: LuSatellite },
  { name: 'LuEclipse (สุริยุปราคา/จันทรุปราคา)', component: LuEclipse },
  { name: 'LuOrbit (วงโคจร)', component: LuOrbit },
  { name: 'LuTelescope (กล้องโทรทรรศน์)', component: LuTelescope },
  { name: 'LuPlane (เครื่องบิน)', component: LuPlane },

  // Game Icons (gi) - Corrected
  { name: 'GiGalaxy (กาแล็กซี)', component: GiGalaxy },
  { name: 'GiAries (ราศีเมษ)', component: GiAries },
  { name: 'GiTaurus (ราศีพฤษภ)', component: GiTaurus },
  { name: 'GiGemini (ราศีเมถุน)', component: GiGemini },
  { name: 'GiCancer (ราศีกรกฎ)', component: GiCancer },
  { name: 'GiLeo (ราศีสิงห์)', component: GiLeo },
  { name: 'GiLibra (ราศีตุลย์)', component: GiLibra },
  { name: 'GiScorpio (ราศีพิจิก)', component: GiScorpio },
  { name: 'GiSagittarius (ราศีธนู)', component: GiSagittarius },
  { name: 'GiCapricorn (ราศีมังกร)', component: GiCapricorn },
  { name: 'GiVirgo (ราศีกันย์)', component: GiVirgo },
  { name: 'GiStarSwirl (ดาวหมุนวน)', component: GiStarSwirl },
  { name: 'GiCometSpark (ประกายดาวหาง)', component: GiCometSpark },
  { name: 'GiMoon (ดวงจันทร์)', component: GiMoon },
  { name: 'GiStarFormation (การก่อตัวของดาว)', component: GiStarFormation },
  { name: 'GiOrbital (วงโคจร)', component: GiOrbital },

  // Font Awesome (fa)
  { name: 'FaSun (ดวงอาทิตย์)', component: FaSun },
  { name: 'FaMoon (ดวงจันทร์)', component: FaMoon },
  { name: 'FaStar (ดาว)', component: FaStar },
  { name: 'FaMeteor (ดาวตก)', component: FaMeteor },
  { name: 'FaSatellite (ดาวเทียม)', component: FaSatellite },
];

export default function AstroIcons() {
    const [size, setSize] = useState(40);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                ไอคอนโหราศาสตร์และดวงดาวจากหลายไลบรารี
            </h2>
            <div className="mb-6 flex items-center justify-center space-x-4">
                <label htmlFor="icon-size" className="text-gray-700">
                    ปรับขนาดไอคอน:
                </label>
                <input
                    id="icon-size"
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value, 10))}
                    className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-gray-700">{size} px</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {astroIcons.map((icon, index) => {
                    const IconComponent = icon.component;
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                        >
                            <IconComponent size={size} className="text-blue-500 mb-2" />
                            <p className="text-sm text-center font-medium text-gray-800">
                                {icon.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}