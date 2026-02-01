const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('--- FINAL DATABASE SCAN ---');
    const tables = [
        'NeoMemory', 'accounts', 'case_studies', 'chats',
        'leads', 'messages', 'posts', 'sessions', 'users', 'verification_tokens'
    ];

    for (const table of tables) {
        try {
            const count = await prisma[table].count();
            console.log(`${table}: ${count} rows`);
            if (count > 0) {
                const data = await prisma[table].findMany({ take: 2 });
                console.log(`Sample:`, JSON.stringify(data, (key, value) =>
                    typeof value === 'bigint' ? value.toString() : value, 2));
            }
        } catch (e) {
            console.log(`${table}: NOT FOUND OR ERROR`);
        }
    }
    await prisma.$disconnect();
}

main();
