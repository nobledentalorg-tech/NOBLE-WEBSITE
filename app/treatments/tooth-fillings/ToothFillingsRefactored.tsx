'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Droplets, Filter,
    Clock, FileText, Calculator, HelpCircle,
    Thermometer, Scaling, Layers, MousePointer2
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

  .biomimetic-glow {
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.2);
  }
`;

export default function ToothFillingsRefactored() {
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                <Microscope size={12} /> Biomimetic Protocol v6.0
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                Invisible <br />
                                <span className="gradient-text">Bonding.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                Not just &quot;filling a hole.&quot; We re-engineer your tooth with nano-hybrid ceramic that mimics natural enamel flex and transparency.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
                                    <Calendar size={18} /> Instant Cavity Check
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-xs uppercase font-black text-slate-400 tracking-widest leading-none">
                                        100% Mercury Free <br /> BPA Non-Toxic
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Droplets size={20} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover border-4 border-white dark:border-slate-800">
                                <Image
                                    src="/assets/images/treatments/fillings-hyderabad.webp"
                                    alt="Invisible Nano-Composite Filling"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-[3s]"
                                />
                            </div>
                            {/* Technical Badge */}
                            <div className="absolute -bottom-6 -left-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-white/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white">7th Gen Adhesive</div>
                                        <div className="text-xs uppercase font-bold text-slate-400">Zero Micro-Leakage</div>
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
                        { id: 'truth', label: 'THE INTEGRITY CHECK' },
                        { id: 'biomimetic', label: 'BIOMIMETIC TECH' },
                        { id: 'isolation', label: 'THE RUBBER DAM' },
                        { id: 'steps', label: '5-STEP PROTOCOL' },
                        { id: 'pricing', label: 'PRICING' },
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

            {/* --- SECTION 1: THE INTEGRITY CHECK --- */}
            <section id="truth" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                                    <AlertCircle size={12} /> The Anti-Gimmick
                                </div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                                    &quot;Why do cheap <br />
                                    <span className="text-blue-600 italic">Fillings fail?</span>&quot;
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Saliva. If even a molecule of saliva touches the cavity during a filling, the bond will fail in months. Most clinics skip the &quot;Rubber Dam&quot; to save 5 minutes. We don&apos;t.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "The Gimmick: 5-Minute Fillings", desc: "Skipping isolation leads to &apos;Secondary Decay&apos;—where your tooth rots UNDER the expensive filling.", icon: XCircle },
                                        { title: "The Gimmick: Silver Amalgam", desc: "Mercury-based silver fillings expand over time, acting like a wedge that eventually cracks your natural tooth in half.", icon: AlertCircle },
                                        { title: "The Noble Way: Biomimetic", desc: "We use nano-composites that physically bond to the tooth, strengthening it rather than just sitting in it.", icon: CheckCircle2 }
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
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">The &quot;No-Compromise&quot; Guarantee</h3>
                                    <p className="text-lg text-slate-500 italic">&quot;I will never perform a composite restoration without absolute moisture control. Your tooth&apos;s life depends on that 7th-gen bond.&quot;</p>
                                    <div className="mt-8 text-xs font-black text-blue-600 tracking-widest uppercase">— Dr. Dhivakaran Reddy</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 2: BIOMIMETIC TECH --- */}
            <section id="biomimetic" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
                                Nano-Hybrid <br />
                                <span className="gradient-text">Ceramic Science.</span>
                            </h2>
                            <p className="text-xl text-slate-500">We don&apos;t use plastic. We use liquid ceramic infused with nano-glass.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { title: "Chameleon Effect", desc: "Our composite has glass particles that pick up the color of surrounding tooth structure, making it invisible.", icon: Sparkles },
                                { title: "Flexural Strength", desc: "Unlike brittle silver, biomimetic fillings bend slightly when you chew, preventing tooth fractures.", icon: Activity },
                                { title: "7th Gen Bonding", desc: "A &apos;chemical weld&apos; that merges the filling with your natural enamel at a molecular level.", icon: Zap }
                            ].map((item, i) => (
                                <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 space-y-6 ios-card-hover group">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                        <item.icon size={32} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 3: ISOLATION --- */}
            <section id="isolation" className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest text-blue-400 border border-white/10">
                            <Shield size={12} /> The Gold Standard
                        </div>
                        <h2 className="text-5xl font-black tracking-tighter leading-tight">
                            The Rubber Dam: <br />
                            <span className="text-blue-500">No Moisture. Zero Failure.</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            90% of dentists in India skip this. It&apos;s a medical-grade sheet that isolate the tooth from your tongue, breath, and saliva.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "Prevents breathing in dental debris.",
                                "Ensures the 7th Gen bond remains 100% dry.",
                                "Speeds up the procedure by 40%.",
                                "Protects your tongue and cheeks from the drill."
                            ].map((li, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-600/50 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="text-lg font-medium text-slate-300">{li}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl skew-y-3">
                        <Image
                            src="/assets/images/treatments/fillings-hyderabad.webp"
                            alt="Rubber Dam Isolation Technology"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                            <span className="text-xs font-black uppercase tracking-widest">Live Moisture Control Active</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: PROTOCOL --- */}
            <section id="steps" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20 max-w-2xl mx-auto">
                            <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">The Precision <br /> <span className="text-blue-600">5-Step Build.</span></h2>
                            <p className="text-lg text-slate-500 italic">We don&apos;t &quot;plug&quot; holes. We anatomically sculpt them.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { step: "01", title: "Laser Cleansing", desc: "Removing decay using magnification-guided drills for maximum tooth preservation." },
                                { step: "02", title: "Etching & Priming", desc: "Creating a microscopic 'Rough' surface for the 7th Gen bond to lock into." },
                                { step: "03", title: "Incremental Layering", desc: "Placing ceramic in 2mm increments to prevent 'Polymerization Shrinkage'." },
                                { step: "04", title: "Anatomical Sculpting", desc: "Hand-carving the 'Fissures' and 'Cusps' of the tooth so your bite feels natural." },
                                { step: "05", title: "Titanium Polishing", desc: "A 4-step polishing sequence for a mirror-like finish that prevents plaque buildup." }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 ios-glass rounded-3xl border border-slate-100 dark:border-white/5 flex gap-12 items-center hover:bg-blue-600 transition-all duration-500">
                                    <div className="text-5xl font-black text-slate-200 dark:text-slate-800 group-hover:text-blue-400/50 transition-colors uppercase italic">{item.step}</div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-white uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-100 text-sm max-w-2xl">{item.desc}</p>
                                    </div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight className="text-white" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 5: PRICING --- */}
            <section id="pricing" className="py-32 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 leading-none">Investment in <br /> <span className="text-blue-600 italic">Tooth Longevity.</span></h2>
                            <p className="text-lg text-slate-500">Transparent fees for premium biomimetic science.</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-white/5">
                            <div className="grid md:grid-cols-2">
                                <div className="p-12 border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5">
                                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Service Menu</div>
                                    <div className="space-y-8">
                                        {[
                                            { item: "Nano-Composite (Small)", price: "₹1,500" },
                                            { item: "Nano-Composite (Medium)", price: "₹2,500" },
                                            { item: "Complex Build-up (Large)", price: "₹3,500" },
                                            { item: "Fiber-Reinforced Core", price: "₹4,500" },
                                            { item: "Cosmetic Edge Repair", price: "₹2,000" }
                                        ].map((p, i) => (
                                            <div key={i} className="flex justify-between items-center group">
                                                <div className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors">{p.item}</div>
                                                <div className="w-12 h-[1px] bg-slate-200 dark:bg-white/10 mx-4 shrink-0" />
                                                <div className="font-black text-slate-900 dark:text-white">{p.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-12 bg-blue-600 text-white flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                                    <h3 className="text-3xl font-black tracking-tighter mb-6 relative z-10 italic">Everything Included.</h3>
                                    <ul className="space-y-4 relative z-10">
                                        {[
                                            "Magnification Check",
                                            "Rubber Dam Isolation",
                                            "7th Gen Bonding System",
                                            "Mirror-Gloss Polishing",
                                            "Post-Filling Sealant"
                                        ].map((li, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                                                <CheckCircle2 size={16} /> {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
                            * Fees are medical-standard. Life of restoration: 10-15 Years with Regular GBT Prophylaxis.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- SECTION 6: FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Common Questions</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Will the filling match my natural tooth color?",
                                    a: "Yes. We use the 'Chameleon Effect' composite from Tetric-N-Line. It reflects light exactly like your natural enamel, making it virtually invisible even to you."
                                },
                                {
                                    q: "Do you offer 'Laser' fillings?",
                                    a: "While we use lasers for gum disinfection, we focus on 'Biomimetic Bonding'. High-frequency lasers can sometimes cause pulpal heat; our magnification-guided precision is safer for the nerve."
                                },
                                {
                                    q: "How long until I can eat after a filling?",
                                    a: "Immediately! Our nano-composite is 100% cured using high-intensity blue light before you leave the chair. No waiting required."
                                },
                                {
                                    q: "Why did my previous filling fall out?",
                                    a: "Usually moisture contamination (saliva) during bond placement or 'Polymerization Shrinkage' in a large filling. Our rubber-dam protocol and incremental layering eliminate both risks."
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
                            Save the Tooth. <br />
                            <span className="text-blue-500 italic">Lose the Cavity.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Book Precision Checkup
                            </button>
                            <a href="tel:+918610425342" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20">
                                Clinic Direct Line
                            </a>
                        </div>
                        <p className="mt-12 text-slate-500 font-black text-xs uppercase tracking-[0.3em]">
                            Citations: Minamata Convention on Mercury | Journal of Operative Dentistry (2024)
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
