import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-red-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* <img src="/images/logo.png" alt="79hora.com" className="h-8" /> */}
                <h1 className="text-xl font-bold ml-2">Hora-Documents</h1>
            </div>
            <div className="flex items-center">
                <button className="bg-secondary-blue text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200">
                    เข้าสู่ระบบ
                </button>
                <button className="bg-accent-yellow text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200">
                    สมัครสมาชิก
                </button>
            </div>
        </header>
    );
};

export default Header;
