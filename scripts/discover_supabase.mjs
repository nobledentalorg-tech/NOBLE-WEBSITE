import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkcqngvjrsujwdftjoro.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODQ3Mjc3MCwiZXhwIjoyMDg0MDQ4NzcwfQ.Flh1ZPdp3fmDfQ54DSmLWqxYA9H5VzhmX7juv0zCdgE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
    const { data, error } = await supabase
        .rpc('get_tables_info') // This might not exist, alternative below

    if (error) {
        console.log('RPC failed, trying raw query via information_schema if possible...')
        // Note: Supabase JS doesn't allow direct SELECT from information_schema
        // But we can try to guess common table names or use a different approach.

        // Let's try to see if there are standard Prisma/Auth tables
        const tables = ['users', 'user', 'Account', 'Session', 'VerificationToken', 'next_auth_users', 'next_auth_sessions']
        for (const table of tables) {
            const { count, error: tError } = await supabase
                .from(table)
                .select('*', { count: 'exact', head: true })

            if (!tError) {
                console.log(`Table found: ${table} (${count} rows)`)
            }
        }
    } else {
        console.log(JSON.stringify(data, null, 2))
    }
}

main()
