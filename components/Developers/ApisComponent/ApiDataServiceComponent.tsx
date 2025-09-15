// components/Client/Developers/Components/MainPageDevComponent.tsx
'use client';

import React from 'react';
import CodeBlock from '@/components/Developers/CodeBlock';

const ApiDataServiceComponent = () => {
    // กำหนด string ของโค้ดสำหรับแต่ละบล็อก
    const TaksaDataCode = `{
    "mahataksa": [
        {
        "day": "อาทิตย์ (๑)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["บริวาร", "อายุ", "เดช", "ศรี", "อุตสาหะ", "กาลกิณี", "มูลละ", "มนตรี"]
        },
        {
        "day": "จันทร์ (๒)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["กาลกิณี", "บริวาร", "อายุ", "เดช", "มูลละ", "มนตรี", "ศรี", "อุตสาหะ"]
        },
        {
        "day": "อังคาร (๓)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["มนตรี", "กาลกิณี", "บริวาร", "อายุ", "ศรี", "อุตสาหะ", "เดช", "มูลละ"]
        },
        {
        "day": "พุธ (๔)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["อุตสาหะ", "มนตรี", "กาลกิณี", "บริวาร", "เดช", "มูลละ", "อายุ", "ศรี"]
        },
        {
        "day": "พฤหัสบดี (๕)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["ศรี", "มูลละ", "อุตสาหะ", "มนตรี", "บริวาร", "เดช", "กาลกิณี", "อายุ"]
        },
        {
        "day": "ศุกร์ (๖)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["อายุ", "เดช", "ศรี", "มูลละ", "มนตรี", "บริวาร", "อุตสาหะ", "กาลกิณี"]
        },
        {
        "day": "เสาร์ (๗)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["มูลละ", "อุตสาหะ", "มนตรี", "กาลกิณี", "อายุ", "ศรี", "บริวาร", "เดช"]
        },
        {
        "day": "พุธ(กลางคืน) ดาวราหู (๘)",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "taksa": ["เดช", "ศรี", "มูลละ", "อุตสาหะ", "กาลกิณี", "อายุ", "มนตรี", "บริวาร"]
        }
    ],
    "taksaPakorn": {
        "name": "ทักษาปกรณ์",
        "animalname": ["ครุฑนาม", "พยัคนาม", "ราชสีนาม", "โสณนาม", "นาคนาม", "มุสิกนาม", "คชนาม", "อัชชนาม"],
        "symbol": ["อ และ สระ", "ก,ข,ค,ฆ,ง", "จ,ฉ,ช,ซ,ฌ,ญ", "ฎ,ฏ,ฐ,ฑ,ฒ,ณ", "ด,ต,ถ,ท,ธ,น", "บ,ป,ผ,ฝ,พ,ฟ,ภ,ม", "ย,ร,ล,ว", "ศ,ษ,ส,ห,ฬ,ฮ"]
    },
    "dailyColor": {
        "name": "สีประจำวัน",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "color": ["แดง", "เหลือง", "ชมพู", "เขียว", "ม่วง", "ส้ม", "เทา", "ฟ้า"]
    },
    "taksaElements": {
        "name": "ทักษาธาตุ",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "elements": ["ไฟ", "ดิน", "ลม", "น้ำ", "ไฟ", "ดิน", "ลม", "น้ำ"]
    },
    "chaiyapumeTaksa": {
        "name": "ชัยภูมิทักษา",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "chaiyapume": ["อีสาน", "บูรพา", "อาคเนย์", "ทักษิน", "หรดี", "ประจิม", "พายับ", "อุดร"]
    },
    "taksaPower": {
        "name": "กำลังดาวทักษา",
        "numbers": [1, 2, 3, 4, 7, 5, 8, 6],
        "power": ["กำลัง ๖", "กำลัง ๑๕", "กำลัง ๘", "กำลัง ๑๗", "กำลัง ๑๐", "กำลัง ๑๙", "กำลัง ๑๒", "กำลัง ๒๑"]
    }
}`;

    const TaksaServiceCode = `async function fetchMahataksaData() {
    try {
        const response = await fetch('/api/mahataksa');
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        // สามารถเข้าถึงข้อมูลแต่ละส่วนได้ เช่น data.mahataksa
    } catch (error) {
        console.error('Failed to fetch Mahataksa data:', error);
    }
}

fetchMahataksaData();`;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md my-4 md:mt-0">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">ข้อมูลมหาทักษา</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                
                <div>
                    <h3 className="text-xl font-bold text-teal-800 mb-6">API Example</h3>
                    <CodeBlock code={TaksaServiceCode} language="typescript" />
                    <h3 className="text-xl font-bold text-teal-800 my-6">API DATA</h3>
                    <CodeBlock code={TaksaDataCode} language="typescript" />
                </div>

            </div>

        </div>
    );
};

export default ApiDataServiceComponent;