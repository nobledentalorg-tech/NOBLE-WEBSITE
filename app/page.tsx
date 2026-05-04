import React, { Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import Skeleton from '@/components/Skeleton';
import { NewsTicker } from '@/components/NewsTicker';

// Dynamic imports for code-splitting — SSR ENABLED for crawlability
const Services = dynamic(() => import('@/components/Services'));
const About = dynamic(() => import('@/components/About'));
const MissionValues = dynamic(() => import('@/components/MissionValues'));
const Gallery = dynamic(() => import('@/components/Gallery'));
const Doctors = dynamic(() => import('@/components/Doctors'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Contact = dynamic(() => import('@/components/Contact'));
const Credentials = dynamic(() => import('@/components/Credentials'));
const TechnologyGrid = dynamic(() => import('@/components/TechnologyGrid'));
const NobleDifference = dynamic(() => import('@/components/NobleDifference'));
const CrawlableReviews = dynamic(() => import('@/components/CrawlableReviews'));

export default function Home() {
    return (
        <>
            {/* 1. Hero Section (The Hook - 3 Seconds) */}
            <Hero />

            {/* 2. News Ticker */}
            <NewsTicker />

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
