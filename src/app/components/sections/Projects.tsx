'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight, Layers, Code, Cpu } from 'lucide-react';

const projects = [
    {
        id: "01",
        title: "Sopoong Restaurant",
        subtitle: "COMMERCIAL WEBSITE - PERSONAL PROJECT",
        role: "FULL STACK SOLO DEV",
        period: "DEC 2025",
        url: "https://so-poong.ca",
        image: "/Sopoong.png",
        tech: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "Cloudinary"],
        description: "A warm and casual commercial website for a busy restaurant. Fully deployed and active, featuring a custom-built Content Management System (CMS) that allows non-technical users to manage menus, blogs, and notifications easily.",
        features: [
            "Custom Dashboard with CRUD for Menus, Blogs, and Notifications.",
            "Drag & Drop item reordering for efficient management.",
            "Contact form with multiple layers of spam/bot protection.",
            "Dynamic Menu system with expand/collapse categories."
        ],
        contributions: null
    },
    {
        id: "02",
        title: "ProAthleteMetrics",
        subtitle: "NAIT CAPSTONE PROJECT",
        role: "TECH LEAD",
        period: "SEP 2025 - DEC 2025",
        url: "https://www.proathletemetrics.com/",
        image: "/Capstone.png",
        tech: ["Next.js", "Gemini AI", "Mux Video", "Clerk Auth", "C# ASP.NET Core"],
        description: "An advanced athlete performance management system delivering AI-driven insights. Designed to track baseline testing results, monitor progress, and provide data-driven recommendations for coaches, trainers, and athletes across multiple sports.",
        features: [
            "Agent–Athlete Connection: Seamless matchmaking workflow for agents to scout and manage prospects.",
            "AI-Powered Analysis: Personalized assessments & training recommendations via Google Gemini 2.5 Flash.",
            "Interactive Dashboards: Dashboard for data visualization and analysis.",
            "Role-Based Access Control: Multi-tier permission system.",
            "Video Integration: Seamless performance video management and streaming using Mux."
        ],
        contributions: [
            "Designed high-level product structure and system architecture.",
            "Led technical direction and facilitated weekly client meetings.",
            "Integrated Core AI & Video features (Gemini, Mux).",
            "Implemented RBAC middleware and secured API endpoints."
        ]
    },
    {
        id: "03",
        title: "WoW Guild Manager",
        subtitle: "PERSONAL PROJECT",
        role: "SOLO DEV",
        period: "AUG 2025",
        url: "https://wow-guild-raid-ilvl.vercel.app/",
        image: "/Guild Item Level Tracker.png",
        tech: ["React", "MUI", "Blizzard API", "OAuth 2.0", "Prisma"],
        description: "A comprehensive guild management tool built to test full-stack capabilities. Integrates with the official Blizzard API via OAuth 2.0 to track real-time character stats, raid logs, and roster performance.",
        features: [
            "Real-time Roster Tracking with daily API updates.",
            "Role-based access control (Officer vs General User).",
            "Raid Logging system linked to WarcraftLogs and YouTube.",
            "Mobile-responsive design with Light/Dark mode toggles."
        ],
        contributions: null
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 relative bg-[#111] overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-32 flex flex-col md:flex-row justify-between md:items-end border-b border-white/10 pb-6 border-l-4 border-l-yellow-400 pl-6 md:pl-0 md:border-l-0">
                    <div className="mb-8 md:mb-0">
                        <span className="font-mono text-xs text-yellow-400 mb-2 block">// PORTFOLIO INDEX</span>
                        <h2 className="text-4xl md:text-5xl font-chakra font-bold text-white">HOLOGRAPHIC <br /><span className="text-gray-600">SCHEMATICS</span></h2>
                    </div>
                    <p className="max-w-md text-sm text-gray-400 font-mono md:text-right">
                        [ 03 SYSTEM ARCHITECTURES LOADED ]<br />
                        Detailed breakdown of technical contributions.
                    </p>
                </div>

                {/* Vertical Project List */}
                <div className="space-y-48">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}
                        >

                            {/* Project Visual (Image) */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9, x: index % 2 === 1 ? 50 : -50 },
                                    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } }
                                }}
                                className="w-full lg:w-3/5 group relative"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-black/50">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                    {/* Tech Stack Floating Badge (Desktop) */}
                                    <div className="hidden md:flex absolute bottom-6 left-6 flex-wrap gap-2 z-20">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-black/80 backdrop-blur border border-white/20 text-[10px] font-mono text-yellow-400 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack (Mobile) */}
                                <div className="flex md:hidden flex-wrap gap-2 mt-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] font-mono text-yellow-400 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Decorative Elements */}
                                <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 border-b-2 border-${index % 2 === 1 ? 'l' : 'r'}-2 border-yellow-400/30 rounded-bl-3xl`} />
                            </motion.div>

                            {/* Project Details (Text) */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                                }}
                                className="w-full lg:w-2/5 space-y-8"
                            >
                                <div className="space-y-2">
                                    <div className="flex flex-col items-start gap-1 text-yellow-400 font-mono text-xs">
                                        <span>PROJECT_{project.id}</span>
                                        <span className="w-8 h-[1px] bg-yellow-400/50 my-1" />
                                        <span>{project.role}</span>
                                        <span className="w-8 h-[1px] bg-yellow-400/50 my-1" />
                                        <span className="text-gray-400">{project.period}</span>
                                    </div>
                                    <h3 className="text-4xl font-chakra font-bold text-white leading-none">
                                        {project.title.toUpperCase()}
                                    </h3>
                                    <p className="text-sm font-mono text-gray-500">{project.subtitle}</p>
                                </div>

                                <p className="text-gray-300 font-inter leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                        <Layers size={14} className="text-yellow-400" /> KEY FEATURES
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                <span className="text-yellow-400 mt-1.5 w-1 h-1 bg-yellow-400 rounded-full flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {project.contributions && (
                                    <div className="space-y-4 pt-4 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                            <Cpu size={14} className="text-yellow-400" /> CORE CONTRIBUTIONS
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.contributions.map((contribution, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <span className="text-white mt-1.5 w-1 h-1 border border-white rounded-full flex-shrink-0" />
                                                    {contribution}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-6 flex gap-4">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold font-mono text-sm hover:bg-yellow-400 transition-colors"
                                    >
                                        LIVE SYSTEM <ExternalLink size={14} />
                                    </a>
                                </div>

                            </motion.div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
