'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft, CheckCircle2, Calendar, Shield, Activity, Clock, Play, Zap,
    ArrowRight, Layers, Star, Smile, Sparkles, Ruler, Award, ShieldCheck, HeartPulse, Heart, Scan,
    Baby, Scissors, PenTool, User, Search, ChevronDown, Check, Share2, BookOpen
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { TreatmentData } from '@/data/treatments';

interface Props {
    treatment: TreatmentData;
}

const IconMap: Record<string, any> = {
    Clock, Ruler, Activity, Shield, Droplets: Activity,
    Star, Scan, Smile, ShieldCheck, HeartPulse, Award, Heart, Sparkles, Zap,
    CheckCircle2, Baby, Scissors, PenTool, Calendar, User, Search, ChevronDown, Check
};

export default function TreatmentDetailClient({ treatment }: Props) {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B1019] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-500 overflow-x-hidden pt-20">

            {/* --- HERO SECTION --- */}
            <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>

                <div className="absolute top-6 left-6 z-30">
                    <Link href="/treatments" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
                    </Link>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 lg:order-1">
                        <RevealOnScroll>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                                <Sparkles size={12} /> {treatment.category} Protocol
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                {treatment.title}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-lg border-l-2 border-blue-200 dark:border-blue-500/30 pl-6 my-8">
                                {treatment.subtitle}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-slate-900 dark:bg-blue-600 hover:opacity-90 text-white rounded-full font-bold shadow-xl transition-all flex items-center gap-2">
                                    Book Consultation
                                </button>
                                <button className="px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold transition-all flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10">
                                    <Play size={16} fill="currentColor" /> Watch Video
                                </button>
                                <button
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: treatment.title,
                                                text: treatment.description,
                                                url: window.location.href,
                                            }).catch(console.error);
                                        } else {
                                            alert("Link copied to clipboard!");
                                            navigator.clipboard.writeText(window.location.href);
                                        }
                                    }}
                                    className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10"
                                    aria-label="Share this treatment"
                                >
                                    <Share2 size={20} />
                                </button>
                            </div>

                            {/* Reviewer Badge */}
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/10 mt-8">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 dark:border-white/10">
                                    <Image
                                        src="/images/dhivakaran.webp"
                                        alt="Dr. Dhivakaran"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Medically Reviewed By</div>
                                    <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                                        Dr. Dhivakaran <span className="text-blue-500 text-[10px] bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-100 dark:border-blue-800">CMD</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400">January 2026</div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <div className="relative flex justify-center items-center order-1 lg:order-2">
                        <div className="relative w-full max-w-[500px] aspect-square bg-white dark:bg-white/5 backdrop-blur-xl rounded-[3rem] border border-slate-100 dark:border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-2xl">
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                                <Image
                                    src={treatment.heroImage}
                                    alt={`${treatment.title} Treatment Overview`}
                                    fill
                                    className="object-cover opacity-90 hover:scale-110 transition-transform duration-1000"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- STATS GRID --- */}
            <div className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-white/5 py-12 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {treatment.stats.map((stat, i) => {
                        const IconComponent = IconMap[stat.icon] || Activity;
                        return (
                            <div key={i} className="text-center border-r border-slate-100 dark:border-white/5 last:border-0">
                                <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-500">
                                    <IconComponent size={24} />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</div>
                                <div className="text-xs font-bold uppercase text-slate-500 tracking-widest">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* --- DETAILED CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-20">
                    <RevealOnScroll>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {treatment.longDescription}
                        </p>
                    </RevealOnScroll>
                    {/* [NEW] MEDICAL DEEP DIVE: ETIOLOGY */}
                    {treatment.medicalContext && (
                        <section className="space-y-12">
                            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-3xl p-8 border border-blue-100 dark:border-blue-800/30">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                    <Search className="text-blue-600" /> Understanding the Cause
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {treatment.medicalContext.etiology.map((item, idx) => (
                                        <div key={idx} className="bg-white dark:bg-[#0B1019] p-6 rounded-2xl shadow-sm">
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{item.medicalTerm}</div>
                                            <div className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.cause}</div>
                                            <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <Scan size={20} className="text-purple-500" /> Investigations Required
                                    </h4>
                                    <ul className="space-y-3">
                                        {treatment.medicalContext.investigations.map((inv, idx) => (
                                            <li key={idx} className="flex items-start gap-3 bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                                                <div>
                                                    <div className="font-bold text-sm text-slate-900 dark:text-white">{inv.name}</div>
                                                    <div className="text-xs text-slate-500">{inv.purpose}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <ShieldCheck size={20} className="text-green-500" /> Prevention Strategy
                                    </h4>
                                    <ul className="space-y-3">
                                        {treatment.medicalContext.prevention.map((prev, idx) => (
                                            <li key={idx} className="flex items-center gap-3 bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                                {prev}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}

                    <section>
                        <RevealOnScroll>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                                <Layers className="text-blue-500" /> Clinical Procedure Step-by-Step
                            </h3>

                            {/* NEW: Detailed Timeline View if available, else fallback to cards */}
                            {treatment.procedureDetailed ? (
                                <div className="space-y-0 relative border-l-2 border-slate-200 dark:border-white/10 ml-4 md:ml-6 pb-12">
                                    {treatment.procedureDetailed.map((step, idx) => (
                                        <div key={idx} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                                            {/* Timeline Dot */}
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-[#0B1019]"></div>

                                            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-blue-500/30 transition-all">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.step}</h4>
                                                    <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-black/20 px-2 py-1 rounded text-slate-500">{step.duration}</span>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
                                                    {step.description}
                                                </p>
                                                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 dark:bg-green-900/10 px-2 py-1 rounded">
                                                    <Smile size={12} /> Pain Level: {step.painLevel}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Fallback for legacy pages
                                <div className="space-y-4">
                                    {treatment.process.map((step: any, idx) => ( // Cast to any to handle legacy types
                                        <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                            <h4 className="font-bold text-slate-900 dark:text-white">{step.title}</h4>
                                            <p className="text-sm text-slate-500">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* [NEW] POST-OP & RECOVERY GUIDE */}
                            {treatment.postOp && (
                                <section className="mt-20">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                        <HeartPulse className="text-red-500" /> Recovery & Aftercare
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-slate-50 dark:bg-[#0F172A] p-6 rounded-2xl">
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">⚡ Immediate Post-Op</h4>
                                            <ul className="space-y-3">
                                                {treatment.postOp.immediate.map((item, i) => (
                                                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                                        <Clock size={16} className="text-blue-500 mt-0.5 shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl">
                                            <h4 className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">⚠️ Warning Signs</h4>
                                            <ul className="space-y-3">
                                                {treatment.postOp.warningSigns.map((item, i) => (
                                                    <li key={i} className="text-sm text-red-600/80 dark:text-red-300 flex items-start gap-2">
                                                        <Activity size={16} className="mt-0.5 shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </RevealOnScroll>
                    </section>

                    <section>
                        <RevealOnScroll>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Common Questions</h3>
                            <div className="grid gap-4">
                                {treatment.faqs.map((faq, i) => (
                                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/10 transition-colors">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {faq.q}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm ml-4.5 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </section>

                    {/* [NEW] CITATIONS & REFERENCES */}
                    {treatment.citations && (
                        <section className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                                <BookOpen size={14} /> Medical References
                            </h4>
                            <ul className="space-y-2">
                                {treatment.citations.map((cite, i) => (
                                    <li key={i} className="text-[10px] md:text-xs text-slate-500 italic">
                                        {cite}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                <div className="space-y-10">
                    <div className="sticky top-32">
                        <RevealOnScroll delay={100}>
                            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-blue-600 dark:to-blue-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>

                                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 relative z-10">
                                    <Star className="text-yellow-400 fill-yellow-400" size={20} /> Key Benefits
                                </h3>

                                <ul className="space-y-5 relative z-10">
                                    {treatment.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium opacity-90">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400 dark:text-blue-200 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 pt-8 border-t border-white/20 relative z-10">
                                    <button className="w-full py-4 bg-white text-slate-900 dark:text-blue-900 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
                                        <Calendar size={16} /> Book Visit
                                    </button>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}
