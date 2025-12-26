'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, Lock, Unlock } from 'lucide-react';

export default function EducationCTA() {
    const [isContactRevealed, setIsContactRevealed] = useState(false);

    return (
        <section id="contact" className="relative py-32 px-6 overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Education */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0, x: -50, transition: { duration: 0.3 } },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="space-y-8"
                >
                    <div className="border-l-4 border-yellow-400 pl-8">
                        <h3 className="font-chakra font-bold text-3xl mb-2">NAIT</h3>
                        <p className="text-gray-400 font-inter text-lg">Digital Media & IT</p>
                        <div className="mt-4 font-mono text-xl text-yellow-400 px-4 py-2 bg-yellow-400/10 inline-block border border-yellow-400/20">
                            GPA: 4.0/4.0
                        </div>
                    </div>

                    {/* Progress Bar Mockup */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
                        <motion.div
                            variants={{
                                hidden: { width: 0, transition: { duration: 0.5 } },
                                visible: { width: '100%', transition: { duration: 1.5, ease: "circOut" } }
                            }}
                            className="h-full bg-yellow-400 shadow-[0_0_10px_#FFD700]"
                        />
                    </div>
                    <p className="text-xs font-mono text-gray-500 text-right">SYSTEM KNOWLEDGE: 100% // READY FOR DEPLOYMENT</p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0, x: 50, transition: { duration: 0.3 } },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
                    }}
                    className="flex flex-col items-start md:items-end space-y-8"
                >
                    <h2 className="text-6xl font-chakra font-bold text-white leading-[0.9] text-left md:text-right">
                        READY TO <br /><span className="text-yellow-400">EXECUTE?</span>
                    </h2>

                    <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right">
                        {!isContactRevealed ? (
                            <button
                                onClick={() => setIsContactRevealed(true)}
                                className="flex items-center gap-2 text-yellow-400 hover:text-white transition-colors font-mono text-sm border border-yellow-400/30 px-3 py-1 rounded bg-yellow-400/5 hover:bg-yellow-400/10"
                            >
                                <Lock size={12} /> [ CLICK TO DECRYPT CONTACT DATA ]
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(5px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                className="flex flex-col items-end gap-1"
                            >
                                <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                                    <span className="text-green-500 text-xs">[SECURE]</span> procooho@gmail.com
                                </div>
                                <p className="text-gray-400 font-mono text-sm">(780) 777-7321</p>
                            </motion.div>
                        )}
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.linkedin.com/in/soomin-park-030500277/"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 hover:text-white transition-all duration-300 font-mono text-sm rounded-sm group"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                LINKEDIN_PROFILE
                                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <a
                            href="/Soomin Park - Resume 2025.docx"
                            className="group relative px-8 py-4 bg-yellow-400 text-black font-bold font-chakra uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            <Download size={18} />
                            Download Resume
                            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/Soomin Park - Cover Letter 2025.docx"
                            className="px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            Download Cover Letter
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
