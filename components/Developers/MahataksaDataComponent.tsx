// components/Developers/MahataksaInformationComponent.tsx
import React from 'react';
import Card3x3 from '@/components/Developers/Card3x3';
import {
    dailyColorData,
    taksaElementsData,
    chaiyapumeTaksaData,
    taksaPowerData,
} from '@/data/mahataksaData';

const MahataksaDataComponent: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
                ข้อมูลทักษาอื่น ๆ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card อื่นๆ ที่มีตัวเลขและสามารถแปลงเป็นเลขไทยได้ */}
                <Card3x3
                    title={dailyColorData.name}
                    items={dailyColorData.numbers.map((num, index) => ({
                        header: num,
                        body: dailyColorData.color[index],
                    }))}
                />
                <Card3x3
                    title={taksaElementsData.name}
                    items={taksaElementsData.numbers.map((num, index) => ({
                        header: num,
                        body: taksaElementsData.elements[index],
                    }))}
                />
                <Card3x3
                    title={chaiyapumeTaksaData.name}
                    items={chaiyapumeTaksaData.numbers.map((num, index) => ({
                        header: num,
                        body: chaiyapumeTaksaData.chaiyapume[index],
                    }))}
                />
                <Card3x3
                    title={taksaPowerData.name}
                    items={taksaPowerData.numbers.map((num, index) => ({
                        header: num,
                        body: taksaPowerData.power[index],
                    }))}
                />
            </div>
        </div>
    );
};

export default MahataksaDataComponent;