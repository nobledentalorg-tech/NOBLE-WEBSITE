import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import { SupabaseAdapter } from "@auth/supabase-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
    secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    // Use JWT strategy instead of database adapter for local dev
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60,   // 24 hours
    },
    // Temporarily disabled - requires NextAuth database schema
    // adapter: (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
    //     ? SupabaseAdapter({
    //         url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    //         secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
    //     })
    //     : undefined,
    callbacks: {
        session({ session, token }) {
            if (session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
    },
})
