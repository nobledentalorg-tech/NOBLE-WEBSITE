
import React from 'react';
import { Share2, Clock, User, ArrowLeft, ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'Can I Avoid a Root Canal? When to Save vs Extract | Noble Dental Nallagandla',
    description: 'Searching for how to avoid root canal? Read this honest guide by Dr. Dhivakaran. Learn when antibiotics work, when they fail, and why saving your natural tooth is better than implants.',
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
                        <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-4 block">Patient Education</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Can I Avoid a Root Canal? The Honest Truth.
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                            Is there an alternative? Can antibiotics fix it? Here is a straightforward guide to your options.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
                            We see this search trend rising in Hyderabad: <em>"How to avoid root canal naturally"</em> or <em>"Root canal alternative medicine."</em>
                        </p>
                        <p>
                            I understand the hesitation. Root canals have a bad reputation for being painful (though <Link href="/treatments/root-canal">modern microscopic treatment</Link> is painless). Patients often ask: <strong>"Can't I just take medicine?"</strong>
                        </p>

                        <h3>The "Antibiotic Myth"</h3>
                        <p>
                            Here is the hard medical truth: <strong>Antibiotics cannot cure a tooth infection.</strong> They can only temporarily reduce the swelling.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex gap-4 items-start bg-red-50 dark:bg-red-900/10 p-4 rounded-xl">
                                <XCircle className="text-red-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-red-700 dark:text-red-400 block mb-1">Why Medicine Fails</strong>
                                    <span className="text-slate-600 dark:text-slate-400 text-sm">Once the nerve inside the tooth is dead, there is no blood supply to carry the antibiotic into the tooth. The infection effectively "hides" inside the root, safe from the medicine.</span>
                                </div>
                            </li>
                        </ul>

                        <h3>Option 1: Save it (Root Canal)</h3>
                        <p>
                            This is the gold standard. We clean the infection from the inside, seal it, and place a crown. You keep your natural tooth for life.
                        </p>
                        <p>
                            <strong>Cost:</strong> ₹4,500 - ₹7,000 (Treatment) + Crown.<br />
                            <strong>Pain:</strong> Zero (with anesthesia).
                        </p>

                        <h3>Option 2: Extract it (Removal)</h3>
                        <p>
                            This is the only <em>permanent</em> alternative. If you remove the tooth, the pain goes away. But this creates new problems:
                        </p>
                        <ul>
                            <li><strong>Bone Loss:</strong> Your jawbone shrinks over time.</li>
                            <li><strong>Chewing Difficulty:</strong> You lose 10-20% of chewing power per tooth.</li>
                            <li><strong>Replacement Cost:</strong> To replace it later with a <Link href="/treatments/dental-implants">Dental Implant</Link>, it will cost ₹25,000+, which is 3x more expensive than saving it now.</li>
                        </ul>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800">
                            <h3 className="text-blue-800 dark:text-blue-100 mt-0">My Recommendation</h3>
                            <p className="mb-0 text-slate-700 dark:text-slate-300">
                                As a biological dentist, I always advise: <strong>Save the natural tooth whenever possible.</strong> Nothing artificial is as good as what nature gave you.
                                <br /><br />
                                However, if the tooth is structurally destroyed (cracked below gum level), extraction might be the only safe choice.
                            </p>
                        </div>

                        <h3>FAQs on Safety</h3>
                        <p><strong>Is it safe?</strong><br />Yes. We use 100% sterile protocols. There is no scientific evidence linking root canals to systemic diseases (a common internet myth).</p>

                        <hr className="my-10 border-slate-200 dark:border-white/10" />

                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl text-center">
                            <h3 className="mt-0">Not sure if you need one?</h3>
                            <p className="mb-6">Book a consultation. We will show you the X-Ray and explain exactly why the pain is happening.</p>
                            <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                                Book Scan Appointment
                            </Link>
                        </div>
                    </div>

                </div>
            </article>
            <Footer />
        </main>
    );
}
