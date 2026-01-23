/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FlaskConical, Stethoscope, Baby } from 'lucide-react';
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
        <main className="min-h-screen bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 z-0"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium mb-6 animate-pulse">
                        <ShieldCheck className="w-4 h-4 inline mr-2 align-text-bottom" />
                        Zero-Infection Protocol
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Your Safety is Our <br /><span className="text-blue-400">Clinical Obsession</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        While others &quot;clean&quot;, we <strong>sterilize</strong>. Noble Dental Care operates with hospital-grade protocols including Class B Autoclaves and HEPA air filtration.
                    </p>
                    <BookingButton className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg shadow-lg shadow-emerald-900/20 transform transition hover:scale-105" />
                </div>
            </section>

            {/* The 4-Step Protocol */}
            <section className="py-20 bg-slate-900 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 font-display">The Noble 4-Step Sterilization Cycle</h2>
                        <p className="text-slate-400">Most clinics stop at step 2. We go all the way to Biological Safety.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl relative group hover:border-blue-500/50 transition duration-300">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-xl font-bold text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500 transition">
                                    {step.id}
                                </div>
                                <div className="mt-6 text-center">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 group-hover:bg-blue-900/20 transition">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
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
                        <h2 className="text-3xl font-bold mb-6 font-display">Why &quot;Class B&quot; Matters?</h2>
                        <div className="space-y-6 text-lg text-slate-300">
                            <p>
                                Not all autoclaves are equal. Standard "pressure cookers" used in many clinics cannot penetrate hollow instruments like dental drills.
                            </p>
                            <div className="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl">
                                <p className="font-medium text-white italic">
                                    &quot;Class B Autoclaves use a vacuum pump to remove air, ensuring steam hits 100% of the surface area, inside and out. It&apos;s the only way to guarantee sterility.&quot;
                                </p>
                            </div>
                            <p>
                                At Noble, every instrument entering your mouth has been processed through this Medical-Grade cycle.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold mb-6 text-emerald-400">The &quot;Open Pouch&quot; Promise</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-300">We never reuse pouches.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-300">We open the sealed sterilization pouch <strong>in front of you</strong>.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-300">Chemical indicators on the pouch turn color to prove sterility.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                                <span className="text-slate-300">Disposables (needles, cups, suction tips) are 100% single-use.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Neo AI Section */}
            <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4 text-emerald-400">Ask Neo About Our Safety</h2>
                    <p className="text-slate-400 mb-8">
                        Want to see our sterilization log? Or check when your doctor was last screened? Ask our AI consultant.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 inline-block text-left relative">
                        <div className="absolute -top-3 -right-3 bg-blue-600 text-xs px-2 py-1 rounded-full font-bold animate-pulse">AI Agent</div>
                        <p className="text-slate-300 italic">&quot;Neo, are dental x-rays safe for my child?&quot;</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-8">Safe, Sterile, and Stress-Free.</h2>
                <BookingButton className="bg-white text-slate-900 hover:bg-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-white/10" />
            </section>
        </main>
    );
}
