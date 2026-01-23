import { LocalizedText } from '../types/neoSchema';

// Data derived from: Robbins & Cotran Pathologic Basis of Disease
// Focus: Systemic Disease Management in Dentistry

export interface PathologicalState {
    id: string;
    category: 'Cardiovascular' | 'Endocrine' | 'Respiratory' | 'Infectious' | 'Hematologic' | 'Neoplasia';
    name: LocalizedText;
    mechanism: string;
    riskLevel: 'Low' | 'Moderate' | 'High' | 'Emergency';
    dentalImplications: LocalizedText; // The "What to do" for the patient
    clinicalAlert: string; // Specific doctor warning (English only is fine for doctor)
}

export const GENERAL_PATHOLOGY_DB: Record<string, PathologicalState> = {

    // --- 1. ENDOCRINE DISORDERS ---
    'diabetes_mellitus': {
        id: 'diabetes_mellitus',
        category: 'Endocrine',
        name: { en: "Diabetes Mellitus (Type 2)", ta: "சர்க்கரை நோய்", te: "మధుమేహం (షుగర్ వ్యాధి)", hi: "मधुमेह (शुगर)", kn: "ಮಧುಮೇಹ (ಶುಗರ್)", ml: "പ്രമേഹം (ഷുഗർ)" },
        mechanism: "Chronic hyperglycemia causes microvascular damage and impairs neutrophil function.",
        riskLevel: 'Moderate',
        dentalImplications: {
            en: "High risk of gum infection and delayed healing. Morning appointments are best.",
            ta: "ஈறு தொற்று மற்றும் காயம் ஆறுவதில் தாமதம் ஏற்படலாம். காலை நேரம் சிறந்தது.",
            te: "చిగుళ్ళ ఇన్ఫెక్షన్ రావచ్చు. గాయం మానడం ఆలస్యం అవుతుంది. ఉదయం డాక్టర్ని కలవండి.",
            hi: "मसूड़ों में संक्रमण और घाव भरने में देरी हो सकती है। सुबह का समय बेहतर है।",
            kn: "ಒಸಡು ಸೋಂಕು ಮತ್ತು ಗಾಯ ಮಾಯುವುದು ತಡವಾಗಬಹುದು. ಬೆಳಿಗ್ಗೆ ಭೇಟಿ ನೀಡುವುದು ಉತ್ತಮ.",
            ml: "മോണരോഗം വരാൻ സാധ്യതയുണ്ട്. മുറിവ് ഉണങ്ങാൻ വൈകും. രാവിലെ ഡോക്ടറെ കാണുന്നതാണ് നല്ലത്."
        },
        clinicalAlert: "Ideally schedule morning appointments. Check RBS/HbA1c before surgery."
    },
    'hyperthyroidism': {
        id: 'hyperthyroidism',
        category: 'Endocrine',
        name: { en: "Hyperthyroidism", ta: "தைராய்டு நோய்", te: "థైరాయిడ్ సమస్య", hi: "हाइपरथायरायडिज्म", kn: "ಥೈರಾಯ್ಡ್ ಸಮಸ್ಯೆ", ml: "തൈറോയ്ഡ് രോഗം" },
        mechanism: "Excess T3/T4 hormones increase metabolic rate and cardiac sensitivity.",
        riskLevel: 'High',
        dentalImplications: {
            en: "Some anesthetics causes rapid heartbeat. Tell your doctor about your medication.",
            ta: "சில மயக்க மருந்துகள் இதயத் துடிப்பை அதிகரிக்கலாம். மருத்துவரிடம் தெரிவிக்கவும்.",
            te: "మత్తు మందు వల్ల గుండె దడ రావచ్చు. డాక్టర్ కి చెప్పండి.",
            hi: "कुछ एनेस्थीसिया से दिल की धड़कन बढ़ सकती है। डॉक्टर को बताएं।",
            kn: "ಅರಿವಳಿಕೆ ಮದ್ದು ಹೃದಯ ಬಡಿತವನ್ನು ಹೆಚ್ಚಿಸಬಹುದು. ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ.",
            ml: "ചില മരവിപ്പിക്കൽ മരുന്നുകൾ ഹൃദയമിടിപ്പ് കൂട്ടാം. ഡോക്ടറോട് പറയുക."
        },
        clinicalAlert: "⚠️ LIMIT EPINEPHRINE. Avoid retraction cords with adrenaline."
    },

    // --- 2. CARDIOVASCULAR DISORDERS ---
    'hypertension': {
        id: 'hypertension',
        category: 'Cardiovascular',
        name: { en: "Hypertension (High BP)", ta: "உயர் ரத்த அழுத்தம்", te: "అధిక రక్తపోటు (BP)", hi: "हाई बीपी", kn: "ಅಧಿಕ ರಕ್ತದೊತ್ತಡ (BP)", ml: "അധിക രക്തസമ്മർദ്ദം (BP)" },
        mechanism: "Increased vascular resistance puts strain on the heart.",
        riskLevel: 'Moderate',
        dentalImplications: {
            en: "Do not stop BP medication. Inform doctor if you feel dizzy.",
            ta: "BP மாத்திரையை நிறுத்த வேண்டாம். தலைசுற்றல் இருந்தால் சொல்லவும்.",
            te: "BP మందులు ఆపవద్దు. కళ్ళు తిరిగితే చెప్పండి.",
            hi: "BP की दवा बंद न करें। चक्कर आए तो बताएं।",
            kn: "BP ಮಾತ್ರೆ ನಿಲ್ಲಿಸಬೇಡಿ. ತಲೆ ಸುತ್ತು ಬಂದರೆ ಹೇಳಿ.",
            ml: "BP ഗുളിക മുടക്കരുത്. തലകറക്കം അനുഭവപ്പെട്ടാൽ പറയുക."
        },
        clinicalAlert: "Monitor BP. If > 160/100, defer elective treatment."
    },
    'angina_pectoris': {
        id: 'angina_pectoris',
        category: 'Cardiovascular',
        name: { en: "Angina (Chest Pain)", ta: "நெஞ்சு வலி", te: "గుండె నొప్పి", hi: "छाती में दर्द", kn: "ಎದೆ ನೋವು", ml: "നെഞ്ചുവേദന" },
        mechanism: "Transient ischemia to heart muscle.",
        riskLevel: 'High',
        dentalImplications: {
            en: "Bring your spray/tablet (Sorbitrate) to the clinic. Tell us if you feel chest tightness.",
            ta: "உங்கள் மாத்திரையை (Sorbitrate) கிளினிக் கொண்டு வரவும். நெஞ்சு வலி வந்தால் உடனே சொல்லவும்.",
            te: "మీ మాత్రలు (Sorbitrate) వెంట తెచ్చుకోండి. ఛాతీ నొప్పి వస్తే చెప్పండి.",
            hi: "अपनी दवा (Sorbitrate) साथ लाएं। छाती में भारीपन लगे तो बताएं।",
            kn: "ನಿಮ್ಮ ಮಾತ್ರೆಗಳನ್ನು ಜೊತೆಗೆ ತನ್ನಿ. ಎದೆ ನೋವು ಬಂದರೆ ತಿಳಿಸಿ.",
            ml: "നിങ്ങളുടെ മരുന്ന് കയ്യിൽ കരുതുക. നെഞ്ചുവേദന അനുഭവപ്പെട്ടാൽ പറയുക."
        },
        clinicalAlert: "⚠️ Keep Nitroglycerin ready. Short, morning appointments."
    },
    'infective_endocarditis': {
        id: 'infective_endocarditis',
        category: 'Cardiovascular',
        name: { en: "Heart Valve Risk", ta: "இதய வால்வு தொற்று", te: "గుండె వాల్వ్ సమస్య", hi: "हृदय वाल्व संक्रमण", kn: "ಹృದಯ ಕವಾటದ సోంಕು", ml: "വാൽവ് രോഗം" },
        mechanism: "Bacteremia from dental procedures can colonize damaged valves.",
        riskLevel: 'High',
        dentalImplications: {
            en: "You MUST take antibiotics 1 hour before dental treatment.",
            ta: "சிகிச்சைக்கு 1 மணி நேரத்திற்கு முன் ஆன்டிபயாடிக் கண்டிப்பாக எடுக்க வேண்டும்.",
            te: "చికిత్సకు గంట ముందు యాంటీబయాటిక్ తప్పనిసరిగా వేసుకోవాలి.",
            hi: "इलाज से 1 घंटे पहले एंटीबायोटिक लेना अनिवार्य है।",
            kn: "ಚಿಕಿತ್ಸೆಗೆ 1 ಗಂಟೆ ಮೊದಲು ಆಂಟಿಬಯಾಟಿಕ್ ತೆಗೆದುಕೊಳ್ಳಬೇಕು.",
            ml: "ചികിത്സയ്ക്ക് ഒരു മണിക്കൂർ മുമ്പ് ആന്റിബയോട്ടിക് കഴിക്കണം."
        },
        clinicalAlert: "Follow AHA Guidelines (Amox 2g). Prophylaxis mandatory."
    },

    // --- 3. RESPIRATORY DISORDERS ---
    'asthma': {
        id: 'asthma',
        category: 'Respiratory',
        name: { en: "Asthma", ta: "ஆஸ்துமா", te: "ఆస్తమా (ఉబ్బసం)", hi: "दमा (अस्थमा)", kn: "ಅಸ್ತಮಾ (ದಮ್ಮು)", ml: "ആസ്ത്മ" },
        mechanism: "Airway hyper-responsiveness causing bronchospasm.",
        riskLevel: 'Moderate',
        dentalImplications: {
            en: "Bring your inhaler. Avoid Aspirin/Painkillers without asking doctor.",
            ta: "இன்ஹேலரை (Inhaler) கொண்டு வரவும். ஆஸ்பிரின் மருந்தை தவிர்க்கவும்.",
            te: "ఇన్హేలర్ వెంట తెచ్చుకోండి. ఆస్పిరిన్ మందులు వాడకూడదు.",
            hi: "अपना इनहेलर साथ लाएं। एस्पिरिन जैसी दवाएं न लें।",
            kn: "ಇನ್ಹೇಲರ್ ತನ್ನಿ. ಆಸ್ಪಿರಿನ್ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ.",
            ml: "ഇൻഹേലർ കൊണ്ടുവരിക. ആസ്പിരിൻ ഗുളികകൾ ഒഴിവാക്കുക."
        },
        clinicalAlert: "Avoid NSAIDs (Aspirin/Ibuprofen). Use Paracetamol."
    },

    // --- 4. HEMATOLOGIC (Bleeding) ---
    'thrombocytopenia': {
        id: 'thrombocytopenia',
        category: 'Hematologic',
        name: { en: "Low Platelets", ta: "குறைந்த தட்டணுக்கள்", te: "ప్లేట్లెట్స్ తక్కువ", hi: "प्लेटलेट्स की कमी", kn: "ಪ್ಲೇಟ್ಲೆಟ್ ಕೊರತೆ", ml: "പ്ലേറ്റ്ലെറ്റ് കുറവ്" },
        mechanism: "Low platelet count leads to poor clotting.",
        riskLevel: 'High',
        dentalImplications: {
            en: "Gums may bleed easily. Do not extract teeth without blood test.",
            ta: "ஈறுகளில் ரத்தம் வரலாம். ரத்த பரிசோதனை இல்லாமல் பல் எடுக்கக் கூடாது.",
            te: "చిగుళ్ళ నుండి రక్తం రావచ్చు. బ్లడ్ టెస్ట్ లేకుండా పన్ను తీయకూడదు.",
            hi: "मसूड़ों से खून आ सकता है। बिना टेस्ट के दांत न निकालें।",
            kn: "ಒಸಡುಗಳಲ್ಲಿ ರಕ್ತಸ್ರಾವವಾಗಬಹುದು. ರಕ್ತ ಪರೀಕ್ಷೆ ಇಲ್ಲದೆ ಹಲ್ಲು ಕೀಳಬಾರದು.",
            ml: "മോണയിൽ നിന്ന് രക്തം വരാം. രക്തപരിശോധന ഇല്ലാതെ പല്ല് പറിക്കരുത്."
        },
        clinicalAlert: "If Platelets < 50,000: NO SURGERY. Refer to hospital."
    },

    // --- 5. INFECTIOUS DISEASES ---
    'hepatitis_b': {
        id: 'hepatitis_b',
        category: 'Infectious',
        name: { en: "Hepatitis B / C", ta: "மஞ்சள் காமாலை", te: "హెపటైటిస్ (కామెర్లు)", hi: "हेपेटाइटिस (पीलिया)", kn: "ಕಾಮಾಲೆ", ml: "മഞ്ഞപ്പിത്തം" },
        mechanism: "Viral infection causing liver inflammation.",
        riskLevel: 'High',
        dentalImplications: {
            en: "Liver affects clotting. Inform doctor to ensure safe sterilization.",
            ta: "கல்லீரல் பாதிப்பு ரத்தம் உறைவதை தடுக்கும். மருத்துவரிடம் முன்கூட்டியே சொல்லவும்.",
            te: "లివర్ సమస్య వల్ల రక్తం గడ్డకట్టదు. డాక్టర్ కి ముందే చెప్పాలి.",
            hi: "लिवर की समस्या से खून नहीं जमता। डॉक्टर को पहले बताएं।",
            kn: "ಲಿವರ್ ಸಮಸ್ಯೆಯಿಂದ ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವುದಿಲ್ಲ. ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ.",
            ml: "കരൾ രോഗം രക്തം കട്ടപിടിക്കുന്നതിനെ ബാധിക്കും. ഡോക്ടറോട് പറയുക."
        },
        clinicalAlert: "Check INR/PT. Use Double Gloving. Strict Sterilization."
    },
    'tuberculosis': {
        id: 'tuberculosis',
        category: 'Infectious',
        name: { en: "Tuberculosis (TB)", ta: "காசநோய் (TB)", te: "టి.బి (క్షయ)", hi: "टीबी (तपेदिक)", kn: "ಕ್ಷಯ ರೋಗ (TB)", ml: "ക്ഷയരോഗം (TB)" },
        mechanism: "Airborne bacterial infection.",
        riskLevel: 'High',
        dentalImplications: {
            en: "If you have active cough, dental treatment must be delayed.",
            ta: "தொடர் இருமல் இருந்தால் சிகிச்சை செய்யக்கூடாது. பரவும் அபாயம் உள்ளது.",
            te: "దగ్గు ఉంటే చికిత్స వాయిదా వేయాలి. ఇతరులకు సోకే ప్రమాదం ఉంది.",
            hi: "अगर खांसी है तो इलाज टालना होगा। यह फैल सकता है।",
            kn: "ಕೆಮ್ಮು ಇದ್ದರೆ ಚಿಕಿತ್ಸೆ ಮುಂದೂಡಬೇಕು.",
            ml: "ചുമ ഉണ്ടെങ്കിൽ ചികിത്സ മാറ്റിവയ്ക്കണം."
        },
        clinicalAlert: "If Active TB: DEFER TREATMENT. Emergency only in hospital setting."
    },

    // --- 6. CANCER ---
    'oral_cancer': {
        id: 'oral_cancer',
        category: 'Neoplasia',
        name: { en: "Oral Cancer Risk", ta: "வாய் புற்றுநோய்", te: "నోటి క్యాన్సర్", hi: "मुंह का कैंसर", kn: "ಬಾಯಿಯ ಕ್ಯಾನ್ಸರ್", ml: "വായയിലെ ക്യാൻസർ" },
        mechanism: "Malignant growth usually linked to tobacco.",
        riskLevel: 'Emergency',
        dentalImplications: {
            en: "Ulcers not healing for >2 weeks need immediate testing.",
            ta: "2 வாரங்களுக்கு மேல் ஆறாத புண் இருந்தால் உடனே பரிசோதிக்கவும்.",
            te: "2 వారాలైనా మానని పుండు ఉంటే వెంటనే పరీక్ష చేయించుకోండి.",
            hi: "2 हफ्ते से ज्यादा पुराना छाला हो तो तुरंत जांच कराएं।",
            kn: "2 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲದ ಹುಣ್ಣು ಇದ್ದರೆ ಪರೀಕ್ಷಿಸಿ.",
            ml: "2 ആഴ്ചയായിട്ടും ഉണങ്ങാത്ത മുറിവുണ്ടെങ്കിൽ പരിശോധിക്കണം."
        },
        clinicalAlert: "Immediate Biopsy Referral."
    }
};

export class PathologyHelper {
    /**
     * Triage logic for systemic diseases
     * Returns a doctor-facing alert + patient-facing advice
     */
    static getRiskAssessment(conditionId: string, lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        const cond = GENERAL_PATHOLOGY_DB[conditionId];
        if (!cond) return "";

        const advice = cond.dentalImplications[lang] || cond.dentalImplications.en;

        if (cond.riskLevel === 'High' || cond.riskLevel === 'Emergency') {
            return `⚠️ **HIGH RISK:** ${advice}`;
        }
        return `ℹ️ **Note:** ${advice}`;
    }
}
