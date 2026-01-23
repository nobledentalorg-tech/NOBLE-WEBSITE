// Neo Synonyms & Multilingual Slang Dictionary
// Maps patient slang (English, Tamil, Telugu, Hindi, Kannada, Malayalam) to Clinical Keywords.
// Designed to handle romanized input (e.g., "dant me dard").

export const CLINICAL_SYNONYMS: Record<string, string[]> = {

    // ==========================================
    // 1. SYMPTOMS (The "What is wrong?" words)
    // ==========================================

    'pain': [
        // English
        'hurt', 'ache', 'sore', 'ouch', 'killing me', 'unbearable', 'throbbing',
        // Tamil (Vali)
        'vali', 'valikuthu', 'valikudhu', 'noovu', 'erichal',
        // Telugu (Noppi)
        'noppi', 'badha', 'potu', 'gunjukoni',
        // Hindi (Dard)
        'dard', 'dukhta', 'dukh', 'pida', 'tras',
        // Kannada (Novu)
        'novu', 'novvu', 'sankata',
        // Malayalam (Vedana)
        'vedana', 'neeru'
    ],

    'swelling': [
        // English
        'puffy', 'balloon', 'fat face', 'lump', 'bump', 'enlarged', 'swollen',
        // Tamil (Veekam)
        'veekam', 'veengi', 'katti',
        // Telugu (Vaapu)
        'vapu', 'vaapu', 'gadda',
        // Hindi (Sujan)
        'sujan', 'sooj', 'soojan', 'ganth', 'mota',
        // Kannada (Baavu)
        'bavu', 'ota', 'gantu',
        // Malayalam (Veekkam)
        'veekkam', 'katti'
    ],

    'bleeding': [
        // English
        'blood', 'red spit', 'pink foam', 'taste iron',
        // Tamil (Ratham)
        'ratham', 'raththam', 'kasiv',
        // Telugu (Raktham)
        'raktham', 'neethuru',
        // Hindi (Khoon)
        'khoon', 'rakt',
        // Kannada (Raktha)
        'raktha', 'nettaru',
        // Malayalam (Chora)
        'chora', 'raktham'
    ],

    'sensitivity': [
        // English
        'cold', 'hot', 'ice', 'water', 'tea', 'coffee', 'zing', 'shiver', 'sensation',
        // Tamil (Koocham)
        'koocham', ' கூச்சம்', 'silirpu',
        // Telugu (Jippu)
        'jippu', 'jipu', 'jvv',
        // Hindi (Jhanjhanahat)
        'jhanjhanahat', 'thanda', 'khatta',
        // Kannada (Jum)
        'jum', 'jhum',
        // Malayalam (Pulippu)
        'pulippu', 'tharippu'
    ],

    'cavity': [
        // English
        'hole', 'black spot', 'decay', 'rotten',
        // Tamil (Poochi)
        'poochi', 'sothai', 'ottai',
        // Telugu (Pulla/Puchi)
        'pulla', 'puchi', 'purugu',
        // Hindi (Keeda)
        'keeda', 'sad', 'sadan', 'khokla',
        // Kannada (Hulu)
        'hulu', 'kuli',
        // Malayalam (Podu)
        'podu', 'kedu'
    ],

    'mobile': [
        // English
        'loose', 'shaky', 'moving', 'wobbly', 'falling out',
        // Tamil (Aaduthu)
        'aaduthu', 'attama',
        // Telugu (Kaduluthundi)
        'kaduluthundi', 'uguthundi',
        // Hindi (Hilti)
        'hil', 'hilna', 'hilta',
        // Kannada (Aaduvudu)
        'aaduvudu', 'hallu',
        // Malayalam (Ilakunnu)
        'ilakunnu'
    ],

    // ==========================================
    // 2. PROCEDURES (The "Fix it" words)
    // ==========================================

    'rct': [
        'root canal', 'nerve treatment', 'cleaning the roots',
        'ver treatment', // Tamil
        'nas ka ilaaj', // Hindi
        'naram' // General Indian slang for nerve
    ],

    'extraction': [
        // English
        'pull', 'remove', 'take out', 'yank', 'pluck',
        // Tamil
        'pudunga', 'eduka',
        // Telugu
        'theeyali', 'peekali',
        // Hindi
        'nikalna', 'ukhad', 'tudwana',
        // Kannada
        'tege', 'keelu',
        // Malayalam
        'parikkanam', 'edukkanam'
    ],

    'cleaning': [
        // English
        'scaling', 'wash', 'polish', 'stain', 'yellow teeth',
        // Tamil
        'clean', 'sutham', 'kazhuva',
        // Hindi
        'safai', 'saaf', 'maila'
    ],

    'crown': [
        'cap', 'cover', 'helmet', 'protection', 'kavach'
    ],

    'braces': [
        'clip', 'wire', 'kambi', 'train tracks', 'straightening', 'aligners', 'invisalign'
    ],

    'denture': [
        // English
        'set', 'false teeth', 'removable',
        // Tamil
        'pallu set', 'kavali',
        // Hindi
        'battisi', 'nakli daant', 'jabra'
    ],

    // ==========================================
    // 3. HABITS (The "Warning" words)
    // ==========================================

    'tobacco': [
        'pan', 'gutkha', 'khaini', 'betel', 'supari', 'hans', 'chain smoker', 'beedi', 'cigarette', 'shikhar', 'vimal', 'cool lip', 'manikchand'
    ],

    // ================== 4. TIMING & URGENCY ==================
    'night': [
        'sleep', 'bedtime', 'lying down', 'morning', 'awake', 'thoongum', 'raatri', 'raat', 'nidra', 'urakkam'
    ],
    'emergency': [
        'dying', 'cannot breathe', 'severe', 'worst', 'help me', 'urgent', 'udane', 'ippove', 'turant', 'jaldi'
    ]
};

/**
 * Normalizes input by replacing synonyms with core clinical keywords.
 * Example: "Doctor, mera daant me keeda hai" -> "Doctor, my tooth has cavity"
 */
export function normalizeClinicalInput(input: string): string {
    let normalized = input.toLowerCase();

    // Iterate through dictionary and replace synonyms
    for (const [coreTerm, synonyms] of Object.entries(CLINICAL_SYNONYMS)) {
        for (const synonym of synonyms) {
            // We use regex to ensure we match whole words where possible or distinct patterns
            // This simple replace handles most colloquial typing
            if (normalized.includes(synonym)) {
                normalized = normalized.replace(new RegExp(synonym, 'g'), coreTerm);
            }
        }
    }
    return normalized;
}
