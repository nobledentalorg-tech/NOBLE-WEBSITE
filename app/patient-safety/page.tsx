/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FlaskConical, Stethoscope, Baby, BookOpen, FileText, ArrowRight } from 'lucide-react';
import BookingButton from '../../components/BookingButton';

export const metadata: Metadata = {
    title: 'Patient Safety & Sterilization Protocols | Noble Dental Care Nallagandla',
    description: 'We follow a strict 4-step Class-B Autoclave sterilization protocol. 100% virus-free, spore-free environment for kids and adults in Nallagandla.',
    keywords: ['Dental sterilization Nallagandla', 'Class B Autoclave dentist', 'Safe dental clinic Hyderabad', 'Infection control dentistry'],
};

export default function PatientSafety() {
    const steps = [
        {
            id: 1,
            title: "Ultrasonic Cleaning",
            desc: "Instruments are chemically treated in an ultrasonic bath to remove invisible debris before human handling.",
            icon: <FlaskConical className="w-8 h-8 text-blue-400" />
        },
        {
            id: 2,
            title: "Pouching & Sealing",
            desc: "Each instrument set is vacuum-sealed in medical-grade pouches. They are NOT opened until they are in front of you.",
            icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />
        },
        {
            id: 3,
            title: "Class B Autoclaving",
            desc: "We use European Class B Autoclaves (Vacuum-Steam) which kill 100% of bacteria, viruses, and even dormant spores.",
            icon: <CheckCircle2 className="w-8 h-8 text-purple-400" />
        },
        {
            id: 4,
            title: "UV Storage",
            desc: "Sterilized pouches are stored in UV-light chambers to maintain sterility until the exact moment of use.",
            icon: <Stethoscope className="w-8 h-8 text-amber-400" />
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-900/10 z-0"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-sm font-medium mb-6 animate-pulse">
                        <ShieldCheck className="w-4 h-4 inline mr-2 align-text-bottom" />
                        Zero-Infection Protocol
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                        Your Safety is Our <br /><span className="text-blue-600 dark:text-blue-400">Clinical Obsession</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        While others &quot;clean&quot;, we <strong>sterilize</strong>. Noble Dental Care operates with hospital-grade protocols including Class B Autoclaves and HEPA air filtration.
                    </p>
                    <BookingButton className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg shadow-lg shadow-emerald-900/20 transform transition hover:scale-105" />
                </div>
            </section>

            {/* The 4-Step Protocol */}
            <section className="py-20 bg-white dark:bg-slate-900 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 font-display text-slate-900 dark:text-white">The Noble 4-Step Sterilization Cycle</h2>
                        <p className="text-slate-600 dark:text-slate-400">Most clinics stop at step 2. We go all the way to Biological Safety.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-8 rounded-2xl relative group hover:border-blue-500/50 transition duration-300">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-500 transition">
                                    {step.id}
                                </div>
                                <div className="mt-6 text-center">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Class B Matters */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 font-display text-slate-900 dark:text-white">Why &quot;Class B&quot; Matters?</h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                            <p>
                                Not all autoclaves are equal. Standard "pressure cookers" used in many clinics cannot penetrate hollow instruments like dental drills.
                            </p>
                            <div className="p-6 bg-blue-500/5 dark:bg-blue-900/10 border-l-4 border-blue-600 dark:border-blue-500 rounded-r-xl">
                                <p className="font-medium text-slate-900 dark:text-white italic">
                                    &quot;Class B Autoclaves use a vacuum pump to remove air, ensuring steam hits 100% of the surface area, inside and out. It&apos;s the only way to guarantee sterility.&quot;
                                </p>
                            </div>
                            <p>
                                At Noble, every instrument entering your mouth has been processed through this Medical-Grade cycle.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">The &quot;Open Pouch&quot; Promise</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-600 dark:text-slate-300">We never reuse pouches.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-600 dark:text-slate-300">We open the sealed sterilization pouch <strong>in front of you</strong>.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-600 dark:text-slate-300">Chemical indicators on the pouch turn color to prove sterility.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-600 dark:text-slate-300">Disposables (needles, cups, suction tips) are 100% single-use.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Ethical Pricing & Transparency */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Why our charges are <span className="text-blue-400">Reasonable</span></h2>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                            We believe premium dentistry shouldn't be a luxury. By cutting out the corporate &quot;noise&quot;, we pass the savings directly to you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Point 1: No Ads */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm group hover:bg-white/[0.08] transition-all">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30 mx-auto md:mx-0">
                                <ShieldCheck className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">You Don't Pay for Our Marketing</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Corporate chains spend <strong>lakhs every month</strong> on Google Ads and expensive billboards. Those costs are eventually added to your bill. We spend <strong>Zero</strong> on ads. At Noble, you only pay for your treatment, not for our advertisements.
                            </p>
                        </div>

                        {/* Point 2: Community Service */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm group hover:bg-white/[0.08] transition-all">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/30 mx-auto md:mx-0">
                                <CheckCircle2 className="text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Health for All (Social Equity)</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We believe quality health is a human right. We regularly conduct <strong>Dental Camps for community equity</strong>, ensuring that even those who cannot afford premium care receive basic dental health. Our clinic is built on service, not just business.
                            </p>
                        </div>

                        {/* Point 3: Premium Brands */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm group hover:bg-white/[0.08] transition-all">
                            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 border border-amber-500/30 mx-auto md:mx-0">
                                <FlaskConical className="text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Global Gold-Standard Materials</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Reasonable doesn't mean cheap. We use the exact same materials used in top UK & USA clinics: <strong>Ivoclar Vivadent (Europe), 3M ESPE (USA), GC Fuji (Japan), and Zhermack (Italy).</strong> No local or generic substitutes.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl text-center">
                        <p className="text-blue-300 font-bold text-lg mb-2">
                            The Noble Promise: Transparency Above All.
                        </p>
                        <p className="text-slate-400 text-sm italic">
                            No False Marketing. No Inflated Costs. No "Hidden" Hospital Charges. 
                            Just Pure, Ethical Dentistry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Resources & Evidence */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Blog Card */}
                        <Link href="/blog" className="group block">
                            <div className="h-full bg-slate-50 dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all shadow-sm hover:shadow-2xl">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Clinical Guides</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                                    Educate yourself on post-operative care, treatment longevity, and the science of oral health through our expert blog.
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-2 transition-transform">
                                    Read Expert Articles <ArrowRight size={20} />
                                </div>
                            </div>
                        </Link>

                        {/* Case Study Card */}
                        <Link href="/case-studies" className="group block">
                            <div className="h-full bg-slate-50 dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition-all shadow-sm hover:shadow-2xl">
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <FileText className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Surgical Evidence</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                                    See the results of our precision-led approach. Real case studies showcasing microscopic results and implant success.
                                </p>
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold group-hover:translate-x-2 transition-transform">
                                    View Patient Cases <ArrowRight size={20} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Neo AI Section */}
            <section className="py-16 bg-slate-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Ask Neo About Our Safety</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Want to see our sterilization log? Or check when your doctor was last screened? Ask our AI consultant.
                    </p>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 inline-block text-left relative">
                        <div className="absolute -top-3 -right-3 bg-blue-600 text-xs px-2 py-1 rounded-full font-bold animate-pulse text-white">AI Agent</div>
                        <p className="text-slate-600 dark:text-slate-300 italic">&quot;Neo, are dental x-rays safe for my child?&quot;</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Safe, Sterile, and Stress-Free.</h2>
                <BookingButton className="bg-blue-600 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 dark:shadow-white/10" />
            </section>
        </main>
    );
}
