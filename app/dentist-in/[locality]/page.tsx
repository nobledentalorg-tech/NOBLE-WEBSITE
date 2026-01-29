import React from 'react';
import { notFound } from 'next/navigation';
import { pseoLocalities, pseoServices } from '@/data/pseo';
import { getLocalityData } from '@/data/localityMatrix';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export const revalidate = 60;

interface PageProps {
    params: {
        locality: string;
    };
}

export async function generateStaticParams() {
    return pseoLocalities.map((locality) => ({
        locality: locality.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const locality = pseoLocalities.find((l) => l.slug === params.locality);
    const localityData = getLocalityData(params.locality);

    if (!locality) return {};

    return {
        title: `Dentist in ${locality.name} | Top Rated Dental Clinic ${localityData?.metaTitleSuffix || ''}`,
        description: `Looking for a dentist in ${locality.name}? Dr. Dhivakaran provides world-class dental care just ${localityData?.time || '10 mins'} from ${locality.landmark}.`,
    };
}

export default function LocalityHubPage({ params }: PageProps) {
    const locality = pseoLocalities.find((l) => l.slug === params.locality);
    const localityData = getLocalityData(params.locality);

    if (!locality) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white">
            <Header />

            <main className="pt-32 pb-20">
                <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        Neighborhood Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Expert Dental Care <br /> in <span className="text-blue-600">{locality.name}</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                        Serving residents of {locality.name}. We are located just <strong>{locality.driving_directions}</strong> relative to {locality.landmark}.
                    </p>

                    {localityData && (
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
                            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
                                <MapPin size={16} className="text-blue-500" /> {localityData.distance} Away
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
                                <Star size={16} className="text-yellow-500" /> Top Rated in Neighborhood
                            </span>
                        </div>
                    )}
                </section>

                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pseoServices.map((service, idx) => (
                            <Link
                                key={idx}
                                href={`/dentist-in/${locality.slug}/${service.slug}`}
                                className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${service.category === 'Emergency' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                        <ShieldCheck size={24} />
                                    </div>
                                    <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors -rotate-45 group-hover:rotate-0" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                    {service.title} in {locality.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {service.emergency_hook}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
