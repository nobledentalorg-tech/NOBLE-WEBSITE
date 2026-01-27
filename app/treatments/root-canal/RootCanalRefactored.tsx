'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
   ArrowLeft, Activity, Zap, ShieldCheck, Clock,
   CheckCircle2, AlertTriangle, ChevronRight,
   Eye, Drill, Layers, Siren, Microscope,
   HeartPulse, FileText, Check, X, Thermometer, Phone
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const customStyles = `
  .rc-swiper .swiper-pagination-bullet { background: #8b5cf6; opacity: 0.5; }
  .rc-swiper .swiper-pagination-bullet-active { background: #7c3aed; opacity: 1; width: 24px; border-radius: 4px; }
  .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='https://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"); }
  
  @keyframes pulse-ring {
    0% { transform: scale(0.33); opacity: 1; }
    80%, 100% { transform: scale(1); opacity: 0; }
  }
  .animate-pulse-ring {
    animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }
`;

export default function RootCanalRefactored() {
   const [cleaningProgress, setCleaningProgress] = useState(0);
   const isClean = cleaningProgress >= 100;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // --- INTERACTIVE CLEANING LOGIC ---
   const handleScrub = () => {
      if (cleaningProgress < 100) {
         setCleaningProgress(prev => Math.min(prev + 1.5, 100));
      }
   };

   return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-500 overflow-x-hidden pt-20 bg-noise">
         <style>{customStyles}</style>

         {/* ================= HERO SECTION (PRESERVED) ================= */}
         <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-[#020617] dark:to-[#0f0720] transition-colors">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse duration-[4000ms]"></div>
               <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"></div>
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="absolute top-6 left-6 z-30">
               <Link href="/treatments" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-white/10 transition-all text-[10px] font-bold uppercase tracking-widest group">
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
               </Link>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">

               {/* Left: Content */}
               <div className="space-y-10 order-2 lg:order-1">
                  <RevealOnScroll>
                     <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-8 shadow-lg shadow-purple-500/10">
                        <Activity size={14} /> Precision Root Canal Treatment
                     </div>
                     <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                        Single-Visit <br /> <span className="text-purple-600">Protocols.</span>
                     </h1>

                     {/* Medical Review Tag */}
                     <div className="flex flex-wrap items-center gap-4 my-8 border-y border-slate-100 dark:border-white/5 py-4">
                        <Link href="/team/dr-dhivakaran" className="flex items-center gap-3 group">
                           <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden relative border border-purple-500/30">
                              <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Dr. Dhivakaran" fill className="object-cover" />
                           </div>
                           <div>
                              <div className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 tracking-widest">Medically Reviewed By</div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:underline">Dr. Dhivakaran, CMD</div>
                           </div>
                        </Link>
                     </div>

                     <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg border-l-4 border-purple-500 pl-6 my-10">
                        Advanced Digital Endodontics. <br />
                        Cleaning infection silently and quickly with <strong className="text-purple-600 dark:text-purple-400">Swiss Rotary Technology</strong>.
                     </p>

                     <div className="flex flex-wrap gap-5">
                        <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-purple-600 dark:bg-purple-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-purple-500/30 hover:bg-purple-700 hover:scale-105 transition-all flex items-center gap-3">
                           <Zap size={18} /> Check Pricing
                        </button>
                        <button onClick={() => document.getElementById('protocol')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/10 hover:shadow-lg">
                           <Eye size={16} /> See Workflow
                        </button>
                     </div>
                  </RevealOnScroll>
               </div>

               {/* Right: INTERACTIVE "INFECTION WIPER" */}
               <div className="order-1 lg:order-2 flex justify-center relative">
                  <div className="absolute -inset-10 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>

                  <div
                     className="relative w-full max-w-[350px] h-[500px] bg-slate-50 dark:bg-[#0f1420] rounded-[3rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl group select-none cursor-crosshair"
                     onMouseMove={handleScrub}
                     onTouchMove={handleScrub}
                  >
                     <div className="absolute inset-0 bg-white dark:bg-[#0f1420] flex items-center justify-center">
                        {/* THE TOOTH */}
                        <div className="relative w-72 h-full py-10">
                           <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
                              {/* Tooth Outline */}
                              <path d="M50,50 Q100,20 150,50 Q180,100 170,180 L140,380 Q100,400 60,380 L30,180 Q20,100 50,50"
                                 fill="none" stroke="#94a3b8" strokeWidth="4" className="dark:stroke-slate-600" />

                              {/* Inner Chamber */}
                              <path d="M50,50 Q100,20 150,50 Q180,100 170,180 L140,380 Q100,400 60,380 L30,180 Q20,100 50,50"
                                 fill="#f1f5f9" className="dark:fill-[#1e293b]" opacity="0.5" />

                              {/* Root Canal Space (Mask for Infection) */}
                              <mask id="canalMask">
                                 <path d="M85,80 L75,350 Q100,370 125,350 L115,80 Q100,90 85,80" fill="white" />
                              </mask>

                              {/* 1. The Infection (Red) - Opacity controlled by progress */}
                              <g mask="url(#canalMask)" style={{ opacity: 1 - (cleaningProgress / 100) }}>
                                 <rect x="0" y="0" width="200" height="400" fill="#ef4444" />
                                 {/* Bacteria Dots */}
                                 {[...Array(25)].map((_, i) => (
                                    <circle key={i} cx={70 + Math.random() * 60} cy={100 + Math.random() * 250} r={2 + Math.random() * 5} fill="#7f1d1d" className="animate-pulse" style={{ animationDelay: `${Math.random()}s` }} />
                                 ))}
                              </g>

                              {/* 2. The Clean Canal (Blue/White) - Revealed as infection fades */}
                              <g mask="url(#canalMask)" style={{ opacity: cleaningProgress / 100 }}>
                                 <rect x="0" y="0" width="200" height="400" fill="#dbeafe" className="dark:fill-blue-900" />
                                 <path d="M100,80 L100,350" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6 6" />

                                 {/* Sparkles when clean */}
                                 {isClean && [...Array(5)].map((_, i) => (
                                    <circle key={i} cx={80 + Math.random() * 40} cy={100 + Math.random() * 200} r={2} fill="white" className="animate-ping" style={{ animationDelay: `${Math.random()}s` }} />
                                 ))}
                              </g>
                           </svg>

                           {/* Rotary File Animation (Only visible when cleaning) */}
                           {cleaningProgress > 0 && cleaningProgress < 100 && (
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-40 bg-gradient-to-b from-slate-300 to-slate-500 animate-spin origin-top rounded-full blur-[1px] opacity-80 mix-blend-overlay pointer-events-none"></div>
                           )}
                        </div>
                     </div>

                     {/* UI Overlay */}
                     <div className="absolute bottom-0 w-full p-8 bg-white/90 dark:bg-[#0f1420]/90 backdrop-blur-xl border-t border-slate-200 dark:border-white/10">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                           <span className={isClean ? "text-emerald-500 flex items-center gap-2" : "text-rose-500 flex items-center gap-2"}>
                              {isClean ? <><CheckCircle2 size={12} /> Canal Sterile</> : <><AlertTriangle size={12} className="animate-bounce" /> Infection Detected</>}
                           </span>
                           <span className="dark:text-white">{Math.round(cleaningProgress)}% Cleaned</span>
                        </div>
                        <div className="w-full h-3 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden shadow-inner">
                           <div
                              className={`h-full transition-all duration-100 ${isClean ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-rose-500 to-purple-600'}`}
                              style={{ width: `${cleaningProgress}%` }}
                           ></div>
                        </div>
                        {!isClean && (
                           <p className="text-[10px] text-center mt-4 text-slate-400 font-bold uppercase tracking-widest animate-pulse">
                              Scrub to remove infection
                           </p>
                        )}
                        {isClean && (
                           <div className="mt-4 text-center">
                              <button onClick={() => document.getElementById('protocol')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2 bg-emerald-500 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/20">Proceed to Sealing</button>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* ================= TABLE OF CONTENTS (JUMP LINKS) ================= */}
         <div className="bg-white dark:bg-[#0b101b] border-b border-slate-100 dark:border-white/5 sticky top-0 z-40 shadow-sm backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
            <div className="max-w-7xl mx-auto px-6 py-4">
               <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 shrink-0">Jump To:</span>
                  <div className="flex gap-2">
                     {[
                        { id: 'insight', label: 'Dr. Insight' },
                        { id: 'etiology', label: 'Etiology' },
                        { id: 'symptoms', label: 'Symptoms' },
                        { id: 'safety', label: 'Safety Protocol' },
                        { id: 'protocol', label: 'Noble Process' },
                        { id: 'pricing', label: 'Pricing' },
                        { id: 'faq', label: 'FAQs' }
                     ].map((link) => (
                        <button
                           key={link.id}
                           onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                           className="px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap"
                        >
                           {link.label}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* ================= 1. DR. DHIVAKARAN'S INSIGHT ================= */}
         <section id="insight" className="py-24 bg-white dark:bg-[#0b101b]">
            <div className="max-w-4xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="bg-purple-50 dark:bg-white/5 rounded-[3rem] p-12 border border-purple-100 dark:border-white/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10 text-purple-600">
                        <Activity size={120} />
                     </div>

                     <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Dr. Dhivakaran&apos;s Insight: <span className="text-purple-600">The Myth of Pain</span></h2>

                     <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p className="text-xl italic font-medium text-slate-800 dark:text-white mb-6">
                           &quot;I would rather give birth than have a Root Canal.&quot;
                        </p>
                        <p className="mb-6">
                           I hear this fear all the time. And I understand why. Traditional root canals used to be painful because doctors worked with slow, manual tools.
                        </p>
                        <p className="mb-6">
                           But at Noble Dental, we use <strong className="text-purple-600 dark:text-purple-400">Swiss Rotary Technology</strong>. Imagine trying to cut a tree with a hand saw vs. a laser cutter. That is the difference. Our flexible titanium instruments clean infection silently and quickly, often in a single sitting.
                        </p>
                        <div className="bg-white dark:bg-[#0f1420] p-6 rounded-2xl border border-purple-100 dark:border-white/10 mt-8">
                           <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <ShieldCheck size={18} className="text-emerald-500" /> The CMD Standard
                           </h4>
                           <p className="text-sm">
                              Dr. Dhivakaran (Chief Medical Director) follows a strict &quot;Biological Safety&quot; protocol. We do not treat teeth blindly. We treat the whole patient. Whether you are a busy IT professional from Tellapur or a senior citizen from Aparna Sarovar, our goal is to save your natural tooth using Biomimetic Principles.
                           </p>
                        </div>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 2. ETIOLOGY: ROOT CAUSE ANALYSIS ================= */}
         <section id="etiology" className="py-24 bg-slate-50 dark:bg-[#0f1420]">
            <div className="max-w-7xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="text-center mb-16">
                     <div className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">Etiology</div>
                     <h2 className="text-4xl font-black text-slate-900 dark:text-white">Why is this happening to me?</h2>
                     <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                        To understand the cure, you must understand the cause. The Pulp-Dentin Complex is the living core of your tooth. When bacteria breach this fortress, inflammation begins.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                     {[
                        { title: "Deep Caries (Decay)", desc: "The most common cause. Bacteria penetrate the enamel and dentin, reaching the pulp.", icon: Drill },
                        { title: "Trauma / Concussion", desc: "A fall or sports injury can sever the blood supply, causing slow nerve death (Calcification) years later.", icon: AlertTriangle },
                        { title: "Cracked Tooth Syndrome", desc: "Frequent in Nallagandla’s high-stress population. Clenching your jaw (Bruxism) causes micro-cracks.", icon: Layers },
                        { title: "Retrograde Periodontitis", desc: "A gum infection that travels up from the root tip into the nerve.", icon: Activity },
                        { title: "Iatrogenic Factors", desc: "Thermal trauma from deep fillings done elsewhere without adequate cooling.", icon: Thermometer },
                     ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#151b2b] p-8 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-purple-500/30 transition-all hover:shadow-xl group">
                           <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                              <item.icon size={24} />
                           </div>
                           <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{item.title}</h3>
                           <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 3. SIGNS & SYMPTOMS ================= */}
         <section id="symptoms" className="py-24 bg-white dark:bg-[#0b101b]">
            <div className="max-w-7xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="text-center mb-16">
                     <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Signs & Symptoms</h2>
                     <p className="text-slate-500 dark:text-slate-400">How do we know it&apos;s irreversible?</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                     {/* Subjective */}
                     <div className="bg-purple-50 dark:bg-purple-900/10 p-10 rounded-[2.5rem] border border-purple-100 dark:border-white/5">
                        <h3 className="text-2xl font-black text-purple-900 dark:text-purple-300 mb-8 flex items-center gap-3">
                           <Eye size={24} /> Subjective (What YOU Feel)
                        </h3>
                        <ul className="space-y-6">
                           {[
                              { title: "Nocturnal Pain", desc: "Does the pain wake you up at night? This throbbing pain is the hallmark of Irreversible Pulpitis." },
                              { title: "Lingering Thermal Sensitivity", desc: "Sharp pain to hot coffee or cold water that lasts for more than 10 seconds." },
                              { title: "Referred Pain", desc: "Pain that radiates to your ear, jaw, or head, often making it hard to pinpoint which tooth is hurting." }
                           ].map((item, i) => (
                              <li key={i} className="flex gap-4">
                                 <div className="w-6 h-6 rounded-full bg-purple-200 dark:bg-purple-800 text-purple-700 dark:text-purple-200 flex items-center justify-center font-bold text-xs shrink-0 mt-1">{i + 1}</div>
                                 <div className="text-slate-700 dark:text-slate-300">
                                    <strong className="block text-slate-900 dark:text-white">{item.title}</strong>
                                    <span className="text-sm opacity-80">{item.desc}</span>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Objective */}
                     <div className="bg-slate-50 dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                           <Microscope size={24} /> Objective (What WE See)
                        </h3>
                        <ul className="space-y-6">
                           {[
                              { title: "Tenderness on Percussion", desc: "Sharp pain when we gently tap the tooth." },
                              { title: "Sinus Tract", desc: "A small pimple or boil on the gums that releases a salty taste (pus)." },
                              { title: "Discoloration", desc: "The tooth turning grey or dark." }
                           ].map((item, i) => (
                              <li key={i} className="flex gap-4">
                                 <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs shrink-0 mt-1">{i + 1}</div>
                                 <div className="text-slate-700 dark:text-slate-300">
                                    <strong className="block text-slate-900 dark:text-white">{item.title}</strong>
                                    <span className="text-sm opacity-80">{item.desc}</span>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 4. SAFETY PROTOCOL ================= */}
         <section id="safety" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <RevealOnScroll>
                  <div className="flex flex-col md:flex-row gap-16 items-center">
                     <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                           <HeartPulse size={14} /> Safety First
                        </div>
                        <h2 className="text-4xl font-black mb-6 leading-tight">We check YOU <br /> before we check your tooth.</h2>
                        <p className="text-slate-400 text-lg mb-8">
                           Unlike standard clinics, Noble Dental functions with hospital-grade protocols. Before administering anesthesia, we evaluate your systemic health.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                           <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                              <Activity className="text-emerald-400 shrink-0" />
                              <div>
                                 <div className="font-bold">Diabetes Monitoring</div>
                                 <div className="text-xs text-slate-400">We monitor blood sugar levels as uncontrolled diabetes can delay healing.</div>
                              </div>
                           </div>
                           <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                              <HeartPulse className="text-rose-400 shrink-0" />
                              <div>
                                 <div className="font-bold">Hypertension (BP)</div>
                                 <div className="text-xs text-slate-400">We check BP in-chair. High stress + anesthesia can spike BP, so we use adrenaline-free solutions if needed.</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                           <div className="text-3xl font-black mb-2 text-purple-400">100%</div>
                           <div className="text-xs uppercase tracking-widest opacity-70">Drug Allergy Screening</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                           <div className="text-3xl font-black mb-2 text-blue-400">Zero</div>
                           <div className="text-xs uppercase tracking-widest opacity-70">Adrenaline Risk</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center col-span-2">
                           <div className="text-xl font-bold mb-2">Cardiac Status</div>
                           <div className="text-xs opacity-70">Prophylactic antibiotics for heart conditions if required.</div>
                        </div>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 5. CLINICAL PROCESS (NOBLE PROTOCOL) ================= */}
         <section id="protocol" className="py-24 bg-slate-50 dark:bg-[#0f1420]">
            <div className="max-w-5xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="text-center mb-16">
                     <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">The Noble Protocol</h2>
                     <p className="text-slate-600 dark:text-slate-400">Advanced Digital Endodontics in 45 Minutes.</p>
                  </div>

                  {/* Feature Table */}
                  <div className="grid grid-cols-3 gap-4 mb-16 text-center text-sm border-b border-slate-200 dark:border-white/10 pb-12">
                     <div>
                        <div className="font-bold text-slate-900 dark:text-white mb-1">Noble Dental Standard</div>
                        <div className="text-emerald-500 font-bold flex justify-center items-center gap-1"><CheckCircle2 size={14} /> Strict AAE Protocols</div>
                     </div>
                     <div>
                        <div className="font-bold text-slate-900 dark:text-white mb-1">Precision</div>
                        <div className="text-purple-600 font-bold flex justify-center items-center gap-1"><CheckCircle2 size={14} /> Digital RVG & Rotary</div>
                     </div>
                     <div>
                        <div className="font-bold text-slate-900 dark:text-white mb-1">Success Rate</div>
                        <div className="text-blue-600 font-bold flex justify-center items-center gap-1"><CheckCircle2 size={14} /> 98% Retention</div>
                     </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="space-y-8 relative order-2 lg:order-1">
                        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-white/10 -z-10"></div>
                        {[
                           { step: "1", title: "Pain Management (The \"Ouchless\" Injection)", desc: "We use computer-controlled delivery or fine-gauge needles with Lignocaine 2%. You will feel a scratch, then nothing." },
                           { step: "2", title: "Isolation & Preparation (Rotary Tech)", desc: "We isolate the tooth to prevent saliva contamination. Instead of manual filing, we use Swiss NiTi Rotary Files. These flexible titanium needles navigate curved roots effortlessly." },
                           { step: "3", title: "Laser & Chemical Disinfection", desc: "We use Sodium Hypochlorite (activated by Ultrasonic energy) to dissolve organic debris and kill 99.9% of bacteria deep in the dentinal tubules." },
                           { step: "4", title: "Bio-Seal (3D Obturation)", desc: "We seal the empty space with Bioceramic Sealers and Gutta Percha. This bioactive material promotes bone healing and ensures a hermetic seal." }
                        ].map((item, i) => (
                           <div key={i} className="flex gap-8 items-start">
                              <div className="w-14 h-14 rounded-full bg-white dark:bg-[#151b2b] border-2 border-slate-200 dark:border-white/10 flex items-center justify-center font-black text-xl text-slate-300 dark:text-slate-700 shrink-0">
                                 {item.step}
                              </div>
                              <div className="bg-white dark:bg-[#151b2b] p-6 rounded-2xl border border-slate-100 dark:border-white/5 w-full shadow-sm">
                                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 h-[600px] order-1 lg:order-2 group">
                        <Image
                           src="/assets/images/treatments/rotary-handpiece.png"
                           alt="Swiss Rotary Handpiece"
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 w-full p-8 text-white">
                           <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
                              <Zap size={12} /> Advanced Endodontics
                           </div>
                           <div className="font-bold text-2xl mb-2">Swiss Rotary Technology</div>
                           <div className="text-sm text-slate-300 leading-relaxed">
                              Flexible titanium files that clean infection silently and precisely, preventing the pain associated with traditional manual files.
                           </div>
                        </div>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 6. SINGLE VS MULTI VISIT MATRIX ================= */}
         <section className="py-24 bg-white dark:bg-[#0b101b]">
            <div className="max-w-5xl mx-auto px-6">
               <RevealOnScroll>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">Single vs. Multi-Visit Decision Matrix</h2>
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-100">
                              <th className="p-4 rounded-tl-2xl">Condition</th>
                              <th className="p-4">Protocol</th>
                              <th className="p-4 rounded-tr-2xl">Reasoning</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#151b2b] divide-y divide-slate-100 dark:divide-white/5">
                           <tr>
                              <td className="p-4 font-bold text-slate-900 dark:text-white">Vital Pulp (Sensitivity)</td>
                              <td className="p-4"><span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase">Single Visit</span></td>
                              <td className="p-4 text-sm text-slate-600 dark:text-slate-400">The safest option. Prevents re-infection.</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-bold text-slate-900 dark:text-white">Fractured Tooth</td>
                              <td className="p-4"><span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase">Single Visit</span></td>
                              <td className="p-4 text-sm text-slate-600 dark:text-slate-400">Immediate sealing protects the root.</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-bold text-slate-900 dark:text-white">Acute Abscess (Pus)</td>
                              <td className="p-4"><span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded-full text-xs font-bold uppercase">Multi-Visit</span></td>
                              <td className="p-4 text-sm text-slate-600 dark:text-slate-400">We must drain the pus and place medicine for 3-7 days.</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-bold text-slate-900 dark:text-white">Weeping Canal</td>
                              <td className="p-4"><span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded-full text-xs font-bold uppercase">Multi-Visit</span></td>
                              <td className="p-4 text-sm text-slate-600 dark:text-slate-400">If fluid/blood is oozing, we cannot seal. We wait for dryness.</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 7. RECOVERY ================= */}
         <section className="py-24 bg-slate-50 dark:bg-[#0f1420]">
            <div className="max-w-5xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="grid md:grid-cols-2 gap-12">
                     <div className="bg-white dark:bg-[#151b2b] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                           <Activity className="text-emerald-500" /> Recovery & Pain Management
                        </h3>
                        <p className="mb-4 text-sm font-bold text-slate-700 dark:text-slate-300">We practice &quot;Pre-Emptive Analgesia.&quot;</p>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                           <li className="flex gap-3 items-start"><Check size={16} className="text-emerald-500 shrink-0 mt-1" /> <span>You receive pain relief prescriptions <strong>before</strong> anesthesia wears off.</span></li>
                           <li className="flex gap-3 items-start"><AlertTriangle size={16} className="text-amber-500 shrink-0 mt-1" /> <span>Never take painkillers on an empty stomach.</span></li>
                           <li className="flex gap-3 items-start"><ShieldCheck size={16} className="text-blue-500 shrink-0 mt-1" /> <span>Targeted Antibiotics only if required (Diabetes/Cardiac).</span></li>
                        </ul>
                     </div>
                     <div className="bg-white dark:bg-[#151b2b] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                           <Layers className="text-purple-500" /> The Crown Necessity
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                           A root canal tooth is brittle because it has lost its hydration supply. It is like a dry twig. You must place a Crown (Cap) to act as a &quot;Helmet&quot; and prevent the tooth from shattering under bite pressure.
                        </p>
                        <Link href="/treatments/crowns" className="text-purple-600 font-bold text-sm hover:underline">See Crown Options &rarr;</Link>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 8. PRICING ================= */}
         <section id="pricing" className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
               <RevealOnScroll>
                  <div className="text-center mb-16">
                     <h2 className="text-4xl font-black mb-4">Transparent Pricing</h2>
                     <p className="text-slate-400">Nallagandla Market Rates. Premium digital care at honest neighborhood prices.</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-white/10 order-2 lg:order-1 group">
                        <Image
                           src="/assets/images/treatments/noble-dental-reception.png"
                           alt="Noble Dental Reception Area"
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 w-full p-8">
                           <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
                              <ShieldCheck size={12} /> Premium Facility
                           </div>
                           <div className="font-bold text-xl mb-1">Noble Dental Care, Nallagandla</div>
                           <div className="text-xs text-slate-400 opacity-80">Experience 5-star comfort with hospital-grade sterilization.</div>
                        </div>
                     </div>

                     <div className="order-1 lg:order-2">
                        <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                           {[
                              { name: "Consultation", cost: "₹300 - ₹500", detail: "Includes Medical History Check & Digital X-Ray" },
                              { name: "Anterior RCT", cost: "₹4,500", detail: "Front Teeth / Premolars (Single Canal)" },
                              { name: "Molar RCT", cost: "₹6,000", detail: "Back Teeth (Multi-Rooted / Rotary Tech)" },
                              { name: "Re-Treatment", cost: "₹8,500+", detail: "Correcting failed RCTs from other clinics" },
                              { name: "Metal-Ceramic Crown", cost: "₹3,500+", detail: "5-Year Warranty" },
                              { name: "Zirconia Crown", cost: "₹8,000+", detail: "Metal-Free / 15-Year Warranty (Recommended)" },
                           ].map((item, i) => (
                              <div key={i} className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                 <div className="text-center md:text-left mb-2 md:mb-0">
                                    <div className="font-bold text-lg">{item.name}</div>
                                    <div className="text-xs text-slate-400">{item.detail}</div>
                                 </div>
                                 <div className="font-black text-xl text-emerald-400">{item.cost}</div>
                              </div>
                           ))}
                        </div>
                        <p className="text-center lg:text-left text-xs text-slate-500 mt-6 pl-2">Disclaimer: Final price is determined after X-Ray analysis based on root complexity.</p>
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </section>

         {/* ================= 9. FAQ ================= */}
         <section className="py-24 bg-slate-50 dark:bg-[#0b101b]">
            <div className="max-w-3xl mx-auto px-6">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">Patient FAQs</h2>
               </div>
               <div className="space-y-4">
                  {[
                     { q: "Is it safe for Heart Patients or Diabetics?", a: "Yes. In fact, removing the infection is crucial for your heart and blood sugar control. We coordinate with your cardiologist/physician if blood thinners need to be adjusted." },
                     { q: "What happens if I delay treatment?", a: "The infection will spread to the bone, causing a cyst. In severe cases, it can spread to the neck spaces (Ludwig’s Angina), which is a life-threatening emergency." },
                     { q: "Can I drive back home after the procedure?", a: "Yes. Local anesthesia only numbs the tooth. You will be fully alert and can drive or return to work immediately." },
                     { q: "Why check Vitals before the procedure?", a: "Your safety is paramount. We evaluate your blood pressure and sugar levels (if diabetic) to ensure you can tolerate the procedure safely." }
                  ].map((faq, i) => (
                     <details key={i} className="group bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-300 open:shadow-lg">
                        <summary className="flex items-center justify-between p-6 font-bold text-slate-900 dark:text-white cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5">
                           {faq.q}
                           <ChevronRight className="transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                           {faq.a}
                        </div>
                     </details>
                  ))}
               </div>
            </div>
         </section>

         {/* ================= CTA FOOTER ================= */}
         <div className="max-w-5xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Still in Pain?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
               Use our <strong className="text-purple-600">&quot;Rapid Relief&quot; Slot</strong>. Priority Appointments available before 10 AM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-2 justify-center shadow-xl">
                  <Siren size={18} /> Book Emergency
               </button>
               <button className="px-10 py-5 bg-transparent border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
                  <Phone size={18} /> Call Dr. Dhivakaran
               </button>
            </div>
            <p className="mt-8 text-sm text-slate-400">Opp. Citizens Hospital, Nallagandla.</p>
         </div>

      </div>
   );
}
