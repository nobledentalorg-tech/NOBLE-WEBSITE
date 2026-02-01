import pkg from 'pg';
const { Client } = pkg;

const connectionString = "postgresql://postgres.kkcqngvjrsujwdftjoro:OROfacial@66@aws-1-ap-south-1.pooler.supabase.com:5432/postgres";

async function main() {
    const client = new Client({
        connectionString: connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        await client.connect();

        console.log("--- PRODUCTION DATA AUDIT ---");

        // 1. NeoMemory
        const neoRes = await client.query("SELECT query, answer, \"isVerified\", \"createdAt\" FROM \"NeoMemory\" ORDER BY \"createdAt\" DESC LIMIT 5;");
        console.log("\n[NeoMemory - Recent Queries]");
        console.table(neoRes.rows);

        // 2. Messages
        const msgRes = await client.query(`
            SELECT 
                m.role, 
                m.content, 
                m.created_at,
                c.title as chat_title
            FROM messages m
            JOIN chats c ON m.chat_id = c.id
            ORDER BY m.created_at DESC
            LIMIT 10;
        `);
        console.log("\n[Messages - Recent Chat History]");
        console.table(msgRes.rows);

        // 3. Leads
        const leadRes = await client.query("SELECT name, phone, intake_data, triage_result, created_at FROM leads ORDER BY created_at DESC LIMIT 5;");
        console.log("\n[Leads - Recent Triage/Intake]");
        console.table(leadRes.rows);

    } catch (err) {
        console.error("Audit error:", err.stack);
    } finally {
        await client.end();
    }
}

main();
