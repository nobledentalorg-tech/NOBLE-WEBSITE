
const fs = require('fs');
const path = require('path');

// ==============================================================================
// 🚜 KNOWLEDGE HARVESTER (Pure JS Engine)
// ==============================================================================
// Usage: node scripts/ingest-knowledge.js
// Purpose: Scans PDF/TXT files -> Chunks -> creates vector_index.json

const KNOWLEDGE_DIR = path.join(process.cwd(), 'public/assets/knowledge_base');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/vector_index.json');

// --- 1. CHUNKING LOGIC (Manual Implementation) ---
const CHUNK_SIZE = 4000; // ~1000 tokens
const OVERLAP = 600;     // ~150 tokens

function chunkText(text, metadata) {
    const chunks = [];
    let start = 0;

    while (start < text.length) {
        const end = Math.min(start + CHUNK_SIZE, text.length);
        const chunkText = text.slice(start, end);

        chunks.push({
            id: `${metadata.source_book}_${chunks.length}`,
            text: chunkText,
            type: 'rag_doc',
            metadata: {
                ...metadata,
                clinical_relevance: deriveRelevance(chunkText)
            }
        });

        start += (CHUNK_SIZE - OVERLAP);
    }
    return chunks;
}

function deriveRelevance(text) {
    const clinicalKeywords = ['treatment', 'diagnosis', 'patient', 'pain', 'surgery', 'drug', 'pulp'];
    const hits = clinicalKeywords.filter(k => text.toLowerCase().includes(k)).length;
    if (hits > 2) return "High";
    if (hits > 0) return "Medium";
    return "Foundation";
}

// --- 2. MAIN CRAWLER ---
async function main() {
    console.log(`[NeoIngest] Scanning ${KNOWLEDGE_DIR}...`);

    if (!fs.existsSync(KNOWLEDGE_DIR)) {
        console.error(`[NeoIngest] Error: Directory not found.`);
        process.exit(1);
    }

    const files = fs.readdirSync(KNOWLEDGE_DIR);
    console.log(`[NeoIngest] Found ${files.length} files in directory.`);

    const allChunks = [];

    for (const file of files) {
        const filePath = path.join(KNOWLEDGE_DIR, file);
        const fileNameLower = file.toLowerCase();

        // 1. PDF HANDLER
        if (fileNameLower.endsWith('.pdf')) {
            console.log(`[NeoIngest] Processing PDF: ${file}`);
            try {
                const dataBuffer = fs.readFileSync(filePath);

                // Dynamic import for pdf-parse
                // If it fails, we log a helpful warning but continue
                let data;
                try {
                    const pdf = require('pdf-parse');
                    data = await pdf(dataBuffer);

                    const cleanText = data.text.replace(/\n\s*\n/g, '\n').trim();
                    console.log(`[NeoIngest] Extracted ${cleanText.length} chars from ${file}`);

                    const chunks = chunkText(cleanText, {
                        subject: 'Pathology', // TODO: Dynamic subject based on folder/name?
                        source_book: file,
                        clinical_relevance: 'High'
                    });
                    allChunks.push(...chunks);

                } catch (innerE) {
                    console.error(`[NeoIngest] PDF Parse Error: ${innerE.message}. (Did you npm install pdf-parse?)`);
                }

            } catch (e) {
                console.error(`[NeoIngest] File Read Error ${file}:`, e.message);
            }
        }

        // 2. TEXT HANDLER (Fallback/Test)
        else if (fileNameLower.endsWith('.txt')) {
            console.log(`[NeoIngest] Processing TEXT: ${file}`);
            try {
                const text = fs.readFileSync(filePath, 'utf-8');
                const chunks = chunkText(text, {
                    subject: 'General',
                    source_book: file,
                    clinical_relevance: 'Medium'
                });
                console.log(`[NeoIngest] Extracted ${text.length} chars from ${file}`);
                allChunks.push(...chunks);
            } catch (e) {
                console.error(`[NeoIngest] Failed to read TXT ${file}:`, e.message);
            }
        }
    }

    // Write Index
    if (allChunks.length > 0) {
        // Ensure directory exists
        const dir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allChunks, null, 2));
        console.log(`[NeoIngest] ✅ Successfully indexed ${allChunks.length} chunks to ${OUTPUT_FILE}`);
    } else {
        console.log(`[NeoIngest] ⚠️ No content extracted. Check if PDFs exist in public/assets/knowledge_base.`);
    }
}

main().catch(console.error);
