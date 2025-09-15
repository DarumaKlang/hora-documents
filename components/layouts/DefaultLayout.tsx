// src/components/layouts/DefaultLayout.tsx
"use client";

import React, { useState } from 'react';
import Header from '../Globaly/Header';
import Sidebar from '@/components/Globaly/Sidebar';
import Footer from '../Globaly/Footer';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-teal-100 font-sans flex flex-col">
            <Header onMenuClick={toggleSidebar} />

            <div className="flex-1 flex container mx-auto p-4 md:space-x-4">
                {/* Sidebar Section */}
                <div className="hidden md:block md:w-80">
                    <Sidebar isOpen={true} onClose={() => { }} />
                </div>
                {isSidebarOpen && (
                    <div className="md:hidden">
                        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                    </div>
                )}
                {/* Main Content Section */}
                <div className="w-full">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;