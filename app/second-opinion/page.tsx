'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, FileText, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SecondOpinionPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050505]">
            <Header />

            {/* 1. HERO: The Hook */}
            <section className="pt-40 pb-20 px-6 bg-white dark:bg-[#050505]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-200 dark:border-amber-800">
                        <ShieldCheck size={14} /> Patient Advocacy Initiative
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                        Told you need a <span className="text-red-500">Root Canal?</span> <br />
                        Get a Free Double Check.
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        40% of standard dental diagnoses are aggressive or unnecessary.
                        <br />Before you agree to surgery, let Dr. Dhivakaran audit your X-Ray.
                        <br /><strong>We save 3 out of 10 &quot;Unsavable&quot; teeth.</strong>
                    </p>

                    <div className="flex justify-center">
                        <a href="https://wa.me/918610425342?text=I%20have%20an%20X-Ray%20and%20want%20a%20Second%20Opinion" className="px-10 py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black uppercase text-sm shadow-2xl flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform">
                            <FileText size={18} /> Upload My X-Ray (Free)
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM: Corporate Quotas */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-black mb-6">Why do diagnoses differ?</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                            Many corporate chains have <strong>monthly targets</strong>. A small cavity that could be filled is often pushed as a &quot;Root Canal&quot; to meet a quota.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                            At Noble Dental, we are <strong>Owner-Operated</strong>. Dr. Dhivakaran answers only to his conscience, not a sales manager. If a tooth can be saved with a simple filling, that is exactly what we will do.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                                <XCircle className="text-red-500 shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">No Sales Quotas</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                                <XCircle className="text-red-500 shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">No &quot;Rotational&quot; Junior Doctors</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
                                <CheckCircle2 className="text-green-500 shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">100% Ethical Diagnostics</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[2.5rem] relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-50"></div>
                        <h3 className="text-2xl font-bold mb-8">Case Study: &quot;The Saved Molar&quot;</h3>
                        <div className="space-y-6 text-sm text-slate-300">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold shrink-0">1</div>
                                <p>Patient advised &quot;Extraction + Implant&quot; (Cost: ₹35,000) by a local chain clinic.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold shrink-0">2</div>
                                <p>Dr. Dhivakaran used a **Microscope** to find the tooth was structurally sound, just had deep decay.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold shrink-0">3</div>
                                <p><strong>Outcome:</strong> Tooth saved with a Biomimetic Filling (Cost: ₹2,500). Patient kept their natural tooth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-20 text-center px-6">
                <div className="max-w-2xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    <h2 className="text-3xl font-black mb-6 relative z-10">Send us your X-Ray now.</h2>
                    <p className="text-blue-100 mb-8 relative z-10">It costs ₹0 to be sure. It costs a tooth to be wrong.</p>
                    <a href="https://wa.me/918610425342?text=Second%20Opinion%20Needed" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform relative z-10">
                        Chat on WhatsApp <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
