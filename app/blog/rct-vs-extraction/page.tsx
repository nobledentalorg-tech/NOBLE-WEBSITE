import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Clock, User, AlertTriangle, CheckCircle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Root Canal vs. Extraction: Which is Better? | Expert Opinion',
    description: 'Should you save your tooth or pull it? Detailed clinical comparison of Root Canal Treatment vs Dental Implants by Dr. Dhivakaran Reddy.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Navigation */}
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 mb-8 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Clinical Guides
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-black uppercase tracking-widest">
                                Clinical Guide
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                6 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            Root Canal vs. Extraction: <br />
                            <span className="text-slate-400 font-light text-2xl md:text-4xl">Which is Better for Your Health?</span>
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
                                        <ShieldCheck size={14} className="text-blue-500" />
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
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl mb-12 border-l-4 border-orange-500">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <Zap size={16} className="text-orange-500" /> Quick Verdict
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-orange-500 font-bold">1.</span>
                                <span><strong>Biological Superiority:</strong> Nothing functions like your natural tooth. Root Canal (RCT) preserves your natural bite and jawbone.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-orange-500 font-bold">2.</span>
                                <span><strong>Cost Realities:</strong> Extraction seems cheap, but replacing a missing tooth with an Implant is <strong>3x-4x more expensive</strong> long-term.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-orange-500 font-bold">3.</span>
                                <span><strong>Structural Integrity:</strong> Removing a tooth leads to &quot;drifting&quot;—where adjacent teeth tilt, ruining your entire bite alignment.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-orange max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            &quot;Doctor, can&apos;t we just remove the tooth?&quot; This is a common question we hear at Noble Dental Care. While extraction seems cheaper and faster, the long-term biological cost is high.
                        </p>

                        <h3>The Biological Gold Standard: Save the Tooth</h3>
                        <p>
                            The <a href="https://www.aae.org/patients/root-canal-treatment/dispelling-myths/" target="_blank" rel="noopener noreferrer">American Association of Endodontists (AAE)</a> clearly states that nothing looks, feels, or functions exactly like your natural tooth. Saving your natural tooth via <Link href="/treatments/root-canal">Root Canal Treatment</Link> should always be the first choice if the structure is viable.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                            <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20">
                                <h4 className="flex items-center gap-2 text-green-800 dark:text-green-300 font-bold mb-4 mt-0"><CheckCircle size={20} /> Pros of Root Canal</h4>
                                <ul className="text-sm space-y-3 mt-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                    <li className="flex gap-2"><span>✅</span> Preserves natural bite force and sensation.</li>
                                    <li className="flex gap-2"><span>✅</span> Prevents jawbone loss (resorption).</li>
                                    <li className="flex gap-2"><span>✅</span> Significantly cheaper than Implant + Crown.</li>
                                    <li className="flex gap-2"><span>✅</span> Completed in 1-2 visits (Microscopic RCT).</li>
                                </ul>
                            </div>
                            <div className="bg-red-50/50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
                                <h4 className="flex items-center gap-2 text-red-800 dark:text-red-300 font-bold mb-4 mt-0"><AlertTriangle size={20} /> Cons of Extraction</h4>
                                <ul className="text-sm space-y-3 mt-2 text-slate-700 dark:text-slate-300 list-none p-0">
                                    <li className="flex gap-2"><span>❌</span> Irreversible bone loss occurs immediately.</li>
                                    <li className="flex gap-2"><span>❌</span> Adjacent teeth shift/drift into the gap.</li>
                                    <li className="flex gap-2"><span>❌</span> Replacement (Implants) are 3x more expensive.</li>
                                    <li className="flex gap-2"><span>❌</span> Total treatment time is 3-6 months.</li>
                                </ul>
                            </div>
                        </div>

                        <h3>When is Extraction Necessary?</h3>
                        <p>
                            According to global clinical standards, extraction is only recommended as a &quot;last resort&quot; when:
                        </p>
                        <ul className="space-y-4">
                            <li><strong>Vertical Root Fracture:</strong> If the crack extends deep into the root, it cannot be saved.</li>
                            <li><strong>Grade 3 Mobility:</strong> Severe gum disease resulting in zero bone support.</li>
                            <li><strong>Non-Restorable Decay:</strong> When too little healthy tooth remains to hold a crown.</li>
                        </ul>

                        <h3>The Cost Comparison</h3>
                        <p>
                            Many patients choose extraction to save money, but the cost of replacing the tooth later is inevitably higher.
                        </p>

                        <div className="not-prose bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-100 dark:border-white/5 my-8">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-800">
                                        <th className="py-4 font-bold text-slate-900 dark:text-white">Solution</th>
                                        <th className="py-4 font-bold text-slate-900 dark:text-white">Est. Cost Range</th>
                                        <th className="py-4 font-bold text-slate-900 dark:text-white">Long Term Value</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr>
                                        <td className="py-4 font-medium text-slate-700 dark:text-slate-300">Microscopic RCT + Zirconia Crown</td>
                                        <td className="py-4 font-bold text-slate-900 dark:text-white">₹8k - ₹15k</td>
                                        <td className="py-4 text-green-600 font-bold">Highest</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 font-medium text-slate-700 dark:text-slate-300">Extraction + Dental Implant</td>
                                        <td className="py-4 font-bold text-slate-900 dark:text-white">₹35k - ₹55k</td>
                                        <td className="py-4 text-slate-500">Modern Standard</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 font-medium text-slate-700 dark:text-slate-300">Extraction (No replacement)</td>
                                        <td className="py-4 font-bold text-slate-900 dark:text-white">₹1.5k - ₹3k</td>
                                        <td className="py-4 text-red-500 font-bold">Lowest (Bone Loss)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-orange-600 dark:bg-orange-700 rounded-3xl p-8 md:p-12 text-center text-white my-12 shadow-2xl shadow-orange-900/20">
                            <h3 className="text-2xl md:text-3xl font-black mb-4 text-white m-0">Confused About Saving Your Tooth?</h3>
                            <p className="text-orange-100 mb-8 max-w-lg mx-auto leading-relaxed">
                                Our advanced Zeiss Microscopes allow us to save teeth that other clinics might condemn to extraction. Get a second opinion before you pull it.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
                                >
                                    Request 3D Assessment <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </main>
    );
}
