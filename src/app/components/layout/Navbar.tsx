'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, ChevronDown, Link2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop Dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const [logoIndex, setLogoIndex] = useState(0);

    // Switch logo every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLogoIndex((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (boxId: string) => {
        if (boxId === 'hero') {
            if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                router.push('/');
            }
        } else {
            if (pathname === '/') {
                const element = document.getElementById(boxId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                router.push(`/#${boxId}`);
            }
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop & Mobile Top Bar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center justify-between lg:justify-center w-[90%] lg:w-auto px-10 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                {/* Mobile Logo */}
                <div className="lg:hidden flex items-center gap-2 m-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-yellow-400/10 blur-md rounded-full opacity-50" />
                        <div className="relative border border-white/10 bg-black/80 px-3 py-2.5 rounded flex items-center gap-2 backdrop-blur-md shadow-xl">
                            <div className="relative w-35 h-9 overflow-hidden flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={logoIndex}
                                        src={logoIndex === 0 ? "/soomin park.png" : "/spark.png"}
                                        alt="Logo"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.5 }}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#FFD700]" />
                        </div>
                        {/* Corner Accents */}
                        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-yellow-400/50" />
                        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-yellow-400/50" />
                    </div>
                </div>

                {/* Desktop Links Left */}
                <div className="hidden lg:flex gap-8 text-xs font-medium text-gray-300 tracking-wide">
                    <button onClick={() => handleNavigation('hero')} className="hover:text-white transition-colors relative group">
                        HOME
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full" />
                    </button>
                    <button onClick={() => handleNavigation('about')} className="hover:text-white transition-colors relative group">
                        ABOUT
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full" />
                    </button>
                </div>

                {/* Desktop Center Logo */}
                <div className="hidden lg:flex items-center gap-3 px-8 mx-8">
                    <div className="relative group cursor-default">
                        <div className="absolute inset-0 bg-yellow-400/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative border border-white/10 bg-black/80 px-4 py-2 rounded flex items-center gap-3 backdrop-blur-md shadow-2xl">
                            {/* Logo Carousel */}
                            <div className="relative w-32 h-8 overflow-hidden flex items-center justify-center">
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

                            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_10px_#FFD700]" />
                        </div>
                        {/* Corner Accents */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-yellow-400/50" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-yellow-400/50" />
                    </div>
                </div>

                {/* Desktop Links Right */}
                <div className="hidden lg:flex gap-8 text-xs font-medium text-gray-300 items-center tracking-wide">
                    <button onClick={() => handleNavigation('projects')} className="hover:text-white transition-colors relative group">
                        PROJECTS
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full" />
                    </button>
                    <button onClick={() => handleNavigation('contact')} className="hover:text-white transition-colors relative group">
                        CONTACT
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full" />
                    </button>

                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white hover:text-yellow-400 transition-colors"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Floating Links Button */}
            <div className="fixed top-10 right-[5%] z-[60] hidden lg:block" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`group relative flex items-center gap-3 pl-4 pr-3 py-2.5 bg-black/90 border transition-all duration-300 backdrop-blur-md overflow-hidden ${isDropdownOpen ? 'border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.5)] scale-105' : 'border-yellow-400/30 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]'}`}
                >
                    {/* Animated Glow BG */}
                    <div className={`absolute inset-0 bg-yellow-400/20 blur-xl transition-opacity duration-500 ${isDropdownOpen ? 'opacity-100' : 'opacity-20 group-hover:opacity-50'}`} />

                    {/* Status Indicator */}
                    <div className="flex flex-col gap-[2px]">
                        <div className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse" />
                        <div className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse delay-75 opacity-70" />
                        <div className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse delay-150 opacity-40" />
                    </div>

                    <span className={`text-xs font-mono font-bold tracking-widest transition-colors ${isDropdownOpen ? 'text-yellow-400' : 'text-gray-200 group-hover:text-yellow-400'}`}>
                        NET_LINK
                    </span>

                    <div className={`p-1 rounded-sm border transition-colors ${isDropdownOpen ? 'bg-yellow-400 border-yellow-400 text-black' : 'bg-white/10 border-white/20 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400'}`}>
                        {isDropdownOpen ? <X size={12} /> : <div className="grid grid-cols-2 gap-[2px]"><div className="w-1 h-1 bg-current rounded-[1px]" /><div className="w-1 h-1 bg-current rounded-[1px]" /><div className="w-1 h-1 bg-current rounded-[1px]" /><div className="w-1 h-1 bg-current rounded-[1px]" /></div>}
                    </div>
                </button>

                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-4 w-64 bg-[#0a0a0a] border border-white/10 p-2 rounded-sm backdrop-blur-3xl shadow-2xl overflow-hidden"
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.05 } },
                                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                }}
                                className="flex flex-col gap-1"
                            >
                                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="px-4 py-2 text-[10px] font-mono text-yellow-500/80 tracking-widest border-b border-white/5 mb-1">
                                    [ PROJECTS ]
                                </motion.div>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://so-poong.ca" target="_blank" className="flex items-center gap-3 px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors group">
                                    <Link2 size={14} className="group-hover:text-white" /> Sopoong Website
                                </motion.a>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://www.proathletemetrics.com/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors group">
                                    <Link2 size={14} className="group-hover:text-white" /> P.A.M. Website
                                </motion.a>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://wow-guild-raid-ilvl.vercel.app/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors group">
                                    <Link2 size={14} className="group-hover:text-white" /> Guild Website
                                </motion.a>

                                <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="h-[1px] bg-white/10 my-1 mx-2" />

                                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="px-4 py-2 text-[10px] font-mono text-yellow-500/80 tracking-widest border-b border-white/5 mb-1 mt-1">
                                    [ PROFILE ]
                                </motion.div>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://www.linkedin.com/in/soomin-park-030500277/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors group">
                                    <Linkedin size={14} className="group-hover:text-blue-400" /> LINKEDIN
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[55] bg-black/40 pt-35 px-8 lg:hidden flex flex-col justify-start border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                            className="flex flex-col gap-8 text-3xl font-chakra font-bold text-white tracking-tight"
                        >
                            <motion.button variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} onClick={() => handleNavigation('hero')} className="text-left hover:text-yellow-400 transition-colors">HOME</motion.button>
                            <motion.button variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} onClick={() => handleNavigation('about')} className="text-left hover:text-yellow-400 transition-colors">ABOUT</motion.button>
                            <motion.button variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} onClick={() => handleNavigation('projects')} className="text-left hover:text-yellow-400 transition-colors">PROJECTS</motion.button>
                            <motion.button variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} onClick={() => handleNavigation('contact')} className="text-left hover:text-yellow-400 transition-colors">CONTACT</motion.button>

                            <motion.div variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1 } }} className="h-[1px] bg-white/10 my-4 origin-left" />

                            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="flex flex-col gap-4 text-sm font-mono">
                                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-yellow-500/80 font-mono text-xs tracking-widest border-b border-white/5 pb-2 mb-2">
                                    [ PROJECTS ]
                                </motion.div>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://so-poong.ca" target="_blank" className="flex items-center gap-4 hover:text-white transition-colors pl-2">
                                    <Link2 size={16} /> Sopoong Website
                                </motion.a>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://www.proathletemetrics.com/" target="_blank" className="flex items-center gap-4 hover:text-white transition-colors pl-2">
                                    <Link2 size={16} /> P.A.M. Website
                                </motion.a>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://wow-guild-raid-ilvl.vercel.app/" target="_blank" className="flex items-center gap-4 hover:text-white transition-colors pl-2">
                                    <Link2 size={16} /> Guild Website
                                </motion.a>

                                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-yellow-500/80 font-mono text-xs tracking-widest border-b border-white/5 pb-2 mb-2 mt-4">
                                    [ PROFILE ]
                                </motion.div>
                                <motion.a variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} href="https://www.linkedin.com/in/soomin-park-030500277/" target="_blank" className="flex items-center gap-4 hover:text-white transition-colors pl-2">
                                    <Linkedin size={16} /> LINKEDIN
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
