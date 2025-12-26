'use client';

import { useEffect, useState } from 'react';

export default function HudLayer() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-yellow-400" />
            <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-yellow-400" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-yellow-400" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-yellow-400" />

            {/* Live Coordinates */}
            <div className="absolute bottom-6 right-8 font-mono text-xs text-gray-500 tracking-widest">
                Y: {scrollY.toString().padStart(4, '0')}px
            </div>
        </div>
    );
}
