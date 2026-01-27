"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cases } from '@/data/cases';
import CaseCard from '@/components/CaseCard';
import { Search, Filter, CalendarCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Implants', 'Veneers', 'Ortho', 'Endo', 'Full Mouth'];

    const filteredCases = filter === 'All'
        ? cases
        : cases.filter(c => c.category === filter);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 mb-6"
                    >
                        Clinical Excellence
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter"
                    >
                        Real Patients. <br />
                        <span className="text-blue-600 dark:text-cyan-400 italic">Real Transformations.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Witness the precision of Noble Dental. Our cases demonstrate the intersection of medical science and artistic reconstruction.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                    : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-white/5 hover:border-blue-400'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredCases.map((caseData) => (
                            <motion.div
                                key={caseData.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CaseCard data={caseData} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-white/10 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Ready for your transformation?</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                        Every smile is unique. Book a clinical assessment with Dr. Dhivakaran to discuss your customized treatment plan.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                            <CalendarCheck size={18} /> Book Consultation
                        </Link>
                        <Link href="/treatments" className="px-8 py-4 text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
                            Explore Treatments <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default CaseStudiesPage;
