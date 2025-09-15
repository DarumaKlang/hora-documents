// src/components/EmptyPageTemplate.tsx
// For Example
import React from 'react';

interface EmptyPageTemplateProps {
    title: string;
}

const EmptyPageTemplate: React.FC<EmptyPageTemplateProps> = ({ title }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">{title}</h2>
            <div className="text-gray-600">
                <p>เนื้อหาสำหรับหน้านี้จะถูกเพิ่มเข้ามาในภายหลัง</p>
                <p>... สามารถใส่ components หรือเนื้อหาอื่นๆ ที่นี่ได้ ...</p>
            </div>
        </div>
    );
};

export default EmptyPageTemplate;