'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Bone, Gauge,
    Clock, FileText, Calculator, HelpCircle,
    Thermometer, Scaling
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

  .gold-border {
    border: 2px solid #d4af37;
    position: relative;
  }
  .gold-border::after {
    content: '★ NALLAGANDLA SURGICAL MENU ★';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: #d4af37;
    color: white;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    white-space: nowrap;
  }
`;

export default function ExtractionRefactored() {
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

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 pt-20">
            <style>{customStyles}</style>

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[92vh] flex items-center overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                <Shield size={12} /> Bone-Preserving Protocol v4.2
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                Atraumatic <br />
                                <span className="gradient-text">Extraction.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                As the **Best Dentist in Nallagandla**, **Dr. Dhivakaran** leads our surgical team at **Noble Dental Care Hyderabad**, located **Near Aparna Sarovar / Citizens Hospital**. We specialize in **Atraumatic Extraction Hyderabad** and **Tooth Extraction Treatment in Nallagandla** using advanced **Socket Preservation Nallagandla** protocols and **PRF Therapy in Dentistry** for immediate healing.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="ios-btn px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2">
                                    <Calendar size={18} /> Book Painless Consultation
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        94% Less <br /> Post-Op Swelling
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Zap size={20} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover">
                                <Image
                                    src="/assets/images/treatments/extraction-hyderabad.webp"
                                    alt="Atraumatic Tooth Extraction"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0"
                                />
                                <div className="absolute top-8 left-8 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl">
                                    MICROSURGICAL
                                </div>
                            </div>
                            {/* Floating Glass Badge */}
                            <div className="absolute -bottom-6 -right-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-white/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                        <Bone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white">Socket Recovery</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">Zero Bone Destruction</div>
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
                        { id: 'etiology', label: 'INDICATIONS' },
                        { id: 'tech', label: 'PHYSICS FORCEPS' },
                        { id: 'safety', label: 'MEDICAL CHECK' },
                        { id: 'matrix', label: 'SAVE OR EXTRACT' },
                        { id: 'pricing', label: 'PRICING' }
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

            {/* --- SECTION 1: THE NOBLE TRUTH --- */}
            <section id="truth" className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="ios-glass p-12 rounded-[3.5rem] bg-blue-50/50 dark:bg-blue-900/10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-800/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6">
                                    <Info size={12} /> Surgical Philosophy
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
                                    &quot;I am scared of the pain and the pressure.&quot;
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium italic">
                                    &quot;Most patients fear the &apos;pulling&apos; sensation. As the **Best Dentist in Nallagandla**, I use Physics Forceps and **PRF Therapy in Dentistry** to ensure a **Painless Tooth Removal** experience. At **Noble Dental Care Hyderabad**, our focus is **Socket Preservation Nallagandla**—ensuring the bone remains intact for future implants using surgical **Bone Grafts after Extraction**.&quot; — **Dr. Dhivakaran**
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Old Way: Pliers", desc: "Mechanical 'yanking' that often breaks the surrounding bone socket." },
                                        { title: "Noble Way: Physics", desc: "Class 1 Lever mechanism (like a bottle opener) to sever ligaments without force." },
                                        { title: "Socket Preservation", desc: "Utilizing **Bone Grafts after Extraction** and PRF to keep socket walls 100% intact." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-5 bg-white/40 dark:bg-white/5 rounded-3xl border border-white/20">
                                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-wide">{item.title}</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                                    Pre-Implant Surgery: <br />
                                    <span className="text-blue-600 italic">Save the bone. Protect the face.</span>
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-lg">
                                    A fast extraction today usually means an expensive **Bone Graft** tomorrow. At **Noble Dental Care Hyderabad**, located **Near Aparna Sarovar / Citizens Hospital**, we take the time to perform **Atraumatic Extraction Hyderabad**, ensuring your facial structure doesn&apos;t shrink over time.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 text-center">
                                        <div className="text-2xl font-black text-blue-600 mb-1">94%</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">Less Swelling</div>
                                    </div>
                                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 text-center">
                                        <div className="text-2xl font-black text-blue-600 mb-1">50%</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">Faster Healing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: ETIOLOGY --- */}
            <section id="etiology" className="py-32 bg-slate-50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 mb-6">
                                <AlertCircle size={12} /> Clinical Indications
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.9]">
                                When Removal <br />
                                <span className="gradient-text">is Necessary.</span>
                            </h2>
                            <p className="text-lg text-slate-500">We always try to save the tooth first. Extraction is our last resort.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Grossly Decayed", desc: "Cavity reached the root fork (Furcation); cannot be sealed by RCT.", icon: Scaling },
                                { title: "Vertical Fracture", desc: "Tooth split down the middle (common in patients who grind/bruxis).", icon: Activity },
                                { title: "Impacted Wisdom", desc: "Tooth stuck in bone, causing recurrent infection or pushing others.", icon: Zap },
                                { title: "Orthodontic", desc: "Creating space for Braces or Aligners when the jaw is crowded.", icon: Ruler }
                            ].map((item, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] ios-card-hover group">
                                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 3: TECH --- */}
            <section id="tech" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/20 rounded-full text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                                    <Microscope size={12} /> Biology over Brute Force
                                </div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                                    The Physics Forceps <br />
                                    <span className="gradient-text">Protocol.</span>
                                </h2>

                                <div className="space-y-6">
                                    {[
                                        { title: "1. Ouchless injection", desc: "Computer-controlled LA or pre-numbing gel. Feel pressure, not pain." },
                                        { title: "2. Ligament Severing", desc: "Micro-blade cuts tiny fibers connecting tooth to gum." },
                                        { title: "3. Luxation (The Glide)", desc: "Physics Forceps apply constant gentle pressure for 60 seconds." },
                                        { title: "4. PRF Therapy & Grafting", desc: "Packing site with **Bone Grafts after Extraction** and **PRF Therapy in Dentistry** to prevent shrinkage." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center font-black text-[10px] text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{step.title}</h4>
                                                <p className="text-xs text-slate-500">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="ios-glass p-1 rounded-[3.5rem] shadow-2xl overflow-hidden aspect-square relative group">
                                    <Image
                                        src="/assets/images/treatments/wisdom-tooth-hyderabad.webp"
                                        alt="Physics Forceps Technology"
                                        fill
                                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent flex items-end p-12">
                                        <div>
                                            <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">ULTRASONIC PIEZOSURGERY</div>
                                            <h4 className="text-2xl font-black text-white leading-tight">Vibrating bone away <br /> instead of hammering.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 4: SAFETY FIRST --- */}
            <section id="safety" className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl font-black tracking-tighter mb-8 leading-tight">
                                    Safety First: <br />
                                    <span className="text-blue-400">The Medical Check.</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-12">
                                    Extraction is minor surgery. For Nallagandla&apos;s high-stress environment, we treat it with medical seriousness.
                                </p>
                                <div className="grid gap-4">
                                    {[
                                        { title: "Blood Pressure (BP)", desc: "High BP + Stress = Bleeding risks. We monitor you throughout.", icon: Gauge },
                                        { title: "Blood Sugar (RBS)", desc: "Diabetic safety (<200 mg/dL) to ensure rapid infection-free healing.", icon: Thermometer },
                                        { title: "Blood Thinners", desc: "Coordinating with your Cardiologist if you are on Aspirin.", icon: Pill }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex gap-6 items-center">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white uppercase tracking-tight text-sm">{item.title}</h4>
                                                <p className="text-xs text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-10 ios-glass bg-white/5 border-white/10 rounded-[3rem] text-center">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/20">
                                    <ShieldCheck size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-black mb-4">Hospital-Grade Safety</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Chief Medical Director **Dr. Dhivakaran** ensures every surgical procedure at **Noble Dental Care Hyderabad** follows strict international sterilization and pre-op vitals protocols.
                                </p>
                                <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
                                    Request Safety Protocol PDF
                                </button>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 5: MATRIX --- */}
            <section id="matrix" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
                                Save vs. Extract?
                            </h2>
                            <p className="text-lg text-slate-500 font-medium italic">Honest advice from Dr. Dhivakaran.</p>
                        </div>

                        <div className="ios-glass overflow-hidden rounded-[3rem] border border-white/20 shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Condition</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">Recommendation</th>
                                            <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest">The &quot;Why&quot;</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                                        {[
                                            { cond: "Deep Decay (Restorable)", proto: "Root Canal (Save)", why: "Natural teeth are always superior to implants.", safe: false },
                                            { cond: "Split Root (Fracture)", proto: "Extraction + Implant", why: "A bacterial trap that cannot be physically fixed.", safe: true },
                                            { cond: "Wisdom Tooth (Impacted)", proto: "Surgical Removal", why: "Recurrent infection affects bone. **Wisdom Tooth Removal Cost** depends on impaction type.", safe: true },
                                            { cond: "Socket Shrinkage Risk", proto: "**Socket Preservation Nallagandla**", why: "Using PRF to ensure 100% bone density for future implants.", safe: false }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors">
                                                <td className="px-10 py-8">
                                                    <div className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{row.cond}</div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className={`flex items-center gap-3 font-bold ${row.safe ? 'text-red-500' : 'text-blue-600'}`}>
                                                        {row.safe ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />} {row.proto}
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

            {/* --- SECTION 6: PRICING --- */}
            <section id="pricing" className="py-32 bg-slate-50 dark:bg-[#0b101b] overflow-hidden border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-6 border border-amber-100 dark:border-amber-500/20">
                                <Award size={12} /> Market Transparency
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Nallagandla Pricing.</h2>
                            <p className="text-slate-500 text-lg">Fees based on microsurgical complexity, not just &apos;pulling&apos; time.</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="ios-glass rounded-[4rem] overflow-hidden gold-border p-1 shadow-2xl">
                                <div className="bg-white dark:bg-[#0b101b] rounded-[3.8rem] overflow-hidden">
                                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-white/5">
                                        {[
                                            { item: "Simple Extraction", tech: "Standard (Loose Tooth)", price: "₹1,500 - 2.5k" },
                                            { item: "Atraumatic Removal", tech: "Physics Forceps (Bone Save)", price: "₹3,000 - 4.5k" },
                                            { item: "Surgical Extraction", tech: "Stuck Roots / Bone Cutting", price: "₹4,500 - 6k" },
                                            { item: "Wisdom Tooth Surgery", tech: "Impaction (Sleeping Tooth)", price: "₹6,000 - 12.5k" },
                                            { item: "Socket Preservation", tech: "**Bone Grafts after Extraction**", price: "₹5,000 (Add-on)" }
                                        ].map((p, i) => (
                                            <div key={i} className="p-8 text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
                                                <div className="text-[8px] uppercase font-black text-slate-400 tracking-widest mb-1 group-hover:text-blue-500 transition-colors">{p.tech}</div>
                                                <div className="font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">{p.item}</div>
                                                <div className="text-2xl font-black text-blue-600">{p.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- RECOVERY FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Recovery & Safety FAQ</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is **Socket Preservation Nallagandla**?",
                                    a: "It is a procedure where **Bone Grafts after Extraction** and **PRF Therapy in Dentistry** are used to fill the socket immediately. This prevents the jawbone from shrinking, which is critical if you plan to get a Dental Implant later."
                                },
                                {
                                    q: "What is the **Wisdom Tooth Removal Cost** in Hyderabad?",
                                    a: "The cost ranges from ₹6,000 to ₹12,500 depending on the depth and position of the tooth. We use Piezosurgery for a safer and faster recovery."
                                },
                                {
                                    q: "What is &apos;Dry Socket&apos;?",
                                    a: "A painful condition where the blood clot dislodges. Prevention: Do NOT spit, use a straw, or smoke for 24 hours. At **Noble Dental Care Hyderabad**, we reduce this risk using PRF."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 ios-card-hover">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex gap-3">
                                        <span className="text-blue-600 font-black italic">Q.</span> {faq.q}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed pl-7 text-sm">{faq.a}</p>
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
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
                            Painless Removal. <br />
                            <span className="text-blue-500">Faster Healing.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="ios-btn px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl">
                                Book Dr. Dhivakaran
                            </button>
                            <a href="tel:+918610425342" className="ios-btn px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm">
                                Emergency Line
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
