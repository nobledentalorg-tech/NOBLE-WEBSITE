import React from 'react';
import { notFound } from 'next/navigation';
import { DENTAL_FAQ_DB } from '@/src/neo/NeoFAQDatabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Stethoscope } from 'lucide-react';
import { Metadata } from 'next';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return Object.keys(DENTAL_FAQ_DB).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const data = DENTAL_FAQ_DB[params.slug];
    if (!data) return {};

    return {
        title: `${data.question} | Dental FAQ`,
        description: data.conciseAnswer.slice(0, 160),
        alternates: {
            canonical: `https://www.nobledentalnallagandla.in/wiki/faq/${params.slug}`,
        },
    };
}

export default function FAQEntryPage({ params }: PageProps) {
    const data = DENTAL_FAQ_DB[params.slug];

    if (!data) {
        notFound();
    }

    // Speakable Schema
    const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.question,
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["#question-text", "#concise-answer"]
        },
        "mainEntity": {
            "@type": "Question",
            "name": data.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": data.conciseAnswer
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white">
            <Header />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
            />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Navigation */}
                    <Link href="/wiki/faq" className="inline-flex items-center gap-2 text-blue-600 mb-8 hover:underline">
                        <ArrowLeft size={16} /> Back to Knowledge Base
                    </Link>

                    {/* Article Card */}
                    <article className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/5">

                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-6 text-sm font-bold tracking-wider text-slate-400 uppercase">
                            <BookOpen size={14} />
                            <span>{data.category}</span>
                        </div>

                        {/* Question (Speakable Target 1) */}
                        <h1 id="question-text" className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                            {data.question}
                        </h1>

                        {/* Concise Answer (Speakable Target 2) */}
                        <div className="mb-12">
                            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
                                Quick Answer (AI Read-Aloud Optimized)
                            </h2>
                            <div
                                id="concise-answer"
                                className="text-xl md:text-2xl font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border-l-4 border-emerald-500 text-slate-800 dark:text-slate-100"
                            >
                                {data.conciseAnswer}
                            </div>
                        </div>

                        {/* Clinical Detail */}
                        <div className="prose dark:prose-invert max-w-none">
                            <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white mb-4">
                                <Stethoscope className="text-blue-500" />
                                Dr. Dhivakaran Reddy&apos;s Clinical Note
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-7">
                                {data.clinicalDetail}
                            </p>
                        </div>

                        {/* Related Services */}
                        {data.relatedServices.length > 0 && (
                            <div className="mt-12 pt-12 border-t border-slate-100 dark:border-white/10">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    Related Treatments
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {data.relatedServices.map((service) => (
                                        <span key={service} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
