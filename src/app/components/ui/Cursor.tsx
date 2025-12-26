'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);

    // Raw mouse values for zero-lag primary cursor
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring values for trailing secondary cursor
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Hide system cursor
        document.documentElement.style.cursor = 'none';
        document.body.style.cursor = 'none';

        // Add styles for all interactive elements to ensure cursor stays hidden
        const style = document.createElement('style');
        style.innerHTML = `
            a, button, input, textarea, select, [role="button"] { cursor: none !important; }
            ::selection { background: #FFD700; color: black; }
        `;
        document.head.appendChild(style);

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for interactive elements
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button';

            setIsHovered(!!isInteractive);

            // Check for text elements
            const isText =
                target.tagName.toLowerCase() === 'p' ||
                target.tagName.toLowerCase() === 'span' ||
                /^h[1-6]$/.test(target.tagName.toLowerCase()) ||
                target.tagName.toLowerCase() === 'input' ||
                target.tagName.toLowerCase() === 'textarea';


        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.style.cursor = 'auto';
            document.body.style.cursor = 'auto';
            if (style.parentNode) {
                document.head.removeChild(style);
            }
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Primary Zero-Lag Cursor (The Pointer) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                {/* Default Crosshair State */}
                <motion.div
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    className="relative flex items-center justify-center w-5 h-5"
                >
                    <div className="absolute w-[2px] h-4 bg-white" />
                    <div className="absolute w-4 h-[2px] bg-white" />
                </motion.div>


            </motion.div>

            {/* Secondary Trailing Cursor (The Reticle) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99] hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovered ? 1.5 : 1,
                        rotate: isHovered ? 90 : 0,
                    }}
                    className="relative flex items-center justify-center w-8 h-8 transition-transform duration-300"
                >
                    {/* Corners / Brackets */}
                    <motion.div
                        animate={{
                            borderColor: isHovered ? 'rgba(250, 204, 21, 1)' : 'rgba(255, 255, 255, 0.4)',
                            borderWidth: '2px', // Thicker stroke
                        }}
                        className="w-full h-full border rounded-sm"
                    >
                        {/* Corner Accents */}
                        <div className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t-2 border-l-2 border-white/60" />
                        <div className="absolute -top-[2px] -right-[2px] w-2 h-2 border-t-2 border-r-2 border-white/60" />
                        <div className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b-2 border-l-2 border-white/60" />
                        <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b-2 border-r-2 border-white/60" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
