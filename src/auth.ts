import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { SupabaseAdapter } from "@auth/supabase-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    // Prevent build-time error if env vars are missing
    adapter: (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
        ? SupabaseAdapter({
            url: process.env.NEXT_PUBLIC_SUPABASE_URL,
            secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
        })
        : undefined,
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
                // Add other custom fields if needed
            }
            return session
        },
    },
})
