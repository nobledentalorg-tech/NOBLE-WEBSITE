0const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const logs = await prisma.security_logs.findMany({
            orderBy: { created_at: 'desc' },
            take: 20,
        });

        console.log(`Found ${logs.length} security events.`);

        if (logs.length === 0) {
            console.log("No threats detected yet.");
        } else {
            console.table(logs.map(log => ({
                Type: log.event_type,
                IP: log.ip_address,
                'User Agent': log.user_agent ? log.user_agent.substring(0, 50) + '...' : 'N/A',
                Path: log.path,
                Time: log.created_at.toLocaleString()
            })));
        }
    } catch (e) {
        console.error("Error fetching logs:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
