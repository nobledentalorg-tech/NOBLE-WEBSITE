
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
// Fixed: In v2+, it might be under .default or exported as a specific function.
const parsePDF = typeof pdfParse === 'function' ? pdfParse : (pdfParse.default || pdfParse.pdf);

/**
 * NOBLE NEO: INTELLIGENT INGESTOR v2 (Zero-Dep Edition)
 * High-authority extraction for Dental Textbooks.
 * Uses a manual Recursive Character Splitter to avoid LangChain ESM issues.
 */

const KNOWLEDGE_DIR = path.join(__dirname, '../public/assets/knowledge_base');
const TEXTBOOK_DIR = path.join(KNOWLEDGE_DIR, 'textbooks');
const OUTPUT_FILE = path.join(__dirname, '../src/data/vector_index.json');

/**
 * Manual Recursive Character Splitter
 * Mimics LangChain behavior: Paragraphs -> Sentences -> Spaces
 */
function recursiveSplit(text, chunkSize, chunkOverlap) {
    const chunks = [];
    let start = 0;

    while (start < text.length) {
        let end = start + chunkSize;

        // If not at the end, try to find a good breaking point
        if (end < text.length) {
            // Try breaking at paragraph/sentence
            const lastNewline = text.lastIndexOf('\n', end);
            const lastPeriod = text.lastIndexOf('. ', end);
            const lastSpace = text.lastIndexOf(' ', end);

            if (lastNewline > start + (chunkSize * 0.5)) end = lastNewline;
            else if (lastPeriod > start + (chunkSize * 0.5)) end = lastPeriod + 1;
            else if (lastSpace > start + (chunkSize * 0.5)) end = lastSpace;
        }

        chunks.push(text.substring(start, end).trim());
        start = end - chunkOverlap;
        if (start < 0) start = 0;

        // Safety: ensure progress
        if (end >= text.length) break;
        if (start >= end) start = end;
    }

    return chunks;
}

async function ingest() {
    console.log(`[NeoIngest] Initializing Intelligent Ingestor (Manual Splitter)...`);

    const allChunks = [];

    // --- SUB-PROCESS: CLINIC SOPS ---
    const clinicFiles = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.pdf'));
    for (const file of clinicFiles) {
        const filePath = path.join(KNOWLEDGE_DIR, file);
        if (fs.lstatSync(filePath).isDirectory()) continue;

        console.log(`[NeoIngest] Processing Clinic SOP: ${file}`);
        try {
            const dataBuffer = fs.readFileSync(filePath);
            const pdfData = await parsePDF(dataBuffer);

            const chunks = recursiveSplit(pdfData.text, 800, 100);

            chunks.forEach((c, i) => {
                allChunks.push({
                    id: `sop_${file}_${i}`,
                    text: c,
                    type: 'clinic_sop',
                    metadata: {
                        source: file,
                        trust_level: 'high',
                        medical_code: 'D01-D99'
                    }
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
                const pdfData = await parsePDF(dataBuffer);

                let medCode = 'K02.1';
                if (file.toLowerCase().includes('gum') || file.toLowerCase().includes('periodont')) medCode = 'K05.3';
                if (file.toLowerCase().includes('pulp') || file.toLowerCase().includes('root')) medCode = 'K04.0';

                const chunks = recursiveSplit(pdfData.text, 800, 100);

                chunks.forEach((c, i) => {
                    allChunks.push({
                        id: `bk_${file}_${i}`,
                        text: c,
                        type: 'authority_library',
                        metadata: {
                            book_title: file.replace('.pdf', ''),
                            medical_code: medCode,
                            trust_level: 'textbook'
                        }
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
