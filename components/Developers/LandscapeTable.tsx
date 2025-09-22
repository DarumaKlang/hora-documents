import React from 'react';
import { landscape } from '@/data/sevennineData';

// กำหนด type สำหรับข้อมูลแต่ละช่องในตาราง
interface CellData {
    title: string;
    value: number;
}

// กำหนด type สำหรับข้อมูลแต่ละแถวในตาราง
interface RowData {
    cells: CellData[];
}

// สร้าง Mapping สำหรับตัวเลขและสี
const valueToColorMap: { [key: number]: string } = {
    1: 'bg-red-300',
    2: 'bg-yellow-200',
    3: 'bg-pink-200',
    4: 'bg-green-300',
    5: 'bg-orange-400',
    6: 'bg-sky-400',
    7: 'bg-indigo-300',
};

// ฟังก์ชันสำหรับแปลงตัวเลขเป็นเลขไทย
const toThaiNumeral = (num: number): string => {
    // ถ้าค่าที่ส่งมาไม่ใช่ตัวเลข ให้ส่งค่าว่างกลับไปแทน
    if (isNaN(num)) {
        return '';
    }
    const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    return num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
};

// แปลงข้อมูลจาก landscape ที่ import เข้ามา
const initialTableData: RowData[] = landscape.map(row => ({
    cells: row.landscape.map(item => ({
        title: item,
        value: NaN, // ใช้ NaN (Not a Number) เป็น placeholder
    })),
}));

const sumData = [9, 12, 8, 11, 14, 17, 13];

const LandscapeTable: React.FC = () => {
    return (
        <div className="flex flex-col items-center font-sans bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white">
            <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">
                ตารางมหาสัตตเลข ๗ ตัว ๙ ฐาน
            </h1>
            <div className="grid grid-cols-7 gap-1 w-full max-w-4xl">
                {initialTableData.map((row, rowIndex) => (
                    row.cells.map((cell, cellIndex) => (
                        <div
                            key={`${rowIndex}-${cellIndex}`}
                            className={`p-2 text-center border border-gray-300 rounded-md ${valueToColorMap[cell.value] || 'bg-gray-500'}`}
                        >
                            <div className="text-gray-600 text-sm">{cell.title}</div>
                            <div className="font-bold text-lg mt-1">{toThaiNumeral(cell.value)}</div>
                        </div>
                    ))
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1 w-full max-w-4xl mt-2">
                {sumData.map((sum, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm ${valueToColorMap[sum] || 'bg-gray-500'}`}
                    >
                        {toThaiNumeral(sum)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandscapeTable;