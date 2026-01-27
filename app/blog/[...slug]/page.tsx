import React from 'react';
import { getSupabaseClient } from '@/lib/supabase';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import type { Metadata } from 'next';

// Revalidate every hour
export const revalidate = 3600;

interface PageProps {
    params: { slug: string[] };
}

import { NeoBlogEngine } from '@/neo/NeoBlogEngine';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = params.slug.join('/');

    // 1. Try Clinical Engine
    const allAutoBlogs = NeoBlogEngine.getAllAutoBlogs();
    const autoPost = allAutoBlogs.find(b => b.slug === slug || b.slug === `blog/${slug}` || b.slug.endsWith(slug));

    if (autoPost) {
        return {
            title: `${autoPost.title} | Clinical Insights`,
            description: autoPost.excerpt
        };
    }

    // 2. Try Supabase
    try {
        const { data: post } = await getSupabaseClient()
            .from('posts')
            .select('*')
            .eq('slug', slug)
            .single();

        if (post) {
            return {
                title: `${post.title} | Noble Dental Blog`,
                description: post.excerpt,
                openGraph: {
                    title: post.title,
                    description: post.excerpt,
                    images: post.cover_image ? [post.cover_image] : [],
                },
                authors: [{ name: post.author }],
            };
        }
    } catch (e) { }

    return { title: 'Article | Noble Dental' };
}

export default async function BlogPostPage({ params }: PageProps) {
    const slug = params.slug.join('/');
    let post = null;

    // 1. Check Clinical Engine First
    const allAutoBlogs = NeoBlogEngine.getAllAutoBlogs();
    const autoPost = allAutoBlogs.find(b => b.slug === slug || b.slug === `blog/${slug}` || b.slug.endsWith(slug));

    if (autoPost) {
        post = {
            title: autoPost.title,
            content: autoPost.content,
            excerpt: autoPost.excerpt,
            created_at: autoPost.date,
            author: 'Clinical Intelligence (Neo)',
            tags: autoPost.tags,
            cover_image: null
        };
    } else {
        // 2. Check Supabase
        try {
            const { data } = await getSupabaseClient()
                .from('posts')
                .select('*')
                .eq('slug', slug)
                .single();
            post = data;
        } catch (error) {
            console.warn("Supabase load failed");
        }
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">

            <article className="pt-32 pb-16">
                {/* Hero / Header */}
                <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-6">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {format(new Date(post.created_at), 'MMMM d, yyyy')}</span>
                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                        {post.title}
                    </h1>
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cover Image */}
                {post.cover_image && (
                    <div className="max-w-5xl mx-auto px-6 mb-16 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.cover_image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content Body */}
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:font-display prose-blue">
                        <div className="whitespace-pre-wrap font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
                            {post.content}
                        </div>
                    </div>

                    {/* Author Bio Box */}
                    <div className="mt-16 p-8 bg-slate-50 dark:bg-[#111620] rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Written by {post.author}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                This article was medically reviewed by the Clinical Core at Noble Dental Care.
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">
                            <ArrowLeft size={18} /> Back to Insights
                        </Link>
                    </div>
                </div>
            </article>

        </div>
    );
}
