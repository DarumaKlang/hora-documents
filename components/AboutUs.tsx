// components/AboutUs.tsx
import React from 'react';
import { LuFileText, LuHeartHandshake } from 'react-icons/lu'; // เพิ่ม icon สำหรับ Donations

const AboutUs = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">เกี่ยวกับเรา</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                <div className="text-teal-800 mb-4 md:mb-0 md:mr-6">
                    <LuFileText size={50} />
                </div>
                <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        เราคือกลุ่มผู้หลงใหลในวิชาโหราศาสตร์ไทย ที่มุ่งมั่นจะสร้างสรรค์พื้นที่แห่งการเรียนรู้และการพัฒนาที่ทันสมัย เว็บไซต์เอกสารนี้จึงถือกำเนิดขึ้นเพื่อเป็น <strong className="font-bold">แหล่งอ้างอิงข้อมูลการพยากรณ์ที่เป็นกลางและถูกต้อง</strong> โดยรวบรวมหลักการและตำราต่างๆ ไว้ในรูปแบบดิจิทัล เพื่อให้ทุกคนเข้าถึงได้ง่ายและนำไปใช้เป็นแนวทางเดียวกัน
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        นอกเหนือจากการเป็นคลังความรู้ เรายังได้นำเทคโนโลยีเข้ามาประยุกต์ใช้เพื่อเปิดโอกาสให้ผู้สนใจและนักพัฒนาได้ <strong className="font-bold">ร่วมทดสอบและพัฒนาเครื่องมือพยากรณ์ดิจิทัล</strong> ไปพร้อมกัน
                    </p>
                </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">
                    <span className="inline-block animate-pulse">🌟</span> มาร่วมสร้างอนาคตโหราศาสตร์ไทยไปด้วยกัน
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    วิชาโหราศาสตร์ไทยเป็นมรดกที่ทรงคุณค่า และถึงเวลาแล้วที่เราจะร่วมกันวางรากฐานที่แข็งแกร่ง เพื่อให้องค์ความรู้นี้เป็นที่ยึดเหนี่ยวและเป็นแนวทางที่มั่นคงสำหรับทุกคนในวงการ ขอเชิญชวนนักพัฒนา ผู้สนใจ และผู้เชี่ยวชาญทุกท่าน มาร่วมสร้างสรรค์และแบ่งปันความรู้ เพื่อยกระดับโหราศาสตร์ไทยให้ก้าวไปในยุคดิจิทัลได้อย่างสง่างาม
                </p>
            </div>

            {/* เพิ่มส่วน Donations ใหม่ */}
            <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="flex items-center text-xl font-semibold text-teal-800 mb-4">
                    <LuHeartHandshake size={24} className="mr-2" />
                    สนับสนุนโครงการของเรา
                </h3>
                <p className="text-gray-700 mb-6">
                    หากโครงการของเรามีประโยชน์สำหรับคุณและต้องการสนับสนุนการพัฒนาอย่างต่อเนื่อง สามารถบริจาคเพื่อเป็นกำลังใจให้กับทีมงานได้
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ช่องทางการบริจาค Lightning Network */}
                    <div className="p-4 bg-gray-100 rounded-lg text-center">
                        <h4 className="font-semibold text-lg mb-2">Lightning Network</h4>
                        <p className="text-sm text-gray-600">สแกนเพื่อบริจาค Lightning Satoshis</p>
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/lightning.jpg"
                                alt="Lightning QR Code"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg shadow-sm"
                            />
                        </div>
                        <p className="text-sm font-mono text-gray-800 break-all p-2 bg-gray-200 rounded-md cursor-pointer" title="Click to copy">
                            hungryhead85@walletofsatoshi.com
                        </p>
                    </div>
                    {/* ช่องทางการบริจาค Bitcoin */}
                    <div className="p-4 bg-gray-100 rounded-lg text-center">
                        <h4 className="font-semibold text-lg mb-2">Bitcoin (BTC)</h4>
                        <p className="text-sm text-gray-600">สแกนเพื่อบริจาค Bitcoin</p>
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/btc.jpg"
                                alt="Bitcoin QR Code"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg shadow-sm"
                            />
                        </div>
                        <p className="text-sm font-mono text-gray-800 break-all p-2 bg-gray-200 rounded-md cursor-pointer" title="Click to copy">
                            bc1q9cppj5xqpjtx6nx7urtuz5wezwzgn0kvcvq7ka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;