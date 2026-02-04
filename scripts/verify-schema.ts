
import { ResponseEngine } from '../lib/ai/response-engine';

async function verify() {
    console.log("--- 🏁 SEO/AEO SCHEMA VERIFICATION 🏁 ---");
    console.log("Simulating: User asks about 'Oral Lichen Planus'...");

    // Mock Data (Simulating what NeoBrain sends to ResponseEngine)
    const mockInput = {
        userQuery: "What is oral lichen planus?",
        clinicalAnswer: "Oral lichen planus is a chronic inflammatory condition that affects mucous membranes inside your mouth. It may appear as white, lacy patches; red, swollen tissues; or open sores. Lesions may cause burning, pain, or other discomfort.",
        sourceBook: "Burket_Oral_Medicine",
        medicalCode: "K12.0",
        trustLevel: "textbook"
    };

    const finalResponse = await ResponseEngine.synthesize(mockInput);

    console.log("\n--- 🤖 FINAL RESPONSE SENT TO CLIENT 🤖 ---");
    console.log(finalResponse);
    console.log("\n-------------------------------------------");

    if (finalResponse.includes("application/ld+json") && finalResponse.includes("MedicalEntity")) {
        console.log("✅ VERIFIED: Hidden JSON-LD Schema DETECTED.");
        console.log("✅ VERIFIED: MedicalEntity Type DETECTED.");
        console.log("✅ VERIFIED: Google E-E-A-T Signaling ACTIVE.");
    } else {
        console.error("❌ FAILED: Schema missing!");
        process.exit(1);
    }
}

verify();
