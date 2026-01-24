import { LocalizedText } from '../types/neoSchema';

// Data derived from: AJCC Cancer Staging Manual (8th Ed) & NCCN Guidelines
// Focus: Oral Cancer, Radiation Safety, Chemotherapy Protocols

export interface OncologicalEntity {
    id: string;
    type: 'Premalignant' | 'Malignant' | 'SideEffect' | 'MedicationRisk';
    name: LocalizedText;
    severity: 'High' | 'Emergency';
    stagingCriteria?: string; // e.g. "TNM"
    symptoms: LocalizedText;
    dentalImplications: LocalizedText; // The "Do's and Don'ts"
    clinicalAlert: string; // Doctor-facing warning
}

export const ONCOLOGY_DB: Record<string, OncologicalEntity> = {

    // --- 1. MALIGNANCIES ---
    'oscc': {
        id: 'oscc',
        type: 'Malignant',
        name: { en: "Oral Squamous Cell Carcinoma", ta: "வாய் புற்றுநோய்", te: "నోటి క్యాన్సర్", hi: "मुंह का कैंसर", kn: "ಬಾಯಿಯ ಕ್ಯಾನ್ಸರ್", ml: "വായയിലെ ക്യാൻസർ" },
        severity: 'Emergency',
        stagingCriteria: "TNM Staging",
        symptoms: {
            en: "Non-healing ulcer (>2 weeks), rolled margins, hard lump, white/red patches.",
            ta: "2 வாரங்களுக்கு மேல் ஆறாத புண், ரத்தம் வருதல்.",
            te: "మానని పుండు, గట్టి గడ్డ.",
            hi: "न भरने वाला छाला, सख्त गांठ।",
            kn: "2 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲದ ಗುಣವಾಗದ ಹುಣ್ಣು.",
            ml: "2 ആഴ്ചയിൽ കൂടുതൽ ഉണങ്ങാത്ത മുറിവ്."
        },
        dentalImplications: {
            en: "⚠️ PRE-RADIATION CLEARANCE: All hopeless teeth must be extracted 14-21 days BEFORE radiation starts.",
            ta: "கதிர்வீச்சு சிகிச்சைக்கு 3 வாரங்களுக்கு முன் பற்களை அகற்ற வேண்டும்.",
            te: "రేడియేషన్ కి ముందే పాడైన పళ్ళు తీయాలి.",
            hi: "रेडिएशन से पहले खराब दांत निकलवाएं।",
            kn: "ರೇಡಿಯೇಶನ್ ಮೊದಲು ಹಲ್ಲುಗಳನ್ನು ತೆಗೆಯಬೇಕು.",
            ml: "റേഡിയേഷന് മുമ്പ് കേടായ പല്ല് നീക്കം ചെയ്യണം."
        },
        clinicalAlert: "Rule out metastasis. Focal infection clearance mandatory before Radiotherapy (RT)."
    },

    // --- 2. SIDE EFFECTS (Radiation) ---
    'orn': {
        id: 'orn',
        type: 'SideEffect',
        name: { en: "Osteoradionecrosis (ORN)", ta: "எலும்பு அழுகல் (கதிர்வீச்சு)", te: "ఎముక కుళ్ళిపోవడం", hi: "हड्डी का गलना", kn: "ಮೂಳೆ ಕೊಳೆಯುವಿಕೆ", ml: "എല്ല് നശിക്കൽ" },
        severity: 'High',
        symptoms: {
            en: "Exposed dead bone, severe pain, foul smell, pus discharge.",
            ta: "எலும்பு வெளியே தெரிதல், கடும் நாற்றம், வலி.",
            te: "ఎముక బయటకు కనిపించడం, నొప్పి.",
            hi: "हड्डी का बाहर निकलना, बदबू।",
            kn: "ಮೂಳೆ ಹೊರಬರುವುದು, ನೋವು.",
            ml: "എല്ല് പുറത്തേക്ക് കാണുക, വേദന."
        },
        dentalImplications: {
            en: "⛔ CONTRAINDICATION: Never extract a tooth in a radiated jaw. Risk of jaw fracture/necrosis.",
            ta: "கதிர்வீச்சு எடுத்த பின் பல் பிடுங்கவே கூடாது.",
            te: "రేడియేషన్ తర్వాత పన్ను తీయకూడదు.",
            hi: "रेडिएशन के बाद दांत न निकालें।",
            kn: "ರೇಡಿಯೇಶನ್ ನಂತರ ಹಲ್ಲು ಕೀಳಬಾರದು.",
            ml: "റേഡിയേഷന് ശേഷം പല്ല് പറിക്കരുത്."
        },
        clinicalAlert: "Lifetime Risk. Use HBO (Hyperbaric Oxygen) if surgery is unavoidable."
    },
    'xerostomia': {
        id: 'xerostomia',
        type: 'SideEffect',
        name: { en: "Radiation Xerostomia (Dry Mouth)", ta: "வாய் வறட்சி", te: "నోరు ఎండిపోవడం", hi: "मुंह सूखना", kn: "ಬಾಯಿ ಒಣಗುವುದು", ml: "വായ ഉണങ്ങൽ" },
        severity: 'High',
        symptoms: {
            en: "Thick saliva, difficulty swallowing, rapid 'Radiation Caries'.",
            ta: "எச்சில் சுரக்காது, உணவு விழுங்க சிரமம்.",
            te: "లాలాజలం తక్కువ, మింగడం కష్టం.",
            hi: "लार कम बनना, खाना निगलने में दिक्कत।",
            kn: "ಬಾಯಿ ಒಣಗುವುದು, ನುಂಗಲು ತೊಂದರೆ.",
            ml: "ഉമിനീർ കുറയുക, ഇറക്കാൻ പ്രയാസം."
        },
        dentalImplications: {
            en: "High risk of rampant decay. Fluoride trays and saliva substitutes needed lifelong.",
            ta: "பல் சொத்தை விரைவில் வரும். ஃப்ளோரைடு ஜெல் பயன்படுத்தவும்.",
            te: "ఫ్లోరైడ్ జెల్ వాడాలి.",
            hi: "फ्लोराइड जेल का उपयोग करें।",
            kn: "ಫ್ಲೋರೈಡ್ ಜೆಲ್ ಬಳಸಿ.",
            ml: "ഫ്ലൂറൈഡ് ജെൽ ഉപയോഗിക്കുക."
        },
        clinicalAlert: "Prescribe GC Tooth Mousse / High Fluoride Paste."
    },

    // --- 3. MEDICATION RISKS (Bisphosphonates) ---
    'bronj': {
        id: 'bronj',
        type: 'MedicationRisk',
        name: { en: "MRONJ (Bone Medication Necrosis)", ta: "மருந்தால் எலும்பு பாதிப்பு", te: "మందుల వల్ల ఎముక సమస్య", hi: "दवा से हड्डी का गलना", kn: "ಮೂಳೆ ಔಷಧ ನೇಕ್ರೋಸಿಸ್", ml: "മരുന്ന് മൂലമുള്ള എല്ല് നശിക്കൽ" },
        severity: 'High',
        symptoms: {
            en: "Exposed bone after extraction in patients taking Zoledronic Acid/Fosamax.",
            ta: "எலும்பு ஊசி (Bisphosphonate) போட்டவர்களுக்கு பல் எடுத்தால் எலும்பு அழுகலாம்.",
            te: "ఎముక మందులు వాడేవారిలో పన్ను తీశాక సమస్యలు.",
            hi: "हड्डी की दवा लेने वालों में जोखिम।",
            kn: "ಮೂಳೆ ಚಿಕಿತ್ಸೆ ಪಡೆಯುವವರಲ್ಲಿ ಹಲ್ಲು ಕೀಳುವಾಗ ತೊಂದರೆ.",
            ml: "എല്ലിന് മരുന്ന് കഴിക്കുന്നവരിൽ പല്ല് പറിച്ചാലുണ്ടാവുന്ന പ്രശ്നം."
        },
        dentalImplications: {
            en: "Check CTX levels. Stop medication (Drug Holiday) 3 months before extraction if permissible.",
            ta: "பல் எடுப்பதற்கு முன் எலும்பு மருத்துவரிடம் ஆலோசனை பெறவும்.",
            te: "పన్ను తీసే ముందు డాక్టర్ సలహా తీసుకోండి.",
            hi: "दांत निकालने से पहले डॉक्टर से पूछें।",
            kn: "ಹಲ್ಲು ಕೀಳುವ ಮೊದಲು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
            ml: "പല്ല് പറിക്കുന്നതിന് മുമ്പ് ഡോക്ടറുടെ ഉപദേശം തേടുക."
        },
        clinicalAlert: "Risk high with IV Bisphosphonates. Treat conservatively (RCT instead of Extraction)."
    }
};

export class OncologyHelper {

    /**
     * Checks Safety for Chemotherapy Patients
     * Based on NCCN Guidelines for Dental Clearance
     */
    static checkChemoSafety(platelets: number, neutrophils: number): string {
        if (platelets < 50000) {
            return "⛔ STOP: Platelets < 50k. Risk of uncontrollable bleeding. Transfusion needed before procedure.";
        }
        if (neutrophils < 1000) {
            return "⛔ STOP: ANC < 1000 (Neutropenia). Severe risk of septicemia. Antibiotic cover insufficient.";
        }
        if (platelets < 75000 || neutrophils < 2000) {
            return "⚠️ CAUTION: Consult Oncologist. Handle tissues gently. Suture sockets.";
        }
        return "✅ PROCEED: Blood counts are safe for routine dental treatment.";
    }

    /**
     * Translates TNM Staging to Patient-Friendly Terms
     * T = Tumor Size, N = Nodes, M = Metastasis
     */
    static explainStaging(t: number, n: number, m: number): string {
        if (m > 0) return "Stage IV (Metastatic): Cancer has spread to other body parts. Systemic therapy needed.";
        if (n > 0) return `Stage III/IV (Locoregional): Tumor has spread to ${n} lymph nodes in the neck. Surgery + Radiation likely.`;
        if (t > 2) return "Stage II/III: Tumor is large (>2cm) but localized.";
        return "Stage I: Early stage small tumor (<2cm). Best prognosis with surgery.";
    }

    /**
     * Safety Check for Extractions
     */
    static checkExtractionSafety(hasRadiationHistory: boolean, takingBisphosphonates: boolean): string {
        if (hasRadiationHistory) {
            return "⛔ ABSOLUTE CAUTION: History of Head/Neck Radiation. Risk of ORN. Refer to Maxillofacial Surgeon. Do not extract in general clinic.";
        }
        if (takingBisphosphonates) {
            return "⚠️ WARNING: Risk of MRONJ. Check if patient is on IV Zoledronate or Oral Fosamax. Serum CTX test recommended.";
        }
        return "✅ Safe to extract (Standard Protocol).";
    }
}
