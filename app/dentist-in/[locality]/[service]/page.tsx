import React from 'react';
import { notFound } from 'next/navigation';
import { pseoLocalities, pseoServices } from '@/data/pseo';
import { getLocalityData } from '@/data/localityMatrix'; // NEW: Import Matrix
import { getClinicStatus } from '@/lib/time-utils';
import StatusBadge from '@/components/pseo/StatusBadge';
import EmergencyFloatingCTA from '@/components/pseo/EmergencyFloatingCTA';
import FloatingCTA from '@/components/FloatingCTA';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, Phone, Clock, ShieldCheck, Star, Navigation } from 'lucide-react';

export const revalidate = 60;

interface PageProps {
    params: {
        locality: string;
        service: string;
    };
}

export async function generateStaticParams() {
    const params = [];
    for (const locality of pseoLocalities) {
        for (const service of pseoServices) {
            params.push({
                locality: locality.slug,
                service: service.slug,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps) {
    const locality = pseoLocalities.find((l) => l.slug === params.locality);
    const service = pseoServices.find((s) => s.slug === params.service);
    const localityData = getLocalityData(params.locality); // Get Rich Data

    if (!locality || !service) return {};

    const status = getClinicStatus();
    const timeSensitivteTitle = status.isEmergency ? "24/7 Emergency Care" : "Open Now";
    const landmarkText = localityData ? localityData.metaTitleSuffix : `Near ${locality.landmark}`;

    return {
        title: `${service.title} in ${locality.name} ${landmarkText} | ${timeSensitivteTitle} | Noble Dental`,
        description: `Urgent dental pain in ${locality.name}? Dr. Dhivakaran provides ${service.title} just ${localityData?.time || '10 mins'} away. Located near ${localityData?.landmarks[0] || locality.landmark}. Open until 10:15 PM.`,
        keywords: [
            `${service.title} in ${locality.name}`,
            `${service.simple_term} ${locality.name}`,
            `Dentist near ${locality.landmark}`,
            `Dental clinic in ${locality.name}`,
            `${service.category} dentistry ${locality.name}`,
            'Noble Dental Care',
            'Hyderabad'
        ],
    };
}

export default function PSEOPage({ params }: PageProps) {
    const locality = pseoLocalities.find((l) => l.slug === params.locality);
    const service = pseoServices.find((s) => s.slug === params.service);
    const localityData = getLocalityData(params.locality);

    if (!locality || !service) {
        notFound();
    }

    const status = getClinicStatus();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-white">
            <Header />

            <main className="pt-24 pb-12">
                {/* HERO SECTION */}
                <section className="relative px-6 lg:px-12 max-w-7xl mx-auto mb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            {/* STATUS BADGE */}
                            <div className="mb-4">
                                <StatusBadge />
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                                {(() => {
                                    const isEmergency = service.category === 'Restorative' || service.category === 'Emergency' || service.category === 'Pediatrics';
                                    const isCosmetic = service.category === 'Orthodontics' || service.category === 'Implantology' || service.category === 'Cosmetic';

                                    if (isEmergency) {
                                        return (
                                            <>
                                                <span className="text-blue-600 block text-lg uppercase tracking-widest font-bold mb-2">
                                                    Open Now in {locality.name}
                                                </span>
                                                Where can I find <br /> {service.title} <br />
                                                <span className="sr-only">Pronounced: {service.phonetic}</span>
                                                <span className="text-slate-400 dark:text-slate-600">open now?</span>
                                            </>
                                        );
                                    }

                                    if (isCosmetic) {
                                        return (
                                            <>
                                                <span className="text-blue-600 block text-lg uppercase tracking-widest font-bold mb-2">
                                                    Best in {locality.name}
                                                </span>
                                                Who is the best <br /> {service.title} <br />
                                                <span className="sr-only">Pronounced: {service.phonetic}</span>
                                                <span className="text-slate-400 dark:text-slate-600">for results?</span>
                                            </>
                                        );
                                    }

                                    return (
                                        <>
                                            <span className="text-blue-600 block text-lg uppercase tracking-widest font-bold mb-2">
                                                {locality.name} Dental Care
                                            </span>
                                            {service.title} <br />
                                            <span className="sr-only">Pronounced: {service.phonetic}</span>
                                            <span className="text-slate-400 dark:text-slate-600">in {locality.name}.</span>
                                        </>
                                    );
                                })()}
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl">
                                {service.emergency_hook} <br />
                                <span className="block mt-2 text-base text-slate-500">
                                    Trusted by <strong>{localityData?.demographic || 'families'}</strong> in {locality.name} for {service.simple_term}.
                                </span>
                            </p>

                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 max-w-md">
                                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                    <Clock className="text-green-600" size={18} />
                                    <span>Only <strong>{localityData?.time || '10 mins'} drive</strong> from {localityData?.landmarks[0] || locality.landmark}.</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="tel:8074512305" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform flex items-center gap-3">
                                    <Phone size={20} />
                                    CALL NOW
                                </a>
                                <Link href="/book-appointment" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                    Book Online
                                </Link>
                            </div>

                            {/* Local Landmarks - SEO Anchor */}
                            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                <p className="text-xs uppercase font-bold text-slate-400 mb-2">Easily Accessible From:</p>
                                <div className="flex flex-wrap gap-2">
                                    {localityData?.landmarks.map((mark, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400">
                                            <Navigation size={10} /> {mark}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MAP / IMAGE CARD */}
                        <div className="flex-1 w-full max-w-lg">
                            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative shadow-2xl border-4 border-white dark:border-slate-700">
                                <iframe
                                    title={`Noble Dental Care location map for ${service.title} in ${locality.name}`}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3805.226866299863!2d78.309001!3d17.491689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f1aca1c9cebf1ae%3A0x391307611634b391!2sNoble%20Dental%20Care%20-%20Best%20Dentist%20in%20Nallagandla%20%7C%20Invisalign%20%26%20Implants!5e0!3m2!1sen!2sin!4v1738128000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="opacity-90 hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">{localityData?.time || '10 Mins'} from {locality.name}</div>
                                            <div className="text-xs text-slate-500">Live Traffic Estimate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRUST SIGNALS */}
                <section className="bg-blue-50 dark:bg-slate-800/50 py-16">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <ShieldCheck size={48} className="mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">15-Year Warranty</h3>
                            <p className="text-slate-600 dark:text-slate-400">On all Zirconia Crowns & Implants.</p>
                        </div>
                        <div className="p-6">
                            <Star size={48} className="mx-auto text-yellow-400 fill-yellow-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
                            <p className="text-slate-600 dark:text-slate-400">Trusted by over 40+ families from {locality.name}.</p>
                        </div>
                        <div className="p-6">
                            <Clock size={48} className="mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Open Late (10:15 PM)</h3>
                            <p className="text-slate-600 dark:text-slate-400">The only clinic open late for working professionals.</p>
                        </div>
                    </div>
                </section>
            </main>

            <FloatingCTA /> {/* Standard CTA */}
            <EmergencyFloatingCTA /> {/* Dynamic Red CTA */}
            <Footer />
        </div>
    );
}
