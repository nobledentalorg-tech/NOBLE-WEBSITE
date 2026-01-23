import { LocalizedText } from '../types/neoSchema';

// Data derived from: Sturdevant's Art and Science of Operative Dentistry & Phillips' Science of Dental Materials
// Focus: Caries Staging, Bonding, and Luting Cements (The "Glue")

export interface CavityClassification {
    class: string;
    description: LocalizedText;
    indicatedMaterial: string[];
    clinicalNote: string;
}

export interface DentalCement {
    id: string;
    name: string;
    type: 'Luting' | 'Bonding' | 'Liner';
    strength: string; // Compressive Strength
    indication: LocalizedText;
    contraindication: string;
    clinicalTip: string;
}

// ==========================================
// 1. G.V. BLACK CLASSIFICATION (The Anatomy)
// ==========================================
export const GV_BLACK_CLASSIFICATION: Record<string, CavityClassification> = {
    'Class I': {
        class: 'Class I',
        description: {
            en: "Decay on the biting surface (pits & fissures) of back teeth.",
            ta: "கடவாய் பற்களின் மேல் பகுதியில் (மெல்லும் இடம்) உள்ள சொத்தை.",
            te: "నములు దంతాల పైన ఉండే పుచ్చు.",
            hi: "दाढ़ के ऊपर का कीड़ा।",
            kn: "ದವಡೆ ಹಲ್ಲುಗಳ ಮೇಲ್ಭಾಗದ ಕುಳಿ.",
            ml: "അണപ്പല്ലിന്റെ മുകളിലുള്ള പോട്."
        },
        indicatedMaterial: ['Nano-Hybrid Composite', 'Bulk Fill Composite'],
        clinicalNote: "High C-Factor (Shrinkage Stress). Use Incremental Layering technique."
    },
    'Class II': {
        class: 'Class II',
        description: {
            en: "Decay in between two back teeth (Food lodgement area).",
            ta: "இரண்டு கடவாய் பற்களுக்கு இடையில் உணவு சிக்கி வரும் சொத்தை.",
            te: "రెండు పళ్ళ మధ్యలో వచ్చే పుచ్చు.",
            hi: "दो दांतों के बीच का कीड़ा।",
            kn: "ಎರಡು ಹಲ್ಲುಗಳ ಮಧ್ಯದ ಕುಳಿ.",
            ml: "രണ്ട് പല്ലുകൾക്കിടയിലുള്ള പോട്."
        },
        indicatedMaterial: ['Composite (Sectional Matrix)', 'Ceramic Inlay'],
        clinicalNote: "Use Sectional Matrix (Palodent) to recreate tight contact point."
    },
    'Class III': {
        class: 'Class III',
        description: {
            en: "Decay between front teeth (Smile zone).",
            ta: "முன் பற்களுக்கு இடையில் வரும் சொத்தை.",
            te: "ముందు పళ్ళ మధ్య పుచ్చు.",
            hi: "सामने के दांतों के बीच का कीड़ा।",
            kn: "ಮುಂದಿನ ಹಲ್ಲುಗಳ ನಡುವಿನ ಕುಳಿ.",
            ml: "മുൻപല്ലുകൾക്കിടയിലുള്ള പോട്."
        },
        indicatedMaterial: ['Aesthetic Composite'],
        clinicalNote: "Shade matching is critical. Use opaque layer if backing is lost."
    },
    'Class IV': {
        class: 'Class IV',
        description: {
            en: "Broken corner of a front tooth (Trauma/Decay).",
            ta: "முன் பல் நுனி உடைந்தால்.",
            te: "ముందు పన్ను విరిగిపోతే.",
            hi: "सामने का टूटा हुआ दांत।",
            kn: "ಮುರಿದ ಮುಂದಿನ ಹಲ್ಲು.",
            ml: "മുൻപല്ലിന്റെ അറ്റം പൊട്ടിയാൽ."
        },
        indicatedMaterial: ['High Strength Composite', 'Veneer'],
        clinicalNote: "Create a 2mm bevel on enamel to hide the transition line."
    },
    'Class V': {
        class: 'Class V',
        description: {
            en: "Decay or wear at the gum line (Cervical abrasion).",
            ta: "ஈறு ஓரத்தில் பற்கள் தேய்மானம் அல்லது சொத்தை.",
            te: "చిగుళ్ళ దగ్గర పన్ను అరుగుదల.",
            hi: "मसूड़ों के पास दांत का घिसना।",
            kn: "ಒಸಡುಗಳ ಬಳಿ ಹಲ್ಲು ಸವೆತ.",
            ml: "മോണയോട് ചേർന്ന് പല്ല് തേയ്മാനം."
        },
        indicatedMaterial: ['GIC', 'RMGIC'],
        clinicalNote: "Isolation is hard. GIC is preferred due to chemical bonding in wet environments."
    }
};

// ==========================================
// 2. DENTAL CEMENTS (The Glue Protocol)
// ==========================================
export const DENTAL_CEMENTS: Record<string, DentalCement> = {

    // --- 1. GLASS IONOMER (Standard) ---
    'gic_luting': {
        id: 'gic_luting',
        name: "GIC Type I (Gold Label 1)",
        type: 'Luting',
        strength: "Moderate",
        indication: {
            en: "Routine metal crowns (PFM) and stainless steel crowns.",
            ta: "சாதாரண மெட்டல் கேப் ஒட்டுவதற்கு.",
            te: "సాధారణ మెటల్ క్యాప్స్ కోసం.",
            hi: "साधारण कैप के लिए।",
            kn: "ಸಾಮಾನ್ಯ ಮೆಟಲ್ ಕ್ಯಾಪ್ಗಳಿಗೆ.",
            ml: "സാധാരണ മെറ്റൽ ക്യാപ്പിന്."
        },
        contraindication: "Zirconia or E-max (Will not bond).",
        clinicalTip: "Clean tooth with water only. Do not over-dry (GIC needs water for setting)."
    },

    // --- 2. RESIN MODIFIED GIC (The Workhorse) ---
    'rmgic': {
        id: 'rmgic',
        name: "RMGIC (RelyX Luting 2)",
        type: 'Luting',
        strength: "High",
        indication: {
            en: "Zirconia crowns, PFM, and fiber posts.",
            ta: "ஜிர்கோனியா கேப் மற்றும் வலுவான ஒட்டுதலுக்கு.",
            te: "జిర్కోనియా క్యాప్స్ కోసం.",
            hi: "मजबूत फिटिंग के लिए।",
            kn: "ಗಟ್ಟಿಯಾದ ಫಿಟ್ಟಿಂಗ್ಗಾಗಿ.",
            ml: "ഉറപ്പുള്ള ഫിറ്റിംഗിന്."
        },
        contraindication: "Veneers (Thickness inhibits light cure).",
        clinicalTip: "Tack cure for 2 seconds for easy excess removal."
    },

    // --- 3. RESIN CEMENT (The Super Glue) ---
    'resin_cement': {
        id: 'resin_cement',
        name: "Resin Cement (RelyX U200 / Variolink)",
        type: 'Bonding',
        strength: "Very High (Chemical Bond)",
        indication: {
            en: "E-max Crowns, Veneers, and Inlays (Esthetic work).",
            ta: "கண்ணாடி போன்ற பற்கள் (Veneers) மற்றும் E-max கேப் ஒட்டுவதற்கு.",
            te: "అందం కోసం పెట్టే పళ్ళకు.",
            hi: "वेनियర్స్ और ई-मैक्स के लिए।",
            kn: "ವಿನಿಯರ್ ಮತ್ತು ಈ-ಮ್ಯಾಕ್ಸ್ಗೆ.",
            ml: "വെനീർ, ഇ-മാക്സ് എന്നിവയ്ക്ക്."
        },
        contraindication: "Situations where moisture control is impossible (Sub-gingival).",
        clinicalTip: "⚠️ STRICT ISOLATION REQUIRED. Any saliva contamination will cause failure."
    },

    // --- 4. ZINC PHOSPHATE (Old School) ---
    'zinc_phosphate': {
        id: 'zinc_phosphate',
        name: "Zinc Phosphate",
        type: 'Luting',
        strength: "High (Mechanical Lock)",
        indication: {
            en: "Long span metal bridges (Economic).",
            ta: "நீளமான மெட்டல் பாலம் (குறைந்த விலை).",
            hi: "सस्ते मेटल ब्रिज के लिए।",
            kn: "ಕಡಿಮೆ ವೆಚ್ಚದ ಮೆಟಲ್ ಬ್ರಿಡ್ಜ್ಗಳಿಗಾಗಿ.",
            ml: "ചിലവ് കുറഞ്ഞ മെറ്റൽ ബ്രിഡ്ജിന്."
        },
        contraindication: "Vital teeth (Acidic nature causes severe sensitivity).",
        clinicalTip: "Mix on a cool glass slab to increase working time."
    }
};

// ==========================================
// 3. CLINICAL PROTOCOLS
// ==========================================

export const BONDING_PROTOCOLS = {
    'total_etch': {
        name: "Total Etch (4th/5th Gen)",
        indication: "Enamel-heavy preparations (Class IV, Veneers).",
        steps: [
            "1. Etch enamel (30s) & dentin (15s) with 37% Phosphoric Acid.",
            "2. Rinse & Blot dry (Keep Dentin Moist!).",
            "3. Apply Bond -> Air Thin -> Cure."
        ],
        warning: "Risk of sensitivity if dentin is over-dried (Collagen collapse)."
    },
    'self_etch': {
        name: "Universal Bond (8th Gen - Scotchbond)",
        indication: "Deep Dentin preparations to reduce sensitivity.",
        steps: [
            "1. Apply Universal Bond (scrub 20s).",
            "2. Air thin to evaporate solvent.",
            "3. Cure."
        ],
        benefit: "MMP Inhibition + Less Sensitivity."
    }
};

export class OperativeHelper {

    /**
     * Recommends the correct cement
     * 
     */
    static selectCement(restorationType: 'Zirconia' | 'Emax' | 'PFM' | 'Veneer', isolationPossible: boolean): string {

        // 1. Veneers / E-max -> MUST use Resin
        if (restorationType === 'Veneer' || restorationType === 'Emax') {
            if (!isolationPossible) return "⚠️ WARNING: E-max requires isolation. Use Rubber Dam.";
            return "✅ Recommendation: Resin Cement (Variolink/RelyX U200) for chemical bonding.";
        }

        // 2. Zirconia -> RMGIC is safest
        if (restorationType === 'Zirconia') {
            return "✅ Recommendation: RMGIC (RelyX Luting 2). Note: Do NOT use simple GIC (it won't stick).";
        }

        // 3. PFM / Metal -> GIC is fine
        return "✅ Recommendation: GIC Type 1 (Gold Label) or RMGIC.";
    }

    /**
     * Advice for Sensitivity
     */
    static getSensitivityAdvice(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "பல் கூச்சம் இருந்தால் 'Desensitizing' பற்பசை பயன்படுத்தவும் (2 வாரம்).";
        if (lang === 'te') return "పంటి కూసం ఉంటే 'Desensitizing' పేస్ట్ వాడండి.";
        if (lang === 'hi') return "सेंसिटिविटी के लिए 'Desensitizing' पेस्ट का उपयोग करें।";
        if (lang === 'kn') return "ಹಲ್ಲು ಜುಮ್ಮೆನ್ನುವುದಕ್ಕೆ 'Desensitizing' ಪೇಸ್ಟ್ ಬಳಸಿ.";
        if (lang === 'ml') return "പുളിപ്പിന് 'Desensitizing' പേസ്റ്റ് ഉപയോഗിക്കുക.";
        return "Use Desensitizing Toothpaste (Vantage/Sensodyne) for 2 weeks. If pain persists, a filling may be needed.";
    }
}
