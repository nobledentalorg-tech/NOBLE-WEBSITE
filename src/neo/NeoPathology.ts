import { LocalizedText } from '../types/neoSchema';

// Data derived from: Burket's Oral Medicine & Neville's Oral Pathology
// Focus: Common lesions, Pre-malignancy, and Benign tumors.

export interface PathologyEntry {
    id: string;
    category: 'Ulcer' | 'White/Red Lesion' | 'Swelling' | 'Pigmentation';
    name: LocalizedText;
    symptoms: LocalizedText; // Patient description
    clinicalSigns: string[]; // Keywords for AI detection
    riskLevel: 'Low' | 'Moderate' | 'High' | 'Emergency';
    cancerPotential: boolean;
    commonCauses?: string[];
    management: LocalizedText; // Actionable advice
}

export const ORAL_PATHOLOGY_DB: Record<string, PathologyEntry> = {

    // ==========================================
    // 1. WHITE & RED LESIONS (Pre-Cancerous / Cancerous)
    // ==========================================

    'leukoplakia': {
        id: 'leukoplakia',
        category: 'White/Red Lesion',
        name: { en: "Leukoplakia (White Patch)", ta: "வெண்படலம்", te: "తెల్లటి మచ్చ", hi: "सफेद दाग", kn: "ಬಿಳಿ ಕಲೆ", ml: "വെളുത്ത പാടുകൾ" },
        symptoms: {
            en: "Thick, white patch that CANNOT be scraped off. Usually painless.",
            ta: "சுரண்ட முடியாத தடிமனான வெள்ளை திட்டு. வலி இருக்காது.",
            te: "నోటిలో తుడిచినా పోని తెల్లటి మచ్చ.",
            hi: "मुंह में मोटा सफेद दाग जो साफ नहीं होता।",
            kn: "ಬಾಯಿಯಲ್ಲಿ ಅಳಿಸಲಾಗದ ಬಿಳಿ ಕಲೆ.",
            ml: "തുടച്ചു മാറ്റാൻ കഴിയാത്ത വെളുത്ത പാടുകൾ."
        },
        clinicalSigns: ['non-scrapable', 'white patch', 'smoker', 'tobacco'],
        riskLevel: 'High',
        cancerPotential: true, // Pre-malignant
        management: {
            en: "⚠️ BIOPSY MANDATORY. Stop tobacco/smoking immediately.",
            ta: "பயாப்ஸி பரிசோதனை அவசியம். புகையிலையை உடனே நிறுத்தவும்.",
            te: "బయాప్సీ (Biopsy) తప్పనిసరి. పొగత్రాగడం ఆపండి.",
            hi: "बायोप्सी जरूरी है। तंबाकू तुरंत छोड़ें।",
            kn: "ಬಯಾಪ್ಸಿ ಕಡ್ಡಾಯ. ತಂಬಾಕು ಬಿಡಿ.",
            ml: "ബയോപ്സി നിർബന്ധമാണ്. പുകയില ഉപയോഗം നിർത്തുക."
        }
    },

    'osmf': {
        id: 'osmf',
        category: 'White/Red Lesion',
        name: { en: "OSMF (Restricted Opening)", ta: "வாய் இறுக்கம் (OSMF)", te: "నోరు తెరుచుకోకపోవడం", hi: "मुंह का न खुलना", kn: "ಬಾಯಿ ತೆರೆಯಲು ಕಷ್ಟ", ml: "വായ തുറക്കാൻ ബുദ്ധിമുട്ട്" },
        symptoms: {
            en: "Inability to open mouth fully. Burning sensation with spicy food.",
            ta: "வாய் திறக்க முடியவில்லை. காரம் சாப்பிட்டால் எரிச்சல்.",
            te: "నోరు తెరవలేకపోవడం. కారం తింటే మంట.",
            hi: "मुंह पूरा नहीं खुलता। तीखा खाने पर जलन।",
            kn: "ಬಾಯಿ ಪೂರ್ತಿ ತೆರೆಯಲು ಆಗುವುದಿಲ್ಲ. ಖಾರ ತಿಂದರೆ ಉರಿ.",
            ml: "വായ പൂർണ്ണമായി തുറക്കാൻ കഴിയില്ല. എരിവ് കഴിക്കുമ്പോൾ നീറ്റൽ."
        },
        clinicalSigns: ['restricted opening', 'burning', 'fibrosis', 'areca nut', 'pan'],
        riskLevel: 'High',
        cancerPotential: true,
        management: {
            en: "STOP Areca Nut/Pan/Gutkha. Needs Antioxidants & Injections.",
            ta: "பாக்கு போடுவதை இன்றே நிறுத்தவும். சிகிச்சை அவசியம்.",
            te: "పాన్ మసాలా, గుట్కా ఆపాలి. చికిత్స అవసరం.",
            hi: "गुटखा/सुपारी खाना बंद करें। इलाज कराएं।",
            kn: "ಅಡಿಕೆ ಜಗಿಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ. ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.",
            ml: "പാക്ക്/പുകയില ഉപയോഗം നിർത്തുക. ചികിത്സ തേടുക."
        }
    },

    'oral_lichen_planus': {
        id: 'oral_lichen_planus',
        category: 'White/Red Lesion',
        name: { en: "Oral Lichen Planus", ta: "லைக்கன் பிளானஸ்", te: "లైకెన్ ప్లానస్", hi: "लाइकेन प्लेनस", kn: "ಲೈಕನ್ ಪ್ಲಾನಸ್", ml: "ലൈക്കൻ പ്ലാനസ്" },
        symptoms: {
            en: "Lacy white lines on cheeks. Burning sensation.",
            ta: "கன்னத்தில் வலை போன்ற வெள்ளை கோடுகள். எரிச்சல்.",
            te: "బుగ్గ లోపల తెల్లటి గీతలు. మంట.",
            hi: "गालों पर सफेद लकीरें। जलन।",
            kn: "ಕೆನ್ನೆಯ ಒಳಗೆ ಬಿಳಿ ಗೆರೆಗಳು. ಉರಿತ.",
            ml: "കവിളിൽ വെളുത്ത വരകൾ. നീറ്റൽ."
        },
        clinicalSigns: ['lacy pattern', 'wickham striae', 'burning', 'bilateral'],
        riskLevel: 'Moderate',
        cancerPotential: true, // Low Risk
        management: {
            en: "Steroid Ointment for relief. Regular 6-month checkup.",
            ta: "எரிச்சல் குறைய மருந்து (Steroid) தடவவும். 6 மாதத்திற்கு ஒருமுறை பரிசோதனை செய்யவும்.",
            te: "ఆయింట్మెంట్ వాడండి. 6 నెలలకోసారి డాక్టర్ని కలవండి.",
            hi: "मरहम लगाएं। हर 6 महीने में जांच कराएं।",
            kn: "ಮುಲಾಮು ಹಚ್ಚಿ. 6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಪರೀಕ್ಷಿಸಿ.",
            ml: "ഓയിന്റ്മെന്റ് പുരട്ടുക. 6 മാസം കൂടുമ്പോൾ പരിശോധിക്കുക."
        }
    },

    'oral_cancer': {
        id: 'oscc',
        category: 'Swelling',
        name: { en: "Oral Cancer Alert", ta: "வாய் புற்றுநோய் எச்சரிக்கை", te: "నోటి క్యాన్సర్", hi: "मुंह का कैंसर", kn: "ಬಾಯಿಯ ಕ್ಯಾನ್ಸರ್", ml: "വായയിലെ ക്യാൻസർ" },
        symptoms: {
            en: "Non-healing ulcer (>2 weeks), hard margins, bleeding, or lump.",
            ta: "2 வாரங்களுக்கு மேல் ஆறாத புண். ரத்தம் வருதல். கெட்டியான சதை.",
            te: "మానని పుండు. రక్తం రావడం. గట్టి గడ్డ.",
            hi: "न भरने वाला घाव। खून आना। सख्त गांठ।",
            kn: "ಮಾಯದ ಹುಣ್ಣು. ರಕ್ತಸ್ರಾವ. ಗಟ್ಟಿಯಾದ ಗಂಟು.",
            ml: "ഉണങ്ങാത്ത മുറിവ്. രക്തസ്രാവം. കട്ടിയുള്ള മുഴ."
        },
        clinicalSigns: ['indurated', 'bleeding', 'non-healing', 'growth', 'ulcer'],
        riskLevel: 'Emergency',
        cancerPotential: true,
        management: {
            en: "⛔ URGENT: Visit Dr. Dhivakaran immediately for a Biopsy.",
            ta: "உடனடியாக மருத்துவரை காணவும். பயாப்ஸி அவசியம்.",
            te: "వెంటనే డాక్టర్ని కలవండి. బయాప్సీ అవసరం.",
            hi: "तुरंत डॉक्टर से मिलें। बायोप्सी कराएं।",
            kn: "ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ. ಬಯಾಪ್ಸಿ ಮಾಡಿಸಿ.",
            ml: "അടിയന്തിരമായി ഡോക്ടറെ കാണുക. ബയോപ്സി ചെയ്യണം."
        }
    },

    // ==========================================
    // 2. COMMON INFECTIONS (Benign)
    // ==========================================

    'oral_candidiasis': {
        id: 'oral_candidiasis',
        category: 'White/Red Lesion',
        name: { en: "Oral Thrush (Fungal)", ta: "பூஞ்சை தொற்று", te: "ఫంగల్ ఇన్ఫెక్షన్", hi: "फंगल इन्फेक्शन", kn: "ಫಂಗಲ್ ಸೋಂಕು", ml: "ഫംഗസ് ബാധ" },
        symptoms: {
            en: "Curd-like white patches that WIPE OFF, leaving red skin.",
            ta: "தயிர் போன்ற வெள்ளை திட்டு. துடைத்தால் அழியும்.",
            te: "పెరుగు లాంటి తెల్లటి మచ్చలు. తుడిస్తే పోతాయి.",
            hi: "दही जैसे सफेद धब्बे जो साफ हो जाते हैं।",
            kn: "ಮೊಸರಿನಂತಹ ಬಿಳಿ ಕಲೆಗಳು. ಒರೆಸಿದರೆ ಹೋಗುತ್ತವೆ.",
            ml: "തൈര് പോലെയുള്ള വെളുത്ത പാടുകൾ. തുടച്ചാൽ പോകും."
        },
        clinicalSigns: ['scrapable', 'curd like', 'wipes off', 'diabetes'],
        riskLevel: 'Moderate',
        cancerPotential: false,
        commonCauses: ["Broad-spectrum antibiotics", "Diabetes", "Steroid Inhalers", "Immunosuppression"],
        management: {
            en: "Antifungal Mouth Paint (Clotrimazole). Check Diabetes.",
            ta: "பூஞ்சை எதிர்ப்பு மருந்து. சர்க்கரை அளவை பார்க்கவும்.",
            te: "మందు వాడండి. షుగర్ టెస్ట్ చేయించుకోండి.",
            hi: "दवा लगाएं। शुगर चेक कराएं।",
            kn: "ಔಷಧ ಬಳಸಿ. ಶುಗರ್ ಪರೀಕ್ಷಿಸಿ.",
            ml: "മരുന്ന് പുരട്ടുക. ഷുഗർ പരിശോധിക്കുക."
        }
    },

    'aphthous_ulcer': {
        id: 'aphthous_ulcer',
        category: 'Ulcer',
        name: { en: "Canker Sore", ta: "வாய் புண்", te: "నోటి పూత", hi: "मुंह के छाले", kn: "ಬಾಯಿ ಹುಣ್ಣು", ml: "വായയിലെ പുണ്ണ്" },
        symptoms: {
            en: "Small, painful round ulcer. Moves around mouth.",
            ta: "சிறிய வலிமிகுந்த புண். 7-10 நாட்களில் குணமாகும்.",
            te: "చిన్న పుండు. నొప్పి ఉంటుంది.",
            hi: "छोटा दर्दनाक छाला।",
            kn: "ಚಿಕ್ಕ ನೋವಿನ ಹುಣ್ಣು.",
            ml: "ചെറിയ വേദനയുള്ള പുണ്ണ്."
        },
        clinicalSigns: ['painful', 'yellow center', 'red border', 'stress'],
        riskLevel: 'Low',
        cancerPotential: false,
        management: {
            en: "Self-healing. Use Gel for pain relief.",
            ta: "தானாகவே சரியாகிவிடும். வலி நிவாரணி களிம்பு பயன்படுத்தலாம்.",
            te: "దానంతట అదే తగ్గుతుంది. జెల్ వాడండి.",
            hi: "अपने आप ठीक हो जाएगा। जेल लगाएं।",
            kn: "ಸ್ವತಃ ಗುಣವಾಗುತ್ತದೆ. ಜೆಲ್ ಬಳಸಿ.",
            ml: "സ്വയം മാറും. ജെൽ പുരട്ടുക."
        }
    },

    // ==========================================
    // 3. SWELLINGS (Cysts/Tumors)
    // ==========================================

    'mucocele': {
        id: 'mucocele',
        category: 'Swelling',
        name: { en: "Mucocele (Lip Cyst)", ta: "உதடு நீர்க்கட்டி", te: "నీటి బుడగ", hi: "पानी की गांठ", kn: "ನೀರು ಗುಳ್ಳೆ", ml: "നീർക്കുമിള" },
        symptoms: {
            en: "Soft, bluish fluid-filled bubble on lower lip.",
            ta: "கீழ் உதட்டில் நீர் நிரம்பிய குமிழ்.",
            te: "క్రింది పెదవిపై నీటి బుడగ.",
            hi: "निचले होंठ पर पानी की गांठ।",
            kn: "ಕೆಳ ತುಟಿಯ ಮೇಲೆ ನೀರಿನ ಗುಳ್ಳೆ.",
            ml: "താഴത്തെ ചുണ്ടിൽ നീർക്കുമിള."
        },
        clinicalSigns: ['fluid filled', 'lower lip', 'painless', 'blue'],
        riskLevel: 'Low',
        cancerPotential: false,
        management: {
            en: "Minor surgery needed to remove it.",
            ta: "சிறிய அறுவை சிகிச்சை மூலம் அகற்ற வேண்டும்.",
            te: "చిన్న ఆపరేషన్ అవసరం.",
            hi: "छोटी सर्जरी से निकालना पड़ेगा।",
            kn: "ಚಿಕ್ಕ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಗತ್ಯ.",
            ml: "ചെറിയ ശസ്ത്രക്രിയ ആവശ്യമാണ്."
        }
    }
};

export class PathologyHelper {

    /**
     * Triage Helper: The "Wipe Test"
     */
    static analyzeWhitePatch(canWipeOff: boolean): string {
        if (canWipeOff) {
            return "✅ **Diagnosis: Candidiasis (Fungal).** It wipes off. Treat with antifungals.";
        }
        return "⚠️ **WARNING: Leukoplakia.** It does NOT wipe off. This is pre-cancerous. Biopsy needed.";
    }

    /**
     * Triage Helper: The "2-Week Rule"
     */
    static analyzeUlcerRisk(durationDays: number): string {
        if (durationDays > 14) {
            return "⛔ **CANCER ALERT:** Ulcer persisting > 2 weeks is a red flag. Immediate investigation required.";
        }
        return "✅ **Safe:** Likely a stress ulcer. Monitor for 1 more week.";
    }
}
