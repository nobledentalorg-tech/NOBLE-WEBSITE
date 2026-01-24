
import { getNeoResponse } from '../app/actions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testNeoFlow() {
    console.log("🚀 Starting Neo AI Full Flow Test...");

    const mockHistory = [
        { role: 'user', text: "Hello" },
        { role: 'model', text: "Hello! checking." } // Typo fixed: 'mode' -> 'model'
    ]; // Cast to SimpleMessage[] if needed, but TS inference should handle it in this script context if interfaces match. 
       // Since we are running this as a standalone script, we might need to cast or just rely on structure.
       // The 'SimpleMessage' interface is not exported from actions.ts in the snippet I saw earlier, 
       // but the function signature expects { role: 'user' | 'model', text: string }[]

    try {
        // 1. Simulating User Input that triggers Gemini Fallback
        // "Explain why my gums bleed" is likely not in the hardcoded graph-like shortcuts for costs/availability, 
        // effectively triggering the fallback.
        const input = "Why do my gums bleed when I brush?";
        console.log(`\n🗣️  User Query: "${input}"`);

        // Mock patient context
        const context = {
            medicalHistory: [],
            isPregnant: false,
            age: 30
        };

        const result = await getNeoResponse(
            input,
            'root',
            mockHistory as any, // bypassing strict type check for the test script
            context
        );

        console.log("\n🤖 Neo Response Node:", result.node);

        if (result.node.id === 'hybrid_gemini') {
            console.log("✅ Success: Request routed to Gemini Fallback.");
        } else {
            console.log("⚠️  Note: Request was handled by Clinical Engine (Not Gemini). ID:", result.node.id);
        }

        // 2. Checking Database Memory
        console.log("\n💾 Checking Database for saved memory...");
        // waiting a moment for async save (though the action awaits it, good to be sure)
        
        const memories = await prisma.neoMemory.findMany({
            orderBy: { createdAt: 'desc' },
            take: 1
        });

        if (memories.length > 0) {
            const latest = memories[0];
            console.log("✅ Database Record Found:");
            console.log(`   - ID: ${latest.id}`);
            console.log(`   - Query: ${latest.query}`);
            console.log(`   - Answer Preview: ${latest.answer.substring(0, 50)}...`);
            console.log(`   - Verified: ${latest.isVerified}`);
            
            if (latest.query.includes("bleed")) { 
                 console.log("✅ Data Integrity Verified: Query matches input.");
            } else {
                 console.log("⚠️  Warning: Latest memory does not match current test query.");
            }
        } else {
            console.log("❌ Error: No memory record found in database.");
        }

    } catch (error) {
        console.error("❌ Test Failed with Error:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testNeoFlow();
