import { LocalizedText } from '../types/neoSchema';

// Neo Post-Operative Care Module
// Focus: After-care instructions for common dental procedures.

export interface PostOpInstruction {
    id: string;
    procedureName: LocalizedText;
    dos: LocalizedText[];
    donts: LocalizedText[];
    emergencyTrigger: LocalizedText; // When to call the doctor
}

export const POST_OP_DB: Record<string, PostOpInstruction> = {
    // --- EXTRACTION CARE ---
    'extraction_care': {
        id: 'extraction_care',
        procedureName: { en: "Tooth Extraction", ta: "பல் எடுத்த பிறகு", te: "పన్ను తీసిన తర్వాత", hi: "दांत निकालने के बाद", kn: "ಹಲ್ಲು ತೆಗೆದ ನಂತರ" },
        dos: [
            {
                en: "Bite firmly on the cotton gauze for 1 hour.",
                ta: "பஞ்சு மீது 1 மணி நேரம் அழுத்தமாக கடிக்கவும்.",
                te: "1 గంట పాటు పత్తిని గట్టిగా కొరకండి.",
                hi: "1 घंटे तक रुई को जोर से दबाकर रखें।",
                kn: "1 ಗಂಟೆ ಹತ್ತಿಯನ್ನು ಗಟ್ಟಿಯಾಗಿ ಕಚ್ಚಿ."
            },
            {
                en: "Eat soft, cold foods (Ice cream, Yogurt).",
                ta: "மென்மையான, குளிர்ந்த உணவை உண்ணவும் (ஐஸ்கிரீம்).",
                hi: "नरम और ठंडा भोजन खाएं।",
                kn: "ಮೃದುವಾದ ಮತ್ತು ತಣ್ಣನೆಯ ಆಹಾರವನ್ನು ಸೇವಿಸಿ."
            }
        ],
        donts: [
            {
                en: "DO NOT spit or rinse for 24 hours (Dislodges clot).",
                ta: "24 மணி நேரத்திற்கு துப்பவோ, வாய் கொப்பளிக்கவோ கூடாது.",
                te: "24 గంటల పాటు ఉమ్మివేయవద్దు.",
                hi: "24 घंटे तक थूकें या कुल्ला न करें।",
                kn: "24 ಗಂಟೆಗಳ ಕಾಲ ಉಗುಳಬೇಡಿ."
            },
            {
                en: "No smoking or drinking through a straw.",
                ta: "புகை பிடிக்காதீர். ஸ்ட்ரா (Straw) பயன்படுத்த வேண்டாம்.",
                hi: "धूम्रपान न करें। स्ट्रॉ का उपयोग न करें।",
                kn: "ಧೂಮಪಾನ ಬೇಡ. ಸ್ಟ್ರಾ ಬಳಸಬೇಡಿ."
            }
        ],
        emergencyTrigger: {
            en: "Bleeding that fills the mouth or fever > 101°F.",
            ta: "நிற்காத ரத்தப்போக்கு அல்லது அதிக காய்ச்சல்.",
            hi: "लगातार खून बहना या तेज बुखार।",
            kn: "ನಿಲ್ಲದ ರಕ್ತಸ್ರಾವ ಅಥವಾ ಅಧಿಕ ಜ್ವರ."
        }
    },

    // --- ROOT CANAL CARE ---
    'rct_care': {
        id: 'rct_care',
        procedureName: { en: "Root Canal Treatment", ta: "வேர் சிகிச்சை (RCT)" },
        dos: [
            { en: "Take prescribed painkillers before anesthesia wears off.", ta: "மயக்க மருந்து தெளிவதற்கு முன் வலி மாத்திரை எடுக்கவும்." },
            { en: "Chew on the OTHER side of the mouth.", ta: "மறுபுறம் மட்டும் மெல்லவும்." }
        ],
        donts: [
            { en: "Do not chew hard foods (Nuts, Bones) on the treated tooth.", ta: "க হোমিওপ্যাথির உணவுகளை கடிக்க வேண்டாம்." }
        ],
        emergencyTrigger: { en: "Visible swelling spreading to the eye or neck.", ta: "கண் அல்லது கழுத்துக்கு பரவும் வீக்கம்." }
    },

    // --- CROWN & BRIDGE CARE ---
    'crown_care': {
        id: 'crown_care',
        procedureName: { en: "Crown/Bridge Fixation", ta: "பல் செட் (Crown)" },
        dos: [
            { en: "Floss carefully around the bridge to remove food.", ta: "பல் இடுக்கில் சிக்கிய உணவை சுத்தம் செய்யவும்." }
        ],
        donts: [
            { en: "Avoid sticky foods (Caramel, Gum) that can pull the crown off.", ta: "பிசுபிசுப்பான உணவுகளை தவிர்க்கவும் (மிட்டாய்)." }
        ],
        emergencyTrigger: { en: "Crown feels 'high' or prevents normal biting.", ta: "பல் உயரமாக தெரிந்து கடிக்க முடியவில்லை என்றால்." }
    }
};

export class PostOpHelper {
    /**
     * Determines when a patient can eat hot food
     */
    static getEatingAdvice(isAnesthetized: boolean): string {
        if (isAnesthetized) {
            return "Do not eat hot food until numbness completely goes away (approx 2-3 hours). You might bite your lip.";
        }
        return "You can eat now, but prefer soft diet.";
    }
}
