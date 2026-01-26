import React from 'react';
import Image from 'next/image';
import { Clock, User, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Root Canal vs. Extraction: Which is Better? | Expert Opinion',
    description: 'Should you save your tooth or pull it? Detailed clinical comparison of Root Canal Treatment vs Dental Implants by Dr. Dhivakaran.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">Clinical Guide</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Root Canal vs. Extraction: Which is Better for Your Health?
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-orange max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
                            &quot;Doctor, can&apos;t we just remove the tooth?&quot; This is a common question we hear at Noble Dental Care. While extraction seems cheaper and faster, the long-term biological cost is high.
                        </p>

                        <h3>The Biological Gold Standard: Save the Tooth</h3>
                        <p>
                            The <a href="https://www.aae.org/patients/root-canal-treatment/dispelling-myths/" target="_blank" rel="noopener noreferrer">American Association of Endodontists (AAE)</a> clearly states that nothing looks, feels, or functions exactly like your natural tooth. Saving your natural tooth via <Link href="/treatments/root-canal">Root Canal Treatment</Link> should always be the first choice if the structure is viable.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100">
                                <h4 className="flex items-center gap-2 text-green-800 dark:text-green-300 mt-0"><CheckCircle size={20} /> Pros of Root Canal</h4>
                                <ul className="text-sm space-y-2 mt-2">
                                    <li>Preserves natural bite force.</li>
                                    <li>Prevents bone loss/resorption.</li>
                                    <li>Cheaper than Implant + Crown.</li>
                                    <li>Completed in 1-2 visits.</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100">
                                <h4 className="flex items-center gap-2 text-red-800 dark:text-red-300 mt-0"><AlertTriangle size={20} /> Cons of Extraction</h4>
                                <ul className="text-sm space-y-2 mt-2">
                                    <li>Irreversible bone loss occurs immediately.</li>
                                    <li>Adjacent teeth shift (drift) into the gap.</li>
                                    <li>Implants are 3x more expensive.</li>
                                    <li>Longer healing time (3 months).</li>
                                </ul>
                            </div>
                        </div>

                        <h3>When is Extraction Necessary?</h3>
                        <p>
                            According to the <a href="https://www.cdc.gov/oralhealth/conditions/index.html" target="_blank" rel="noopener noreferrer">CDC Oral Health Guidelines</a>, extraction is only recommended when:
                        </p>
                        <ul>
                            <li>The tooth has a vertical root fracture.</li>
                            <li>Bone support is completely lost (Grade 3 Mobility).</li>
                            <li>The tooth is impacted (Wisdom Teeth).</li>
                        </ul>

                        <h3>The Cost Comparison</h3>
                        <p>
                            Many patients choose extraction to save money, but the cost of replacing the tooth is much higher.
                            <br /><br />
                            <strong>Option A:</strong> Root Canal + Crown ≈ ₹8,000 - ₹12,000.
                            <br />
                            <strong>Option B:</strong> Extraction + <Link href="/treatments/dental-implants">Dental Implant</Link> ≈ ₹30,000 - ₹45,000.
                        </p>

                        <h3>Conclusion</h3>
                        <p>
                            If your tooth can be saved, save it. Technology like our Zeiss Microscope allows us to save even severely decayed teeth with high predictability.
                        </p>

                    </div>

                </div>
            </article>
        </main>
    );
}
