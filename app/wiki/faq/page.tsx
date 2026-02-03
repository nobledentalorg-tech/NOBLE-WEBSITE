import React from 'react';
import { DENTAL_FAQ_DB, FAQData } from '@/src/neo/NeoFAQDatabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dental FAQ & Knowledge Base | Noble Dental Care',
    description: 'Expert answers to your dental questions by Dr. Dhivakaran. Root Canals, Implants, Invisalign, and more explained simply.',
};

export default function FAQIndexPage() {
    // Group by category
    const categories: Record<string, FAQData[]> = {};
    Object.values(DENTAL_FAQ_DB).forEach(item => {
        if (!categories[item.category]) categories[item.category] = [];
        categories[item.category].push(item);
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white">
            <Header />

            <main className="pt-32 pb-20 px-6">
                <section className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Dental <span className="text-blue-600">Knowledge Base</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Clear, clinical answers to your most pressing dental questions.
                        Optimized for voice search and verified by Dr. Dhivakaran.
                    </p>

                    {/* Search Placeholder (Visual Only for now) */}
                    <div className="mt-8 relative max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Search e.g. 'root canal pain'..."
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                </section>

                <div className="max-w-5xl mx-auto space-y-12">
                    {Object.entries(categories).map(([category, items]) => (
                        <section key={category}>
                            <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-blue-500">
                                {category}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {items.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/wiki/faq/${item.id}`}
                                        className="block p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500 hover:shadow-lg transition-all"
                                    >
                                        <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">
                                            {item.question}
                                        </h3>
                                        <p className="text-sm text-slate-500 line-clamp-2">
                                            {item.conciseAnswer}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
