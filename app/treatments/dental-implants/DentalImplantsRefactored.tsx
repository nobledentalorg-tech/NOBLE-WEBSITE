'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft, ArrowRight, Shield, Award, Activity,
    Check, ScanLine, Cpu, Droplets, Ruler, User,
    Beaker, ShieldCheck, Microscope, Info, Zap,
    TrendingUp, Dna, Layers, Target, ChevronRight, ChevronLeft,
    Sparkles, DollarSign, TrendingDown, AlertCircle, XCircle, Play,
    Bone, Scale, Clock, FileText, Calculator, RefreshCw, ThumbsUp,
    HeartPulse, Brain, Baby, Cigarette, Pill, Thermometer, CheckCircle2,
    AlertTriangle, HelpCircle, Phone, Globe, Calendar, MapPin, Mail, Search, MessageCircle, Siren
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import SchemaFAQ from '@/components/SchemaFAQ';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const customStyles = `
  .implant-swiper .swiper-pagination-bullet { background: #14b8a6; opacity: 0.5; }
  .implant-swiper .swiper-pagination-bullet-active { background: #0d9488; opacity: 1; width: 24px; border-radius: 4px; }
  .clip-path-slant { clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%); }
  .anatomy-layer:hover { transform: translateX(10px) scale(1.02); }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  /* Premium Noise Texture */
  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='https://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  }

  /* Glassmorphism */
  .glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  .dark .glass-panel {
    background: rgba(17, 24, 39, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* Gradient Text Animation */
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 15s ease infinite;
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
`;

export default function DentalImplantsRefactored() {
    const [activeTab, setActiveTab] = useState('bone');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedStep, setSelectedStep] = useState(0);

    const medicalSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Guided Dental Implant Surgery",
        "procedureType": "Surgical",
        "status": "Safe",
        "bodyLocation": "Jawbone",
        "offers": {
            "@type": "Offer",
            "price": "22000",
            "priceCurrency": "INR",
            "description": "Starting price for single implant with crown"
        },
        "performer": {
            "@type": "Dentist",
            "name": "Dr. Dhivakaran",
            "url": "https://nobledentalnallagandla.in/team/dr-dhivakaran"
        }
    };

    const faqs = [
        {
            q: "What is the Dental Implants Cost in Nallagandla?",
            a: "The Tooth Implant Cost Hyderabad patients find varies. At Noble Dental, our Dental Implants in Nallagandla start at ₹22k, including a high-end crown. We believe in providing the best value Near Aparna Sarovar / Citizens Hospital through premium Swiss engineering."
        },
        {
            q: "Why choose Dr. Dhivakaran for Full Mouth Dental Implants?",
            a: "As the Best Dentist in Nallagandla, Dr. Dhivakaran specializes in complex Full Mouth Dental Implants cases using Immediate Loading Implants and All-on-4 Dental Implants where patients can walk out with teeth in 72 hours."
        },
        {
            q: "Do you offer Zygomatic Implants Hyderabad?",
            a: "Yes. For patients with zero bone volume, we provide advanced Zygomatic Implants Hyderabad and Basal Implants Hyderabad. These bypass the need for months of bone grafting, offering a faster Missing Tooth Replacement."
        },
        {
            q: "Titanium vs Zirconia Implants: Which is better?",
            a: "Titanium is the gold standard for bone fusion, while Zirconia is preferred for esthetic zones or metal-free preferences. Our team at this Dental Clinic in Nallagandla will guide you based on your biological needs."
        }
    ];


    const eligibilityCategories = [
        {
            id: 'condition',
            label: 'Condition',
            icon: HeartPulse,
            desc: 'Systemic health & lifestyle impact.',
            questions: [
                { q: "Do you have controlled diabetes (HbA1c < 7.5)?", options: ["Controlled", "Uncontrolled", "No Diabetes"] },
                { q: "Do you smoke regularly?", options: ["Non-Smoker", "Light (<5/day)", "Heavy (>10/day)"] }
            ]
        },
        {
            id: 'bone',
            label: 'Bone Density',
            icon: Bone,
            desc: 'Quality & volume of your jaw foundation.',
            questions: [
                { q: "How long has the tooth been missing?", options: ["Fresh Extraction", "1-6 Months", "1+ Year"] },
                { q: "Have you had a bone graft before?", options: ["Yes", "No", "Not Sure"] }
            ]
        },
        {
            id: 'biometry',
            label: 'Biometry',
            icon: Dna,
            desc: 'Tissue thickness & biological volume.',
            questions: [
                { q: "Do you have thin/fragile gums?", options: ["Thick/Stable", "Thin/Delicate", "Receding"] }
            ]
        }
    ];

    const [userChoices, setUserChoices] = useState<Record<string, string>>({});

    const handleAnswer = (catId: string, qIdx: number, val: string) => {
        setUserChoices(prev => ({ ...prev, [`${catId}-${qIdx}`]: val }));
    };

    const steps = [
        { title: "CBCT Diagnostics", icon: ScanLine, desc: "High-resolution 3D scan to map nerves and bone volume." },
        { title: "3D Planning", icon: Brain, desc: "Virtual surgery simulation to find the exact biological position." },
        { title: "Guided Placement", icon: Target, desc: "Precision placement using customized surgical templates." },
        { title: "Biological Fusion", icon: Clock, desc: "Osseointegration period where bone bonds with titanium." },
        { title: "Digital Impression", icon: Sparkles, desc: "3D scanning for the final ceramic crown—no messy pastes." },
        { title: "Final Restoration", icon: Award, desc: "Permanent tooth fixation for a lifetime of function." }
    ];

    const implantTiers = [
        {
            tier: "Standard",
            brand: "Osstem / Dentium",
            market: "₹45,000+",
            noble: "₹22,000",
            healing: "12 Weeks",
            surface: "SLA / Grade 4 Ti",
            origin: "🇰🇷 South Korea",
            desc: "Highly reliable standard for molar replacements.",
            warranty: "10 Year Warranty",
            style: "border-slate-200"
        },
        {
            tier: "Advanced",
            brand: "Nobel Biocare",
            market: "₹75,000+",
            noble: "₹42,000",
            healing: "8-10 Weeks",
            surface: "TiUnite / Grade 5 Ti",
            origin: "🇸🇪 Sweden",
            desc: "World leader in immediate loading & full mouth cases.",
            warranty: "Lifetime Warranty",
            style: "border-teal-500 shadow-teal-500/20"
        },
        {
            tier: "Elite",
            brand: "Straumann SLActive",
            market: "₹1,10,000+",
            noble: "₹58,000",
            healing: "3-4 Weeks",
            surface: "Roxolid / Hydrophilic",
            origin: "🇨🇭 Switzerland",
            desc: "Active surface for ultra-fast healing and high risk patients.",
            warranty: "Lifetime Support",
            style: "bg-[#0b1019] text-white border-white/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-[#020617] min-h-screen font-sans selection:bg-teal-500/30 selection:text-teal-900 overflow-x-hidden">
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
            />
            <SchemaFAQ faqs={faqs} />

            {/* ================= HERO SECTION ================= */}
            <section id="overview" className="relative min-h-[90vh] flex flex-col pt-32 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-[#050912] dark:to-[#020617]"></div>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
                    <div className="absolute inset-0 bg-noise opacity-30"></div>
                </div>



                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-12 grid lg:grid-cols-2 gap-20 items-center">
                    <RevealOnScroll>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 rounded-full text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 border border-teal-200 dark:border-teal-500/30">
                                <Activity size={12} /> Medical Review v4.2 · 2026 Protocols
                            </div>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
                                Titanium <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 animate-gradient-x uppercase italic">Dental Implants <br /> in Nallagandla.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10 font-medium">
                                Restore your smile with the **Best Dentist in Nallagandla**. At **Noble Dental Care Hyderabad**, located **Near Aparna Sarovar / Citizens Hospital**, **Dr. Dhivakaran** specializes in advanced **Missing Tooth Replacement**, including **All-on-4 Dental Implants** and complex **Zygomatic Implants Hyderabad** for ultimate stability.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <button className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-teal-500/30 transition-transform flex items-center gap-3 active:scale-95 group">
                                    <ShieldCheck size={18} /> Plan My Implant
                                </button>
                                <button className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/10 hover:shadow-lg active:scale-95">
                                    <Info size={16} /> Transparent Pricing
                                </button>
                            </div>

                            <div className="flex gap-8 pt-8 border-t border-slate-200 dark:border-white/10">
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">15 Years</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Min. Warranty</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">Lifetime</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Priority Support</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">Digital</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Guided Navigation</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <RevealOnScroll>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white dark:bg-[#0B1019] rounded-[2.5rem] p-8 border border-white/10 overflow-hidden shadow-2xl">
                                    <div className="absolute top-4 right-6 text-xs font-black uppercase text-teal-500 tracking-widest bg-teal-500/10 px-3 py-1 rounded-full">3D Exploded View</div>
                                    <Image
                                        src="/assets/images/treatments/dental-implant-model.png"
                                        alt="Implant Model Exploded View"
                                        width={500}
                                        height={600}
                                        className="object-contain hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="mt-8 grid grid-cols-3 gap-2">
                                        {['Ceramic Crown', 'Abutment', 'Titanium Root'].map(part => (
                                            <div key={part} className="text-center p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                                <div className="text-[8px] font-black uppercase text-slate-400 mb-1">{part}</div>
                                                <div className="w-full h-1 bg-teal-500/20 rounded-full overflow-hidden">
                                                    <div className="w-full h-full bg-teal-500 animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                            </div>
                                        ))}
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
                        { id: 'overview', label: 'Overview' },
                        { id: 'truth', label: 'The Truth' },
                        { id: 'process', label: 'Process' },
                        { id: 'pricing', label: 'Pricing' },
                        { id: 'faq', label: 'FAQ' }
                    ].map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            className={`text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full ${activeTab === tab.id
                                ? 'bg-teal-600 text-white'
                                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ================= SECTION 1: THE NOBLE TRUTH ================= */}
            <section id="truth" className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 rounded-full text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 border border-teal-200 dark:border-teal-500/30">
                                    <Microscope size={12} /> Medical Authority v4.2
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight uppercase italic">
                                    The Noble Truth <br />
                                    <span className="text-teal-600 dark:text-teal-400">Biological Stability.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p>
                                        Many search for the lowest **Tooth Implant Cost Hyderabad** offers, but success depends on the foundation. For cases with severe bone loss, our **Dental Clinic in Nallagandla** provides specialized **Basal Implants Hyderabad** and **Zygomatic Implants Hyderabad** protocols to avoid complex grafting.
                                    </p>
                                    <p>
                                        Under the guidance of **Dr. Dhivakaran**, our team uses the **Osstell ISQ Meter** to measure clinical stability through Resonance Frequency Analysis. This ensures your **Full Mouth Dental Implants** and **All-on-4 Dental Implants** are load-ready for immediate function.
                                    </p>
                                    <ul className="space-y-4 pt-8">
                                        {[
                                            "Objective measurement of stability",
                                            "Determines exact loading time",
                                            "Reduces clinical failures by 98%",
                                            "Biological verification before crown placement"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4">
                                                <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 border border-teal-500/20">
                                                    <Check size={14} />
                                                </div>
                                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-4 bg-teal-500/10 rounded-[3rem] blur-3xl group-hover:bg-teal-500/20 transition-all"></div>
                                <div className="relative bg-slate-900 rounded-[3rem] p-10 border border-white/10 overflow-hidden shadow-2xl">
                                    <div className="flex justify-between items-start mb-12">
                                        <div>
                                            <div className="text-xs font-black text-teal-400 uppercase tracking-widest mb-1">Osstell Clinical ID</div>
                                            <div className="text-2xl font-black text-white">ISQ METER 900</div>
                                        </div>
                                        <div className="p-3 bg-teal-500/20 text-teal-400 rounded-2xl">
                                            <Target size={24} />
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-10">
                                        <Image
                                            src="/assets/images/treatments/osstell-isq.png"
                                            alt="Osstell ISQ Meter"
                                            width={350}
                                            height={350}
                                            className="object-contain group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bone Fusion Level</span>
                                            <span className="text-xl font-black text-teal-400">75 ISQ</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-500 w-[75%] rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ================= SECTION 2: BONE SCIENCE (WOLF'S LAW) ================= */}
            <section id="wolfs-law" className="py-32 bg-slate-50 dark:bg-[#0b101b] transition-colors duration-500 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="section-header text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                Wolf&apos;s Law: <br />
                                <span className="text-blue-600 dark:text-blue-400 text-3xl md:text-4xl lowercase font-bold">Use it or lose it.</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                When a tooth is lost, the jawbone no longer receives &quot;load&quot; signals. <br />
                                <strong>Like a muscle that atrophies without exercise, your bone disappears.</strong>
                            </p>
                        </div>

                        {/* BENTO GRID: BONE SCIENCE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] lg:auto-rows-[300px]">

                            {/* BENTO 1: THE CONSEQUENCE (LARGE) */}
                            <div className="md:col-span-2 md:row-span-2 p-10 bg-white dark:bg-[#151b2b] rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl flex flex-col justify-between group overflow-hidden relative">
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>
                                <div className="z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl">
                                            <Activity size={24} />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-[0.3em] text-red-500">Biological Drift</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Facial Atrophy.</h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
                                        Without the root&apos;s stimulation, the jaw resorbs by up to <strong>25% in the first year</strong>. This causes the &quot;sunken look&quot; as the facial height collapses.
                                    </p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 z-10">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-4xl font-black text-red-500">-40%</div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Bone Loss (3 Years)</div>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BENTO 2: OSSO-INTERACTION (SMALL) */}
                            <div className="p-8 bg-blue-600 rounded-[2.5rem] shadow-xl shadow-blue-500/20 flex flex-col justify-between text-white group cursor-default">
                                <RefreshCw size={32} className="group-hover:rotate-180 transition-transform duration-700" />
                                <div>
                                    <h4 className="text-xl font-black mb-2 tracking-tight">Biological Key.</h4>
                                    <p className="text-blue-100 text-[8px] leading-relaxed opacity-80 uppercase tracking-widest font-black">Osseointegration</p>
                                </div>
                            </div>

                            {/* BENTO 3: ITI LOGO / STANDARD (SMALL) */}
                            <div className="p-8 bg-slate-900 dark:bg-teal-500 rounded-[2.5rem] shadow-xl flex flex-col justify-between text-white dark:text-[#020617] group">
                                <ShieldCheck size={32} />
                                <div>
                                    <h4 className="text-xl font-black mb-2 tracking-tight">Swiss ITI.</h4>
                                    <p className="text-[8px] leading-relaxed opacity-80 uppercase tracking-widest font-black">Standard Protocol</p>
                                </div>
                            </div>

                            {/* BENTO 4: THE BRIDGE CONFLICT (MEDIUM) */}
                            <div className="md:col-span-2 p-10 bg-white dark:bg-[#151b2b] rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-8 overflow-hidden group">
                                <div className="w-1/3">
                                    <div className="w-24 h-24 rounded-3xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                        <Zap size={40} />
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight uppercase italic">Bridges vs All-on-4.</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Bridges only replace the crown, leading to bone melting. Our **All-on-4 Dental Implants** and **Basal Implants Hyderabad** stimulate the bone bio-mechanically, stopping the &quot;sunken face&quot; look permanently.
                                    </p>
                                </div>
                            </div>

                            {/* BENTO 5: THE BONE SIMULATOR (LARGE) */}
                            <div className="md:col-span-2 p-10 bg-slate-100 dark:bg-white/5 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-inner flex flex-col justify-center gap-10">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Atrophy Simulator</h4>
                                    <div className="flex gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Bone Loss</span>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                                            <span>Conventional Bridge (10 yrs)</span>
                                            <span className="text-red-500">40% Atrophy</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[40%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-teal-600">
                                            <span>Noble Dental Implant (10 yrs)</span>
                                            <span>0.5% Stability</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-500 w-[5%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xs font-bold text-slate-400 text-center uppercase tracking-[0.2em]">Implants preserve bone biological volume.</p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ================= SECTION 3: PRECISION SAFETY ================= */}
            <section id="precision" className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[120px]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="absolute -inset-4 bg-teal-500/10 rounded-[3rem] blur-2xl"></div>
                                <div className="relative space-y-4">
                                    {[
                                        { icon: ShieldCheck, title: "Biological Verification", desc: "Every implant is verified with Osstell ISQ before we ever place a tooth.", color: "bg-teal-500" },
                                        { icon: ScanLine, title: "Zero-Cut Technique", desc: "Guided navigation allows us to place implants through 5mm punch incisions—no stitches.", color: "bg-blue-600" },
                                        { icon: Microscope, title: "3D Digital Twin", desc: "We build a digital model of your jaw before surgery to plan nerve safety.", color: "bg-slate-900" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 flex gap-6 hover:shadow-xl transition-shadow group">
                                            <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-white ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{item.title}</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 rounded-full text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                                    <Shield size={12} /> Clinical Risk Mitigation
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                    Safety isn&apos;t a feature. <br />
                                    <span className="text-teal-600">It&apos;s a biological system.</span>
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    At Noble Dental Care, we treat implants as <strong>Ortho-Medical Procedures</strong>. We focus on soft tissue, bone density, and long-term periodontal health.
                                </p>
                                <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <div className="text-3xl font-black text-slate-900 dark:text-white">99.2%</div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">First-Year Success</div>
                                        </div>
                                        <div className="w-px h-12 bg-slate-100 dark:bg-white/10"></div>
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-slate-200 dark:bg-white/10 overflow-hidden relative">
                                                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill />
                                                </div>
                                            ))}
                                            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-teal-500 text-white flex items-center justify-center text-xs font-bold">+18k</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ================= CLINICAL JOURNEY ================= */}
            <section id="diagnostic" className="py-32 bg-slate-50 dark:bg-[#0b101b]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Clinical Workflow</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">Predictable results through digital planning.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`p-10 rounded-[2.5rem] bg-white dark:bg-[#151b2b] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${selectedStep === i ? 'border-teal-500 shadow-xl scale-[1.02]' : 'border-slate-100 dark:border-white/5 hover:border-teal-500/30'}`}
                                    onMouseEnter={() => setSelectedStep(i)}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all ${selectedStep === i ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
                                        <step.icon size={24} />
                                    </div>
                                    <div className="text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-4">Phase 0{i + 1}</div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{step.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <a
                                href="https://wa.me/918610425342?text=Hi%20Dr.%20Dhivakaran,%20I%20have%20a%20question%20about%20the%20Implant%20Workflow%20(CBCT/Planning)."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all hover:-translate-y-1 font-bold text-xs uppercase tracking-widest text-center"
                            >
                                <MessageCircle size={16} /> Ask Dr. Dhivakaran a specific question about your case
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ================= EMERGENCY SECTION (NIGHT GUARDIAN) ================= */}
            <div className="py-20 bg-slate-50 dark:bg-black border-t border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-500/5 blur-[100px] rounded-full"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 dark:text-red-400 animate-pulse">
                        <Siren size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase italic">Night Guardian.</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed font-medium">
                        Dental implant emergencies or severe trauma Near Aparna Sarovar / Citizens Hospital? **Dr. Dhivakaran** provides emergency triage and stabilization for surgical cases.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="https://wa.me/918610425342?text=Emergency%20Implant%20Help" className="px-8 py-3 bg-red-500 text-white rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-red-500/30 flex items-center gap-2">
                            <Activity size={16} /> Emergency WhatsApp
                        </a>
                        <a href="tel:+918610425342" className="px-8 py-3 bg-white dark:bg-[#1C1C1E] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2">
                            <Phone size={16} /> Urgent Call
                        </a>
                    </div>
                    <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">Surgical Response Team · Noble Dental Care Hyderabad</p>
                </div>
            </div>

            {/* ================= CASE LIBRARY ================= */}
            <section id="cases" className="py-32 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="section-header mb-16">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Case Library</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">Real outcomes for Hyderabad residents.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <article className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-white/5 group">
                                <div className="text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">Case 01 · Single Molar</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Immediate placement after extraction</h3>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                                    <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                                        <span>Challenge</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Fractured Root</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                                        <span>Solution</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Straumann BLX</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Time</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Same Day</span>
                                    </div>
                                </div>
                                <button className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2 group/btn">
                                    View Protocol <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </article>

                            <article className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-white/5 group">
                                <div className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">Case 02 · Full Mouth</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">**Full Mouth Dental Implants** Rehab</h3>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                                    <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                                        <span>Type</span>
                                        <span className="font-bold text-slate-900 dark:text-white">**Immediate Loading Implants**</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                                        <span>Brand</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Nobel Biocare (Sweden)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Recovery</span>
                                        <span className="font-bold text-slate-900 dark:text-white">New Teeth in 72 Hours</span>
                                    </div>
                                </div>
                                <button className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2 group/btn">
                                    View Protocol <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </article>

                            <article className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#151b2b] border border-slate-200 dark:border-white/5 group">
                                <div className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">Case 03 · Front Tooth</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Esthetic Zone Implant</h3>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                                    <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                                        <span>Challenge</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Missing Incisor</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                                        <span>Solution</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Zirconia Abutment</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Time</span>
                                        <span className="font-bold text-slate-900 dark:text-white">12 Weeks</span>
                                    </div>
                                </div>
                                <button className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2 group/btn">
                                    View Protocol <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </article>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section id="cost" className="py-32 bg-slate-50 dark:bg-[#0b101b] border-t border-slate-200 dark:border-white/5" >
                <div className="max-w-7xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                                Tooth Implant Cost Hyderabad
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase italic">Select Your Foundation.</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                                We offer diverse options including **Titanium vs Zirconia Implants** and specialists in **Immediate Loading Implants** for rapid restoration.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {implantTiers.map((item, i) => (
                                <div key={i} className={`relative bg-white dark:bg-[#151b2b] rounded-[2.5rem] border p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col overflow-hidden ${item.style} group`}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.tier}</div>
                                        <div className="text-2xl">{item.origin.split(' ')[0]}</div>
                                    </div>

                                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-2 h-20 flex items-center leading-tight">{item.brand}</div>
                                    <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">{item.desc}</p>

                                    <div className="mt-auto space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                                            <ShieldCheck size={16} className="text-teal-500" />
                                            <span>{item.surface}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                                            <Clock size={16} className="text-blue-500" />
                                            <span>Healing: {item.healing}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                                            <Award size={16} className="text-amber-500" />
                                            <span>{item.warranty}</span>
                                        </div>
                                    </div>

                                    <div className="mb-8 pt-6 border-t border-slate-100 dark:border-white/5">
                                        <div className="flex justify-between items-end">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Noble Price</span>
                                            <div className="text-right">
                                                <span className="block text-xs line-through text-slate-400 decoration-red-400">{item.market}</span>
                                                <span className="text-2xl font-black text-teal-600 dark:text-teal-400">{item.noble}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 rounded-xl border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
                                        Select Tier
                                    </button>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section >

            {/* ================= METRO ARBITRAGE TABLE ================= */}
            <div className="max-w-5xl mx-auto px-6 pb-32">
                <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative border border-slate-800">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest text-teal-400 mb-4 border border-white/10">
                                <TrendingDown size={12} /> The Nallagandla Advantage
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase italic">Noble Dental Clinic in Nallagandla</h3>
                            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
                                As the choice **Dental Clinic in Nallagandla**, we own our clinical space. No corporate franchise overheads. You pay for the clinical skill of **Dr. Dhivakaran** and the Swiss titanium, not for high-rent retail spaces.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-4 pl-4 text-xs font-black uppercase tracking-widest text-slate-500">Treatment</th>
                                        <th className="py-4 text-xs font-black uppercase tracking-widest text-red-400">City Average</th>
                                        <th className="py-4 text-xs font-black uppercase tracking-widest text-teal-400">Noble Dental</th>
                                        <th className="py-4 pr-4 text-xs font-black uppercase tracking-widest text-white text-right">Value Gap</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium">
                                    {[
                                        { item: "Single Implant + Crown", avg: "₹35k - ₹50k", noble: "₹22k - ₹28k", diff: "Save ₹18k" },
                                        { item: "Straumann (Swiss) Elite", avg: "₹85k - ₹1.1L", noble: "₹58,000", diff: "Save ₹40k" },
                                        { item: "All-on-4 Full Rehab", avg: "₹4.5L - ₹6L", noble: "₹3.2L - ₹4.5L", diff: "Save ₹1.5L" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 pl-4 text-slate-300">{row.item}</td>
                                            <td className="py-4 text-red-300/50">{row.avg}</td>
                                            <td className="py-4 text-teal-300 font-bold">{row.noble}</td>
                                            <td className="py-4 pr-4 text-right text-white font-bold">{row.diff}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Link href="/contact" className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-xl font-black uppercase text-xs tracking-widest transition-colors flex items-center gap-2">
                                Get a Value Comparison <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= FAQ ================= */}
            <section id="faq" className="py-32 max-w-4xl mx-auto px-6">
                <RevealOnScroll>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Clinical Q&A</h2>
                        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Reviewed by Senior Implantology Team</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "What is the Dental Implants Cost in Nallagandla?", a: "The **Tooth Implant Cost Hyderabad** patients find varies. At Noble Dental, our **Dental Implants in Nallagandla** start at ₹22k, including a high-end crown. We believe in providing the best value **Near Aparna Sarovar / Citizens Hospital** through premium Swiss engineering." },
                            { q: "Why choose Dr. Dhivakaran for Full Mouth Dental Implants?", a: "As the **Best Dentist in Nallagandla**, **Dr. Dhivakaran** specializes in complex **Full Mouth Dental Implants** cases using **Immediate Loading Implants** and **All-on-4 Dental Implants** where patients can walk out with teeth in 72 hours." },
                            { q: "Do you offer Zygomatic Implants Hyderabad?", a: "Yes. For patients with zero bone volume, we provide advanced **Zygomatic Implants Hyderabad** and **Basal Implants Hyderabad**. These bypass the need for months of bone grafting, offering a faster **Missing Tooth Replacement**." },
                            { q: "Titanium vs Zirconia Implants: Which is better?", a: "Titanium is the gold standard for bone fusion, while Zirconia is preferred for esthetic zones or metal-free preferences. Our team at this **Dental Clinic in Nallagandla** will guide you based on your biological needs." }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-300 open:shadow-lg open:border-teal-500/50">
                                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 dark:text-white cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors select-none">
                                    {faq.q}
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-open:bg-teal-500 group-open:text-white transition-colors">
                                        <ChevronRight className="transition-transform duration-300 group-open:rotate-90" size={16} />
                                    </div>
                                </summary>
                                <div className="px-6 pb-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* FAQ Verification Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-center gap-3 text-slate-400">
                        <ShieldCheck size={16} className="text-emerald-500" />
                        <p className="text-xs font-black uppercase tracking-widest text-center px-4">
                            All clinical protocols are verified by Noble Dental&apos;s medical board for 2026 safety standards.
                        </p>
                    </div>
                </RevealOnScroll>
            </section>

            {/* ================= CTA ================= */}
            <section id="contact" className="py-24 bg-slate-900 text-white" >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="section-header text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Secure Your Foundation</h2>
                        <p className="text-slate-400 text-lg">Predictable biological results. Transparent Swiss pricing.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <a href="tel:+918610425342" className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                                <Phone size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Call Clinic</h3>
                            <p className="text-sm text-slate-400">+91 86104 25342</p>
                        </a>

                        <a href="https://wa.me/918610425342" className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-black text-2xl">WA</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                            <p className="text-sm text-slate-400">Get clinical advice</p>
                        </a>

                        <Link href="/contact" className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                <Calendar size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Book Slot</h3>
                            <p className="text-sm text-slate-400">Nallagandla Branch (Near Aparna Sarovar)</p>
                        </Link>

                        <a href="https://maps.app.goo.gl/fFbpcXZ9RBBCpWrg9" target="_blank" className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                <MapPin size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                            <p className="text-sm text-slate-400">Nallagandla, Hyderabad</p>
                        </a>
                    </div>

                    <div className="mt-16 text-center text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                        Scientifically Backed · ITI Standards · FDA Cleared Surfaces
                    </div>
                </div>
            </section>
        </div>
    );
}
