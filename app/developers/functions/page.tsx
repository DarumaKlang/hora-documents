import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Functions() {
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
                    <AboutUs />
                </div>
            </div>
            <Footer />
        </div>
    );
}