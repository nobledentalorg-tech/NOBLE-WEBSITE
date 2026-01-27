"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, FileKey, CalendarCheck, EyeOff } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage = () => {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center px-6 py-32 relative overflow-hidden">

            {/* Background Noise/Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-3xl w-full relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="ios-glass p-8 md:p-16 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
                >
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500"></div>

                    <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-200 dark:border-white/10">
                        <Lock size={32} className="text-slate-400 dark:text-slate-500" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
                        Clinical Data Vault
                    </h1>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest mb-8 border border-red-200 dark:border-red-800/30">
                        <EyeOff size={12} /> Public Access Restricted
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">
                        At <span className="text-slate-900 dark:text-white font-bold">Noble Dental Care</span>, patient privacy is our absolute priority.
                        Full High-Resolution Clinical Records (Before/After) are classified as <span className="underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Medical Confidential Data</span>.
                        <br /><br />
                        Access to the <strong>Archive of 5,000+ Cases</strong> is granted only during in-clinic consultations for educational purposes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                                <ShieldCheck size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase">GDPR/HIPAA Compliant</h4>
                                <p className="text-xs text-slate-500">Data Protection Standards</p>
                            </div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center shrink-0">
                                <FileKey size={20} className="text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase">In-Clinic Access Only</h4>
                                <p className="text-xs text-slate-500">Verified Patient View</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                            Return Home
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            <CalendarCheck size={16} /> Book Consult to View Cases
                        </button>
                    </div>

                </motion.div>

                <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                    System ID: ND-SEC-8821 • Encryption: AES-256
                </p>
            </div>
        </main>
    );
};

export default CaseStudiesPage;
