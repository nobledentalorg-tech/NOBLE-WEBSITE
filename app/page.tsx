'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Zap, Sparkles, Heart, Calendar, Megaphone, Activity, Bot, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import Skeleton from '@/components/Skeleton';

// Dynamically import components below the fold to improve LCP and TBT
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const MissionValues = dynamic(() => import('@/components/MissionValues'), { ssr: false });
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
const Doctors = dynamic(() => import('@/components/Doctors'), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Credentials = dynamic(() => import('@/components/Credentials'), { ssr: false });
const TechnologyGrid = dynamic(() => import('@/components/TechnologyGrid'), { ssr: false });
const NobleDifference = dynamic(() => import('@/components/NobleDifference'), { ssr: false });
const CrawlableReviews = dynamic(() => import('@/components/CrawlableReviews'), { ssr: false });

export default function Home() {
    const offers = [
        { text: "Braces Treatment starting at ₹35,000 only!", icon: Zap },
        { text: "Medical Grade Scaling & Tooth Cleaning at ₹1,800", icon: Sparkles },
        { text: "Certified In-house Clear Aligners at ₹950 per tray", icon: Heart },
        { text: "Limited Slots Available for Implants! Book Now.", icon: Calendar }
    ];

    return (
        <>
            {/* 1. Hero Section (The Hook - 3 Seconds) */}
            <Hero />

            {/* 2. News Ticker */}
            <div className="w-full bg-slate-900 py-6 relative z-20 overflow-hidden border-y border-white/5">
                <div className="relative flex items-center">
                    <div className="absolute left-6 z-30 bg-blue-600 text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl shadow-blue-500/40">
                        <Megaphone size={14} fill="currentColor" /> Live Offers
                    </div>

                    {/* Marquee Animation */}
                    <div className="flex whitespace-nowrap overflow-hidden">
                        <div className="flex gap-20 items-center animate-scroll pl-[200px]">
                            {[...Array(2)].map((_, groupIdx) => (
                                <React.Fragment key={groupIdx}>
                                    {offers.map((offer, idx) => (
                                        <div key={idx} className="flex items-center gap-5">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10">
                                                <offer.icon size={20} />
                                            </div>
                                            <span className="text-lg font-black tracking-tight text-white uppercase opacity-100">
                                                {offer.text}
                                            </span>
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Connect With Us (Contact) - Moved UP */}
            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
                    <Contact />
                </Suspense>
            </RevealOnScroll>

            {/* 4. Core Services (What We Do) */}
            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
                    <Services />
                </Suspense>
            </RevealOnScroll>


            {/* 6. Technology Grid (Countering Competitors) */}
            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <TechnologyGrid />
                </Suspense>
            </RevealOnScroll>

            {/* 7. Gallery (Visual Proof) */}
            <RevealOnScroll className="hide-on-lite">
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <Gallery />
                </Suspense>
            </RevealOnScroll>

            {/* 8. Doctors (Authority) */}
            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
                    <Doctors />
                </Suspense>
            </RevealOnScroll>

            {/* 9. About & Mission (Deep Dive - 3 Minutes) */}
            <RevealOnScroll className="hide-on-lite">
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <About />
                </Suspense>
            </RevealOnScroll>

            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                    <MissionValues />
                </Suspense>
            </RevealOnScroll>

            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <NobleDifference />
                </Suspense>
            </RevealOnScroll>

            {/* 10. FAQ & Reviews */}
            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <FAQ />
                </Suspense>
            </RevealOnScroll>

            {/* 11. The Trust Loop (Social Proof) - Moved DOWN */}
            <RevealOnScroll>
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <CrawlableReviews />
                </Suspense>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="cursor-pointer">
                    <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                        <Credentials />
                    </Suspense>
                    <div className="text-center pb-10 -mt-10">
                        <Link href="/credentials-page" className="text-sm font-bold text-blue-600 hover:underline">
                            View All Certificates
                        </Link>
                    </div>
                </div>
            </RevealOnScroll>
        </>
    );
}
