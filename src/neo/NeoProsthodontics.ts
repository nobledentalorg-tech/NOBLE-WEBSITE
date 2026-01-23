import { LocalizedText } from '../types/neoSchema';

// Data derived from: Rosenstiel's Fixed Prosthodontics & McCracken's Removable Partial Prosthodontics
// Focus: Crowns, Bridges, Dentures (RPD/CD), and Implant Decision Making.

export interface ProsthoOption {
    id: string;
    type: 'Fixed' | 'Removable' | 'Implant';
    name: LocalizedText;
    material: string;
    indication: LocalizedText;
    contraindication: string;
    lifespan: string;
    patientPitch: LocalizedText; // Explanation for laypeople
}

export const PROSTHO_DB: Record<string, ProsthoOption> = {

    // ==========================================
    // 1. FIXED PROSTHODONTICS (Crowns & Bridges)
    // ==========================================
    'zirconia_crown': {
        id: 'zirconia_crown',
        type: 'Fixed',
        name: { en: "Zirconia Crown", ta: "ஜிர்கோனியா கேப்", hi: "जिरकोनिया कैप", te: "జిర్కోనియా క్యాప్", kn: "ಜಿರ್ಕೋನಿಯಾ ಕ್ಯಾಪ್", ml: "സിർക്കോണിയ ക്യാപ്" },
        material: "Monolithic Zirconium Oxide",
        indication: { en: "Back teeth (Molars), Heavy biters (Bruxism).", ta: "கடவாய் பற்கள்." },
        contraindication: "None (Biocompatible).",
        lifespan: "15+ Years (Lifetime Warranty often available)",
        patientPitch: {
            en: "Strong as steel, looks like a tooth. Metal-free, so no black lines near gums.",
            ta: "உலோகம் இல்லாதது. மிகவும் உறுதியானது. ஈறில் கருப்பு கோடு வராது.",
            te: "స్టీల్ అంత గట్టిది. సహజమైన పన్ను లాగా ఉంటుంది.",
            hi: "स्टील जैसा मजबूत। असली दांत जैसा दिखता है।",
            kn: "ಉಕ್ಕಿನಷ್ಟು ಬಲವಾದದ್ದು. ನೈಸರ್ಗಿಕ ಹಲ್ಲಿನಂತೆ ಕಾಣುತ್ತದೆ.",
            ml: "ഉരുക്ക് പോലെ ശക്തം. യഥാർത്ഥ പല്ല് പോലെ തോന്നും."
        }
    },
    'emax_crown': {
        id: 'emax_crown',
        type: 'Fixed',
        name: { en: "E-max Crown (Lithium Disilicate)", ta: "கண்ணாடி போன்ற கேப் (E-max)", hi: "ई-मैक्स कैप", te: "ఈ-మాక్స్ క్యాప్", kn: "ಇ-ಮ್ಯಾಕ್ಸ್ ಕ್ಯಾಪ್", ml: "ഇ-മാക്സ് ക്യാപ്" },
        material: "Lithium Disilicate Ceramic",
        indication: { en: "Front teeth (Smile Zone), Veneers.", ta: "முன் பற்கள் (அழகுக்காக)." },
        contraindication: "Long span bridges (Not strong enough for 3+ teeth).",
        lifespan: "10-15 Years",
        patientPitch: {
            en: "The most beautiful option. Mimics natural enamel transparency perfectly.",
            ta: "மிகவும் அழகானது. அசல் பல் போலவே இருக்கும்.",
            hi: "सबसे सुंदर विकल्प। बिल्कुल असली दांत जैसा पारदर्शी।",
            te: "చాలా అందంగా ఉంటుంది. అసలు పన్నులానే కనిపిస్తుంది.",
            kn: "ಅತ್ಯಂತ ಸುಂದರವಾದ ಆಯ್ಕೆ.",
            ml: "ഏറ്റവും മനോഹരമായ ഓപ്ഷൻ."
        }
    },

    // ==========================================
    // 2. REMOVABLE PROSTHODONTICS (RPD & CD)
    // ==========================================
    'cast_partial_denture': {
        id: 'cast_partial_denture',
        type: 'Removable',
        name: { en: "Cast Partial Denture (Metal Frame)", ta: "உலோக பல் செட்", hi: "कास्ट पार्शियल जबड़ा", te: "మెటల్ ఫ్రేమ్ పళ్ళ సెట్", kn: "ಮೆಟಲ್ ಫ್ರೇಮ್ ಸೆಟ್", ml: "മെറ്റൽ ഫ്രെയിം പല്ലുസെറ്റ്" },
        material: "Cobalt-Chromium Alloy + Acrylic",
        indication: { en: "Multiple missing teeth where implants are too expensive.", ta: "பல பற்கள் இல்லாத போது." },
        contraindication: "Metal allergy. Esthetic concern (Clasps visible).",
        lifespan: "10 Years",
        patientPitch: {
            en: "Very sturdy and thin. It doesn't cover the whole roof of your mouth like plastic ones.",
            ta: "மிகவும் மெல்லியதாக இருக்கும். பேச சிரமம் இருக்காது.",
            hi: "बहुत मजबूत और पतला। प्लास्टिक वाले जैसा मोटा नहीं होता।",
            te: "చాలా గట్టిగా మరియు సన్నగా ఉంటుంది.",
            kn: "ಬಹಳ ಬಲವಾದ ಮತ್ತು ತೆಳುವಾದದ್ದು.",
            ml: "വളരെ ശക്തവും കനം കുറഞ്ഞതുമാണ്."
        }
    },
    'flexible_denture': {
        id: 'flexible_denture',
        type: 'Removable',
        name: { en: "Flexible Denture (Valplast)", ta: "வளையும் பல் செட்", hi: "लचीला जबड़ा", te: "ఫ్లెక్సిబుల్ పళ్ళ సెట్", kn: "ಫ್ಲೆಕ್ಸಿಬಲ್ ಸೆಟ್", ml: "ഫ്ലെക്സിബിൾ പല്ലുസെറ്റ്" },
        material: "Thermoplastic Nylon",
        indication: { en: "1-2 missing teeth. Patient hates metal hooks.", ta: "1-2 பற்கள் இல்லாத போது." },
        contraindication: "Flat ridges (Needs support).",
        lifespan: "3-5 Years",
        patientPitch: {
            en: "Invisible hooks. Soft and comfortable on the gums.",
            ta: "இரும்பு கம்பி தெரியாது. ஈறுகளுக்கு மென்மையாக இருக்கும்.",
            hi: "अदृश्य हुक। मसूड़ों के लिए आरामदायक।",
            te: "కొక్కెలు కనిపించవు. చిగుళ్ళకు సౌకర్యంగా ఉంటుంది.",
            kn: "ಹುಕ್ ಕಾಣಿಸುವುದಿಲ್ಲ. ಒಸಡುಗಳಿಗೆ ಆರಾಮದಾಯಕ.",
            ml: "ഹുക്കുകൾ കാണാൻ കഴിയില്ല. മോണയ്ക്കും സുഖകരമാണ്."
        }
    },
    'bps_complete_denture': {
        id: 'bps_complete_denture',
        type: 'Removable',
        name: { en: "BPS Denture (Suction)", ta: "BPS முழு பல் செட்", hi: "बीपीएस जबड़ा", te: "BPS పళ్ళ సెట్", kn: "BPS ಪೂರ್ಣ ಸೆಟ್", ml: "BPS പല്ലുസെറ്റ്" },
        material: "High Impact Acrylic",
        indication: { en: "Complete tooth loss. Need strong grip.", ta: "மொத்த பற்களும் இல்லாத போது." },
        contraindication: "Severe bone loss (may need implants).",
        lifespan: "5-7 Years",
        patientPitch: {
            en: "High quality Swiss denture. Fits tight using suction (vacuum effect).",
            ta: "வாயில் கச்சிதமாக பிடிக்கும். கழன்று விழாது.",
            te: "గట్టిగా పట్టుకుంటుంది. జారిపోదు.",
            hi: "उच्च गुणवत्ता वाला जबड़ा। वैक्यूम से कसकर फिट बैठता है।",
            kn: "ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟದ ಸೆಟ್. ಗಟ್ಟಿಯಾಗಿ ಕುಳಿತುಕೊಳ್ಳುತ್ತದೆ.",
            ml: "ഉയർന്ന നിലവാരമുള്ള പല്ല് സെറ്റ്. ഇളകിപ്പോകില്ല."
        }
    }
};

export class ProsthoHelper {

    /**
     * Decision Matrix: Implant vs Bridge
     * Helps patients choose based on condition of adjacent teeth.
     */
    static compareImplantVsBridge(adjacentTeethStatus: 'Healthy' | 'Heavily Filled'): string {

        // Scenario 1: Healthy Neighbors -> Implant is best (Conservative)
        if (adjacentTeethStatus === 'Healthy') {
            return "✅ **Recommendation: IMPLANT.** \n**Why?** A Bridge requires grinding down two healthy neighbor teeth. An Implant touches nothing. Save your natural teeth.";
        }

        // Scenario 2: Damaged Neighbors -> Bridge is smart (Protective)
        if (adjacentTeethStatus === 'Heavily Filled') {
            return "⚖️ **Recommendation: BRIDGE.** \n**Why?** Since the neighbor teeth are already damaged/filled, putting caps (Bridge) on them actually protects them. You fix 3 teeth at once.";
        }

        return "Consult Doctor for X-ray analysis.";
    }

    /**
     * Ante's Law Check (Safety for Bridges)
     * "The root surface area of abutment teeth must be >= missing teeth."
     */
    static checkBridgeViability(missingCount: number): string {
        if (missingCount >= 3) {
            return "⛔ **Risk:** Bridge span is too long (3 missing teeth). \n**Ante's Law Warning:** The supporting teeth will likely fail under the heavy load. \n**Advise:** Implants or Removable Denture.";
        }
        return "✅ **Viable:** A fixed bridge is biomechanically safe for this gap.";
    }

    /**
     * Troubleshooting Loose Dentures
     * Common complaint management
     */
    static troubleshootDenture(symptom: 'Loose' | 'Sore Spot' | 'Clicking'): string {
        if (symptom === 'Loose') return "⚠️ **Problem:** Poor suction or bone shrinkage. \n**Solution:** Relining (adding a cushion layer) or Implant-supported Overdenture.";
        if (symptom === 'Sore Spot') return "⚠️ **Problem:** High point or sharp edge rubbing gum. \n**Solution:** Minor adjustment needed. Do not wear for 24h before visit.";
        return "Check occlusion.";
    }
}
