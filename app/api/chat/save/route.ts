import { auth } from "@/auth"
import { getSupabaseClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const session = await auth()

    // 1. Check Authentication (Optional: Allow anonymous if we want to track by IP later, but for now enforce auth)
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const body = await req.json()
        const { chatId, role, content } = body

        if (!role || !content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // 2. Ensure Chat Exists or Create New
        let activeChatId = chatId

        if (!activeChatId) {
            // Create new chat
            const supabase = getSupabaseClient()
            const { data: newChat, error: chatError } = await supabase
                .from('chats')
                .insert({
                    user_id: session.user.id,
                    title: content.substring(0, 50) + "..." // Title from first message
                })
                .select()
                .single()

            if (chatError) throw chatError
            activeChatId = newChat.id
        }

        // 3. Save Message
        const supabase = getSupabaseClient()
        const { error: msgError } = await supabase
            .from('messages')
            .insert({
                chat_id: activeChatId,
                role: role,
                content: content,
                timestamp: Date.now()
            })

        if (msgError) throw msgError

        return NextResponse.json({ success: true, chatId: activeChatId })

    } catch (error) {
        console.error("Chat Save Error:", error)
        return NextResponse.json({ error: "Failed to save message", details: error }, { status: 500 })
    }
}
