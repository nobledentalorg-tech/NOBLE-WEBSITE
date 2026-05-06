import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'invisalign-braces-cost-nallagandla';

export const metadata = {
    title: 'Invisalign & Braces Cost in Nallagandla, Hyderabad (2026) | Noble Dental',
    description: 'Compare Invisalign vs braces cost in Nallagandla. Clear aligners from ₹65,000, metal braces from ₹25,000. Free iTero 5D scan. 0% EMI available.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Invisalign & Braces Cost in Nallagandla (2026)', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much does Invisalign cost in Nallagandla?', a: 'Invisalign starts from ₹1.5L for simple cases. Affordable clear aligners start from ₹65,000. Free iTero 5D scan included.' },
    { q: 'Are clear aligners better than braces?', a: 'Aligners are better for mild-moderate cases. Metal braces are superior for complex bite corrections. Dr. Dhivakaran recommends after examination.' },
    { q: 'How long does Invisalign take?', a: 'Simple: 6-8 months. Moderate: 12-18 months. Complex: up to 24 months.' },
    { q: 'Is EMI available?', a: 'Yes! 0% EMI through Bajaj Finserv — as low as ₹5,000/month.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Invisalign & Braces Cost in Nallagandla (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran R' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-05', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Invisalign Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['Metal Braces (Standard)', '₹25,000', '₹30,000–₹45,000', '12–24 mo'],
    ['Ceramic Braces', '₹35,000', '₹40,000–₹60,000', '12–24 mo'],
    ['Self-Ligating (Damon)', '₹50,000', '₹60,000–₹80,000', '10–20 mo'],
    ['Clear Aligners (FDA)', '₹65,000', '₹80,000–₹1.2L', '6–18 mo'],
    ['Invisalign (Official)', '₹1.5L–₹3.5L', '₹1.8L–₹4.5L', '6–24 mo'],
    ['iTero 5D Scan', 'Free', '₹3,000–₹5,000', '10 mins'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-black uppercase tracking-widest">Cost Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">5 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Invisalign & Braces Cost in Nallagandla: <span className="text-purple-600">2026 Guide</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">Metal Braces vs Clear Aligners — Which is Worth It?</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran R</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">Certified Invisalign Provider • 12+ Years</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl mb-12 border-l-4 border-purple-500">
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><IndianRupee size={16} className="text-purple-500" /> Quick Summary</h3>
                    <ul className="space-y-3 m-0 list-none p-0">
                        <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium"><span className="text-purple-500 font-bold">1.</span><span><strong>Metal braces</strong> start from ₹25,000 — best for complex cases.</span></li>
                        <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium"><span className="text-purple-500 font-bold">2.</span><span><strong>Clear aligners</strong> start from ₹65,000 — invisible and removable.</span></li>
                        <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium"><span className="text-purple-500 font-bold">3.</span><span><strong>Invisalign</strong> from ₹1.5L — premium brand with best tracking.</span></li>
                    </ul>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">The cost of teeth straightening in Nallagandla ranges from <strong>₹25,000 to ₹3.5 Lakhs</strong> depending on the type you choose.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Price Comparison — Nallagandla 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Type</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Duration</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className={`p-4 text-center font-bold ${n === 'Free' ? 'text-green-600' : 'text-purple-600'}`}>{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2 className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">1</span> Braces vs Aligners — Which to Choose?</h2>
                    <p><strong>Choose Metal Braces if:</strong> severe crowding, complex bite, budget is primary concern.</p>
                    <p><strong>Choose Aligners if:</strong> aesthetics matter, mild-moderate case, want to eat without restrictions, prefer fewer visits.</p>

                    <h2 className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">2</span> Why &quot;Cheap Online Aligners&quot; Are Risky</h2>
                    <div className="not-prose my-8 space-y-3">{[['No X-Ray taken', 'Can dissolve tooth roots (root resorption)'], ['No doctor supervision', 'Bite changes can cause TMJ jaw pain'], ['Fixing DIY damage', 'Costs ₹1–2L to reverse']].map(([c, n], i) => (<div key={i} className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900/30"><AlertTriangle size={16} className="text-red-500 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300"><strong>{c}:</strong> {n}</span></div>))}</div>

                    <h2 className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">3</span> Why Noble Dental?</h2>
                    <div className="not-prose my-8 grid gap-3">{['Certified Invisalign Provider — trained by Align Technology', 'iTero 5D Scanner — see your straight smile before starting (FREE)', 'ClinCheck AI — every tooth movement planned digitally', '0% EMI — pay ₹5,000–₹8,000/month', 'Warranty — free refinement if teeth shift'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-900/30"><Check size={18} className="text-green-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-purple-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">See Your New Smile in 10 Minutes</h3>
                        <p className="text-purple-100 mb-6 text-sm max-w-md mx-auto">Free iTero 5D scan — see your straight teeth before committing.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-purple-700 rounded-full font-black uppercase tracking-widest text-xs">Free Smile Scan</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
