import { createClient } from '@supabase/supabase-js'

// Lazy initialization to prevent build-time errors when env vars are missing
export const getSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Supabase URL and Key are required.")
    }

    return createClient(supabaseUrl, supabaseAnonKey)
}

// Function removed to prevent build-time crashes. Use getSupabaseClient() instead.

export const getSupabaseAdmin = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
        throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');
    }
    return createClient(supabaseUrl, serviceRoleKey);
};
