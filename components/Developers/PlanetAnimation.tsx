// src/components/Developers/PlanetAnimation.tsx

'use client';

import React, { useRef, useEffect } from 'react';

interface PlanetAnimationProps {
    name: string;
    timeLeft: string;
    nextTransit: string;
    isCurrentTransit: boolean;
    color: string;
}

const PlanetAnimation: React.FC<PlanetAnimationProps> = ({ name, timeLeft, nextTransit, isCurrentTransit, color }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        let frameId: number;
        const radius = 20;

        const render = (time: number) => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // วาดวงโคจร
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, 0, 2 * Math.PI);
            context.strokeStyle = 'rgba(200, 200, 200, 0.5)';
            context.stroke();

            // คำนวณตำแหน่งดาว
            const angle = time * 0.0005;
            const x = canvas.width / 2 + (canvas.width / 4) * Math.cos(angle);
            const y = canvas.height / 2 + (canvas.width / 4) * Math.sin(angle);

            // วาดดาว
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();

            // แสดงชื่อดาว
            context.fillStyle = '#1c1c1c';
            context.font = '12px Arial';
            context.textAlign = 'center';
            context.fillText(name, x, y + radius + 15);

            frameId = requestAnimationFrame(render);
        };

        render(0);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [name, color]);

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <canvas ref={canvasRef} width={200} height={200} className="my-2"></canvas>
            <p className="text-sm font-semibold text-gray-600">{nextTransit}</p>
            <p className="text-lg text-teal-700">{timeLeft}</p>
        </div>
    );
};

export default PlanetAnimation;