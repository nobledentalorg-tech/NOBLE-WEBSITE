import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { treatmentsData } from '@/data/treatments';
import TreatmentDetailClient from '@/components/TreatmentDetailClient';

// --- CONFIGURATION ---
export function generateStaticParams() {
  // These IDs have their own specific folders (e.g. app/treatments/braces/page.tsx)
  // We exclude them here so Next.js doesn't try to build a generic page for them.
  const customPages = [
    'braces',
    'dental-implants',
    'root-canal',
    'veneers'  // <--- Added Veneers here
  ];

  return Object.keys(treatmentsData)
    .filter((slug) => !customPages.includes(slug)) // Filter out custom pages
    .map((slug) => ({
      slug: slug,
    }));
}
// -----------------------

// -----------------------

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const treatment = treatmentsData[params.slug];

  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${treatment.title} | Noble Dental Care`,
    description: treatment.subtitle || `Comprehensive ${treatment.title} treatment in Nallagandla & Tellapur by Dr. Dhivakaran.`,
    openGraph: {
      images: [treatment.heroImage],
    },
  };
}

export default function TreatmentDetail({ params }: { params: { slug: string } }) {
  const treatment = treatmentsData[params.slug];

  // Safety check: If data doesn't exist, show 404
  if (!treatment) {
    return notFound();
  }

  // Pass data to the Client Component
  return <TreatmentDetailClient treatment={treatment} />;
}
