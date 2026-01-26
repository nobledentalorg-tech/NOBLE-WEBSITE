import React from 'react';

import { Award, User, Target, Heart } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Noble Dental Care | Best Dentist in Nallagandla',
    description: 'Dr. Dhivakaran is a leading dentist in Nallagandla, serving the community near Citizens Hospital and Aparna Neo Mall with ethical, microscopic dentistry.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] font-sans">

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <User size={14} /> The Doctor & The Mission
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">
                        Deeply Rooted in <a href="https://en.wikipedia.org/wiki/Nallagandla" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-400 decoration-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">Nallagandla&apos;s</a> Growth.
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        Founded by <strong className="text-slate-900 dark:text-white">Dr. Dhivakaran</strong>, Noble Dental Care was established to bridge the gap between &quot;Corporate Chains&quot; and &quot;Traditional Clinics.&quot;
                        We bring <a href="https://www.citizenshospitals.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Citizens Specialty Hospital</a>-grade sterilization and global microscopic technology directly to your neighborhood.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder for Doctor Image */}
                        <div className="absolute inset-0 bg-slate-200 dark:bg-[#111] flex items-center justify-center text-slate-400">
                            Dr. Dhivakaran Photo
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Owner-Operated Excellence</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-xl h-fit"><Award size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">Not a &quot;Rotating Doctor&quot; Clinic</h4>
                                    <p className="text-slate-500">Unlike corporate chains where doctors change every month, Dr. Dhivakaran is your permanent partner in health. He personally oversees every Implant and Root Canal case.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-xl h-fit"><Target size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">Nallagandla&apos;s First Microscope Center</h4>
                                    <p className="text-slate-500">We introduced Zeiss Microscopic Dentistry to the Serilingampally zone (17.4838°N), ensuring 20x more precision than standard clinics.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-pink-100 dark:bg-pink-900/20 text-pink-600 rounded-xl h-fit"><Heart size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">Community First</h4>
                                    <p className="text-slate-500">We regularly conduct camps for <strong className="text-slate-700 dark:text-slate-300">GHMC Sanitation Workers</strong> and support local schools like Epistemo Global.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
}
