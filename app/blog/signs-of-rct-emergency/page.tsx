
import React from 'react';
import { AlertTriangle, User, Phone, ArrowLeft, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: '5 Signs Your Toothache is a Root Canal Emergency | Noble Dental',
    description: 'How to tell if you need an emergency root canal. Symptoms: Swelling, Night Pain, and Sensitivity to Heat.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Navigation */}
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-600 mb-8 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Emergency Guides
                    </Link>

                    {/* HERO SECTION */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Urgent Care
                            </span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                3 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                            5 Signs Your Toothache is a <span className="text-red-600">Root Canal Emergency</span>.
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
                                        <ShieldAlert size={14} className="text-red-500" />
                                    </div>
                                    <p className="text-xs text-slate-500 m-0">Chief Dental Surgeon CMD, Healthflo - Director, NOBLE OS-NEO AI - CTO</p>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block">
                                <Link href="tel:+918610425342" className="flex items-center gap-2 text-red-600 font-black text-lg hover:text-red-700 transition-colors">
                                    <Phone size={20} className="animate-pulse" />
                                    86104 25342
                                </Link>
                                <p className="text-xs text-slate-400 font-medium">For Immediate Assistance</p>
                            </div>
                        </div>
                    </header>

                    {/* KEY TAKEAWAYS - RULE OF THREE */}
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl mb-12 border-l-4 border-red-500">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                            <AlertTriangle size={16} className="text-red-500" /> Red Flags (Act Now)
                        </h3>
                        <ul className="space-y-3 m-0">
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-red-500 font-bold">1.</span>
                                <span><strong>Night Pain:</strong> If tooth pain wakes you up from sleep, the nerve is likely dying.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-red-500 font-bold">2.</span>
                                <span><strong>Heat Sensitivity:</strong> Lingering pain after sipping hot coffee is a critical warning sign.</span>
                            </li>
                            <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                <span className="text-red-500 font-bold">3.</span>
                                <span><strong>Facial Swelling:</strong> A puffiness near the jaw can block airways. Do not wait.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-red max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                            Not all toothaches can wait until Monday. An infected pulp (nerve) can spread bacteria to your jawbone and even your bloodstream.
                        </p>

                        <h3>1. Spontaneous Night Pain</h3>
                        <p>
                            If pain wakes you up from sleep without any trigger (like eating), it indicates irreversible pulpitis. The <a href="https://www.nhs.uk/conditions/root-canal-treatment/" target="_blank" rel="noopener noreferrer">NHS Guide</a> confirms that nocturnal pain is a classic sign of nerve death.
                        </p>

                        <h3>2. Lingering Sensitivity to Heat</h3>
                        <p>
                            Does your tooth hurt *after* you finish your hot coffee? If the pain lingers for more than 10-15 seconds, the nerve is dying. Cold sensitivity is common, but heat sensitivity is a <Link href="/treatments/root-canal">red flag for RCT</Link>.
                        </p>

                        <h3>3. Gum Swelling (The &quot;Pimple&quot;)</h3>
                        <p>
                            A small pimple (fistula) on your gums that releases a bad taste is actually an abscess draining pus. This requires immediate drainage and cleaning.
                        </p>

                        <h3>4. Pain on Chewing</h3>
                        <p>
                            If you cannot tap on the tooth or chew food, the infection has spread from the root tip into the surrounding bone (Periapical Periodontitis).
                        </p>

                        <div className="bg-red-600 text-white p-8 rounded-3xl my-12 shadow-xl shadow-red-900/30 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-black mb-4 text-white m-0">Do Not Ignore Swelling</h4>
                                <p className="mb-8 text-red-100 text-lg">
                                    Facial swelling can be life-threatening if it spreads to the airway (Ludwig&apos;s Angina). We offer prioritized slots for swelling cases.
                                </p>
                                <Link href="tel:+918610425342" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-black rounded-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 text-lg">
                                    <Phone size={20} className="fill-red-600" />
                                    Call Emergency Line
                                </Link>
                            </div>

                            {/* Decorative background pattern */}
                            <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                                <AlertTriangle size={300} />
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </main>
    );
}
