/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Hotel, Clock, Divide, ArrowRight, MapPin, ShieldCheck, Globe } from 'lucide-react';

export const metadata = {
    title: 'International Patient Care | Dental Tourism Hyderabad | Noble Dental',
    description: 'World-class dental implants and smile makeovers in Hyderabad at 60% less cost. Airport pickup, luxury stay at Sheraton/Hyatt, and fast-track treatments.',
};

export default function InternationalPatients() {
    return (
        <div className="bg-white dark:bg-[#0B1019] text-slate-900 dark:text-white pb-20">

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
                {/* Abstract/Travel Background - Using a dark gradient placeholder or generate_image equivalent */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")', filter: 'brightness(0.5)' }}></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4">
                        <Globe size={12} /> Global Patient Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6">
                        World-Class Care. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">Indian Hospitality.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8">
                        Experience advanced dental treatments in Hyderabad at <span className="text-white font-bold">60% of the cost</span> of US/UK/Aus.
                        Airport transfers, 5-star partners, and fast-track care included.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10">
                        <a href="#plan-trip" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                            <Plane size={18} /> Plan My Trip
                        </a>
                        <a href="https://wa.me/918610425342" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                            Get Estimate via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Noble (The Financial/Quality Argument) */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black mb-6">Why fly to Hyderabad?</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Noble Dental Care offers the same premium Swiss/German implant brands (Straumann, Nobel Biocare) used in the West, but at a fraction of the price due to lower operational costs in India. You don't compromise on quality—you just pay less.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-black">$$</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">60-70% Cost Savings</h4>
                                        <p className="text-sm text-slate-500">Compared to average US/UK/Australia dental pricings.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"><Clock size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">Fast-Track Treatment</h4>
                                        <p className="text-sm text-slate-500">Same-day implants and 7-day complete smile makeovers.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400"><ShieldCheck size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">International Standards</h4>
                                        <p className="text-sm text-slate-500">Class B Sterilization & Global Implant Brands.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Comparison Table */}
                        <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                            <h3 className="text-xl font-bold mb-6 relative z-10">Cost Comparison (Avg.)</h3>

                            <div className="space-y-4 relative z-10">
                                <div className="grid grid-cols-3 text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                                    <div>Procedure</div>
                                    <div className="text-right">USA/UK</div>
                                    <div className="text-right text-green-400">Noble Dental</div>
                                </div>

                                {[
                                    { name: "Single Implant", us: "$3,500+", in: "$450+" },
                                    { name: "Full Mouth Implants", us: "$25,000+", in: "$4,500+" },
                                    { name: "Zirconia Crown", us: "$1,200", in: "$150" },
                                    { name: "Root Canal", us: "$1,000", in: "$80" }
                                ].map((item, i) => (
                                    <div key={i} className="grid grid-cols-3 py-4 border-b border-white/10 items-center">
                                        <div className="font-bold text-sm">{item.name}</div>
                                        <div className="text-right text-slate-400 font-mono">{item.us}</div>
                                        <div className="text-right text-green-400 font-mono font-bold bg-green-900/20 py-1 px-2 rounded ml-auto">{item.in}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center text-xs text-slate-400">
                                *Estimates based on average market prices. Exact cost may vary.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospitality Partners */}
            <section className="bg-slate-50 dark:bg-white/5 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <Hotel size={12} /> Premium Stay
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Relax in Luxury.</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            We have partnered with top-tier hotels near our Nallagandla clinic to ensure your recovery is as comfortable as your treatment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Hotel 1 */}
                        <div className="group relative overflow-hidden rounded-[2rem] aspect-[4/3]">
                            <Image src="https://cache.marriott.com/content/dam/marriott-renditions/HYDSI/hydsi-exterior-0044-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2880px:*" alt="Sheraton Hyderabad" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">5 Star Luxury</div>
                                <h3 className="text-2xl font-bold text-white mb-1">Sheraton Hyderabad</h3>
                                <p className="text-slate-300 text-sm mb-4">Financial District (10 mins away)</p>
                                <div className="flex gap-2">
                                    <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded">Spa</span>
                                    <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded">Pool</span>
                                    <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded">Airport Shuttle</span>
                                </div>
                            </div>
                        </div>

                        {/* Hotel 2 */}
                        <div className="group relative overflow-hidden rounded-[2rem] aspect-[4/3]">
                            <Image src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/10/24/1041/Hyatt-Hyderabad-Gachibowli-P088-Pool-Dusk.jpg/Hyatt-Hyderabad-Gachibowli-P088-Pool-Dusk.16x9.jpg" alt="Hyatt Hyderabad" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <div className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">Urban Resort</div>
                                <h3 className="text-2xl font-bold text-white mb-1">Hyatt Hyderabad Gachibowli</h3>
                                <p className="text-slate-300 text-sm mb-4">Nanakramguda (15 mins away)</p>
                                <div className="flex gap-2">
                                    <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded">Lush Gardens</span>
                                    <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded">Yoga</span>
                                    <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded">Wellness</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Logistics Plan (Timeline) */}
            <section id="plan-trip" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Your Trip Itinerary</h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                        {/* Step 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                                <h3 className="font-bold text-lg mb-2">Virtual Consultation (Before Trip)</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Connect with Dr. Dhivakaran Reddy via Zoom/WhatsApp. Share X-rays and get a tentative treatment plan and cost estimate.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                                <h3 className="font-bold text-lg mb-2">Arrival & Chauffeur Pickup</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Land at RGIA Hyderabad. Our partner chauffeur will pick you up and drop you at your hotel (Sheraton/Hyatt).</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                                <h3 className="font-bold text-lg mb-2">Treatment (Fast-Track)</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Day 1: Scans & Procedures. Day 2-5: Recovery & Sightseeing. Day 6: Final Prosthetics fit.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                4
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                                <h3 className="font-bold text-lg mb-2">Fly Back with a Smile</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Final checkup and drop-off at the airport. Continued support via WhatsApp post-return.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-black mb-8">Ready to transform your smile?</h2>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                    Start Free Consultation <ArrowRight />
                </Link>
            </section>

        </div>
    );
}
