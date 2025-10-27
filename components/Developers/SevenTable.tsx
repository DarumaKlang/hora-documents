// components/Developers/SevenTable.tsx
import React from 'react';

/**
 * Interface สำหรับโครงสร้างข้อมูลของตารางทักษา/ปฏิทิน
 * (7 คอลัมน์ x 3 แถว)
 */
interface SevenTableProps {
    title: string;
    headers: string[];
    rowLabels: string[];
    data: (React.ReactNode | string)[][];
    className?: string; 
}

const SevenTableComponent: React.FC<SevenTableProps> = ({
    title,
    headers,
    rowLabels,
    data,
    className = '',
}) => {
    // ... [Validation คงเดิม] ...
    if (headers.length !== 7) {
        console.error('SevenTable: Headers must contain exactly 7 items.');
        return <div className="p-4 text-red-600 bg-red-100 rounded-md">Error: Headers must be 7 columns.</div>;
    }
    if (rowLabels.length !== 3) {
        console.error('SevenTable: Row labels must contain exactly 3 items.');
        return <div className="p-4 text-red-600 bg-red-100 rounded-md">Error: Row labels must be 3 rows.</div>;
    }
    if (data.length !== 3 || data.some(row => row.length !== 7)) {
        console.error('SevenTable: Data must be a 3x7 matrix.');
        return <div className="p-4 text-red-600 bg-red-100 rounded-md">Error: Data must be a 3x7 matrix.</div>;
    }

    return (
        // ปรับ Padding: Mobile: p-4, Desktop: sm:p-6
        <div className={`p-4 sm:p-6 bg-white rounded-lg shadow-md flex-1 ${className}`}> 
            {/* ปรับขนาดหัวข้อ: Mobile: text-xl, Desktop: sm:text-2xl */}
            <h2 className="text-xl sm:text-2xl font-bold text-teal-800 mb-4 sm:mb-6">{title}</h2>
            
            <div>
                <table className="w-full table-fixed border-collapse border border-gray-300"> 
                    {/* ส่วนหัวของตาราง (Headers) */}
                    <thead>
                        <tr className="bg-teal-50">
                            {/* ช่องว่างสำหรับชื่อแถว: ซ่อนบน Mobile (hidden), แสดงบน Desktop (sm:table-cell) */}
                            <th className="hidden sm:table-cell w-[15%] p-1 sm:p-2 text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider border border-gray-300"></th> 
                            {headers.map((header, index) => (
                                <th 
                                    key={index} 
                                    // Header: Mobile size -> p-0.5/text-[9px], Desktop size -> sm:p-2/sm:text-sm
                                    className="p-0.5 sm:p-2 text-[9px] sm:text-sm font-semibold text-center text-teal-700 uppercase tracking-wider border border-gray-300"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    
                    {/* ส่วนเนื้อหาตาราง (Body) */}
                    <tbody>
                        {rowLabels.map((label, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {/* ชื่อแถว: ซ่อนบน Mobile (hidden), แสดงบน Desktop (sm:table-cell) */}
                                <td className="hidden sm:table-cell w-[15%] p-1 sm:p-2 text-[10px] sm:text-sm font-bold text-gray-800 border border-gray-300 bg-teal-100 text-center">
                                    {label}
                                </td>
                                
                                {/* ข้อมูลในแต่ละคอลัมน์ (C1-C7) */}
                                {data[rowIndex].map((cellData, colIndex) => (
                                    <td 
                                        key={colIndex} 
                                        // Cell: Mobile size -> p-0/text-[9px], Desktop size -> sm:p-2/sm:text-xs
                                        className="p-0 sm:p-2 text-[9px] sm:text-xs text-gray-600 border border-gray-300 text-center whitespace-normal"
                                    >
                                        {cellData}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SevenTableComponent;