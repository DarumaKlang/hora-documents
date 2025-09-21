'use client';

import { useState } from 'react';
import { daraData } from '@/data/daraData'; // ตรวจสอบ path ให้ถูกต้อง

export default function DaraDataComponent() {
    const [selectedDara, setSelectedDara] = useState(daraData[0]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        const dara = daraData.find(d => d.id === selectedId);
        if (dara) {
            setSelectedDara(dara);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center text-red-500">ข้อมูลดาวตามคัมภีร์โหราศาสตร์</h1>
            
            <div className="mb-6 flex flex-col items-center">
                <label htmlFor="dara-select" className="block text-gray-700 font-semibold mb-2">
                    เลือกดาวที่ต้องการดูข้อมูล:
                </label>
                <select
                    id="dara-select"
                    onChange={handleSelectChange}
                    value={selectedDara.id}
                    className="block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {daraData.map((dara) => (
                        <option key={dara.id} value={dara.id}>
                            {dara.thaiName}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500">
                <h2 className="text-2xl font-bold mb-4 text-center">{selectedDara.thaiName}</h2>
                <div className="space-y-4">
                    <p><strong>กำลังดาว:</strong> {selectedDara.power}</p>
                    <p><strong>ลักษณะทั่วไป:</strong> {selectedDara.nature}</p>
                    <p><strong>ธาตุ:</strong> {selectedDara.element}</p>
                    <p><strong>อัตราการโคจร:</strong> {selectedDara.orbitTime}</p>
                    <p><strong>ความหมายทั่วไป:</strong> {selectedDara.generalMeaning}</p>
                    <p><strong>คำจำกัดความ:</strong> {selectedDara.motto}</p>
                    <p><strong>บุคคลที่เกี่ยวข้อง:</strong> {selectedDara.person.join(', ')}</p>
                    <p><strong>สถานที่:</strong> {selectedDara.place.join(', ')}</p>
                    <p><strong>รูปร่าง:</strong> {selectedDara.appearance}</p>
                    <p><strong>กายวิภาค:</strong> {selectedDara.anatomy.join(', ')}</p>
                    <p><strong>ทิศ:</strong> {selectedDara.direction}</p>
                    <p><strong>สี:</strong> {selectedDara.color.join(', ')}</p>
                    <p><strong>อัญมณี:</strong> {selectedDara.gemstone.join(', ')}</p>
                    <p><strong>สัตว์:</strong> {selectedDara.animal.join(', ')}</p>
                    <p><strong>พืช:</strong> {selectedDara.plant.join(', ')}</p>
                    <p><strong>พฤกษาชาตา:</strong> {selectedDara.prukSachaata}</p>
                    
                </div>
            </div>
        </div>
    );
}