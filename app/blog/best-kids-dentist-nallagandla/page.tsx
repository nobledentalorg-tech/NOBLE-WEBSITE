import React from 'react';
import { ShieldCheck, ArrowLeft, Check, Heart, Baby } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://www.nobledentalnallagandla.in';
const SLUG = 'best-kids-dentist-nallagandla';

export const metadata = {
    title: 'Best Kids Dentist in Nallagandla — Painless Pediatric Dental Care | Noble Dental',
    description: 'Fear-free dental care for children in Nallagandla. Laughing gas sedation, painless injections, cartoon-themed clinic. Pediatric specialist for ages 1-16. Noble Dental Care.',
    alternates: { canonical: `${BASE}/blog/${SLUG}` },
    openGraph: { title: 'Best Kids Dentist in Nallagandla', url: `${BASE}/blog/${SLUG}`, type: 'article' },
};

const faqs = [
    { q: 'At what age should a child first visit the dentist?', a: 'The American Academy of Pediatric Dentistry recommends the first visit by age 1 or when the first tooth appears. Early visits help identify issues like nursing bottle decay and establish good habits.' },
    { q: 'Is laughing gas safe for children?', a: 'Yes, Nitrous Oxide (Happy Air) is the safest sedative for kids. It wears off in 2 minutes after removing the mask. Your child walks out fully awake and can go to school immediately.' },
    { q: 'How much does a kids dental visit cost in Nallagandla?', a: 'Consultation + check-up at Noble Dental costs ₹500. Fluoride varnish application costs ₹1,200/year. Painless fillings start from ₹1,500.' },
    { q: 'My child is scared of dentists. What can I do?', a: 'We use the Tell-Show-Do technique. Your child watches cartoons during treatment. For extremely anxious kids, we offer Happy Air (laughing gas) sedation — they giggle instead of crying.' },
    { q: 'What is a pediatric dentist vs regular dentist?', a: 'A pediatric dentist (Pedodontist) has 3 additional years of specialized training in child psychology, sedation, and treating baby teeth. They understand how to handle fearful children without trauma.' },
];

const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: 'Best Kids Dentist in Nallagandla — Painless Pediatric Care', author: { '@type': 'Person', name: 'Dr. Dhivakaran R' }, publisher: { '@type': 'Organization', name: 'Noble Dental Care' }, datePublished: '2026-05-05', mainEntityOfPage: `${BASE}/blog/${SLUG}` },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Kids Dentist', item: `${BASE}/blog/${SLUG}` }] },
        { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
};

export default function Page() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="pt-32 pb-20"><div className="max-w-3xl mx-auto px-6">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog</Link>
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6"><span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-black uppercase tracking-widest">Pediatric Guide</span><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">4 Min Read</span></div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">Best Kids Dentist in Nallagandla: <span className="text-pink-600">Fear-Free Dental Care</span><br /><span className="text-slate-400 font-light text-2xl md:text-3xl">No Tears, No Trauma — Just Happy Smiles</span></h1>
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4"><div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200"><Image src="/images/dr-dhivakaran.webp" alt="Dr. Dhivakaran" width={48} height={48} className="object-cover" /></div><div><div className="flex items-center gap-2"><span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran R</span><ShieldCheck size={14} className="text-blue-500" /></div><p className="text-xs text-slate-500 m-0">MDS • Pediatric Dental Specialist • 12+ Years</p></div></div>
                        <div className="text-right hidden sm:block"><p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Updated</p><p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 2026</p></div>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl font-medium text-slate-800 dark:text-slate-200">Finding the right dentist for your child in Nallagandla can be stressful. You want someone who won&apos;t traumatize your little one. Here&apos;s how we make dental visits <strong>fun, not scary</strong>.</p>

                    <h2>Why Most Kids Are Scared of Dentists (And How We Fix It)</h2>
                    <p>Children develop dental phobia when they&apos;re <strong>held down, forced open, and hurt</strong>. This trauma lasts into adulthood — 60% of adults who avoid dentists had a bad childhood experience.</p>
                    <p>At Noble Dental, we use a completely different approach:</p>

                    <div className="not-prose my-8 grid gap-3">{[
                        'Tell-Show-Do Technique — we explain everything in kid-friendly language before touching',
                        'Happy Air (Laughing Gas) — sweet-smelling sedation that makes kids giggle during treatment',
                        'The Wand — computer-controlled painless injection (kids don\'t even feel it)',
                        'Cartoon Theater — kids watch their favorite show during the entire procedure',
                        'Flavor Choice — bubblegum, strawberry, or chocolate fluoride (they pick!)',
                        'Brave Patient Reward — every child gets a toy and certificate after treatment',
                    ].map((item, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-pink-50 dark:bg-pink-900/10 rounded-xl border border-pink-200 dark:border-pink-900/30"><Check size={18} className="text-pink-600 mt-0.5 shrink-0" /><span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span></div>))}</div>

                    <h2>Pediatric Dental Services We Offer</h2>
                    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800"><table className="w-full text-sm"><thead><tr className="bg-slate-50 dark:bg-slate-900 border-b"><th className="text-left p-4 font-black text-slate-900 dark:text-white">Service</th><th className="text-center p-4 font-black text-slate-900 dark:text-white">Cost</th><th className="text-center p-4 font-black text-slate-400">Age Group</th></tr></thead>
                    <tbody>{[
                        ['Consultation + Check-up', '₹500', 'All ages'],
                        ['Fluoride Varnish (Annual)', '₹1,200', '2-16 yrs'],
                        ['Pit & Fissure Sealants', '₹800/tooth', '6-12 yrs'],
                        ['Painless Filling (Composite)', '₹1,500+', 'All ages'],
                        ['Baby Tooth Root Canal (Pulpectomy)', '₹3,000+', '3-10 yrs'],
                        ['Habit Breaking Appliance', '₹5,000', '4-8 yrs'],
                        ['Space Maintainer', '₹3,500', '6-12 yrs'],
                        ['Happy Air Sedation (add-on)', '₹1,500', 'All ages'],
                    ].map(([s, c, a], i) => (<tr key={i} className="border-b border-slate-100 dark:border-slate-800"><td className="p-4 font-medium">{s}</td><td className="p-4 text-center font-bold text-pink-600">{c}</td><td className="p-4 text-center text-slate-400">{a}</td></tr>))}</tbody></table></div>

                    <h2>Common Childhood Dental Problems We Treat</h2>
                    <ul>
                        <li><strong>Nursing Bottle Decay:</strong> Sleeping with a milk bottle rots front teeth. We restore them with tooth-colored caps.</li>
                        <li><strong>Thumb Sucking:</strong> Causes open bite and speech issues. We use habit-breaking appliances to stop it painlessly.</li>
                        <li><strong>Cavities (Chocolate Teeth):</strong> Kids&apos; teeth have thinner enamel — cavities spread 2x faster. Early sealants prevent them.</li>
                        <li><strong>Broken Tooth from Falls:</strong> We provide emergency bonding and splinting within 1 hour of injury.</li>
                        <li><strong>Mouth Breathing:</strong> Can cause crooked teeth and jaw problems. We screen for enlarged tonsils/adenoids.</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>
                    <div className="not-prose space-y-4 my-8">{faqs.map((faq, i) => (<div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"><h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex gap-3"><span className="text-pink-600 font-black">Q.</span> {faq.q}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8 m-0">{faq.a}</p></div>))}</div>

                    <div className="not-prose mt-16 p-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl text-white text-center">
                        <h3 className="text-2xl font-black mb-3">Your Child Deserves a Happy Dental Visit</h3>
                        <p className="text-pink-100 mb-6 text-sm max-w-md mx-auto">No tears, no trauma. Book a gentle check-up with our pediatric specialist.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-appointment" className="px-8 py-4 bg-white text-pink-700 rounded-full font-black uppercase tracking-widest text-xs">Book Kids Visit</Link>
                            <a href="tel:+918610425342" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-xs">Call +91 86104 25342</a>
                        </div>
                    </div>
                </div>
            </div></article>
        </main>
    );
}
