// app/contents/content/mahataksa/page.tsx
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import EmptyPageTemplate from '@/components/EmptyPageTemplate';

export default function MahaTaksaPage() {
    return (
        <DefaultLayout>
            {/* Main Content Section */}
            <div className="w-full bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">

                <article className="prose prose-lg mx-auto text-gray-800">
                    <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">
                        ตำรามหาทักษาพยากรณ์
                    </h1>
                    <p className="text-lg md:text-xl text-center mb-8 text-gray-500">
                        ที่มาของ "มหาทักษา" มาจาก "คัมภีร์มหาทักษาพยากรณ์" ซึ่งเป็นตำราโหราศาสตร์โบราณของพม่า
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                        <p className="text-gray-600 leading-relaxed">
                            ตำรานี้เกี่ยวข้องกับการพยากรณ์ดวงชะตาโดยใช้หลักของดาวพระเคราะห์ทั้ง ๘ ดวง (พระอาทิตย์ พระจันทร์ พระอังคาร พระพุธ พระพฤหัสบดี พระศุกร์ พระเสาร์ และพระราหู) ซึ่งเรียกว่า "มหาทักษาเทวดาเสวยอายุ" โดยนำมาใช้ในการทำนายดวงชะตา การตั้งชื่อมงคล กำหนดฤกษ์ยาม หรือเลือกสีเครื่องแต่งกายตามหลักทักษา
                        </p>

                        <h2 className="text-teal-800 font-semibold mb-2 mt-4">ข้อมูลเพิ่มเติมเกี่ยวกับมหาทักษา :</h2>
                        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                            <li>
                                <b>ความหมายของคำว่า "ทักษา" :</b> คำว่า ทักษา เป็นคำที่ใช้ในทางโหราศาสตร์ มาจากชื่อตำราโบราณว่า คัมภีร์มหาทักษาพยากรณ์ เป็นตำราเกี่ยวกับดวงดาวที่มีความสัมพันธ์กับดวงชะตาของคน ๘ ดวง คือ พระอาทิตย์ พระจันทร์ พระอังคาร พระพุธ พระเสาร์ พระพฤหัสบดี  พระราหู และพระศุกร์. ดาวทั้ง ๘ นี้ อยู่ประจำทิศทั้ง ๘ เรียงลำดับตามเข็มนาฬิกาตั้งแต่อีสานถึงอุดร.
                            </li>
                            <li>
                                <b>หลักการทำงาน :</b> ใช้ดาวพระเคราะห์ทั้ง ๘ ดวงประจำอยู่ประจำทิศทั้ง ๘ และคำนวณกำลังของดาวที่สัมพันธ์กับเวลาเกิดของบุคคลนั้นๆ
                            </li>
                        </ul>

                        <h2 className="text-teal-800 font-semibold mb-2 mt-4">การนำไปใช้ :</h2>
                        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                            <li><b>พยากรณ์ดวงชะตา :</b> ทำนายการเปลี่ยนแปลงชีวิตและเตือนให้เตรียมรับมือ</li>
                            <li><b>การตั้งชื่อ :</b> ใช้หลักทักษาในการเลือกอักษรที่เสริมสิริมงคลตามอักษรเดช ศรี มูละ</li>
                            <li><b>สีมงคล :</b> กำหนดสีเครื่องแต่งกายที่สัมพันธ์กับสีประจำวันและสีประจำดาวเคราะห์ เพื่อเสริมดวงชะตา</li>
                            <li><b>ฤกษ์ยาม :</b> ใช้ในการกำหนดฤกษ์ยามและทิศมงคลในโอกาสต่างๆ</li>
                        </ul>
                        <h2 className="text-teal-800 font-semibold mb-2 mt-4">ความสำคัญ :</h2>
                        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">    
                            <li>เป็นหนึ่งในรากเหง้าของคติไทยที่สืบทอดมายาวนาน และยังคงมีการใช้แพร่หลายในโหราศาสตร์ไทย ราชสำนัก และโดยบุคคลทั่วไป</li>
                        </ul>
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

            </div>
        </DefaultLayout>
    );
}