import { LocalizedText } from '../types/neoSchema';

// Data derived from: White & Pharoah's Oral Radiology
// Focus: Interpretation, Modality Selection, and Radiation Safety.

export interface RadiographicFeature {
    id: string;
    appearance: 'Radiolucent (Dark)' | 'Radiopaque (White)' | 'Mixed';
    name: LocalizedText;
    commonDiagnoses: string[];
    description: LocalizedText; // Patient-friendly explanation
    clinicalSignificance: string; // Doctor note
}

export const RADIOLOGY_DB: Record<string, RadiographicFeature> = {

    // ==========================================
    // 1. COMMON PATHOLOGIES (The "Dark Spots")
    // ==========================================
    'periapical_radiolucency': {
        id: 'periapical_radiolucency',
        appearance: 'Radiolucent (Dark)',
        name: { en: "Periapical Abscess/Cyst", ta: "வேர் நுனி சீழ்", te: "వేరు చివర ఇన్ఫెక్షన్", hi: "जड़ में मवाद", kn: "ಬೇರಿನ ತುದಿಯಲ್ಲಿ ಕೀವು", ml: "വേരിന്റെ അറ്റത്തെ പഴുപ്പ്" },
        commonDiagnoses: ["Periapical Abscess", "Radicular Cyst", "Granuloma"],
        description: {
            en: "A dark halo around the root tip. This means the bone has dissolved due to infection exiting the tooth.",
            ta: "வேர் நுனியில் கருப்பான வட்டம் உள்ளது. இது எலும்பு அரிப்பை காட்டுகிறது.",
            te: "పంటి వేరు చివర నల్లగా ఉంది. ఎముక అరిగిపోయింది.",
            hi: "जड़ के नीचे काला निशान है। इसका मतलब वहां हड्डी गल गई है।",
            kn: "ಬೇರಿನ ತುದಿಯಲ್ಲಿ ಕಪ್ಪು ಕಲೆ. ಮೂಳೆ ಸವೆತವನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
            ml: "വേരിന്റെ അറ്റത്ത് കറുത്ത പാട്. അണുബാധ കാരണം എല്ല് ദ്രവിച്ചു."
        },
        clinicalSignificance: "Non-vital pulp. RCT or Extraction indicated."
    },
    'interproximal_radiolucency': {
        id: 'interproximal_radiolucency',
        appearance: 'Radiolucent (Dark)',
        name: { en: "Interproximal Caries (Hidden Cavity)", ta: "மறைந்திருக்கும் சொத்தை", hi: "दांतों के बीच की सड़न", te: "దంతాల మధ్య సందుల్లో సడన్", kn: "ಹಲ್ಲುಗಳ ಮಧ್ಯದ ಸವೆತ", ml: "പല്ലുകൾക്കിടയിലെ കേട്" },
        commonDiagnoses: ["Class II Caries"],
        description: {
            en: "A small dark triangle between two teeth on the X-ray. This cavity is usually not visible to the naked eye.",
            ta: "இரண்டு பற்களுக்கு இடையில் கருப்பு நிழல். இது கண்ணுக்கு தெரியாத சொத்தை.",
            te: "రెండు పళ్ళ మధ్య నల్లటి మచ్చ. ఇది బయటకి కనిపించని పిప్పి పన్ను.",
            hi: "दो दांतों के बीच काला निशान। यह छिपी हुई सड़न है।",
            kn: "ಎರಡು ಹಲ್ಲುಗಳ ನಡುವೆ ಕಪ್ಪು ನೆರಳು. ಇದು ಹೊರಗೆ ಕಾಣಿಸದ ಸವೆತ.",
            ml: "രണ്ട് പല്ലുകൾക്കിടയിലുള്ള കറുത്ത നിഴൽ. ഇത് പുറമെ കാണാത്ത കേടാണ്."
        },
        clinicalSignificance: "Enamel/Dentin involvement. Bitewing X-ray confirms depth."
    },
    'horizontal_bone_loss': {
        id: 'horizontal_bone_loss',
        appearance: 'Radiolucent (Dark)',
        name: { en: "Bone Loss (Periodontitis)", ta: "எலும்பு தேய்மானம்", hi: "हड्डी का घिसना", te: "ఎముక తినివేయబడటం", kn: "ಮೂಳೆ ಸವೆತ", ml: "എല്ല് തേയ്മാനം" },
        commonDiagnoses: ["Generalized Periodontitis"],
        description: {
            en: "The bone level has dropped across multiple teeth. The teeth may become loose without immediate care.",
            ta: "பற்களை தாங்கும் எலும்பு மட்டம் குறைந்துள்ளது. பல் ஆடும் நிலை வரலாம்.",
            te: "పళ్ళను పట్టుకునే ఎముక స్థాయి తగ్గిపోయింది. పళ్ళు కదిలే అవకాశం ఉంది.",
            hi: "दांतों की पकड़ कमजोर हो गई है।",
            kn: "ಹಲ್ಲುಗಳನ್ನು ಹಿಡಿದಿಟ್ಟಿರುವ ಮೂಳೆ ಮಟ್ಟ ಕಡಿಮೆಯಾಗಿದೆ.",
            ml: "പല്ലുകളെ താങ്ങിനിർത്തുന്ന എല്ലിന്റെ അളവ് കുറഞ്ഞു."
        },
        clinicalSignificance: "Needs Deep Cleaning (SRP) and Flap Surgery evaluation."
    },

    // ==========================================
    // 2. RADIOPAQUE LESIONS (The "White Spots")
    // ==========================================
    'condensing_osteitis': {
        id: 'condensing_osteitis',
        appearance: 'Radiopaque (White)',
        name: { en: "Condensing Osteitis", ta: "எலும்பு கடினமாதல்", te: "ఎముక సాంద్రత పెరగడం", hi: "हड्डी का सख्त होना", kn: "ಮೂಳೆ ಗಟ್ಟಿಯಾಗುವುದು", ml: "എല്ല് കട്ടിയാകൽ" },
        commonDiagnoses: ["Chronic Inflammation"],
        description: {
            en: "A bright white area around the root. The bone has become extra dense to fight low-grade chronic infection.",
            ta: "வேரை சுற்றி வெள்ளை திட்டு. எலும்பு கடினமாகி உள்ளது.",
            hi: "जड़ के पास सफेद निशान। हड्डी सख्त हो गई है।"
        },
        clinicalSignificance: "Sign of high host resistance. Treat the infected pulp."
    }
};

export class RadiologyHelper {

    /**
     * Modality Selector: Which scan to order?
     */
    static chooseModality(indication: 'Implant' | 'Trauma' | 'Caries' | 'WisdomTooth'): string {

        if (indication === 'Implant') {
            return "✅ **CBCT (3D Scan):** Mandatory. We need to measure bone width and locate the nerve canal accurately. 2D X-rays are insufficient here.";
        }
        if (indication === 'WisdomTooth') {
            return "✅ **OPG (Panorex):** Best overview scan. Shows the entire jaw and nerve position relative to the wisdom tooth.";
        }
        if (indication === 'Caries') {
            return "✅ **Bitewing / IOPA:** High resolution for detecting fine enamel cracks and measuring depth of decay.";
        }
        return "✅ **IOPA:** Standard resolution for individual tooth pain analysis.";
    }

    /**
     * Radiation Safety Advice (Scientific Comparison)
     */
    static explainRadiationSafety(isDigital: boolean, lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        const comparison = isDigital
            ? "Eating 5 Bananas or a 1-hour Flight"
            : "A day in the sun";

        const text: Record<string, string> = {
            en: `🛡️ **Is it Safe?** Yes. We use **Digital Sensors (RVG)** which require 90% less radiation than old film X-rays. \n* One Dental X-ray = ${comparison}. \n* We use a **Lead Apron** to shield your body completely.`,
            ta: `🛡️ **பாதுகாப்பானதா?** ஆம். டிஜிட்டல் எக்ஸ்-ரே மிகவும் பாதுகாப்பானது. \n* இதன் அளவு: 5 வாழைப்பழம் சாப்பிடுவதற்கு சமம். \n* உங்கள் உடலை காக்க 'Lead Apron' கவசம் போர்த்தப்படும்.`,
            te: `🛡️ **ఇది సురక్షితమేనా?** అవును. పాత ఎక్స్-రేల కంటే 90% తక్కువ రేడియేషన్ ఉండే డిజిటల్ సెన్సార్లను ఉపయోగిస్తాము.`,
            hi: `🛡️ **क्या यह सुरक्षित है?** हाँ। हम डिजिटल सेंसर का उपयोग करते हैं जिसमें बहुत कम रेडिएशन होता है।`,
            kn: `🛡️ **ಇದು ಸುರಕ್ಷಿತವೇ?** ಹೌದು. ಡಿಜಿಟಲ್ ಎಕ್ಸ್-ರೇ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ.`,
            ml: `🛡️ **ഇത് സുരക്ഷിതമാണോ?** അതെ. ഡിജിറ്റൽ എക്സ്-റേ വളരെ സുരക്ഷിതമാണ്.`
        };

        return text[lang] || text.en;
    }

    /**
     * Pregnancy Safety Logic
     */
    static checkPregnancySafety(trimester: 'First' | 'Second' | 'Third', isEmergency: boolean): string {
        if (!isEmergency) {
            return "⛔ **Defer:** Avoid elective X-rays during pregnancy unless there is an absolute emergency (Severe Pain/Infection).";
        }

        if (trimester === 'First') {
            return "⚠️ **High Caution:** Early pregnancy (Organogenesis). If emergency, use Double Lead Apron and Thyroid Collar. RVG only.";
        }

        return "✅ **Safe with Protection:** Digital RVG focus is on the jaw, far from the abdomen. Lead Apron must be used.";
    }
}
