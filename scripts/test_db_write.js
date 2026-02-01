const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('--- DB WRITE TEST ---');
    try {
        // 1. Find or create a test user
        let user = await prisma.users.findFirst();
        if (!user) {
            console.log("No user found. Creating dummy user...");
            user = await prisma.users.create({
                data: {
                    name: 'Test Auditor',
                    email: 'audit@nobledental.in',
                    role: 'admin'
                }
            });
        }
        console.log(`Using user: ${user.id}`);

        // 2. Create a test chat
        const chat = await prisma.chats.create({
            data: {
                user_id: user.id,
                title: 'Audit Connection Test'
            }
        });
        console.log(`Created chat: ${chat.id}`);

        // 3. Create a test message
        const message = await prisma.messages.create({
            data: {
                chat_id: chat.id,
                role: 'user',
                content: 'Hello Neo, are you recording this?'
            }
        });
        console.log(`Created message: ${message.id}`);

        console.log("SUCCESS: Database write verified.");

        // 4. Verify read
        const verify = await prisma.messages.findUnique({
            where: { id: message.id }
        });
        console.log("Read verification:", verify ? "FOUND" : "NOT FOUND");

    } catch (e) {
        console.error("WRITE TEST FAILED:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
