// components/Developers/InformationComponent.tsx
import React from "react";
import { componentData } from '@/data/componentData';
import { LuFileText } from 'react-icons/lu';
import { BiSearchAlt } from 'react-icons/bi';
import Link from 'next/link';

// Component หลัก
const ComponentsComponent = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">หัวข้อข้อมูลที่น่าสนใจ</h2>
            
            {/* ปรับแก้ให้ใช้ Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {componentData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
                    >
                        <LuFileText className="text-teal-500 text-3xl mr-4 flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-teal-800 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        </div>
                        <div className="ml-4">
                            <Link href={item.link} passHref>
                                <div
                                    className="p-2 rounded-full bg-secondary-gold text-white shadow-md hover:bg-yellow-600 transition-colors duration-300 cursor-pointer"
                                >
                                    <BiSearchAlt className="text-xl" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComponentsComponent;