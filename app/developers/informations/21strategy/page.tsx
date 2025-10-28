// app/page.tsx

import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
// นำเข้า Components ที่เกี่ยวข้อง
import StrategyComponent from '@/components/Developers/21strategy';
import SevenCalculatorComponent from '@/components/Developers/SevenCalculator';
import TreeshataDataComponent from '@/components/Developers/TreeshataDataComponent';
import PairedNumberCalculator from '@/components/Developers/PairedNumberCalculator';// 👈 นำเข้า Component ใหม่
import BaseStrategyComponent from '@/components/Developers/BaseStrategy';

export default function ContentsPage() {
    return (
        <DefaultLayout>
            <div className="space-y-8 p-4 md:p-8">

                {/* ----------------------------------------------------------------------
                  โครงสร้างตาราง 1 แถว 3 คอลัมน์ (Responsive)
                  - Mobile: grid-cols-1
                  - Large Screens (Desktop): lg:grid-cols-3 
                  ---------------------------------------------------------------------- */}
                {/* 1. Component คำนวณ (Seven Calculator) */}
                <SevenCalculatorComponent
                    title="คำนวณเลข 7 ตัว 3 ฐาน (วัน-เดือน-ปีนักษัตร)"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* คอลัมน์ 1: TreeshataDataComponent */}
                    <div className="lg:col-span-1">
                        <TreeshataDataComponent title="พฤกษาชาตา" />
                    </div>

                    {/* คอลัมน์ 2: BaseStrategyComponent */}
                    <div className="lg:col-span-1">
                        <BaseStrategyComponent title="สรุปกลยุทธ" />
                    </div>

                    {/* คอลัมน์ 3: PairedNumberCalculator */}
                    <div className="lg:col-span-1">
                        <PairedNumberCalculator title='คู่เลขสัมพันธ์' />
                    </div>

                </div> {/* 👈 สิ้นสุด Div ตาราง 3 คอลัมน์ */}

                {/* 2. Component กลยุทธ (21 Strategy) */}
                <StrategyComponent
                    title="ตำราพิชัยสงคราม 21 กลยุทธ"
                />
            </div>
        </DefaultLayout>
    );
}