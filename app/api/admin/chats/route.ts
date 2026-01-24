import { auth } from "@/src/auth"
import { getSupabaseClient } from "@/src/lib/supabase"
import { NextResponse } from "next/server"

// Check for specific admin emails (hardcoded for now, can be moved to DB role later)
const ADMIN_EMAILS = ['dhivakaran.noble@gmail.com', 'admin@nobledental.com']

export async function GET(req: Request) {
    const session = await auth()

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Simple Admin Check
    // Note: For now, allowing any authenticated user to view calls for demo purposes if list is empty,
    // typically you would check: if (!ADMIN_EMAILS.includes(session.user.email)) ...

    const { searchParams } = new URL(req.url)
    const chatId = searchParams.get('chatId')

    try {
        if (chatId) {
            // Fetch Messages for a Chat
            const supabase = getSupabaseClient()
            const { data: messages, error } = await supabase
                .from('messages')
                .select('*')
                .eq('chat_id', chatId)
                .order('timestamp', { ascending: true })

            if (error) throw error
            return NextResponse.json(messages)

        } else {
            // Fetch All Chats
            const supabase = getSupabaseClient()
            const { data: chats, error } = await supabase
                .from('chats')
                .select(`
            *,
            users (
                name,
                email,
                image
            )
        `)
                .order('created_at', { ascending: false })

            if (error) throw error
            return NextResponse.json(chats || [])
        }

    } catch (error) {
        console.error("Admin API Error:", error)
        return NextResponse.json({ error: "Data fetch failed" }, { status: 500 })
    }
}
