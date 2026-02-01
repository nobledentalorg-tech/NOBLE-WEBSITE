require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('--- INTERACTION AUDIT: Last 100 Neo AI Conversations ---\n');

    try {
        // 1. Get total message count
        const totalMessages = await prisma.messages.count();
        console.log(`📊 Total Messages in Database: ${totalMessages}\n`);

        // 2. Get total chat count
        const totalChats = await prisma.chats.count();
        console.log(`💬 Total Chats: ${totalChats}\n`);

        // 3. Get last 100 messages with chat context
        const recentMessages = await prisma.messages.findMany({
            take: 100,
            orderBy: { created_at: 'desc' },
            include: {
                chats: {
                    select: {
                        id: true,
                        title: true,
                        created_at: true
                    }
                }
            }
        });

        console.log(`📝 Last ${recentMessages.length} Messages:\n`);
        console.log('═'.repeat(80));

        recentMessages.forEach((msg, idx) => {
            const timestamp = new Date(msg.created_at).toLocaleString('en-IN', {
                dateStyle: 'short',
                timeStyle: 'medium'
            });
            console.log(`\n[${idx + 1}] ${msg.role.toUpperCase()} (${timestamp})`);
            console.log(`Chat: ${msg.chats?.title || 'Unknown'}`);
            console.log(`Content: ${msg.content?.substring(0, 150)}${msg.content?.length > 150 ? '...' : ''}`);
            console.log('─'.repeat(80));
        });

        // 4. Get NeoMemory entries
        const memoryEntries = await prisma.neoMemory.count();
        console.log(`\n\n🧠 NeoMemory Entries: ${memoryEntries}`);

        if (memoryEntries > 0) {
            const recentMemories = await prisma.neoMemory.findMany({
                take: 10,
                orderBy: { createdAt: 'desc' }
            });
            console.log('\n📚 Recent Memory Entries:');
            recentMemories.forEach((mem, idx) => {
                console.log(`\n[${idx + 1}] Query: ${mem.query}`);
                console.log(`Answer: ${mem.answer.substring(0, 100)}...`);
                console.log(`Verified: ${mem.isVerified ? '✅' : '❌'}`);
            });
        }

        console.log('\n\n✅ AUDIT COMPLETE');

    } catch (e) {
        console.error('❌ Audit failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
