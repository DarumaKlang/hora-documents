// components/DonationsPopup.tsx

import React from 'react';
import { LuCircleX } from 'react-icons/lu';

interface DonationsPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const DonationsPopup: React.FC<DonationsPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg p-8 shadow-2xl relative w-full max-w-md mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
                    aria-label="Close"
                >
                    <LuCircleX size={24} />
                </button>
                <h2 className="text-2xl font-bold text-teal-800 mb-2">สนับสนุนโครงการของเรา</h2>
                <p className="text-gray-700 mb-6 text-sm">
                    หากโครงการของเรามีประโยชน์สำหรับคุณและต้องการสนับสนุนการพัฒนาอย่างต่อเนื่อง สามารถบริจาคเพื่อเป็นกำลังใจให้กับทีมงานได้
                </p>
                <div className="space-y-4">
                    {/* ช่องทางการบริจาค Lightning Network */}
                    <div className="p-2 bg-gray-100 rounded-lg text-center">
                        <h3 className="font-semibold text-md mb-2">Lightning Network</h3>
                        <p className="text-xs text-gray-600">สแกนเพื่อบริจาค Lightning Satoshis</p>
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/lightning.jpg"
                                alt="Lightning QR Code"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg shadow-sm"
                            />
                        </div>
                        <p className="text-sm font-mono text-gray-800 break-all p-2 bg-gray-200 rounded-md cursor-pointer" title="Click to copy">
                            hungryhead85@walletofsatoshi.com
                        </p>
                    </div>

                    {/* ช่องทางการบริจาค Bitcoin */}
                    <div className="p-2 bg-gray-100 rounded-lg text-center">
                        <h3 className="font-semibold text-md mb-2">Bitcoin (BTC)</h3>
                        <p className="text-xs text-gray-600">สแกนเพื่อบริจาค Bitcoin</p>
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/btc.jpg"
                                alt="Bitcoin QR Code"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg shadow-sm"
                            />
                        </div>
                        <p className="text-sm font-mono text-gray-800 break-all p-2 bg-gray-200 rounded-md cursor-pointer" title="Click to copy">
                            bc1q9cppj5xqpjtx6nx7urtuz5wezwzgn0kvcvq7ka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationsPopup;