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
    Thermometer, Scaling, Check, X, Phone,
    Siren
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
    background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .pulse-red {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
    animation: pulse-red 2s infinite;
  }
  
  @keyframes pulse-red {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
    }
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export default function EmergencyPage() {
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
        "@type": "MedicalOrganization",
        "name": "Noble Dental Emergency Care",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+918610425342",
            "contactType": "emergency",
            "areaServed": "Hyderabad",
            "availableLanguage": ["English", "Telugu", "Hindi"]
        },
        "isAcceptingNewPatients": true,
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-red-500/30 pt-20">
            <style>{customStyles}</style>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
            />

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-red-600/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                                <Siren size={12} className="animate-pulse" /> Urgent Dental Care
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                Emergency <br />
                                <span className="gradient-text">Pain Relief.</span>
                            </h1>

                            {/* Reviewer Pill */}
                            <div className="flex items-center gap-4 py-4">
                                <Link href="/team/dr-dhivakaran" className="ios-glass ios-btn flex items-center gap-3 p-2 pr-6 rounded-full group hover:bg-white/50 dark:hover:bg-white/10">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                                        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Dr. Dhivakaran" fill className="object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase text-red-600 dark:text-red-400 font-bold tracking-wider">Priority Access</div>
                                        <div className="text-xs font-bold text-slate-900 dark:text-white">Dr. Dhivakaran, CMD</div>
                                    </div>
                                </Link>
                            </div>

                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                <strong>Severe Toothache? Broken Tooth?</strong> Don&apos;t wait. Infections spread fast. We provide <strong>Same-Day Logic-Based Treatment</strong>—not just painkillers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+918610425342" className="pulse-red ios-btn px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center justify-center gap-2">
                                    <Phone size={18} /> Call +91 86104 25342
                                </a>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        Response <br /> Time
                                    </div>
                                    <div className="text-2xl font-black text-red-600 dark:text-white">
                                        &lt;10 <span className="text-xs font-bold text-slate-400">Mins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src="/assets/images/treatments/root-canal-hyderabad.webp"
                                    alt="Emergency Dental Treatment"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Trauma Case</p>
                                        <h3 className="text-2xl font-bold text-white">Fractured Incisor</h3>
                                        <p className="text-slate-300 text-sm mt-2">Restored in 45 mins using Composite Bonding.</p>
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
                        { id: 'overview', label: 'URGENT' },
                        { id: 'truth', label: 'THE NOBLE TRUTH' },
                        { id: 'triage', label: 'TRIAGE' },
                        { id: 'pricing', label: 'COST' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeSection === item.id
                                ? 'bg-red-600 text-white'
                                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* --- PHASE 2: THE "NOBLE TRUTH" (Anti-Gimmick) --- */}
            <section id="truth" className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-4xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Painkillers Are Not Treatment.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Many clinics prescribe Gel or Pills and tell you to &quot;wait it out&quot;. <br className="hidden md:block" />
                                At Noble Dental, <strong>we target the root cause immediately</strong> to stop the infection from spreading to your jaw or sinus.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* THE WRONG WAY */}
                        <RevealOnScroll>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-red-100 dark:border-red-900/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <XCircle size={120} className="text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 font-black text-xl">
                                        <X size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The &quot;Quick Fix&quot; Trap</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Clove Oil / Home Remedies (Temporary)",
                                            "Antibiotics without Diagnosis (Dangerous)",
                                            "Delaying until face swells",
                                            "Visiting quacks for cheap extraction"
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

                        {/* THE NOBLE WAY */}
                        <RevealOnScroll>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-green-100 dark:border-green-900/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CheckCircle2 size={120} className="text-green-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 font-black text-xl">
                                        <Check size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Noble Protocol</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Immediate X-Ray Diagnosis (10 mins)",
                                            "Emergency Pulp Drainage (Stops Pain)",
                                            "Re-cementing broken crowns immediately",
                                            "Saving the tooth > Extracting it"
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
                    </div>
                </div>
            </section>

            {/* --- TRIAGE SECTION --- */}
            <section id="triage" className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">What&apos;s Your Emergency?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Severe Toothache", icon: Zap, desc: "Throbbing pain that disturbs sleep. Indicates deep infection.", action: "Needs RCT Start" },
                            { title: "Knocked-Out Tooth", icon: AlertCircle, desc: "Tooth fell out due to sports/accident. Keep it in milk/saliva.", action: "Re-implant < 60 mins" },
                            { title: "Broken/Chipped", icon: Heart, desc: "Sharp edges cutting tongue or aesthetic damage.", action: "Composite Bonding" }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:bg-white/20 group-hover:text-white">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed group-hover:text-blue-100">{item.desc}</p>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">{item.action}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section id="pricing" className="py-24 bg-slate-50 dark:bg-[#0B1120]">
                <div className="max-w-5xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">Transparent Pricing</div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Emergency Cost Guide</h2>
                            <p className="text-slate-600 dark:text-slate-400">Consultation Fee: ₹500 (Waived if treatment started)</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* BASIC */}
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Diagnosis</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Consult + XRay</h3>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-6">₹500 - ₹800</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Digital RVG X-Ray</li>
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Prescription</li>
                            </ul>
                        </div>

                        {/* PAIN RELIEF */}
                        <div className="p-8 bg-blue-600 text-white rounded-3xl border border-blue-500 shadow-2xl relative transform md:-translate-y-4">
                            <div className="absolute top-0 center bg-slate-900 text-[10px] font-bold uppercase px-3 py-1 rounded-b-lg">Immediate Relief</div>
                            <h3 className="text-xl font-bold text-white mb-4">Emergency RCT Start</h3>
                            <div className="text-3xl font-black text-white mb-6">₹3,500 <span className="text-sm font-medium text-blue-200">onwards</span></div>
                            <p className="text-sm text-blue-100 mb-6">Opening the tooth to drain infection and stop pain instantly.</p>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-white flex items-center gap-2"><Check size={14} className="text-blue-300" /> Anesthesia Included</li>
                                <li className="text-xs font-semibold text-white flex items-center gap-2"><Check size={14} className="text-blue-300" /> 90% Pain Reduction</li>
                            </ul>
                        </div>

                        {/* EXTRACTION */}
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Last Resort</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Simple Extraction</h3>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-6">₹1,500 - ₹3k</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> If tooth cannot be saved</li>
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Quick Removal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section id="faq" className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">Urgent Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Can I just take antibiotics for tooth pain?", a: "Antibiotics only reduce bacterial load temporarily; they do not cure the infection inside the tooth. Without physical treatment (RCT or Extraction), the pain will return worse." },
                            { q: "Do you have 24/7 support?", a: "We operate extended hours. For night emergencies, please WhatsApp us immediately. We will guide you with first aid until we can see you first thing in the morning." },
                            { q: "How much does a root canal cost?", a: "Front teeth start from ₹3,500. Molars (back teeth) range from ₹5,000 to ₹8,000 depending on the complexity and number of canals." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                                    <HelpCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
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
