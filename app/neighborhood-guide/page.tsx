
import React from 'react';
import { MapPin, School, Building2, Navigation, Clock, Moon, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CrawlableReviews from '@/components/CrawlableReviews';

export const metadata: Metadata = {
    title: 'Neighborhood Guide | Noble Dental Nallagandla',
    description: 'We are centrally located near Aparna Neo Mall & Citizens Hospital. Serving families from Epistemo, Manthan, and residents of Nallagandla & Tellapur.',
};

export default function NeighborhoodGuide() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] font-sans">

            {/* Hero */}
            <section className="pt-32 pb-16 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-6 border border-white/30 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} /> Hyper-Local Connectivity
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        At the Heart of <br /> Nallagandla & Tellapur.
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-bold opacity-90">
                        <span className="flex items-center gap-2"><Clock /> Standard: 11:00 AM - 10:15 PM</span>
                        <span className="flex items-center gap-2 text-amber-300"><Moon /> Emergency: 24/7 Available</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                    Noble Dental Care isn&apos;t just a clinic; we are a community landmark.
                    Strategically positioned to serve the vibrant residential blocks of Nallagandla and the booming IT corridors of Gopanpally.
                    Here is your guide to reaching us from key neighborhood points.
                </p>
            </section>

            {/* 1. Schools (Pediatric Focus) */}
            <section className="py-16 px-6 bg-white dark:bg-[#0B1019] border-y border-slate-100 dark:border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-4 rounded-2xl bg-orange-100 text-orange-600"><School size={32} /></div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white">For Families & Students</h2>
                            <p className="text-slate-500">Convenient after-school appointments for busy parents.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card p-8 rounded-3xl bg-slate-50 dark:bg-white/5 hover:border-orange-200 transition-colors border border-transparent">
                            <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Nallagandla Cluster</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Epistemo+Global+School+Nallagandla" target="_blank" rel="nofollow noreferrer" className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[0.9rem] transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                        <Navigation size={16} /> <span><strong>Epistemo Global School</strong> (Near Aparna Cyber Life)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Indus+International+Junior+School+Nallagandla" target="_blank" rel="nofollow noreferrer" className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[0.9rem] transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                        <Navigation size={16} /> <span><strong>Indus International Junior</strong> (9 mins away)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Sadhana+Infinity+International+School" target="_blank" rel="nofollow noreferrer" className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[0.9rem] transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                        <Navigation size={16} /> <span><strong>Sadhana Infinity Intl</strong> (Nallagandla-Tellapur Rd)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="card p-8 rounded-3xl bg-slate-50 dark:bg-white/5 hover:border-orange-200 transition-colors border border-transparent">
                            <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Tellapur Corridor</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Manthan+International+School+Tellapur" target="_blank" rel="nofollow noreferrer" className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[0.9rem] transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                        <Navigation size={16} /> <span><strong>Manthan International School</strong> (Serving High-Value Tellapur)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Meru+International+School+Tellapur" target="_blank" rel="nofollow noreferrer" className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[0.9rem] transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                        <Navigation size={16} /> <span><strong>Meru International School</strong> (Beside My Home Tridasa)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Glendale+International+School+Tellapur" target="_blank" rel="nofollow noreferrer" className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[0.9rem] transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                                        <Navigation size={16} /> <span><strong>Glendale International School</strong></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Aparna Neo Mall Catchment (High Value) */}
            <section className="py-16 px-6 bg-pink-50 dark:bg-pink-900/10 border-y border-pink-100 dark:border-pink-800/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="w-4 h-4 rounded-full bg-pink-500 animate-pulse"></span> Visiting Aparna Neo Mall?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                Noble Dental Care is located just <strong>450 meters</strong> away ($17.4816° N, 78.3183° E), a short <strong>2-minute drive</strong> or <strong>6-minute walk</strong> from the mall&apos;s main entrance.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                                We are the most convenient multispecialty clinic for shoppers and movie-goers at <strong>Aparna Cinemas</strong>.
                                Finish your shopping and drop by for a quick, quality dental cleaning!
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-pink-100 dark:border-pink-500/20">
                                    <span className="block text-xs font-bold uppercase text-pink-600 mb-1">From Mall Main Gate</span>
                                    <span className="text-xs text-slate-500">Exit Gate → Turn Left → 450m Straight</span>
                                </div>
                                <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-pink-100 dark:border-pink-500/20">
                                    <span className="block text-xs font-bold uppercase text-pink-600 mb-1">From Parking Exit</span>
                                    <span className="text-xs text-slate-500">Exit → Right U-Turn → 1 min Drive</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full h-[300px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.703464807516!2d78.30561397462881!3d17.473901500308084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936d705f0d7b%3A0x3f1aca1c9cebf1ae!2sNoble%20Dental%20Care%20%7C%20Multispeciality%20Dental%20clinic%20in%20Nallagandla!5e0!3m2!1sen!2sin!4v1769543688405!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" style={{ border: 0 }}></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.1 EXCLUSIVE: Aparna Sarovar Zenith Residents */}
            <section className="py-16 px-6 bg-emerald-50 dark:bg-emerald-900/10 border-b border-emerald-100 dark:border-emerald-800/20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">
                            <Building2 size={12} /> Exclusively for Residents
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-emerald-950 dark:text-emerald-50 mb-6">
                            Best Dentist for <br /> <span className="text-emerald-600">Aparna Sarovar Zenith.</span>
                        </h2>
                        <p className="text-lg text-emerald-800/70 dark:text-emerald-200/70 mb-8 leading-relaxed">
                            We know you value convenience. Noble Dental Care is the closest premium dental clinic to the Zenith main gate.
                            Skip the Gachibowli traffic. Your <strong>5-minute commute</strong> means you can schedule appointments before work or after dropping kids at school.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700"><MapPin size={12} /></div>
                                <span className="font-bold text-emerald-900 dark:text-emerald-100">Directly Opposite Citizens Hospital Road</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700"><Clock size={12} /></div>
                                <span className="font-bold text-emerald-900 dark:text-emerald-100">Open until 10:15 PM for IT Professionals</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-105 transition-all">
                            Book Resident Slot
                        </Link>
                    </div>
                    <div className="flex-1 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-emerald-900/50">
                        {/* Placeholder for Zenith Image - Using a generic luxury apartment image */}
                        <Image
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                            alt="Aparna Sarovar Zenith View"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex items-end p-8">
                            <p className="text-white font-bold text-xl">Just 5 Minutes Away.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.2 PARENT FOCUS: Manthan International School */}
            <section className="py-16 px-6 bg-amber-50 dark:bg-amber-900/5">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                        <School size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
                        Parents of <span className="text-amber-500">Manthan International?</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        Beat the <strong>3:30 PM School-Run Traffic</strong>. Avoid the detour to Gachibowli.
                        Noble Dental Care is perfectly situated on the Tellapur-Nallagandla corridor.
                        Pick up your child and hop in for a <strong>Preventive Fluoride Check</strong> on your way home.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 bg-white dark:bg-white/5 rounded-full border border-amber-200 font-bold text-amber-700 dark:text-amber-400 shadow-sm text-sm">
                            ⚡ Zero Wait Time 3:30 - 4:30 PM
                        </div>
                        <div className="px-6 py-3 bg-white dark:bg-white/5 rounded-full border border-amber-200 font-bold text-amber-700 dark:text-amber-400 shadow-sm text-sm">
                            🅿️ Valet Parking for School Buses/Vans
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Major Landmarks & Roads */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-4 rounded-2xl bg-blue-100 text-blue-600"><Building2 size={32} /></div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Major Landmarks</h2>
                            <p className="text-slate-500">Accessible from every major road in Nallagandla.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Neo Mall */}
                        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/20">
                            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">Aparna Neo Mall</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Largest Retail Hub. Just 450 meters away.</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Aparna+Neo+Mall+Nallagandla" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                                Get Directions <Navigation size={12} />
                            </a>
                        </div>

                        {/* Citizens Hospital */}
                        <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20">
                            <h4 className="font-bold text-lg text-green-900 dark:text-green-100 mb-2">Citizens Hospital</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Key Medical Landmark. 5 minutes drive.</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Citizens+Specialty+Hospital+Nallagandla" className="text-xs font-bold text-green-600 hover:underline flex items-center gap-1">
                                Get Directions <Navigation size={12} />
                            </a>
                        </div>

                        {/* Kanchi Gachibowli Rd */}
                        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Kanchi Gachibowli Rd</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Our Main Artery. Connecting Gachibowli & Lingampally.</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Noble+Dental+Care+Nallagandla" className="text-xs font-bold text-slate-600 hover:underline flex items-center gap-1">
                                View Location <Navigation size={12} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Verified Reviews (The Trust Loop) */}
            <div className="mb-20">
                <CrawlableReviews />
            </div>

            {/* 3. Hotels (Visitors) */}
            <section className="py-16 px-6 bg-slate-900 text-white rounded-[3rem] mb-20 mx-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-black mb-8 flex items-center justify-center gap-3">
                        <Star className="text-yellow-400 fill-yellow-400" /> Visitors & Travelers
                    </h2>
                    <p className="text-slate-300 mb-12">
                        Staying at <a href="#" className="underline decoration-slate-600">Priya Hyderabad</a>, <a href="#" className="underline decoration-slate-600">Hotel Shubham Celebrations</a>, or <a href="#" className="underline decoration-slate-600">FabHotel Broholic Suites</a>?
                        <br />We offer <strong>Emergency Dental Care</strong> for travelers with quick turnaround times.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform">
                        Book Emergency Appointment
                    </Link>
                </div>
            </section>
        </main>
    );
}
