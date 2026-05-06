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
    Scaling, Bone, Waves, Scan
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
  .dark {
    --glass-bg: rgba(15, 23, 42, 0.7);
    --glass-border: rgba(255, 255, 255, 0.05);
  }
  .dark .ios-glass {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
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
    background: linear-gradient(135deg, #ef4444 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .pulse-red {
    animation: pulse-red 2s infinite;
  }
  @keyframes pulse-red {
    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
    70% { box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
  }
`;

export default function GumDiseaseRefactored() {
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
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-red-500/30 pt-20">
            <style>{customStyles}</style>

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/30 rounded-full text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                                <AlertCircle size={12} /> The Oral-Systemic Link
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase italic">
                                Laser Gum <br />
                                <span className="gradient-text">Surgery.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                Experience advanced **Laser Gum Surgery Hyderabad** protocols at **Noble Dental Care Hyderabad**. Located **Near Aparna Sarovar / Citizens Hospital**, **Dr. Dhivakaran Reddy** uses specialized **Laser Dentistry Nallagandla** tech to treat your heart and gums.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                                    <Heart size={18} /> Book Gum Audit
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-xs uppercase font-black text-slate-600 dark:text-slate-400 tracking-widest leading-none">
                                        EMS Airflow® <br /> GBT Protocol
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Waves size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover border-4 border-white dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/gum-disease-hyderabad.webp"
                                    alt="Gum Disease Treatment Hyderabad"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            {/* Floating Medical Badge */}
                            <div className="absolute -bottom-6 -right-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-red-100/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white pulse-red">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">Systemic Risk</div>
                                        <div className="text-xs uppercase font-bold text-slate-600 dark:text-slate-400 tracking-widest">Cardiac + Diabetic Link</div>
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
                        { id: 'truth', label: 'THE SILENT KILLER' },
                        { id: 'systemic', label: 'SYSTEMIC LINK' },
                        { id: 'tech', label: 'GUIDED BIOFILM THERAPY' },
                        { id: 'matrix', label: 'GUM SEVERITY' },
                        { id: 'pricing', label: 'PRICING' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            className={`text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeTab === tab.id
                                ? 'bg-red-600 text-white'
                                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* --- SECTION 1: THE SILENT KILLER --- */}
            <section id="truth" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                                    <Activity size={12} /> Clinical Reality
                                </div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none uppercase italic">
                                    Bleeding Gums <br />
                                    <span className="text-red-600 italic underline decoration-wavy underline-offset-8">Treatment Hyderabad.</span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Bleeding gums are NOT normal. At our **Dental Clinic in Nallagandla**, we provide advanced **Bleeding Gums Treatment** to stop the infection (Gingivitis) from becoming bone loss (Periodontitis).
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "The Gimmick: 'Just Scaling'", desc: "Cheap scaling only removes surface stains. True gum health requires sub-gingival curettage to remove deep bacterial colonies.", icon: XCircle },
                                        { title: "The Gimmick: Mouthwash Cure", desc: "Mouthwash masks bad breath (Halitosis) but does 0% to remove the hard 'Calculus' (Tartar) that is the actual cause.", icon: AlertCircle },
                                        { title: "The Noble Reality", desc: "We use Guided Biofilm Therapy (EMS Swiss) to visualize every single bacterium before we begin cleaning.", icon: CheckCircle2 }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 ios-glass rounded-3xl border border-white/40">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg ${i === 2 ? 'bg-red-600 shadow-red-500/30' : 'bg-slate-400'}`}>
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-slate-700 dark:text-slate-300">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="p-12 ios-glass rounded-[4rem] border-2 border-dashed border-red-200 dark:border-red-800 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-red-500/50">
                                        <Stethoscope size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase">Medical Refusal</h3>
                                    <p className="text-lg text-slate-500 italic">&quot;I refuse to call a simple polish a &apos;cleaning&apos;. If your gum thickness is &lt; 3mm, we perform a medical-grade prophylaxis, not just a cosmetic one.&quot;</p>
                                    <div className="mt-8 text-xs font-black text-red-600 tracking-widest uppercase">— Dr. Dhivakaran Reddy</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: SYSTEMIC LINK --- */}
            <section id="systemic" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase italic">
                                Best Gum Specialist <br />
                                <span className="text-red-600">in Nallagandla.</span>
                            </h2>
                            <p className="text-xl text-slate-700 dark:text-slate-300">As the **Best Gum Specialist in Nallagandla**, **Dr. Dhivakaran Reddy** ensures your **Bleeding Gums Treatment** is linked to your overall systemic health.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { title: "Heart Disease", desc: "Oral bacteria enter the bloodstream and attach to fatty deposits in heart blood vessels, increasing risk of stroke and heart attack.", icon: Heart },
                                { title: "Diabetes Risk", desc: "Gum disease makes it harder for your body to control blood sugar. Conversely, high sugar feeds the bacteria in your gums.", icon: Activity },
                                { title: "Pregnancy", desc: "Bacteria can travel to the placenta, potentially leading to premature birth or low birth weight. Secure your child's health first.", icon: ShieldCheck }
                            ].map((item, i) => (
                                <div key={i} className="p-10 ios-glass rounded-[3rem] border border-slate-100 dark:border-white/5 space-y-6 ios-card-hover group bg-white/50 dark:bg-slate-900/50">
                                    <div className="w-20 h-20 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center shadow-xl group-hover:bg-red-600 transition-all duration-500">
                                        <item.icon size={36} />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 3: GBT TECH --- */}
            <section id="tech" className="py-32 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative group aspect-square rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                                <Image
                                    src="/assets/images/treatments/scaling-hyderabad.webp"
                                    alt="Guided Biofilm Therapy EMS"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-[5s]"
                                />
                                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
                                <div className="absolute bottom-10 left-10 p-6 ios-glass rounded-3xl backdrop-blur-3xl">
                                    <div className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">SWISS TECHNOLOGY</div>
                                    <div className="text-sm font-bold">EMS AirFlow® Guided <br /> Biofilm Therapy</div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <h2 className="text-5xl font-black tracking-tighter leading-[0.9] uppercase italic">
                                    Painless <br /> Laser <br /> <span className="text-blue-500 italic">Dentist.</span>
                                </h2>
                                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                                    Why suffer traditional scalpels? At our clinic, the **Periodontist in Nallagandla** uses **Laser Dentistry Nallagandla** protocols for a suture-free, bloodless experience during **Laser Gum Surgery Hyderabad**.
                                </p>

                                <div className="space-y-6 text-sm font-black uppercase tracking-widest text-slate-500">
                                    {[
                                        { step: "01", label: "DISCLOSE", desc: "Dyeing bacteria purple to visualize the threat." },
                                        { step: "02", label: "AIRFLOW", desc: "Removing stains & soft plaque with warm air/water." },
                                        { step: "03", label: "PIEZON", desc: "Targeted ultrasonic removal of hard tartar." },
                                        { step: "04", label: "RECALL", desc: "Maintenance schedule for biological stability." }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-6 items-center border-b border-white/10 pb-4">
                                            <span className="text-blue-600">{s.step}</span>
                                            <span className="text-white shrink-0">{s.label}</span>
                                            <span className="text-xs text-slate-500 normal-case font-medium ml-auto text-right">{s.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 4: MATRIX --- */}
            <section id="matrix" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6">
                                Gum Severity <br />
                                <span className="text-red-500 italic underline decoration-blue-500 decoration-4">Diagnostic Matrix.</span>
                            </h2>
                            <p className="text-lg text-slate-700 dark:text-slate-300">Self-diagnose your gum health status.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { stage: "STAGE 0", name: "Healthy", symptoms: "Pink, Firm Gums. No bleeding.", action: "Regular GBT", color: "bg-emerald-500" },
                                { stage: "STAGE 1", name: "Gingivitis", symptoms: "Red, puffy, bleeding on brushing.", action: "Medical Prophylaxis", color: "bg-yellow-500" },
                                { stage: "STAGE 2", name: "Early Periodontitis", symptoms: "Bad breath + receding gums.", action: "Deep Root Planing", color: "bg-orange-500" },
                                { stage: "STAGE 3", name: "Advanced Disease", symptoms: "Loose teeth + pus + bone loss.", action: "Laser Surgery / Grafting", color: "bg-red-500" }
                            ].map((m, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 space-y-4 ios-card-hover group">
                                    <div className={`text-xs font-black text-white px-3 py-1 rounded-full w-fit ${m.color}`}>{m.stage}</div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{m.name}</h4>
                                    <p className="text-xs text-slate-700 dark:text-slate-300 font-bold uppercase tracking-widest h-12">{m.symptoms}</p>
                                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 w-full text-center">
                                        <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Medical Action: <br /> {m.action}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 5: PRICING --- */}
            <section id="pricing" className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <RevealOnScroll>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] uppercase italic">
                            Laser Gum Surgery <br /> <span className="text-red-500 italic">Hyderabad Fees.</span>
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <div className="p-12 ios-glass rounded-[4rem] border border-white/10 bg-white/5 text-left">
                                <div className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-500 mb-8">Basic Maintenance</div>
                                <div className="space-y-6">
                                    {[
                                        { item: "Guided Biofilm Therapy (Swiss)", price: "₹2,500" },
                                        { item: "Tea/Coffee Stain Removal", price: "₹1,500" },
                                        { item: "Deep Scaling & Polishing", price: "₹3,500" },
                                        { item: "Enamel Air-Abrasion", price: "₹2,000" }
                                    ].map((p, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                            <span className="font-bold text-slate-300 uppercase tracking-tight text-sm">{p.item}</span>
                                            <span className="font-black text-white text-lg">{p.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-12 ios-glass rounded-[4rem] border border-red-500/30 bg-red-950/20 text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <Scan size={48} className="text-red-500 opacity-20" />
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest text-red-400 mb-8">Advanced Periodontics</div>
                                <div className="space-y-6">
                                    {[
                                        { item: "Laser Gingivectomy (Per Arch)", price: "₹8,500" },
                                        { item: "Sub-gingival Root Planing", price: "₹5,000" },
                                        { item: "Bone Grafting (Bio-Oss®)", price: "₹12,000+" },
                                        { item: "Gum Recession Grafting", price: "₹15,000+" }
                                    ].map((p, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                            <span className="font-bold text-red-100 uppercase tracking-tight text-sm">{p.item}</span>
                                            <span className="font-black text-red-500 text-lg">{p.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="mt-12 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
                            * GBT pricing includes disclosure dye + heated water treatment. Life is priority.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 6: FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Diagnostic Help</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Is Laser Gum Surgery Hyderabad safer than traditional methods?",
                                    a: "Yes. **Laser Gum Surgery Hyderabad** uses precise beams to kill bacteria and seal blood vessels simultaneously. As a **Painless Laser Dentist**, we eliminate the need for stitches and reduce recovery time by 80%."
                                },
                                {
                                    q: "Can a Periodontist in Nallagandla treat bad breath?",
                                    a: "Yes. Our **Periodontist in Nallagandla** identifies the bacterial source of Halitosis under the gums. Using GBT and **Laser Dentistry Nallagandla** tech, we restore fresh breath by removing the root cause."
                                },
                                {
                                    q: "Who is the Best Gum Specialist in Nallagandla?",
                                    a: "**Dr. Dhivakaran Reddy** is recognized as the **Best Gum Specialist in Nallagandla** for implementing Swiss GBT and **Laser Gum Surgery Hyderabad** protocols to save teeth that others might extract."
                                },
                                {
                                    q: "Why do you use heated water?",
                                    a: "Patients with gum disease often have exposed roots that are hypersensitive. The Guided Biofilm Therapy (GBT) system uses water at a precise 37°C for a painless, comfortable experience."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 ios-card-hover group">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex gap-4">
                                        <span className="text-red-500 font-black italic">Q.</span> {faq.q}
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
                            Healthy Gums. <br />
                            <span className="text-red-500 italic uppercase">Healthy Heart.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-red-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Book Dr. Dhivakaran Reddy
                            </button>
                            <a href="tel:+918610425342" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20">
                                Clinic Direct Line
                            </a>
                        </div>
                        <p className="mt-12 text-slate-500 font-black text-xs uppercase tracking-[0.3em]">
                            Citations: American Academy of Periodontology | WHO Oral Health Report (2023)
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
