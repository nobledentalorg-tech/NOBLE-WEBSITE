'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield, Zap, Activity, Heart, Sparkles,
    ChevronRight, ArrowLeft, Play, Ruler, ShieldCheck,
    Microscope, Info, CheckCircle2, XCircle,
    Stethoscope, Award, Calendar, Headphones,
    AlertCircle, Pill, Syringe, Droplets, Phone,
    Clock, FileText, Calculator, HelpCircle,
    Strikethrough, Flame, Siren, MapPin
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
    background: rgba(255, 0, 0, 0.05);
    border: 1px solid rgba(255, 0, 0, 0.1);
  }
  
  .emergency-pulse {
    animation: emergency-glow 2s infinite;
  }
  @keyframes emergency-glow {
    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
    70% { box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
  }

  .hotline-banner {
    background: linear-gradient(90deg, #ef4444 0%, #991b1b 100%);
  }
`;

export default function EmergencyTraumaRefactored() {
    const [activeTab, setActiveTab] = useState('triage');

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-red-500/30 pt-20">
            <style>{customStyles}</style>

            {/* --- EMERGENCY HOTLINE --- */}
            <div className="hotline-banner py-3 px-6 text-center text-white text-[10px] font-black uppercase tracking-[0.3em] sticky top-20 z-[60] shadow-xl">
                Dental Emergency? Call <a href="tel:+918610425342" className="underline decoration-2 underline-offset-4">+91 86104 25342</a> Immediately
            </div>

            {/* --- HERO SECTION --- */}
            <section id="overview" className="relative min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <RevealOnScroll>
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                                <Siren size={12} className="animate-pulse" /> The Golden Hour
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                                Urgent <br />
                                <span className="text-red-600">Trauma.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                                A knocked-out tooth can be saved if treated within 60 minutes. We provide immediate surgical intervention for dental trauma.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="tel:+918610425342" className="px-10 py-5 bg-red-600 text-white rounded-full font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl emergency-pulse hover:scale-105 active:scale-95">
                                    <Phone size={20} fill="currentColor" /> Call Emergency Line
                                </a>
                                <Link href="/contact" className="px-10 py-5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3">
                                    <MapPin size={20} /> Clinic Map
                                </Link>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative group p-4">
                        <RevealOnScroll>
                            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl ios-card-hover border-4 border-white dark:border-slate-800 aspect-square">
                                <Image
                                    src="/assets/images/treatments/emergency-hyderabad.webp"
                                    alt="Emergency Dental Care Hyderabad"
                                    fill
                                    className="object-cover grayscale"
                                />
                                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay" />
                            </div>
                            {/* Timing Badge */}
                            <div className="absolute -bottom-6 -left-6 ios-glass p-6 rounded-3xl z-20 hidden md:block border border-red-100/40">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">60-Minute Window</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">To Save Knocked-Out Tooth</div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* --- SECTION 1: TRIAGE --- */}
            <section id="triage" className="py-24 bg-slate-50 dark:bg-slate-950/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Emergency Triage Guide</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">What to do right now.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Knocked-Out Tooth",
                                desc: "Pick it up by the crown (not the root). Rinse gently with milk or water. Place back in socket OR keep in a cup of milk and get here in 30 mins.",
                                icon: Zap,
                                action: "Critical"
                            },
                            {
                                title: "Broken / Cracked Tooth",
                                desc: "Rinse with warm water. Use a cold compress on the outside of the cheek for swelling. Find any broken pieces and bring them with you.",
                                icon: Shield,
                                action: "Urgent"
                            },
                            {
                                title: "Severe Facial Swelling",
                                desc: "This indicates an active abscess. Do not wait for the morning as it can compromise your airway. Call the hotline immediately.",
                                icon: Siren,
                                action: "Immediate"
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 ios-glass rounded-[3rem] border border-blue-100/50 dark:border-white/5 space-y-6 group">
                                <div className="flex justify-between items-start">
                                    <div className="w-14 h-14 bg-red-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-red-500/20">
                                        <item.icon size={28} />
                                    </div>
                                    <div className="px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                                        {item.action}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">{item.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: WHY US --- */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                            Qualified for <br /> <span className="text-red-500 italic font-medium">Acute Trauma.</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            Standard dentists are not always equipped for facial trauma. As a Maxillofacial Specialist clinic, we handle bone fractures, soft tissue lacerations, and complex reimplantations.
                        </p>

                        <ul className="grid gap-6">
                            {[
                                "In-house CBCT Imaging for immediate bone analysis.",
                                "Maxillofacial surgical expertise for lip/gum repairs.",
                                "SDR (Stress-Decreasing) pain management protocol.",
                                "Direct coordination with Oral Medicine specialists."
                            ].map((li, i) => (
                                <li key={i} className="flex gap-4 items-center group">
                                    <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="text-lg font-medium text-slate-300">{li}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-12 ios-glass rounded-[4rem] border-2 border-dashed border-red-500/30 bg-red-950/20 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl">
                            <ShieldCheck size={48} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight italic">Zero Wait Policy</h3>
                        <p className="text-lg text-slate-400 italic">&quot;Dental emergencies don&apos;t have business hours. If you are experiencing acute trauma or uncontrolled swelling, you skip the queue. Your health is the only priority.&quot;</p>
                        <div className="mt-8 text-[10px] font-black text-red-500 tracking-widest uppercase">— Dr. Dhivakaran</div>
                    </div>
                </div>
            </section>

            {/* --- FAQ --- */}
            <section id="faq" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20 text-slate-900 dark:text-white uppercase tracking-tighter italic">
                        <h2 className="text-4xl font-black">Pre-Arrival Advice</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "What if I can&apos;t find the tooth?",
                                a: "Come in immediately anyway. We need to check for jaw fractures or root fragments left in the socket. The sooner we clean the wound, the better the healing."
                            },
                            {
                                q: "Should I take Aspirin for the pain?",
                                a: "No. Aspirin is a blood thinner and may cause uncontrolled bleeding. Use Paracetamol (Crocin) or Ibuprofen if you are not allergic and have no medical contraindications."
                            },
                            {
                                q: "Is an emergency visit more expensive?",
                                a: "Trauma visits are billed as 'Consultation + Procedure'. While there might be an emergency surcharge for out-of-hours care, we prioritize stabilizing the patient and saving the tooth above all else."
                            },
                            {
                                q: "Does your clinic have parking?",
                                a: "Yes. We have dedicated emergency parking slots directly in front of the clinic for immediate patient drop-off. Our staff will assist you into the chair."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-8 ios-glass rounded-[2.5rem] border border-slate-100 dark:border-white/5 ios-card-hover group">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex gap-4">
                                    <span className="text-red-600 font-black italic">Q.</span> {faq.q}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed pl-8 text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 bg-red-600 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-white">
                    <RevealOnScroll>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] italic uppercase">
                            Don&apos;t Wait. <br />
                            <span className="text-red-100">Save the Smile.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a href="tel:+918610425342" className="px-12 py-6 bg-white text-red-600 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                                <Phone size={24} fill="currentColor" /> Call Hotline Now
                            </a>
                        </div>
                        <p className="mt-12 text-red-200 font-black text-[10px] uppercase tracking-[0.3em]">
                            24/7 Support for Trauma & Acute Facial Swelling
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
