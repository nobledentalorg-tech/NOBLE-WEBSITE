import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'dental-crown-cap-cost-nallagandla';

export const metadata = {
    title: 'Dental Crown & Cap Cost in Nallagandla (2026) — Zirconia vs Metal | Noble Dental',
    description: 'Zirconia dental crown cost in Nallagandla starts from ₹5,000. Compare PFM, zirconia, e.max & metal cap prices. Same-day CEREC crowns available. Noble Dental Care.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Dental Crown Cost Nallagandla 2026', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much does a zirconia crown cost in Nallagandla?', a: 'A zirconia dental crown at Noble Dental costs ₹5,000–₹12,000 per tooth depending on the grade. Multilayer aesthetic zirconia costs more than standard monolithic zirconia.' },
    { q: 'How long does a dental crown last?', a: 'A well-made zirconia crown lasts 15–20 years. PFM (metal) crowns last 10–15 years but develop a black line at the gum margin over time.' },
    { q: 'Is a dental crown painful?', a: 'No. The tooth is numbed with local anesthesia. The preparation takes 20–30 minutes and is painless. A temporary crown protects the tooth while the permanent one is made.' },
    { q: 'When do I need a crown vs a filling?', a: 'If more than 50% of the tooth is damaged or after a root canal, a crown is recommended. Fillings work for small cavities. Dr. Dhivakaran Reddy will advise based on X-rays.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Dental Crown & Cap Cost in Nallagandla (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran Reddy' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-06', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Crown Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['Metal Crown (Alloy)', '₹2,500', '₹3,000–₹5,000', '10–12 yrs'],
    ['PFM Crown (Porcelain-Metal)', '₹3,500', '₹4,000–₹7,000', '10–15 yrs'],
    ['Standard Zirconia', '₹5,000', '₹8,000–₹12,000', '15–20 yrs'],
    ['Multilayer Zirconia (Aesthetic)', '₹8,000', '₹12,000–₹18,000', '15–20 yrs'],
    ['E.max (Lithium Disilicate)', '₹10,000', '₹15,000–₹22,000', '15+ yrs'],
    ['Temporary Crown', '₹500', '₹800–₹1,500', '2–4 weeks'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-black uppercase tracking-widest">Cost Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">4 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Dental Crown & Cap Cost in Nallagandla: <span className="text-teal-600">2026 Prices</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">Zirconia vs PFM vs E.max — Honest Comparison</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran Reddy" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran Reddy</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">Chief Dental Surgeon CMD, Healthflo - Director, NOBLE OS-NEO AI - CTO</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">A dental crown (cap) in Nallagandla costs between <strong>₹2,500 and ₹18,000</strong> depending on the material. Here&apos;s why the price varies and which type is best for you.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Crown Price Comparison — Nallagandla 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Material</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Lifespan</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className="p-4 text-center font-bold text-teal-600">{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2>Which Crown Material is Best?</h2>
                    <p><strong>For back teeth (molars):</strong> Standard Zirconia — strongest, handles chewing force, ₹5,000.</p>
                    <p><strong>For front teeth:</strong> Multilayer Zirconia or E.max — most natural-looking, translucent like real teeth.</p>
                    <p><strong>Avoid PFM crowns for front teeth</strong> — they develop a dark gray line at the gum margin within 3–5 years as gums recede.</p>

                    <h2>Black Line Problem — Why Old Caps Look Ugly</h2>
                    <p>If you have old PFM (porcelain-fused-to-metal) caps, you&apos;ve probably noticed a <strong>dark gray/black line at the gum margin</strong>. This happens because the metal base shows through as gums recede with age. Zirconia crowns are metal-free — no black line, ever.</p>

                    <h2>Why Choose Noble Dental for Crowns?</h2>
                    <div className="not-prose my-8 grid gap-3">{['CAD/CAM digital impressions — no messy putty molds', 'In-house Zirconia lab — crowns ready in 3–5 days', 'Color matching under natural light — perfect shade every time', 'No black line guarantee — 100% metal-free zirconia', 'Post-RCT package: Root Canal + Crown combo pricing available', '5-year warranty on all crowns'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-900/10 rounded-xl border border-teal-200 dark:border-teal-900/30"><Check size={18} className="text-teal-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-teal-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">Need a Crown After Root Canal?</h3>
                        <p className="text-teal-100 mb-6 text-sm max-w-md mx-auto">Ask about our RCT + Crown combo pricing — save up to 15%.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-teal-700 rounded-full font-black uppercase tracking-widest text-xs">Book Consultation</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
