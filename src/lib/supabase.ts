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
