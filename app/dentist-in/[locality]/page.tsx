import React from 'react';
import { notFound } from 'next/navigation';
import { pseoLocalities, pseoServices } from '@/data/pseo';
import { getLocalityData } from '@/data/localityMatrix';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export const revalidate = 60;

const BASE_URL = 'https://www.nobledentalnallagandla.in';

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
        title: `Best Dentist Near ${locality.name} | Noble Dental Care Nallagandla`,
        description: `Looking for a dentist near ${locality.name}, Hyderabad? Noble Dental Care is just ${localityData?.time || '10 mins'} away. Root canals, implants, Invisalign & emergency care by Dr. Dhivakaran Reddy. 427+ Google Reviews ⭐ 4.9`,
        alternates: {
            canonical: `${BASE_URL}/dentist-in/${locality.slug}`,
        },
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

            {/* LocalBusiness + BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'Dentist',
                                '@id': `${BASE_URL}/#dentist`,
                                name: 'Noble Dental Care',
                                image: `${BASE_URL}/images/dentalcare.nallagandla.png`,
                                url: `${BASE_URL}/dentist-in/${locality.slug}`,
                                telephone: '+91-8610425342',
                                priceRange: '₹₹',
                                address: {
                                    '@type': 'PostalAddress',
                                    streetAddress: 'Plot 151/2, ICA Clinic 1st Floor, HUDA Layout Water Tank Road',
                                    addressLocality: 'Nallagandla',
                                    addressRegion: 'Telangana',
                                    postalCode: '500019',
                                    addressCountry: 'IN'
                                },
                                geo: {
                                    '@type': 'GeoCoordinates',
                                    latitude: 17.4747785,
                                    longitude: 78.3102918
                                },
                                areaServed: {
                                    '@type': 'City',
                                    name: `${locality.name}, Hyderabad`
                                },
                                aggregateRating: {
                                    '@type': 'AggregateRating',
                                    ratingValue: '4.9',
                                    reviewCount: '427',
                                    bestRating: '5'
                                },
                                openingHoursSpecification: [
                                    {
                                        '@type': 'OpeningHoursSpecification',
                                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                                        opens: '09:30',
                                        closes: '21:00'
                                    },
                                    {
                                        '@type': 'OpeningHoursSpecification',
                                        dayOfWeek: 'Sunday',
                                        opens: '13:00',
                                        closes: '21:00'
                                    }
                                ],
                                sameAs: [
                                    'https://www.google.com/maps/place/Noble+Dental+Care',
                                    'https://www.justdial.com/Hyderabad/Noble-Dental-Care-Multispeciality-Dental-Clinic/040PXX40-XX40-230311104127-B8Q4_BZDET'
                                ]
                            },
                            {
                                '@type': 'BreadcrumbList',
                                itemListElement: [
                                    {
                                        '@type': 'ListItem',
                                        position: 1,
                                        name: 'Home',
                                        item: BASE_URL
                                    },
                                    {
                                        '@type': 'ListItem',
                                        position: 2,
                                        name: `Dentist Near ${locality.name}`,
                                        item: `${BASE_URL}/dentist-in/${locality.slug}`
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            <main className="pt-32 pb-20">
                <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        Neighborhood Guide: {locality.name}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Expert Dental Care <br /> for Residents of <span className="text-blue-600">{locality.name}</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                        Located just <strong>{locality.driving_directions}</strong> relative to {locality.landmark}.
                        <br />
                        <span className="text-sm text-slate-500 mt-2 block">
                            (Proximity Marker: {localityData?.distance || 'Nearby'} away)
                        </span>
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        {/* Utility: Deep Link to Google Maps */}
                        <Link
                            href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(locality.name + " Hyderabad")}&destination=Noble+Dental+Care+Nallagandla&travelmode=driving`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        >
                            <MapPin size={20} /> Directions from {locality.name}
                        </Link>

                        {localityData && (
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
                                <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
                                    <MapPin size={16} className="text-blue-500" /> {localityData.distance} Away
                                </span>
                                <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
                                    <Star size={16} className="text-yellow-500" /> Top Rated for {locality.name}
                                </span>
                            </div>
                        )}
                    </div>
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
                                    {service.title} for {locality.name}
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
