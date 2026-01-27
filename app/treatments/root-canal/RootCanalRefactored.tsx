'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
   ArrowLeft, Activity, Zap, ShieldCheck, Clock,
   CheckCircle2, AlertTriangle, ChevronRight,
   Eye, Drill, Layers, Siren, Microscope,
   HeartPulse, FileText, Check, X, Thermometer, Phone,
   Info, Star, Calendar, Sparkles
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const customStyles = `
  .ios-glass {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  .dark .ios-glass {
    background: rgba(15, 20, 32, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .ios-card-hover {
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .ios-card-hover:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
  }

  .ios-btn {
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .ios-btn:active {
    transform: scale(0.95);
    opacity: 0.8;
  }

  /* Wallet Stack Effect */
  .wallet-card {
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
  }
  .wallet-stack:hover .wallet-card {
    transform: translateY(-40px) scale(0.98);
  }
  .wallet-stack:hover .wallet-card:hover {
    transform: translateY(-60px) scale(1) !important;
    z-index: 50;
  }

  /* Activity Ring Animation */
  @keyframes fill-ring {
    from { stroke-dasharray: 0, 100; }
    to { stroke-dasharray: 100, 100; }
  }
  .animate-ring {
    animation: fill-ring 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
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
    background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function RootCanalRefactored() {
   const [cleaningProgress, setCleaningProgress] = useState(0);
   const [activeTab, setActiveTab] = useState('overview');
   const isClean = cleaningProgress >= 100;

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

   // --- INTERACTIVE CLEANING LOGIC ---
   const handleScrub = () => {
      if (cleaningProgress < 100) {
         setCleaningProgress(prev => Math.min(prev + 1.5, 100));
      }
   };

   return (
      <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 overflow-x-hidden pt-20 selection:bg-purple-500/30">
         <style>{customStyles}</style>

         {/* ================= HERO SECTION ================= */}
         <div className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[#F2F2F7] dark:bg-[#000000]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
               <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
            </div>



            <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

               {/* Left: Content */}
               <div className="space-y-8 order-2 lg:order-1">
                  <RevealOnScroll>
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-white/10 backdrop-blur-md text-purple-600 dark:text-purple-400 font-bold text-[11px] uppercase tracking-[0.2em]">
                        <Activity size={12} /> Painless Root Canal Protocol
                     </div>
                     <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                        Precision <br />
                        <span className="gradient-text">Root Canal.</span>
                     </h1>

                     {/* Medical Review Pill */}
                     <div className="flex items-center gap-4 py-6">
                        <Link href="/team/dr-dhivakaran" className="ios-glass ios-btn flex items-center gap-3 p-2 pr-6 rounded-full group hover:bg-white/50 dark:hover:bg-white/10">
                           <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                              <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Dr. Dhivakaran" fill className="object-cover" />
                           </div>
                           <div className="text-left">
                              <div className="text-[10px] uppercase text-purple-600 dark:text-purple-400 font-bold tracking-wider">Reviewer</div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white">Dr. Dhivakaran, CMD</div>
                           </div>
                        </Link>
                     </div>

                     <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-normal max-w-lg -tracking-[0.02em]">
                        As the **Best Dentist in Nallagandla**, **Dr. Dhivakaran** leads our specialized team at **Noble Dental Care Hyderabad**, located **Near Aparna Sarovar / Citizens Hospital**. We specialize in **Microscopic Root Canal Nallagandla** using advanced surgical **Microscopes** and **Laser Root Canal Treatment** protocols for 100% sterilization.
                     </p>

                     <div className="flex flex-wrap gap-4 pt-4">
                        <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="ios-btn px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm tracking-wide shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 flex items-center gap-2">
                           View Pricing
                        </button>
                        <button onClick={() => document.getElementById('insight')?.scrollIntoView({ behavior: 'smooth' })} className="ios-btn px-8 py-4 bg-white dark:bg-[#1C1C1E] text-slate-900 dark:text-white rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2">
                           Medical Insight
                        </button>
                     </div>
                  </RevealOnScroll>
               </div>

               {/* Right: INTERACTIVE "INFECTION WIPER" */}
               <div className="order-1 lg:order-2 flex justify-center relative">
                  <div className="relative w-full max-w-[360px] aspect-[3/5] bg-white dark:bg-[#1C1C1E] rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-none border-[6px] border-slate-100 dark:border-slate-800 overflow-hidden group select-none cursor-crosshair ios-card-hover">
                     {/* Dynamic Island Stylization */}
                     <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50"></div>

                     <div className="absolute inset-0 bg-white dark:bg-[#1C1C1E] flex items-center justify-center pointer-events-none">
                        {/* THE TOOTH */}
                        <div className="relative w-64 h-full py-20 pointer-events-auto" onMouseMove={handleScrub} onTouchMove={handleScrub}>
                           <div className="absolute top-4 left-0 w-full text-center z-10 pointer-events-none">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Interactive Demo</p>
                              <p className="text-xs font-semibold text-slate-900 dark:text-white mt-1">Rub to Disinfect</p>
                           </div>

                           <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
                              <path d="M50,50 Q100,20 150,50 Q180,100 170,180 L140,380 Q100,400 60,380 L30,180 Q20,100 50,50"
                                 fill="none" stroke="#94a3b8" strokeWidth="4" className="dark:stroke-slate-700" />
                              <path d="M50,50 Q100,20 150,50 Q180,100 170,180 L140,380 Q100,400 60,380 L30,180 Q20,100 50,50"
                                 fill="#F2F2F7" className="dark:fill-[#2C2C2E]" opacity="0.5" />
                              <mask id="canalMask">
                                 <path d="M85,80 L75,350 Q100,370 125,350 L115,80 Q100,90 85,80" fill="white" />
                              </mask>
                              {/* Infection */}
                              <g mask="url(#canalMask)" style={{ opacity: 1 - (cleaningProgress / 100) }}>
                                 <rect x="0" y="0" width="200" height="400" fill="#ff3b30" />
                                 {[...Array(20)].map((_, i) => (
                                    <circle key={i} cx={70 + Math.random() * 60} cy={100 + Math.random() * 250} r={3} fill="#990000" />
                                 ))}
                              </g>
                              {/* Clean */}
                              <g mask="url(#canalMask)" style={{ opacity: cleaningProgress / 100 }}>
                                 <rect x="0" y="0" width="200" height="400" fill="#34C759" className="dark:fill-blue-500" />
                                 <path d="M100,80 L100,350" stroke="white" strokeWidth="3" strokeDasharray="4 4" opacity="0.5" />
                              </g>
                           </svg>
                        </div>
                     </div>

                     {/* iOS Status Bar Bottom */}
                     <div className="absolute bottom-0 w-full p-6 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border-t border-slate-100 dark:border-white/5">
                        <div className="flex items-center justify-between mb-3">
                           <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${isClean ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></span>
                              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                 {isClean ? 'Sterilized' : 'Infection Detected'}
                              </span>
                           </div>
                           <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">{Math.round(cleaningProgress)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                           <div className={`h-full transition-all duration-200 ${isClean ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${cleaningProgress}%` }}></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* --- STICKY NAV --- */}
         <nav className="sticky-nav">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8 overflow-x-auto no-scrollbar">
               {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'insight', label: 'Insight' },
                  { id: 'steps', label: 'Process' },
                  { id: 'pricing', label: 'Pricing' },
                  { id: 'faq', label: 'FAQ' }
               ].map((tab) => (
                  <a
                     key={tab.id}
                     href={`#${tab.id}`}
                     className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeTab === 'insight' // Temp fix, need state for this page too
                        ? 'text-slate-400 hover:text-slate-900 dark:hover:text-white' // We'll need to hook up activeTab properly later, for now just static styling
                        : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                  >
                     {tab.label}
                  </a>
               ))}
            </div>
         </nav>

         {/* ================= 1.2 DR. INSIGHT: APP STORE STORY ================= */}
         <section id="insight" className="py-12 bg-[#F2F2F7] dark:bg-[#000000]">
            <div className="max-w-4xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="ios-glass rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                     <div className="relative h-[500px] w-full">
                        <Image
                           src="/assets/images/treatments/noble-dental-reception.png"
                           alt="Modern Endodontics"
                           fill
                           className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                     </div>
                     <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500 text-white font-bold text-[10px] uppercase tracking-widest mb-4">
                           Editor&apos;s choice
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                           The Myth of <br /> &quot;Instant&quot; Pain.
                        </h2>
                        <div className="space-y-4 max-w-2xl">
                           <p className="text-white/90 text-lg leading-relaxed italic">
                              &quot;The #1 fear patients have isn&apos;t the infection—it&apos;s the treatment itself. As a leading **Dental Clinic in Nallagandla** located **Near Aparna Sarovar / Citizens Hospital**, we have redefined the patient experience. At Noble Dental, we ensure a **Painless Root Canal** experience by utilizing computer-controlled anesthesia and Swiss Rotary files. Our expertise in **Microscopic Root Canal Nallagandla** and **Laser Root Canal Treatment** ensures that we save teeth that others might extract. In 2024, **Root Canal Treatment in Nallagandla** should be as routine and comfortable as a simple filling.&quot;
                           </p>
                           <div className="flex items-center gap-3 pt-4">
                              <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden">
                                 <Image src="/images/dhivakaran.webp" alt="Dr. Dhivakaran" width={48} height={48} />
                              </div>
                              <div>
                                 <p className="text-white font-bold text-sm">Dr. Dhivakaran, CMD</p>
                                 <p className="text-white/60 text-[10px] uppercase tracking-widest font-black">Best Dentist in Nallagandla</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 1.3 QUICK NAVIGATION ================= */}
         <section className="py-6 sticky top-20 z-40">
            <div className="max-w-4xl mx-auto px-6">
               <div className="ios-glass flex items-center gap-2 p-2 rounded-full overflow-x-auto hide-scrollbar shadow-lg border-white/20 dark:border-white/5">
                  {[
                     { name: "Insight", id: "insight", icon: Microscope },
                     { name: "Symptoms", id: "symptoms", icon: Activity },
                     { name: "Safety", id: "safety", icon: ShieldCheck },
                     { name: "Protocol", id: "protocol", icon: Layers },
                     { name: "Pricing", id: "pricing", icon: Zap },
                     { name: "FAQ", id: "faq", icon: Info }
                  ].map((item, i) => (
                     <button
                        key={i}
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all whitespace-nowrap"
                     >
                        <item.icon size={14} />
                        {item.name}
                     </button>
                  ))}
               </div>
            </div>
         </section>

         {/* ================= 2. ETIOLOGY: BENTO GRID WIDGETS ================= */}
         <section id="etiology" className="py-24 bg-[#F2F2F7] dark:bg-[#000000]">
            <div className="max-w-[1200px] mx-auto px-6">
               <RevealOnScroll>
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                     <div>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">The Root Cause.</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Why is this happening to you?</p>
                     </div>
                     <Link href="/contact" className="ios-btn px-6 py-2 bg-slate-200 dark:bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-300 dark:hover:bg-white/20 transition-colors">
                        Book Checkup
                     </Link>
                  </div>

                  {/* BENTO GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                     {/* Large Widget: Deep Caries */}
                     <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#1C1C1E] rounded-[2.5rem] p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-500 group overflow-hidden relative border border-slate-100 dark:border-black">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                           <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-6">
                              <Drill size={28} />
                           </div>
                           <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Deep Decay</h3>
                           <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                              The most common culprit. Bacteria penetrate enamel and dentin, reaching the pulp chamber where nerves reside. This causes irreversible inflammation and excruciating toothache, especially at night.
                           </p>
                        </div>
                        <div className="mt-8 relative h-40 w-full bg-slate-50 dark:bg-black/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5">
                           <Image src="/assets/images/treatments/root-canal-decay.jpg" alt="Decay" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                     </div>

                     {/* Medium Widget: Trauma */}
                     <div className="md:col-span-2 bg-slate-900 dark:bg-[#2C2C2E] rounded-[2.5rem] p-8 text-white flex items-center justify-between shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative z-10 max-w-[60%]">
                           <div className="flex items-center gap-2 mb-2 text-blue-300 font-bold uppercase text-xs tracking-widest">
                              <AlertTriangle size={12} /> External Injury
                           </div>
                           <h3 className="text-2xl font-bold mb-2 tracking-tight">Trauma</h3>
                           <p className="text-slate-300 text-sm">Sports injuries or falls can sever blood supply, causing silent nerve death years later.</p>
                        </div>
                        <div className="relative z-10 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                           <Activity size={40} className="text-blue-400" />
                        </div>
                     </div>

                     {/* Small Widget: Cracks */}
                     <div className="col-span-1 bg-white dark:bg-[#1C1C1E] rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-sm border border-slate-100 dark:border-black ios-card-hover">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 rotate-3 group-hover:rotate-0 transition-transform">
                           <Layers size={24} />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cracked Teeth</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">Micro-cracks allowing bacterial ingress into the pulp chamber.</p>
                     </div>

                     {/* Small Widget: Retreatment */}
                     <div className="col-span-1 bg-white dark:bg-[#1C1C1E] rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-sm border border-slate-100 dark:border-black ios-card-hover">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-4 -rotate-3 group-hover:rotate-0 transition-transform">
                           <HeartPulse size={24} />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Retreatment</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">Fixing failed root canals from other clinics where canals weren&apos;t fully cleaned.</p>
                     </div>

                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 3. SYMPTOMS: NOTALIFICATIONS STACK ================= */}
         <section id="symptoms" className="py-24 bg-white dark:bg-[#1C1C1E]">
            <div className="max-w-[1000px] mx-auto px-6">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Symptoms</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2">Signs that demand attention.</p>
               </div>

               <div className="grid md:grid-cols-2 gap-16">
                  {/* PHONE MOCKUP FOR SUBJECTIVE */}
                  <div className="relative">
                     <div className="bg-[#F2F2F7] dark:bg-black rounded-[3rem] p-6 border-[8px] border-slate-200 dark:border-slate-800 h-[500px] overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-200/50 to-transparent z-10 pointer-events-none"></div>

                        <div className="space-y-4 mt-8">
                           {/* Notification 1 */}
                           <div className="ios-glass p-4 rounded-2xl flex gap-4 items-start shadow-sm transform hover:scale-105 transition-transform cursor-default">
                              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white shrink-0">
                                 <Activity size={20} />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-xs text-slate-900 dark:text-white">Pain Alert</span>
                                    <span className="text-[10px] text-slate-400">Now</span>
                                 </div>
                                 <h4 className="font-bold text-sm text-slate-900 dark:text-white">Nocturnal Pain</h4>
                                 <p className="text-xs text-slate-500 leading-snug">Waking up at night with throbbing pain? This is a classic sign of pulpitis.</p>
                              </div>
                           </div>

                           {/* Notification 2 */}
                           <div className="ios-glass p-4 rounded-2xl flex gap-4 items-start shadow-sm transform hover:scale-105 transition-transform cursor-default opacity-90">
                              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0">
                                 <Thermometer size={20} />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-xs text-slate-900 dark:text-white">Sensitivity</span>
                                    <span className="text-[10px] text-slate-400">2m ago</span>
                                 </div>
                                 <h4 className="font-bold text-sm text-slate-900 dark:text-white">Lingering Cold/Hot</h4>
                                 <p className="text-xs text-slate-500 leading-snug">Pain that lingers for 10+ seconds after drinking hot coffee or cold water.</p>
                              </div>
                           </div>

                           {/* Notification 3 */}
                           <div className="ios-glass p-4 rounded-2xl flex gap-4 items-start shadow-sm transform hover:scale-105 transition-transform cursor-default opacity-80">
                              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
                                 <Info size={20} />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-xs text-slate-900 dark:text-white">Referred Pain</span>
                                    <span className="text-[10px] text-slate-400">1h ago</span>
                                 </div>
                                 <h4 className="font-bold text-sm text-slate-900 dark:text-white">Radiating Ache</h4>
                                 <p className="text-xs text-slate-500 leading-snug">Pain spreading to your ear, jaw, or head.</p>
                              </div>
                           </div>
                        </div>
                        <div className="absolute bottom-8 left-0 w-full text-center text-xs font-bold text-slate-400">Subjective Symptoms</div>
                     </div>
                  </div>

                  {/* CONTROL CENTER FOR OBJECTIVE */}
                  <div className="space-y-6 flex flex-col justify-center">
                     <div className="bg-slate-50 dark:bg-[#2C2C2E] p-8 rounded-3xl border border-slate-100 dark:border-black">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <Microscope className="text-purple-500" /> Clinical Signs
                        </h3>
                        <div className="grid gap-4">
                           <div className="flex items-center justify-between p-4 bg-white dark:bg-black/20 rounded-2xl">
                              <span className="font-medium text-slate-700 dark:text-slate-300">TTP (Percussion)</span>
                              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full text-xs font-bold">Positive</span>
                           </div>
                           <div className="flex items-center justify-between p-4 bg-white dark:bg-black/20 rounded-2xl">
                              <span className="font-medium text-slate-700 dark:text-slate-300">Swelling / Pus</span>
                              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full text-xs font-bold">Visible</span>
                           </div>
                           <div className="flex items-center justify-between p-4 bg-white dark:bg-black/20 rounded-2xl">
                              <span className="font-medium text-slate-700 dark:text-slate-300">Discoloration</span>
                              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-full text-xs font-bold">Darkening</span>
                           </div>
                        </div>
                     </div>
                     <p className="text-sm text-slate-500 dark:text-slate-400 pl-4">
                        *These are objective signs we look for during your examination using digital RVG X-Rays.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* ================= 4. SAFETY: HEALTH APP ACTIVITY RINGS ================= */}
         <section id="safety" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 bg-[#000000]">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px]"></div>
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
               <RevealOnScroll>
                  <div className="flex flex-col md:flex-row items-center gap-12">
                     <div className="md:w-1/2">
                        <h2 className="text-5xl font-black mb-6 tracking-tight">Systems <br /><span className="text-emerald-500">Check.</span></h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                           We treat the patient, not just the tooth. Our safety protocols mirror hospital standards, checking your systemic health before any procedure.
                        </p>
                        <div className="flex gap-4">
                           <div className="flex flex-col gap-1">
                              <span className="text-3xl font-black text-white">0%</span>
                              <span className="text-xs uppercase tracking-widest text-slate-500">Adrenaline Risk</span>
                           </div>
                           <div className="w-px bg-slate-800 h-12"></div>
                           <div className="flex flex-col gap-1">
                              <span className="text-3xl font-black text-white">100%</span>
                              <span className="text-xs uppercase tracking-widest text-slate-500">Allergy Screened</span>
                           </div>
                        </div>
                     </div>

                     {/* RINGS VISUALIZATION using SVGs */}
                     <div className="md:w-1/2 flex justify-center scale-110">
                        <div className="relative w-64 h-64">
                           {/* Outer Ring - Diabetes */}
                           <svg className="absolute inset-0 w-full h-full -rotate-90">
                              <circle cx="128" cy="128" r="120" stroke="#1c1c1e" strokeWidth="20" fill="none" />
                              <circle cx="128" cy="128" r="120" stroke="#EF4444" strokeWidth="20" fill="none" strokeDasharray="628" strokeDashoffset="100" strokeLinecap="round" className="animate-[fill-ring_1.5s_ease-out_forwards]" />
                           </svg>
                           {/* Middle Ring - BP */}
                           <svg className="absolute inset-0 w-full h-full -rotate-90 scale-75">
                              <circle cx="128" cy="128" r="120" stroke="#1c1c1e" strokeWidth="20" fill="none" />
                              <circle cx="128" cy="128" r="120" stroke="#34D399" strokeWidth="20" fill="none" strokeDasharray="628" strokeDashoffset="150" strokeLinecap="round" className="animate-[fill-ring_1.5s_ease-out_0.3s_forwards]" />
                           </svg>
                           {/* Inner Ring - Cardiac */}
                           <svg className="absolute inset-0 w-full h-full -rotate-90 scale-50">
                              <circle cx="128" cy="128" r="120" stroke="#1c1c1e" strokeWidth="20" fill="none" />
                              <circle cx="128" cy="128" r="120" stroke="#3B82F6" strokeWidth="20" fill="none" strokeDasharray="628" strokeDashoffset="50" strokeLinecap="round" className="animate-[fill-ring_1.5s_ease-out_0.6s_forwards]" />
                           </svg>

                           {/* Legends floating */}
                           <div className="absolute -right-12 top-0 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-red-400">Diabetes</div>
                           <div className="absolute -left-12 bottom-12 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400">Hypertension</div>
                           <div className="absolute -right-4 bottom-0 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-400">Cardiac</div>
                        </div>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 5. NOBLE PROTOCOL: APP STORE STORY ================= */}
         <section id="protocol" className="py-24 bg-[#F2F2F7] dark:bg-[#000000]">
            <div className="max-w-[1000px] mx-auto px-6">
               <div className="text-center mb-20">
                  <p className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs mb-2">The Clinical Workflow</p>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight italic uppercase">Single Sitting <br /> Root Canal.</h2>
               </div>

               <div className="space-y-12 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 -z-10 md:-translate-x-1/2"></div>

                  {[
                     { step: "01", title: "Ouchless Injection", desc: "Computer-controlled local anesthesia (Lignocaine 2%) ensures you feel absolutely nothing but a scratch.", icon: Activity },
                     { step: "02", title: "Isolation", desc: "Rubber dam application shields your tooth from saliva and bacteria. A critical step often skipped elsewhere.", icon: ShieldCheck },
                     { step: "03", title: "Rotary Cleaning", desc: "Swiss NiTi files (EdgeEndo/Dentsply) navigate curved roots silently, removing infection without the scraping sound of manual files.", icon: Zap, image: "/assets/images/treatments/rotary-handpiece.png" },
                     { step: "04", title: "3D Obturation", desc: "Bioceramic sealers flow into every micro-channel, creating a hermetic seal that promotes bone healing.", icon: CheckCircle2 }
                  ].map((item, i) => (
                     <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Icon Marker */}
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1C1C1E] border-4 border-[#F2F2F7] dark:border-black shadow-lg flex items-center justify-center relative z-10 shrink-0">
                           <item.icon size={20} className="text-slate-900 dark:text-white" />
                        </div>

                        {/* Card */}
                        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 flex-1 w-full border border-slate-100 dark:border-white/5 overflow-hidden">
                           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Step {item.step}</div>
                           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                           <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm mb-4">{item.desc}</p>
                           {item.image && (
                              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/50">
                                 <Image src={item.image} alt={item.title} fill className="object-contain p-4 group-hover:scale-105 transition-transform" />
                              </div>
                           )}
                        </div>

                        {/* Empty flexible space for the other side */}
                        <div className="flex-1 hidden md:block"></div>
                     </div>
                  ))}
               </div>

               {/* DECISION MATRIX - RESTORED */}
               <div className="mt-24 RevealOnScroll">
                  <div className="ios-glass p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/5">
                     <div className="flex items-center gap-3 mb-8">
                        <FileText className="text-purple-500" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Clinical Decision Matrix</h3>
                     </div>
                     <div className="overflow-x-auto hide-scrollbar">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="border-b border-slate-200 dark:border-white/10">
                                 <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest">Protocol Type</th>
                                 <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest">When it&apos;s chosen</th>
                                 <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest">Noble Advantage</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                              <tr>
                                 <td className="py-6">
                                    <p className="font-bold text-slate-900 dark:text-white">Single-Visit RCT</p>
                                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wide">Vital Pulp</p>
                                 </td>
                                 <td className="py-6 text-sm text-slate-500 dark:text-slate-400">Irreversible pulpitis in vital teeth without peri-apical infection. Our **Endodontist in Nallagandla** performs this in 45 mins.</td>
                                 <td className="py-6 text-sm font-medium text-slate-900 dark:text-white">45-min precision using dedicated Endo-Motor and **Laser Root Canal Treatment** disinfection.</td>
                              </tr>
                              <tr>
                                 <td className="py-6">
                                    <p className="font-bold text-slate-900 dark:text-white">Multi-Visit RCT</p>
                                    <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wide">Pus/Abscess</p>
                                 </td>
                                 <td className="py-6 text-sm text-slate-500 dark:text-slate-400">Severely infected teeth, pus discharge, or failing old RCTs. Best managed by a specialist **Endodontist in Nallagandla**.</td>
                                 <td className="py-6 text-sm font-medium text-slate-900 dark:text-white">Inter-appointment Calcium Hydroxide medication with microscopic verification.</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ================= 6. PRICING: WALLET PASSES ================= */}
         <section id="pricing" className="py-24 bg-[#F2F2F7] dark:bg-[#000000] overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-purple-200">
                     Root Canal Cost in Hyderabad
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 italic uppercase">Transparent <br /> Investment.</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                     Understanding the **Dental Cap / Crown Cost** and **Root Canal Treatment in Nallagandla** is essential for informed care. At Noble Dental, we provide honest, market-standard rates for premium **Micro-Endodontics**.
                  </p>

                  {/* Glassmorphism Feature List */}
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5">
                        <CheckCircle2 className="text-emerald-500" />
                        <span className="font-bold text-slate-700 dark:text-slate-300">No Hidden Consumable Charges</span>
                     </div>
                     <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5">
                        <ShieldCheck className="text-purple-500" />
                        <span className="font-bold text-slate-700 dark:text-slate-300">15-Year Warranty on Zirconia</span>
                     </div>
                     <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5">
                        <Calendar className="text-blue-500" />
                        <span className="font-bold text-slate-700 dark:text-slate-300">0% Interest EMI Available</span>
                     </div>
                  </div>
               </div>

               {/* WALLET STACK */}
               <div className="relative h-[600px] flex items-center justify-center wallet-stack perspective-[1000px]">
                  {[
                     { name: "Consultation", price: "₹300", color: "bg-blue-500", top: "top-0", z: "z-10" },
                     { name: "Single Sitting RCT", price: "₹4,500", sub: "Pain Relief Focus", color: "bg-purple-600", top: "top-16", z: "z-20" },
                     { name: "Molar Root Canal", price: "₹6,000", sub: "Root Canal Cost in Hyderabad", color: "bg-slate-900", top: "top-32", z: "z-30" },
                     { name: "Zirconia Crown", price: "₹8,000", sub: "Dental Cap / Crown Cost", color: "bg-emerald-600", top: "top-48", z: "z-40" }
                  ].map((card, i) => (
                     <div
                        key={i}
                        className={`absolute w-80 h-48 rounded-3xl p-6 text-white shadow-2xl wallet-card cursor-pointer group ${card.color} ${card.top} ${card.z} left-1/2 -translate-x-1/2`}
                     >
                        <div className="flex justify-between items-start mb-8">
                           <div className="text-sm font-medium opacity-80">Noble Pass</div>
                           <Activity size={20} className="opacity-80" />
                        </div>
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-2xl font-bold tracking-tight">{card.name}</div>
                              {card.sub && <div className="text-xs opacity-70 mt-1">{card.sub}</div>}
                           </div>
                           <div className="text-2xl font-bold">{card.price}</div>
                        </div>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                     </div>
                  ))}
                  <div className="absolute bottom-10 text-xs text-slate-400 text-center w-full">
                     Hover to expand pricing cards
                  </div>
               </div>
            </div>

            {/* Neo AI CTA - Full Width */}
            <div className="max-w-[1200px] mx-auto px-6 mt-12 text-center pb-12">
               <Link href="/cost-estimator" className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-white/10 rounded-full border border-purple-200 dark:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white">
                     <Sparkles size={14} className="animate-pulse" />
                  </div>
                  <div className="text-left">
                     <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Not sure which plan?</div>
                     <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">Let Neo AI analyze your symptoms &rarr;</div>
                  </div>
               </Link>
            </div>
         </section>

         {/* ================= 7. FAQ: SETTINGS MENU STYLE ================= */}
         <section id="faq" className="py-24 bg-white dark:bg-[#1C1C1E]">
            <div className="max-w-[700px] mx-auto px-6">
               <h2 className="text-3xl font-black text-center mb-12 text-slate-900 dark:text-white tracking-tight">Common Questions</h2>

               <div className="bg-[#F2F2F7] dark:bg-black rounded-2xl overflow-hidden divide-y divide-slate-300 dark:divide-slate-800 border border-slate-200 dark:border-slate-800">
                  {[
                     { q: "Is Root Canal Treatment in Nallagandla painful?", a: "No. At Noble Dental Care, we specialize in **Painless Root Canal** therapy. Using computer-controlled injections and advanced numbing agents, most patients feel nothing more than a slight pressure during the procedure." },
                     { q: "What is a Single Sitting Root Canal?", a: "A **Single Sitting Root Canal** is a high-precision procedure where the entire endodontic therapy is completed in one visit of about 45-60 minutes. This is ideal for busy IT professionals in Nallagandla." },
                     { q: "Do you have a specialist Endodontist in Nallagandla?", a: "Yes. Our team includes an expert **Endodontist in Nallagandla** who handles complex retreats and **Microscopic Root Canal Nallagandla** cases to ensure the best possible success rates." },
                     { q: "What determines the Root Canal Cost in Hyderabad?", a: "The cost depends on the number of roots (Anterior vs Molar) and whether it's a first-time treatment or a retreatment. We provide transparent estimates for both the procedure and the **Dental Cap / Crown Cost**." },
                     { q: "Why choose Dr. Dhivakaran for my treatment?", a: "As the **Best Dentist in Nallagandla**, Dr. Dhivakaran uses **Microscopic Root Canal Nallagandla** and Swiss technology to ensure a 98% success rate in saving natural teeth." }
                  ].map((item, i) => (
                     <details key={i} className="group bg-white dark:bg-[#1C1C1E] open:bg-slate-50 dark:open:bg-[#2C2C2E] transition-colors cursor-pointer">
                        <summary className="flex items-center justify-between p-5 text-slate-900 dark:text-white font-semibold select-none list-none">
                           <span>{item.q}</span>
                           <ChevronRight size={16} className="text-slate-400 group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="px-5 pb-5 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                           {item.a}
                        </div>
                     </details>
                  ))}
               </div>
            </div>
         </section>

         {/* ================= CTA FOOTER ================= */}
         <div className="py-20 bg-[#F2F2F7] dark:bg-black border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-6 text-center">
               <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400">
                  <Siren size={32} />
               </div>
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight uppercase italic">Emergency Pain Relief.</h2>
               <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed font-medium">
                  If you are searching for a **Dental Clinic in Nallagandla** located **Near Aparna Sarovar / Citizens Hospital** for an emergency **Root Canal Treatment in Nallagandla**, we can help. **Dr. Dhivakaran** and his team reserve slots for rapid pain relief daily.
               </p>
               <div className="flex gap-4 justify-center">
                  <button className="ios-btn px-8 py-3 bg-red-500 text-white rounded-full font-bold text-sm shadow-lg shadow-red-500/30">
                     Emergency Appointment
                  </button>
                  <button className="ios-btn px-8 py-3 bg-white dark:bg-[#1C1C1E] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-bold text-sm">
                     Call Noble Dental Care
                  </button>
               </div>
               <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Noble Dental Care Hyderabad | Your Neighborhood Expert</p>
            </div>
         </div>

      </div>
   );
}
