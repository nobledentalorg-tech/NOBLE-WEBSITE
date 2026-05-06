import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'teeth-cleaning-scaling-cost-nallagandla';

export const metadata = {
    title: 'Teeth Cleaning & Scaling Cost in Nallagandla (2026) | Noble Dental',
    description: 'Professional teeth cleaning cost in Nallagandla from ₹800. Ultrasonic scaling + polishing in 30 mins. Deep cleaning for gum disease from ₹2,000. Noble Dental Care.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Teeth Cleaning Cost Nallagandla 2026', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much does teeth cleaning cost in Nallagandla?', a: 'Basic ultrasonic scaling + polishing costs ₹800–₹1,500 at Noble Dental. Deep cleaning (scaling and root planing) for gum disease costs ₹2,000–₹4,000 per quadrant.' },
    { q: 'How often should I get teeth cleaned?', a: 'Every 6 months is recommended for most people. If you have gum disease, diabetes, or smoke — every 3-4 months is better. Regular cleaning prevents expensive treatments later.' },
    { q: 'Does scaling damage teeth or make them loose?', a: 'No — this is a myth. Scaling removes tartar that was hiding bone loss. Teeth may feel slightly loose temporarily because the calculus was acting as a false splint. Your gums will heal and tighten within 1-2 weeks.' },
    { q: 'Is teeth cleaning painful?', a: 'Basic cleaning is painless. For deep cleaning, we apply topical numbing gel. You may feel slight sensitivity for 24-48 hours after, which is normal.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Teeth Cleaning & Scaling Cost in Nallagandla (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran Reddy' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-06', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Teeth Cleaning Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['Basic Scaling + Polishing', '₹800', '₹1,500–₹3,000', '30 mins'],
    ['Ultrasonic Scaling (Full Mouth)', '₹1,500', '₹2,000–₹4,000', '45 mins'],
    ['Deep Cleaning (per quadrant)', '₹2,000', '₹3,000–₹5,000', '30 mins'],
    ['Full Mouth Deep Clean (4 quadrants)', '₹6,000', '₹10,000–₹15,000', '2 visits'],
    ['Air-Flow Stain Removal', '₹1,200', '₹2,000–₹3,500', '20 mins'],
    ['Fluoride Application', '₹500', '₹800–₹1,500', '5 mins'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs font-black uppercase tracking-widest">Cost Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">3 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Teeth Cleaning & Scaling Cost in Nallagandla: <span className="text-sky-600">2026 Prices</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">Basic vs Deep Cleaning — What You Actually Need</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran Reddy" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran Reddy</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">Chief Dental Surgeon CMD, Healthflo - Director, NOBLE OS-NEO AI - CTO</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">Professional teeth cleaning in Nallagandla costs between <strong>₹800 and ₹6,000</strong> depending on whether you need basic scaling or deep cleaning for gum disease.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Teeth Cleaning Prices — Nallagandla 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Service</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Time</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className="p-4 text-center font-bold text-sky-600">{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2>Basic Cleaning vs Deep Cleaning — What&apos;s the Difference?</h2>
                    <p><strong>Basic Scaling (₹800–₹1,500):</strong> Removes tartar from above the gumline. Takes 30 minutes. No pain. Recommended every 6 months for healthy gums.</p>
                    <p><strong>Deep Cleaning / SRP (₹2,000–₹4,000 per quadrant):</strong> Removes tartar and bacteria from below the gumline, in the pockets between gum and root. Required when gum disease is present (bleeding gums, bad breath, loose teeth). Done under local numbing.</p>

                    <h2>Signs You Need a Cleaning NOW</h2>
                    <ul>
                        <li>Visible yellow/brown tartar deposits on teeth</li>
                        <li>Bleeding gums when brushing or flossing</li>
                        <li>Persistent bad breath that doesn&apos;t go away with brushing</li>
                        <li>Red, swollen, or tender gums</li>
                        <li>It&apos;s been more than 6 months since your last cleaning</li>
                    </ul>

                    <h2>The Real Cost of Skipping Cleanings</h2>
                    <p>A ₹800 cleaning every 6 months = ₹1,600/year. Skipping for 3 years leads to gum disease, which costs ₹6,000–₹15,000 to treat. Severe cases need gum surgery (₹15,000+) or even tooth loss requiring implants (₹25,000+). <strong>Prevention is 10x cheaper than treatment.</strong></p>

                    <h2>Why Noble Dental for Cleaning?</h2>
                    <div className="not-prose my-8 grid gap-3">{['EMS Airflow system — jet spray removes stains without scraping', 'Ultrasonic scalers — vibration breaks tartar with zero pressure', 'Intraoral camera — we show you the tartar before and after removal', 'Gum health assessment included — check pocket depths for free', 'Annual cleaning plan — 2 cleanings/year at discounted rate', 'Family packages — bring your family, save 20%'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-sky-50 dark:bg-sky-900/10 rounded-xl border border-sky-200 dark:border-sky-900/30"><Check size={18} className="text-sky-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-sky-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-sky-500 to-blue-700 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">₹800 Cleaning — Your Cheapest Health Investment</h3>
                        <p className="text-sky-100 mb-6 text-sm max-w-md mx-auto">30 minutes. Zero pain. Walk out with a fresh, clean smile.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-sky-700 rounded-full font-black uppercase tracking-widest text-xs">Book Cleaning</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
