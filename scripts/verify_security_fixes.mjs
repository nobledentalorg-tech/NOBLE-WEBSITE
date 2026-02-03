// Native fetch used

const BASE_URL = 'http://localhost:3000'; // Assuming local dev server is running

async function testReaperUnauthorized() {
    console.log("Testing /api/reaper without token...");
    const res = await fetch(`${BASE_URL}/api/reaper`);
    if (res.status === 401) {
        console.log("✅ /api/reaper correctly denied unauthorized access.");
    } else {
        console.error(`❌ /api/reaper failed to deny unauthorized access. Status: ${res.status}`);
    }
}

async function testAdminChatsUnauthorized() {
    console.log("Testing /api/admin/chats without session...");
    const res = await fetch(`${BASE_URL}/api/admin/chats`);
    if (res.status === 401) {
        console.log("✅ /api/admin/chats correctly denied access without session.");
    } else {
        console.error(`❌ /api/admin/chats failed to deny access without session. Status: ${res.status}`);
    }
}

async function main() {
    console.log("Starting Security Verification...");
    try {
        await testReaperUnauthorized();
        await testAdminChatsUnauthorized();
        // Note: Testing chat ownership and admin email list requires full session mocking which is complex for a quick script.
        // Manual verification is recommended for those parts.
    } catch (e) {
        console.error("Verification script failed to run. Is the server running?", e.message);
    }
}

main();
