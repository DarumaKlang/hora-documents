import React from 'react';
import Link from 'next/link';
import { LuFileDigit, LuGem, LuCrown, LuCalendarCheck, LuBook } from 'react-icons/lu';
import { BiSearchAlt } from 'react-icons/bi';

// Define a type for a single content card
interface ContentCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    linkTo: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description, icon, linkTo }) => {
    return (
        <Link href={linkTo} passHref>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center">
                <div className="mb-4 text-teal-800">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </Link>
    );
};

const Contents: React.FC = () => {
    // Array of content data
    const cardsData = [
        {
            title: "ตำรับเศษพระจอมเกล้า",
            description: "คำทำนายเศษพระจอมเกล้า",
            icon: <BiSearchAlt size={40} />,
            linkTo: "/contents/content/prajomklaw"
        },
        {
            title: "ตำรามหาทักษาพยากรณ์",
            description: "ข้อมูลตำรามหาทักษา",
            icon: <LuFileDigit size={40} />,
            linkTo: "/contents/content/mahataksa"
        },
        {
            title: "ตั้งชื่อลูกชาย-ลูกสาว",
            description: "หลักการและคำแนะนำในการตั้งชื่อลูกตามวันเกิด",
            icon: <LuCrown size={40} />,
            linkTo: "/contents/set-name-for-child"
        },
        {
            title: "ดูดวงชะตากำเนิด",
            description: "ดูดวงแบบละเอียดจากวันเดือนปีเกิดและเวลา",
            icon: <LuGem size={40} />,
            linkTo: "/contents/horoscope"
        },
        {
            title: "ดูดวงรายเดือนรายสัปดาห์",
            description: "อัปเดตดวงชะตาประจำเดือนและประจำสัปดาห์",
            icon: <LuCalendarCheck size={40} />,
            linkTo: "/contents/weekly-monthly-horoscope"
        },
        {
            title: "บทความดูดวง",
            description: "บทความและเกร็ดความรู้เกี่ยวกับโหราศาสตร์ไทย",
            icon: <LuBook size={40} />,
            linkTo: "/contents/articles"
        }
    ];

    return (
        <div className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-teal-800 mb-6">หมวดหมู่ทั้งหมด</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card, index) => (
                    <ContentCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        linkTo={card.linkTo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contents;