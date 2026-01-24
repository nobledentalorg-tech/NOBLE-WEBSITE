import { LocalizedText } from '../types/neoSchema';

// Data derived from: Satyanarayana Biochemistry / Harper's Illustrated

export interface BiochemMarker {
    id: string;
    name: string;
    normalRange: string;
    criticalValue: string; // The "Danger Zone"
    mechanism: LocalizedText; // Why it matters
    dentalRelevance: LocalizedText; // How it affects teeth
    surgicalSafety: LocalizedText; // Can we operate?
}

export const METABOLIC_MARKERS: Record<string, BiochemMarker> = {

    // --- DIABETES MARKERS ---
    'hba1c': {
        id: 'hba1c',
        name: "Glycated Hemoglobin (HbA1c)",
        normalRange: "< 5.7%",
        criticalValue: "> 8.0%",
        mechanism: {
            en: "Measures average blood sugar over the last 3 months. Glucose binds to hemoglobin.",
            ta: "கடந்த 3 மாத சராசரி சர்க்கரை அளவை காட்டுகிறது.",
            te: "గత 3 నెలల సగటు చక్కెర స్థాయి.",
            hi: "पिछले 3 महीनों की औसत शुगर।",
            kn: "ಕಳೆದ 3 ತಿಂಗಳ ಸರಾಸರಿ ಸಕ್ಕರೆ ಮಟ್ಟ.",
            ml: "കഴിഞ്ഞ 3 മാസത്തെ ശരാശരി ഷുഗർ."
        },
        dentalRelevance: {
            en: "High levels (>7%) cause severe gum disease (Periodontitis) and bone loss.",
            ta: "அதிக சர்க்கரை இருந்தால் ஈறு நோய் மற்றும் எலும்பு தேய்மானம் வரும்.",
            te: "షుగర్ ఎక్కువ ఉంటే చిగుళ్ళ వ్యాధి వస్తుంది.",
            hi: "ज्यादा शुगर से मसूड़ों की बीमारी होती है।",
            kn: "ಸಕ್ಕರೆ ಕಾಯಿಲೆ ಇದ್ದರೆ ಒಸಡು ರೋಗ ಬರುತ್ತದೆ.",
            ml: "കൂടുതൽ ഷുഗർ ഉണ്ടെങ്കിൽ മോണരോഗം വരാം."
        },
        surgicalSafety: {
            en: "⚠️ Delayed Healing Risk. Avoid Implants if > 8%.",
            ta: "⚠️ காயம் ஆறாது. இம்பிளான்ட் செய்ய வேண்டாம்.",
            te: "గాయం మానదు. ఇంప్లాంట్ వద్దు.",
            hi: "घाव भरने में देरी। इम्प्लांट से बचें।",
            kn: "ಗಾಯ ಮಾಯುವುದು ತಡವಾಗುತ್ತದೆ.",
            ml: "മുറിവ് ഉണങ്ങാൻ വൈകും."
        }
    },
    'rbs': {
        id: 'rbs',
        name: "Random Blood Sugar (RBS)",
        normalRange: "79 - 140 mg/dL",
        criticalValue: "> 200 mg/dL",
        mechanism: {
            en: "Immediate glucose level in the blood.",
            ta: "உடனடி ரத்த சர்க்கரை அளவு.",
            te: "తక్షణ రక్త చక్కెర స్థాయి.",
            hi: "तत्काल रक्त शर्करा का स्तर।",
            kn: "ತಕ್ಷಣದ ರಕ್ತದ ಸಕ್ಕರೆ ಮಟ್ಟ.",
            ml: "തൽക്ഷണ രക്തത്തിലെ പഞ്ചസാരയുടെ അളവ്."
        },
        dentalRelevance: {
            en: "High sugar provides food for bacteria, causing abscesses.",
            ta: "அதிக சர்க்கரை கிருமிகள் வளர உதவும்.",
            te: "ఎక్కువ చక్కెర బ్యాక్టీరియా పెరగడానికి సహాయపడుతుంది.",
            hi: "अधिक चीनी बैक्टीरिया को बढ़ने में मदद करती है।",
            kn: "ಹೆಚ್ಚಿನ ಸಕ್ಕರೆ ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
            ml: "കൂടുതൽ പഞ്ചസാര ബാക്ടീരിയകളുടെ വളർച്ചയ്ക്ക് കാരണമാകുന്നു."
        },
        surgicalSafety: {
            en: "⛔ Do NOT extract tooth if > 200 mg/dL due to infection risk.",
            ta: "⛔ 200க்கு மேல் இருந்தால் பல் பிடுங்கக் கூடாது.",
            te: "200 కంటే ఎక్కువ ఉంటే పన్ను తీయకూడదు.",
            hi: "200 से ऊपर होने पर दांत न निकालें।",
            kn: "200 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಹಲ್ಲು ಕೀಳಬಾರದು.",
            ml: "200-ൽ കൂടുതൽ ആണെങ്കിൽ പല്ല് പറിക്കരുത്."
        }
    },

    // --- CLOTTING / BLEEDING MARKERS ---
    'inr': {
        id: 'inr',
        name: "INR (International Normalized Ratio)",
        normalRange: "0.8 - 1.1",
        criticalValue: "> 3.0",
        mechanism: {
            en: "Measures how long it takes for blood to clot. Important for heart patients on Warfarin.",
            ta: "ரத்தம் உறைவதற்கு ஆகும் நேரம். இதய நோயாளிகளுக்கு முக்கியம்.",
            te: "రక్తం గడ్డకట్టడానికి పట్టే సమయం.",
            hi: "खून का थक्का जमने का समय।",
            kn: "ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವ ಸಮಯ.",
            ml: "രക്തം കട്ടപിടിക്കാൻ എടുക്കുന്ന സമയം."
        },
        dentalRelevance: {
            en: "High INR causes uncontrollable bleeding after extraction.",
            ta: "அதிக INR இருந்தால் பல் பிடுங்கிய பின் ரத்தம் நிற்காது.",
            te: "రక్తం ఆగదు.",
            hi: "खून बहना नहीं रुकेगा।",
            kn: "ರಕ್ತಸ್ರಾವ ನಿಲ್ಲುವುದಿಲ್ಲ.",
            ml: "രക്തസ്രാവം നിൽക്കില്ല."
        },
        surgicalSafety: {
            en: "✅ Safe for extraction if INR < 2.5. If > 3.0, consult cardiologist.",
            ta: "INR 2.5க்குள் இருந்தால் பாதுகாப்பானது.",
            te: "2.5 లోపు ఉంటే సురక్షితం.",
            hi: "2.5 से कम होने पर सुरक्षित।",
            kn: "2.5 ಕ್ಕಿಂತ ಕಡಿಮೆ ಇದ್ದರೆ ಸುರಕ್ಷಿತ.",
            ml: "2.5-ൽ താഴെയാണെങ്കിൽ സുരക്ഷിതം."
        }
    },
    'platelets': {
        id: 'platelets',
        name: "Platelet Count",
        normalRange: "1.5 - 4.5 Lakhs",
        criticalValue: "< 50,000",
        mechanism: {
            en: "Cells responsible for stopping bleeding.",
            ta: "ரத்தத்தை உறைய வைக்கும் அணுக்கள்.",
            te: "రక్తాన్ని ఆపడానికి కారణమయ్యే కణాలు.",
            hi: "रक्तस्राव रोकने वाली कोशिकाएं।",
            kn: "ರಕ್ತಸ್ರಾವವನ್ನು ತಡೆಯುವ ಜೀವಕೋಶಗಳು.",
            ml: "രക്തസ്രാവം തടയുന്ന കോശങ്ങൾ."
        },
        dentalRelevance: {
            en: "Low platelets (Thrombocytopenia) lead to spontaneous gum bleeding.",
            ta: "குறைந்த தட்டணுக்கள் இருந்தால் ஈறுகளில் ரத்தம் வடியும்.",
            te: "చిగుళ్ళ నుండి రక్తం కారుతుంది.",
            hi: "मसूड़ों से खून आता है।",
            kn: "ಒಸಡುಗಳಿಂದ ರಕ್ತ ಬರುತ್ತದೆ.",
            ml: "മോണയിൽ നിന്ന് രക്തം വരും."
        },
        surgicalSafety: {
            en: "⛔ High bleeding risk if < 50k. Avoid surgery.",
            ta: "⛔ 50,000க்கு குறைவாக இருந்தால் சிகிச்சை வேண்டாம்.",
            te: "సర్జరీ చేయవద్దు.",
            hi: "सर्जरी से बचें।",
            kn: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮಾಡಬೇಡಿ.",
            ml: "ശസ്ത്രക്രിയ ഒഴിവാക്കുക."
        }
    },

    // --- BONE METABOLISM ---
    'vitamin_d': {
        id: 'vitamin_d',
        name: "Vitamin D (25-OH)",
        normalRange: "30 - 100 ng/mL",
        criticalValue: "< 10 ng/mL",
        mechanism: {
            en: "Essential for calcium absorption and bone regeneration.",
            ta: "எலும்பு வளர்ச்சிக்கு மற்றும் கால்சியம் உறிஞ்சுதலுக்கு அவசியம்.",
            te: "ఎముకల బలానికి ముఖ్యం.",
            hi: "हड्डियों की मजबूती के लिए जरूरी।",
            kn: "ಮೂಳೆಗಳ ಆರೋಗ್ಯಕ್ಕೆ ಮುಖ್ಯ.",
            ml: "എല്ലുകളുടെ ആരോഗ്യത്തിന് പ്രധാനം."
        },
        dentalRelevance: {
            en: "Deficiency leads to **Early Implant Failure** and weak jawbone.",
            ta: "குறைபாடு இருந்தால் இம்பிளான்ட் தோல்வியடையலாம்.",
            te: "ఇంప్లాంట్ ఫెయిల్ అయ్యే అవకాశం ఉంది.",
            hi: "इम्प्लांट फेल हो सकता है।",
            kn: "ಇಂಪ್ಲಾಂಟ್ ವಿಫಲವಾಗಬಹುದು.",
            ml: "ഇംപ്ലാന്റ് പരാജയപ്പെടാം."
        },
        surgicalSafety: {
            en: "Supplement recommended before Implant surgery if < 20 ng/mL.",
            ta: "சிகிச்சைக்கு முன் வைட்டமின் D மாத்திரை எடுக்கவும்.",
            te: "సప్లిమెంట్స్ వాడాలి.",
            hi: "सप्लीमेंट्स लें।",
            kn: "ಮಾತ್ರೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
            ml: "സപ്ലിമെന്റുകൾ കഴിക്കുക."
        }
    },
    'calcium': {
        id: 'calcium',
        name: "Serum Calcium",
        normalRange: "9 - 11 mg/dL",
        criticalValue: "> 12 mg/dL",
        mechanism: {
            en: "Mineral building block of teeth and bone.",
            ta: "பல் மற்றும் எலும்பின் அடிப்படை சத்து.",
            te: "పళ్ళు మరియు ఎముకల నిర్మాణం.",
            hi: "दांत और हड्डियों के लिए खनिज।",
            kn: "ಹಲ್ಲು ಮತ್ತು ಮೂಳೆಗಳಿಗೆ ಖನಿಜ.",
            ml: "പല്ലിന്റെയും എല്ലിന്റെയും നിർമ്മാണ ഘടകം."
        },
        dentalRelevance: {
            en: "Hypocalcemia causes delayed eruption and weak enamel.",
            ta: "கால்சியம் குறைபாடு இருந்தால் பற்கள் வலுவிழக்கும்.",
            te: "ఎనామెల్ బలహీనపడుతుంది.",
            hi: "एनामेल कमजोर हो सकता है।",
            kn: "ಎನಾಮೆಲ್ ದುರ್ಬಲಗೊಳ್ಳುತ್ತದೆ.",
            ml: "ഇനാമൽ ദുർബലമാകും."
        },
        surgicalSafety: {
            en: "Routine monitoring needed for osteoporosis patients.",
            ta: "எலும்பு தேய்மானம் உள்ளவர்கள் கவனிக்கவும்.",
            te: "ఎముకల బలహీనత ఉన్నవారు జాగ్రత్త పడాలి.",
            hi: "गठिया के रोगी निगरानी करें।",
            kn: "ಮೂಳೆ ಸವೆತ ಇರುವವರು ಗಮನವಿಡಿ.",
            ml: "ഓസ്റ്റിയോപൊറോസിസ് രോഗികൾ ശ്രദ്ധിക്കുക."
        }
    }
};

// --- NUTRITIONAL DEFICIENCY MAP ---
export const VITAMIN_DEFICIENCIES = {
    'vitamin_c': {
        name: 'Vitamin C (Ascorbic Acid)',
        condition: 'Scurvy',
        oralSigns: {
            en: "Swollen, spongy, bleeding gums. Loose teeth.",
            ta: "வீங்கிய, ரத்தம் வடியும் ஈறுகள்.",
            te: "చిగుళ్ళ వాపు మరియు రక్తం కారడం.",
            hi: "सूजे हुए मसूड़े, खून आना।",
            kn: "ಒಸಡುಗಳ ಊತ ಮತ್ತು ರಕ್ತಸ್ರಾವ.",
            ml: "മോണ വീക്കവും രക്തസ്രാവവും."
        }
    },
    'vitamin_b12': {
        name: 'Vitamin B12 (Cobalamin)',
        condition: 'Anemia',
        oralSigns: {
            en: "Red, smooth, burning tongue (Glossitis). Mouth ulcers.",
            ta: "நாக்கு எரிச்சல், வாய் புண்.",
            te: "నోటి పూత మరియు నాలుక మంట.",
            hi: "जीभ में जलन, छाले।",
            kn: "ಬಾಯಿ ಹುಣ್ಣು ಮತ್ತು ನಾಲಿಗೆ ಉರಿಯುವುದು.",
            ml: "വായയിലെ പുണ്ണും നാവിലെ നരിച്ചിലും."
        }
    },
    'iron': {
        name: 'Iron',
        condition: 'Iron Deficiency Anemia',
        oralSigns: {
            en: "Pale gums, burning tongue, angular cheilitis (cracks at corners of lips).",
            ta: "வெளுத்த ஈறுகள், உதட்டு ஓரத்தில் வெடிப்பு.",
            te: "పైదవి మూలల్లో పగుళ్లు.",
            hi: "पीले मसूड़े, होठों के कोनों में दरारें।",
            kn: "ತುಟಿಯ ಮೂಲೆಗಳಲ್ಲಿ ಬಿರುಕು.",
            ml: "ചുണ്ടിന്റെ കോണുകളിൽ വിള്ളൽ."
        }
    }
};

export class BiochemHelper {
    /**
     * Checks if a patient is safe for surgery based on lab values.
     */
    static checkSurgerySafety(markerId: string, value: number): string {
        const marker = METABOLIC_MARKERS[markerId];
        if (!marker) return "Unknown Marker";

        // Logic for common markers
        if (markerId === 'hba1c' && value > 8.0) return `⚠️ UNSAFE: HbA1c ${value}% is too high. Risk of infection.`;
        if (markerId === 'rbs' && value > 200) return `⛔ STOP: RBS ${value} is critical. No extraction.`;
        if (markerId === 'inr' && value > 3.0) return `⛔ STOP: INR ${value} indicates high bleeding risk.`;
        if (markerId === 'platelets' && value < 50000) return `⛔ STOP: Platelets ${value} too low.`;

        return "✅ Values within acceptable surgical limits.";
    }

    /**
     * Identifies vitamin deficiency based on symptoms.
     */
    static analyzeDeficiency(symptom: string): string | null {
        const s = symptom.toLowerCase();
        if (s.includes('bleed')) return `Possible ${VITAMIN_DEFICIENCIES['vitamin_c'].name} Deficiency.`;
        if (s.includes('burn') || s.includes('tongue')) return `Possible ${VITAMIN_DEFICIENCIES['vitamin_b12'].name} or Iron Deficiency.`;
        if (s.includes('crack') || s.includes('lip')) return `Possible Iron or B-Complex Deficiency.`;
        return null;
    }
}
