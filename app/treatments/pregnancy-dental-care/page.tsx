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
    Siren, Baby, Milk, Coffee
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
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
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

export default function PregnancyPage() {
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
        "name": "Noble Dental Pregnancy Care",
        "medicalSpecialty": "Prenatal Dentistry",
        "telephone": "+918610425342",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nallagandla",
            "addressRegion": "Hyderabad"
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-pink-500/30 pt-20">
            <style>{customStyles}</style>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
            />

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-pink-600/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 dark:bg-pink-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-500/20">
                                <Baby size={12} /> Prenatal Oral Wellness
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                                Safe For <br />
                                <span className="gradient-text">Mom &amp; Baby.</span>
                            </h1>

                            {/* Reviewer Pill */}
                            <div className="flex items-center gap-4 py-4">
                                <Link href="/team/dr-dhivakaran" className="ios-glass ios-btn flex items-center gap-3 p-2 pr-6 rounded-full group hover:bg-white/50 dark:hover:bg-white/10">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                                        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Dr. Dhivakaran" fill className="object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase text-pink-600 dark:text-pink-400 font-bold tracking-wider">Approved By</div>
                                        <div className="text-xs font-bold text-slate-900 dark:text-white">Dr. Dhivakaran, MDS</div>
                                    </div>
                                </Link>
                            </div>

                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                                <strong>Pregnancy Gingivitis</strong> is real. Hormones make your gums bleed. We provide <strong>Fetal-Safe Protocols</strong> aligned with ACOG guidelines to protect your health without risking your baby.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="ios-btn px-8 py-4 bg-pink-600 text-white rounded-full font-bold shadow-2xl transition-all flex items-center justify-center gap-2">
                                    <Calendar size={18} /> Book Safe Checkup
                                </button>
                                <div className="flex items-center gap-4 px-6 border-l border-slate-200 dark:border-white/10">
                                    <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">
                                        Safety <br /> Protocol
                                    </div>
                                    <div className="text-2xl font-black text-pink-600 dark:text-white">
                                        100% <span className="text-xs font-bold text-slate-400">Lead-Free</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ios-card-hover aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src="/assets/images/treatments/scaling-hyderabad.webp"
                                    alt="Pregnancy Dental Care"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-1">Gum Health</p>
                                        <h3 className="text-2xl font-bold text-white">Preventing Pre-term Birth</h3>
                                        <p className="text-slate-300 text-sm mt-2">Gum infection is linked to low birth weight. We stop it safely.</p>
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
                        { id: 'overview', label: 'MOM & BABY' },
                        { id: 'truth', label: 'MYTHS VS FACTS' },
                        { id: 'trimester', label: 'TIMELINE' },
                        { id: 'safety', label: 'PROTOCOL' },
                        { id: 'pricing', label: 'COST' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeSection === item.id
                                ? 'bg-pink-600 text-white'
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
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Stop Believing These Dangerous Myths.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Old wives&apos; tales often scare mothers away from necessary care. <br className="hidden md:block" />
                                At Noble Dental, we follow <strong>Scientific Evidence</strong> only.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* MYTHS */}
                        <RevealOnScroll>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-red-100 dark:border-red-900/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <XCircle size={120} className="text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 font-black text-xl">
                                        <X size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Common Myths</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "\"Baby takes calcium from teeth\" (False)",
                                            "\"No dentist visits until delivery\" (Risky)",
                                            "\"Bleeding gums is normal\" (It&apos;s infection)",
                                            "\"X-Rays will harm the baby\" (We use Lead Aprons)"
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

                        {/* FACTS */}
                        <RevealOnScroll>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-green-100 dark:border-green-900/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CheckCircle2 size={120} className="text-green-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 font-black text-xl">
                                        <Check size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Medical Facts</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Hormones cause 'Pregnancy Gingivitis'",
                                            "Untreated gum disease links to Pre-Term Birth",
                                            "2nd Trimester is SAFEST for treatment",
                                            "Lidocaine (Anesthesia) is category B (Safe)"
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

            {/* --- TRIMESTER TIMELINE --- */}
            <section id="trimester" className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">Safety By Trimester</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "1st Trimester", sub: "Months 1-3", icon: Baby, desc: "Baby's organs forming. Avoid elective treatment. Emergency pain relief is okay.", status: "Emergency Only", color: "text-amber-500" },
                            { title: "2nd Trimester", sub: "Months 4-6", icon: ShieldCheck, desc: "Golden Period. Safe for cleanings, fillings, and essential work. Most comfortable time.", status: "Safest Period", color: "text-green-500" },
                            { title: "3rd Trimester", sub: "Months 7-9", icon: Heart, desc: "Uncomfortable to lie back. Short visits only. Postpone major work until after delivery.", status: "Comfort Focus", color: "text-amber-500" }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-3xl hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white">
                                        <item.icon size={28} />
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${item.color} border-current bg-transparent`}>{item.status}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{item.sub}</div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
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
                            <div className="inline-block px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">Transparent Pricing</div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Invest In Safety</h2>
                            <p className="text-slate-600 dark:text-slate-400">Strict medical protocols. No hidden costs.</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* CHECKUP */}
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Essential</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Prenatal Checkup</h3>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-6">₹500</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Gum Health Check</li>
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Oral Hygiene Guide</li>
                            </ul>
                        </div>

                        {/* CLEANING */}
                        <div className="p-8 bg-pink-600 text-white rounded-3xl border border-pink-500 shadow-2xl relative transform md:-translate-y-4">
                            <div className="absolute top-0 center bg-pink-800 text-[10px] font-bold uppercase px-3 py-1 rounded-b-lg">Most Recommended</div>
                            <h3 className="text-xl font-bold text-white mb-4">Perio-Prevention</h3>
                            <div className="text-3xl font-black text-white mb-6">₹2,500 <span className="text-sm font-medium text-pink-200">/session</span></div>
                            <p className="text-sm text-pink-100 mb-6">Deep cleaning to remove bacteria that cause pregnancy gingivitis.</p>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-white flex items-center gap-2"><Check size={14} className="text-pink-300" /> Ultrasonic Scaling</li>
                                <li className="text-xs font-semibold text-white flex items-center gap-2"><Check size={14} className="text-pink-300" /> Safe Polishing</li>
                            </ul>
                        </div>

                        {/* EMERGENCY */}
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Pain Relief</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Safe Treatment</h3>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-6">Variable</div>
                            <ul className="space-y-3">
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Safe Anesthesia</li>
                                <li className="text-xs font-semibold text-slate-500 flex items-center gap-2"><Check size={14} className="text-green-500" /> Lead-Free Environment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section id="faq" className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">Mom&apos;s Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is dental anesthesia safe for my baby?", a: "Yes. We use Lidocaine, which is classified as Category B by the FDA, meaning it is safe for pregnancy. We use the minimum effective dose." },
                            { q: "What if I need an X-Ray?", a: "We avoid X-Rays if possible. If absolutely necessary for an emergency, we use a Digital Sensor (90% less radiation) and a double-layered Lead Apron to completely shield your abdomen/baby." },
                            { q: "Why do my gums bleed when I brush?", a: "This is 'Pregnancy Gingivitis' caused by hormonal changes. It is NOT normal to ignore it. A professional cleaning will reduce the infection and stop the bleeding." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                                    <HelpCircle size={20} className="text-pink-500 shrink-0 mt-0.5" />
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
