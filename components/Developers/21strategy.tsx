// components/Developers/21strategy.tsx
'use client';

import React, { useState, useMemo } from 'react';
import {
    STRATEGIES,
    Strategy,
    HEADER_SUBTITLE,
    CONDITION_NOTES,
    CONDITION_TITLE,
} from '@/data/21strategy';

interface StrategyComponentProps {
    title: string;
}

/**
 * Component สำหรับแสดงรายละเอียดของกลยุทธที่เลือก
 */
const SelectedStrategyDetail: React.FC<{ strategy: Strategy | null }> = ({ strategy }) => {
    if (!strategy) {
        return (
            <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg shadow-inner mt-6">
                <p className="text-xl font-medium">โปรดเลือกกลยุทธที่ท่านสนใจจากรายการด้านบน</p>
                <p className="mt-2 text-sm">เพื่อแสดงรายละเอียดและคำแนะนำทางยุทธศาสตร์</p>
            </div>
        );
    }

    const { number, title, description, prakasit, stars, notes } = strategy;

    return (
        <div className="p-6 md:p-8 bg-white shadow-2xl rounded-xl ring-2 ring-teal-300 border-b-4 border-teal-500 mt-6">
            <h3 className="text-2xl font-extrabold text-teal-700 mb-3 flex items-center">
                <span className="mr-3 w-6 text-center text-3xl">{number}.</span>
                <span className="flex-1">{title.trim()}</span>
            </h3>
            <p className="text-base font-medium text-gray-700 mb-4 whitespace-pre-line border-b pb-4 border-gray-100">
                {description && <span className="italic">({description.trim()})</span>}
            </p>

            <div className="space-y-3 text-gray-700 pt-4">
                <p className="text-base flex">
                    <span className="font-semibold text-gray-900 mr-2 flex-shrink-0">📍 ตำแหน่ง/หลักการ:</span>
                    <span className="flex-1">{prakasit}</span>
                </p>

                {notes && notes.length > 0 && (
                    <div className="pt-2">
                        <h4 className="text-base font-semibold text-gray-900 mb-1">รายละเอียดเพิ่มเติม:</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {notes.map((note, index) => (
                                <li key={index} className="text-sm whitespace-pre-line text-gray-600">
                                    {note.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {stars && (
                    <p className="text-lg font-bold text-orange-600 pt-4 border-t border-gray-200 mt-4">
                        {stars} <span className="text-base font-normal text-gray-500">(ระดับความสำคัญ)</span>
                    </p>
                )}
            </div>
        </div>
    );
};


const StrategyComponent: React.FC<StrategyComponentProps> = ({ title }) => {
    const [selectedStrategyNumber, setSelectedStrategyNumber] = useState<number | null>(null);

    const selectedStrategy = useMemo(() => {
        if (selectedStrategyNumber === null) {
            return null;
        }
        return STRATEGIES.find(s => s.number === selectedStrategyNumber) || null;
    }, [selectedStrategyNumber]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const number = value ? parseInt(value) : null;
        setSelectedStrategyNumber(number);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex-1">
            {/* Header */}
            <h1 className="text-2xl font-bold text-teal-800 mb-2">{title}</h1>
            <p className="mb-6 text-base font-medium text-gray-600 whitespace-pre-line border-b pb-4 border-gray-200">
                {HEADER_SUBTITLE}
            </p>

            {/* Dropdown Selection */}
            <div className="mb-4">
                <label htmlFor="strategy-select" className="block text-gray-700 font-bold mb-2">
                    เลือกกลยุทธที่ต้องการศึกษา
                </label>
                <div className="relative">
                    <select
                        id="strategy-select"
                        value={selectedStrategyNumber !== null ? selectedStrategyNumber.toString() : ''}
                        onChange={handleSelectChange}
                        className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm appearance-none cursor-pointer pr-10"
                    >
                        <option value="" disabled>-- เลือกกลยุทธจาก 21 ข้อ --</option>
                        {STRATEGIES.map((strategy) => (
                            <option key={strategy.number} value={strategy.number}>
                                {strategy.number}. {strategy.title}
                            </option>
                        ))}
                    </select>
                    {/* Custom Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Display Selected Strategy Details */}
            <SelectedStrategyDetail strategy={selectedStrategy} />

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 1 เป็นพื้นฐานกลยุทธทั้งหมด</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>ฤทธี (อัตตะ)</strong> : ฝึกฝนตนเอง ความพร้อมของตนเอง ความพร้อมของแม่ทัพ<br />
                    <strong>สีหจักร (ตนุ)</strong> : รวบรวมสมัครพรรคพวก หาคนที่ถนัดเฉพาะด้าน จักรแปลว่ารอบ คือรอบรู้ทั้งหมด ว่า วงการนี้มี เสือ สิงห์ กระทิง แรด อะไรที่ไหนบ้าง / ถ้าผิดพลาดคือของคนๆ เดียว ถ้าสำเร็จจะเป็นของทุกคน<br />
                    <strong>ลักษณ์ซ่อนเงื่อน (มรณะ)</strong> : ทำงานด้วยมือขวา อย่าให้มือซ้ายรู้ ปกติการทำงานจะใช้มือขวาเป็นผู้นำ มือซ้ายตะเกียกตะกายตามมือขวา / ต้องทำให้สำเร็จ ถึงจะเป็นลักษณะซ่อนเงื่อน ถึงจะเป็นมรณะ / ถ้ามือซ้ายรู้ อาจจะ Copy เอาไปทำเอง หรือ มาทำลายแผนงานได้ / ถ้าเป็นพระ ตอนซ้อมปาฏิโมกข์ ห้ามรบกวน อย่าไปซ้อมให้ใครรู้จนกว่าจะสำเร็จ เพื่อป้องกันปัญหาที่เกิดจากคนเข้ามาวุ่นวายและทำลาย / ความลับที่มือซ้ายไม่รู้ก็คือ การทำซ้ำๆ ทำบ่อยๆ พอทำได้ เขาก็เรียกเป็นความเคยชิน (ความลับที่มือซ้ายไม่รู้)
                </p>
            </div>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 2 มีทรัพยากร</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>เถื่อนกำบัง (หินะ)</strong> : สะสมอาวุธ สะสมเสบียง สะสมทรัพยากรต่างๆไว้ ตั้งต้นมาจากลักษณะซ่อนเงื่อน เผลอแป๊บเดียวมีเงิน 40 ล้าน ให้ใครรู้ก็ไม่ได้ เพราะจะมาปล้น ฝากธนาคารก็ไม่ได้ (เพราะ) ถูกตรวจสอบได้อีก / ทุกการสะสมจะมีพื้นที่<br />
                    <strong>พังภูผา (กะดุมภะ)</strong> : ใช้ความเข้มแข็งเอาชนะ ใช้ทรัพยากรธรรมชาติ ทรัพย์สินต่าง ๆ หักหาญเอาชนะทีเดียว ใช้ไม้แข็ง<br />
                    <strong>ม้ากินสวน (ศุภะ)</strong> : ใช้ความดีเอาชนะ ค่อยๆ ล้อมเข้าไป กินพื้นที่มากขึ้น ได้พื้นที่มากขึ้น ทางด้านบุคคลก่อน เหมือนกับตะเข็บชายแดน 2 จังหวัด เช่น ผู้ใหญ่บ้าน ทำให้ผู้คนอยากอยู่จังหวัดนี้ก่อน คนจะเพิ่มขึ้น รอยต่อจะขยับเพิ่มขึ้น เหมือน ม้ากินสวน (หรือ) เล็มกินหญ้าไปเรื่อยๆ สง่างาม แต่ที่ไหนดี ค่อยๆ กินพื้นที่เข้าไปเรื่อยๆ โดยได้ความดีความสง่างาม
                </p>
            </div>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 3 ผูกมิตร</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>พวนเรือโยง (ธนัง)</strong> : ผูกผลประโยชน์เข้าด้วยกัน หลักพันธมิตร มีผลประโยชน์ คือ ในเมื่อรบเอาชนะไม่ได้ก็ผูกมิตรซะเลย / ผูกมิตรโดยเราเข้าไปหาเขา<br />
                    <strong>โพงน้ำบ่อ (สหัชชะ)</strong> : แต่เดิมมา ใช้น้ำบ่อ ไม่ได้ใช้น้ำประปา ที่บ้านไหนมีน้ำบ่อ ตาน้ำดี ตักเท่าไหร่ก็ไม่หมด มีทรัพยากรน้ำ ใครๆ ก็จะมาตักน้ำที่บ้านนั้น มีน้ำใจให้ไม่รู้จักหมด ก็คือการผูกมิตรเหมือนกัน / ผูกมิตรโดยเขาเคลื่อนมาหาเรา<br />
                    <strong>ล่อช้างป่า (กัมมะ)</strong> : เอาคนเก่ง แต่ยังเก่งไม่เท่าไหร่ มาเป็นพวกกับเรา เป็นพันธมิตรกับเรา ถ้าเอามาแล้วไม่ยินยอม คือต้องตาย / ช้างป่าเอามาแล้วฝึกไม่ได้คือช้างตายแน่
                </p>
            </div>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 4 หลักการพูด หลักการปกครอง</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>ฟ้ากำดิน (ปิตา)</strong> : นักพูดแท้ๆ ครอบงำได้หมด ทำให้เขาเชื่อ<br />
                    <strong>อินทร์พิมาน (พันธุ)</strong> : ทำให้เขารักสนิทใจเหมือนญาติ นั่งในหัวใจคนได้<br />
                    <strong>ผลาญศัตรู (ลาภะ)</strong> : สักการะย่อมฆ่าคนพาลเสีย พวกศัตรูที่ยอมตายเพื่อความมั่งมีศรีสุขมีเยอะ ผลาญศัตรูด้วยลาภผล / จะเป็นศัตรู หรือ จะมาทำงานให้ฉัน? ดี! / คุณจะได้ลาภ ยศ ตำแหน่ง
                </p>
            </div>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 5 หลักข้อมูล ข่าวสาร</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>ชูพิษแสลง (มาตา)</strong> : ปล่อยข่าวปลอม (ให้คนภายใน) ปล่อยข่าวปลอมให้พวกผู้หญิง นินทาเป็นเป้าหมายที่ดี / ใช้ผู้หญิงเป็นตัวล่อ<br />
                    <strong>แข็งให้อ่อน (ปุตะ)</strong> : ทำได้ทั้ง 2 ฝ่าย ฝ่ายเราทำเป็นเด็กได้ หรือถ้าฝั่งโน้นแข็งนัก ทำให้อ่อนลง เด็กกว่าเรา ให้บทเรียนให้รู้ไปเลยก็ได้<br />
                    <strong>ย้อนภูเขา (ย้อนผู้โง่เขลา) (พยายะ)</strong> : สืบเอาความลับ เช่น จับได้ว่ามีใครเป็นสายสืบ เราก็แกล้งปล่อยข่าวปลอมกลับไปซะเลย เป็นกลลวงให้เข้าใจผิด
                </p>
            </div>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 6 หลักทรัพย์สิน การใช้ความมั่งมีเป็นปัจจัย หลักโชว์ออฟ แสนยานุภาพ</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>เย้าให้ผอม (โภคา)</strong> : ทำให้เขารู้สึกตัวเล็ก ด้วยข้อมูล ข่าวสารต่างๆนานา ทำให้หวาดระแวง ให้รู้สึกว่าจะแพ้ได้ตลอดเวลา / เช่น พลเอกเมืองไทยให้ข่าวสารกับเขมรว่าเรามีขีปนาวุธ ยิงไม่อั้น ยิงไม่หยุด พนมเปญสามารถหมดได้ใน 5 นาที / แถลงข่าวให้เขมรยิงมาสัก 1 ลูกสิ แล้วขอเวลา 5 นาทีจะทำให้พนมเปญไม่เหลือ และลงท้ายว่า "ไม่ได้พูดเล่นนะ"<br />
                    <strong>จอมปราสาท (อริ)</strong> : ตำตา ตำใจ ทำค่ายคูประตูหอรบ ปลูกบ้าน สร้างเมืองโชว์ ให้เห็นว่ารวดเร็ว เข้มแข็งขนาดไหน / หมอกลง 2 วัน พอหมอกจาง เจอบ้าน ตึก ค่าย ประชิดเมือง สูงสง่า ทำให้ฝั่งตรงข้ามเสียขวัญ<br />
                    <strong>ราชปัญญา (ทาสี)</strong> : นกกระจอกฉะไหนจะรู้ใจอินทรีย์ รู้นะว่าวางแผนอะไร เพราะว่าเราเป็นอินทรีย์ มองอินทรีย์ออก แต่ว่าทำให้เขาตัวเล็ก เป็นนกกระจอก จะดูเราไม่ออกเลย / โดยนัยยะก็คือ มีสายสืบเป็นคนในอยู่อีก**ฝั่ง สายสืบอยู่ข้าง ๆ ฝั่งโน้นเลย (คนใน ทาสี) ก็คือผู้หญิงคนภายในเป็นสายให้
                </p>
            </div>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">หลักที่ 7 หลักการถอย ถึงคราวถอยก็ต้องถอย</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>ฟ้าสนามเสียง (มัชฌิมา)</strong> : เมื่อเวลาจะถอย เป็นกลาง ฟ้าสนามเสียง จะมี 2 ครั้ง ครั้งแรกคือเดือน 6 ประตูฟ้าเปิด เข้าฤดูฝน ฝนแรก เมื่อฝนแรกมาฟ้าสนามเสียง / เมื่อถึงเขตเดือน 12 ฟ้าสนามเสียงอีกครั้ง คือหมดฝน เมื่อจะหมดฝน ก็ยังต้องทำเสียงฟ้าร้อง ประดุจประดังว่า ยังมีอีกเยอะนะ แต่ที่จริงคือการถอย ก็คือตั้งฐานรับแขกไว้ ทำท่าเหมือนว่ามีกำลังบอกอีกมาก ทำเสียงบอกยามตะโกนเหมือนว่าอยู่กันเยอะเต็มไปหมด เตาไฟสำหรับหุงอาหารก็มีมาก ที่จริงคือการถอย แต่ทำท่าไม่ให้เขาตามนั่นเอง (ฝนจะหมดแล้วก็ฟ้าร้องฟ้าผ่าอีกครั้งหนึ่ง) ทำท่าน่ากลัวเข้าไว้<br />
                    <strong>เรียงหลับยืน (หลักประกันที่ยืนยง) (ปัตนิ)</strong> : คือการ “กลืนชาติ” คือการทิ้งทหารไว้ ผูกสมัครรักใคร่ไมตรี ทิ้งผู้ชายไว้แต่งงานกับฝ่ายเขา ลูกออกมาเป็นฝ่ายเรา / จีนเอาผู้ชายจีน มาแต่งงานกับคนไทย ลูกออกมาให้ใช้นามสกุล ให้เรียนแต่ภาษาจีน ไม่เรียนภาษาไทย ออกทุนเรียนให้ทั้งหมด เรียงหลับยืน เป็นหลักประกันที่ยืนยงเลยว่า อีก 20 ปีข้างหน้า ธุรกิจของคุณทั้งหมด พื้นที่ตรงนี้เป็นของผม เพราะว่าคนที่เรียนจบจากของผมไป จะไปทำงานในประเทศคุณ แล้วนิสัยคนไทย สำนึกบุญคุณ คือจะทำให้ เพราะฉะนั้น เรียงหลับยืน = หลักประกันที่ยืนยง ใช้วิธีแต่งงาน ถอยแต่ทิ้งเอาไว้<br />
                    <strong>ปืนพระราม (ทาสา)</strong> : อุปมาว่า “ศรพรหมมาสตร์ไม่พลาดเป้า” เมื่อเวลาจะถอย ต้องพุ่งตรงไปที่หัวหน้าเท่านั้น กำจัดหัวหน้า พระนเรศวรยิงปืนข้ามฝั่งไปที่หัวหน้าฝั่งศัตรู สัมพันธ์กับทาสา** คือ ทุกคนแต่งตัวเหมือนกันหมดเลยตอนถอย ไม่รู้ว่าใครเป็นใคร ตอนที่โจโฉหนี เปลี่ยนจากม้าสีแดงไปเป็นม้าสีขาว เปลี่ยนจากมัดผมเป็นตัดผมทิ้งแล้วถอย ก็คือถอยโดยไม่ให้เขาตามได้ ถ้าทำไม่สำเร็จจะต้องตกเป็นทาสฝ่ายตรงข้าม (ทาสา) ถ้าพลาดเป้าก็จะตกเป็นทาส ถูกต้อนไปเป็นทาส
                </p>
            </div>

            {/* ส่วนแสดงเงื่อนไข 8 ข้อ: ถูกย้ายมาไว้ด้านล่าง (Footer) */}
            <footer className="mt-8 pt-4 border-t border-gray-200">
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-md">
                    <p className="font-bold text-lg mb-2 text-teal-700">{CONDITION_TITLE}</p>
                    <ul className="list-none space-y-1 text-sm">
                        {CONDITION_NOTES.map((note, index) => (
                            <li key={index} className="whitespace-pre-line text-gray-700">
                                {note.trim() === '' ? <div className="h-1"></div> : note}
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default StrategyComponent;