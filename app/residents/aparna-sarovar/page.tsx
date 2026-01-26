'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle2, Phone, Star, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AparnaResidentsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0B1019]">
            <Header />

            {/* 1. HERO: Hyper-Local Sniper */}
            <section className="pt-40 pb-20 px-6 bg-white dark:bg-[#050505]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                        <MapPin size={14} /> Official Neighborhood Partner
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        Dental Care for Residents of <span className="text-blue-600">Aparna Sarovar & Zenith</span>.
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        We are located <strong>2 minutes</strong> from your main gate.
                        Avoid the Gachibowli traffic. Exclusive evening slots available for Aparna residents.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="tel:+918610425342" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
                            Call Neighbor Line
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. THE APARNA ADVANTAGE */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1545153496-5544d93bd576?q=80&w=2070&auto=format&fit=crop"
                            alt="Aparna Sarovar View"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <div className="font-bold text-lg mb-1">Walking Distance</div>
                            <div className="text-sm opacity-80">Just across the Water Tank Road.</div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Why 500+ Aparna Families Trust Us.</h2>
                        <ul className="space-y-6">
                            {[
                                { title: "Emergency Priority", desc: "Toothache at 9 PM? We prioritize neighbors for late-night emergency triage." },
                                { title: "Kids Friendly", desc: "Many Epistemo & Manthan students (your kids' schoolmates) visit us. Zero-fear environment." },
                                { title: "Senior Citizen Care", desc: "Ground floor access (via lift) and gentle care for your elderly parents living with you." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center shrink-0 text-blue-600">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. TESTIMONIALS FROM NEIGHBORS */}
            <section className="py-20 bg-slate-100 dark:bg-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black mb-12">Authorized Reviews from Aparna Residents</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-[#0B1019] p-8 rounded-3xl shadow-sm text-left">
                            <div className="flex items-center gap-1 text-amber-400 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">&quot;Dr. Dhivakaran is a gem. I literally walked from Zenith to his clinic. Saved my molar which another clinic asked to extract.&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center"><User size={20} /></div>
                                <div>
                                    <div className="font-bold text-sm">Mr. Rajesh K.</div>
                                    <div className="text-xs text-slate-400">Resident, Aparna Zenith</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#0B1019] p-8 rounded-3xl shadow-sm text-left">
                            <div className="flex items-center gap-1 text-amber-400 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">&quot;Very convenient for my parents. The lift access and the patience of the doctor is commendable. Highly recommend for Zicon families.&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center"><User size={20} /></div>
                                <div>
                                    <div className="font-bold text-sm">Mrs. Priya S.</div>
                                    <div className="text-xs text-slate-400">Resident, Aparna Sarovar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
