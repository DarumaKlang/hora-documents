import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-teal-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* <img src="/images/logo.png" alt="79hora.com" className="h-8" /> */}
                <h1 className="text-xl font-bold ml-2">Hora-Documents</h1>
            </div>
            <div className="flex items-center">
            </div>
        </header>
    );
};

export default Header;
