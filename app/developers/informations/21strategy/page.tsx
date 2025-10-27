// app/page.tsx

import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
// แก้ไขชื่อ Component ที่ Import
import StrategyComponent from '@/components/Developers/21strategy'; 
import SevenCalculatorComponent from '@/components/Developers/SevenCalculator'; // 👈 นำเข้า Component คำนวณ

export default function ContentsPage() {
    return (
        <DefaultLayout>
            <div className="space-y-8 p-4 md:p-8">
                {/* 1. Component คำนวณ (Seven Calculator) */}
                <SevenCalculatorComponent 
                    title="คำนวณ 7 ฐาน (วัน-เดือน-ปีนักษัตร)" 
                />

                {/* 2. Component กลยุทธ์ (21 Strategy) */}
                <StrategyComponent 
                    title="ตำราพิชัยสงคราม 21 กลยุทธ์" 
                />
            </div>
        </DefaultLayout>
    );
}