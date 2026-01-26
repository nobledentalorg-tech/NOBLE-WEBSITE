import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    CheckCircle, Clock, Shield, Star,
    ChevronRight, ArrowLeft, Calendar,
    Activity, Ruler, Droplets, Scan, Smile, ShieldCheck, HeartPulse, Zap, Award, Heart, Sparkles
} from 'lucide-react';
import { treatmentsData } from '@/data/treatments';

// Icon mapping helper
const IconMap: Record<string, any> = {
    Clock, Ruler, Activity, Shield, Star,
    Droplets, Scan, Smile, ShieldCheck, HeartPulse,
    Zap, Award, Heart, Sparkles
};

export const metadata: Metadata = {
    title: 'Teeth Whitening Treatment Nallagandla | 45-Min Instant Brightening',
    description: 'Best Teeth Whitening in Nallagandla using Philips Zoom & Pola Office+. Get 8 shades lighter in 45 mins. Medical-grade bleaching by cosmetic dentists.',
    keywords: ['Teeth Whitening Nallagandla', 'Dental Bleaching', 'Laser Whitening', 'Yellow Teeth Treatment', 'Cosmetic Dentist Nallagandla'],
    alternates: {
        canonical: '/treatments/teeth-whitening'
    }
};

export default function TeethWhiteningPage() {
    // Base data from existing source
    const t = treatmentsData['teeth-whitening'];
    if (!t) return notFound();

    // Custom Overrides
    const customTitle = "Teeth Whitening Treatment in Nallagandla";
    const customSubtitle = "Philips Zoom & Pola Office+ Authorized Center";

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: customTitle,
        description: t.description,
        medicalSpecialty: 'Cosmetic Dentistry',
        provider: {
            '@type': 'Dentist',
            name: 'Noble Dental Care',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nallagandla, Hyderabad'
            }
        },
        mainEntity: {
            '@type': 'MedicalProcedure',
            name: 'Professional Teeth Whitening',
            procedureType: 'Non-surgical',
            bodyLocation: 'Teeth'
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-200 font-sans">
            {/* Inject Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
                <Image
                    src={t.heroImage}
                    alt="Teeth Whitening Treatment Nallagandla"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10 text-white">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <span className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                        Cosmetic Center
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{customTitle}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl">{customSubtitle}</p>
                </div>
            </section>

            {/* --- CONTENT CONTAINER --- */}
            <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-20 relative z-20">

                {/* LEFT COLUMN (Main Info) */}
                <div className="lg:col-span-2 space-y-12">

                    {/* 1. Overview Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-white/5">
                        <h2 className="text-2xl font-bold mb-6">Overview</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line text-lg">
                            {t.longDescription}
                            <br /><br />
                            <strong>Warning against Salons:</strong> Unlike salon whitening kiosks, our <strong>Medical-Grade</strong> procedure uses high-concentration peroxide protected by a gum barrier. This ensures deep stain removal without burning your gums.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mt-8 border-t border-slate-100 dark:border-white/5 pt-8">
                            {t.stats.map((stat, idx) => {
                                const Icon = IconMap[stat.icon] || Star;
                                return (
                                    <div key={idx} className="text-center p-4 bg-slate-50 dark:bg-white/5 rounded-2xl">
                                        <div className="text-red-500 mb-2 flex justify-center"><Icon size={20} /></div>
                                        <div className="font-bold text-lg">{stat.value}</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2. The Process */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Clinical Process</h2>
                        <div className="space-y-6">
                            {t.process.map((step, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center font-bold text-slate-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </div>
                                        {idx !== t.process.length - 1 && <div className="w-0.5 h-full bg-slate-200 dark:bg-white/5 my-2"></div>}
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. FAQs (Accordion) */}
                    <div className="bg-slate-100 dark:bg-white/5 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold mb-8">Common Questions</h2>
                        <div className="space-y-4">
                            {t.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-white/5 hover:border-red-500/30 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                        <span className="text-red-500">Q.</span> {faq.q}
                                    </h3>
                                    <p className="text-slate-500 pl-7">{faq.a}</p>
                                </div>
                            ))}
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-white/5 hover:border-red-500/30 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                    <span className="text-red-500">Q.</span> Is this different from Charcoal powder?
                                </h3>
                                <p className="text-slate-500 pl-7">Yes. Charcoal is abrasive and scratches your enamel. Our chemical whitening dissolves stains *inside* the tooth safely without scratching the surface.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN (Sticky Sidebar) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">

                        {/* Booking Card */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-red-100 dark:border-red-900/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <h3 className="text-xl font-bold mb-2">Want a Brighter Smile?</h3>
                            <p className="text-slate-500 mb-6 text-sm">Book your 45-min Zoom Whitening session today.</p>

                            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-red-600/20">
                                <Calendar size={18} />
                                Book Now
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                                <Shield size={12} />
                                <span>Verified Medical Grade</span>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-8 border border-slate-100 dark:border-white/5">
                            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Key Benefits</h3>
                            <ul className="space-y-4">
                                {t.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
