
'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { NEO_VAULT } from '@/src/neo/NeoVault';
import { ChevronDown, Globe, Shield, ExternalLink, Lightbulb } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
];

function FAQContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeLang = searchParams.get('lang') || 'en';
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const setActiveLang = (lang: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', lang);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    // Generate JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": NEO_VAULT.map(entry => ({
            "@type": "Question",
            "name": entry.content[activeLang]?.question || entry.content['en'].question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": entry.content[activeLang]?.answer || entry.content['en'].answer,
                "inLanguage": activeLang
            }
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4 font-jakarta leading-tight">
                        Knowledge Vault: <span className="text-cyan-600">Dental Truths</span>
                    </h1>
                    <p className="text-slate-600 text-lg mb-8">
                        Clinically anchored FAQs verified by WHO, IDA, and ADA protocols.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setActiveLang(lang.code)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${activeLang === lang.code
                                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-200 scale-105'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50'
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                <span className="font-medium">{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    {NEO_VAULT.map((faq) => {
                        const content = faq.content[activeLang] || faq.content['en'];
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? 'border-cyan-200 shadow-xl shadow-cyan-50/50 ring-1 ring-cyan-100' : 'border-slate-100 shadow-sm hover:border-slate-200'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full text-left p-6 flex justify-between items-center gap-4 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`mt-1 p-2 rounded-lg transition-colors ${isOpen ? 'bg-cyan-100 text-cyan-600' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <h3 className={`text-lg font-semibold leading-relaxed ${isOpen ? 'text-cyan-900' : 'text-slate-800'}`}>
                                            {content.question}
                                        </h3>
                                    </div>
                                    <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180 text-cyan-500' : ''}`} />
                                </button>

                                <div
                                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 ml-14">
                                        <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed mb-6">
                                            {content.answer}
                                            {faq.id === 'noble_faq_037' && (
                                                <div className="mt-4">
                                                    <a
                                                        href="/treatments/crowns-bridges"
                                                        className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                                                    >
                                                        Explore Our Precision Crowns <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {content.advice && (
                                                <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 flex gap-3">
                                                    <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Expert Advice</p>
                                                        <p className="text-sm text-amber-800 leading-snug">{content.advice}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {content.source && (
                                                <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-4 flex gap-3">
                                                    <Shield className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">Clinical Standard</p>
                                                        <a
                                                            href={content.source}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-cyan-800 flex items-center gap-1 hover:underline"
                                                        >
                                                            Verified Source <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                                            <div className="flex gap-1">
                                                {faq.keywords.slice(0, 3).map(kw => (
                                                    <span key={kw} className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                                                        #{kw}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-xs text-slate-400">ID: {faq.id}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function FAQPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading Knowledge Vault...</div>}>
            <FAQContent />
        </Suspense>
    );
}
