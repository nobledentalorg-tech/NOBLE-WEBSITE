import React from 'react';
import { IndianRupee, ShieldCheck, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'full-mouth-implant-cost-hyderabad';

export const metadata = {
    title: 'Full Mouth Dental Implant Cost in Hyderabad (All-on-4/6) 2026 | Noble Dental',
    description: 'All-on-4 full mouth implant cost in Hyderabad from ₹1.5L per jaw. All-on-6 from ₹2.5L. Compare Korean vs Swiss brands. Fixed teeth in 3 days. Noble Dental Care Nallagandla.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Full Mouth Implant Cost Hyderabad 2026', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'How much do full mouth implants cost in Hyderabad?', a: 'All-on-4 starts from ₹1.5L per jaw at Noble Dental. All-on-6 with zirconia bridge costs ₹2.5L–₹4L per jaw. Full mouth (both jaws) ranges from ₹4L to ₹7L depending on implant brand and bridge material.' },
    { q: 'Can I get fixed teeth in 3 days?', a: 'Yes. With our Immediate Loading protocol, we place implants on Day 1 and fix a temporary acrylic bridge on Day 2-3. You walk out with fixed teeth. The permanent zirconia bridge is placed after 3-4 months of healing.' },
    { q: 'All-on-4 vs All-on-6 — which is better?', a: 'All-on-4 uses 4 implants and works well for most cases. All-on-6 uses 6 implants for extra support — recommended if you have very weak bone or want a longer zirconia bridge. Dr. Dhivakaran Reddy recommends based on your CBCT scan.' },
    { q: 'Are full mouth implants better than dentures?', a: 'Absolutely. Fixed implant bridges don\'t move, don\'t need adhesive, preserve jawbone, and last 20+ years. Dentures lose fit over time as bone shrinks, cause sore spots, and restrict what you can eat.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Full Mouth Dental Implant Cost in Hyderabad (2026)', author: { '@type': 'Person', name: 'Dr. Dhivakaran Reddy' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-06', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Full Mouth Implant Cost', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

const prices = [
    ['All-on-4 (Korean, per jaw)', '₹1.5L', '₹2L–₹3L', 'Acrylic bridge'],
    ['All-on-4 (Swiss, per jaw)', '₹2.5L', '₹3.5L–₹5L', 'Acrylic bridge'],
    ['All-on-6 (Korean, per jaw)', '₹2.5L', '₹3L–₹4L', 'Zirconia bridge'],
    ['All-on-6 (Swiss, per jaw)', '₹4L', '₹5L–₹7L', 'Zirconia bridge'],
    ['Full Mouth — Both Jaws', '₹4L–₹7L', '₹6L–₹12L', 'Zirconia'],
    ['Zygomatic Implants (no-bone cases)', '₹5L+', '₹7L–₹10L', 'Specialized'],
    ['3D Surgical Guide', 'Included', '₹5,000–₹10,000', 'Per jaw'],
];

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">Premium Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">6 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Full Mouth Implant Cost in Hyderabad: <span className="text-indigo-600">All-on-4 & All-on-6</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">Fixed Teeth in 3 Days — The Complete 2026 Guide</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran Reddy" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran Reddy</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">Chief Dental Surgeon CMD, Healthflo - Director, NOBLE OS-NEO AI - CTO</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">Full mouth dental implants in Hyderabad cost between <strong>₹1.5 Lakhs and ₹12 Lakhs</strong> depending on the implant system and bridge material. This guide covers All-on-4, All-on-6, and full arch rehabilitation pricing.</p>

                    <div className="not-prose my-12"><h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Full Mouth Implant Pricing — 2026</h2>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Package</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Noble</th><th className="text-center p-4 font-black text-slate-400">Market</th><th className="text-center p-4 font-black text-slate-400">Bridge</th></tr></thead>
                        <tbody>{prices.map(([t, n, m, d], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{t}</td><td className={`p-4 text-center font-bold ${n === 'Included' ? 'text-green-600' : 'text-indigo-600'}`}>{n}</td><td className="p-4 text-center text-slate-400">{m}</td><td className="p-4 text-center text-slate-400">{d}</td></tr>))}</tbody></table></div>
                    </div>

                    <h2>All-on-4 vs All-on-6 — Which Do You Need?</h2>
                    <p><strong>All-on-4 (₹1.5L–₹2.5L/jaw):</strong> 4 implants support a full arch of 10–12 teeth. The back 2 implants are tilted at 45° to avoid bone grafting. Best for: patients with moderate bone loss who want the most affordable fixed solution.</p>
                    <p><strong>All-on-6 (₹2.5L–₹4L/jaw):</strong> 6 implants for stronger support. Allows a longer zirconia bridge with individual teeth. Better bite force distribution. Best for: patients who want the strongest, most natural result.</p>

                    <h2>The &quot;Fixed Teeth in 3 Days&quot; Process</h2>
                    <ul>
                        <li><strong>Day 1:</strong> CBCT scan + treatment planning + implant surgery (2–3 hours under local anesthesia)</li>
                        <li><strong>Day 2:</strong> Impressions taken for immediate bridge</li>
                        <li><strong>Day 3:</strong> Fixed acrylic bridge placed — you walk out with teeth</li>
                        <li><strong>Month 3–4:</strong> Final permanent zirconia bridge replaces the temporary</li>
                    </ul>

                    <h2>Why Noble Dental for Full Mouth Implants?</h2>
                    <div className="not-prose my-8 grid gap-3">{['Computer-guided surgery — 0.1mm precision, flapless technique', 'Straumann & Nobel Biocare certified implant center', 'PRF therapy — your own blood platelets for 2x faster healing', 'Lifetime warranty on Swiss implants', '0% EMI — spread over 12–24 months', 'Free CBCT 3D scan for all implant consultations', 'In-house dental lab — bridges made on-site for faster delivery'].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-200 dark:border-indigo-900/30"><Check size={18} className="text-indigo-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-indigo-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">Get Your Full Mouth Implant Consultation</h3>
                        <p className="text-indigo-100 mb-6 text-sm max-w-md mx-auto">Free CBCT scan + written estimate. No obligation. Walk in or call.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-indigo-700 rounded-full font-black uppercase tracking-widest text-xs">Free Consultation</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
