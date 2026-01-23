import { LocalizedText } from '../types/neoSchema';

// Data derived from: McDonald and Avery's Dentistry for the Child and Adolescent
// Focus: Child Psychology, Space Management, Trauma, and Drug Safety.

export interface PedoTreatment {
    id: string;
    name: LocalizedText;
    indication: LocalizedText;
    procedure: LocalizedText;
    contraindication?: string;
    parentAdvice: LocalizedText; // Critical for calming parents
}

export const PEDO_CLINICAL_DB: Record<string, PedoTreatment> = {

    // ==========================================
    // 1. PULP THERAPY (Baby Root Canals)
    // ==========================================

    'pulpotomy': {
        id: 'pulpotomy',
        name: { en: "Pulpotomy (Baby Root Treatment)", ta: "பால் பல் நரம்பு சிகிச்சை", te: "చిన్న పిల్లల రూట్ కెనాల్", hi: "बच्चों का रूट कैनाल", kn: "ಮಕ್ಕಳ ಬೇರು ಚಿಕಿತ್ಸೆ", ml: "കുട്ടികളുടെ വേരുചികിത്സ" },
        indication: { en: "Decay affecting the top part of the nerve only. Tooth is alive.", ta: "பல் நரம்பின் மேல் பகுதி மட்டும் பாதிப்பு." },
        procedure: { en: "Remove infected top pulp -> Place MTA/Formocresol -> SS Crown.", ta: "பாதிக்கப்பட்ட நரம்பை நீக்கி மருந்து வைப்பது." },
        parentAdvice: {
            en: "We only remove the infected part. The tooth stays alive to hold space for the permanent tooth.",
            ta: "நாங்கள் கெட்டுப்போன நரம்பை மட்டுமே நீக்குவோம். இது வருங்கால பல்லுக்கு இடத்தை பாதுகாக்கும்.",
            te: "మేము పాడైపోయిన నరాల భాగాన్ని మాత్రమే తీసివేస్తాము. ఇది శాశ్వత పన్నుకు స్థలాన్ని కాపాడుతుంది.",
            hi: "हम केवल खराब नसों को निकालते हैं। यह पक्के दांत के लिए जगह बचाकर रखता है।",
            kn: "ನಾವು ಸೋಂಕಿತ ನರವನ್ನು ಮಾತ್ರ ತೆಗೆಯುತ್ತೇವೆ. ಇದು ಶಾಶ್ವತ ಹಲ್ಲಿಗೆ ಜಾಗವನ್ನು ಉಳಿಸುತ್ತದೆ.",
            ml: "അണുബാധയുള്ള ഭാഗം മാത്രമേ നീക്കം ചെയ്യൂ. ഇത് സ്ഥിരമായ പല്ലിന് സ്ഥലം നൽകുന്നു."
        }
    },
    'pulpectomy': {
        id: 'pulpectomy',
        name: { en: "Pulpectomy (Full Root Canal)", ta: "முழு வேர் சிகிச்சை", te: "పూర్తి రూట్ కెనాల్", hi: "पूरा रूट कैनाल", kn: "ಸಂಪೂರ್ಣ ಬೇರು ಚಿಕಿತ್ಸೆ", ml: "പൂർണ്ണ വേരുചികിത്സ" },
        indication: { en: "Infection reached the roots. Abscess/Pus present.", ta: "வேர் வரை பரவிய சொத்தை." },
        procedure: { en: "Clean roots -> Fill with Resorbable Paste (Metapex/ZOE).", ta: "வேரை சுத்தம் செய்து மருந்து அடைத்தல்." },
        parentAdvice: {
            en: "The infection is deep. We must clean the roots to save the tooth. The filling material will dissolve naturally when the new tooth comes.",
            ta: "தொற்று ஆழமாக உள்ளது. வேரை சுத்தம் செய்ய வேண்டும். இந்த மருந்து தானாகவே கரைந்துவிடும்.",
            te: "ఇన్ఫెక్షన్ లోతుగా ఉంది. వేర్లను శుభ్రం చేయాలి.",
            hi: "संक्रमण गहरा है। जड़ों को साफ करना होगा।",
            kn: "ಸೋಂಕು ಆಳವಾಗಿದೆ. ಬೇರುಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಬೇಕು.",
            ml: "അണുബാധ ആഴത്തിലുള്ളതാണ്. വേരുകൾ വൃത്തിയാക്കണം."
        }
    },

    // ==========================================
    // 2. SPACE MAINTAINERS (Preventing Crowding)
    // ==========================================

    'band_and_loop': {
        id: 'band_and_loop',
        name: { en: "Band and Loop", ta: "இடம் காக்கும் கருவி (Band & Loop)", te: "బ్యాండ్ అండ్ లూప్", hi: "बैंड एंड लूप", kn: "ಬ್ಯಾಂಡ್ ಮತ್ತು ಲೂಪ್", ml: "ബാൻഡ് ആൻഡ് ലൂപ്പ്" },
        indication: { en: "Loss of primary 1st molar (D) or 2nd molar (E).", ta: "பால் பல் சீக்கிரம் விழுந்தால்." },
        procedure: { en: "A ring on the back tooth with a wire loop holding the empty space.", ta: "காலியான இடத்தை அடைக்க ஒரு கம்பி வளையம்." },
        parentAdvice: {
            en: "If we don't hold this space, the back teeth will drift forward and block the new permanent tooth.",
            ta: "இடத்தை பாதுகாக்காவிட்டால், பின் பற்கள் நகர்ந்து புதிய பல் வருவதற்கு தடையாக இருக்கும்.",
            te: "ఈ స్థలాన్ని కాపాడకపోతే, వెనుక పళ్ళు ముందుకు వచ్చి కొత్త పన్ను రాకుండా అడ్డుకుంటాయి.",
            hi: "अगर जगह नहीं बचाई, तो पीछे के दांत आगे खिसक जाएंगे और नया दांत नहीं आ पाएगा।",
            kn: "ಜಾಗವನ್ನು ಉಳಿಸದಿದ್ದರೆ, ಹಿಂದಿನ ಹಲ್ಲುಗಳು ಮುಂದೆ ಬಂದು ಹೊಸ ಹಲ್ಲಿಗೆ ಅಡ್ಡಿಪಡಿಸುತ್ತವೆ.",
            ml: "സ്ഥലം നിലനിർത്തിയില്ലെങ്കിൽ, പിന്നിലെ പല്ലുകൾ മുന്നോട്ട് നീങ്ങി പുതിയ പല്ലിന് തടസ്സമാകും."
        }
    },
    'distal_shoe': {
        id: 'distal_shoe',
        name: { en: "Distal Shoe", ta: "டிஸ்டல் ஷூ", hi: "डिस्टल शू", te: "డిస్టల్ షూ", kn: "ಡಿಸ್ಟಲ್ ಶೂ", ml: "ഡിസ്റ്റൽ ഷൂ" },
        indication: { en: "Loss of Primary 2nd Molar (E) BEFORE the 6-year molar erupts.", ta: "6 வயது பல் வருவதற்கு முன் பால் பல் விழுந்தால்." },
        procedure: { en: "Sub-gingival extension guide plane.", ta: "ஈறுக்குள் செல்லும் கம்பி." },
        parentAdvice: {
            en: "Crucial! Without this, the 6-year molar will erupt in the wrong place.",
            ta: "இது மிக முக்கியம்! இல்லையென்றால் கடவாய் பல் தவறான இடத்தில் முளைக்கும்."
        }
    },


    // ==========================================
    // 3. TRAUMA (Emergency Guide)
    // ==========================================

    'avulsion_primary': {
        id: 'avulsion_primary',
        name: { en: "Knocked Out Baby Tooth", ta: "அடிபட்டு விழுந்த பால் பல்", te: "పడిపోయిన పాల పన్ను", hi: "टूटा हुआ दूध का दांत", kn: "ಬಿದ್ದ ಮಗುವಿನ ಹಲ್ಲು", ml: "കൊഴിഞ്ഞ പല്ല്" },
        indication: { en: "Complete displacement of primary tooth.", ta: "பால் பல் வேரோடு விழுந்துவிட்டது." },
        procedure: { en: "DO NOT REPLANT.", ta: "மீண்டும் வைக்கக் கூடாது." },
        parentAdvice: {
            en: "⛔ STOP: Do NOT put a baby tooth back in. It can damage the developing permanent tooth bud inside the bone.",
            ta: "⛔ எச்சரிக்கை: பால் பல்லை மீண்டும் உள்ளே வைக்க வேண்டாம். அது உள்ளே வளரும் புதிய பல்லை பாதிக்கும்.",
            te: "పాల పన్నును మళ్ళీ పెట్టవద్దు. అది లోపల ఉన్న కొత్త పన్నును పాడు చేస్తుంది.",
            hi: "दूध के दांत को वापस न लगाएं। यह पक्के दांत को नुकसान पहुंचा सकता है।",
            kn: "ಹಾಲು ಹಲ್ಲನ್ನು ಮತ್ತೆ ಜೋಡಿಸಬೇಡಿ.",
            ml: "പാൽപ്പല്ല് തിരികെ വെക്കരുത്."
        }
    }
};

export class PedoHelper {

    /**
     * Calculates Safe Drug Dosage (Clark's Rule)
     * Safety First!
     */
    static calculateSafeDose(drug: 'Paracetamol' | 'Ibuprofen' | 'Amoxicillin', weightKg: number): string {
        let doseMg = 0;
        let frequency = "";

        if (drug === 'Paracetamol') {
            doseMg = weightKg * 15; // 15mg/kg
            frequency = "every 6 hours";
        } else if (drug === 'Ibuprofen') {
            doseMg = weightKg * 10; // 10mg/kg
            frequency = "every 8 hours";
        } else if (drug === 'Amoxicillin') {
            doseMg = weightKg * 20; // 20mg/kg (Mild) to 40mg/kg (Severe)
            frequency = "divided in 3 doses";
        }

        return `✅ **Safe Dose for ${weightKg}kg Child:** \n${drug}: ~${Math.round(doseMg)} mg ${frequency}. \n*(Max adult dose applies)*.`;
    }

    /**
     * Local Anesthesia Safety Calculator
     * Lignocaine 2% with Adrenaline (1:80,000 or 1:200,000)
     */
    static calculateLignocaineLimit(weightKg: number): string {
        const maxMg = weightKg * 4.4; // Maximum safe dose (FDA)
        const mgPerCartridge = 36; // 1.8ml cartridge has 36mg
        const maxCartridges = (maxMg / mgPerCartridge).toFixed(1);

        return `💉 **Max LA Limit:** ${maxCartridges} Cartridges (${Math.round(maxMg)} mg). \n⚠️ Exceeding this causes toxicity (seizures).`;
    }

    /**
     * Behavior Management (Frankl Scale)
     */
    static getBehaviorTip(rating: 'Negative' | 'Positive'): string {
        if (rating === 'Negative') {
            return "💡 **Tip:** Use 'Tell-Show-Do'. Use Euphemisms (e.g., 'Sleepy Juice' for Anesthesia, 'Raincoat' for Rubber Dam). Avoid 'Pain' or 'Needle'.";
        }
        return "💡 **Tip:** Use Positive Reinforcement. Give a sticker or praise immediately after good behavior.";
    }
}
