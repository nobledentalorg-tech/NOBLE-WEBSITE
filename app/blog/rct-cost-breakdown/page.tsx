
import React from 'react';
import { IndianRupee, User, Info, Check } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'Cost of Root Canal Treatment in Hyderabad (2025 Guide) | Noble Dental',
    description: 'Transparent breakdown of RCT costs in Nallagandla. Why does price vary? Microscopic vs Standard RCT pricing explained.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <Header />
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">Financial Guide</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Root Canal Cost in Hyderabad: What Are You Paying For?
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2"><IndianRupee size={16} /> Pricing Analysis</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-green max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
                            The average cost of a Root Canal Treatment (RCT) in Hyderabad ranges from <strong>₹3,500 to ₹10,000</strong>. Why is there such a wide gap? The difference lies in the technology used and the skill of the specialist.
                        </p>

                        <h3>1. Standard vs. Microscopic RCT</h3>
                        <p>
                            Most clinics offer standard RCTs using naked-eye visualization. At Noble Dental Care, we adhere to <a href="https://www.who.int/news-room/fact-sheets/detail/oral-health" target="_blank" rel="noopener noreferrer">WHO standards</a> for infection control by using <strong>Dental Microscopes (Zeiss)</strong>.
                        </p>
                        <ul>
                            <li><strong>Standard RCT (₹3,500+):</strong> Basic cleaning, often requires multiple visits.</li>
                            <li><strong>Microscopic RCT (₹6,000+):</strong> 20x magnification, finds hidden canals (MB2), and ensures 99% success.</li>
                        </ul>

                        <h3>2. Re-Treatment Costs</h3>
                        <p>
                            A failed root canal is painful and expensive to fix. The <a href="https://www.fdiworlddental.org/" target="_blank" rel="noopener noreferrer">FDI World Dental Federation</a> highlights that &quot;Single-visit success depends on thorough debridement.&quot; Cheap RCTs often leave bacteria behind, leading to reinfection.
                        </p>

                        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                            <h3 className="mt-0 text-center">Transparent Pricing at Noble Dental</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Consultation</span>
                                    <span className="font-bold">₹300</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Digital X-Ray (RVG)</span>
                                    <span className="font-bold">₹150</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span>Microscopic RCT (Molar)</span>
                                    <span className="font-bold">₹6,000</span>
                                </div>
                            </div>
                            <p className="text-center mt-6">
                                <Link href="/tariff" className="text-blue-600 font-bold hover:underline">View Full Tariff Card</Link>
                            </p>
                        </div>

                        <h3>Are There Hidden Costs?</h3>
                        <p>
                            Common hidden costs in other clinics include:
                        </p>
                        <ul className="space-y-1">
                            <li className="flex gap-2 items-center"><Info size={16} className="text-blue-500" /> Sterile Kits (PPE) charged extra per visit.</li>
                            <li className="flex gap-2 items-center"><Info size={16} className="text-blue-500" /> X-Rays charged separately each time.</li>
                        </ul>
                        <p>
                            <strong>Our Promise:</strong> We offer package pricing with no hidden consumables charges.
                        </p>
                    </div>

                </div>
            </article>
            <Footer />
        </main>
    );
}
