'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Clock, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EmergencyPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050505]">

            {/* 1. HERO: PANIC MODE DESIGN (High Contrast) */}
            <section className="pt-32 pb-20 px-6 bg-red-50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20 relative overflow-hidden">
                {/* Pulse Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-red-200 dark:border-red-800">
                        <AlertTriangle size={14} /> Priority Triage Active
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        In Pain? <span className="text-red-600">Don&apos;t Wait.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        We keep <strong>2 Emergency Slots</strong> open every day for acute pain cases.
                        <br />Please call us immediately. Do not sleep on a toothache.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:+918610425342" className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black uppercase text-xl shadow-2xl flex items-center justify-center gap-3 animate-bounce">
                            <Phone size={24} /> Call Dr. Dhivakaran Directly: 861-042-5342
                        </a>
                        <a href="https://wa.me/918610425342?text=EMERGENCY:%20I%20am%20in%20severe%20pain." className="px-10 py-5 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-green-500 rounded-2xl font-bold uppercase text-sm flex items-center justify-center gap-3">
                            WhatsApp Support
                        </a>
                    </div>
                    <p className="mt-6 text-xs text-slate-400 font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>
                        Doctor Available Now
                    </p>
                </div>
            </section>

            {/* 2. SELF-DIAGNOSIS (Triage) */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-black mb-8">What counts as an Emergency?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Severe Throbbing Pain", desc: "Pain that wakes you up at night or radiates to the ear/neck." },
                                    { title: "Swelling / Abscess", desc: "Visible swelling on the gum or cheek. This is a serious infection.", urgent: true },
                                    { title: "Broken / Knocked-Out Tooth", desc: "If you have the broken piece, put it in milk and come immediately." },
                                    { title: "Bleeding Gums", desc: "Continuous bleeding that won't stop after applying pressure." }
                                ].map((item, i) => (
                                    <div key={i} className={`p-6 rounded-2xl border ${item.urgent ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30' : 'bg-white dark:bg-[#0B1019] border-slate-100 dark:border-white/5'}`}>
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.urgent ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                                                <AlertTriangle size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">First Aid While You Wait</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <CheckCircle2 className="text-green-500 shrink-0" />
                                        <p className="text-slate-300"><strong>Use Ice:</strong> Apply a cold compress to the outside of your cheek to reduce swelling.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <CheckCircle2 className="text-green-500 shrink-0" />
                                        <p className="text-slate-300"><strong>Salt Water:</strong> Rinse gently with warm salt water to clean the area.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <CheckCircle2 className="text-green-500 shrink-0" />
                                        <p className="text-slate-300"><strong>Keep Head Elevated:</strong> Don&apos;t lie flat; it increases blood pressure to the head (and pain).</p>
                                    </li>
                                </ul>
                                <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10">
                                    <div className="text-xs font-bold uppercase text-slate-400 mb-2">Pharmacy Tip</div>
                                    <p className="text-sm">You make take <strong>Ketorol DT</strong> (after food) for temporary relief if you have no medical allergies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LOCATION ANCHOR */}
            <section className="py-20 bg-slate-50 dark:bg-[#020617] text-center px-6">
                <h2 className="text-2xl font-black mb-6">We are located at Nallagandla Main Road</h2>
                <p className="text-slate-500 mb-8">Opposite Citizens Hospital • Beside Ratnadeep Supermarket</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.323577544093!2d78.3117!3d17.4828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzU4LjEiTiA3OMKwMTgnNDIuMSJF!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-[2rem] shadow-xl max-w-5xl mx-auto"
                ></iframe>
            </section>

        </main>
    );
}
