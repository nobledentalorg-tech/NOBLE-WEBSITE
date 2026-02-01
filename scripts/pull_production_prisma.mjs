import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('--- PRODUCTION DATA PULL (PRISMA) ---');

    try {
        const neoMemory = await prisma.neoMemory.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' }
        });
        console.log('\n[NeoMemory]');
        console.log(JSON.stringify(neoMemory, null, 2));

        const leads = await prisma.leads.findMany({
            take: 5,
            orderBy: { created_at: 'desc' }
        });
        console.log('\n[Leads]');
        console.log(JSON.stringify(leads, null, 2));

        const messages = await prisma.messages.findMany({
            take: 10,
            orderBy: { created_at: 'desc' },
            include: {
                chats: {
                    select: { title: true }
                }
            }
        });
        console.log('\n[Messages]');
        console.log(JSON.stringify(messages, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value, 2));

    } catch (error) {
        console.error('Error pulling production data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
