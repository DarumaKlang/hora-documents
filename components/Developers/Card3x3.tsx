// src/components/Card3x3.tsx
import React from 'react';

interface Card3x3Props {
    title: string;
    items: { header: string | number; body: string | number }[];
}

const Card3x3: React.FC<Card3x3Props> = ({ title, items }) => {
    // ฟังก์ชันสำหรับแปลงตัวเลขอารบิกเป็นเลขไทย
    const convertToThaiNumerals = (num: string | number) => {
        const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
        return num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
    };

    // จัดเรียงข้อมูลตามลำดับที่ถูกต้อง: |1|2|3|, |6|ว่าง|4|, |8|5|7|
    const reorderedItems = [
        items[0], items[1], items[2],
        items[7], { header: '', body: '' }, items[3],
        items[6], items[5], items[4],
    ];

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-center text-xl font-bold text-teal-800 mb-4">{title}</h3>
            <div className="grid grid-cols-3 gap-0 w-full max-w-xs overflow-hidden rounded-md mx-auto">
                {reorderedItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            bg-white text-teal-800 font-medium p-2 text-center text-sm
                            ${(index + 1) % 3 !== 0 ? 'border-r border-gray-200' : ''}
                            ${index < 6 ? 'border-b border-gray-200' : ''}
                        `}
                    >
                        {item.header && <div className="font-semibold">{convertToThaiNumerals(item.header)}</div>}
                        {item.body && <div>{item.body}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card3x3;