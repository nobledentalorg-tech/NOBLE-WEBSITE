import { LocalizedText } from '../types/neoSchema';

// Data derived from: Peterson's Principles of Oral and Maxillofacial Surgery
// Focus: Wisdom Teeth, Impactions, Surgical Complications, and Life-Saving Triage.

export interface SurgicalCondition {
    id: string;
    stage?: 'Pre-Op' | 'Intra-Op' | 'Post-Op';
    name: LocalizedText;
    category?: string;
    classification?: string; // e.g. "Mesioangular" or "Pell & Gregory"
    difficultyScore?: number; // 1 (Easy) to 10 (Expert)
    severity?: 'Moderate' | 'High' | 'Emergency';
    symptoms?: LocalizedText;
    procedure?: LocalizedText;
    risks?: LocalizedText;
    management?: LocalizedText; // Doctor/Patient Action
    postOpCare?: LocalizedText;
    prevention?: string;
}

// ==========================================
// 1. WISDOM TOOTH IMPACTIONS (Mandibular)
// ==========================================
export const WISDOM_TOOTH_DB: Record<string, SurgicalCondition> = {
    'mesioangular_impaction': {
        id: 'mesioangular_impaction',
        name: { en: "Mesioangular Impaction", ta: "சாய்ந்த ஞானப் பல்", te: "వంకరగా ఉన్న జ్ఞాన దంతం", hi: "टेढ़ा अकल दाढ़", kn: "ಓರೆಯಾದ ಬುದ್ಧಿ ಹಲ್ಲು", ml: "ചരിഞ്ഞ വിസ്ഡം ടൂത്ത്" },
        classification: "Most Common (43%)",
        difficultyScore: 5,
        procedure: {
            en: "Surgical Extraction (Odontectomy). Requires bone guttering.",
            ta: "சிறிய அறுவை சிகிச்சை மூலம் பல்லை பிரித்து எடுத்தல்.",
            hi: "छोटा ऑपरेशन करके दांत निकालना।"
        },
        risks: {
            en: "Food impaction if left untreated. Decay in adjacent tooth.",
            ta: "பக்கத்தில் உள்ள பல்லில் சொத்தை வரலாம்."
        },
        postOpCare: {
            en: "Ice pack for 24h. Soft diet. No spitting.",
            ta: "ஐஸ் ஒத்தடம் கொடுக்கவும். துப்பக்கூடாது.",
            te: "ఐస్ పెట్టండి. ఉమ్మివేయవద్దు.",
            hi: "बर्फ लगाएं। थूकें नहीं।",
            kn: "ಐಸ್ ಇಡಿ. ಉಗುಳಬೇಡಿ.",
            ml: "ഐസ് വെക്കുക. തുപ്പരുത്."
        }
    },
    'horizontal_impaction': {
        id: 'horizontal_impaction',
        name: { en: "Horizontal Impaction", ta: "படுக்கை வசமான பல்", te: "అడ్డంగా ఉన్న పన్ను", hi: "लेटा हुआ दांत", kn: "ಅಡ್ಡಲಾದ ಬುದ್ಧಿ ಹಲ್ಲು", ml: "കിടക്കുന്ന വിസ്ഡം ടൂത്ത്" },
        classification: "Lying flat",
        difficultyScore: 8,
        procedure: {
            en: "Tooth Sectioning (cutting tooth into pieces) is mandatory.",
            ta: "பல்லை துண்டு துண்டாக வெட்டி எடுக்க வேண்டும்."
        },
        risks: {
            en: "Injury to Inferior Alveolar Nerve (Numbness).",
            ta: "நரம்பு பாதிப்பு (உதடு மரத்துப்போதல்) ஏற்படலாம்."
        },
        postOpCare: {
            en: "Expect swelling for 3-5 days. Vitamin B complex usually prescribed.",
            ta: "3-5 நாட்கள் வீக்கம் இருக்கும்."
        }
    }
};

// ==========================================
// 2. SURGICAL COMPLICATIONS (The Safety Layer)
// ==========================================
export const SURGICAL_COMPLICATIONS_DB: Record<string, SurgicalCondition> = {

    'pericoronitis': {
        id: 'pericoronitis',
        stage: 'Pre-Op',
        name: { en: "Pericoronitis (Wisdom Tooth Infection)", ta: "ஞானப் பல் ஈறு வீக்கம்", te: "జ్ఞాన దంతం వాపు", hi: "अकल दाढ़ में संक्रमण", kn: "ಬುದ್ಧಿ ಹಲ್ಲು ಸೋಂಕು", ml: "വിസ്ഡം ടൂത്ത് ഇൻഫെക്ഷൻ" },
        severity: 'Moderate',
        symptoms: {
            en: "Swollen gum flap over wisdom tooth, pain on swallowing, limited mouth opening.",
            ta: "ஈறு வீக்கம், உணவு விழுங்க சிரமம், வாய் திறக்க முடியவில்லை.",
            hi: "मसूड़ों में सूजन, निगलने में दर्द।"
        },
        management: {
            en: "Antibiotics + Warm Saline Rinse. Extraction ONLY after acute infection subsides.",
            ta: "முதலில் மருந்து சாப்பிட்டு வீக்கத்தை குறைக்க வேண்டும். பிறகு பல் எடுக்கலாம்.",
            te: "వాపు తగ్గిన తర్వాతే పన్ను తీయాలి.",
            hi: "सूजन कम ہونے کے बाद ही दांत निकालें।"
        }
    },
    'oroantral_communication': {
        id: 'oroantral_communication',
        stage: 'Intra-Op',
        name: { en: "Oroantral Communication (Sinus Opening)", ta: "சைனஸ் துளை (OAC)", te: "సైనస్ రంధ్రం", hi: "साइनस का खुलना", kn: "ಸೈನಸ್ ರಂಧ್ರ", ml: "സൈനസ് സുഷിരം" },
        severity: 'High',
        symptoms: {
            en: "Hole connecting mouth to nose. Water comes out of nose when drinking.",
            ta: "வாய் மற்றும் மூக்கு இடையே துளை. தண்ணீர் குடித்தால் மூக்கு வழியாக வரும்.",
            hi: "नाक से पानी आना।"
        },
        management: {
            en: "Valsalva Test Positive -> Buccal Advancement Flap closure immediately.",
            ta: "உடனடியாக அறுவை சிகிச்சை மூலம் மூட வேண்டும்."
        },
        prevention: "Avoid excessive force on upper molars. Section roots."
    },
    'dry_socket': {
        id: 'dry_socket',
        stage: 'Post-Op',
        name: { en: "Dry Socket (Alveolar Osteitis)", ta: "உலர்ந்த பல் குழி (Dry Socket)", te: "ఎండిన గాయం", hi: "सूखा घाव", kn: "ಡ್ರೈ ಸಾಕೆಟ್", ml: "ഡ്രൈ സോക്കറ്റ്" },
        severity: 'Moderate',
        symptoms: {
            en: "Severe throbbing pain 3 days after extraction. Bad breath.",
            ta: "பல் எடுத்த 3 நாட்களுக்குப் பிறகு கடும் வலி.",
            hi: "3 दिन बाद तेज दर्द।"
        },
        management: {
            en: "ZOE Dressing (Zinc Oxide Eugenol). Pain relief is immediate.",
            ta: "மருந்து வைத்தால் வலி குறையும்."
        }
    },
    'ludwigs_angina': {
        id: 'ludwigs_angina',
        stage: 'Post-Op',
        name: { en: "Ludwig's Angina (Spreading Infection)", ta: "கழுத்து வீக்கம் (Ludwig's)", te: "మెడ వాపు", hi: "गले में सूजन", kn: "ಕುತ್ತಿಗೆ ಬಾವು", ml: "കഴുത്തിലെ വീക്കം" },
        severity: 'Emergency',
        symptoms: {
            en: "Bilateral neck swelling, tongue raised, difficulty breathing.",
            ta: "கழுத்து வீக்கம், மூச்சு விட சிரமம். இது உயிருக்கு ஆபத்து.",
            te: "ఊపిరి ఆడకపోవడం. అత్యవసర పరిస్థితి.",
            hi: "सांस लेने में दिक्कत। जानलेवा।"
        },
        management: {
            en: "IMMEDIATE ER REFERRAL. IV Antibiotics + Surgical Drainage.",
            ta: "உடனடியாக பெரிய மருத்துவமனைக்கு செல்லவும்.",
            te: "వెంటనే ఆసుపత్రికి వెళ్ళండి.",
            hi: "तुरंत अस्पताल जाएं।"
        }
    }
};

// ==========================================
// 3. MAXILLOFACIAL INTELLIGENCE HELPER
// ==========================================

export class SurgeryHelper {

    /**
     * Estimates Difficulty based on Pell & Gregory Scale
     */
    static getDifficulty(classSpace: 'I' | 'II' | 'III', classDepth: 'A' | 'B' | 'C'): string {
        if (classSpace === 'III' || classDepth === 'C') {
            return "🔴 **HIGH DIFFICULTY (Expert Case):** Tooth is deep inside the bone or ramus. Significant bone removal required. Risk of nerve injury.";
        }
        if (classSpace === 'II' || classDepth === 'B') {
            return "🟡 **MODERATE DIFFICULTY:** Tooth is partially covered by bone/gum. Minor surgery needed.";
        }
        return "🟢 **LOW DIFFICULTY:** Routine extraction possible.";
    }

    /**
     * Sinus Precautions (For Upper Molars)
     */
    static getSinusPrecautions(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "⚠️ சைனஸ் எச்சரிக்கை: \n1. மூக்கை பலமாக சிந்தக்கூடாது.\n2. ஸ்ட்ரா (Straw) பயன்படுத்தக்கூடாது.\n3. தும்மல் வந்தால் வாயை திறந்து தும்மவும்.";
        if (lang === 'te') return "⚠️ సైనస్ జాగ్రత్తలు: \n1. ముక్కు చీదవద్దు.\n2. స్ట్రా వాడవద్దు.\n3. తుమ్ములు వస్తే నోరు తెరవండి.";
        if (lang === 'hi') return "⚠️ साइनस सावधानी: \n1. नाक न छिड़कें।\n2. स्ट्रॉ का उपयोग न करें।\n3. छींकते समय मुंह खुला रखें।";
        if (lang === 'kn') return "⚠️ ಸೈನಸ್ ಎಚ್ಚರಿಕೆ: \n1. ಮೂಗನ್ನು ಜೋರಾಗಿ ಉಜ್ಜಬೇಡಿ.\n2. ಸ್ಟ್ರಾ ಬಳಸಬೇಡಿ. \n3. ಸೀನುವಾಗ ಬಾಯಿ ತೆರೆಯಿರಿ.";
        if (lang === 'ml') return "⚠️ സൈനസ് മുൻകരുതൽ: \n1. മൂക്ക് ബലമായി ചീറ്റരുത്.\n2. സ്ട്രോ ഉപയോഗിക്കരുത്. \n3. തുമ്മുമ്പോൾ വായ തുറക്കുക.";
        return "⚠️ **SINUS PRECAUTIONS:** \n1. Do NOT blow your nose for 2 weeks.\n2. Do NOT use a straw.\n3. Sneeze with your mouth open.";
    }

    /**
     * Triage Post-Op Pain
     */
    static triagePostOpPain(daysSinceSurgery: number, swellingPresent: boolean): string {
        if (daysSinceSurgery <= 2) {
            return "✅ Normal: Pain peaks on Day 2. Continue painkillers.";
        }
        if (daysSinceSurgery >= 3 && !swellingPresent) {
            return "⚠️ Possible Dry Socket: Pain increased on Day 3? Visit for dressing.";
        }
        if (swellingPresent && daysSinceSurgery > 3) {
            return "⛔ RISK: Possible Secondary Infection. Antibiotics may need changing.";
        }
        return "Monitor symptoms.";
    }
}
