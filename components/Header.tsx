import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src="/images/logo.png" alt="79hora.com" className="h-8" /> */}
        <h1 className="text-xl font-bold ml-2">79hora.com</h1>
      </div>
      <div className="flex items-center">
        <button className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold mr-2">
          แบ่งปันชื่อมงคล
        </button>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
