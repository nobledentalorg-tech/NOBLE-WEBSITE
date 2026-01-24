import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, X, Microscope, Brain, Heart, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Choose Noble Dental Care? | Best Dentist Nallagandla',
    description: 'Compare Noble Dental Care vs Standard Clinics. See why 100x Microscopic precision and AI-Guided implants make us the safest choice in Hyderabad.',
    keywords: ['Best dentist in Nallagandla', 'Microscopic dentistry Hyderabad', 'Noble Dental vs Traditional', 'Bio-Mimetic Dentist'],
};

export default function WhyNoblePage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050505] pt-24 pb-20">

            {/* Hero */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="inline-block text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">The Noble Standard</span>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    Not All Dentistry <br /> Is Created <span className="text-blue-600">Equal.</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Most clinics treat the symptom. We treat the system. Discover why our Bio-Digital approach is safer, less invasive, and longer-lasting than traditional care.
                </p>
            </div>

            {/* Comparison Table */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <div className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2">

                        {/* Traditional Column */}
                        <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-transparent">
                            <h3 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
                                <span className="w-2 h-2 bg-slate-400 rounded-full"></span> Standard Clinic
                            </h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4 opacity-60">
                                    <X className="text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-900 dark:text-white mb-1">Drilling & Filling</strong>
                                        <p className="text-sm text-slate-500">Removes healthy tooth structure to fit fillings.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 opacity-60">
                                    <X className="text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-900 dark:text-white mb-1">Naked Eye / Loupes</strong>
                                        <p className="text-sm text-slate-500">Limited visibility leading to missed canals.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 opacity-60">
                                    <X className="text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-900 dark:text-white mb-1">Boiler Sterilization</strong>
                                        <p className="text-sm text-slate-500">Basic pressure cookers. Cannot kill spores.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 opacity-60">
                                    <X className="text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-900 dark:text-white mb-1">Standard Implants</strong>
                                        <p className="text-sm text-slate-500">Generic placement based on 2D X-rays.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Noble Column */}
                        <div className="p-10 md:p-16 bg-blue-600 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] -mr-20 -mt-20"></div>

                            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3 relative z-10">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> Noble Dental Care
                            </h3>
                            <ul className="space-y-8 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="p-1 bg-white/20 rounded-full"><Check size={16} className="text-white" /></div>
                                    <div>
                                        <strong className="block text-white text-lg mb-1">Bio-Mimetic Restoration</strong>
                                        <p className="text-sm text-blue-100">We rebuild teeth layer-by-layer, mimicking nature.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-1 bg-white/20 rounded-full"><Check size={16} className="text-white" /></div>
                                    <div>
                                        <strong className="block text-white text-lg mb-1">Microscopic Precision (25x)</strong>
                                        <p className="text-sm text-blue-100">We see what others miss. 100% canal cleaning.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-1 bg-white/20 rounded-full"><Check size={16} className="text-white" /></div>
                                    <div>
                                        <strong className="block text-white text-lg mb-1">Class B Sterilization</strong>
                                        <p className="text-sm text-blue-100">European Vacuum Autoclaves. 100% Spore-Free.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-1 bg-white/20 rounded-full"><Check size={16} className="text-white" /></div>
                                    <div>
                                        <strong className="block text-white text-lg mb-1">AI-Guided Implantology</strong>
                                        <p className="text-sm text-blue-100">Zero-error placement using digital surgical guides.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* The Human Standard */}
            <section className="max-w-5xl mx-auto px-6 text-center">
                <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-white/5 mb-8">
                    <Heart className="text-red-500 fill-current" size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">High Tech. Higher Care.</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                    &quot;Technology means nothing without empathy. We use the world&apos;s best equipment not to show off, but because it allows us to be <strong>gentler, faster, and safer</strong> for you. That is the Noble promise.&quot;
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/about" className="text-blue-600 font-bold hover:underline">Meet Dr. Dhivakaran</Link>
                    <span className="text-slate-300">|</span>
                    <Link href="/doctors" className="text-blue-600 font-bold hover:underline">Our Specialists</Link>
                </div>
            </section>

        </main>
    );
}
