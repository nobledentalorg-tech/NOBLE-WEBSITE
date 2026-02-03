
import { notFound } from 'next/navigation';
import { PATHOLOGY_INDEX, getAllPathologySlugs } from '@/src/data/knowledge_graph/pathology/index';
import MedicalSchema from '@/components/seo/MedicalSchema';
import { Metadata } from 'next';

// 1. Static Generation (SSG)
export async function generateStaticParams() {
    return getAllPathologySlugs().map((slug) => ({
        slug: slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const data = PATHOLOGY_INDEX[params.slug];
    if (!data) return { title: 'Condition Not Found' };

    return {
        title: `${data.medicalTerm.en} (${data.laymanTerm.en}) | Noble Medical Wiki`,
        description: data.description.en,
    };
}

// 3. The Page Component
export default function PathologyPage({ params }: { params: { slug: string } }) {
    const data = PATHOLOGY_INDEX[params.slug];

    if (!data) {
        notFound();
    }

    return (
        <>
            <MedicalSchema condition={data as any} />

            <main className="max-w-4xl mx-auto px-6 py-12 font-sans text-slate-800">
                {/* Header */}
                <header className="mb-10 text-center">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                        Medical Intelligence Wiki
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {data.laymanTerm.en}
                    </h1>
                    <h2 className="text-xl text-slate-500 italic">
                        Medical Term: {data.medicalTerm.en}
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Left Column: Content */}
                    <article className="md:col-span-2 space-y-8">

                        {/* 1. Description */}
                        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                📖 Overview
                            </h3>
                            <p className="text-lg leading-relaxed text-slate-700">
                                {data.description.en}
                            </p>
                        </section>

                        {/* 2. Physiology (Deep Dive) */}
                        <section className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold mb-3 text-blue-900">
                                🔬 What is happening inside?
                            </h3>
                            <p className="text-blue-800 leading-relaxed">
                                {data.physiology.en}
                            </p>
                        </section>

                        {/* 3. Symptoms */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6">🚩 Common Symptoms</h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {data.symptoms.en.map((symptom, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                                        <span className="text-red-500 text-xl">•</span>
                                        <span className="font-medium text-slate-700">{symptom}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 4. What we do (Treatments) */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6">🩺 Possible Treatments</h3>
                            <div className="flex flex-wrap gap-4">
                                {data.treatments.map((t, idx) => (
                                    <a key={idx} href={`/treatments/${t}`} className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full font-semibold hover:bg-emerald-200 transition">
                                        View {t.replace(/-/g, ' ').toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </section>
                    </article>

                    {/* Right Column: AI Action */}
                    <aside className="space-y-6">
                        <div className="sticky top-10 bg-gradient-to-br from-indigo-900 to-indigo-700 text-white p-8 rounded-3xl shadow-xl text-center">
                            <div className="text-6xl mb-4">🤖</div>
                            <h3 className="text-2xl font-bold mb-2">Have these symptoms?</h3>
                            <p className="text-indigo-100 mb-6">
                                Don&apos;t guess. Let Neo (My AI Assistant) analyze your pain level right now.
                            </p>
                            <a href="/?neo=true" className="inline-block w-full py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition transform hover:scale-105 shadow-md">
                                Chat with Neo
                            </a>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
