
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const { RecursiveCharacterTextSplitter } = require('@langchain/textsplitters');

/**
 * NOBLE NEO: TEXTBOOK KNOWLEDGE HARVEST
 * Target: High-Trust Clinical & Patient Education Data
 */

const KNOWLEDGE_DIR = path.join(__dirname, '../public/assets/knowledge_base/textbooks');
const OUTPUT_FILE = path.join(__dirname, '../src/data/vector_index.json');

// Ensure knowledge dir exists
if (!fs.existsSync(KNOWLEDGE_DIR)) {
    console.error(`❌ Knowledge directory not found: ${KNOWLEDGE_DIR}`);
    process.exit(1);
}

async function ingest() {
    console.log(`[NeoIngest] 🚜 Starting Knowledge Harvest...`);

    // 1. Setup Semantic Splitter
    // 600 chars ~= 1 paragraph (User Request)
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 600,
        chunkOverlap: 100,
    });

    const allChunks = [];

    // Files to process specifically as per instruction
    // Note: We scan all PDFs but apply special tags to specific ones
    const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.pdf'));

    for (const file of files) {
        console.log(`[NeoIngest] Processing: ${file}`);
        const filePath = path.join(KNOWLEDGE_DIR, file);

        try {
            const dataBuffer = fs.readFileSync(filePath);
            const pdfData = await pdfParse(dataBuffer);

            // METADATA TAGGING RULES (CRITICAL)
            let trustLevel = 'textbook'; // Default
            let type = 'authority_library';
            let medicalCode = 'D01-D99'; // Default Dental Code

            if (file === 'Gum Disease Guide.pdf') {
                trustLevel = 'patient_education';
                medicalCode = 'K05'; // Gingivitis/Perio
            } else if (file === 'SOP,s.pdf') {
                trustLevel = 'clinical_protocol';
                type = 'clinic_sop';
            } else if (file === 'Tooth Decay.pdf') {
                medicalCode = 'K02'; // Caries
            } else if (file === 'Burket_Oral_Medicine.pdf') {
                medicalCode = 'K12'; // Stomatitis/Oral Medicine
            }

            // Create Chunks
            const chunks = await splitter.createDocuments([pdfData.text], [{
                source: file,
                book_title: file.replace('.pdf', ''),
                type: type,
                trust_level: trustLevel,
                medical_code: medicalCode
            }]);

            // Format for Vector Index
            chunks.forEach((c, i) => {
                allChunks.push({
                    id: `${type}_${file}_${i}`,
                    text: c.pageContent,
                    type: type,
                    metadata: c.metadata
                });
            });

        } catch (e) {
            console.error(`[NeoIngest] ❌ Failed to process ${file}:`, e.message);
        }
    }

    // Write Unified Index
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allChunks, null, 2));
    console.log(`Successfully ingested ${allChunks.length} clinical concepts from Shafer's and Grossman.`);
}

ingest().catch(err => {
    console.error(`[NeoIngest] Critical Failure:`, err);
    process.exit(1);
});
