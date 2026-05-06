import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'wisdom-tooth-removal-cost-nallagandla';

export const metadata = {
    title: 'Wisdom Tooth Removal Cost in Nallagandla (2026) | Noble Dental Care',
    description: 'Wisdom tooth extraction cost in Nallagandla from ₹3,000 (simple) to ₹10,000 (surgical). Painless removal under local anesthesia. Same-day emergency slots available.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Wisdom Tooth Removal Cost Nallagandla 2026', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much does wisdom tooth removal cost in Nallagandla?', a: 'Simple extraction costs ₹3,000–₹5,000. Surgical extraction of impacted wisdom teeth costs ₹5,000–₹10,000 at Noble Dental. This includes X-ray and follow-up.' },
    { q: 'Is wisdom tooth removal painful?', a: 'No. We use advanced local anesthesia (The Wand computer-controlled system). You feel zero pain during the procedure. Post-operative discomfort is managed with prescribed painkillers for 2-3 days.' },
    { q: 'How long does recovery take?', a: 'Soft food diet for 3–5 days. Swelling peaks at day 2-3 and resolves by day 7. Most patients return to work the next day.' },
    { q: 'Should I remove my wisdom tooth if it\'s not hurting?', a: 'If the X-ray shows the tooth is impacted (growing sideways), trapped, or pushing other teeth — yes, it should be removed preventively to avoid future infection, cysts, or damage to adjacent teeth.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Wisdom Tooth Removal Cost in Nallagandla (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran R' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-06', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Wisdom Tooth Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['Simple Extraction (erupted)', '₹3,000', '₹3,500–₹6,000', '15–20 mins'],
    ['Surgical Extraction (soft tissue impaction)', '₹5,000', '₹6,000–₹10,000', '30–45 mins'],
    ['Surgical Extraction (bone impaction)', '₹8,000', '₹10,000–₹15,000', '45–60 mins'],
    ['OPG X-Ray', '₹300', '₹500–₹800', '2 mins'],
    ['CBCT 3D Scan (if needed)', '₹1,500', '₹2,000–₹3,000', '5 mins'],
    ['IV Sedation (optional)', '₹3,000', '₹5,000–₹8,000', 'Add-on'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-black uppercase tracking-widest">Cost Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">4 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Wisdom Tooth Removal Cost in Nallagandla: <span className="text-red-600">2026 Guide</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">Simple vs Surgical — What You&apos;ll Actually Pay</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran R</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">MDS, Oral Surgeon • 12+ Years</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">Wisdom tooth removal in Nallagandla costs between <strong>₹3,000 and ₹15,000</strong> depending on whether it&apos;s a simple pull or surgical extraction of an impacted tooth.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Extraction Price — Nallagandla 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Type</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Time</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className="p-4 text-center font-bold text-red-600">{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2>Simple vs Surgical — How to Know Which You Need</h2>
                    <p><strong>Simple Extraction:</strong> Tooth is visible above the gumline, fully erupted. Requires forceps, takes 15 minutes.</p>
                    <p><strong>Surgical Extraction:</strong> Tooth is impacted — trapped under gum or bone. Requires a small incision, sometimes bone removal, and stitches. Takes 30–60 minutes.</p>
                    <p>An OPG X-ray (₹300) tells us exactly which type you need. We&apos;ll show you the X-ray and explain before starting.</p>

                    <h2>Warning Signs You Need Emergency Removal</h2>
                    <div className="not-prose my-8 space-y-3">{[['Severe jaw pain that radiates to ear', 'Possible pericoronitis infection'], ['Inability to open mouth fully', 'Trismus — infection spreading to jaw muscles'], ['Swelling in cheek or under jaw', 'Abscess forming — needs antibiotics + extraction'], ['Bad taste/smell from back of mouth', 'Food trap causing decay in adjacent tooth']].map(([c, n], i) => (<div key={i} className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900/30"><AlertTriangle size={16} className="text-red-500 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300"><strong>{c}:</strong> {n}</span></div>))}</div>

                    <h2>Why Noble Dental for Wisdom Tooth Surgery?</h2>
                    <div className="not-prose my-8 grid gap-3">{['Piezosurgery — ultrasonic bone cutting, less trauma than drill', 'The Wand — computerized painless injection system', 'Same-day emergency slots — walk in for acute pain', 'PRF therapy — your own blood platelets accelerate healing 2x faster', 'Single-visit removal — no repeated appointments', 'Post-op care kit included — gauze, ice pack, medication prescription'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-900/30"><Check size={18} className="text-green-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-red-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">Wisdom Tooth Pain? Get Relief Today</h3>
                        <p className="text-red-100 mb-6 text-sm max-w-md mx-auto">Emergency slots available. Walk in or call for same-day extraction.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-red-700 rounded-full font-black uppercase tracking-widest text-xs">Emergency Booking</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
