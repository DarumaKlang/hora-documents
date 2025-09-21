// components/Developers/InformationGlobalComponent.tsx
import React from 'react';
import CodeBlock from '@/components/Developers/CodeBlock';
import AstroIcons from '@/components/Developers/AstroIcons';

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

const DefaultCodeBlock = `// Import CodeBlock
import CodeBlock from '@/components/Developers/CodeBlock';

// กำหนด code ที่ต้องการแสดงผล
const ExampleCode = '{
    "Example Code"
}';

// การแสดงผล CodeBlock นำ Code นี้ไปแสดงผลใน Div Container ที่ต้องการ
{/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
<CodeBlock code={ExampleCode} language="typescript" />`;

const DefaultServicePackageCard = `// Import ServicePackageCard
import ServicePackageCard from './Global/ServicePackageCard';

// การแสดงผล ServicePackageCard แก้ไขข้อมูลตามต้องการ ตัวอย่างแสดงผล 2 Card 

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <ServicePackageCard
        title="ตัวอย่าง title"
        price="ตัวอย่าง price"
        description="ตัวอย่าง description"
        buttonText="ตัวอย่าง buttonText"
    />
    <ServicePackageCard
        title="ตัวอย่าง title"
        price="ตัวอย่าง price"
        description="ตัวอย่าง description"
        buttonText="ตัวอย่าง buttonText"
    />
</div>`;

const DefaultCard = `// Import DefaultCard
import Card from './Card';
// ... import อื่นๆ

const MainPage = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">บริการของเรา</h2>
            
            {/* ตัวอย่างการใช้งาน Card Component */}
            <div className="mb-6">
                <Card title="Success" variant="success" onClose={() => alert('Card ถูกปิด!')}>
                    <p>The body of the card</p>
                </Card>
            </div>
            
            {/* ตัวอย่าง Card แบบอื่นๆ */}
            <div className="mb-6">
                <Card title="Error" variant="error">
                    <p>เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
                </Card>
            </div>
            
            <div className="mb-6">
                <Card>
                    <p>นี่คือเนื้อหา Card แบบไม่มีหัวข้อ</p>
                </Card>
            </div>
            
            {/* ... โค้ดส่วนอื่นๆ ที่มีอยู่แล้ว ... */}
        </div>
    );
};

export default MainPage;`;

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

                <p>การใช้งาน CodeBlock Component</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={DefaultCodeBlock} language="typescript" />
                </div>

                <p>การใช้งาน ServicePackageCard Component</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={DefaultServicePackageCard} language="typescript" />
                </div>

                <p>ตัวอย่างการนำไปใช้งาน</p>
                <p>คุณสามารถนำ Card Component นี้ไปใช้ในไฟล์ MainPage.tsx หรือ Component อื่นๆ ได้เลยครับ</p>

                <div>
                    {/* ใช้ CodeBlock component เพื่อแสดงโค้ด */}
                    <CodeBlock code={DefaultCard} language="typescript" />
                </div>

                <div>
                    <AstroIcons />
                </div>

            </div>
        </div>
    );
};

export default InformationGlobalComponent;