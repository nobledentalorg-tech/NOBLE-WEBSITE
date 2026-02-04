
const { NeoBrain } = require('../src/neo/NeoBrain');

async function verify() {
    console.log("--- 🧪 NOBLE NEO: AUTHORITY VERIFICATION ---");

    const queries = [
        "What is pulpitis?",
        "How to prevent gum disease?",
        "Tell me about antibiotic resistance"
    ];

    for (const query of queries) {
        console.log(`\n\n[Test] Query: "${query}"`);

        try {
            // Simulate hybrid processing
            const response = await NeoBrain.processHybridInput(
                query,
                { medicalHistory: [] },
                async (q, c) => "Clinical synthesis of " + q, // Mock Gemini
                async (q, a) => true // Mock Verifier
            );

            console.log("--- RESPONSE ---");
            console.log(response.node.text.en);

            const hasAnalogy = response.node.text.en.includes("💡 **Simple View**");
            const hasFact = response.node.text.en.includes("**Clinical Fact**");
            const hasCitation = response.node.text.en.includes("> 🏛️ *Source");
            const hasSchema = response.node.text.en.includes("application/ld+json");

            console.log(`\n[Results]`);
            console.log(`- Analogy: ${hasAnalogy ? "✅" : "❌"}`);
            console.log(`- Clinical Fact: ${hasFact ? "✅" : "❌"}`);
            console.log(`- Citation: ${hasCitation ? "✅" : "❌"}`);
            console.log(`- JSON-LD Schema: ${hasSchema ? "✅" : "❌"}`);
            console.log(`- Urgency: ${response.urgency}`);
        } catch (e) {
            console.error(`[Error] Test failed for "${query}":`, e.message);
        }
    }
}

// Set env for initialization
process.env.NEXT_PUBLIC_GEMINI_API_KEY = "mock_key";

verify().catch(console.error);
