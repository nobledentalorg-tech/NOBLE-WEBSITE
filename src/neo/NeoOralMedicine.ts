import { LocalizedText } from '../types/neoSchema';

// Data derived from: Burket's Oral Medicine (12th Ed)
// Focus: Soft Tissue Lesions, Oral Cancer, Neuralgia, and Salivary Disorders

export interface OralLesion {
    id: string;
    category: 'Ulcer' | 'Pre-Cancer' | 'Infection' | 'Immune' | 'Neuropathic' | 'Salivary';
    name: LocalizedText;
    clinicalFeatures: {
        appearance: LocalizedText;
        pain: boolean;
        duration: string;
        isContagious: boolean;
    };
    riskLevel: 'Low' | 'Moderate' | 'High' | 'Emergency';
    management: LocalizedText;
    doctorAlert: string; // Internal note for Dr. Dhivakaran
}

export const ORAL_MEDICINE_DB: Record<string, OralLesion> = {

    // ==========================================
    // 1. ULCERATIVE CONDITIONS (Common Pain)
    // ==========================================
    'aphthous_ulcer': {
        id: 'aphthous_ulcer',
        category: 'Ulcer',
        name: { en: "Canker Sore (Aphthous)", ta: "வாய் புண்", te: "నోటి పూత", hi: "मुंह के छाले", kn: "ಬಾಯಿ ಹುಣ್ಣು", ml: "വായയിലെ പുണ്ണ്" },
        clinicalFeatures: {
            appearance: { en: "Small round ulcer with red border. Yellow/White center.", ta: "சிவப்பு விளிம்பு கொண்ட சிறிய வெள்ளை புண்." },
            pain: true,
            duration: "7-10 Days",
            isContagious: false
        },
        riskLevel: 'Low',
        management: {
            en: "Self-healing. Use Benzocaine gel or Triamcinolone paste for relief.",
            ta: "தானாகவே சரியாகிவிடும். வலி நிவாரணி களிம்பு பயன்படுத்தலாம்.",
            te: "దానంతట అదే తగ్గుతుంది. ఆయింట్మెంట్ వాడండి.",
            hi: "अपने आप ठीक हो जाता है। जेल लगाएं।",
            kn: "ಸ್ವತಃ ಗುಣವಾಗುತ್ತದೆ. ಮುಲಾಮು ಹಚ್ಚಿ.",
            ml: "സ്വയം മാറും. ഓയിന്റ്മെന്റ് പുരട്ടുക."
        },
        doctorAlert: "If recurrence is frequent, check B12/Iron levels."
    },
    'herpes_labialis': {
        id: 'herpes_labialis',
        category: 'Infection',
        name: { en: "Cold Sore (Herpes)", ta: "உதடு புண் (அக்கி)", te: "పెదవిపై కురుపులు", hi: "हरपीज (बुखार के छाले)", kn: "ತುಟಿ ಹುಣ್ಣು", ml: "പനി കുരു" },
        clinicalFeatures: {
            appearance: { en: "Cluster of fluid-filled blisters on lips. Crusts over later.", ta: "உதட்டில் நீர் நிரம்பிய கொப்புளங்கள்." },
            pain: true,
            duration: "10-14 Days",
            isContagious: true
        },
        riskLevel: 'Moderate',
        management: {
            en: "Contagious! Do not touch. Use Acyclovir cream immediately.",
            ta: "தொற்று பரவும்! தொட வேண்டாம். அசைಕ್லோவிர் கிரீம் பயன்படுத்தவும்.",
            te: "అంటువ్యాధి! తాకవద్దు. మందు రాయండి.",
            hi: "यह फैलता है! छुएं नहीं। क्रीम लगाएं।",
            kn: "ಹರಡುತ್ತದೆ! ಮುಟ್ಟಬೇಡಿ. ಕ್ರೀಮ್ ಹಚ್ಚಿ.",
            ml: "പടരുന്നതാണ്! തൊടരുത്. ക്രീം പുരട്ടുക."
        },
        doctorAlert: "Prodromal stage (tingling) is best time for treatment."
    },

    // ==========================================
    // 2. WHITE & RED LESIONS (Pre-Cancerous)
    // ==========================================
    'leukoplakia': {
        id: 'leukoplakia',
        category: 'Pre-Cancer',
        name: { en: "Leukoplakia (White Patch)", ta: "வெண்படலம்", te: "తెల్లటి మచ్చ", hi: "सफेद दाग", kn: "ಬಿಳಿ ಕಲೆ", ml: "വെളുത്ത പാടുകൾ" },
        clinicalFeatures: {
            appearance: { en: "Thick white patch that CANNOT be wiped off.", ta: "அழிக்க முடியாத தடிமனான வெள்ளை திட்டு." },
            pain: false,
            duration: "Chronic (> 2 weeks)",
            isContagious: false
        },
        riskLevel: 'High',
        management: {
            en: "⚠️ BIOPSY REQUIRED. Stop tobacco/smoking immediately.",
            ta: "சதை பரிசோதனை (Biopsy) அவசியம். புகையிலையை உடனே நிறுத்தவும்.",
            te: "బయాప్సీ అవసరం. పొగత్రాగడం ఆపండి.",
            hi: "बायोप्सी जरूरी है। तंबाकू तुरंत छोड़ें।",
            kn: "ಬಯಾಪ್ಸಿ ಅಗತ್ಯವಿದೆ. ತಂಬಾಕು ಬಿಡಿ.",
            ml: "ബയോപ്സി ആവശ്യമാണ്. പുകയില ഉപയോഗം നിർത്തുക."
        },
        doctorAlert: "Homogeneous is lower risk. Speckled/Nodular is high risk."
    },
    'osmf': {
        id: 'osmf',
        category: 'Pre-Cancer',
        name: { en: "OSMF (Oral Submucous Fibrosis)", ta: "வாய் இறுக்கம் (OSMF)", te: "నోరు తెరుచుకోకపోవడం", hi: "मुंह का न खुलना", kn: "ಬಾಯಿ ತೆರೆಯಲು ಕಷ್ಟ", ml: "വായ തുറക്കാൻ ബുദ്ധിമുട്ട്" },
        clinicalFeatures: {
            appearance: { en: "Stiff mucosa, inability to open mouth, burning sensation with spicy food.", ta: "வாய் திறக்க முடியாது. காரம் சாப்பிட்டால் எரிச்சல்." },
            pain: true,
            duration: "Chronic (Years)",
            isContagious: false
        },
        riskLevel: 'High',
        management: {
            en: "STOP Areca nut/Pan/Gutkha. Needs Antioxidants & Physiotherapy.",
            ta: "பாக்கு போடுவதை இன்றே நிறுத்தவும். சிகிச்சை அவசியம்.",
            te: "పాన్ మసాలా వాడకం ఆపాలి. చికిత్స అవసరం.",
            hi: "सुपारी/गुटखा तुरंत बंद करें।",
            kn: "ಅಡಿಕೆ ಜಗಿಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ.",
            ml: "പാക്ക്/പുകയില ഉപയോഗം നിർത്തുക."
        },
        doctorAlert: " Check inter-incisal opening width."
    },

    // ==========================================
    // 3. FUNGAL INFECTIONS
    // ==========================================
    'candidiasis': {
        id: 'candidiasis',
        category: 'Infection',
        name: { en: "Oral Thrush (Candidiasis)", ta: "பூஞ்சை தொற்று", te: "ఫంగల్ ఇన్ఫెక్షన్", hi: "फंगल इन्फेक्शन", kn: "ಫಂಗಲ್ ಸೋಂಕು", ml: "ഫംഗസ് ബാധ" },
        clinicalFeatures: {
            appearance: { en: "Curd-like white patches that WIPE OFF, leaving red surface.", ta: "தயிர் போன்ற வெள்ளை திட்டு. துடைத்தால் அழியும்." },
            pain: true, // Burning
            duration: "Acute or Chronic",
            isContagious: false
        },
        riskLevel: 'Moderate',
        management: {
            en: "Anti-fungal Mouth Paint (Clotrimazole). Check blood sugar levels.",
            ta: "பூஞ்சை எதிர்ப்பு மருந்து. சர்க்கரை அளவை சோதிக்கவும்.",
            te: "యాంటీ ఫంగల్ మందు వాడాలి. షుగర్ టెస్ట్ చేయించుకోండి.",
            hi: "एंटी-फंगल दवा लें। शुगर चेक कराएं।",
            kn: "ಶಿಲೀಂಧ್ರ ವಿರೋಧಿ ಔಷಧ ಬಳಸಿ. ಶುಗರ್ ಪರೀಕ್ಷಿಸಿ.",
            ml: "ആന്റി-ഫംഗൽ മരുന്ന് ഉപയോഗിക്കുക. ഷുഗർ പരിശോധിക്കുക."
        },
        doctorAlert: " Differentiate: Leukoplakia does NOT wipe off."
    },

    // ==========================================
    // 4. AUTOIMMUNE (Blisters)
    // ==========================================
    'pemphigus': {
        id: 'pemphigus',
        category: 'Immune',
        name: { en: "Pemphigus Vulgaris", ta: "கொப்புள நோய்", te: "పెంఫిగస్", hi: "पेम्फिगस", kn: "ಪೆಂಫಿಗಸ್", ml: "പെംഫിഗസ്" },
        clinicalFeatures: {
            appearance: { en: "Large blisters that burst easily causing raw ulcers. Skin peels off (Nikolsky sign).", ta: "பெரிய கொப்புளங்கள் உடையும்." },
            pain: true,
            duration: "Chronic",
            isContagious: false
        },
        riskLevel: 'Emergency',
        management: {
            en: "Urgent Dermatologist/Oral Pathologist referral. Systemic steroids needed.",
            ta: "உடனடியாக மருத்துவரை காணவும். இது தீவிரமானது.",
            te: "వెంటనే డాక్టర్ని కలవండి. ఇది ప్రమాదకరం.",
            hi: "तुरंत डॉक्टर को दिखाएं।",
            kn: "ತುರ್ತಾಗಿ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
            ml: "ഉടൻ ഡോക്ടറെ കാണുക."
        },
        doctorAlert: "Life-threatening if untreated."
    },

    // ==========================================
    // 5. OROFACIAL PAIN (Nerve Pain)
    // ==========================================
    'trigeminal_neuralgia': {
        id: 'trigeminal_neuralgia',
        category: 'Neuropathic',
        name: { en: "Trigeminal Neuralgia", ta: "முக நரம்பு வலி", te: "నరాల నొప్పి", hi: "चेहरे की नसों का दर्द", kn: "ನರಗಳ నోవు", ml: "മുഖത്തെ നാഡീവേദന" },
        clinicalFeatures: {
            appearance: { en: "Normal looking teeth/gums.", ta: "பற்கள் நன்றாக இருக்கும்." },
            pain: true, // Extreme
            duration: "Seconds (Electric Shock)",
            isContagious: false
        },
        riskLevel: 'Moderate',
        management: {
            en: "Not a tooth problem! Requires nerve medication (Carbamazepine).",
            ta: "இது பல் பிரச்சனை அல்ல! நரம்பு சிகிச்சை தேவை.",
            te: "ఇది పంటి సమస్య కాదు. నరాల డాక్టర్ని కలవాలి.",
            hi: "यह दांत की समस्या नहीं है। नसों का इलाज कराएं।",
            kn: "ಇದು ಹಲ್ಲಿನ ಸಮಸ್ಯೆಯಲ್ಲ. ನರಗಳ ಚಿಕಿತ್ಸೆ ಬೇಕು.",
            ml: "ഇത് പല്ലിന്റെ പ്രശ്നമല്ല. നാഡീരോഗ വിദഗ്ധനെ കാണുക."
        },
        doctorAlert: "Trigger zones present. Do not extract teeth unnecessarily."
    },

    // ==========================================
    // 6. SALIVARY GLAND CYSTS
    // ==========================================
    'mucocele': {
        id: 'mucocele',
        category: 'Salivary',
        name: { en: "Mucocele", ta: "உதடு நீர்க்கட்டி", te: "నీటి బుడగ", hi: "पानी की गांठ", kn: "ನೀರು ಗುಳ್ಳೆ", ml: "നീർക്കുമിള" },
        clinicalFeatures: {
            appearance: { en: "Soft, bluish fluid-filled bubble on lower lip.", ta: "கீழ் உதட்டில் நீர் நிரம்பிய குமிழ்." },
            pain: false,
            duration: "Weeks/Months",
            isContagious: false
        },
        riskLevel: 'Low',
        management: {
            en: "Surgical removal (Excision) needed. Will not burst on its own.",
            ta: "அறுவை சிகிச்சை மூலம் அகற்ற வேண்டும்.",
            te: "ఆపరేషన్ ద్వారా తీసివేయాలి.",
            hi: "सर्जरी से निकालना पड़ेगा।",
            kn: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಗತ್ಯ.",
            ml: "ശസ്ത്രക്രിയ ആവശ്യമാണ്."
        },
        doctorAlert: "Remove associated minor salivary gland to prevent recurrence."
    }
};

export class OralMedicineHelper {

    /**
     * Triage logic for White Patches
     * 
     */
    static diagnoseWhitePatch(canWipeOff: boolean): string {
        if (canWipeOff) {
            return "Diagnosis: **Candidiasis (Fungal)**. \nRx: Anti-fungal paint.";
        }
        return "⚠️ ALERT: **Leukoplakia**. This is Pre-Cancerous. \nAction: Biopsy Mandatory.";
    }

    /**
     * Triage for Ulcers
     * "Rule of thumb: > 2 weeks = Danger"
     */
    static assessUlcerRisk(durationWeeks: number, hasPain: boolean): string {
        if (durationWeeks > 2) {
            return "⚠️ **CANCER ALERT:** Non-healing ulcer > 2 weeks. Immediate Biopsy.";
        }
        if (hasPain) {
            return "Diagnosis: Likely Aphthous or Traumatic Ulcer. Monitor for 1 week.";
        }
        return "⚠️ WARNING: Painless ulcers are often more dangerous (Cancer/Syphilis). Investigate.";
    }
}
