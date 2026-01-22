
import { NeoEngine } from '../src/neo/NeoEngine';

console.log("🏥 Neo v2.1 Final Verification\n=================================");

function simulate(input: string, stateId: string = 'root') {
    const res = NeoEngine.processInput(input, stateId);
    console.log(`\nINPUT: "${input}" (State: ${stateId})`);
    console.log(` -> NODE: ${res.node.id}`);
    console.log(` -> TEXT: ${res.node.text.en.substring(0, 50)}...`);
    if (res.node.options) {
        console.log("    OPTIONS: " + res.node.options.map(o => `[${o.label.en}]`).join(", "));
    }
    return res.node.id;
}

async function run() {
    // 1. Periodontics Flow
    console.log("\n🔹 Test 1: Periodontics Flow");
    let state = simulate("I have bleeding gums"); // -> gums
    state = simulate("I have loose teeth", state); // -> assess_perio (Question)
    state = simulate("Yes, my teeth are moving", state); // -> perio_advanced

    if (state === 'perio_advanced') console.log("✅ PASSED: Perio Advanced Flow");
    else console.log("❌ FAILED: Perio Flow");

    // 2. Implant Flow
    console.log("\n🔹 Test 2: Implant Flow");
    state = simulate("I have a missing tooth"); // -> missing_tooth
    state = simulate("I am missing all my teeth", state); // -> missing_all
    state = simulate("Yes, I hate my dentures", state); // -> assess_all_on_4

    if (state === 'assess_all_on_4') console.log("✅ PASSED: Implant All-on-4 Flow");
    else console.log("❌ FAILED: Implant Flow");

    // 3. User Bug Re-Check
    console.log("\n🔹 Test 3: The 'Continuous Pain' Bug");
    state = simulate("pain is continious and severe", 'pain_type');
    if (state === 'pain_night') console.log("✅ PASSED: Fuzzy Match works");
    else console.log("❌ FAILED: Fuzzy Match");
}

run();
