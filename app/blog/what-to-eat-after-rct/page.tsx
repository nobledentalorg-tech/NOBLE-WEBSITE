import React from 'react';
import Image from 'next/image';
import { Share2, Clock, User, Bookmark, ArrowLeft, ShieldCheck, Zap, Utensils, Coffee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'What to Eat After Root Canal Treatment | Noble Dental Care',
    description: 'A dentist-approved diet plan for post-RCT recovery. Learn which foods accelerate healing and which ones to avoid to prevent temporary crown fracture.',
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
                                Aftercare Guide
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                4 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            The Post-RCT Diet: <span className="text-blue-600">What to Eat</span> <br />
                            <span className="text-slate-400 font-light text-2xl md:text-4xl">To Accelerate Your Healing.</span>
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
                                    <p className="text-xs text-slate-500 m-0">MDS, Conservative Dentistry • Gold Provider</p>
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
                            <Zap size={16} className="text-blue-500" /> Survival Tips
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">1.</span>
                                <span><strong>Wait for Numbness:</strong> Do not eat until the anesthesia wears off to avoid accidental cheek or tongue bites.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">2.</span>
                                <span><strong>Soft & Cool:</strong> Stick to lukewarm smoothies, mashed potatoes, and curd rice for the first 24 hours.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-blue-500 font-bold">3.</span>
                                <span><strong>Opposite Side:</strong> Chew on the untreated side until your permanent Zirconia crown is placed.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            Congratulations on saving your natural tooth! Your recovery depends largely on what you put on your plate for the next 48 hours.
                        </p>

                        <h3>The Golden Rule: Soft & Semi-Solid</h3>
                        <p>
                            According to the <a href="https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/root-canal-therapy" target="_blank" rel="noopener noreferrer">ADA</a>, reducing mechanical stress on the treated tooth is the #1 way to prevent post-op discomfort.
                        </p>

                        {/* Diet Comparison Grid */}
                        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                            <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20">
                                <h4 className="flex items-center gap-2 text-green-800 dark:text-green-300 font-bold mb-4 mt-0"><Utensils size={20} /> The Green List</h4>
                                <ul className="text-sm space-y-3 mt-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                    <li className="flex gap-2"><span>✅</span> <strong>Fruit Smoothies:</strong> (Seedless only).</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>Scrambled Eggs:</strong> High-protein healing.</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>Curd Rice / Khichdi:</strong> Mild and comforting.</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>Lukewarm Soups:</strong> Avoid spicy or boiling hot.</li>
                                </ul>
                            </div>
                            <div className="bg-red-50/50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
                                <h4 className="flex items-center gap-2 text-red-800 dark:text-red-300 font-bold mb-4 mt-0"><Coffee size={20} /> The Red List</h4>
                                <ul className="text-sm space-y-3 mt-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                    <li className="flex gap-2"><span>❌</span> <strong>Crunchy Snacks:</strong> Murukku, Nuts, Chips.</li>
                                    <li className="flex gap-2"><span>❌</span> <strong>Sticky Sweets:</strong> Caramel, Chewing Gum.</li>
                                    <li className="flex gap-2"><span>❌</span> <strong>Hard Fruits:</strong> Apples (without slicing).</li>
                                    <li className="flex gap-2"><span>❌</span> <strong>Boiling Hot Drinks:</strong> Can trigger sensitivity.</li>
                                </ul>
                            </div>
                        </div>

                        <h3>Why a Permanent Crown is Mandatory</h3>
                        <p>
                            A root canal treated tooth is structurally "brittle" because it no longer has a blood supply. Studies in the <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">Journal of Endodontics</a> show that placing a crown within 7 days increases the tooth&apos;s lifespan by 6x.
                        </p>
                        <p>
                            At Noble Dental Care, we use <strong>Micro-Scanning technology</strong> to create Zirconia crowns that are indistinguishable from your natural teeth.
                        </p>

                        {/* CTA SECTION */}
                        <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 md:p-12 text-center text-white my-12 relative overflow-hidden">
                            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10 text-white m-0">
                                Ready for Your Permanent Crown?
                            </h3>
                            <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
                                Don't leave your tooth vulnerable with just a temporary filling. Schedule your Zirconia Crown fitting today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2"
                                >
                                    Book Crown Fitting <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </main>
    );
}
