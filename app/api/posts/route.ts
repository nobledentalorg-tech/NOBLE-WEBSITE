import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, content, excerpt, author, pin, cover_image, tags } = body;

        // Basic Security: Check PIN (Same as Frontend Admin)
        if (pin !== 'Noble@2024') {
            return NextResponse.json({ error: 'Unauthorized: Invalid PIN' }, { status: 401 });
        }

        const supabase = getSupabaseAdmin();

        // Auto-generate Slug
        const slug = title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '') + '-' + Date.now();

        const { data, error } = await supabase.from('posts').insert({
            title,
            slug,
            content,
            excerpt,
            author: author || 'Dr. Dhivakaran',
            cover_image,
            tags: tags || [],
            published: true
        }).select();

        if (error) {
            console.error('Supabase Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, post: data[0] });

    } catch (e) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
