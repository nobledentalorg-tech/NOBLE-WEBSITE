import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'smile-makeover-cost-hyderabad';

export const metadata = {
    title: 'Smile Makeover Cost in Hyderabad & Nallagandla (2026) | Noble Dental',
    description: 'Complete smile makeover cost in Hyderabad from ₹15,000 to ₹3L. Veneers, bonding, whitening & aligners combined. Digital Smile Design by Dr. Dhivakaran. Before/after results.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Smile Makeover Cost Hyderabad 2026', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much does a smile makeover cost in Hyderabad?', a: 'A smile makeover at Noble Dental ranges from ₹15,000 (teeth whitening + bonding) to ₹3L+ (full veneer set + gum contouring). The cost depends on how many teeth are involved and which treatments are combined.' },
    { q: 'What is included in a smile makeover?', a: 'A smile makeover can include any combination of: teeth whitening, dental veneers, composite bonding, gum contouring, crowns, and aligners. Dr. Dhivakaran designs a custom plan based on your smile analysis.' },
    { q: 'How long does a smile makeover take?', a: 'Simple makeovers (whitening + bonding) take 1-2 visits. Full veneer cases take 2-3 weeks. Complex cases with aligners can take 3-6 months.' },
    { q: 'Are dental veneers permanent?', a: 'Porcelain veneers last 15-20 years. Composite veneers last 5-7 years. Both require minimal tooth preparation. Veneers are an irreversible procedure — once placed, you\'ll always need veneers on those teeth.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Smile Makeover Cost in Hyderabad (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran R' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-06', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Smile Makeover Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['Teeth Whitening Only', '₹5,000', '₹8,000–₹15,000', '1 visit'],
    ['Composite Bonding (per tooth)', '₹3,000', '₹5,000–₹8,000', '1 visit'],
    ['Porcelain Veneer (per tooth)', '₹12,000', '₹18,000–₹30,000', '2 visits'],
    ['Composite Veneer (per tooth)', '₹5,000', '₹8,000–₹12,000', '1 visit'],
    ['Gum Contouring (laser)', '₹3,000', '₹5,000–₹10,000', '1 visit'],
    ['Full Smile Design (8 veneers)', '₹80,000', '₹1.5L–₹2.5L', '2-3 weeks'],
    ['Digital Smile Design (DSD)', 'Free', '₹5,000–₹10,000', '30 mins'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-black uppercase tracking-widest">Cosmetic Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">5 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Smile Makeover Cost in Hyderabad: <span className="text-rose-600">Complete 2026 Guide</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">Veneers, Bonding, Whitening — What&apos;s Worth It?</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran R</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">MDS, Cosmetic Dentistry • 12+ Years</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">A smile makeover in Hyderabad costs between <strong>₹15,000 and ₹3 Lakhs+</strong> depending on the treatments combined. Here&apos;s what each option costs and when to choose it.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Smile Makeover Pricing — 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Treatment</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Visits</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className={`p-4 text-center font-bold ${n === 'Free' ? 'text-green-600' : 'text-rose-600'}`}>{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2>3 Levels of Smile Makeover</h2>
                    <p><strong>Level 1 — Quick Fix (₹15,000–₹30,000):</strong> Teeth whitening + composite bonding for chips/gaps. Done in 1-2 visits. Perfect for: events, photos, minor imperfections.</p>
                    <p><strong>Level 2 — Mid-Range (₹50,000–₹1L):</strong> 4-6 composite veneers + gum contouring. Fixes crooked, discolored, or uneven teeth. Takes 1-2 weeks.</p>
                    <p><strong>Level 3 — Premium (₹1L–₹3L+):</strong> 8-10 porcelain veneers + laser gum reshaping. Complete Hollywood smile. Lasts 15-20 years. Takes 2-3 weeks.</p>

                    <h2>Digital Smile Design — See Before You Commit</h2>
                    <p>We photograph your face from multiple angles, then <strong>digitally design your ideal smile</strong> before any treatment begins. You see your &quot;after&quot; result on screen and approve it. If you don&apos;t like it, we redesign — all before touching your teeth. This service is <strong>FREE</strong> at Noble Dental.</p>

                    <h2>Why Noble Dental for Cosmetic Dentistry?</h2>
                    <div className="not-prose my-8 grid gap-3">{['Digital Smile Design — see your final result before starting (FREE)', 'Mock-up trial smile — wear temporary veneers for a day to test', 'Minimal prep veneers — preserve maximum tooth structure', 'E.max & Zirconia options — lab-made for natural translucency', '0% EMI available — spread cost over 12 months', 'Before/after portfolio — see real patient transformations'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-xl border border-rose-200 dark:border-rose-900/30"><Check size={18} className="text-rose-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-rose-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-rose-500 to-pink-700 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">Design Your Dream Smile</h3>
                        <p className="text-rose-100 mb-6 text-sm max-w-md mx-auto">Free Digital Smile Design consultation — see your new smile before you commit.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-rose-700 rounded-full font-black uppercase tracking-widest text-xs">Free Smile Design</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
