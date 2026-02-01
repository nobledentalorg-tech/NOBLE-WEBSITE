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
        console.log("Connected to PostgreSQL successfully.");

        // 1. List all tables and their row counts
        const query = `
            SELECT 
                schemaname, 
                relname as table_name, 
                n_live_tup as row_count 
            FROM 
                pg_stat_user_tables 
            ORDER BY 
                n_live_tup DESC;
        `;

        const res = await client.query(query);
        console.log("--- TABLE STATS ---");
        console.table(res.rows);

        // 2. Sample data from NeoMemory if it exists
        try {
            const neoRes = await client.query("SELECT * FROM \"NeoMemory\" LIMIT 5;");
            console.log("\n--- NeoMemory SAMPLE ---");
            console.log(JSON.stringify(neoRes.rows, null, 2));
        } catch (e) {
            console.log("\nNeoMemory table check failed or empty.");
        }

        // 3. Sample data from messages if it exists
        try {
            const msgRes = await client.query("SELECT * FROM \"messages\" LIMIT 5;");
            console.log("\n--- messages SAMPLE ---");
            console.log(JSON.stringify(msgRes.rows, null, 2));
        } catch (e) {
            console.log("\nmessages table check failed or empty.");
        }

    } catch (err) {
        console.error("Connection error:", err.stack);
    } finally {
        await client.end();
    }
}

main();
