import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, FileText, ChevronRight, ShieldCheck, Cpu } from 'lucide-react';
import type { Metadata } from 'next';
import CrawlableReviews from '@/components/CrawlableReviews';

export const metadata: Metadata = {
    title: 'Patient Education | Root Canal, Implants & Invisalign Guide',
    description: 'Learn about Microscopic Root Canals, Dental Implants cost in Hyderabad, and Invisalign vs Braces. Expert guides by Dr. Dhivakaran.',
    keywords: ['Root canal process', 'Invisalign cost Hyderabad', 'Dental implants explained', 'Patient education dentistry'],
};

const articles = [
    {
        slug: 'microscopic-root-canal-guide',
        title: 'What to Expect During a Microscopic Root Canal',
        excerpt: 'Trace the journey of a painless, AI-guided root canal. Learn how 25x magnification saves your natural tooth.',
        category: 'Endodontics',
        readTime: '5 min read',
        image: '/assets/images/treatments/root-canal-hyderabad.webp',
        link: '/treatments/root-canal-treatment'
    },
    {
        slug: 'invisalign-vs-braces',
        title: 'Invisalign vs. Braces: Which is Right for You?',
        excerpt: 'Compare clear aligners and traditional braces. We break down cost, comfort, and treatment time for adults and teens.',
        category: 'Orthodontics',
        readTime: '4 min read',
        image: '/assets/images/treatments/invisalign-hyderabad.webp',
        link: '/treatments/invisalign-aligners'
    },
    {
        slug: 'dental-implants-cost',
        title: 'Understanding Dental Implants Cost in Hyderabad',
        excerpt: 'Why do implant prices vary? We explain the factors: Titanium vs Zirconia, Bone Grafting, and Lifetime Warranties.',
        category: 'Implantology',
        readTime: '6 min read',
        image: '/assets/images/treatments/implants-hyderabad.webp',
        link: '/treatments/dental-implants'
    },
    {
        slug: 'prenatal-dental-care',
        title: 'Is Dental Care Safe During Pregnancy?',
        excerpt: 'Yes! In fact, it is crucial. Learn about safe x-rays, gum health, and the best trimester for treatment.',
        category: 'Prenatal Wellness',
        readTime: '3 min read',
        image: '/assets/images/treatments/periodontic-hyderabad.webp',
        link: '/treatments/laser-dentistry' // Linking to Laser as it's safe/relevant
    }
];

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050505] pt-24 pb-20">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="block text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Patient Knowledge Hub</span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    Understand Your <br /><span className="text-blue-600">Dental Journey.</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                    Detailed guides on procedures, costs, and technologies. Empowering you to make informed decisions about your oral health in Nallagandla.
                </p>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {articles.map((article, idx) => (
                        <Link key={idx} href={article.link} className="group block h-full">
                            <article className="bg-white dark:bg-white/5 border border-slate-150 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full flex flex-col">

                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                                        {article.category}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                                        <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
                                        <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Medically Reviewed</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors leading-snug">
                                        {article.title}
                                    </h2>

                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center text-blue-600 font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                                        Read Specialist Guide <ChevronRight size={16} />
                                    </div>
                                </div>

                            </article>
                        </Link>
                    ))}
                </div>

                {/* SEO Content Block */}
                <div className="mt-24 p-12 bg-blue-600 rounded-[3rem] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -mr-20 -mt-20"></div>

                    <div className="relative z-10 max-w-3xl">
                        <h3 className="text-3xl font-black mb-6">Why Noble Dental Care?</h3>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8">
                            We are the only clinic in Nallagandla offering <strong>Microscopic Endodontics</strong> and <strong>AI-Guided Implantology</strong>.
                            Our commitment to <em>Bio-Mimetic</em> principles means we save more of your natural tooth structure than traditional clinics.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                <Cpu size={18} /> <span>Digital Impressions (No Gagging)</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                <ShieldCheck size={18} /> <span>Lifetime Warranty on Implants</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Verified Reviews (The Trust Loop) */}
            <div className="mb-20 mt-20">
                <CrawlableReviews />
            </div>

        </main>
    );
}
