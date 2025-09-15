// components/Developers/ApisComponent/ApiDataServiceComponent.tsx
import React from 'react';
import CodeBlock from '@/components/Developers/CodeBlock';

interface ApiDataServiceComponent {
    title: string;
}

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

const ApiDataServiceComponent: React.FC<ApiDataServiceComponent> = ({ title }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">{title}</h2>
            <div className="text-gray-600">
                <h2 className="text-sm mb-6">ส่วนนี้จะเป็นส่วนในการให้บริการข้อมูล API</h2>

                <p className="text-xl font-bold text-teal-800 my-3">API ข้อมูลทักษา :</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={TaksaDataCode} language="typescript" />
                </div>

                <p className="text-xl font-bold text-teal-800 my-3">ตัวอย่างการเรียกใช้งาน API :</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={TaksaServiceCode} language="typescript" />
                </div>

                <p className="text-xl font-bold text-teal-800 my-3">API ข้อมูลคำทำนายเศษพระจอมเกล้า :</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={PrajomklawDataCode} language="typescript" />
                </div>

                <p className="text-xl font-bold text-teal-800 my-3">ตัวอย่างการเรียกใช้งาน API :</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={PrajomklawServiceCode} language="typescript" />
                </div>

            </div>
        </div>
    );
};

export default ApiDataServiceComponent;