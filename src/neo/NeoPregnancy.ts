import { LocalizedText } from '../types/neoSchema';

// Neo Pregnancy & Gynecology Module
// Focus: Trimester Safety, FDA Drug Categories, Supine Hypotension, Lactation.

export interface TrimesterProtocol {
    id: string;
    trimester: 'First' | 'Second' | 'Third';
    weeks: string;
    safetyLevel: 'Caution' | 'Safe' | 'High Risk';
    recommendations: LocalizedText;
    contraindications: string[];
    patientAdvice: LocalizedText;
}

export const PREGNANCY_PROTOCOLS: Record<string, TrimesterProtocol> = {

    // --- FIRST TRIMESTER (Formation) ---
    'first_trimester': {
        id: 'first_trimester',
        trimester: 'First',
        weeks: "1 - 13 weeks",
        safetyLevel: 'Caution',
        recommendations: {
            en: "Avoid elective treatment. Organogenesis (baby organs forming) happens now. Emergency only.",
            ta: "முதல் 3 மாதங்கள் கவனம் தேவை. அவசர சிகிச்சை மட்டும்.",
            te: "మొదటి 3 నెలలు జాగ్రత్త. అత్యవసర చికిత్స మాత్రమే.",
            hi: "पहले 3 महीने सावधानी बरतें। केवल एमरजेंसी इलाज।",
            kn: "ಮೊದಲ 3 ತಿಂಗಳು ಎಚ್ಚರ. ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮಾತ್ರ.",
            ml: "ആദ്യ 3 മാസം ശ്രദ്ധിക്കുക. അത്യാവശ്യ ചികിത്സ മാത്രം."
        },
        contraindications: ["Teratogenic drugs", "Routine X-Rays"],
        patientAdvice: {
            en: "Your baby is forming. We will avoid medications and X-rays unless absolutely necessary.",
            ta: "குழந்தை உருவாகும் காலம். மருந்து, எக்ஸ்-ரே தவிர்க்கப்படும்.",
            te: "మీ బిడ్డ ఏర్పడే సమయం. మందులు, ఎక్స్-రేలు వీలైనంత వరకు వాడము.",
            hi: "बच्चे का विकास हो रहा है। हम दवाओं और एक्स-रे से बचेंगे।",
            kn: "ಮಗು ರೂಪುಗೊಳ್ಳುತ್ತಿದೆ. ನಾವು ಔಷಧಿ ಮತ್ತು ಎಕ್ಸ್-ರೇಗಳನ್ನು ತಪ್ಪಿಸುತ್ತೇವೆ.",
            ml: "കുഞ്ഞ് രൂപപ്പെടുന്ന സമയമാണ്. മരുന്നുകളും എക്സ്-റേയും ഒഴിവാക്കും."
        }
    },

    // --- SECOND TRIMESTER (The Golden Period) ---
    'second_trimester': {
        id: 'second_trimester',
        trimester: 'Second',
        weeks: "14 - 26 weeks",
        safetyLevel: 'Safe',
        recommendations: {
            en: "SAFEST period for routine dental care (Scaling, Fillings, Extractions).",
            ta: "சிகிச்சைக்கு மிகவும் பாதுகாப்பான நேரம்.",
            te: "చికిత్సకు ఇది మంచి సమయం.",
            hi: "इलाज के लिए सबसे सुरक्षित समय।",
            kn: "ಚಿಕಿತ್ಸೆಗೆ ಸುರಕ್ಷಿತ ಸಮಯ.",
            ml: "ചികിത്സയ്ക്ക് ഏറ്റവും സുരക്ഷിതമായ സമയം."
        },
        contraindications: ["Prolonged appointments (>1 hour)"],
        patientAdvice: {
            en: "This is the best time to fix any dental issues before the baby arrives.",
            ta: "குழந்தை பிறப்பதற்கு முன் பல் பிரச்சனைகளை சரிசெய்ய இதுவே சரியான நேரம்.",
            te: "డెలివరీకి ముందే పంటి సమస్యలు తగ్గించుకోవడానికి ఇది మంచి సమయం.",
            hi: "बच्चे के आने से पहले दांतों की समस्याओं को ठीक करने का यह सही समय है।",
            kn: "ಮಗುವಿನ ಜನನಕ್ಕೆ ಮುಂಚೆ ಹಲ್ಲಿನ समस्या ಬಗೆಹರಿಸಿಕೊಳ್ಳಲು ಇದು ಸಕಾಲ.",
            ml: "പ്രസവത്തിന് മുമ്പ് പല്ലിന്റെ പ്രശ്നങ്ങൾ പരിഹരിക്കാൻ ഏറ്റവും നല്ല സമയമാണിത്."
        }
    },

    // --- THIRD TRIMESTER (The Heavy Period) ---
    'third_trimester': {
        id: 'third_trimester',
        trimester: 'Third',
        weeks: "27 - 40 weeks",
        safetyLevel: 'High Risk',
        recommendations: {
            en: "Short appointments only. Keep patient semi-reclined. Avoid NSAIDs.",
            ta: "நீண்ட நேரம் படுக்க வைக்கக் கூடாது. வலி நிவாரணி மாத்திரை தவிர்க்கவும்.",
            te: "ఎక్కువ సేపు పడుకోవద్దు.",
            hi: "ज्यादा देर लेटे न रहें।",
            kn: "ಹೆಚ್ಚು ಹೊತ್ತು ಮಲಗಬೇಡಿ.",
            ml: "കൂടുതൽ സമയം കിടക്കരുത്."
        },
        contraindications: ["NSAIDs (Ibuprofen) - Risk of closing fetal heart valve", "Flat Supine Position"],
        patientAdvice: {
            en: "We will keep visits short. If you feel dizzy, tell us immediately.",
            ta: "மயக்கம் வந்தால் உடனே சொல்லவும்.",
            te: "కళ్ళు తిరిగితే వెంటనే చెప్పండి.",
            hi: "चक्कर आए तो तुरंत बताएं।",
            kn: "ತಲೆಸುತ್ತು ಬಂದರೆ ತಕ್ಷಣ ತಿಳಿಸಿ.",
            ml: "തലകറക്കം അനുഭവപ്പെട്ടാൽ ഉടൻ പറയുക."
        }
    }
};

// ==========================================
// 2. DRUG SAFETY (FDA Categories)
// ==========================================
export const PREGNANCY_DRUGS: Record<string, { category: 'B' | 'C' | 'D'; safe: boolean; warning: LocalizedText }> = {
    'paracetamol': {
        category: 'B',
        safe: true,
        warning: {
            en: "Safe for pain during pregnancy and lactation.",
            ta: "பாதுகாப்பானது.",
            hi: "दर्द के लिए सुरक्षित है।"
        }
    },
    'lidocaine': {
        category: 'B',
        safe: true,
        warning: {
            en: "Safe anesthesia for dental procedures.",
            ta: "மயக்க மருந்து பாதுகாப்பானது."
        }
    },
    'amoxicillin': {
        category: 'B',
        safe: true,
        warning: {
            en: "Safe antibiotic for infections.",
            ta: "தொற்றுக்கு பாதுகாப்பானது."
        }
    },
    'ibuprofen': {
        category: 'C',
        safe: false,
        warning: {
            en: "AVOID in 3rd Trimester. Can affect baby's heart valve closure.",
            ta: "கடைசி 3 மாதங்களில் தவிர்க்கவும். இதயத்தை பாதிக்கலாம்.",
            hi: "तीसरे तिमाही में न लें। बच्चे के दिल पर असर डाल सकता है।"
        }
    },
    'doxycycline': {
        category: 'D',
        safe: false,
        warning: {
            en: "UNSAFE. Causes permanent tooth discoloration in baby.",
            ta: "தவிர்க்கவும். குழந்தையின் பற்கள் நிறம் மாறும்.",
            hi: "असुरक्षित। बच्चे के दांतों का रंग बदल सकता है।"
        }
    }
};

// ==========================================
// 3. COMMON CONDITIONS
// ==========================================
export const PREGNANCY_CONDITIONS = {
    'pregnancy_gingivitis': {
        name: { en: "Pregnancy Gingivitis", ta: "ஈறு வீக்கம்", hi: "गर्भावस्था में मसूड़े की सूजन" },
        cause: "Hormonal changes (Progesterone) increase gum response to plaque.",
        symptoms: { en: "Bleeding gums, swollen red gums.", ta: "ஈறுகளில் ரத்தம் வருதல்." },
        advice: {
            en: "It is temporary but needs professional cleaning. Use warm salt water rinses.",
            ta: "இது தற்காலிகமானது. உப்பு நீரில் வாய் கொப்பளிக்கவும்.",
            hi: "यह अस्थायी है। नमक के पानी से कुल्ला करें।"
        }
    },
    'pyogenic_granuloma': {
        name: { en: "Pregnancy Tumor (Pyogenic Granuloma)", ta: "ஈறு கட்டி" },
        cause: "Exaggerated response to local irritation during pregnancy.",
        symptoms: { en: "Red, bleeding lump on gums.", ta: "ஈறில் ரத்தம் வடியும் கட்டி." },
        advice: {
            en: "Usually resolves after delivery. Surgical removal only if bleeding excessively.",
            ta: "பிரசவத்திற்கு பின் சரியாகிவிடும்."
        }
    }
};

export class PregnancyHelper {

    /**
     * Prevents Supine Hypotensive Syndrome
     * Based on Vena Cava compression physiology
     */
    static getChairPosition(trimester: string): string {
        if (trimester === 'Third') {
            return "⚠️ **CRITICAL:** Patient usually feels dizzy lying flat. \n**Action:** Turn patient to the **LEFT side** or place a pillow under the **Right Hip** (15-degree tilt). This relieves pressure on the Vena Cava.";
        }
        return "Standard Semi-Supine position is acceptable.";
    }

    /**
     * Addressing the "X-Ray Fear"
     */
    static getXrayAdvice(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "நவீன டிஜிட்டல் எக்ஸ்-ரே மிகவும் பாதுகாப்பானது. கதிர்வீச்சு மிகக் குறைவு. வயிற்றின் மீது 'Lead Apron' கவசம் போர்த்தப்படும்.";
        if (lang === 'te') return "డిజిటల్ ఎక్స్-రే సురక్షితం. బిడ్డకు రక్షణగా కవచం (Lead Apron) వేస్తాము.";
        if (lang === 'hi') return "डिजिटल एक्स-रे सुरक्षित है। हम बच्चे की सुरक्षा के लिए 'लीड एप्रन' का उपयोग करते हैं।";
        return "Modern Digital X-rays have negligible radiation. We use a **Lead Apron** to shield the baby completely. It is safer to diagnose an infection than to leave it untreated.";
    }

    /**
     * Lactation Safety (Breastfeeding)
     */
    static checkLactationSafety(drug: string): string {
        const d = drug.toLowerCase();
        if (['ibuprofen', 'paracetamol', 'lidocaine', 'amoxicillin'].includes(d)) {
            return "✅ **Safe:** Compatible with breastfeeding. Take immediately *after* nursing to minimize concentration in next feed.";
        }
        if (d === 'metronidazole' || d === 'aspirin') {
            return "⚠️ **Caution:** Pump and dump milk for 12-24 hours after dose. Taste may change or bleeding risk.";
        }
        return "⚠️ Consult Pediatrician before prescribing any new medication.";
    }
}
