"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight, CheckCircle2, XCircle, Clock, Shield, ShieldCheck, Star,
    Sparkles, Award, Zap, ChevronDown, ChevronUp, AlertCircle, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RevealOnScroll } from '@/components/RevealOnScroll';

// --- ICONS & ASSETS ---
const HERO_IMAGE = "/assets/images/treatments/whitening-hyderabad.webp"; // Ensure this exists from data
// Fallback if not exists, user can update.

// --- DATA: TEETH WHITENING SPECIFIC ---
// (Hardcoded here for the "Gold Standard" vibe, or could be passed as props. 
// Hardcoding allows precise control over the copy for this specific layout).

const SYMPTOMS = [
    {
        id: 'coffee',
        title: "The &apos;Coffee&apos; Smile",
        desc: "Dark brown stains stuck in the micropores of your enamel.",
        icon: <div className="text-3xl">☕</div>,
        color: "bg-amber-100 border-amber-200 text-amber-800"
    },
    {
        id: 'age',
        title: "Natural Ageing",
        desc: "Enamel thins over time, revealing the yellow dentin underneath.",
        icon: <div className="text-3xl">⏳</div>,
        color: "bg-yellow-50 border-yellow-200 text-yellow-700"
    },
    {
        id: 'fluorosis',
        title: "Fluorosis Spots",
        desc: "Chalky white or brown patches from excess fluoride in childhood.",
        icon: <div className="text-3xl">🦷</div>,
        color: "bg-stone-100 border-stone-200 text-stone-600"
    },
    {
        id: 'smoking',
        title: "Tobacco Stains",
        desc: "Stubborn yellow/black tar deposits that brushing can't remove.",
        icon: <div className="text-3xl">🚬</div>,
        color: "bg-gray-200 border-gray-300 text-gray-700"
    }
];

const PRICE_COMPARISON = [
    {
        item: "Safety Protocol",
        noble: "Gum Barrier & Retractors",
        others: "None (High Burn Risk)",
        isCheck: true
    },
    {
        item: "Whitening Agent",
        noble: "Philips Zoom (Medical Grade)",
        others: "Generic Bleach / Charcoal",
        isCheck: true
    },
    {
        item: "Sensitivity",
        noble: "Low (ACP Relief Gel)",
        others: "High (Zinging Pain)",
        isCheck: true
    },
    {
        item: "Longevity",
        noble: "12 - 24 Months",
        others: "2 - 4 Weeks",
        isCheck: false
    },
    {
        item: "Estimated Cost",
        noble: "₹12,000 - ₹25,000",
        others: "₹1,500 (Home Kits)",
        isCheck: false
    }
];

const FAQS = [
    {
        q: "Will it make my teeth sensitive?",
        a: "It's a common myth. While some temporary sensitivity (zinging) is normal for 24 hours, we use specific desensitizing gels (ACP) before and after. Most patients watch Netflix comfortably during the procedure."
    },
    {
        q: "Does it damage my enamel?",
        a: "Absolutely not. Professional whitening is an oxidation process. It cleans the 'pores' of your teeth. It does NOT strip or etch your enamel layer like lemon juice or charcoal would."
    },
    {
        q: "How long does it last?",
        a: "Typically 1-2 years. However, this depends on your diet (Curry, Coffee, Wine). We provide home-maintenance trays to touch up the results yearly."
    },
    {
        q: "Why is it expensive compared to salon whitening?",
        a: "Salons cannot use medical-grade peroxide. They use weak gels that barely work, or illegal concentrations without gum protection, which burns your tissue. You are paying for safety and guaranteed results."
    }
];

// --- INTERACTIVE COMPONENT: STAIN ERASER ---
// User drags a slider to "clean" a yellow tooth to white.
const InteractiveWhitener = () => {
    const [brightness, setBrightness] = useState(0); // 0 to 100
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        // if (!process.browser) return; // Removed process.browser check for Next.js 13+ comp
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        let clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

        // Calculate percentage simple left-to-right
        let x = clientX - rect.left;
        let p = (x / rect.width) * 100;
        p = Math.max(0, Math.min(100, p));

        // If clicking/dragging, set brightness matching the position or just pure control
        // Better UX: Slider controls the "after" opacity
        setBrightness(p);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
            <div className="text-center mb-4">
                <h3 className="font-bold text-slate-800">Slide to Whiten</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">See the difference 8 shades make</p>
            </div>

            <div
                ref={containerRef}
                className="relative h-64 w-full bg-slate-100 rounded-xl overflow-hidden cursor-crosshair touch-none"
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchEnd={() => setIsDragging(false)}
                onMouseMove={(e) => isDragging && handleMove(e)}
                onTouchMove={(e) => isDragging && handleMove(e)}
                onClick={(e) => handleMove(e)}
            >
                {/* 1. Base Layer: WHITE TOOTH (The Result) */}
                <div className="absolute inset-0 flex items-center justify-center bg-sky-50">
                    <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-xl text-white fill-current">
                        <path d="M60,140 C50,130 40,100 40,70 C40,30 70,10 100,10 C130,10 160,30 160,70 C160,100 150,130 140,140 C130,150 110,160 100,160 C90,160 70,150 60,140 Z" />
                        {/* Shine */}
                        <path d="M110,30 C120,30 130,40 135,50" stroke="white" strokeWidth="4" strokeLinecap="round" className="opacity-50" fill="none" />
                    </svg>
                    <span className="absolute bottom-4 font-bold text-sky-600">AFTER (B1 Shade)</span>
                </div>

                {/* 2. Overlay Layer: YELLOW TOOTH (The Before) - Masked by width */}
                <div
                    className="absolute inset-0 flex items-center justify-center bg-amber-50 border-r-4 border-white shadow-[5px_0_15px_rgba(0,0,0,0.1)] transition-[width] duration-75 ease-linear"
                    style={{ width: `${100 - brightness}%`, overflow: 'hidden' }}
                >
                    {/* We need to keep the content 'fixed' relative to container so it doesn't squash, just getting cropped */}
                    <div className="w-[calc(100vw_-_3rem)] max-w-md h-64 flex items-center justify-center absolute right-0 top-0">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-sm text-yellow-200 fill-current" style={{ filter: 'sepia(1) saturate(2)' }}>
                                <path d="M60,140 C50,130 40,100 40,70 C40,30 70,10 100,10 C130,10 160,30 160,70 C160,100 150,130 140,140 C130,150 110,160 100,160 C90,160 70,150 60,140 Z" />
                                {/* Stains */}
                                <circle cx="80" cy="60" r="5" className="fill-yellow-600 opacity-40" />
                                <circle cx="120" cy="90" r="8" className="fill-yellow-600 opacity-30" />
                                <circle cx="90" cy="110" r="6" className="fill-yellow-600 opacity-40" />
                            </svg>
                            <span className="absolute bottom-4 font-bold text-yellow-600">BEFORE (A3 Shade)</span>
                        </div>
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                    style={{ left: `${100 - brightness}%` }}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600">
                        <ArrowRight size={14} className={brightness > 50 ? "rotate-180" : ""} />
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                <span>Yellow (A3)</span>
                <span>White (B1)</span>
            </div>

            <p className="mt-4 text-center text-sm text-slate-700 dark:text-slate-300">
                Dragging cleans the stains. <br />
                <span className="text-red-500 font-bold">Zoom Whitening</span> does this in 45 mins.
            </p>
        </div>
    );
};


export default function TeethWhiteningRefactored() {
    const { scrollYProgress } = useScroll();
    const showNav = useTransform(scrollYProgress, [0, 0.1], [false, true]);

    return (
        <div className="min-h-screen bg-white">
            {/* 
        ========================================
        1. HERO SECTION (Dynamic & Bold)
        ========================================
      */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
                {/* Background Image / Noise */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={HERO_IMAGE}
                        alt="Teeth Whitening Hyderabad"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <RevealOnScroll>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <Sparkles size={14} />
                                <span>Cosmetic Excellence</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                                Your Smile <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                                    8 Shades Whiter.
                                </span>
                            </h1>

                            <p className="text-xl text-slate-300 max-w-lg leading-relaxed mb-6">
                                Stop hiding your teeth in photos. Using <strong>Philips Zoom</strong>, we erase years of coffee and tea stains in a single 45-minute session.
                            </p>

                            {/* TRUST SIGNALS */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100/10 border border-blue-200/20">
                                    <Zap size={14} className="text-blue-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-blue-100">Philips Zoom</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/10 border border-emerald-200/20">
                                    <ShieldCheck size={14} className="text-emerald-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-100">Gum Safety</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-100/10 border border-yellow-200/20">
                                    <Clock size={14} className="text-yellow-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-yellow-100">45-Min Result</span>
                                </div>
                            </div>

                            <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-8 border-l-4 border-yellow-500/50 pl-6">
                                <strong>Dr. Dhivakaran</strong> ensures your enamel is protected with medical-grade relief gels, preventing the &quot;zinging&quot; pain of salons.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#book" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-yellow-50 transition-colors flex items-center gap-2">
                                    Book Whitening Session <ArrowRight size={18} />
                                </Link>
                                <button onClick={() => document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-full font-bold transition-colors">
                                    Check Pricing
                                </button>
                            </div>

                            <div className="flex items-center gap-8 pt-8 border-t border-white/10 mt-8">
                                <div>
                                    <div className="text-3xl font-bold text-yellow-400">45</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Minutes</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-yellow-400">100%</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Enamel Safe</div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Side: Interactive Component */}
                    <div className="hidden lg:block relative z-20">
                        <RevealOnScroll delay={200}>
                            <InteractiveWhitener />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* 
        ========================================
        2. STORY HOOK (The "Why")
        ========================================
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <RevealOnScroll>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                            The Truth: <br /><span className="text-red-500">Is your toothpaste lying?</span>
                        </h2>
                        <div className="prose prose-lg mx-auto text-slate-700 dark:text-slate-300 leading-relaxed">
                            <p>
                                We’ve all seen the commercials. &quot;Whitens teeth in 2 weeks!&quot; So you scrub. And you scrub.
                                But your teeth stay yellow. Why?
                            </p>
                            <p>
                                <strong>Because the stain is INSIDE the tooth.</strong>
                            </p>
                            <p className="mb-4">
                                Most whitening toothpastes are just “sandpaper” for your teeth. They scratch off surface dirt, but they can’t touch the deep pigments absorbed into your enamel rods.
                            </p>
                            <p>
                                Even worse, scrubbing too hard wears down your white enamel, revealing specifically the <em>yellow</em> layer (dentin) underneath. You are literally brushing your teeth yellow.
                            </p>
                            <p className="font-bold text-slate-900 text-xl border-l-4 border-yellow-400 pl-6 italic bg-yellow-50 p-4 rounded-r-xl my-8">
                                &quot;True whitening requires a chemical reaction (Oxidation) to release oxygen into the enamel and lift deep stains safely. That is what we do.&quot;
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* 
        ========================================
        3. SYMPTOM DECODER (What do you have?)
        ========================================
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <div className="text-yellow-600 font-bold uppercase tracking-widest mb-2">Diagnosis</div>
                            <h2 className="text-4xl font-bold text-slate-900">Diagnosis: <br /><span className="text-yellow-600">Why are my teeth yellow?</span></h2>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SYMPTOMS.map((s, idx) => (
                            <RevealOnScroll key={s.id} delay={idx * 100}>
                                <div
                                    className={`p-8 rounded-3xl border ${s.color} transition-shadow hover:shadow-xl bg-white`}
                                >
                                    <div className="mb-4">{s.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{s.title}</h3>
                                    <p className="text-sm text-slate-700">{s.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* 
        ========================================
        4. THE WORKFLOW (Timeline)
        ========================================
      */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/2 md:sticky md:top-24">
                            <RevealOnScroll>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    The Process: <br /><span className="text-slate-500 text-3xl">Just sit back and relax.</span>
                                </h2>
                                <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                                    The entire procedure takes less than an hour. Many of our patients listen to podcasts or take a quick nap while the light does the work.
                                </p>

                                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                        <Shield className="text-yellow-400" /> Safety First
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        We don&apos;t just &quot;paint&quot; your teeth. We use a specialized <strong>Gingival Barrier</strong> that hardens over your gums to protect them. This ensures the whitening gel only touches your enamel, preventing gum burns common in salon kits.
                                    </p>
                                </div>
                            </RevealOnScroll>
                        </div>

                        <div className="md:w-1/2 relative space-y-12">
                            {/* Line connecting steps */}
                            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200"></div>

                            {[
                                { title: "Preparation", desc: "We place the cheek retractor and apply the gum barrier.", time: "10 Mins" },
                                { title: "Activation", desc: "The clinical-grade gel is applied.", time: "5 Mins" },
                                { title: "Light Cycle 1", desc: "The Zoom light activates the gel for deep penetration.", time: "15 Mins" },
                                { title: "Light Cycle 2", desc: "We apply fresh gel and repeat for maximum lift.", time: "15 Mins" },
                                { title: "Reveal", desc: "Everything is washed off. You see your new shade instantly.", time: "5 Mins" }
                            ].map((step, idx) => (
                                <RevealOnScroll key={idx} delay={idx * 100}>
                                    <div className="relative flex gap-8 group">
                                        <div className="w-16 h-16 shrink-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-600 group-hover:border-yellow-400 group-hover:text-yellow-500 transition-colors z-10 shadow-sm">
                                            {idx + 1}
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                            <p className="text-slate-700 dark:text-slate-300">{step.desc}</p>
                                            <span className="inline-block mt-2 text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                                                {step.time}
                                            </span>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        ========================================
        5. PRICING TABLE (Gold Standard Transparency)
        ========================================
      */}
            <section id="price" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Transparent Pricing: <br /><span className="text-slate-500 text-2xl">No Hidden Costs.</span></h2>
                            <p className="text-slate-700 dark:text-slate-300">Why &quot;Cheaper&quot; is not better when it comes to Chemistry.</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        {/* 1. Home Kits */}
                        <RevealOnScroll delay={100} className="md:contents">
                            <div className="bg-white p-8 rounded-3xl md:rounded-r-none border border-r-0 border-slate-200 scale-95">
                                <div className="text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider mb-2">Home Kits</div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-6">₹ 1,500+</div>
                                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-400">
                                    <li className="flex gap-2"><XCircle size={16} className="text-red-500" /> Week peroxide%</li>
                                    <li className="flex gap-2"><XCircle size={16} className="text-red-500" /> Irritates gums</li>
                                    <li className="flex gap-2"><XCircle size={16} className="text-red-500" /> Takes 30 days</li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        {/* 2. NOBLE (Highlight) */}
                        <RevealOnScroll className="md:contents">
                            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative z-10 transform md:-translate-y-4 border border-yellow-500/20">
                                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">RECOMMENDED</div>
                                <div className="text-yellow-400 font-bold uppercase tracking-wider mb-2">Noble Medical Whitening</div>
                                <div className="text-4xl font-bold mb-2">₹ 12,000</div>
                                <div className="text-sm text-slate-400 mb-8">*Prices vary by brand (Pola/Zoom)</div>

                                <ul className="space-y-4 font-medium mb-8">
                                    <li className="flex gap-3"><CheckCircle2 className="text-yellow-400" /> <span>8 Shades Lighter (Guaranteed)</span></li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-yellow-400" /> <span>Gum Protection Barrier</span></li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-yellow-400" /> <span>Zero Sensitivity Protocol</span></li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-yellow-400" /> <span>1 Hour Single Visit</span></li>
                                </ul>

                                <Link href="#book" className="block w-full text-center py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-colors">
                                    Book Appointment
                                </Link>
                            </div>
                        </RevealOnScroll>

                        {/* 3. Salons */}
                        <RevealOnScroll delay={200} className="md:contents">
                            <div className="bg-white p-8 rounded-3xl md:rounded-l-none border border-l-0 border-slate-200 scale-95">
                                <div className="text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider mb-2">Salon / Spa</div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-6">₹ 5,000+</div>
                                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-400">
                                    <li className="flex gap-2"><AlertCircle size={16} className="text-amber-600" /> No Doctor Present</li>
                                    <li className="flex gap-2"><XCircle size={16} className="text-red-500" /> Often painful</li>
                                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-slate-700 dark:text-slate-400" /> Moderate results</li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* 
        ========================================
        6. DOCTOR PROFILE
        ========================================
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <RevealOnScroll>
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="relative w-64 h-64 shrink-0 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl">
                                <Image src="/images/dhivakaran.webp" alt="Dr. Dhivakaran" width={64} height={64} className="object-cover" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Your Expert</h2>
                                <div className="text-xl font-bold text-yellow-600 mb-6">Dr. Dhivakaran</div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                                    &quot;I don&apos;t believe in &apos;Hollywood White&apos; veneers for everyone. Sometimes, all you need is to unlock the natural brightness of your own enamel. My approach is conservative: clean the canvas before we paint on it.&quot;
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-800">MDS - Conservative Dentistry</div>
                                    <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-800">14+ Years Exp</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* 
        ========================================
        7. FAQ
        ========================================
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <RevealOnScroll>
                        <h2 className="text-3xl font-bold text-center mb-12">Expert Answers</h2>
                    </RevealOnScroll>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <RevealOnScroll key={i} delay={i * 50}>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:border-yellow-400/50 transition-colors">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                    <p className="text-slate-700">{faq.a}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= INTERNAL LINKING: NEXT STEPS ================= */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Beyond Whitening</p>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Deep Stains? Shape Issues?</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                        If you have intrinsic stains (like tetracycline) or want to change the shape of your teeth, Whitening might not be enough. Veneers are the permanent answer.
                    </p>
                    <Link href="/treatments/veneers" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline">
                        Explore Ceramic Veneers <ChevronRight size={16} />
                    </Link>
                </div>
            </section>

            {/* 
        ========================================
        8. CTA FOOTER
        ========================================
      */}
            <section id="book" className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <RevealOnScroll>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to shine?</h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            No filters needed. Book your 45-minute transformation today.
                        </p>
                        <Link href="/book-appointment" className="inline-block px-12 py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-xl rounded-full transition-transform hover:scale-105 shadow-xl shadow-yellow-400/20">
                            Book Whitening Now
                        </Link>
                        <p className="mt-8 text-sm text-slate-400">
                            100% Satisfaction Guarantee • No Hidden Checks
                        </p>
                    </RevealOnScroll>
                </div>
            </section>
        </div >
    );
}
