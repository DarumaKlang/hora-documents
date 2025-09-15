import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { LuFileText } from 'react-icons/lu';
import ComponentsComponent from '@/components/Developers/ComponentsComponent/ComponentsComponent';

export default function Components() {
    return (
        <DefaultLayout>
            <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
                <h2 className="text-2xl font-bold text-teal-800 mb-6">การใช้งาน Components</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="text-teal-800 mb-4 md:mb-0 md:mr-6">
                        <LuFileText size={50} />
                    </div>
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            ในส่วนนี้เราจะแสดงวิธีการนำโค้ด Component ของเราขึ้นไปใช้งานในหน้าเพจต่างๆ ของแอปพลิเคชัน
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Components เป็นหัวใจสำคัญในการพัฒนาเว็บด้วย Next.js ช่วยให้โค้ดของคุณเป็นระเบียบและนำไปใช้ซ้ำได้ง่ายขึ้น ทำให้การพัฒนาเร็วขึ้นและลดความซ้ำซ้อน
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            การใช้ TypeScript ร่วมกับการสร้าง Components ช่วยให้คุณกำหนดโครงสร้างข้อมูลที่ชัดเจน ลดข้อผิดพลาดที่อาจเกิดขึ้น และทำให้ทีมพัฒนามีแนวทางในการทำงานที่เป็นมาตรฐานมากขึ้น
                        </p>
                    </div>
                </div>
                <div>
                    <ComponentsComponent />
                </div>
            </div>
        </DefaultLayout>
    );
}