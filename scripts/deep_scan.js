const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('--- DEEP DATABASE SCAN (ALL SCHEMAS) ---');
    try {
        const res = await prisma.$queryRawUnsafe(`
            SELECT 
                schemaname, 
                relname as table_name, 
                n_live_tup as row_count 
            FROM 
                pg_stat_user_tables 
            WHERE 
                n_live_tup > 0;
        `);
        console.log("Tables with data:");
        console.table(res);
    } catch (e) {
        console.error("Deep scan failed:", e);
    }
    await prisma.$disconnect();
}

main();
