'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plane, Map, ShieldCheck, Banknote, Languages, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MedicalTourismPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050505]">

            {/* 1. HERO: The Destination Hook */}
            <section className="pt-40 pb-20 px-6 bg-white dark:bg-[#050505]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 animate-pulse">
                        <Plane size={14} /> Global Patient Desk
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        World-Class Dentistry. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Without the &quot;Metro&quot; Markup.</span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        Whether you are flying in from <strong>Bangalore/Chennai</strong> or visiting parents from <strong>Andhra</strong>,
                        Noble Dental Care is your destination for 1-Day Advanced Dentistry.
                    </p>

                    {/* Trust Signals for Travelers */}
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> 35 Mins from RGIA Airport (ORR)</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> English & Tamil Speaking Staff</span>
                    </div>
                </div>
            </section>

            {/* 2. METRO ARBITRAGE (Module 3) */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-[#0B1019] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                <Banknote size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Bangalore Quality. Hyderabad Fairness.</h2>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Why pay 60% more just for a pin code in Indiranagar or Bandra? At Noble Dental, we use the
                            <strong>exact same German & Swiss Materials</strong> (3M, Nobel Biocare, Ivoclar) but our operational efficiency passes the savings to you.
                        </p>

                        {/* COMPARISON TABLE */}
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 dark:bg-white/5 uppercase tracking-wider font-bold">
                                    <tr>
                                        <th className="p-4 text-slate-500">Treatment</th>
                                        <th className="p-4 text-red-500">Bangalore / Mumbai Avg*</th>
                                        <th className="p-4 text-green-600 bg-green-50 dark:bg-green-900/10">Noble Dental Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                    <tr className="bg-white dark:bg-[#0B1019]">
                                        <td className="p-4 font-bold">Root Canal (Microscopic)</td>
                                        <td className="p-4 text-slate-500">₹8,000 - ₹12,000</td>
                                        <td className="p-4 font-bold text-slate-900 dark:text-white bg-green-50 dark:bg-green-900/10">₹4,500 - ₹6,000</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-[#0B1019]">
                                        <td className="p-4 font-bold">Zirconia Crown (15 Yr Warranty)</td>
                                        <td className="p-4 text-slate-500">₹15,000 - ₹22,000</td>
                                        <td className="p-4 font-bold text-slate-900 dark:text-white bg-green-50 dark:bg-green-900/10">₹8,000 - ₹12,000</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-[#0B1019]">
                                        <td className="p-4 font-bold">Full Mouth Implants (All-on-4)</td>
                                        <td className="p-4 text-slate-500">₹3.5 Lakhs - ₹5 Lakhs</td>
                                        <td className="p-4 font-bold text-slate-900 dark:text-white bg-green-50 dark:bg-green-900/10">₹2.5 Lakhs - ₹3.5 Lakhs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 italic">*Prices based on average quotes from high-end tier clinics in Indiranagar/Bandra (2024).</p>
                    </div>
                </div>
            </section>

            {/* 3. ANDHRA CONNECTION (Module 2) */}
            <section className="py-20 px-6 bg-slate-100 dark:bg-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Treating Parents
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Visiting Parents? <br />
                            Get their &quot;Kattudu Pallu&quot; Fixed.
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            We know that many parents visiting from <strong>Vijayawada, Guntur, or Bhimavaram</strong> delay their dental needs because they fear &quot;Big City Doctors&quot;.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            Dr. Dhivakaran Reddy speaks their language. No medical jargon. Just honest, clear advice for fixed teeth (Implants/Bridges) within their short stay. We offer <strong>Priority Weekend Slots</strong> so you don&apos;t have to take leave from work.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-4 bg-white dark:bg-[#0B1019] rounded-xl shadow-sm text-sm font-bold">
                                ✅ 3-Day Fixed Teeth
                            </div>
                            <div className="px-6 py-4 bg-white dark:bg-[#0B1019] rounded-xl shadow-sm text-sm font-bold">
                                ✅ Senior Citizen Lift Access
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=1920&auto=format&fit=crop"
                            alt="Senior Citizen Dental Care"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 4. DEEP SOUTH & LANGUAGE (Module 4) */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                        <Languages size={14} /> Language Safety
                    </div>
                    <h2 className="text-3xl font-black mb-8">
                        &quot;My Parents speak only Tamil. Will they handle it?&quot;
                    </h2>
                    <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-2xl font-bold mb-4">Yes. We speak Tamil fluidly.</h3>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Dr. Dhivakaran Reddy is fluent in Tamil. If you are referring parents from <strong>Madurai, Salem, or Krishnagiri</strong>, they will feel right at home. No translation errors. No confusion.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Specialist Focus</div>
                                <h4 className="font-bold text-lg">Zygomatic Implants</h4>
                                <p className="text-sm text-slate-400 mt-2">For severe bone loss cases often rejected by local clinics.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Virtual Triage</div>
                                <h4 className="font-bold text-lg">Send X-Ray First</h4>
                                <p className="text-sm text-slate-400 mt-2">Don&apos;t travel blindly. Get a confirmation before booking tickets.</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a href="https://wa.me/918610425342?text=I%20am%20from%20outstation%20and%20want%20to%20send%20an%20X-Ray" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold uppercase tracking-widest transition-all">
                                Chat on WhatsApp <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
