import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Header />
            <div className="container mx-auto p-4 md:flex md:space-x-4">
                {/* Sidebar Section */}
                <div className="w-full md:w-1/3">
                    <Sidebar />
                </div>
                {/* Main Content Section */}
                <div className="w-full">
                    <MainContent />
                </div>
            </div>
            <Footer />
        </div>
    );
}
