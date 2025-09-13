import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
// import คอมโพแนนท์ from '@/components/คอมโพแนนท์ ที่ต้องการใช้งาน; --- IGNORE ---

export default function Informations() {
    return (
        <div className="min-h-screen bg-teal-100 font-sans">
            <Header />
            <div className="container mx-auto p-4 md:flex md:space-x-4">
                {/* Sidebar Section */}
                <div className="w-full md:w-1/3">
                    <Sidebar />
                </div>
                {/* Main Content Section */}
                <div className="w-full">
                    {/* เนื้อหาที่ต้องการแสดงผล */}
                </div>
            </div>
            <Footer />
        </div>
    );
}