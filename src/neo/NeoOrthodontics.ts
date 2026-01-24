import { LocalizedText } from '../types/neoSchema';

// Data derived from: Proffit's Contemporary Orthodontics
// Focus: Biomechanics, Facial Profile Aesthetics, and Localized Patient Education

export interface OrthoCondition {
    id: string;
    class: 'Class I' | 'Class II' | 'Class III';
    name: LocalizedText;
    description: LocalizedText;
    facialProfile: 'Convex' | 'Straight' | 'Concave';
    mechanism: LocalizedText; // How treatment works
    extractionIndication: string;
    contraindication: string;
}

export interface OrthoAppliance {
    id: string;
    name: LocalizedText;
    type: "Fixed" | "Removable";
    bestFor: LocalizedText;
    patientPitch: LocalizedText; // The "Sales Script"
}

// ==========================================
// 1. DIAGNOSIS DATABASE (The "Why")
// ==========================================
export const ORTHO_DB: Record<string, OrthoCondition> = {

    // --- CLASS I: CROWDING & PROTRUSION ---
    'class_1_crowding': {
        id: 'class_1_crowding',
        class: 'Class I',
        name: { en: "Crowded / Irregular Teeth", ta: "வரிசை மாறிய பற்கள்", te: "గజిబిజి పళ్ళు", hi: "टेढ़े-मेढ़े दांत", kn: "ಅನಿಯಮಿತ ಹಲ್ಲುಗಳು", ml: "നിരതെറ്റിയ പല്ലുകൾ" },
        description: {
            en: "Teeth are too big for the jaw size, causing them to overlap.",
            ta: "தாடை சிறியதாக இருப்பதால் பற்கள் ஒன்றன் மேல் ஒன்று ஏறி உள்ளது.",
            hi: "जबड़ा छोटा होने के कारण दांत एक-दूसरे पर चढ़ गए हैं।"
        },
        facialProfile: 'Straight',
        mechanism: {
            en: "We create space by expanding the jaw or polishing between teeth (IPR).",
            ta: "பற்களை லேசாக இழைத்து அல்லது தாடையை விரிவுபடுத்தி இடத்தை உருவாக்குவோம்.",
            te: "పళ్ళ మధ్య చిన్న స్థలం చేసి సరిచేస్తాము.",
            hi: "दांतों के बीच थोड़ी जगह बनाकर सीधा करेंगे।",
            kn: "ದವಡೆಯನ್ನು ವಿಸ್ತರಿಸಿ ಜಾಗವನ್ನು ಮಾಡುತ್ತೇವೆ.",
            ml: "പല്ലുകൾക്കിടയിൽ സ്ഥലം ഉണ്ടാക്കി നിരപ്പにします."
        },
        extractionIndication: "Only if crowding > 10mm.",
        contraindication: "Flat Face (Extraction will age the face)."
    },

    'bimaxillary_protrusion': {
        id: 'bimaxillary_protrusion',
        class: 'Class I',
        name: { en: "Bimaxillary Protrusion (Forwardly Placed Teeth)", ta: "முன்னால் நீட்டிக்கொண்டிருக்கும் பற்கள்", te: "ఎత్తు పళ్ళు", hi: "बाहर निकले हुए दांत", kn: "ಮುಂದಕ್ಕೆ ಚಾಚಿಕೊಂಡಿರುವ ಹಲ್ಲುಗಳು", ml: "ഉന്തി നിൽക്കുന്ന പല്ലുകൾ" },
        description: {
            en: "Both upper and lower teeth stick out. Lips often cannot close naturally.",
            ta: "மேல் மற்றும் கீழ் பற்கள் முன்னால் உள்ளன. வாய் மூட சிரமமாக இருக்கும்.",
            hi: "मुंह बंद करने में दिक्कत होती है।"
        },
        facialProfile: 'Convex', // Full lips
        mechanism: {
            en: "We remove 4 premolars and pull the front teeth back. This dramatically improves your side profile.",
            ta: "4 பற்களை அகற்றி, முன் பற்களை பின்னுக்கு இழுப்போம். இதனால் முகம் அழகாகும்.",
            te: "4 పళ్ళు తీసి, మిగిలిన పళ్ళను వెనక్కి లాగుతాము. దీనివల్ల ముఖం అందంగా మారుతుంది.",
            hi: "4 दांत निकालकर बाकी दांतों को पीछे करेंगे। इससे चेहरा सुंदर दिखेगा।",
            kn: "4 ಹಲ್ಲುಗಳನ್ನು ತೆಗೆದು ಉಳಿದವುಗಳನ್ನು ಹಿಂದಕ್ಕೆ ತಳ್ಳುತ್ತೇವೆ.",
            ml: "4 പല്ലുകൾ നീക്കം ചെയ്ത് മുൻപല്ലുകൾ പിന്നിലേക്ക് വലിക്കും."
        },
        extractionIndication: "Mandatory 'All 4s' Extraction (14, 24, 34, 44).",
        contraindication: "None. Best results with extraction."
    },

    // --- CLASS II: SMALL LOWER JAW ---
    'class_2_div_1': {
        id: 'class_2_div_1',
        class: 'Class II',
        name: { en: "Small Lower Jaw (Class II)", ta: "சிறிய கீழ் தாடை", te: "చిన్న క్రింది దవడ", hi: "छोटा निचला जबड़ा", kn: "ಚಿಕ್ಕ ಕೆಳ ದವಡೆ", ml: "ചെറിയ താഴ്ന്ന താടിയെല്ല്" },
        description: {
            en: "The lower jaw is undeveloped, making upper teeth look very prominent.",
            ta: "கீழ் தாடை வளர்ச்சி குறைவு. இதனால் மேல் பல் முன்னால் தெரிக்கிறது.",
            hi: "निचला जबड़ा पीछे रह गया है।"
        },
        facialProfile: 'Convex',
        mechanism: {
            en: "Functional Appliance (Twin Block) helps the lower jaw grow forward (Best at age 10-12).",
            ta: "தாடை வளர்ச்சியைத் தூண்டும் கருவி (Twin Block) மூலம் சரிசெய்யலாம்.",
            te: "దవడ పెరిగేలా చేసే పరికరం వాడాలి.",
            hi: "जबड़े को बढ़ाने वाली मशीन लगाएंगे।",
            kn: "ದವಡೆ ಬೆಳವಣಿಗೆಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಬೇಕು.",
            ml: "താടിയെല്ലിന്റെ വളർച്ചയ്ക്കുള്ള ചികിത്സ."
        },
        extractionIndication: "Avoid in kids. Camouflage extraction in adults.",
        contraindication: "Do not extract if growth potential exists."
    },

    // --- CLASS III: BIG LOWER JAW ---
    'class_3_skeletal': {
        id: 'class_3_skeletal',
        class: 'Class III',
        name: { en: "Large Lower Jaw (Underbite)", ta: "பெரிய கீழ் தாடை", te: "పెద్ద క్రింది దవడ", hi: "बड़ा निचला जबड़ा", kn: "ದೊಡ್ಡ ಕೆಳ ದವಡೆ", ml: "വലിയ താഴ്ന്ന താടിയెല്ല്" },
        description: {
            en: "Lower teeth bite IN FRONT of upper teeth.",
            ta: "கீழ் பற்கள் மேல் பற்களை விட முன்னால் உள்ளன.",
            hi: "नीचे के दांत आगे हैं।"
        },
        facialProfile: 'Concave',
        mechanism: {
            en: "Reverse Pull Headgear (Face Mask) to pull upper jaw forward.",
            ta: "முக கவசம் (Face Mask) மூலம் மேல் தாடையை முன்னால் இழுக்க வேண்டும்.",
            te: "ఫేస్ మాస్క్ వాడాలి.",
            hi: "फेस मास्क लगाना होगा।",
            kn: "ಫೇಸ್ ಮಾಸ್ಕ್ ಬಳಸಬೇಕು.",
            ml: "ഫേസ് മാസ്ക് ഉപയോഗിക്കണം."
        },
        extractionIndication: "Rarely works.",
        contraindication: "Camouflage often fails."
    }
};

// ==========================================
// 2. APPLIANCE DATABASE (The "How")
// ==========================================
export const ORTHO_APPLIANCES: Record<string, OrthoAppliance> = {
    'metal_braces': {
        id: 'metal_braces',
        name: { en: "Metal Braces", ta: "மெட்டல் கிளிப்", te: "మెటల్ క్లిప్", hi: "मेटल ब्रेसिज़", kn: "ಮೆಟಲ್ ಬ್ರೇಸ್‌ಗಳು", ml: "മെറ്റൽ ബ്രേസുകൾ" },
        type: "Fixed",
        bestFor: { en: "Complex cases requiring extraction.", ta: "பல் அகற்ற வேண்டிய சிகிச்சைக்கு சிறந்தது." },
        patientPitch: {
            en: "Strongest & Fastest. Best for pulling teeth back into gaps.",
            ta: "மிகவும் வலிமையானது. சிக்கலான பற்களை சீரமைக்க சிறந்தது.",
            te: "చాలా గట్టిగా ఉంటుంది. పళ్ళు త్వరగా సెట్ అవుతాయి.",
            hi: "सबसे मजबूत और तेज।",
            kn: "ಅತ್ಯಂತ ಬಲವಾದದ್ದು.",
            ml: "ഏറ്റവും ശക്തമായത്."
        }
    },
    'ceramic_braces': {
        id: 'ceramic_braces',
        name: { en: "Ceramic (Tooth Coloured) Braces", ta: "செராமிக் கிளிப்", te: "సిరామిక్ క్లిప్", hi: "सिरेमिक ब्रेसिज़", kn: "ಸೆರಾಮಿಕ್ ಬ್ರೇಸ್‌ಗಳು", ml: "സെറാമിക് ബ്രേസുകൾ" },
        type: "Fixed",
        bestFor: { en: "Adults concerned about looks.", ta: "கிளிப் தெரியக்கூடாது என்று நினைப்பவர்களுக்கு." },
        patientPitch: {
            en: "Less visible than metal. Works almost as well as metal braces.",
            ta: "பல் நிறத்திலேயே இருப்பதால் வெளியே அதிகம் தெரியாது.",
            te: "పంటి రంగులోనే ఉంటుంది. ఎవరికీ కనిపించదు.",
            hi: "दांत के रंग का होता है। कम दिखता है।",
            kn: "ಹಲ್ಲಿನ ಬಣ್ಣದಲ್ಲೇ ಇರುತ್ತದೆ.",
            ml: "പല്ലിന്റെ നിറത്തിൽ ഉള്ളത്."
        }
    },
    'aligners': {
        id: 'aligners',
        name: { en: "Clear Aligners (Invisalign)", ta: "கண்ணாடி போன்ற அலைனர்", te: "కనిపించని క్లిప్ (Aligners)", hi: "इनविजिबल एलाइनर्स", kn: "ಸ್ಪಷ್ಟ ಅಲೈನರ್‌ಗಳು", ml: "ക്ലിയർ അലൈനറുകൾ" },
        type: "Removable",
        bestFor: { en: "Non-extraction mild crowding.", ta: "லேசான பல் வரிசை மாற்றம்." },
        patientPitch: {
            en: "Invisible, Removable, and Comfortable. No diet restrictions.",
            ta: "கண்ணுக்கு தெரியாது. சாப்பிடும் போது கழட்டி வைக்கலாம்.",
            te: "కనిపించదు. భోజనం చేసేటప్పుడు తీసివేయవచ్చు.",
            hi: "दिखता नहीं है। खाने के समय निकाल सकते हैं।",
            kn: "ಕಾಣುವುದಿಲ್ಲ. ಊಟ ಮಾಡುವಾಗ ತೆಗೆಯಬಹುದು.",
            ml: "കാണാൻ കഴിയില്ല. ഭക്ഷണം കഴിക്കുമ്പോൾ ഊരി വെക്കാം."
        }
    }
};

export class OrthoHelper {

    /**
     * Decision Logic for "To Extract or Not?"
     */
    static checkExtractionLogic(profile: 'Convex' | 'Straight' | 'Concave', crowdingMM: number): string {

        // Scenario 1: Convex Profile (Protrusion)
        if (profile === 'Convex') {
            return "✅ **Advice:** Extracting teeth is HIGHLY RECOMMENDED. It will push your lips back and improve your side profile significantly.";
        }

        // Scenario 2: Straight Profile
        if (profile === 'Straight' && crowdingMM < 5) {
            return "⚠️ **Warning:** Do NOT extract. Your face is already balanced. Removing teeth will make you look older ('Dished-in' face).";
        }

        return "⚖️ **Balanced:** Borderline case. We can try non-extraction first.";
    }

    /**
     * Comparison Script for Braces vs Aligners
     */
    static compareAppliances(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') {
            return "மெட்டல் கிளிப்: விலை குறைவு, ஆனால் வெளியே தெரியும்.\nஅலைனர் (Invisalign): விலை அதிகம், ஆனால் கண்ணுக்கு தெரியாது, கழட்டி மாட்டலாம்.";
        }
        if (lang === 'te') {
            return "మెటల్ క్లిప్: తక్కువ ఖరీదు, కానీ కనిపిస్తుంది.\nఅలైనర్స్: ఖరీదైనవి, కానీ కనిపించవు, ఎప్పుడు కావాలంటే అప్పుడు తీసివేయవచ్చు.";
        }
        if (lang === 'hi') {
            return "मेटल ब्रेसिज़: सस्ते और असरदार, पर दिखते हैं।\nएलाइनर्स: महंगे और अदृश्य, इन्हें कभी भी निकाला जा सकता है।";
        }
        return "Metal Braces: Cost-effective, very precise, but visible.\nAligners: Premium, invisible, removable, but strictly for disciplined patients.";
    }
}
