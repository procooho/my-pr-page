'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden p-6 font-sans text-gray-300">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Bloom Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

            {/* Main Content Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-2xl w-full bg-zinc-900/50 border border-white/10 backdrop-blur-md p-12 rounded-sm shadow-2xl text-center"
            >
                {/* Error Code */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-6"
                >
                    <div className="relative">
                        <h1 className="text-9xl font-chakra font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 opacity-80 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center text-yellow-400/20 text-9xl font-chakra font-bold blur-sm select-none">
                            404
                        </div>
                    </div>
                </motion.div>

                {/* Status Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 mb-10"
                >
                    <div className="flex items-center justify-center gap-2 text-yellow-400 font-mono text-sm tracking-widest">
                        <AlertTriangle size={16} />
                        <span>SYSTEM_ERROR: RESOURCE_NOT_FOUND</span>
                    </div>
                    <p className="text-xl text-white font-chakra font-bold">
                        The requested sector could not be located.
                    </p>
                    <p className="text-gray-400 max-w-md mx-auto">
                        You may have followed a broken link or the page has been moved to a different directory.
                    </p>
                </motion.div>

                {/* Terminal Decoy */}
                <div className="bg-black/80 rounded p-4 mb-10 mx-auto max-w-md border-l-2 border-yellow-400 text-left font-mono text-xs text-gray-500 overflow-hidden">
                    <p className="text-green-500/80">$ diag --target current_url</p>
                    <p className="text-yellow-500/80">Running diagnostics...</p>
                    <p>Scanning sectors... [DONE]</p>
                    <p>Verifying path integrity... [FAILED]</p>
                    <p className="text-red-500/80">Error: Path is invalid or unreachable.</p>
                </div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="group relative px-6 py-3 bg-yellow-400 text-black font-bold font-chakra tracking-wide rounded-sm overflow-hidden hover:bg-yellow-300 transition-colors flex items-center gap-2"
                    >
                        <Home size={18} />
                        INITIATE_RETURN
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-wider hover:bg-white/5 transition-colors flex items-center gap-2 rounded-sm"
                    >
                        <ArrowLeft size={16} />
                        GO_BACK
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
