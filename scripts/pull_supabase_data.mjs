import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkcqngvjrsujwdftjoro.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrY3FuZ3ZqcnN1andkZnRqb3JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODQ3Mjc3MCwiZXhwIjoyMDg0MDQ4NzcwfQ.Flh1ZPdp3fmDfQ54DSmLWqxYA9H5VzhmX7juv0zCdgE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
    console.log('--- LATEST MESSAGES ---')
    const { data: messages, error: mError } = await supabase
        .from('messages')
        .select('role, content, timestamp')
        .order('timestamp', { ascending: false })
        .limit(10)

    if (mError) {
        console.error('Error fetching messages:', mError)
    } else {
        console.log(JSON.stringify(messages, null, 2))
    }

    console.log('\n--- LATEST CHATS ---')
    const { data: chats, error: cError } = await supabase
        .from('chats')
        .select('*')
        .order('id', { ascending: false })
        .limit(5)

    if (cError) {
        console.error('Error fetching chats:', cError)
    } else {
        console.log(JSON.stringify(chats, null, 2))
    }
}

main()
