'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Check, Copy } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
    const [logoIndex, setLogoIndex] = useState(0);
    const [emailCopied, setEmailCopied] = useState(false);

    // Switch logo every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLogoIndex((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("procooho@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-10 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Top Section: Brand & Nav */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4 ml-5 md:ml-0">
                        <div className="relative group">
                            <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-yellow-400 mt-3" />

                            {/* Logo Carousel */}
                            <div className="relative w-68 h-20 overflow-hidden flex items-center justify-start">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={logoIndex}
                                        src={logoIndex === 0 ? "/soomin park.png" : "/spark.png"}
                                        alt="Logo"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </AnimatePresence>
                            </div>
                            <p className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed ml-2">
                                FULL STACK DEVELOPER & ARCHITECT // <br />
                                SHERWOOD PARK, AB
                            </p>
                        </div>

                    </div>

                    {/* Directory */}
                    <div className="space-y-4">
                        <h5 className="font-mono text-xs text-yellow-400 tracking-widest mb-4">[ DIRECTORY ]</h5>
                        <ul className="space-y-2 font-chakra text-sm text-gray-400">
                            <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block"> // HOME</button></li>
                            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block"> // OPERATIONAL DIRECTIVES</button></li>
                            <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block"> // SCHEMATICS</button></li>
                            <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block"> // EXECUTE</button></li>
                        </ul>
                    </div>

                    {/* Socials / Contact */}
                    <div className="space-y-4">
                        <h5 className="font-mono text-xs text-yellow-400 tracking-widest mb-4">[ EXTERNAL UPLINKS ]</h5>
                        <div className="flex flex-col gap-2">
                            <a href="https://www.linkedin.com/in/soomin-park-030500277/" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group p-2 border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-sm">
                                <Linkedin size={16} /> <span className="font-mono text-xs">LINKEDIN</span>
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                className="w-full flex items-center justify-between gap-3 text-gray-400 hover:text-white transition-colors group p-2 border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-sm text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <Mail size={16} />
                                    <span className="font-mono text-xs">EMAIL_TRANSMISSION</span>
                                </div>
                                {emailCopied ? (
                                    <span className="flex items-center gap-1 text-[10px] text-green-400 font-mono animate-in fade-in slide-in-from-right-2">
                                        <Check size={12} /> COPIED
                                    </span>
                                ) : (
                                    <Copy size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Blueprint Stats */}
                {/* Bottom Bar: Blueprint Stats & Disclaimer */}
                <div className="border-t border-white/10 pt-8 flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-end gap-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 font-mono text-[10px] text-gray-600">
                            <div>
                                <span className="block text-gray-800 mb-1">DRAWN BY</span>
                                <span className="text-gray-400">SOOMIN PARK</span>
                            </div>
                            <div>
                                <span className="block text-gray-800 mb-1">LAST UPDATE</span>
                                <span className="text-gray-400">Dec. 2025</span>
                            </div>
                            <div>
                                <span className="block text-gray-800 mb-1">FRAMEWORK</span>
                                <span className="text-gray-400">NEXT.JS 15</span>
                            </div>
                        </div>

                        {/* Scroll Top */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-xs font-mono text-yellow-400 hover:text-white transition-colors"
                        >
                            RETURN_TO_TOP <div className="p-2 border border-yellow-400/30 rounded-sm group-hover:bg-yellow-400 group-hover:text-black transition-all"><ArrowUp size={14} /></div>
                        </button>
                    </div>

                    {/* Fine Print */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-700 font-mono border-t border-white/5 pt-6">
                        <p>© 2025 SOOMIN PARK. ALL SYSTEMS VERIFIED.</p>
                        <p>OPTIMIZED FOR CHROME 110+ // RUNNING ON VERCEL EDGE NETWORK</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
