'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ShieldCheck, FileCheck, CheckCircle, Calculator, Building2, Wallet,
    ArrowRight, BadgeCheck, ClipboardCheck, Landmark,
    Zap, Activity, LayoutGrid, FileText
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function InsurancePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">

            {/* 1. HERO SECTION (Neutral & Professional) */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Subtle background for "Hospital Admin" feel */}
                <div className="absolute inset-0 bg-slate-50/50 dark:bg-[#0A0A0A] -z-10"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 font-semibold text-sm border border-slate-200 dark:border-white/10 mb-8"
                        >
                            <FileText size={14} />
                            <span>Administrative Support Portal</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-slate-800 dark:text-white">
                            Insurance Support & <br />
                            <span className="text-slate-500">Financial Transparency</span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                            We provide all necessary medical documentation to facilitate your reimbursement claims.
                            Our administrative processes are designed to ensure accuracy and compliance with insurer guidelines.
                        </p>
                    </motion.div>

                    {/* HERO VISUAL: The "Paperwork" Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative max-w-5xl mx-auto"
                    >
                        <div className="relative bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden p-8 md:p-12">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">How We Support Your Claim</h3>
                                    <p className="text-slate-500 mb-8">At Noble Dental Care, we believe in complete administrative transparency.</p>

                                    <div className="space-y-6">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                                                <ClipboardCheck size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">Standardized Billing</div>
                                                <p className="text-slate-500 text-sm mt-1">We use ADA-compliant procedure codes recognized by all major insurers to prevent technical discrepancies.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                                                <FileCheck size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">Digital Records</div>
                                                <p className="text-slate-500 text-sm mt-1">We provide high-quality pre- and post-treatment X-rays and intra-oral photos required for claim verification.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* HealthFlo "Efficiency" Angle */}
                                <div className="bg-slate-50 dark:bg-black/50 rounded-2xl p-8 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-white dark:bg-[#1A1A1A] rounded-xl border border-slate-100 dark:border-white/5 flex items-center justify-center shadow-sm">
                                            <Activity size={24} className="text-slate-700 dark:text-slate-300" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Administrative Partner</div>
                                            <div className="font-bold text-lg">HealthFlo™</div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                        To ensure your claim files are complete and error-free, we utilize the HealthFlo platform for documentation. This helps reduce administrative queries and processing delays.
                                    </p>

                                    <div className="p-4 bg-white dark:bg-[#1A1A1A] rounded-xl border border-slate-100 dark:border-white/5 text-xs text-slate-500">
                                        <span className="font-bold text-slate-700 dark:text-slate-300">Important Note:</span> We do not guarantee claim approval. Coverage depends entirely on your specific policy terms.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ACCEPTED DOCUMENTATION NETWORKS */}
            <section className="py-24 px-6 bg-white dark:bg-[#050505]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        {/* A. Insurance Companies */}
                        <div>
                            <div className="border-b border-slate-100 dark:border-white/5 pb-6 mb-10">
                                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    <ShieldCheck className="text-slate-400" />
                                    We Accept Documentation Requests For:
                                </h2>
                                <p className="text-slate-500 text-sm">
                                    We provide itemized bills and treatment summaries aligned with standard formats for these providers.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {[
                                    { name: "Star Health", src: "https://placehold.co/200x80/white/black?text=Star+Health" },
                                    { name: "HDFC Ergo", src: "https://placehold.co/200x80/white/black?text=HDFC+Ergo" },
                                    { name: "ICICI Lombard", src: "https://placehold.co/200x80/white/black?text=ICICI+Lombard" },
                                    { name: "Niva Bupa", src: "https://placehold.co/200x80/white/black?text=Niva+Bupa" },
                                    { name: "Care Health", src: "https://placehold.co/200x80/white/black?text=Care+Health" },
                                    { name: "Manipal Cigna", src: "https://placehold.co/200x80/white/black?text=Manipal+Cigna" },
                                    { name: "Tata AIG", src: "https://placehold.co/200x80/white/black?text=Tata+AIG" },
                                    { name: "Aditya Birla", src: "https://placehold.co/200x80/white/black?text=Aditya+Birla" },
                                    { name: "Bajaj Allianz", src: "https://placehold.co/200x80/white/black?text=Bajaj+Allianz" },
                                    { name: "SBI General", src: "https://placehold.co/200x80/white/black?text=SBI+General" }
                                ].map((brand, idx) => (
                                    <div
                                        key={idx}
                                        className="h-20 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-lg flex items-center justify-center p-4 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={brand.src}
                                                alt={brand.name}
                                                fill
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* B. TPAs */}
                        <div>
                            <h3 className="font-bold text-lg mb-6 text-slate-700 dark:text-slate-300">Third Party Administrators (TPAs)</h3>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                                {[
                                    { name: "MediAssist", src: "https://placehold.co/200x80/white/black?text=MediAssist" },
                                    { name: "Vidal Health", src: "https://placehold.co/200x80/white/black?text=Vidal+Health" },
                                    { name: "FHPL", src: "https://placehold.co/200x80/white/black?text=FHPL" },
                                    { name: "MDIndia", src: "https://placehold.co/200x80/white/black?text=MDIndia" },
                                    { name: "Paramount", src: "https://placehold.co/200x80/white/black?text=Paramount" },
                                    { name: "Raksha TPA", src: "https://placehold.co/200x80/white/black?text=Raksha" },
                                ].map((tpa, idx) => (
                                    <div
                                        key={idx}
                                        className="h-16 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded flex items-center justify-center p-2 opacity-70"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={tpa.src}
                                                alt={tpa.name}
                                                fill
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-xs text-slate-400 text-center max-w-2xl mx-auto italic">
                                Disclaimer: Note: Approvals are at the sole discretion of your insurance provider and policy terms. We assist with documentation but do not influence claim outcomes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. CORPORATE REIMBURSEMENT ASSISTANCE */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-[#0A0A0A] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                            <Building2 size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">
                                Corporate Reimbursement Assistance
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                We are familiar with the claim formats required for employees of major IT campuses in Nallagandla (e.g., <strong>Infosys, Microsoft, TCS, Wipro</strong>). We provide itemized bills and treatment summaries aligned with standard TPA formats to simplify your submission process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FINANCIAL OPTIONS (Safe Tone) */}
            <section id="emi-options" className="py-24 px-6 bg-white dark:bg-[#050505]">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Transparent Payment Options</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            For treatments not covered by insurance (such as Implants or Veneers), we offer structured payment plans to manage costs effectively.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Bajaj Finserv */}
                        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#111] border border-slate-100 dark:border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <Wallet className="text-slate-400" />
                                <h3 className="font-bold text-lg">Bajaj Finserv</h3>
                            </div>
                            <p className="text-slate-500 text-sm mb-4">Standard EMI options available for cardholders.</p>
                            <div className="text-xs font-medium px-3 py-1 bg-green-100 text-green-700 w-fit rounded-full">0% Interest Plans Available</div>
                        </div>

                        {/* HealthFlo Finance */}
                        <div className="p-8 rounded-2xl bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                            <div className="flex items-center gap-3 mb-6">
                                <Activity className="text-blue-600" />
                                <h3 className="font-bold text-lg">HealthFlo Finance</h3>
                            </div>
                            <p className="text-slate-500 text-sm mb-4">Digital financing for medical procedures. Paperless approval process.</p>
                            <div className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 w-fit rounded-full">KYC Required</div>
                        </div>

                        {/* Credit Cards */}
                        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#111] border border-slate-100 dark:border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <Landmark className="text-slate-400" />
                                <h3 className="font-bold text-lg">Credit Card EMI</h3>
                            </div>
                            <p className="text-slate-500 text-sm mb-4">Convert payments into monthly installments via your bank.</p>
                            <div className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-600 w-fit rounded-full">All Major Banks</div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg font-bold transition-all hover:opacity-90"
                        >
                            Contact Administrative Desk <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
