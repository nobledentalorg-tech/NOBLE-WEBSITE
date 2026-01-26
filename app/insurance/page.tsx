import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck, FileCheck, CheckCircle, Calculator, Building2, Wallet,
    ArrowRight, Phone, Smartphone, BadgeCheck, ClipboardCheck, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Insurance Claims & 0% EMI Options | Noble Dental Care Nallagandla',
    description: 'Cashless insurance claims processed via HealthFlo AI. 0% EMI for implants & aligners. Corporate benefits for Microsoft, Amazon, Infosys employees.',
    keywords: ['dental insurance hyderabad', 'cashless dental treatment', 'healthflo claims', 'dental emi nallagandla', 'corporate dental benefits'],
};

export default function InsurancePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-50 dark:bg-zinc-900 border-b border-slate-200 dark:border-white/5">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-sm tracking-wide uppercase">
                                Powered by HealthFlo™ Engine
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                Dental Benefits. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Zero Headaches.
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                                We don&apos;t just &quot;accept&quot; insurance. We create it. Using our in-house <strong>HealthFlo</strong> technology, we decode your policy, handle the paperwork, and process reimbursements so you don&apos;t have to.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to check my insurance eligibility."
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
                                >
                                    <Smartphone size={20} />
                                    Check Eligibility (WhatsApp)
                                </a>
                                <a
                                    href="#emi-options"
                                    className="px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 rounded-xl font-bold transition-all flex items-center gap-2"
                                >
                                    <Calculator size={20} />
                                    View EMI Plans
                                </a>
                            </div>
                        </div>

                        {/* Visual Graphic */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-50"></div>
                            <div className="relative bg-white dark:bg-zinc-800 rounded-3xl p-6 shadow-2xl border border-slate-100 dark:border-white/10 z-10">
                                {/* Mock UI for HealthFlo App */}
                                <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">HF</div>
                                        <div>
                                            <div className="text-sm font-bold">Claim Packet #9021</div>
                                            <div className="text-xs text-green-500 font-medium">● AI Approved</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-slate-400">Estimated Refund</div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">₹18,500</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-black/20 rounded-xl">
                                        <CheckCircle size={18} className="text-green-500 shrink-0" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Policy Decoder Analysis Complete</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-black/20 rounded-xl">
                                        <CheckCircle size={18} className="text-green-500 shrink-0" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300">ADA Codes Validated</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-black/20 rounded-xl">
                                        <CheckCircle size={18} className="text-green-500 shrink-0" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Claim Submitted to Insurer</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 text-center border-t border-slate-100 dark:border-white/5">
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                                        Noble Dental Clinical Excellence + HealthFlo Claims Tech
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE HEALTHFLO ADVANTAGE (USP) */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Noble Dental is Different</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Most clinics hand you a bill and say &quot;Good luck.&quot; We handle the entire backend process.
                    </p>
                </div>

                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <FileCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">AI Policy Decoder</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Insurance policies are confusing. Our AI engine instantly scans your policy to check for &quot;Room Rent&quot; limits (which affect dental claims), co-pay clauses, and waiting periods. We tell you <em>exactly</em> what is covered before you start.
                        </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                        <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                            <ClipboardCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Professional Claims Desk</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Rejections happen due to wrong codes. Our dedicated desk prepares your claim packet with the correct <strong>ADA (American Dental Association)</strong> procedural codes and intra-oral photographs to maximize your approval chances.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. PARTNERS & CORPORATE */}
            <section className="py-20 px-6 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Insurance Partners */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-blue-400" />
                                We Support Claims For
                            </h2>
                            <p className="text-slate-400 mb-8 border-l-2 border-blue-500 pl-4">
                                We specialize in <strong>Hassle-Free Reimbursement</strong>. You focus on recovery; we prepare the paperwork.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {['Star Health', 'HDFC Ergo', 'ICICI Lombard', 'MediAssist', 'Vidal Health', 'Niva Bupa'].map((partner) => (
                                    <div key={partner} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center font-medium hover:bg-white/10 transition-colors">
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Corporate Corner */}
                        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-8 rounded-3xl border border-white/10">
                            <div className="flex items-center gap-2 mb-6 text-blue-300 font-bold uppercase tracking-wider text-sm">
                                <Building2 size={16} />
                                Corporate Corner - Nallagandla
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Work at a Tech Hub?</h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Employees of <strong>Microsoft, Amazon, Infosys, Wipro, and TCS</strong> effectively utilize their corporate health cards here. Your policy likely covers:
                            </p>

                            <ul className="space-y-3 mb-8">
                                {['Root Canal Treatments', 'Surgical Extractions', 'Disimpactions (Wisdom Tooth)', 'Scaling (Cleaning)'].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-slate-200">
                                        <CheckCircle size={16} className="text-green-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 bg-black/30 rounded-xl text-sm text-slate-400 border border-white/5">
                                <span className="text-white font-bold">Pro Tip:</span> Corporate limits usually reset on April 1st. Use your balance before it lapses!
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. EMI & FINANCE */}
            <section id="emi-options" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">0% EMI & Finance Options</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Insurance doesn&apos;t cover Implants or Smile Makeovers. But our Finance partners do.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-xl hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Wallet size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">0% Cost EMI</h3>
                            <p className="text-sm text-slate-500 mb-4">Pay in 3, 6, or 9 months with zero extra interest.</p>
                            <div className="space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                                <div className="text-xs font-bold text-slate-400 uppercase">Partners</div>
                                <div className="font-medium">Bajaj Finserv, HealthFlo Finance</div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-xl hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <Landmark size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Instant Approval</h3>
                            <p className="text-sm text-slate-500 mb-4">Paperless approval in under 5 minutes at the clinic desk.</p>
                            <div className="space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                                <div className="text-xs font-bold text-slate-400 uppercase">Requirement</div>
                                <div className="font-medium">PAN Card + Aadhar Linked Mobile</div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-xl hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <BadgeCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">High Approval Rate</h3>
                            <p className="text-sm text-slate-500 mb-4">Designed for medical treatments, ensuring higher eligibility.</p>
                            <div className="space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                                <div className="text-xs font-bold text-slate-400 uppercase">Covered Treatments</div>
                                <div className="font-medium">Implants, Aligners, Veneers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS FLOWCHART */}
            <section className="py-20 px-6 bg-slate-50 dark:bg-zinc-900/50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-16">How Reimbursement Works</h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 dark:bg-white/10 -z-0"></div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Consultation", desc: "We check your policy limits instantly via HealthFlo." },
                                { step: "02", title: "Treatment", desc: "You pay for the service and get proper invoices." },
                                { step: "03", title: "Claim Packet", desc: "We prepare & submit photos, X-rays, and notes." },
                                { step: "04", title: "Credited", desc: "Amount is refunded to your account in 7-15 days." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-black p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm text-center">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-white dark:border-black">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-24 px-6 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop leaving money on the table.</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
                        Let our technology handle your claims while you enjoy expert dental care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to check my insurance eligibility."
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                        >
                            <Smartphone size={20} />
                            Check Eligibility Now
                        </a>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-white/10 hover:border-slate-300 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                        >
                            <Phone size={20} />
                            Book Appointment
                        </Link>
                    </div>
                    <p className="mt-6 text-xs text-slate-400">
                        *Approvals are subject to individual insurance policy terms. We assist in filing; final decision lies with the insurer.
                    </p>
                </div>
            </section>

        </div>
    );
}
