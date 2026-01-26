import React from 'react';
import { getSupabaseClient } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';
import { format } from 'date-fns';

// Revalidate every hour
export const revalidate = 3600;

export const metadata = {
    title: 'Dental Health Blog | Noble Dental Care Nallagandla',
    description: 'Expert insights on dentistry, maxillo-facial surgery, and patient safety from Dr. Dhivakaran and team.',
};

import { NeoBlogEngine } from '@/neo/NeoBlogEngine';

export default async function BlogIndex() {
    // [FIX] Hardcoded File-Based Blogs (High Priority)
    let manualPosts: any[] = [
        {
            id: 'avoid-root-canal',
            slug: 'avoid-root-canal',
            title: 'Can I Avoid a Root Canal? The Honest Truth.',
            excerpt: 'Searching for how to avoid root canal? Read this honest guide by Dr. Dhivakaran. Learn when antibiotics work and when to save vs extract.',
            created_at: new Date().toISOString(),
            author: 'Dr. Dhivakaran',
            category: 'Patient Education',
            cover_image: null
        },
        {
            id: 'invisalign-vs-toothsi',
            slug: 'invisalign-vs-toothsi',
            title: 'Invisalign vs. Direct-to-Home Aligners: Which is Safe?',
            excerpt: 'Thinking about ordering aligners online? Read this comparison first. We compare cost, safety, and results of Invisalign vs Toothsi.',
            created_at: new Date().toISOString(),
            author: 'Dr. Dhivakaran',
            category: 'Orthodontic Guide',
            cover_image: null
        }
    ];

    try {
        const { data } = await getSupabaseClient()
            .from('posts')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });
        if (data) {
            // Append Supabase posts to the hardcoded ones
            manualPosts = [...manualPosts, ...data];
        }
    } catch (error) {
        console.warn("Supabase not configured or unreachable at build time. Using local blogs only.");
    }

    // Combine with dynamically generated clinical guides (100+ pages)
    const autoBlogs = NeoBlogEngine.getAllAutoBlogs();

    // Normalize and Combine
    const allPosts = [
        ...manualPosts.map(p => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt || p.content?.substring(0, 150) + '...',
            date: p.created_at,
            author: p.author || 'Dr. Dhivakaran',
            category: p.category || 'General',
            image: p.cover_image
        })),
        ...autoBlogs.map(b => ({
            id: b.slug,
            slug: b.slug,
            title: b.title,
            excerpt: b.excerpt,
            date: b.date,
            author: 'Clinical Intelligence (Neo)',
            category: b.category,
            image: null // Clinical blogs use icons/illustrations in the detail page
        }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617]">
            <Header />

            <section className="pt-32 pb-12 px-6 bg-white dark:bg-[#0B1221]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        <span className="text-blue-600">Noble</span> Insights
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Evidence-based dental knowledge, clinical updates, and patient education directly from our specialist team.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPosts && allPosts.length > 0 ? (
                        allPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                <article className="bg-white dark:bg-[#111620] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative h-48 w-full bg-slate-200 dark:bg-white/5">
                                        {post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                                                <div className="mb-2 p-3 rounded-full bg-blue-500/10 text-blue-500">
                                                    <FileText size={24} />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {format(new Date(post.date), 'MMM d, yyyy')}</span>
                                            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                                            Read Article <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-slate-400 text-lg">No articles published yet.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
