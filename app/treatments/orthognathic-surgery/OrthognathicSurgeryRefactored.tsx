'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Droplets, Thermometer,
    Clock, FileText, Calculator, HelpCircle,
    Scan, Camera, Monitor, Scissors, Waves, Bone
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const customStyles = `
  .ios-glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
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
  
  .gradient-text-gold {
    background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .vsp-scan {
    background: repeating-linear-gradient(
      0deg,
      rgba(37, 99, 235, 0.1),
      rgba(37, 99, 235, 0.1) 1px,
      transparent 1px,
      transparent 20px
    );
  }
`;

export default function OrthognathicSurgeryRefactored() {
    const [activeTab, setActiveTab] = useState('overview');

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
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20">
                                <Scissors size={12} /> Maxillofacial Precision
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                                Correcting <br />
                                <span className="gradient-text-gold">Nature.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                Orthognathic Surgery aligns your jaws and facial structure for perfect breathing, chewing, and a profile that matches your potential.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                                    <Calendar size={18} /> Schedule Facial Analysis
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-xs uppercase font-black text-slate-400 tracking-widest leading-none">
                                        Virtual Surgical <br /> Planning (VSP)
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Monitor size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover border-4 border-white dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/orthognathic-hyderabad.webp"
                                    alt="Orthognathic Surgery Hyderabad"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 vsp-scan pointer-events-none opacity-40" />
                            </div>
                            {/* Specialist Badge */}
                            <div className="absolute -bottom-6 -left-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-white/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                        <Stethoscope size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">OMS Certified</div>
                                        <div className="text-xs uppercase font-bold text-slate-400 tracking-widest leading-none">Diplomate Focus</div>
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
                        { id: 'logic', label: 'THE SURGICAL LOGIC' },
                        { id: 'vsp', label: 'DIGITAL PLANNING' },
                        { id: 'procedures', label: 'PROCEDURES' },
                        { id: 'lifestyle', label: 'POST-OP CARE' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            className={`text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeTab === tab.id
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* --- SECTION 1: THE LOGIC --- */}
            <section id="logic" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                    <Activity size={12} /> Functional Harmony
                                </div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                                    &quot;It&apos;s not just <br />
                                    <span className="text-blue-600 italic">Face Correction.</span>&quot;
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    While the aesthetic change is dramatic, the primary goal is functional. We fix the architecture so your teeth meet normally, your airway opens up, and your jaw joints (TMJ) relax.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Optimal Breathing", icon: Waves },
                                        { label: "Bite Alignment", icon: Activity },
                                        { label: "Golden Ratio", icon: Ruler },
                                        { label: "TMJ Health", icon: ShieldCheck }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-4 p-6 ios-glass rounded-3xl border border-white/40">
                                            <div className="w-10 h-10 rounded-2xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white flex items-center justify-center shadow-lg">
                                                <item.icon size={20} />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="p-12 ios-glass rounded-[4rem] border-2 border-dashed border-blue-200 dark:border-blue-800 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                        <Ruler size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight italic">The Golden Ratio</h3>
                                    <p className="text-lg text-slate-500 italic">&quot;We don&apos;t &apos;move&apos; bones arbitrarily. We calculate the exact millimetric shift required to align your profile with the phi ratio: 1.618.&quot;</p>
                                    <div className="mt-8 text-xs font-black text-blue-600 tracking-widest uppercase">— Dr. Dhivakaran</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: VSP --- */}
            <section id="vsp" className="py-32 bg-white dark:bg-[#020617] relative">
                <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-4">
                        Virtual Surgical <br /> <span className="gradient-text-gold">Planning.</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium">We perform the surgery on a computer before we touch your face.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "CBCT 3D Scan", desc: "A 360-degree digital x-ray that maps your bone, nerves, and vessels with sub-millimeter accuracy.", icon: Scan },
                        { title: "Digital Mock-Up", desc: "We simulate movement variations to find the perfect balance between aesthetics and airway space.", icon: Monitor },
                        { title: "3D Printed Guides", desc: "Custom surgical templates are printed to guide the exact cuts, ensuring 100% translational accuracy.", icon: ShieldCheck }
                    ].map((item, i) => (
                        <div key={i} className="p-10 ios-glass rounded-[3rem] border border-slate-100 dark:border-white/5 space-y-6 ios-card-hover group">
                            <div className="w-20 h-20 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center shadow-xl group-hover:bg-amber-600 transition-all duration-500">
                                <item.icon size={36} />
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{item.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SECTION 3: PROCEDURES --- */}
            <section id="procedures" className="py-32 bg-slate-950 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-black tracking-tighter uppercase">The <span className="text-blue-500 italic">Big Fixes.</span></h2>
                        </div>

                        <div className="grid gap-6 max-w-5xl mx-auto">
                            {[
                                { title: "LeFort I Osteotomy", desc: "Correcting the upper jaw for issues like gummy smiles, open bites, or mid-face retrusion.", tag: "UPPER JAW" },
                                { title: "BSSO (Bilateral Sagittal Split)", desc: "Moving the lower jaw forward (for receding chins) or backward (for underbites).", tag: "LOWER JAW" },
                                { title: "Genioplasty", desc: "Reshaping the chin bone to improve profile projection and lip closure.", tag: "CHIN SCULPT" },
                                { title: "Distraction Osteogenesis", desc: "Slowly 'growing' bone to correct severe congenital facial asymmetries.", tag: "BONE REGEN" }
                            ].map((item, i) => (
                                <div key={i} className="group p-10 ios-glass rounded-[3rem] border border-white/5 bg-white/5 flex flex-col md:flex-row gap-12 items-center hover:bg-blue-600/20 transition-all duration-500">
                                    <div className="text-xs font-black tracking-[0.3em] text-blue-500 border border-blue-500/30 px-4 py-2 rounded-full uppercase shrink-0">{item.tag}</div>
                                    <div className="flex-1">
                                        <h4 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-blue-100 italic transition-colors italic uppercase">{item.title}</h4>
                                        <p className="text-slate-400 group-hover:text-white transition-colors">{item.desc}</p>
                                    </div>
                                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 4: RECOVERY --- */}
            <section id="lifestyle" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 border-slate-100 dark:border-white/5">
                                <Image src="/assets/images/treatments/orthognathic-hyderabad.webp" alt="Orthognathic Recovery" fill className="object-cover brightness-75" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12 space-y-4">
                                    <div className="text-xs font-black uppercase tracking-widest text-blue-400">Post-Op Blueprint</div>
                                    <h3 className="text-4xl font-black text-white italic tracking-tighter italic uppercase">The Healing Phase.</h3>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-4xl font-black tracking-tighter uppercase italic">Precision results take <span className="text-blue-600">patience.</span></h2>
                                <div className="space-y-6">
                                    {[
                                        { week: "Week 1", desc: "Liquid/Blended diet. Swelling peaks at day 3 and begins to recede.", icon: Droplets },
                                        { week: "Week 2-4", desc: "Soft foods (Mashed, pasta). Return to non-strenuous work.", icon: Activity },
                                        { week: "Week 6-8", desc: "Bone fusion begins. Return to normal chewing and gym activity.", icon: Bone },
                                        { week: "Final Result", desc: "12-18 months. Nerves fully regenerate. Profile is permanently stabilized.", icon: Sparkles }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shrink-0">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black uppercase tracking-tight italic">{item.week}</h4>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 5: FAQ --- */}
            <section id="faq" className="py-32 bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 text-slate-900 dark:text-white uppercase tracking-tighter italic">
                            <h2 className="text-4xl font-black">Expert Clarifications</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Is surgery painful?",
                                    a: "The surgery is performed under General Anesthesia; you feel nothing. Post-operatively, most patients report a feeling of &apos;Tightness&apos; or &apos;Numbness&apos; rather than sharp pain. We usage long-acting local anesthetics and precision medication to keep you comfortable."
                                },
                                {
                                    q: "Will I have scars on my face?",
                                    a: "No. 99% of our incisions are made INSIDE the mouth. There are no visible external scars on the face. You wake up with the same skin, just a better structure underneath."
                                },
                                {
                                    q: "How long is the hospitalization?",
                                    a: "Usually 24-48 hours. We monitor you closely during the initial healing phase to ensure hydration and pain management are perfect before you go home."
                                },
                                {
                                    q: "Do I still need braces?",
                                    a: "Yes. Surgery fixes the bones; braces fix the teeth. Usually, there is a &apos;Pre-Surgical&apos; phase to align teeth, and a &apos;Post-Surgical&apos; phase for fine-tuning. We coordinate directly with your Orthodontist."
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
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] italic uppercase">
                            Rewrite Your <br />
                            <span className="text-amber-500">Profile.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Book Facial Analysis
                            </button>
                            <a href="tel:+918610425342" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20">
                                Clinic Direct Line
                            </a>
                        </div>
                        <p className="mt-12 text-slate-500 font-black text-xs uppercase tracking-[0.3em]">
                            Citations: AAOMS White Paper | Journal of Oral & Maxillofacial Surgery (2024)
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
