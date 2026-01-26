
import React from 'react';
import { Share2, Clock, User, ArrowLeft, ShieldAlert, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'Invisalign vs. Toothsi / Direct-to-Home Aligners: A Dentist Review (2025) | Noble Dental',
    description: 'Thinking about ordering aligners online? Read this comparison first. Dr. Dhivakaran compares cost, safety, and results of Invisalign vs Toothsi.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <Header />
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Breadcrumb */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-4 block">Orthodontic Guide</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Invisalign vs. Direct-to-Home Aligners: Which is Safe?
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                            The &quot;at-home&quot; scans are convenient, but are they risking your permanent smile?
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 7 min read</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
                            We see the ads everywhere in Hyderabad. <em>&quot;Straighten your teeth at home for ₹49,999.&quot;</em> Brands like Toothsi, Snazzy, and Whistle promise a dentist-free experience. But as dental specialists, we are seeing the side effects of &quot;DIY Orthodontics&quot; walking into our clinic months later.
                        </p>

                        <h3>The Core Difference: &quot;Supervision&quot;</h3>
                        <p>
                            Moving teeth involves reshaping bone. It is a biological process, not just cosmetic.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                            <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <ShieldAlert className="text-amber-500" /> Direct-to-Home
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-2"><span className="text-red-500">✖</span> No X-Rays (Cannot see bone health).</li>
                                    <li className="flex gap-2"><span className="text-red-500">✖</span> No Gum Assessment.</li>
                                    <li className="flex gap-2"><span className="text-red-500">✖</span> If bite goes wrong, no doctor to fix it immediately.</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-200 dark:border-blue-800/30">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" /> In-Clinic (Invisalign)
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                    <li className="flex gap-2"><span className="text-green-500">✔</span> Full OPG/Lat Ceph X-Ray Analysis.</li>
                                    <li className="flex gap-2"><span className="text-green-500">✔</span> IPR (Polishing) done specifically by a doctor.</li>
                                    <li className="flex gap-2"><span className="text-green-500">✔</span> Attachments placed for complex rotations.</li>
                                </ul>
                            </div>
                        </div>

                        <h3>Why X-Rays Matter</h3>
                        <p>
                            Direct-to-home brands often skip X-Rays to save cost. If you have short roots or low bone density (which you cannot see from the outside), moving teeth can cause them to becoming loose or even fall out. At Noble Dental, we never start a case without a full radiographic audit.
                        </p>

                        <h3>Cost Comparison</h3>
                        <p>
                            Yes, Invisalign is more expensive (typically ₹1.5L - ₹3.5L+) compared to ₹50k - ₹70k for home aligners. But you are paying for:
                        </p>
                        <ul>
                            <li><strong>Material:</strong> Invisalign uses patented SmartTrack material (faster, less painful).</li>
                            <li><strong>Safety:</strong> A guarantee that your bite won't be ruined.</li>
                            <li><strong>Results:</strong> Ability to fix complex overcrowding that simple plastic trays cannot touch.</li>
                        </ul>

                        <h3>Conclusion: Don&apos;t Gambles with Bone</h3>
                        <p>
                            If you have a very minor gap, home aligners might work. But for 90% of cases, you need a doctor&apos;s hand. Saving ₹50,000 now might cost you ₹2,00,000 in repair work later.
                        </p>

                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl text-center mt-12">
                            <h3 className="mt-0">See your future smile first</h3>
                            <p className="mb-6">We use the iTero 5D Scanner to simulate your result instantly. No commitment required.</p>
                            <Link href="/treatments/invisalign" className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors">
                                Book Free 3D Scan
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
            <Footer />
        </main>
    );
}
