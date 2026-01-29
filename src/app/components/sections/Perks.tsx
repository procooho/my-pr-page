'use client';

import { motion } from 'framer-motion';
import { Brain, Search, Lightbulb, RefreshCw, FileText, Download } from 'lucide-react';

const perks = [
    {
        title: "STRATEGIST",
        icon: Brain,
        desc: "Analysis first. I embrace the 'measure twice, cut once' philosophy, identifying core requirements and workflow efficiencies before execution begins.",
        id: "01"
    },
    {
        title: "ANALYST",
        icon: Search,
        desc: "Critical thinker who spots what others miss. I actively look for loopholes and alternative perspectives to ensure robust, logic-proof solutions.",
        id: "02"
    },
    {
        title: "INNOVATOR",
        icon: Lightbulb,
        desc: "Generating fresh value. I believe new ideas are essential to prevent stagnation, providing detailed explanations to turn creative seeds into reality.",
        id: "03"
    },
    {
        title: "ADAPTER",
        icon: RefreshCw,
        desc: "Open architecture. I absorb feedback without ego, treating every piece of advice as a patch to upgrade my performance and understanding.",
        id: "04"
    }
];

export default function Perks() {
    return (
        <section id="about" className="relative py-32 px-6 md:px-12 bg-[#0e0e0e] overflow-hidden">
            {/* Background Tech Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#333,transparent)]" />
            </div>

            {/* Curved Connector Line (Desktop) */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 50 0 C 50 10, 10 30, 20 60 C 30 90, 90 90, 50 100"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        stroke="rgba(255, 217, 0, 0.14)"
                        strokeWidth="20"
                    />
                    <motion.path
                        d="M 50 0 C 50 10, 10 30, 20 60 C 30 90, 90 90, 50 100"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        stroke="#FFD700"
                        strokeWidth="2"
                        strokeDasharray="5 10"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -100 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        style={{ opacity: 0.8 }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-24 pl-0">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-chakra font-bold text-white">
                        OPERATIONAL <span className="text-yellow-400">DIRECTIVES</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 font-inter text-sm">
                        "I don't just mean planning, I mean <span className="text-white">understanding what truly matters</span> before deciding how to build it."
                    </p>
                </motion.div>

                {/* Diagnostic Cards (Philosophy) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {perks.map((perk, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5, ease: "backOut" } }
                            }}
                            className="bg-zinc-900/80 border border-yellow-400/20 p-8 hover:bg-zinc-800 hover:border-yellow-400 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-100 transition-opacity">
                                <span className="font-mono text-xs text-yellow-400">SYS_{perk.id}</span>
                            </div>

                            <perk.icon className="w-10 h-10 text-white mb-6 group-hover:text-yellow-400 transition-colors" />

                            <h3 className="text-xl font-chakra font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                                {perk.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-yellow-400/50 pl-4 group-hover:border-yellow-400 transition-colors">
                                {perk.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bio / Experience (System Logs) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    {/* Left: Narrative */}
                    <motion.div variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="space-y-6">
                        <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs tracking-widest mb-2">
                            <div className="w-2 h-2 bg-yellow-400 animate-pulse" />
                            SYSTEM_MIGRATION_LOG
                        </div>
                        <h3 className="text-3xl font-chakra font-bold text-white">
                            REFACTORING <br /><span className="text-yellow-400">CAREER PATHWAYS</span>
                        </h3>
                        <div className="mt-8 space-y-8 font-inter leading-relaxed text-gray-300">

                            {/* Log Entry 01: The Alert */}
                            <div className="relative pl-6 border-l-2 border-yellow-400">
                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-400/20 border border-yellow-400 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                                </span>
                                <div className="mb-2 font-mono text-xs text-yellow-400 tracking-wider">
                                    SYS_ALERT: PASSION_PROTOCOL_INITIATED
                                </div>
                                <div className="bg-yellow-400/5 p-4 rounded-sm border border-yellow-400/10">
                                    <p className="text-sm">
                                        <span className="text-yellow-400 font-bold">CRITICAL UPDATE:</span> After years in the trucking and logistics sector, I executed a strategic pivot to follow my true passion. I realized I needed to <span className="text-white border-b border-yellow-400/50 pb-0.5">build systems, not just operate them.</span>
                                    </p>
                                </div>
                            </div>

                            {/* Log Entry 02: Diversity */}
                            <div className="relative pl-6 border-l-2 border-white/10 hover:border-white/30 transition-colors group">
                                <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 border border-white/20 group-hover:border-white/60 transition-colors" />
                                <div className="mb-2 font-mono text-xs text-gray-500 group-hover:text-yellow-400/80 transition-colors tracking-wider">
                                    LOG: EXPERIENCE_AS_FEATURE
                                </div>
                                <p>
                                    My background is diverse by design. I leverage years of high-stakes experience across data-heavy sectors—from fleet logistics to team management—to bring a unique perspective to software engineering. <span className="text-white">I build with an operator's mindset: reliability first.</span>
                                </p>
                            </div>

                            {/* Log Entry 03: Validation */}
                            <div className="relative pl-6 border-l-2 border-white/10 hover:border-white/30 transition-colors group">
                                <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 border border-white/20 group-hover:border-white/60 transition-colors" />
                                <div className="mb-2 font-mono text-xs text-gray-500 group-hover:text-yellow-400/80 transition-colors tracking-wider">
                                    LOG: VALIDATION_SUCCESS
                                </div>
                                <p>
                                    This transition began with <span className="text-white">Open Studies at NAIT</span>, where I quickly achieved top-tier grades, validating my entry into the <span className="text-white">Computer Software Development</span> program.
                                </p>
                            </div>

                            {/* Log Entry 04: Identity */}
                            <div className="relative pl-6 border-l-2 border-white/10 hover:border-white/30 transition-colors group">
                                <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 border border-white/20 group-hover:border-white/60 transition-colors" />
                                <div className="mb-2 font-mono text-xs text-gray-500 group-hover:text-yellow-400/80 transition-colors tracking-wider">
                                    LOG: IDENTITY_RESOLVED
                                </div>
                                <p>
                                    If I were to describe myself in one word, it would be <span className="text-white font-bold">Strategist</span>. I start every task by analyzing and planning carefully, ensuring that when execution begins, it is rapid, precise, and error-free.
                                </p>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right: Timeline */}
                    <motion.div
                        className="relative border-l border-white/10 pl-8 space-y-8"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {[
                            { role: "Store Manager", company: "Sopoong Korean Street Food | Sherwood Park, AB", date: "Sep 2024 - Present" },
                            { role: "CSD Diploma", company: "NAIT | 4.0 / 4.0 GPA | Edmonton, AB", date: "Sep 2023 - Dec 2025" },
                            { role: "Professional Truck Driver", company: "Logistics Sector (Various) | Canada & USA", date: "2018 - 2023" },
                            { role: "Technician / Team Lead", company: "City Truck Stop | Edmonton, AB", date: "2014 - 2018" },
                            { role: "Interior Designer", company: "Jawoo Sonic | South Korea", date: "2013 - 2014" },
                            { role: "Academy Instructor", company: "HnJ Academy | South Korea", date: "2012 - 2013" },
                            { role: "Mech Engineering", company: "Hanyang University | South Korea", date: "2008 - 2012" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { x: 20, opacity: 0 },
                                    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } }
                                }}
                                className="relative group"
                            >
                                <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-white/20 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-colors" />
                                <h4 className="text-white font-bold font-chakra">{item.role}</h4>
                                <p className="text-yellow-400/80 text-xs font-mono mb-1">{item.company}</p>
                                <p className="text-gray-500 text-xs">{item.date}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Documents Area */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.98 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
                    }}
                    className="relative bg-zinc-900/30 border border-yellow-400/20 p-8 rounded-sm overflow-hidden"
                >
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400" />

                    {/* Background Scanline */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Header Section */}
                        <div className="flex items-start gap-6 w-full md:w-auto">
                            <div className="p-3 bg-yellow-400/10 text-yellow-400 rounded-sm border border-yellow-400/20">
                                <FileText size={28} />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="text-xl font-bold font-chakra text-white tracking-wide">ACCESS CREDENTIALS</h4>
                                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono tracking-wider animate-pulse">
                                        VERIFIED
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 font-mono">
                                    // Full dossier available for extraction.
                                </p>
                            </div>
                        </div>

                        {/* File Grid */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <a
                                href="/Soomin Park - Resume 2025.docx"
                                className="group flex items-center gap-4 px-5 py-3 bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 rounded-sm"
                            >
                                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-yellow-400/20 transition-colors">
                                    <FileText size={16} className="text-gray-400 group-hover:text-yellow-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-gray-300 group-hover:text-white">RESUME.DOCX</span>
                                    <span className="text-[10px] text-gray-600 group-hover:text-yellow-400/70">LATEST BUILD</span>
                                </div>
                                <div className="w-full"></div>
                                <div className="ml-2 pl-4 border-l border-white/5 text-gray-500 group-hover:text-yellow-400">
                                    <Download size={14} />
                                </div>
                            </a>

                            <a
                                href="/Soomin Park - Cover Letter 2025.docx"
                                className="group flex items-center gap-4 px-5 py-3 bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 rounded-sm"
                            >
                                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-yellow-400/20 transition-colors">
                                    <FileText size={16} className="text-gray-400 group-hover:text-yellow-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-gray-300 group-hover:text-white">COVER_LETTER.DOCX</span>
                                    <span className="text-[10px] text-gray-600 group-hover:text-yellow-400/70">DOCUMENTATION</span>
                                </div>
                                <div className="w-full"></div>
                                <div className="ml-2 pl-4 border-l border-white/5 text-gray-500 group-hover:text-yellow-400">
                                    <Download size={14} />
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
