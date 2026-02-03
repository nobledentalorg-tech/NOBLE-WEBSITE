
import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Clock, User, AlertTriangle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Wisdom Tooth Removal Diet: When Can I Eat Solid Food? | Noble Dental Nallagandla',
    description: 'Day-by-day diet guide for wisdom tooth recovery in Hyderabad. Learn when to eat Curd Rice, Idli, and which spicy foods to avoid to prevent Dry Socket.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Navigation */}
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Recovery Guides
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-widest">
                                Recovery Manual
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                6 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            Wisdom Tooth Diet: <br />
                            <span className="text-blue-600 font-light">When Can I Eat Solid Food?</span>
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
                                    <p className="text-xs text-slate-500 m-0">MDS, Conservative Dentistry • Chief Clinician</p>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Clinic Policy</p>
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Medically Verified</p>
                            </div>
                        </div>
                    </header>

                    {/* KEY TAKEAWAYS - RULE OF THREE */}
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl mb-12 border-l-4 border-blue-500">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <Zap size={16} className="text-blue-500" /> The Recovery Logic
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">1.</span>
                                <span><strong>Clot Protection:</strong> The goal of Day 1-3 is to protect the blood clot. Losing it results in an agonizing Dry Socket.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">2.</span>
                                <span><strong>No Straws / No Sucking:</strong> For 7 days, drink directly from a glass. Vacuum pressure is the #1 enemy of healing.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">3.</span>
                                <span><strong>Hyderabad Logic:</strong> Stick to Curd Rice (mushy) and Idli (soaked). Avoid Biryani for 10 days to prevent rice trapping.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            The Hunger is Real. You just had your <Link href="/treatments/tooth-extraction">wisdom tooth removed</Link> and you&apos;re starving—but terrified of pain.
                        </p>

                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 my-8 not-prose">
                            <h4 className="text-red-800 dark:text-red-300 font-bold mb-2 flex items-center gap-2 m-0">
                                <AlertTriangle size={20} /> The Red Area: NO STRAWS
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0 leading-relaxed">
                                Never use a straw for 7 days. The sucking motion can pull out the blood clot, causing <strong>Dry Socket</strong>—a condition 10x more painful than the toothache itself.
                            </p>
                        </div>

                        <h2>📅 The Recovery Timeline</h2>

                        {/* Day 1 Card */}
                        <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-6 mb-6 not-prose">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">01</span>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white m-0 uppercase tracking-tight">Day 1: Cold Liquids Only</h3>
                            </div>
                            <p className="text-sm text-slate-500 mb-4">Focus: Stopping bleeding and numbing the site.</p>
                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                <li className="flex items-center gap-2">🍦 <strong>Ice Cream:</strong> (Plain Vanilla/Butterscotch only).</li>
                                <li className="flex items-center gap-2">🥤 <strong>Chilled Milkshakes:</strong> (No Straw).</li>
                                <li className="flex items-center gap-2">🥣 <strong>Cold Curd / Yogurt:</strong> Highly soothing.</li>
                                <li className="flex items-center gap-2">🧊 <strong>Rule:</strong> Absolutely nothing hot or spicy.</li>
                            </ul>
                        </div>

                        {/* Day 2-3 Card */}
                        <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-6 mb-6 not-prose">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">02</span>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white m-0 uppercase tracking-tight">Day 2-3: The No-Chew Phase</h3>
                            </div>
                            <p className="text-sm text-slate-500 mb-4">Focus: Nutrition without jaw effort.</p>
                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                <li className="flex items-center gap-2">🍚 <strong>Mushy Curd Rice:</strong> The Hyderabad recovery gold standard.</li>
                                <li className="flex items-center gap-2">🥔 <strong>Mashed Potatoes:</strong> With butter/ghee for energy.</li>
                                <li className="flex items-center gap-2">🥘 <strong>Filtered Dal/Sambar:</strong> Eaten with extra-soft rice.</li>
                                <li className="flex items-center gap-2">🍳 <strong>Soft Scrambled Eggs:</strong> Excellent protein source.</li>
                            </ul>
                        </div>

                        {/* Day 4-7 Card */}
                        <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-6 mb-12 not-prose">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">03</span>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white m-0 uppercase tracking-tight">Day 4-7: Semi-Solid Transition</h3>
                            </div>
                            <p className="text-sm text-slate-500 mb-4">Focus: Retraining your jaw slowly.</p>
                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                <li className="flex items-center gap-2">🍲 <strong>Khichdi / Pongal:</strong> High nutrient density.</li>
                                <li className="flex items-center gap-2">🧀 <strong>Soft Paneer:</strong> Cut into tiny, soft cubes.</li>
                                <li className="flex items-center gap-2">🍝 <strong>Macaroni:</strong> Well-cooked (mushy) pasta.</li>
                                <li className="flex items-center gap-2">🍌 <strong>Soft Fruits:</strong> Bananas or ripe Papaya.</li>
                            </ul>
                        </div>

                        <h2>❌ The Biryani Warning (Day 1-10)</h2>
                        <p>
                            Living in Hyderabad, the temptation for Biryani is high. However, <strong>loose rice grains are the #1 cause of post-extraction infections.</strong> Grains get trapped deep in the socket and rot, causing infection. Stick to "gooey" rice formats until the socket has mostly closed (usually Day 10+).
                        </p>

                        <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 md:p-12 text-center text-white my-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10 text-white m-0">
                                Experiencing Throbbing Pain?
                            </h3>
                            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
                                If pain is increasing after Day 3, or if you notice a foul smell, you may have <strong>Dry Socket</strong>. This is a dental emergency.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                                <Link
                                    href="/emergency"
                                    className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-900/30 flex items-center justify-center gap-2"
                                >
                                    Request Emergency Visit <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </main>
    );
}
