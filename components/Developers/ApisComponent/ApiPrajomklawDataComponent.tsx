// components/Client/Developers/Components/MainPageDevComponent.tsx
'use client';

import React from 'react';
import CodeBlock from '@/components/Developers/CodeBlock';

const ApiPrajomklawDataComponent = () => {
    // กำหนด string ของโค้ดสำหรับแต่ละบล็อก
    const PrajomklawDataCode = `[
    {
        "remainder": 1,
        "verse": "เศษ 1 เสาเรือนไฟไหม้ ชะตาร้ายทั้งชายหญิง\nไร้เรือนที่พึ่งพิง ที่พึ่งพักสำนักเนา\nจะร่อนเร่ระเหระหน เร่งเจียมตนอย่าดูเบา\nเพราะว่าชะตาเรา โทษประกอบจึงเกิดกรรม"
    },
    {
        "remainder": 2,
        "verse": "เศษ 2 จะครองไข้ มีโรคภัยสิงประจำ\nหยูกยาจะหาทำ บ่ถูกแท้จนแก่ตาย"
    },
    {
        "remainder": 3,
        "verse": "เศษ 3 ความสบาย มีข้าควายและเกวียนวัว\nพอสมสกุลตัว เท่าที่ทายสถานกลาง"
    },
    {
        "remainder": 4,
        "verse": "เศษ 4 มีข้าครอก อเนกนอกคนานาง\nอุปถัมภ์ล้วนสำอาง บ่ไข้ชุกบ่ทุกข์เป็น"
    },
    {
        "remainder": 5,
        "verse": "เศษ 5 ชะตากลับ ทุนทรัพย์จะแสนเข็ญ\nภายหลังชะตาเป็น ทุนทรัพย์นับอนันต์"
    },
    {
        "remainder": 6,
        "verse": "เศษ 6 จะยกญาติ เป็นเชื้อชาติประเสริฐสรรค์\nเงินตรายศถาพลัน ทุนทรัพย์ลำดับมี"
    },
    {
        "remainder": 7,
        "verse": "เศษ 7 นั้นผ้าขาด จะนุ่งห่มก็เต็มที\nภัตราย่อมราคี ระคายคับทั้งทรัพย์สิน"
    },
    {
        "remainder": 8,
        "verse": "เศษ 8 จะเปรื่องยศ จะปรากฏในแผ่นดิน\nทรัพย์ศฤงคารสถานถิ่น ทั้งอำนาจและวาสนา"
    },
    {
        "remainder": 9,
        "verse": "เศษ 9 กินข้าวกลางตลาด เสมอชาติสุนัขา\nถึงจะมีวาสนา ต้องประกอบทำงานการ\nเปรียบตระกูลวณิพก ถึงต่ำตกก็บ่นาน\nดั่งนักเลงสุราบาน พอขวนขวายใส่ท้องตน"
    },
    {
        "remainder": 0,
        "verse": "เศษ 10 (0) ดังนกแขกเต้า ทำรวงรังไว้บังฝน\nแสวงดีย่อมมีผล อย่าคลุกเคล้ากับเหล่าพาล\nเหมือนปักษีอันมีปีก รู้หลบหลีกธนูพราน\nถ้าประมาทจะเสียการ ถึงชอกช้ำระกำกาย"
    }
]`;

    const PrajomklawServiceCode = `async function fetchPrajomklawData() {
    try {
        const response = await fetch('/api/prajomklaw');
        if (!response.ok) {
            // เปลี่ยน backtick เป็น single หรือ double quote
            throw new Error('HTTP error! status: ' + response.status); 
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch Prajomklaw data:', error);
    }
}

fetchPrajomklawData();`;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md my-4 md:mt-0">
            <h3 className="text-xl font-bold text-teal-800 mb-6">ข้อมูลคำทำนายเศษพระจอมเกล้า</h3>

            <div className="bg-teal-50 p-6 my-4 rounded-lg">
                <h3 className="text-xl font-bold text-teal-800 mb-6">API Example</h3>
                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={PrajomklawServiceCode} language="typescript" />
                </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-800 mb-6">API DATA</h3>
                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={PrajomklawDataCode} language="typescript" />
                </div>
            </div>

        </div>
    );
};

export default ApiPrajomklawDataComponent;