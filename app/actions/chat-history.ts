'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import type { SupportedLanguage } from '@/lib/language-detector'

interface ChatMessage {
    role: 'user' | 'model'
    text: string
    language: SupportedLanguage
    timestamp: number
}

/**
 * Get or create a continuous chat for the current user
 */
export async function getUserChat() {
    const session = await auth()
    if (!session?.user?.email) {
        throw new Error('Unauthorized')
    }

    // Find or create user
    let user = await prisma.users.findUnique({
        where: { email: session.user.email }
    })

    if (!user) {
        user = await prisma.users.create({
            data: {
                email: session.user.email,
                name: session.user.name || undefined,
                image: session.user.image || undefined,
            }
        })
    }

    // Get user's continuous chat (or create it)
    let chat = await prisma.chats.findFirst({
        where: { user_id: user.id },
        orderBy: { created_at: 'desc' }
    })

    if (!chat) {
        chat = await prisma.chats.create({
            data: {
                user_id: user.id,
                title: 'Neo AI Conversation'
            }
        })
    }

    return { chatId: chat.id, userId: user.id }
}

/**
 * Load last 50 messages from user's continuous thread
 */
export async function loadChatHistory(): Promise<ChatMessage[]> {
    const { chatId } = await getUserChat()

    const messages = await prisma.messages.findMany({
        where: { chat_id: chatId },
        orderBy: { created_at: 'asc' },
        take: 50,
        select: {
            role: true,
            content: true,
            language: true,
            timestamp: true
        }
    })

    return messages.map((msg: any) => ({
        role: msg.role as 'user' | 'model',
        text: msg.content,
        language: (msg.language as SupportedLanguage) || 'en',
        timestamp: Number(msg.timestamp) || Date.now()
    }))
}

/**
 * Save a message to user's continuous thread
 */
export async function saveMessage(
    role: 'user' | 'model',
    content: string,
    language: SupportedLanguage = 'en'
) {
    try {
        const { chatId } = await getUserChat()

        await prisma.messages.create({
            data: {
                chat_id: chatId,
                role,
                content,
                language
            }
        })
    } catch (error) {
        console.error('Failed to save message:', error)
        // Don't throw - chat should continue even if save fails
    }
}

/**
 * Clear chat history for current user
 */
export async function clearChatHistory() {
    try {
        const { chatId } = await getUserChat()

        await prisma.messages.deleteMany({
            where: { chat_id: chatId }
        })

        return { success: true }
    } catch (error) {
        console.error('Failed to clear chat history:', error)
        return { success: false, error: 'Failed to clear history' }
    }
}
