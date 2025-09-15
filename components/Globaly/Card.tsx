// src/components/Card.tsx
import React from 'react';
import { LuX } from 'react-icons/lu';

type CardVariant = 'success' | 'error' | 'warning' | 'info' | 'default';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    variant?: CardVariant;
    onClose?: () => void;
}

const colorMap = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-gray-800',
    info: 'bg-blue-500 text-white',
    default: 'bg-gray-200 text-gray-800'
};

const Card: React.FC<CardProps> = ({ title, children, variant = 'default', onClose }) => {
    const headerClasses = `p-4 font-bold ${colorMap[variant]} flex justify-between items-center`;
    const bodyClasses = `p-4 ${variant === 'success' || variant === 'error' || variant === 'info' ? 'bg-white' : 'bg-gray-50'}`;
    
    return (
        <div className="rounded-lg shadow-md overflow-hidden">
            {title && (
                <div className={headerClasses}>
                    <span>{title}</span>
                    {onClose && (
                        <button onClick={onClose} aria-label="Close" type="button">
                            <LuX size={20} />
                        </button>
                    )}
                </div>
            )}
            <div className={bodyClasses}>
                {children}
            </div>
        </div>
    );
};

export default Card;