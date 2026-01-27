'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Scan, Shield, Zap, Activity, Smile, Layers, Cpu,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    BrainCircuit, Microscope, Info, CheckCircle2,
    XCircle, TrendingDown, DollarSign, Calendar,
    Headphones, MousePointer2, Sparkles, AlertCircle,
    Stethoscope, Award
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
    background: linear-gradient(135deg, #2563eb 0%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function InvisalignRefactored() {
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
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-600 pt-20">
            <style>{customStyles}</style>

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[92vh] flex items-center overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                <Cpu size={12} /> Orthodontic Engineering v4.2
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase italic">
                                Clear <br />
                                <span className="gradient-text">Aligners.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                Experience the best **Teeth Straightening** at **Noble Dental Care Hyderabad**. Located **Near Aparna Sarovar / Citizens Hospital**, our team led by **Dr. Dhivakaran** & **Dr. Deepak** engineers your perfect smile using advanced **Invisible Braces Hyderabad** protocols.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="ios-btn px-8 py-4 bg-slate-900 dark:bg-blue-600 hover:scale-105 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2">
                                    <Scan size={18} /> Book Free 3D Scan
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 overflow-hidden">
                                                <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" width={32} height={32} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        450+ Smiles <br /> Engineered
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group perspective-1000">
                        <RevealOnScroll>
                            <div className="relative z-10 transition-transform duration-700 hover:rotate-y-12">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-4 border border-white/20 overflow-hidden shadow-2xl">
                                    <Image
                                        src="/assets/images/treatments/aligner-case.png"
                                        alt="Invisalign Complex Case"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto object-contain hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-8 right-8 bg-blue-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl">
                                        COMPLEX CASE
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
                        { id: 'tmj', label: 'BITE SCIENCE' },
                        { id: 'safety', label: 'ROOT SAFETY' },
                        { id: 'tech', label: 'ITERO TECH' },
                        { id: 'pricing', label: 'PRICING' },
                        { id: 'faq', label: 'PATIENT Q&A' }
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
                    <div className="ml-auto hidden md:block">
                        <button className="ios-btn px-5 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                            Book Scan
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- SECTION 1: THE NOBLE TRUTH --- */}
            <section id="truth" className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/20 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 mb-6 border border-red-100 dark:border-red-500/10">
                                    <Shield size={12} /> Anti-Gimmick Protocol
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight text-balance uppercase italic">
                                    Engineering <br />
                                    <span className="text-blue-600">Invisible Braces Hyderabad.</span>
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    Why waste money on brand names when the same clinical results can be engineered at our **Dental Clinic in Nallagandla**? We provide **Deepak Clear™ Aligners**—manufactured and processed by the **Best Orthodontist in Nallagandla**, **Dr. Deepak**, to global standards under the mentorship of **Dr. Dhivakaran**.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "The Brand Mark-up",
                                            desc: "Big brands spend 40% of your money on marketing. We spend it on biology.",
                                            icon: TrendingDown,
                                            color: "text-slate-500 bg-slate-100 dark:bg-white/5"
                                        },
                                        {
                                            title: "Dr. Deepak's Protocol",
                                            desc: "Dr. Deepak personally processes and quality-checks every tray to international medical standards.",
                                            icon: Stethoscope,
                                            color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 ios-glass rounded-[2rem] ios-card-hover">
                                            <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${item.color}`}>
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-50"></div>
                                <div className="relative p-12 ios-glass rounded-[3rem] border border-white/20 shadow-2xl ios-card-hover">
                                    <div className="space-y-6 text-center">
                                        <Award className="mx-auto text-blue-500" size={48} />
                                        <div className="text-2xl font-black text-slate-900 dark:text-white">International Standards</div>
                                        <p className="text-slate-500 text-sm">Our aligners meet the same durability and transparency benchmarks as the world&apos;s leading brands.</p>
                                        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
                                        <p className="italic text-slate-400 text-sm">&quot;The tool is local, the precision is global.&quot; <br /> — Dr. Deepak</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: TMJ / BITE SCIENCE --- */}
            <section id="tmj" className="py-32 bg-slate-100 dark:bg-[#0b101b] border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.9] uppercase italic">
                                Teeth Straightening <br />
                                <span className="gradient-text">Bite Science.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "TMJ Protection",
                                    desc: "We align your bite to release muscle tension, reducing stress-related migraines.",
                                    icon: Activity,
                                    label: "MEDICAL FOCUS"
                                },
                                {
                                    title: "Biological Stability",
                                    desc: "Teeth moved into the 'Safe Zone' stay straight forever, preventing future relapse.",
                                    icon: Layers,
                                    label: "PREDETERMINED RESULTS"
                                },
                                {
                                    title: "Periodontal Guard",
                                    desc: "Aligned teeth are easier to clean, preventing silent gum disease and bone loss.",
                                    icon: ShieldCheck,
                                    label: "LIFETIME HEALTH"
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white dark:bg-[#151b2b] rounded-[2.5rem] border border-slate-200 dark:border-white/5 ios-card-hover group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="text-[10px] font-black text-blue-500 tracking-widest mb-2 uppercase">{item.label}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 relative rounded-[3rem] overflow-hidden group shadow-2xl">
                            <Image
                                src="/assets/images/treatments/bite-correction.png"
                                alt="Bite Correction Mapping"
                                width={1200}
                                height={400}
                                className="w-full h-80 object-cover brightness-95 group-hover:scale-105 transition-transform duration-[2000ms]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white ring-8 ring-white/10">
                                        <BrainCircuit size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-white">Engineering Occlusion</h4>
                                        <p className="text-slate-300 text-sm">We synchronize your mechanical bite with your biological jaw joint.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 3: ROOT SAFETY PROTOCOL --- */}
            <section id="safety" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3">
                                <div className="sticky top-32 space-y-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/10">
                                        <Microscope size={12} /> Scientific Rigor
                                    </div>
                                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
                                        Foundation <br /> First.
                                    </h2>
                                    <p className="text-slate-500 text-lg">
                                        We never start movement without clinical clearance of your periodontal foundations.
                                    </p>
                                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white flex items-center justify-center font-black">!</div>
                                            <h4 className="font-bold text-slate-900 dark:text-white leading-tight">Clinical Notice</h4>
                                        </div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-relaxed">
                                            DIY brands often cause irreversible bone loss. Our doctor-led protocols ensure your roots remain 100% healthy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="grid gap-6">
                                    {[
                                        {
                                            step: "01",
                                            title: "Periodontal Clearance",
                                            desc: "Complete probe analysis to ensure zero underlying gum infection before starting pressure.",
                                            icon: ShieldCheck
                                        },
                                        {
                                            step: "02",
                                            title: "Root Vector Analysis",
                                            desc: "Using OPG scans to map the exact angle of every root to avoid colliding with bone walls.",
                                            icon: Scan
                                        },
                                        {
                                            step: "03",
                                            title: "Bio-Adaptive Planning",
                                            desc: "Customizing movement speeds based on your biological response—not a generic AI algorithm.",
                                            icon: Play
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="p-8 ios-glass rounded-[2.5rem] flex gap-8 ios-card-hover group">
                                            <div className="text-4xl font-black text-slate-200 dark:text-white/10 group-hover:text-blue-500 transition-colors shrink-0">{item.step}</div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <item.icon size={20} className="text-blue-600" />
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                                </div>
                                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 4: iTERO TECH --- */}
            <section id="tech" className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.5),transparent)]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 border border-white/10">
                                <Zap size={12} fill="currentColor" /> Zero Gag Reflex
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                                The iTero 5D <br />
                                <span className="text-blue-500">Scan Clone.</span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                No goopy mud. No radiation. In 60 seconds, we create a digital duplicate of your smile for sub-millimeter accurate planning.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                                {[
                                    { label: "Precision", value: "100%", desc: "Error-free digital map" },
                                    { label: "Speed", value: "60s", desc: "Instant simulation" },
                                    { label: "Health", value: "None", desc: "No Radiation / Ionization" },
                                    { label: "Comfort", value: "Zero", desc: "Mess or Choking" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-2xl font-black text-blue-400">{stat.value}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-white">{stat.label}</div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-tighter font-bold">{stat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] ios-card-hover">
                                <Image
                                    src="/assets/images/treatments/itero-5d.png"
                                    alt="iTero 5D Scanner"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white animate-pulse">
                                    <Scan size={32} />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* --- SECTION 6: PRICING --- */}
            <section id="pricing" className="py-32 bg-slate-50 dark:bg-[#0b101b] border-t border-slate-200 dark:border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6 border border-blue-100 dark:border-blue-500/20">
                                Invisalign Cost in Nallagandla
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase italic">Honest Engineering Fees.</h2>
                            <p className="text-slate-500 text-lg">Whether you choose **Metal Free Braces** or the latest **Clear Aligners**, we offer transparent pricing for all **Teeth Straightening** needs in Nallagandla.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-stretch">
                            {[
                                {
                                    tier: "Deepak Clear™",
                                    label: "LOCAL EXPERT PRODUCTION",
                                    price: "₹65,000",
                                    best: "Minor to Moderate Crowding",
                                    desc: "Processed personally by Dr. Deepak to international medical standards. Deliver the same results as top brands at half the cost.",
                                    color: "bg-white dark:bg-slate-900",
                                    highlight: "INTERNATIONAL QUALITY"
                                },
                                {
                                    tier: "Standard Plus",
                                    label: "GLOBAL BRAND PARTNERS",
                                    price: "₹1,10,000",
                                    best: "Complex Adult Cases",
                                    desc: "FDA-approved materials from global partners. High durability and extensive clinical tracking history.",
                                    color: "bg-blue-600 text-white scale-105 shadow-2xl relative z-10",
                                    popular: true,
                                    highlight: "BEST SELLER"
                                },
                                {
                                    tier: "Gold Standard",
                                    label: "INVISALIGN® EXCLUSIVE",
                                    price: "₹1,60,000",
                                    best: "Teenagers / Surgical Cases",
                                    desc: "Official Invisalign SmartTrack materials. Includes remote clinic tracking and world-class AI ClinCheck software.",
                                    color: "bg-white dark:bg-slate-900",
                                    highlight: "BRAND CONSCIOUS"
                                }
                            ].map((plan, i) => (
                                <div key={i} className={`p-10 rounded-[3rem] border border-slate-200 dark:border-white/5 flex flex-col ios-card-hover ${plan.color}`}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`text-[10px] font-black tracking-widest uppercase ${plan.popular ? 'text-blue-100' : 'text-blue-500'}`}>{plan.label}</div>
                                        {plan.popular && <div className="bg-white text-blue-600 text-[10px] font-black px-3 py-1 rounded-full">{plan.highlight}</div>}
                                    </div>
                                    <h3 className="text-3xl font-black mb-1 shrink-0">{plan.tier}</h3>
                                    <div className={`text-4xl font-black mb-6 ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                                        <span className="text-lg font-bold">from </span> {plan.price}
                                    </div>
                                    <div className={`font-bold text-[10px] uppercase tracking-widest mb-8 p-3 rounded-2xl ${plan.popular ? 'bg-white/10' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`}>{plan.best}</div>
                                    <p className={`text-sm mb-10 leading-relaxed grow ${plan.popular ? 'text-blue-50' : 'text-slate-500'}`}>{plan.desc}</p>
                                    <div className="mt-auto space-y-4">
                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-70">
                                            <CheckCircle2 size={14} /> 3D iTero Scan Included
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-70">
                                            <CheckCircle2 size={14} /> Global Quality Warranty
                                        </div>
                                        <button className={`ios-btn w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${plan.popular ? 'bg-white text-blue-600' : 'bg-slate-900 text-white dark:bg-blue-600'}`}>
                                            Compare Candidacy
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 7: FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Clinical Q&A</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is the Invisalign Cost in Nallagandla?",
                                    a: "At **Noble Dental Care**, we offer a transparent **Invisalign Package** starting at **₹1,45,000** (Full Comprehensive). We also provide **Clear Aligners (In-House)** starting from **₹65,000**. Every case includes a **Free 3D Scan (Worth ₹3000)** to visualize your future smile before you pay."
                                },
                                {
                                    q: "How do Invisible Braces Hyderabad compare to traditional braces?",
                                    a: "**Invisible Braces Hyderabad** patients prefer **Clear Aligners** because they are removable and aesthetic. Unlike metal braces, these are **Metal Free Braces** that allow you to eat anything and maintain better oral hygiene during your **Teeth Straightening** journey."
                                },
                                {
                                    q: "Can Dr. Dhivakaran treat complex cases with aligners?",
                                    a: "Yes. **Dr. Dhivakaran** and **Dr. Deepak** use iTero 5D scanning at our clinic **Near Aparna Sarovar / Citizens Hospital** to plan complex movements that were previously only possible with metal braces."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 ios-card-hover">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex gap-3">
                                        <span className="text-blue-600 font-black">Q.</span> {faq.q}
                                    </h3>
                                    <div className="flex gap-4">
                                        <div className="w-1 h-auto bg-blue-100 dark:bg-white/10 rounded-full shrink-0"></div>
                                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-white">
                    <RevealOnScroll>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-white/20">
                            <Smile size={14} /> Design Your Smile
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
                            Precision Bite. <br /> Zero Mess.
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="ios-btn px-10 py-5 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl flex items-center gap-3">
                                <Calendar size={18} /> Book Free 3D Scan
                            </button>
                            <a href="tel:+918610425342" className="ios-btn px-10 py-5 bg-black/20 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black/30 flex items-center gap-3">
                                <Headphones size={18} /> Call Clinic
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Simple Footer/Validation */}
            <footer className="py-12 bg-white dark:bg-black border-t border-slate-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-3 text-slate-400">
                        <ShieldCheck size={16} className="text-blue-500" />
                        <p className="text-[10px] font-bold uppercase tracking-widest">
                            Clinically Verified v4.2 | Dr. Dhivakaran & Dr. Deepak
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
