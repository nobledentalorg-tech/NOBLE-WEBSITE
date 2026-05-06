import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check, Sun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'teeth-whitening-cost-nallagandla';

export const metadata = {
    title: 'Teeth Whitening Cost in Nallagandla, Hyderabad (2026) | Noble Dental',
    description: 'Professional teeth whitening in Nallagandla starting from ₹5,000. In-office laser whitening, at-home kits & costs compared. Safe, 1-hour treatment by Dr. Dhivakaran.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Teeth Whitening Cost Nallagandla 2026', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much does teeth whitening cost in Nallagandla?', a: 'Professional in-office whitening at Noble Dental starts from ₹5,000 per session. Laser whitening costs ₹8,000-₹12,000. At-home kits with custom trays cost ₹3,000-₹5,000.' },
    { q: 'Is teeth whitening safe?', a: 'Yes, when done professionally. We use ADA-approved gels that do not damage enamel. Temporary sensitivity may occur for 24-48 hours.' },
    { q: 'How long does whitening last?', a: 'Results typically last 6-12 months depending on diet and habits. Avoid coffee, tea, and smoking to maintain results longer.' },
    { q: 'Can whitening remove deep stains?', a: 'Professional whitening removes external stains effectively. For intrinsic stains (tetracycline, fluorosis), we recommend veneers or composite bonding instead.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Teeth Whitening Cost in Nallagandla (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran R' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-05', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Teeth Whitening Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['In-Office Whitening (1 session)', '₹5,000', '₹8,000–₹15,000', '45 mins'],
    ['Laser Whitening (Advanced)', '₹8,000', '₹12,000–₹20,000', '60 mins'],
    ['Custom Take-Home Kit', '₹3,000', '₹5,000–₹8,000', '7-14 days'],
    ['Teeth Cleaning + Polish', '₹1,500', '₹2,500–₹4,000', '30 mins'],
    ['Composite Bonding (per tooth)', '₹3,000', '₹5,000–₹8,000', '30 mins'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-black uppercase tracking-widest">Cost Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">4 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Teeth Whitening Cost in Nallagandla: <span className="text-amber-600">Honest 2026 Prices</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">In-Office vs At-Home — What Actually Works?</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran R</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">MDS, Cosmetic Dentistry • 12+ Years</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">Professional teeth whitening in Nallagandla costs between <strong>₹3,000 and ₹20,000</strong> depending on the method. Here&apos;s what each option involves and what you should pay.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Whitening Price Comparison — Nallagandla 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Method</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Time</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className="p-4 text-center font-bold text-amber-600">{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2>In-Office vs At-Home: Which is Better?</h2>
                    <p><strong>In-Office (₹5,000–₹12,000):</strong> Results in 1 hour. Uses professional-grade hydrogen peroxide gel activated by LED/laser light. 5–8 shades whiter in a single visit. Best for: weddings, events, quick results.</p>
                    <p><strong>At-Home Kit (₹3,000–₹5,000):</strong> Custom trays made from your dental impression. Wear 30 mins daily for 7–14 days. Gradual whitening, 3–5 shades lighter. Best for: maintenance, sensitive teeth.</p>

                    <h2>What About Charcoal Toothpaste & DIY Methods?</h2>
                    <p>Charcoal toothpaste, baking soda, and lemon juice are <strong>abrasive</strong> — they scratch enamel and cause <strong>permanent sensitivity</strong>. Professional whitening uses pH-balanced gels that are safe for enamel.</p>

                    <h2>Why Noble Dental for Whitening?</h2>
                    <div className="not-prose my-8 grid gap-3">{['ADA-approved whitening gels — no enamel damage', 'Customized shade matching — natural, not "fake white"', 'Sensitivity management — desensitizing gel applied post-treatment', 'Combo offer: Cleaning + Whitening package available', 'Results guaranteed — or free touch-up session'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-900/30"><Check size={18} className="text-amber-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-amber-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">Get a Brighter Smile Today</h3>
                        <p className="text-amber-100 mb-6 text-sm max-w-md mx-auto">Walk in with stains. Walk out with a Hollywood smile. 45-minute treatment.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-amber-700 rounded-full font-black uppercase tracking-widest text-xs">Book Whitening</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
