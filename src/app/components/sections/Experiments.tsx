'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Palette, ArrowRight, TestTube, Box } from 'lucide-react';
import Link from 'next/link';

const experiments = [
    {
        title: "DESIGN SYSTEM",
        id: "EXP_01",
        description: "The atomic visual language powering this environment. Typography, colors, and core tokens.",
        url: "/2025/design-system-showcase-2025",
        icon: Palette,
        color: "text-cyan-400",
        border: "border-cyan-400/20",
        hover: "hover:border-cyan-400",
        bg: "hover:bg-cyan-400/5",
        status: "STABLE"
    },
    {
        title: "COMPONENT LAB",
        id: "EXP_02",
        description: "Isolated behavioral tests for UI components. Interactive states, animations, and edge cases.",
        url: "/2025/component-showcase-2025",
        icon: Box,
        color: "text-purple-400",
        border: "border-purple-400/20",
        hover: "hover:border-purple-400",
        bg: "hover:bg-purple-400/5",
        status: "STABLE"
    }
];

export default function Experiments() {
    return (
        <section id="experiments" className="relative py-24 px-6 bg-[#080808] overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_#333_0%,_transparent_70%)]" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/5 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-yellow-400 mb-2">
                            <FlaskConical size={16} />
                            <span className="font-mono text-xs tracking-widest">R&D // INTERNAL</span>
                        </div>
                        <h2 className="text-3xl font-chakra font-bold text-white">
                            EXPERIMENTAL <span className="text-gray-600">PROTOCOLS</span>
                        </h2>
                    </div>
                    <p className="font-mono text-xs text-gray-500 md:max-w-sm text-left md:text-right">
                        // NON-PRODUCTION ENVIRONMENTS<br />
                        Testing grounds for new interaction models and visual systems.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiments.map((exp, index) => (
                        <Link key={index} href={exp.url} className="group">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                                }}
                                className={`h-full border ${exp.border} bg-white/5 backdrop-blur-sm p-8 rounded-sm transition-all duration-300 ${exp.hover} ${exp.bg} relative overflow-hidden`}
                            >
                                {/* Hover Gradient */}
                                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />

                                <div className="flex justify-between items-start mb-6 relative">
                                    <div className={`p-3 rounded-full bg-white/5 ${exp.color}`}>
                                        <exp.icon size={24} />
                                    </div>
                                    <span className="font-mono text-[10px] border border-white/10 px-2 py-1 rounded text-gray-400">
                                        {exp.id} // {exp.status}
                                    </span>
                                </div>

                                <h3 className={`text-xl font-chakra font-bold text-white mb-2 group-hover:text-white transition-colors`}>
                                    {exp.title}
                                </h3>

                                <p className="text-sm text-gray-400 font-inter leading-relaxed mb-6 group-hover:text-gray-300">
                                    {exp.description}
                                </p>

                                <div className={`flex items-center gap-2 text-xs font-mono font-bold ${exp.color} group-hover:gap-4 transition-all`}>
                                    INITIALIZE <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
