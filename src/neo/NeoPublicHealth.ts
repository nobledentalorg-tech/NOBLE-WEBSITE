import { LocalizedText } from '../types/neoSchema';

// Neo Public Health & Insurance Module
// Focus: Star Health Protocols, Systemic Health Links (Diabetes/Heart), and Lifestyle.

export interface WellnessTopic {
    id: string;
    category: 'Insurance' | 'Systemic' | 'Lifestyle' | 'Hygiene';
    title: LocalizedText;
    summary: LocalizedText; // The core medical fact
    actionableAdvice: LocalizedText; // What the patient should do
}

export const PUBLIC_HEALTH_DB: Record<string, WellnessTopic> = {

    // ==========================================
    // 1. INSURANCE QUERIES (The #1 Question)
    // ==========================================
    'insurance_general': {
        id: 'insurance_general',
        category: 'Insurance',
        title: { en: "Does Insurance Cover Dental?", ta: "இன்சூரன்ஸ் செல்லுபடி ஆகுமா?", te: "ఇన్సూరెన్స్ పనిచేస్తుందా?", hi: "क्या बीमा कवर करता है?", kn: "ವಿಮೆ ಅನ್ವಯಿಸುತ್ತದೆಯೇ?", ml: "ഇൻഷുറൻസ് ലഭിക്കുമോ?" },
        summary: {
            en: "Most standard policies ONLY cover dental treatment if it requires 24-hour hospitalization (e.g., Jaw Fracture due to Accident).",
            ta: "விபத்து காரணமாக தாடை முறிவு ஏற்பட்டு, மருத்துவமனையில் சேர்ந்தால் மட்டுமே இன்சூரன்ஸ் கிடைக்கும்.",
            hi: "ज्यादातर पॉलिसियां केवल एक्सीडेंट और अस्पताल में भर्ती होने पर ही कवर देती हैं।",
            te: "యాక్సిడెంట్ వల్ల దవడ విరిగితేనే ఇన్సూరెన్స్ వర్తిస్తుంది.",
            kn: "ಅಪಘಾತದಿಂದ ದವಡೆ ಮುರಿತವಾಗಿ ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಾದರೆ ಮಾತ್ರ ವಿಮೆ ಸಿಗುತ್ತದೆ.",
            ml: "അപകടം മൂലം താടിയെല്ലിന് ഒടിവുണ്ടായി ആശുപത്രിയിൽ പ്രവേശിപ്പിക്കപ്പെട്ടാൽ മാത്രമേ ഇൻഷുറൻസ് ലഭിക്കൂ."
        },
        actionableAdvice: {
            en: "For Root Canals/Cleaning, you need a specific 'OPD Cover' policy (e.g., Star Outpatient Care). Check your policy document.",
            ta: "வேர் சிகிச்சை (RCT) செய்ய 'OPD Policy' தனியாக இருக்க வேண்டும்.",
            te: "సాధారణ చికిత్సలకు ప్రత్యేక OPD పాలసీ ఉండాలి.",
            hi: "साधारण इलाज के लिए 'OPD कवर' वाली पॉलिसी चाहिए।",
            kn: "ಸಾಮಾನ್ಯ ಚಿಕಿತ್ಸೆಗೆ 'OPD ಕವರ್' ವಿಮೆ ಬೇಕು.",
            ml: "സാധാരണ ചികിത്സകൾക്കായി 'OPD കവർ' ഉള്ള പോളിസി വേണം."
        }
    },
    'insurance_accident': {
        id: 'insurance_accident',
        category: 'Insurance',
        title: { en: "Accidental Dental Coverage", ta: "விபத்து காப்பீடு", hi: "दुर्घटना बीमा", te: "ప్రమాద బీమా", kn: "ಅಪಘಾತ ವಿಮೆ", ml: "അപകട ഇൻഷുറൻസ്" },
        summary: {
            en: "Damage to natural teeth due to external impact (Accident) is covered by almost all health policies.",
            ta: "விபத்தினால் பற்கள் உடைந்தால், அனைத்து பாலிசிகளிலும் சிகிச்சை பெறலாம்.",
            hi: "एक्सीडेंट में दांत टूटने पर क्लेम मिलता है।",
            te: "ప్రమాదవశాత్తు పళ్ళు విరిగితే దాదాపు అన్ని పాలసీల్లో ఇన్సూరెన్స్ వస్తుంది.",
            kn: "ಅಪಘಾತದಿಂದ ಹಲ್ಲು ಮುರಿದರೆ ವಿಮೆ ಪಡೆಯಬಹುದು.",
            ml: "അപകടം മൂലം പല്ലുകൾക്ക് കേടുപാടുകൾ സംഭവിച്ചാൽ ഇൻഷുറൻസ് ലഭിക്കും."
        },
        actionableAdvice: {
            en: "We will provide the X-rays and Trauma Report required for your claim reimbursement.",
            ta: "கிளெய்ம் செய்வதற்கு தேவையான எக்ஸ்-ரே மற்றும் ரிப்போர்ட் நாங்கள் தருவோம்.",
            te: "క్లెయిమ్ కోసం కావలసిన ఎక్స్-రే మరియు రిపోర్ట్ మేము ఇస్తాము.",
            hi: "क्लेम के लिए आवश्यक एक्स-रे और रिपोर्ट हम देंगे।",
            kn: "ವಿಮೆ ಪಡೆಯಲು ಬೇಕಾದ ಎಕ್ಸ್-ರೇ ಮತ್ತು ರಿಪೋರ್ಟ್ ನಾವು ನೀಡುತ್ತೇವೆ.",
            ml: "ക്ലെയിമിനായി ആവശ്യമായ എക്സ്-റേയും റിപ്പോർട്ടും ഞങ്ങൾ നൽകും."
        }
    },


    // ==========================================
    // 2. DIABETES & ORAL HEALTH (The Silent Killer)
    // ==========================================
    'diabetes_link': {
        id: 'diabetes_link',
        category: 'Systemic',
        title: { en: "Diabetes & Gum Disease", ta: "சர்க்கரை நோயும் ஈறு பிரச்சனையும்", te: "షుగర్ మరియు చిగుళ్ళ సమస్య", hi: "डायबिटीज और मसूड़े", kn: "ಮಧುಮೇಹ ಮತ್ತು ವಸಡು", ml: "പ്രമേഹവും മോണരോഗവും" },
        summary: {
            en: "It is a two-way street. Uncontrolled diabetes causes gum disease, AND infected gums increase your blood sugar.",
            ta: "சர்க்கரை நோய் இருந்தால் ஈறு வீக்கம் வரும். ஈறு வீக்கம் இருந்தால் சர்க்கரை குறையாது.",
            te: "షుగర్ ఉంటే చిగుళ్ళ వాపు వస్తుంది. చిగుళ్ళ వాపు ఉంటే షుగర్ తగ్గదు.",
            hi: "शुगर और मसूड़ों की बीमारी का गहरा संबंध है।",
            kn: "ಶುಗರ್ ಇದ್ದರೆ ವಸಡು ಸಮಸ್ಯೆ ಬರುತ್ತದೆ. ವಸಡು ಸಮಸ್ಯೆ ಇದ್ದರೆ ಶುಗರ್ ಹತೋಟಿಗೆ ಬರುವುದಿಲ್ಲ.",
            ml: "പ്രമേഹം മോണരോഗത്തിന് കാരണമാകും. മോണരോഗം പ്രമേഹം വർദ്ധിപ്പിക്കുകയും ചെയ്യും."
        },
        actionableAdvice: {
            en: "If your HbA1c > 7, you MUST get a deep cleaning to help lower your sugar levels.",
            ta: "உங்கள் HbA1c 7-க்கு மேல் இருந்தால், பற்களை சுத்தம் செய்வது அவசியம்.",
            te: "మీ HbA1c 7 కంటే ఎక్కువ ఉంటే తప్పనిసరిగా పళ్ళు శుభ్రం చేయించుకోవాలి.",
            hi: "शुगर कंट्रोल करने के लिए दांतों की सफाई जरूरी है।",
            kn: "ನಿಮ್ಮ HbA1c 7 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಹಲ್ಲುಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿಕೊಳ್ಳುವುದು ಅವಶ್ಯಕ.",
            ml: "നിങ്ങളുടെ HbA1c 7-ൽ കൂടുതലാണെങ്കിൽ പല്ലുകൾ വൃത്തിയാക്കേണ്ടത് അത്യാവശ്യമാണ്."
        }
    },


    // ==========================================
    // 3. HEART HEALTH
    // ==========================================
    'heart_connection': {
        id: 'heart_connection',
        category: 'Systemic',
        title: { en: "Heart & Teeth Connection", ta: "இதயமும் பற்களும்", te: "గుండె మరియు పళ్ళు", hi: "दिल और दांत", kn: "ಹೃದಯ ಮತ್ತು ಹಲ್ಲುಗಳ ಸಂಭಂಧ", ml: "ഹൃദയവും പല്ലുകളും തമ്മിലുള്ള ബന്ധം" },
        summary: {
            en: "Bacteria from infected gums can travel through blood to the heart valves (Infective Endocarditis).",
            ta: "ஈறுகளில் உள்ள கிருமிகள் ரத்தம் வழியாக இதயத்தை தாக்கலாம்.",
            hi: "मसूड़ों के बैक्टीरिया दिल तक पहुंच सकते हैं।",
            te: "చిగుళ్ళలోని ఇన్ఫెక్షన్ గుండెకాయ మీద ప్రభావం చూపుతుంది.",
            kn: "ಒಸಡುಗಳ ಸೋಂಕು ರಕ್ತದ ಮೂಲಕ ಹೃದಯಕ್ಕೆ ಹರಡಬಹುದು.",
            ml: "മോണയിലെ അണുബാധ ഹൃദയത്തെ ബാധിച്ചേക്കാം."
        },
        actionableAdvice: {
            en: "Inform us if you have a pacemaker or heart valve surgery. You may need antibiotics before cleaning.",
            ta: "உங்களுக்கு இதய அறுவை சிகிச்சை நடந்திருந்தால் எங்களிடம் முன்கூட்டியே சொல்லவும்.",
            te: "మీకు గుండె ఆపరేషన్ జరిగి ఉంటే మాకు ముందే చెప్పండి.",
            hi: "यदि आपकी दिल की सर्जरी हुई है, तो हमें बताएं।",
            kn: "ನಿಮಗೆ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಆಗಿದ್ದರೆ ನಮಗೆ ತಿಳಿಸಿ.",
            ml: "ഹൃദയ ശസ്ത്രക്രിയ കഴിഞ്ഞിട്ടുണ്ടെങ്കിൽ ഡോക്ടറോട് പറയുക."
        }
    },

    // ==========================================
    // 4. LIFESTYLE (Smoking & Gutkha)
    // ==========================================
    'tobacco_cessation': {
        id: 'tobacco_cessation',
        category: 'Lifestyle',
        title: { en: "Tobacco & Cancer Risk", ta: "புகையிலை மற்றும் புற்றுநோய்", hi: "तंबाकू और कैंसर", te: "పొగాకు మరియు క్యాన్సర్", kn: "ತಂಬಾಕು ಮತ್ತು ಕ್ಯಾನ್ಸರ್", ml: "പുകയിലയും കാൻസറും" },
        summary: {
            en: "Chewing Gutkha/Pan or Smoking causes Leukoplakia (White patches). This is the first step to cancer.",
            ta: "புகையிலை போடுவதால் வாயில் வெள்ளை திட்டு (Leukoplakia) வரும். இது புற்றுநோயின் ஆரம்பம்.",
            te: "గుట్కా నమలడం వల్ల క్యాన్సర్ వస్తుంది.",
            hi: "गुटखा खाने से मुंह का कैंसर हो सकता है।",
            kn: "ತಂಬಾಕು ಸೇವನೆಯಿಂದ ಬಾಯಿ ಕ್ಯಾನ್ಸರ್ ಬರುವ ಸಾಧ್ಯತೆ ಇದೆ.",
            ml: "പുകയില ഉപയോഗം കാൻസറിന് കാരണമാകും."
        },
        actionableAdvice: {
            en: "We can help. Quitting now reduces your cancer risk by 50% within 5 years.",
            ta: "இன்றே நிறுத்தினால், 5 வருடத்தில் ஆபத்து பாதியாக குறையும்.",
            te: "ఇప్పుడే మానేస్తే 5 ఏళ్ళలో క్యాన్సర్ ప్రమాదం సగానికి తగ్గుతుంది.",
            hi: "आज ही छोड़ें ताकि कैंसर का खतरा कम हो सके।",
            kn: "ತಂಬಾಕು ಸೇವನೆ ನಿಲ್ಲಿಸಿದರೆ ಕ್ಯಾನ್ಸರ್ ಬರುವ ಸಾಧ್ಯತೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
            ml: "ഇന്ന് തന്നെ നിർത്തുക, കാൻസർ സാധ്യത പകുതിയായി കുറയ്ക്കാം."
        }
    },


    // ==========================================
    // 5. COMMON EMBARRASSING QUESTIONS
    // ==========================================
    'bad_breath': {
        id: 'bad_breath',
        category: 'Hygiene',
        title: { en: "Bad Breath (Halitosis)", ta: "வாய் துர்நாற்றம்", te: "నోటి దుర్వాసన", hi: "सांस की बदबू", kn: "ಬಾಯಿ ವಾಸನೆ", ml: "വായ നാറ്റം" },
        summary: {
            en: "90% of bad breath comes from bacteria on the TONGUE and stuck food, not just the stomach.",
            ta: "வாய் நாற்றம் 90% நாக்கில் உள்ள அழுக்கு மற்றும் ஈறு பிரச்சனட்டால் வருகிறது.",
            hi: "सांस की बदबू पेट से नहीं, मुंह की गंदगी से आती है।",
            te: "నోటి దుర్వాసన 90% నాలుక మీద ఉన్న మురికి వల్లే వస్తుంది.",
            kn: "ಬಾಯಿ ವಾಸನೆ ಹೆಚ್ಚಾಗಿ ನಾಲಿಗೆಯ ಮೇಲಿನ ಪಾಚಿಯಿಂದ ಬರುತ್ತದೆ.",
            ml: "വായ നാറ്റം പ്രധാനമായും നാവിലെ അഴുക്ക് മൂലമാണ് ഉണ്ടാകുന്നത്."
        },
        actionableAdvice: {
            en: "Use a Tongue Cleaner daily and Floss. If it persists, check for tonsil stones.",
            ta: "தினமும் நாக்கு வழிப்பான் (Tongue Cleaner) பயன்படுத்தவும்.",
            hi: "जीभ साफ करें और फ्लॉस करें।",
            te: "ప్రతిరోజూ నాలుక క్లీనర్ వాడండి.",
            kn: "ಪ್ರತಿದಿನ ನಾಲಿಗೆ ಕ್ಲೀನರ್ ಬಳಸಿ.",
            ml: "ദിവസവും ടങ് ക്ലീനർ ഉപയോഗിക്കുക."
        }
    }
};

export class PublicHealthHelper {

    /**
     * Insurance Eligibility Checker
     * Differentiates IPD (Covered) vs OPD (Not Covered)
     */
    static checkInsuranceEligibility(procedure: string, policyType: 'Standard' | 'OPD_Cover' | 'Accident'): string {

        const ipdProcedures = ['fracture', 'cyst_removal', 'tumor_surgery', 'trauma'];
        const opdProcedures = ['rct', 'crown', 'cleaning', 'extraction'];
        const p = procedure.toLowerCase();

        // Scenario 1: Accident (Covered by almost all)
        if (policyType === 'Accident') {
            return "✅ **Covered:** Accidental damage is reimbursed upon submission of X-rays and Trauma Report.";
        }

        // Scenario 2: Standard Policy & Major Surgery
        if (ipdProcedures.some(proc => p.includes(proc))) {
            return "✅ **Likely Covered:** This procedure usually requires hospitalization/Day Care admission, which Standard policies cover.";
        }

        // Scenario 3: Standard Policy & Routine Dental
        if (policyType === 'Standard' && opdProcedures.some(proc => p.includes(proc))) {
            return "❌ **Not Covered:** Routine dental work is considered cosmetic/OPD. You need a specific 'Outpatient' rider (Specialized OPD Cover).";
        }

        return "ℹ️ Check your Policy Document for 'OPD/Dental' coverage details.";
    }

    /**
     * Diabetes Risk Calculator
     */
    static explainDiabetesRisk(hba1c: number): string {
        if (hba1c > 7) {
            return "⚠️ **High Risk:** Your sugar is uncontrolled (HbA1c > 7). \n**Medical Fact:** High sugar creates 'super-food' for gum bacteria. Without professional cleaning, your sugar levels will be much harder to control.";
        }
        return "✅ **Controlled:** Your sugar is within range. Maintain good oral hygiene to prevent inflammation that can cause sugar spikes.";
    }
}
