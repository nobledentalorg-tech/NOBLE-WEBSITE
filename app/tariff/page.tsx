import React from 'react';
import { Coins, CheckCircle2, Shield, Info, ArrowRight, IndianRupee, Percent } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dental Treatment Costs Nallagandla | Transparent Tariff',
    description: 'Affordable dental care in Nallagandla. Check our transparent pricing for Root Canals, Implants, and Braces. 0% EMI options available for premium treatments.',
};

export default function TariffPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019]">

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Transparent Pricing. <span className="text-blue-600">No Surprises.</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        High-quality care doesn&apos;t have to be expensive. We believe in being &quot;Cheap and Best&quot; — offering premium global standards at honest, affordable Indian rates.
                    </p>
                </div>

                {/* Affirmation / EMI Section (The "Cheap and Best" Strategy) */}
                <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-6 border border-white/30 text-xs font-bold uppercase tracking-widest">
                                <Percent size={14} /> Affordability Hack
                            </div>
                            <h2 className="text-3xl font-black mb-6">0% EMI Available</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Don&apos;t let cost delay your smile. We offer <strong>0% Interest EMI</strong> plans for Dental Implants, Invisalign, and Full Mouth Rehabilitation. Pay in small, easy installments while you enjoy your perfect smile today.
                            </p>
                            <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                                Check EMI Eligibility
                            </button>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Shield className="text-green-400" /> Best Value Guarantee</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-400" /> <span><strong>No Hidden Consumable Charges:</strong> What you see is what you pay.</span></li>
                                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-400" /> <span><strong>Free Consultations:</strong> For all Implant & Ortho assessments.</span></li>
                                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-400" /> <span><strong>Lifetime Warranty:</strong> On premium Zirconia Crowns & Implants.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tariff Table */}
                <div className="max-w-3xl mx-auto bg-white dark:bg-[#0B1019] rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-white/10">
                    <div className="p-6 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                            <IndianRupee size={20} className="text-slate-400" /> General Tariff 2024
                        </h3>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-white/5">
                        {[
                            { item: "Consultation", cost: "₹300 - ₹500" },
                            { item: "Digital X-Ray (RVG)", cost: "₹150" },
                            { item: "Scaling & Polishing (Cleaning)", cost: "₹1,500 - ₹2,500" },
                            { item: "Composite Filling (Laser)", cost: "₹1,500 - ₹3,500" },
                            { item: "Root Canal Treatment (Rotary)", cost: "₹3,500 - ₹5,000" },
                            { item: "Microscopic Root Canal", cost: "₹6,000 - ₹8,000" },
                            { item: "Zirconia Crown (Warranty)", cost: "₹8,000 - ₹15,000" },
                            { item: "Dental Implant (Adin - Israel)", cost: "₹22,000" },
                            { item: "Dental Implant (Straumann - Swiss)", cost: "₹35,000" },
                            { item: "Metal Braces", cost: "₹35,000" },
                            { item: "Ceramic Braces", cost: "₹55,000" },
                            { item: "Invisalign / Clear Aligners", cost: "₹950 per tray" },
                        ].map((row, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                <span className="text-slate-600 dark:text-slate-300 font-medium">{row.item}</span>
                                <span className="text-slate-900 dark:text-white font-bold">{row.cost}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </main>
    );
}
