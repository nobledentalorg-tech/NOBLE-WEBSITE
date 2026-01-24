
import React from 'react';
import { AlertTriangle, User, Phone } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: '5 Signs Your Toothache is a Root Canal Emergency | Noble Dental',
    description: 'How to tell if you need an emergency root canal. Symptoms: Swelling, Night Pain, and Sensitivity to Heat.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <Header />
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-4 block">Emergency Guide</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            5 Signs Your Toothache is Actually a Root Canal Emergency.
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2 text-red-500 font-bold"><Phone size={16} /> 24/7 Helpline: 86104 25342</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-red max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
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

                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-800 my-8 text-center">
                            <h4 className="text-red-800 dark:text-red-100 font-bold mb-4 m-0">Do Not Ignoring Swelling</h4>
                            <p className="mb-4">
                                Facial swelling can be life-threatening if it spreads to the airway (Ludwig&apos;s Angina).
                            </p>
                            <Link href="/contact" className="inline-block px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">
                                Call Emergency Dentist Now
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
            <Footer />
        </main>
    );
}
