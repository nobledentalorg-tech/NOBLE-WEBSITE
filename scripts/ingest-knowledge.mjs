
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

/**
 * NOBLE NEO: INTELLIGENT INGESTOR v2 (ESM Edition)
 * High-authority extraction for Dental Textbooks.
 * Uses LangChain's Recursive Splitter for semantic chunking.
 * Uses pdf-parse @1.1.1 for stable Node extraction.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KNOWLEDGE_DIR = path.join(__dirname, '../public/assets/knowledge_base');
const TEXTBOOK_DIR = path.join(KNOWLEDGE_DIR, 'textbooks');
const OUTPUT_FILE = path.join(__dirname, '../src/data/vector_index.json');

async function ingest() {
    console.log(`[NeoIngest] Initializing Intelligent Ingestor (ESM + pdf-parse@1.1.1)...`);

    // 1. Setup Semantic Splitter (800 token target, 100 overlap)
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 800,
        chunkOverlap: 100,
    });

    const allChunks = [];

    // --- SUB-PROCESS: CLINIC SOPS ---
    const clinicFiles = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.pdf'));
    for (const file of clinicFiles) {
        const filePath = path.join(KNOWLEDGE_DIR, file);
        if (fs.lstatSync(filePath).isDirectory()) continue;

        console.log(`[NeoIngest] Processing Clinic SOP: ${file}`);
        try {
            const dataBuffer = fs.readFileSync(filePath);
            const pdfData = await pdfParse(dataBuffer);

            const chunks = await splitter.createDocuments([pdfData.text], [{
                source: file,
                type: 'clinic_sop',
                trust_level: 'high',
                medical_code: 'D01-D99'
            }]);

            chunks.forEach((c, i) => {
                allChunks.push({
                    id: `sop_${file}_${i}`,
                    text: c.pageContent,
                    type: 'clinic_sop',
                    metadata: c.metadata
                });
            });
        } catch (e) {
            console.error(`[NeoIngest] Failed ${file}:`, e.message);
        }
    }

    // --- SUB-PROCESS: TEXTBOOKS (The "Authority" Hijack) ---
    if (fs.existsSync(TEXTBOOK_DIR)) {
        const textbookFiles = fs.readdirSync(TEXTBOOK_DIR).filter(f => f.endsWith('.pdf'));
        for (const file of textbookFiles) {
            console.log(`[NeoIngest] 🎓 Extracting Textbook: ${file}`);
            try {
                const dataBuffer = fs.readFileSync(path.join(TEXTBOOK_DIR, file));
                const pdfData = await pdfParse(dataBuffer);

                let medCode = 'K02.1';
                if (file.toLowerCase().includes('gum') || file.toLowerCase().includes('periodont')) medCode = 'K05.3';
                if (file.toLowerCase().includes('pulp') || file.toLowerCase().includes('root')) medCode = 'K04.0';

                const chunks = await splitter.createDocuments([pdfData.text], [{
                    book_title: file.replace('.pdf', ''),
                    medical_code: medCode,
                    type: 'authority_library',
                    trust_level: 'textbook'
                }]);

                chunks.forEach((c, i) => {
                    allChunks.push({
                        id: `bk_${file}_${i}`,
                        text: c.pageContent,
                        type: 'authority_library',
                        metadata: c.metadata
                    });
                });
            } catch (e) {
                console.error(`[NeoIngest] Failed ${file}:`, e.message);
            }
        }
    }

    // 3. Write Unified Index
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allChunks, null, 2));
    console.log(`[NeoIngest] ✅ Successfully indexed ${allChunks.length} chunks.`);
}

ingest().catch(err => {
    console.error(`[NeoIngest] Critical Failure:`, err);
    process.exit(1);
});
