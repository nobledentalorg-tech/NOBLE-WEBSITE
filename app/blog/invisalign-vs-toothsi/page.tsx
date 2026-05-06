
import React from 'react';
import { Share2, Clock, User, ArrowLeft, ShieldAlert, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const metadata = {
    title: 'Invisalign vs. Toothsi / Direct-to-Home Aligners: A Dentist Review (2025) | Noble Dental',
    description: 'Thinking about ordering aligners online? Read this comparison first. Dr. Dhivakaran Reddy compares cost, safety, and results of Invisalign vs Toothsi.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <Header />
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Navigation */}
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Orthodontic Guides
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-black uppercase tracking-widest">
                                Fact Check
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                7 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            Invisalign vs. <span className="text-purple-600">Home Aligners</span> <br />
                            <span className="text-slate-400 font-light">Are You Risking Your Smile?</span>
                        </h1>

                        {/* Author Bio - TRUST SIGNAL */}
                        <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                                    <Image
                                        src="/images/dr-dhivakaran.webp"
                                        alt="Dr. Dhivakaran Reddy"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran Reddy</span>
                                        <ShieldAlert size={14} className="text-blue-500" />
                                    </div>
                                    <p className="text-xs text-slate-500 m-0">Chief Dental Surgeon CMD, Healthflo - Director, NOBLE OS-NEO AI - CTO</p>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Reviewed On</p>
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">September 2025</p>
                            </div>
                        </div>
                    </header>

                    {/* KEY TAKEAWAYS - RULE OF THREE */}
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl mb-12 border-l-4 border-purple-500">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <Zap size={16} className="text-purple-500" /> Quick Verdict
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-purple-500 font-bold">1.</span>
                                <span>Home brands often <strong>skip X-Rays</strong>, missing bone loss and infection risks.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-purple-500 font-bold">2.</span>
                                <span>Complex movements (rotations) usually <strong>fail</strong> without doctor-placed attachments.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-purple-500 font-bold">3.</span>
                                <span>The cost of fixing a &quot;ruined bite&quot; is often <strong>3x more</strong> than the initial savings.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            We see the ads everywhere in Hyderabad. <em>&quot;Straighten your teeth at home for ₹49,999.&quot;</em> Brands like Toothsi, Snazzy, and Whistle promise a dentist-free experience.
                        </p>
                        <p>
                            But as dental specialists, we are seeing the side effects of &quot;DIY Orthodontics&quot; walking into our clinic months later with loose teeth and unaligned bites.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center text-sm font-bold">1</span>
                            The Core Difference: &quot;Supervision&quot;
                        </h2>
                        <p>
                            Moving teeth involves reshaping bone. It is a biological process, not just cosmetic.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                            {/* Comparison Cards (existing logic kept, just polished) */}
                            <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <ShieldAlert className="text-amber-500" /> Direct-to-Home
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-2"><span className="text-red-500">✖</span> No X-Rays (Cannot see bone health).</li>
                                    <li className="flex gap-2"><span className="text-red-500">✖</span> No Gum Assessment.</li>
                                    <li className="flex gap-2"><span className="text-red-500">✖</span> No doctor to fix bite errors.</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-200 dark:border-blue-800/30">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" /> In-Clinic (Invisalign)
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex gap-2"><span className="text-green-500">✔</span> Full OPG/Lat Ceph X-Ray Analysis.</li>
                                    <li className="flex gap-2"><span className="text-green-500">✔</span> Specialist IPR (Polishing).</li>
                                    <li className="flex gap-2"><span className="text-green-500">✔</span> SmartForce Attachments.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                            The Hidden Danger: X-Rays
                        </h2>
                        <p>
                            Direct-to-home brands often skip X-Rays to save cost. If you have short roots or low bone density (which you cannot see from the outside), moving teeth can cause them to become loose or even fall out. At Noble Dental, we never start a case without a full radiographic audit.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-sm font-bold">3</span>
                            The Cost Reality
                        </h2>
                        <p>
                            Yes, Invisalign is more expensive (typically ₹1.5L - ₹3.5L+) compared to ₹50k - ₹70k for home aligners. But you are paying for:
                        </p>
                        <ul>
                            <li><strong>Material:</strong> Invisalign uses patented SmartTrack material (faster, less painful).</li>
                            <li><strong>Safety:</strong> A guarantee that your bite won&apos;t be ruined.</li>
                            <li><strong>Results:</strong> Ability to fix complex overcrowding that simple plastic trays cannot touch.</li>
                        </ul>

                        <hr className="my-12 border-slate-200 dark:border-white/10" />

                        {/* CTA SECTION - POWERFUL ENDING */}
                        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
                                See your future smile instantly
                            </h3>
                            <p className="text-purple-100 mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
                                We use the iTero 5D Scanner to simulate your result in 3 minutes. No messy impressions. No commitment required.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                                <Link
                                    href="/treatments/invisalign"
                                    className="px-8 py-4 bg-white text-purple-900 font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-purple-900/20 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Book Free 3D Scan <CheckCircle2 size={18} />
                                </Link>
                                <a
                                    href="tel:918074512305"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                                >
                                    Talk to Dr. Dhivakaran Reddy <User size={18} className="text-purple-200" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </article>
        </main>
    );
}
