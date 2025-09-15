"use client";

import React, { useState } from 'react';
import PrajomklawComponent from '@/components/Developers/PrajomklawComponent';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import PrajomklawDataComponent from '@/components/Developers/PrajomklawDataComponent';

export default function PrajomklawPage() {
    return (
        <DefaultLayout>

            {/* Main Content Section */}
            {/* ลบ cursor-pointer ออกจาก class นี้ */}
            <div className="w-full bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">

                <article className="prose prose-lg mx-auto text-gray-800">
                    <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">
                        ตำราเศษพระจอมเกล้า
                    </h1>
                    <p className="text-lg md:text-xl text-center mb-8 text-gray-500">
                        หลักการพยากรณ์ที่สืบทอดจากพระปรีชาสามารถของพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                        <p className="text-gray-600 leading-relaxed">
                            **เศษพระจอมเกล้า** เป็นแขนงหนึ่งของวิชาโหราศาสตร์ไทย ซึ่งพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัวทรงคิดขึ้น
                            และนักโหราศาสตร์ได้ใช้ในการพยากรณ์เรื่อยมาจนถึงปัจจุบันเพราะมีความแม่นยำและเป็นที่ยอมรับของผู้รับการพยากรณ์
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-teal-800 font-semibold mb-4">หลักการคำนวณ</h2>
                        <p className="text-gray-600 leading-relaxed">
                            รวมฐานวัน ฐานเดือน ฐานปีเข้าด้วยกันได้เท่าไหร่เอา 10 หารได้เศษเท่าไหร่ให้เก็บไว้
                            เช่น เกิดวันศุกร์ เดือนยี่ ปีมะเมีย จะได้ = 6 (วันศุกร์) + 2 (เดือนยี่) + 7 (ปีมะเมีย) = 15
                            หารด้วย 10 จะได้ 15/10 เหลือเศษเท่ากับห้า เปรียบเทียบกับคำพยากรณ์ได้ดังนี้
                        </p>
                    </div>
                </article>

                {/* Main Component */}
                <div className="my-8">
                    <PrajomklawComponent />
                </div>

                <PrajomklawDataComponent />                

            </div>
        </DefaultLayout>
    );
}