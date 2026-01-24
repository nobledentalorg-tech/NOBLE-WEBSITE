import { LocalizedText } from '../types/neoSchema';

// Data Source: Wheeler's Dental Anatomy, Physiology, and Occlusion (Major Reference)

export interface ToothMorphology {
    id: string; // FDI Number
    name: LocalizedText;
    type: 'Incisor' | 'Canine' | 'Premolar' | 'Molar';
    eruption: string; // When it comes in
    shedding?: string; // When it falls out (for primary)
    roots: number | string;
    canals: string; // e.g. "1 (98%)" or "3-4 (MB2 common)"
    clinicalSignificance: LocalizedText; // Why this tooth matters
}

// --- PERMANENT DENTITION (Adult Teeth) ---
export const PERMANENT_TEETH_DB: Record<string, ToothMorphology> = {
    // 1. CENTRAL INCISOR (Front Tooth) - 11, 21
    '11': {
        id: '11',
        name: {
            en: "Upper Central Incisor",
            ta: "மேல் முன் பல்",
            te: "పై ముందు పన్ను",
            hi: "सामने का ऊपर वाला दांत",
            kn: "ಮೇಲಿನ ಮುಂಭಾಗದ ಹಲ್ಲು",
            ml: "മുകളിലെ മുൻ പല്ല്"
        },
        type: 'Incisor',
        eruption: "7-8 years",
        roots: 1,
        canals: "1 (100%)",
        clinicalSignificance: {
            en: "Key for aesthetics (smile) and phonetics (speech 'F', 'V' sounds).",
            ta: "அழகு மற்றும் பேச்சுக்கு முக்கியமானது.",
            te: "నవ్వు మరియు స్పష్టమైన మాటలకు ముఖ్యం.",
            hi: "सुंदरता और बोलने के लिए महत्वपूर्ण।",
            kn: "ನಗು ಮತ್ತು ಮಾತಿಗೆ ಮುಖ್ಯ.",
            ml: "ഭംഗിക്കും സംസാരിക്കാനും പ്രധാനം."
        }
    },

    // 2. CANINE (Eye Tooth) - 13, 23
    '13': {
        id: '13',
        name: {
            en: "Upper Canine (Eye Tooth)",
            ta: "மேல் கோரை பல்",
            te: "రదనిక (కోర పన్ను)",
            hi: "ऊपर का नुकीला दांत",
            kn: "ಮೇಲಿನ ಕೋರೆ ಹಲ್ಲು",
            ml: "മുകളിലെ കോമ്പല്ല്"
        },
        type: 'Canine',
        eruption: "11-12 years",
        roots: 1,
        canals: "1 (100%)",
        clinicalSignificance: {
            en: "Longest root in the mouth. Cornerstone of the dental arch.",
            ta: "வாயின் மிக நீண்ட வேர் கொண்ட பல். முக அமைப்பிற்கு முக்கியம்.",
            te: "నోటిలో పొడవైన వేరు ఉన్న పన్ను.",
            hi: "सबसे लंबी जड़ वाला दांत।",
            kn: "ಬಾಯಿಯ ಅತ್ಯಂತ ಉದ್ದವಾದ ಬೇರು.",
            ml: "ഏറ്റവും നീളമുള്ള വേരുള്ള പല്ല്."
        }
    },

    // 3. FIRST PREMOLAR - 14, 24
    '14': {
        id: '14',
        name: {
            en: "Upper First Premolar",
            ta: "முன்கடவாய் பல்",
            te: "నములు దంతం",
            hi: "छोटी दाढ़",
            kn: "ಮುನ್ದವಡೆ ಹಲ್ಲು",
            ml: "ചെറിയ അണപ്പല്ല്"
        },
        type: 'Premolar',
        eruption: "10-11 years",
        roots: 2, // Bifurcated
        canals: "2 (High chance)",
        clinicalSignificance: {
            en: "Often extracted for orthodontic braces treatment to create space.",
            ta: "கம்பி சிகிச்சைக்காக (Braces) பெரும்பாலும் அகற்றப்படும் பல்.",
            te: "క్లిప్పుల చికిత్స కోసం తరచుగా తీసివేయబడే పన్ను.",
            hi: "ब्रेसेस के लिए अक्सर निकाला जाता है।",
            kn: "ಬ್ರೇಸ್ ಚಿಕಿತ್ಸೆಗಾಗಿ ತೆಗೆಯಲಾಗುವ ಹಲ್ಲು.",
            ml: "പല്ലിൽ കമ്പി ഇടാൻ വേണ്ടി നീക്കം ചെയ്യുന്ന പല്ല്."
        }
    },

    // 4. FIRST MOLAR (6-Year Molar) - 16, 26
    '16': {
        id: '16',
        name: {
            en: "Upper First Molar",
            ta: "மேல் பெரிய கடவாய் பல்",
            te: "పెద్ద దవడ పన్ను",
            hi: "बड़ी दाढ़",
            kn: "ದೊಡ್ಡ ದವಡೆ ಹಲ್ಲು",
            ml: "വലിയ അണപ്പല്ല്"
        },
        type: 'Molar',
        eruption: "6-7 years",
        roots: 3,
        canals: "3-4 (MB2 canal common)",
        clinicalSignificance: {
            en: "Primary chewing tooth. Note: It often has a hidden 4th canal (MB2) which makes Root Canals complex and costlier.",
            ta: "உணவை அரைக்க உதவும் முக்கிய பல். வேர் சிகிச்சை செய்வது கடினம் (MB2 Canal).",
            te: "ఆహారం నమలడానికి ప్రధాన పన్ను.",
            hi: "चबाने के लिए मुख्य दांत।",
            kn: "ಆಹಾರ ಜಗಿಯಲು ಮುಖ್ಯ.",
            ml: "ഭക്ഷണം ചവയ്ക്കാൻ പ്രധാനം."
        }
    },

    // 5. WISDOM TOOTH - 18, 28, 38, 48
    '18': {
        id: '18',
        name: {
            en: "Wisdom Tooth (Third Molar)",
            ta: "ஞானப் பல்",
            te: "జ్ఞాన దంతం",
            hi: "अकल दाढ़",
            kn: "ಬುದ್ಧಿ ಹಲ್ಲು",
            ml: "വിസ്ഡം ടൂത്ത് (ബുദ്ധിപ്പല്ല്)"
        },
        type: 'Molar',
        eruption: "17-25 years",
        roots: "Variable (Fused)",
        canals: "Variable",
        clinicalSignificance: {
            en: "Often impacted (stuck) due to lack of space. If it hurts, extraction is usually better than filling.",
            ta: "இடம் இல்லாததால் பெரும்பாலும் உள்ளேயே சிக்கிக்கொள்ளும். வலி இருந்தால் அகற்றுவது சிறந்தது.",
            te: "స్థలం లేక ఇరుక్కుపోతుంది. నొప్పి వస్తుంది.",
            hi: "अक्सर जगह न होने के कारण फंस जाता है।",
            kn: "ಜಾಗವಿಲ್ಲದೆ ಸಿಕ್ಕಿಹಾಕಿಕೊಳ್ಳುತ್ತದೆ.",
            ml: "സ്ഥലമില്ലാത്തതിനാൽ എല്ലിനുള്ളിൽ കുടുങ്ങിക്കിടക്കുന്നു."
        }
    }
};

// --- PRIMARY DENTITION (Milk Teeth) ---
// Parents care about SHEDDING time (when they fall out)
export const PRIMARY_TEETH_DB: Record<string, ToothMorphology> = {
    'A': {
        id: '51', // FDI for primary upper central
        name: {
            en: "Milk Central Incisor",
            ta: "பால் பல் (முன்)",
            te: "పాల పన్ను (ముందు)",
            hi: "दूध का सामने वाला दांत",
            kn: "ಹಾಲು ಹಲ್ಲು (ಮುಂಭಾಗ)",
            ml: "പാൽപ്പല്ല് (മുൻഭാഗം)"
        },
        type: 'Incisor',
        eruption: "6-10 months",
        shedding: "6-7 years",
        roots: 1,
        canals: "1",
        clinicalSignificance: {
            en: "First to fall out.",
            ta: "முதலில் விழும் பல்.",
            te: "మొదట ఊడిపోయే పన్ను.",
            hi: "सबसे पहले गिरने वाला दांत।",
            kn: "ಮೊದಲು ಬೀಳುವ ಹಲ್ಲು.",
            ml: "ആദ്യം കൊഴിഞ്ഞു പോകുന്ന പല്ല്."
        }
    },
    'E': {
        id: '55', // FDI for primary upper 2nd molar
        name: {
            en: "Milk Second Molar",
            ta: "பால் கடவாய் பல்",
            te: "పాల దవడ పన్ను",
            hi: "दूध की दाढ़",
            kn: "ಹಾಲಿನ ದವಡೆ ಹಲ್ಲು",
            ml: "പാൽ അണപ്പല്ല്"
        },
        type: 'Molar',
        eruption: "25-33 months",
        shedding: "10-12 years", // Important! Stays late
        roots: 3,
        canals: "3",
        clinicalSignificance: {
            en: "⚠️ CRITICAL SPACE MAINTAINER. Do not extract early (before age 10-11) or adult teeth will grow crooked.",
            ta: "நிரந்தர பல் வரும் வரை இதை காப்பாற்ற வேண்டும். முன்கூட்டி எடுக்க வேண்டாம்!",
            te: "చిన్నపిల్లలకు ఇది చాలా ముఖ్యం. త్వరగా తీయించవద్దు.",
            hi: "इसे जल्दी न निकालें, यह आने वाले पक्के दांतों के लिए जगह रखता है।",
            kn: "ಇದನ್ನು ಬೇಗ ತೆಗೆಯಬೇಡಿ.",
            ml: "പാൽപ്പല്ലുകൾ നേരത്തെ എടുത്തു കളയരുത്, ഇത് പല്ലുകളുടെ നിര തെറ്റാൻ കാരണമാകും."
        }
    }
};

export class AnatomyHelper {
    /**
     * Checks if tooth eruption is delayed.
     * Logic: If current age > upper limit of eruption range + 1.5 years => Delayed
     */
    static checkEruptionStatus(ageYears: number, toothId: string): string {
        const tooth = PERMANENT_TEETH_DB[toothId];
        if (!tooth) return "Unknown Tooth";

        // Extract upper range from string "6-7 years" -> 7
        const range = tooth.eruption.match(/(\d+)-(\d+)/);
        if (range) {
            const upperLimit = parseInt(range[2]);
            if (ageYears > upperLimit + 1.5) {
                return `⚠️ Delayed Eruption. Should have come by age ${upperLimit}. Consult Dr. Dhivakaran.`;
            }
            if (ageYears < parseInt(range[1]) - 1) {
                return `Too Early (Expected after ${range[1]}y)`;
            }
        }
        return "Normal Eruption Range";
    }

    /**
     * Returns clinical insight and specific warnings
     */
    static getClinicalInsight(toothId: string, lang: string = 'en'): string {
        const tooth = PERMANENT_TEETH_DB[toothId] || PRIMARY_TEETH_DB[toothId];
        if (!tooth) return "";

        // Combine basic info with the crucial warning
        const base = tooth.clinicalSignificance[lang as keyof LocalizedText] || tooth.clinicalSignificance.en;

        // Add specific emphasis based on requirements
        if (toothId === '16' && lang === 'en') {
            return `💡 **Clinical Note:** ${base} (This is why posterior RCT costs slightly more).`;
        }

        return `💡 **Clinical Note:** ${base}`;
    }

    /**
     * Get Tooth names in preferred language
     */
    static getToothName(id: string, lang: string = 'en'): string {
        const t = PERMANENT_TEETH_DB[id] || PRIMARY_TEETH_DB[id];
        if (!t) return id;

        return t.name[lang as keyof LocalizedText] || t.name.en;
    }
}
