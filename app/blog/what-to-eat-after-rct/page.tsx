
import React from 'react';
import Image from 'next/image';
import { Share2, Clock, User, Bookmark, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'What to Eat After Root Canal Treatment | Noble Dental Care',
    description: 'A dentist-approved diet plan for post-RCT recovery. Learn which foods accelerate healing and which ones to avoid to prevent temporary crown fracture.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <Header />
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Breadcrumb */}
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ChevronLeft size={16} /> Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Patient Education</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Post-RCT Diet: What to Eat (And Avoid) After Your Root Canal.
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 4 min read</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Medically Reviewed</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
                            Congratulations on saving your natural tooth! Now that the <Link href="/treatments/root-canal">Microscopic Root Canal Treatment</Link> is done, your recovery depends largely on what you put on your plate for the next 24-48 hours.
                        </p>

                        <h3>The Golden Rule: Soft & Cool</h3>
                        <p>
                            Until the numbness from the local anesthesia wears off, avoid chewing solid food to prevent biting your cheek or tongue. According to the <a href="https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/root-canal-therapy" target="_blank" rel="noopener noreferrer">American Dental Association (ADA)</a>, sticking to a soft diet reduces stress on the treated tooth.
                        </p>

                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-800 my-8">
                            <h4 className="text-green-800 dark:text-green-100 font-bold mb-4 m-0">✅ Safe Foods (The &quot;Green List&quot;)</h4>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                                <li><strong>Fruit Smoothies:</strong> (Avoid strawberries with seeds).</li>
                                <li><strong>Scrambled Eggs:</strong> excellent protein source.</li>
                                <li><strong>Curd Rice / Khichdi:</strong> Ideally specific for our Hyderabad patients.</li>
                                <li><strong>Mashed Potatoes & Soups:</strong> Ensure they are lukewarm, not piping hot.</li>
                            </ul>
                        </div>

                        <h3>❌ Foods to Avoid (The &quot;Red List&quot;)</h3>
                        <p>
                            The <a href="https://www.mayoclinic.org/tests-procedures/root-canal/about/pac-20384680" target="_blank" rel="noopener noreferrer">Mayo Clinic</a> advises avoiding hard or crunchy foods immediately after the procedure to prevent fracturing the temporary filling.
                        </p>
                        <ul>
                            <li><strong>Crunchy Snacks:</strong> Murukku, Nuts, Popcorn.</li>
                            <li><strong>Sticky Sweets:</strong> Caramel, Chewing Gum (can pull out the temporary filling).</li>
                            <li><strong>Extreme Temperatures:</strong> Very hot coffee or ice cream (if tooth is sensitive).</li>
                        </ul>

                        <h3>Why is a Crown Necessary?</h3>
                        <p>
                            A root canal treated tooth is brittle because it no longer has a blood supply. As per studies in the <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">Journal of Endodontics</a>, placing a crown within 3 days significantly increases the survival rate of the tooth.
                        </p>
                        <p>
                            At Noble Dental Care, we provide <Link href="/treatments/dental-implants">Zirconia Crowns</Link> that are digitally scanned and milled for a perfect fit.
                        </p>

                        <hr className="my-10 border-slate-200 dark:border-white/10" />

                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl text-center">
                            <h3 className="mt-0">Still in Pain?</h3>
                            <p className="mb-6">Mild discomfort is normal, but severe pain is not. If you experience swelling, contact our emergency line immediately.</p>
                            <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                                Contact Dr. Dhivakaran
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
            <Footer />
        </main>
    );
}
