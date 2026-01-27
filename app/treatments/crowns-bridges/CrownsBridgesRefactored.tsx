'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Crown, Gem,
    Clock, FileText, Calculator, HelpCircle,
    Thermometer, Droplets, Layers
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

  .gold-border {
    border: 2px solid #d4af37;
    position: relative;
  }
`;

export default function CrownsBridgesRefactored() {
    const [activeTab, setActiveTab] = useState('truth');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
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

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 pt-20">
            <style>{customStyles}</style>

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20">
                                <Crown size={12} /> Zirconia Excellence v4.2
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                Diamond <br />
                                <span className="gradient-text">Precision.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                We mill teeth from solid Zirconia blocks using CAD/CAM technology. 5-micron accuracy for a seamless, natural fit.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                                    <Calendar size={18} /> Book Shade Analysis
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        Digital Lab <br /> 48-Hour Delivery
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Gem size={20} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover border-4 border-white dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/crowns-bridges-hyderabad.webp"
                                    alt="Monolithic Zirconia Crown"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-[3s]"
                                />
                            </div>
                            {/* Floating Glass Badge */}
                            <div className="absolute -bottom-6 -right-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-white/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white">15-Year Warranty</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">Biological Integration</div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* --- STICKY NAV --- */}
            <nav className="sticky-nav">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'truth', label: 'THE NOBLE TRUTH' },
                        { id: 'tech', label: 'DIGITAL MILLING' },
                        { id: 'matrix', label: 'MATERIAL MATRIX' },
                        { id: 'protocol', label: 'SAFETY CHECKS' },
                        { id: 'pricing', label: 'TRANSPARENT FEES' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeTab === tab.id
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* --- SECTION 1: THE NOBLE TRUTH --- */}
            <section id="truth" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                                    <AlertCircle size={12} /> The &quot;Noble Truth&quot;
                                </div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                                    &quot;Why is there a <br />
                                    <span className="text-blue-600 italic">Black Line</span> at my gum?&quot;
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    That black line is Metal. Old-school PFM crowns use a metal base that leaches oxides into your gums, causing recession and &quot;Grey Gum Disease.&quot;
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "The Gimmick: Cheap Caps", desc: "Local clinics offer ₹2000 crowns. These are high-metal alloys that often cause allergic reactions and tooth decay underneath.", icon: XCircle },
                                        { title: "The Reality: Biological Width", desc: "If a crown is fitted poorly, it invades the &apos;Biological Width,&apos; causing permanent bone loss around the tooth.", icon: Info },
                                        { title: "The Noble Way: Monolithic", desc: "We use 100% Metal-Free Bio-Zirconia. No oxides. No shadows. Just health.", icon: CheckCircle2 }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 ios-glass rounded-3xl border border-white/40">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg ${i === 2 ? 'bg-blue-600 shadow-blue-500/30' : 'bg-slate-400'}`}>
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="p-12 ios-glass rounded-[4rem] border-2 border-dashed border-blue-200 dark:border-blue-800 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-500/50">
                                        <Shield size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Dr. Dhivakaran&apos;s Refusal</h3>
                                    <p className="text-lg text-slate-500 italic">&quot;I refuse to place metal-based crowns on front teeth. Your biology deserves better than a cheap alloy.&quot;</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: TECH --- */}
            <section id="tech" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
                                5-Micron <br />
                                <span className="gradient-text">CAD/CAM Lab.</span>
                            </h2>
                            <p className="text-xl text-slate-500">Milled with robotic precision, not hand-layered by guesswork.</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                {[
                                    { title: "Intraoral 3D Scan", desc: "No messy clay. We scan your teeth with a 3D video camera for 0.1mm accuracy.", icon: Microscope },
                                    { title: "Digital Wax-Up", desc: "We design the anatomy of your new tooth on software, matching it to your original smile.", icon: Layers },
                                    { title: "5-Axis Robotic Milling", desc: "A precision robot carves your tooth from a single solid block of Zirconia.", icon: Zap },
                                    { title: "Crystal Glazing", desc: "Final heat treatment at 1500°C for diamond-like hardness.", icon: Sparkles }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-lg">{item.title}</h4>
                                            <p className="text-slate-500 dark:text-slate-400 max-w-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-slate-100 dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/digital-dentistry-hyderabad.webp"
                                    alt="Digital Milling Process"
                                    fill
                                    className="object-cover transition-transform duration-[5s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 ios-glass rounded-3xl">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 font-black">PRECISION METRICS</div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">Margin Gap: &lt;5 Microns <br /> (Seals out bacteria 100%)</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 3: MATRIX --- */}
            <section id="matrix" className="py-32 bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6">
                                Material <br />
                                <span className="text-blue-600">Decision Matrix.</span>
                            </h2>
                            <p className="text-lg text-slate-500">Choosing the right &quot;Helmet&quot; for your tooth.</p>
                        </div>

                        <div className="ios-glass overflow-hidden rounded-[3rem] border border-white/20 shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Material Type</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Strength (MPa)</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Best For</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Noble Choice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                                        {[
                                            { name: "PFM (Metal-Ceramic)", strength: "500", best: "Low Budget / Back Teeth", noble: "DISCOURAGED", rating: 2 },
                                            { name: "E.max (Glass Ceramic)", strength: "450", best: "Extreme Front Aesthetics", noble: "RECOMMENDED", rating: 5 },
                                            { name: "Monolithic Zirconia", strength: "1200+", best: "Chewing Teeth / Grinders", noble: "GOLD STANDARD", rating: 6 },
                                            { name: "BruxZir (Solid Z.)", strength: "1400", best: "Heavy Bruxism (Sleep Grinding)", noble: "SPECIALIST CHOICE", rating: 6 }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors">
                                                <td className="px-10 py-8">
                                                    <div className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{row.name}</div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className="font-bold text-blue-600">{row.strength} MPa</div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{row.best}</p>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className={`text-[10px] font-black px-4 py-2 rounded-full inline-block ${row.rating > 4 ? 'bg-blue-600 text-white' : 'bg-red-500 text-white'}`}>
                                                        {row.noble}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 4: PROTOCOL --- */}
            <section id="protocol" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative group p-4">
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800">
                                    <Image
                                        src="/assets/images/treatments/crowns-bridges-hyderabad.webp"
                                        alt="Margin Check under Microscope"
                                        width={800}
                                        height={800}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/20 rounded-full text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                                    <Stethoscope size={12} /> The Medical Protocol
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                                    We Don&apos;t Just &quot;Fit&quot; Crowns. <br />
                                    <span className="text-blue-600">We Integrate Them.</span>
                                </h2>
                                <div className="grid gap-4">
                                    {[
                                        { title: "Peripheral Seal", desc: "Using 7th Gen bonding agents to ensure zero micro-leakage.", icon: ShieldCheck },
                                        { title: "Bite Calibration", desc: "Checking occlusal forces with T-Scan (Digital Bite) technology.", icon: Activity },
                                        { title: "Gingival Management", desc: "Creating a 'Biological Seal' to keep bacteria out of the root.", icon: Droplets }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 ios-glass rounded-3xl border border-slate-100 dark:border-white/5 flex gap-6 items-center">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-tight text-sm">{item.title}</h4>
                                                <p className="text-xs text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 5: PRICING --- */}
            <section id="pricing" className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 mb-6 border border-white/10">
                                <Award size={12} /> Noble Standard Menu
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Transparent Fees.</h2>
                            <p className="text-slate-400 text-lg">Fees based on material density and warranty years.</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="ios-glass rounded-[4rem] overflow-hidden gold-border p-1 shadow-2xl bg-white/5 border-white/10">
                                <div className="bg-slate-950 rounded-[3.8rem] overflow-hidden">
                                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                                        {[
                                            { item: "Monolith Zirconia", tech: "Standard (5Y Warranty)", price: "₹8,500" },
                                            { item: "BruxZir Solid Z.", tech: "Premium (15Y Warranty)", price: "₹12,500" },
                                            { item: "E.max Glass Ceramic", tech: "Aesthetic (Front Teeth)", price: "₹14,500" },
                                            { item: "3-Unit Zirconia Bridge", tech: "Fixed Teeth Replacement", price: "₹25,000+" },
                                            { item: "CAD/CAM Temporary", tech: "Instant Smile (Trial)", price: "₹1,500" }
                                        ].map((p, i) => (
                                            <div key={i} className="p-10 text-center hover:bg-white/5 transition-all group">
                                                <div className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-2 group-hover:text-blue-400 transition-colors uppercase">{p.tech}</div>
                                                <div className="font-black text-white uppercase tracking-tighter mb-2 text-xl">{p.item}</div>
                                                <div className="text-3xl font-black text-blue-500">{p.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="mt-8 text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                * Prices include Digital Scans & Shade Selection. Zero hidden lab charges.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 6: FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Common Concerns</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "How long does a Zirconia crown last?",
                                    a: "Clinically, 15-20 years. Biologically, it can last a lifetime if you maintain your gum health. We provide a 15-year warranty against chipping or breakage."
                                },
                                {
                                    q: "Is it better than a Bridge?",
                                    a: "A crown 'fixes' a tooth; a bridge 'replaces' a missing one. However, if you have a missing tooth, we strongly recommend a Dental Implant instead of a bridge to preserve the adjacent healthy teeth."
                                },
                                {
                                    q: "Why is the price higher than my neighborhood clinic?",
                                    a: "The difference is CAD/CAM Milling vs Hand-poured Metal. Neighborhood clinics often use PFM (Metal) which costs less but harms your gums. We use exclusively Monolithic Zirconia for medical-grade safety."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 ios-card-hover group">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex gap-4">
                                        <span className="text-blue-600 font-black italic">Q.</span> {faq.q}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed pl-8 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-white">
                    <RevealOnScroll>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
                            Precision Fit. <br />
                            <span className="text-blue-500 italic">Lifetime Smile.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Book Dr. Dhivakaran
                            </button>
                            <a href="tel:+918610425342" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20">
                                Clinic Direct Line
                            </a>
                        </div>
                        <p className="mt-12 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
                            Citations: GPT-9 Prosthodontic Glossary | J. Prosthet. Dent (2023)
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
