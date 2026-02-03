import React from 'react';
import { Share2, Clock, User, ArrowLeft, ShieldCheck, XCircle, CheckCircle2, AlertTriangle, ChevronRight, Calculator } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Can I Avoid a Root Canal? The Honest Truth | Noble Dental Nallagandla',
    description: 'Looking for naturally avoiding root canals? Dr. Dhivakaran explains why antibiotics fail, the hidden costs of extraction, and when you can actually save your tooth.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans selection:bg-blue-100 selection:text-blue-900">

            {/* PROGRESS INDICATOR (Optional, simplistic version) */}
            <div className="fixed top-0 left-0 h-1 bg-blue-600 z-50 w-full origin-left transform scale-x-0 animate-scroll-progress"></div>

            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Navigation */}
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Patient Education
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-black uppercase tracking-widest">
                                Myth Buster
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                5 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            Can I Avoid a <span className="text-blue-600">Root Canal?</span> <br />
                            <span className="text-slate-400 font-light">The Honest Medical Truth.</span>
                        </h1>

                        {/* Author Bio - TRUST SIGNAL */}
                        <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                                    <Image
                                        src="/images/dr-dhivakaran.webp"
                                        alt="Dr. Dhivakaran"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran</span>
                                        <ShieldCheck size={14} className="text-blue-500" />
                                    </div>
                                    <p className="text-xs text-slate-500 m-0">MDS, Conservative Dentistry • 12+ Years Exp</p>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Last Updated</p>
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">October 2025</p>
                            </div>
                        </div>
                    </header>

                    {/* KEY TAKEAWAYS - RULE OF THREE */}
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl mb-12 border-l-4 border-blue-500">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-blue-500" /> Quick Summary
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">1.</span>
                                <span>Antibiotics <strong>cannot cure</strong> a dead tooth; they only mask pain temporarily.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">2.</span>
                                <span>Extraction is a <strong>permanent loss</strong> that costs 3x more to fix later (Implants).</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">3.</span>
                                <span>Modern RCT is <strong>painless</strong> and keeps your natural tooth for life.</span>
                            </li>
                        </ul>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">

                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            We see this search trend rising in Hyderabad: <em>&quot;How to avoid root canal naturally&quot;</em> or <em>&quot;Root canal alternative medicine.&quot;</em>
                        </p>

                        <p>
                            I understand the hesitation. Root canals have a bad reputation (mostly from the 90s). Patients sit in my chair and ask: <strong>&quot;Can&apos;t I just take medicine and wait?&quot;</strong>
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-sm font-bold">1</span>
                            The &quot;Antibiotic Myth&quot;
                        </h2>

                        <p>
                            Here is the hard medical truth that most blogs won&apos;t tell you: <strong>Antibiotics cannot cure a tooth infection.</strong> They can only temporarily reduce the swelling.
                        </p>

                        <div className="my-8 p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20">
                            <div className="flex gap-4 items-start">
                                <XCircle className="text-red-500 shrink-0 mt-1 w-6 h-6" />
                                <div>
                                    <strong className="text-red-700 dark:text-red-400 block mb-2 text-lg">Why Medicine Fails</strong>
                                    <p className="text-slate-700 dark:text-slate-300 text-base m-0">
                                        Once the nerve inside is dead, there is <strong>no blood supply</strong>.
                                        Pills travel through your blood. If blood can&apos;t enter the tooth, the medicine can&apos;t enter either.
                                        The bacteria stays safe inside, waiting to strike again.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                            The Choice: Save vs. Extract
                        </h2>

                        <p>
                            You really only have two medical options. Let&apos;s look at the Return on Investment (ROI) for your health.
                        </p>


                        {/* COMPARISON CARDS - POWERFUL VISUAL */}
                        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                            {/* OPTION A */}
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 relative overflow-hidden group hover:border-blue-500 transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
                                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                                    <CheckCircle2 size={20} className="text-emerald-500" />
                                    Option A: Save It (RCT)
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-6">
                                    <li className="flex gap-2"><span className="text-emerald-500">✓</span> Keeps natural tooth forever</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">✓</span> Maintains jawbone density</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">✓</span> Chewing power: 100%</li>
                                </ul>
                                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Cost Impact</p>
                                    <p className="font-bold text-slate-900 dark:text-white">₹ Low One-time Cost</p>
                                </div>
                                <Link
                                    href="/treatments/root-canal"
                                    className="mt-4 block w-full py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-center rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
                                >
                                    View RCT Process
                                </Link>
                            </div>

                            {/* OPTION B */}
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 relative overflow-hidden group hover:border-red-500 transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400"></div>
                                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                                    <XCircle size={20} className="text-red-500" />
                                    Option B: Extract It
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-6">
                                    <li className="flex gap-2"><span className="text-red-500">⚠</span> Loss of bone structure</li>
                                    <li className="flex gap-2"><span className="text-red-500">⚠</span> Teeth shift into the gap</li>
                                    <li className="flex gap-2"><span className="text-red-500">⚠</span> Chewing power drops</li>
                                </ul>
                                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Cost Impact</p>
                                    <p className="font-bold text-slate-900 dark:text-white">₹₹ High (Implants needed)</p>
                                </div>
                                <Link
                                    href="/treatments/dental-implants"
                                    className="mt-4 block w-full py-2 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-center rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors"
                                >
                                    See The Cost of Implants
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">
                            My Recommendation
                        </h2>

                        <p>
                            As a biological dentist, I follow a simple rule: <strong>Nothing artificial is as good as what nature gave you.</strong>
                        </p>
                        <p>
                            I will always fight to save your tooth. Extraction is the absolute last resort, reserved only when the tooth is structurally destroyed (cracked below the gum line).
                        </p>

                        <hr className="my-12 border-slate-200 dark:border-white/10" />

                        {/* CTA SECTION - POWERFUL ENDING */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
                                Still unsure about your tooth?
                            </h3>
                            <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
                                Don&apos;t guess with painkillers. Come in for a digital X-Ray. I will show you exactly what&apos;s happening inside your tooth and give you an honest "Saveability Score."
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Book Diagnostic Scan <ChevronRight size={18} />
                                </Link>
                                <a
                                    href="tel:918074512305"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                                >
                                    Call for Emergency <AlertTriangle size={18} className="text-amber-400" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </main>
    );
}
