import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSupabaseClient } from '@/lib/supabase';
import { cases as staticCases } from '@/data/cases';
import CaseStudiesClient from '@/components/CaseStudiesClient';

export const metadata = {
    title: 'Surgical Case Studies | Clinical Excellence | Noble Dental',
    description: 'Real patient transformations. Evidence-based results for implants, veneers, and full mouth rehabilitations.',
};

export default async function CaseStudiesPage() {
    let dbCases: any[] = [];
    try {
        const { data } = await getSupabaseClient()
            .from('case_studies')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });
        if (data) dbCases = data;
    } catch (e) {
        console.warn("Supabase load for cases failed, using static data.");
    }

    // Merge DB cases with existing static data for fallback/initial set
    // Ensure DB cases have a structure compatible with the UI
    const normalizedDbCases = dbCases.map(c => ({
        id: c.id,
        title: c.title,
        subtitle: c.subtitle || '',
        category: c.category || 'General',
        beforeImage: c.beforeImage,
        afterImage: c.afterImage,
        description: c.description
    }));

    const allCases = [...normalizedDbCases, ...staticCases];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617]">
            <Header />
            <CaseStudiesClient initialCases={allCases} />
            <Footer />
        </main>
    );
}
