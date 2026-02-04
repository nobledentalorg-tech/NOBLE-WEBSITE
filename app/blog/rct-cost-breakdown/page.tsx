
import React from 'react';
import { IndianRupee, User, Info, Check, ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveCostEstimator from '@/components/interactive/CostEstimator';

export const metadata = {
    title: 'Cost of Root Canal Treatment in Hyderabad (2025 Guide) | Noble Dental',
    description: 'Transparent breakdown of RCT costs in Nallagandla. Why does price vary? Microscopic vs Standard RCT pricing explained.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Navigation */}
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Financial Guides
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-black uppercase tracking-widest">
                                Glass Wallet
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                4 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            Root Canal Cost: <span className="text-green-600">The Honest Breakdown</span> <br />
                            <span className="text-slate-400 font-light">Why Prices Range from ₹3k to ₹10k.</span>
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
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl mb-12 border-l-4 border-green-500">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <IndianRupee size={16} className="text-green-500" /> Price Check
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-green-500 font-bold">1.</span>
                                <span><strong>Microscopic RCT</strong> costs more but has a 99% success rate (vs 70% for standard).</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-green-500 font-bold">2.</span>
                                <span>Cheap clinics often charge extra for <strong>Sterile Kits (PPE)</strong> and X-Rays per visit.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-green-500 font-bold">3.</span>
                                <span>Failed RCT re-treatment costs <strong>2x more</strong> than doing it right the first time.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-green max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            The average cost of a Root Canal Treatment (RCT) in Hyderabad ranges from <strong>₹3,500 to ₹10,000</strong>. Why is there such a wide gap?
                        </p>
                        <p>
                            The difference lies in the technology used (Microscope vs. Naked Eye) and the skill of the specialist (MDS vs. General Dentist). Use our calculator below to see what your treatment might cost based on complexity.
                        </p>

                        {/* INTERACTIVE CALCULATOR INJECTION */}
                        <div className="not-prose my-12">
                            <InteractiveCostEstimator />
                            <p className="text-center text-xs text-slate-400 mt-4">
                                *Estimates are based on 2025 Standard of Care rates in Nallagandla/Tellapur.
                            </p>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                            Standard vs. Advanced Tech
                        </h2>
                        <p>
                            Most clinics offer standard RCTs using naked-eye visualization. At Noble Dental Care, we adhere to <a href="https://www.who.int/news-room/fact-sheets/detail/oral-health" target="_blank" rel="noopener noreferrer">WHO standards</a> for infection control by using <strong>Dental Microscopes (Zeiss)</strong>.
                        </p>
                        <ul>
                            <li><strong>Standard RCT (₹3,500+):</strong> Basic cleaning, often requires multiple visits. High risk of missed canals.</li>
                            <li><strong>Microscopic RCT (₹6,000+):</strong> 20x magnification, finds hidden canals (MB2), and ensures infection is truly gone.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center text-sm font-bold">2</span>
                            Hidden Costs to Watch For
                        </h2>
                        <p>
                            Many &quot;low cost&quot; clinics add hidden charges to your bill later. Always ask before starting:
                        </p>
                        <ul className="space-y-1">
                            <li className="flex gap-2 items-center"><Info size={16} className="text-red-500" /> <strong>PPE Kits:</strong> Are they charged ₹300 per visit?</li>
                            <li className="flex gap-2 items-center"><Info size={16} className="text-red-500" /> <strong>X-Rays:</strong> Is the ₹150 charge per X-Ray or included?</li>
                            <li className="flex gap-2 items-center"><Info size={16} className="text-red-500" /> <strong>Medication:</strong> Do they sell you medicines directly at a markup?</li>
                        </ul>
                        <p>
                            <strong>Our Promise:</strong> We offer package pricing. What you see on the estimator is what you pay. No clean-up fees. No &quot;Bio-Waste&quot; fees.
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 mt-12">
                            <h3 className="mt-0 text-center font-bold mb-6">Noble Dental Transparency Card</h3>
                            <div className="space-y-4 max-w-sm mx-auto">
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Specialist Consultation</span>
                                    <span className="font-bold text-slate-900 dark:text-white">₹300</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Digital X-Ray (RVG)</span>
                                    <span className="font-bold text-slate-900 dark:text-white">₹150</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Microscopic RCT (Anterior)</span>
                                    <span className="font-bold text-slate-900 dark:text-white">₹4,500</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Microscopic RCT (Molar)</span>
                                    <span className="font-bold text-slate-900 dark:text-white">₹6,000</span>
                                </div>
                            </div>
                            <p className="text-center mt-6">
                                <Link href="/tariff" className="text-blue-600 font-bold hover:underline">Download Official Tariff PDF</Link>
                            </p>
                        </div>

                    </div>

                </div>

            </article>
        </main>
    );
}
