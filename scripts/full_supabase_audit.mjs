import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!supabaseUrl || !supabaseKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
    process.exit(1)
}
const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
    // Discovery by trying common table names across schemas if possible
    const commonTables = [
        'public.NeoMemory', 'public.neo_memory',
        'public.chats', 'public.messages',
        'public.users', 'public.accounts', 'public.sessions',
        'next_auth.users', 'next_auth.accounts', 'next_auth.sessions'
    ]

    for (const tablePath of commonTables) {
        const [schema, table] = tablePath.split('.')
        try {
            const { count, error } = await supabase
                .from(table)
                .select('*', { count: 'exact', head: true })

            if (!error) {
                console.log(`[FOUND] Table: ${tablePath} - Rows: ${count}`)
            } else {
                // Try without schema prefix if it failed
                const { count: count2, error: error2 } = await supabase
                    .from(table)
                    .select('*', { count: 'exact', head: true })

                if (!error2 && count2 !== null) {
                    console.log(`[FOUND] Table: ${table} (schema unknown) - Rows: ${count2}`)
                }
            }
        } catch (e) {
            // Ignore
        }
    }
}

main()
