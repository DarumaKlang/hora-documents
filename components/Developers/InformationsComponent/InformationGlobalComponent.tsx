// src/components/InformationGlobalComponent.tsx
import React from 'react';
import CodeBlock from '@/components/Developers/CodeBlock';

interface InformationGlobalComponent {
    title: string;
}

const DefaultPage = `import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import EmptyPageTemplate from '@/components/EmptyPageTemplate';

export default function ContentsPage() {
    return (
        <DefaultLayout>
            <EmptyPageTemplate title="หน้าบทความ" />
        </DefaultLayout>
    );
}`;

const DefaultComponent = `import React from 'react';

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

export default EmptyPageTemplate;`;

const InformationGlobalComponent: React.FC<InformationGlobalComponent> = ({ title }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">{title}</h2>
            <div className="text-gray-600">
                <p>เนื้อหาสำหรับหน้านี้จะเป็นการกำหนดค่าพื้นฐานของเว็บนี้</p>
                <p>ส่วนของหน้า Page</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={DefaultPage} language="typescript" />
                </div>

                <p>ส่วนของหน้า Component</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={DefaultComponent} language="typescript" />
                </div>

            </div>
        </div>
    );
};

export default InformationGlobalComponent;