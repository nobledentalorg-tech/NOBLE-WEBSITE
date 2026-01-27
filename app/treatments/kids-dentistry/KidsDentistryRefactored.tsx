'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Baby, Smile,
    Clock, FileText, Calculator, HelpCircle,
    Thermometer, Droplets, HeartPulse
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

export default function KidsDentistryRefactored() {
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
                                <Sparkles size={12} /> Little Smiles Program
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase italic">
                                Magic <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Smiles.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                Welcome to the best **Kids Dentistry Nallagandla** offers at **Noble Dental Care Hyderabad**. Located **Near Aparna Sarovar / Citizens Hospital**, **Dr. Dhivakaran** specializes as a **Painless Kids Dentist** for your child&apos;s developing smile.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                                    <Calendar size={18} /> Book a &quot;Happy Visit&quot;
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        Zero Anxiety <br /> Nitrous Certified
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Smile size={20} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover border-4 border-white dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/kids-hero.png"
                                    alt="Dr. Dhivakaran High-Five with a smiling child"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating Glass Badge */}
                            <div className="absolute -bottom-6 -right-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-white/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white">AAPD Standards</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">International protocol</div>
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
                        { id: 'sedation', label: 'HAPPY AIR' },
                        { id: 'treatments', label: 'NO-DRILL TECH' },
                        { id: 'matrix', label: 'DECISION MATRIX' },
                        { id: 'pricing', label: 'KIDS MENU' },
                        { id: 'faq', label: 'PARENT FAQ' }
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
            <section id="truth" className="py-32 relative overflow-hidden bg-blue-50/30 dark:bg-blue-900/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-800/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                    <Info size={12} /> The &quot;Noble Truth&quot;
                                </div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none uppercase italic">
                                    Pediatric <br />
                                    <span className="text-blue-600 italic">Dentist Nallagandla.</span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    At our **Dental Clinic in Nallagandla**, we believe baby teeth are the &quot;Space Savers&quot;. Whether it&apos;s a **Milk Teeth Filling** or preventive care, **Dr. Dhivakaran** ensures your child is handled with the utmost precision.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Space Loss", desc: "If a baby molar is lost too early, surrounding teeth collapse into the gap.", icon: ArrowLeft },
                                        { title: "Crooked Adult Teeth", desc: "Permanent teeth have no room to grow, leading to expensive braces (₹50k+) later.", icon: Ruler },
                                        { title: "Health Risk", desc: "Infection from a baby tooth can spread to the permanent tooth bud underneath.", icon: HeartPulse }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 ios-glass rounded-3xl border border-white/40">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
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
                                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce shadow-blue-500/50">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Philosophy</h3>
                                    <p className="text-lg text-slate-500 italic">&quot;We save the baby tooth to save the adult smile.&quot;</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: HAPPY AIR --- */}
            <section id="sedation" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase italic">
                                Painless <br />
                                <span className="gradient-text">Kids Dentist.</span>
                            </h2>
                            <p className="text-xl text-slate-500">As the top-rated **Pediatric Dentist Nallagandla** parents trust, we use the &quot;Happy Air&quot; protocol for zero-anxiety visits.</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-slate-100 dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/happy-air.png"
                                    alt="Happy Air Nitrous Oxide Mask"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/0 transition-all duration-500">
                                    <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 animate-pulse">
                                        <Play fill="currentColor" size={32} className="ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 p-4 ios-glass rounded-2xl">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">LIVE DEMO</div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">Watch how &quot;Happy Air&quot; relaxes your child in 2 minutes.</div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="p-8 ios-glass rounded-[2.5rem] bg-teal-50/50 dark:bg-teal-900/10">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">What is &quot;Happy Air&quot;?</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                                        It is Nitrous Oxide (Laughing Gas). It is a sweet-smelling air that makes your child feel floaty, warm, and happy within 2 minutes.
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    {[
                                        { title: "100% Safety", desc: "It is the safest sedative in the world. Used internationally for decades.", icon: ShieldCheck },
                                        { title: "Instant Recovery", desc: "It wears off the second we take the mask off. They can go to school immediately.", icon: Clock },
                                        { title: "Cartoon Distraction", desc: "Fillings and cleanings while they watch their favorite cartoons, completely relaxed.", icon: Play }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">{item.title}</h4>
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

            {/* --- SECTION 3: TREATMENTS --- */}
            <section id="treatments" className="py-32 bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6">
                                Minimal Intervention. <br />
                                <span className="text-blue-600">Zero Drilling.</span>
                            </h2>
                            <p className="text-lg text-slate-500">We use technology to avoid the drill whenever possible.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-12 ios-glass rounded-[3.5rem] border border-white/40 hover:scale-[1.02] transition-all duration-500 group">
                                <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-xl">
                                    <Image
                                        src="/assets/images/treatments/sdf-tech.png"
                                        alt="SDF Magic Liquid treatment"
                                        fill
                                        className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute top-4 right-4 bg-teal-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg">
                                        BEST FOR TODDLERS
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Fluoride Treatment & SDF</h3>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600" /> **Fluoride Treatment** Nallagandla</p>
                                    <p className="text-sm">Our **Kids Dentistry Nallagandla** specialists apply a drop of SDF to stop decay instantly. It is the gold standard for **Pediatric Dentist Nallagandla** cases.</p>
                                    <div className="grid grid-cols-2 gap-4 pt-4 text-[10px] font-black uppercase tracking-widest">
                                        <div className="flex items-center gap-2 text-blue-600"><CheckCircle2 size={16} /> Pain Level: Zero</div>
                                        <div className="flex items-center gap-2 text-blue-600"><CheckCircle2 size={16} /> No Needle. No Drill.</div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-4 leading-relaxed">Note: It turns the cavity spot black (a sign it is working), but saves the tooth from extraction.</p>
                                </div>
                            </div>

                            <div className="p-12 ios-glass rounded-[3.5rem] border border-white/40 hover:scale-[1.02] transition-all duration-500 group">
                                <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-xl">
                                    <Image
                                        src="/assets/images/treatments/pediatric-pulp-hyderabad.webp"
                                        alt="Bioceramic Pulpectomy"
                                        fill
                                        className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg">
                                        DEEP CAVITY CARE
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Option B: Bioceramic Pulpectomy</h3>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600" /> Tech: Metapex Resorbable Paste</p>
                                    <p className="text-sm">For deep cavities with night pain. We remove infection and fill roots with paste that disappears naturally with the baby tooth.</p>
                                    <p className="text-xs italic bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">Combined with Zirconia (White) or Stainless Steel crowns for 100% protection.</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 4: DECISION MATRIX --- */}
            <section id="matrix" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
                                The Decision Matrix.
                            </h2>
                            <p className="text-lg text-slate-500">How Dr. Dhivakaran decides the best protocol for your child.</p>
                        </div>

                        <div className="ios-glass overflow-hidden rounded-[3rem] border border-white/20 shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Condition</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Our Protocol</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Why?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                                        {[
                                            { cond: "Small Cavity (No Pain)", proto: "SDF Liquid / Sealant", why: "Stop it without drilling. Low cost, high safety.", check: true },
                                            { cond: "Deep Cavity (Night Pain)", proto: "Pulpectomy (RCT)", why: "Save the tooth to hold space for the adult tooth.", check: true },
                                            { cond: "Loose Tooth + Pain", proto: "Gentle Extraction", why: "If tooth is already shaking, we remove it to relieve pain.", check: false },
                                            { cond: "Early Loss of Molar", proto: "Space Maintainer", why: "A small metal ring to keep the gap open for future teeth.", check: true }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors">
                                                <td className="px-10 py-8">
                                                    <div className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{row.cond}</div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className={`flex items-center gap-3 font-bold ${row.check ? 'text-blue-600' : 'text-red-500'}`}>
                                                        {row.check ? <CheckCircle2 size={18} /> : <XCircle size={18} />} {row.proto}
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{row.why}</p>
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

            {/* --- SECTION 5: PRICING --- */}
            <section id="pricing" className="py-32 bg-slate-50 dark:bg-[#0b101b] overflow-hidden border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative">
                    {/* Decorative Pattern */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                        <div className="text-[200px] font-black text-blue-600 leading-none select-none rotate-[-15deg] whitespace-nowrap">KIDS MENU KIDS MENU KIDS MENU</div>
                    </div>

                    <RevealOnScroll>
                        <div className="text-center mb-20 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-6 border border-amber-100 dark:border-amber-500/20 shadow-sm">
                                <Award size={12} /> Nallagandla Kids Menu
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6 uppercase italic">
                                Kids Dentistry <br />
                                <span className="gradient-text">Nallagandla Fees.</span>
                            </h2>
                            <p className="text-slate-500 text-lg max-w-lg mx-auto">Providing the most affordable **Milk Teeth Filling** and preventive care in Nallagandla.</p>
                        </div>

                        <div className="max-w-4xl mx-auto relative z-10">
                            <div className="ios-glass rounded-[4rem] overflow-hidden gold-border p-1 shadow-2xl">
                                <div className="bg-white dark:bg-[#0b101b] rounded-[3.8rem] overflow-hidden">
                                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-white/5">
                                        {[
                                            { item: "Kids Consultation", tech: '"Tell-Show-Do"', price: "₹500" },
                                            { item: "Fluoride Treatment", tech: "Whole Mouth Protection", price: "₹1,500" },
                                            { item: "Pit & Fissure Sealant", tech: "No-Drill Cavity Shield", price: "₹1,500 / tooth" },
                                            { item: "Milk Teeth Filling", tech: "Composite / Glass Ionomer", price: "₹1,500 / tooth" },
                                            { item: "Habit Breaking Appliance", tech: "Correction Therapy", price: "₹4,500 - 8.5k" },
                                            { item: "Happy Air (Sedation)", tech: "Nitrous Oxide (Optional)", price: "₹2,500 / session" }
                                        ].map((p, i) => (
                                            <div key={i} className="p-10 text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
                                                <div className="text-[8px] uppercase font-black text-slate-400 tracking-widest mb-2 group-hover:text-blue-500 transition-colors">{p.tech}</div>
                                                <div className="font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2 text-lg leading-none">{p.item}</div>
                                                <div className="text-3xl font-black text-blue-600">{p.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 6: FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">Anxiety Relief (FAQ)</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Is 'Happy Air' safe for a 3-year-old?",
                                    a: "Yes. It is the gold standard for **Kids Dentistry Nallagandla** safety. The child remains fully awake and can talk to us. It just removes the fear instantly."
                                },
                                {
                                    q: "Do you allow parents inside the room?",
                                    a: "Yes! At **Noble Dental Care Hyderabad**, we encourage parents to stay. We are the choice **Pediatric Dentist Nallagandla** trusts for family-centered care."
                                },
                                {
                                    q: "My child has a thumb-sucking habit.",
                                    a: "We offer **Habit Breaking Appliance** therapy. Catching this at age 4-6 can prevent the need for braces at age 12. Consultation with the **Best Dentist in Nallagandla** is recommended."
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
                            Make Dentistry <br />
                            <span className="text-blue-500 italic">Fun Again.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Book Pediatric Consult
                            </button>
                            <a href="tel:+918610425342" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20">
                                Call Direct Line
                            </a>
                        </div>
                        <p className="mt-12 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
                            📍 Noble Dental Nallagandla (Opp. Citizens Hospital)
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
