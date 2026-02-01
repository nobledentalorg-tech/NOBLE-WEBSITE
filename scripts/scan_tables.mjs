import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('--- SCANNING ALL TABLES FOR DATA ---');

    const tables = [
        'NeoMemory', 'accounts', 'case_studies', 'chats',
        'leads', 'messages', 'posts', 'sessions', 'users', 'verification_tokens'
    ];

    for (const table of tables) {
        try {
            const count = await (prisma as any)[table].count();
            console.log(`${table}: ${count} rows`);
            if (count > 0) {
                const data = await (prisma as any)[table].findMany({ take: 3 });
                console.log(`Sample from ${table}:`, JSON.stringify(data, (key, value) =>
                    typeof value === 'bigint' ? value.toString() : value, 2));
            }
        } catch (e) {
            console.log(`${table}: Error or table not found`);
        }
    }

    await prisma.$disconnect();
}

main();
