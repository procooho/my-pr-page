'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stacked, setStacked] = useState(false);

    // Initial delay for mobile stacking
    useEffect(() => {
        const timer = setTimeout(() => setStacked(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Standard Parallax Effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yVideo = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityVideo = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Animation Variants
    const sparkVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const expandVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "auto",
            opacity: 1,
            transition: { duration: 1.2, delay: 2.0, ease: "circOut" as const }
        }
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">

            {/* Video Background */}
            <motion.div
                style={{ y: yVideo, opacity: opacityVideo }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Hero Video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-20 h-full flex flex-col items-center justify-end px-4 pt-35 md:pt-25"
            >

                <div className="flex items-center justify-center gap-4 mb-4 opacity-70">
                    <div className="h-[1px] w-12 bg-white/50" />
                    <span className="font-mono text-xs tracking-[0.3em] text-white">SYSTEM ONLINE</span>
                    <div className="h-[1px] w-12 bg-white/50" />
                </div>

                {/* Animation Group */}
                <motion.div
                    layout
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    className={`flex ${stacked ? 'flex-col md:flex-row' : 'flex-row'} items-center justify-center font-chakra font-bold tracking-tighter text-white/90 drop-shadow-2xl mix-blend-screen gap-0 md:gap-4`}
                >
                    <motion.div layout className="flex items-center">
                        <motion.span layout variants={sparkVariants} className="text-6xl md:text-8xl lg:text-[9rem] text-yellow-400">
                            S
                        </motion.span>

                        <motion.div layout variants={expandVariants} className="overflow-hidden whitespace-nowrap flex">
                            <span className="text-6xl md:text-8xl lg:text-[9rem] text-white">OOMIN</span>
                        </motion.div>
                    </motion.div>

                    <motion.span layout variants={sparkVariants} className="text-6xl md:text-8xl lg:text-[9rem] text-yellow-400">
                        PARK
                    </motion.span>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-12 relative max-w-xl mx-auto"
                >
                    {/* Tech Frame */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm rounded-sm" />

                    <div className="relative bg-black/40 border border-white/10 backdrop-blur-md p-4 md:p-6 rounded-sm overflow-hidden group hover:border-yellow-400/30 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        {/* Corner markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-400/50" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-400/50" />

                        <div className="flex flex-col gap-2 md:gap-4 font-mono text-left">
                            <div className="flex justify-between items-center text-[10px] text-yellow-500/70 tracking-[0.2em] uppercase border-none pb-0 md:border-b border-white/5 md:pb-2">
                                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" /> SYSTEM_OBJECTIVE</span>
                                <span className="hidden md:inline">ID: 0305_SP</span>
                            </div>

                            <div className="flex flex-col gap-1 md:gap-2 py-0 md:py-1">
                                <div className="text-xs md:text-base text-gray-300 leading-relaxed tracking-wide">
                                    <span className="text-gray-600 mr-2 select-none">{`>`}</span>
                                    Executing transformation protocol:
                                </div>

                                {/* Desktop Structure */}
                                <div className="hidden md:flex pl-6 flex-col gap-3 border-l border-white/10 ml-1.5 my-1">
                                    <div className="flex items-center gap-3 text-base">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider w-12">INPUT:</span>
                                        <span className="text-white font-bold decoration-yellow-400/30 underline decoration-1 underline-offset-4">brilliant_ideas</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider w-12">OUTPUT:</span>
                                        <span className="bg-yellow-400/10 text-yellow-400 px-2 py-0.5 rounded border border-yellow-400/20 shadow-[0_0_10px_rgba(255,215,0,0.1)] font-bold whitespace-nowrap">ENGINEERED_REALITY</span>
                                    </div>
                                </div>

                                {/* Mobile Structure (Simplified) */}
                                <div className="md:hidden mt-0 pl-2 border-l-2 border-yellow-400/20 ml-1">
                                    <p className="text-xs text-gray-300 leading-6">
                                        Converting <span className="text-white font-bold border-b border-white/20">brilliant_ideas</span> into <br />
                                        <span className="text-yellow-400 font-bold bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/20 text-[10px] tracking-wider inline-block mt-0.5">ENGINEERED_REALITY</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-2 pt-2 md:mt-4 md:pt-4 border-t border-white/5">
                                <div className="w-full md:w-auto px-2 md:px-3 py-1 md:py-1.5 rounded bg-white/5 border border-white/10 flex items-center justify-center md:justify-start gap-2 text-[9px] md:text-[10px] text-gray-300 font-mono tracking-widest uppercase transition-colors group-hover:border-yellow-400/30 group-hover:bg-yellow-400/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-yellow-400 transition-colors" />
                                    FULL STACK DEVELOPER & SYS. ARCHITECT
                                </div>
                                <div className="w-full md:w-auto px-2 md:px-3 py-1 md:py-1.5 rounded bg-white/5 border border-white/10 flex items-center justify-center md:justify-start gap-2 text-[9px] md:text-[10px] text-gray-300 font-mono tracking-widest uppercase transition-colors group-hover:border-yellow-400/30 group-hover:bg-yellow-400/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-yellow-400 transition-colors" />
                                    SHERWOOD PARK, AB
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="mt-10 md:mt-15 relative z-20 flex flex-col items-center gap-4"
                >
                    <div className="px-6 py-2 md:py-3 bg-black/60 backdrop-blur-xl border border-yellow-400/40 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.15)] flex items-center gap-3 mb-5 lg:mb-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-xs md:text-sm font-bold font-mono text-yellow-400 tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">
                            SYSTEM_READY // SCROLL_TO_BEGIN
                        </span>
                    </div>
                </motion.div>

            </motion.div>

        </section>
    );
}
