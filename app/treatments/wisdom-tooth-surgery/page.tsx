'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Bone, Gauge,
    Clock, FileText, Calculator, HelpCircle,
    Thermometer, Scaling, Check, X
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const customStyles = `
  .ios-glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  }
  .dark .ios-glass {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .ios-card-hover {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ios-card-hover:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
  }

  .ios-btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ios-btn:active {
    transform: scale(0.95);
  }

  .sticky-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.82);
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .dark .sticky-nav {
    background: rgba(2, 6, 23, 0.82);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #2563eb 0%, #0d9488 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export default function WisdomToothPage() {
    const [activeSection, setActiveSection] = useState('truth');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const medicalSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Surgical Wisdom Tooth Extraction",
        "procedureType": "Surgical",
        "status": "Safe",
        "bodyLocation": "Mouth",
        "offers": {
            "@type": "Offer",
            "price": "6000",
            "priceCurrency": "INR",
            "description": "Starting price for surgical removal"
        },
        "performer": {
            "@type": "Dentist",
            "name": "Dr. Dhivakaran",
            "url": "https://nobledentalnallagandla.in/team/dr-dhivakaran"
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 pt-20">
            <style>{customStyles}</style>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
            />

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                <Shield size={12} /> Oral Maxillofacial Surgery
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                Wisdom <br />
                                <span className="gradient-text">Surgery.</span>
                            </h1>

                            <div className="flex items-center gap-4 py-4">
                                <Link href="/team/dr-dhivakaran" className="ios-glass ios-btn flex items-center gap-3 p-2 pr-6 rounded-full group hover:bg-white/50 dark:hover:bg-white/10">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                                        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Dr. Dhivakaran" fill className="object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase text-blue-600 dark:text-blue-400 font-bold tracking-wider">Reviewed By</div>
                                        <div className="text-xs font-bold text-slate-900 dark:text-white">Dr. Dhivakaran, MDS (Maxillofacial)</div>
                                    </div>
                                </Link>
                            </div>

                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                <strong>Wisdom Tooth Pain?</strong> Don&apos;t ignore it. Impacted teeth can damage neighboring molars or cause cyst formation. We provide <strong>A-Traumatic Piezosurgery</strong>&mdash;the most gentle method known to dentistry. We use <strong>3D CBCT Scans</strong> to map nerves and <strong>Physics Forceps</strong> for a procedure that respects your jawbone.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="ios-btn px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2">
                                    <Calendar size={18} /> Schedule Assessment
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        Recovery <br /> Time
                                    </div>
                                    <div className="text-2xl font-black text-blue-600 dark:text-white">
                                        2-3 <span className="text-xs font-bold text-slate-400">Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src="/assets/images/treatments/wisdom-tooth-hyderabad.webp"
                                    alt="Impacted Wisdom Tooth X-Ray"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Clinical Case</p>
                                        <h3 className="text-2xl font-bold text-white">Horizontal Impaction</h3>
                                        <p className="text-slate-300 text-sm mt-2">Surgical removal preventing damage to adjacent 2nd molar.</p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <nav className="sticky-nav">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'overview', label: 'OVERVIEW' },
                        { id: 'truth', label: 'THE NOBLE TRUTH' },
                        { id: 'decision', label: 'DECISION MATRIX' },
                        { id: 'tech', label: 'TECHNOLOGY' },
                        { id: 'pricing', label: 'PRICING' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeSection === item.id
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            <section id="truth" className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The &quot;Keep It&quot; vs &quot;Remove It&quot; Dilemma</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Many clinics recommend removing wisdom teeth just for profit. <br className="hidden md:block" />
                                At Noble Dental, <strong>we only operate when medically necessary.</strong>
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8">
                        <RevealOnScroll>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-green-100 dark:border-green-900/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CheckCircle2 size={120} className="text-green-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 font-black text-xl">
                                        <Check size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">When to KEEP It</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Fully erupted and functional (chewing)",
                                            "Painless and gum tissue is healthy",
                                            "Easy to clean/brush without gagging",
                                            "Opposing tooth is present for biting"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-red-100 dark:border-red-900/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <AlertCircle size={120} className="text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 font-black text-xl">
                                        <X size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">When to REMOVE It</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Impacted (Stuck partially/fully in bone)",
                                            "Pericoronitis (Recurrent gum swelling)",
                                            "Damaging adjacent healthy molar",
                                            "Cyst formation around the tooth",
                                            "Deep cavity that cannot be filled"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <section id="tech" className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">Advanced Protocol</div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                                Fear the Pain? <br />
                                <span className="text-slate-300 dark:text-slate-700">Don&apos;t be.</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 shrink-0">
                                        <Activity size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Physics Forceps™ (No Pulling)</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            Unlike traditional tools that &quot;pull&quot; the tooth, we use physics (leverage) to gently lift the tooth.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">3D CBCT Planning</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            We map the exact position of the mandibular nerve before we touch the patient.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] bg-slate-100 dark:bg-slate-800 overflow-hidden relative shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
                                <Image
                                    src="/assets/images/treatments/extraction-hyderabad.webp"
                                    alt="Advanced Surgical Instruments"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-24 bg-slate-50 dark:bg-[#0B1120]">
                <div className="max-w-5xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Transparent Pricing</h2>
                            <p className="text-slate-600 dark:text-slate-400">Strict medical pricing. No hidden costs.</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Non-Surgical</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Simple Eruption</h3>
                            <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-6">₹3,500</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Check size={14} className="text-green-500" /> Basic Extraction</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-slate-900 text-white rounded-3xl border border-blue-500 shadow-2xl relative">
                            <h3 className="text-xl font-bold text-white mb-4">Impacted Tooth</h3>
                            <div className="text-3xl font-black text-white mb-6">₹6k - ₹9k</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-white flex items-center gap-2"><Check size={14} className="text-blue-400" /> Surgical Protocol</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Complex</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">High Risk</h3>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-6">₹10,000+</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"><Check size={14} className="text-green-500" /> Nerve Protection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is wisdom tooth removal painful?", a: "With modern anesthesia and leverage-based techniques, the procedure itself is painless. Post-op discomfort typically lasts 2-3 days." },
                            { q: "How long is the recovery?", a: "Swelling peaks at 48 hours and subsides by day 4. You can usually return to work in 2-3 days." },
                            { q: "What is a Dry Socket?", a: "It&apos;s a complication we aim to eliminate using PRF therapy and strict surgical protocols." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                                    <HelpCircle size={20} className="text-blue-500 shrink-0 mt-0.5" />
                                    {item.q}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 pl-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
