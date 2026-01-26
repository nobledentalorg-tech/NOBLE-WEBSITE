"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cases } from '@/data/cases';
import CaseCard from '@/components/CaseCard';
import { Filter, Search } from 'lucide-react';

const CaseStudiesPage = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Implants', 'Veneers', 'Ortho', 'Endo', 'Full Mouth'];

    const filteredCases = filter === 'All'
        ? cases
        : cases.filter(c => c.category === filter);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500">

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Search size={12} /> Clinical Evidence
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                        We Don&apos;t Just Promise.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">We Prove.</span>
                    </h1>

                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                        Browse our archive of life-changing transformations. Transparent clinical records of complex rehabilitations, cosmetic makeovers, and microscopic precision.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredCases.map(c => (
                            <motion.div
                                key={c.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CaseCard data={c} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

        </main>
    );
};

export default CaseStudiesPage;
