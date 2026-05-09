import React from 'react';
import { PATHOLOGY_INDEX, getAllPathologySlugs } from '@/src/data/knowledge_graph/pathology/index';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Stethoscope, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dental Pathology & Conditions Wiki | Noble Dental Care',
    description: 'Explore our comprehensive medical wiki detailing common and rare dental pathologies, including symptoms, causes, and treatments. Authored by Dr. Dhivakaran Reddy.',
    alternates: {
        canonical: 'https://www.nobledentalnallagandla.in/wiki/pathology',
    },
};

export default function PathologyIndexPage() {
    const slugs = getAllPathologySlugs();
    const conditions = slugs.map(slug => ({
        slug,
        ...PATHOLOGY_INDEX[slug]
    }));

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Dental Pathology & Conditions Wiki",
        "description": "A comprehensive directory of dental and oral health conditions.",
        "url": "https://www.nobledentalnallagandla.in/wiki/pathology",
        "hasPart": conditions.map(condition => ({
            "@type": "WebPage",
            "name": condition.laymanTerm.en,
            "url": `https://www.nobledentalnallagandla.in/wiki/pathology/${condition.slug}`
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white">
            <Header />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 text-blue-600 dark:text-blue-400">
                            <BookOpen size={48} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                            Medical Intelligence Wiki
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            A comprehensive, doctor-authored directory of oral health conditions, designed to help you understand your symptoms before you even reach the clinic.
                        </p>
                    </div>

                    {/* Condition Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {conditions.map((condition) => (
                            <Link 
                                href={`/wiki/pathology/${condition.slug}`} 
                                key={condition.slug}
                                className="group block p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                            {condition.laymanTerm.en}
                                        </h2>
                                        <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400 rounded-full uppercase tracking-wider">
                                            {condition.medicalTerm.en}
                                        </span>
                                    </div>
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                                
                                <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                    {condition.description.en}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    <Stethoscope size={16} />
                                    <span>Dr. Dhivakaran Reddy</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
