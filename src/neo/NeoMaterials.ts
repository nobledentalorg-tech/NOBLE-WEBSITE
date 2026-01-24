import { LocalizedText } from '../types/neoSchema';

// Neo Dental Materials Module - Multi-Lingual Edition
// Covers: DentCare Zirconia, Ivoclar e.max, DMLS PFM, BPS Dentures, and Clinical Fillings.

export interface DentalMaterial {
    id: string;
    brandName: string;
    category: 'Crown' | 'Denture' | 'Filling' | 'Implant';
    costTier: 'Budget' | 'Standard' | 'Premium' | 'Luxury';
    composition: string;
    strengthMPa: string;
    estheticScore: number; // 1-10
    warranty: string;
    durability: string; // e.g. "15+ Years"
    bestFor: LocalizedText;
    doctorPitch: LocalizedText;
}

// --- BENCHMARK ---
export const NATURAL_TOOTH_STATS = {
    enamel: { strength: "380 MPa", note: "Outer Shell" },
    dentin: { strength: "250 MPa", note: "Inner Core" }
};

export const DENTAL_MATERIALS_DB: Record<string, DentalMaterial> = {

    // ==========================================
    // 1. CROWNS & BRIDGES
    // ==========================================

    'dentcare_zirconia': {
        id: 'dentcare_zirconia',
        brandName: "DentCare Zirconia Platinum",
        category: 'Crown',
        costTier: 'Luxury',
        composition: "Monolithic Zirconium Oxide (4Y-TZP)",
        strengthMPa: "1200 MPa (3x Stronger than Enamel)",
        estheticScore: 9,
        warranty: "Lifetime Warranty",
        durability: "Lifetime (Virtually Unbreakable)",
        bestFor: {
            en: "Back teeth (Molars) and heavy grinders.",
            ta: "கடவாய் பற்கள் மற்றும் பற்களை கடிக்கும் பழக்கம் உள்ளவர்களுக்கு.",
            te: "నములు దంతాలకు (Molars) ఇది చాలా మంచిది.",
            hi: "पीछे के दांतों के लिए सबसे अच्छा।",
            kn: "ದವಡೆ ಹಲ್ಲುಗಳಿಗೆ ಉತ್ತಮ.",
            ml: "അണപ്പല്ലുകൾക്ക് ഏറ്റവും അനുയോജ്യം."
        },
        doctorPitch: {
            en: "This is the 'Diamond' of dentistry. Milled by robots for a perfect fit. It comes with a Lifetime Warranty card.",
            ta: "இது வைரத்தை விட உறுதியானது. ரோபோக்களால் (CAD/CAM) தயாரிக்கப்படுவதால் மிகத் துல்லியமாக இருக்கும். இதற்கு ஆயுட்கால வாரண்டி உண்டு.",
            te: "ఇది చాలా గట్టిగా ఉంటుంది, అచ్చం మీ అసలు పన్ను లాగే కనిపిస్తుంది. దీనికి లైఫ్ టైమ్ వారంటీ ఉంది.",
            hi: "यह डायमंड जैसा मजबूत है। रोबोट द्वारा बनाया गया है, इसलिए यह एकदम फिट बैठता है। लाइफटाइम वारंटी के साथ आता है।",
            kn: "ಇದು ವಜ್ರದಷ್ಟೇ ಗಟ್ಟಿ. ರೊಬೊಟಿಕ್ ತಂತ್ರಜ್ಞಾನದಿಂದ ತಯಾರಿಸಲಾಗಿದೆ. ಇದಕ್ಕೆ ಲೈಫ್ ಟೈಮ್ ವಾರಂಟಿ ಇದೆ.",
            ml: "ഇത് വജ്രം പോലെ ശക്തമാണ്. റോബോട്ടുകൾ നിർമ്മിക്കുന്നതിനാൽ കൃത്യമായ അളവിൽ ലഭിക്കും. ഇതിന് ലൈഫ് ടൈം വാറണ്ടി ഉണ്ട്."
        }
    },

    'ips_emax': {
        id: 'ips_emax',
        brandName: "IPS e.max (Ivoclar Switzerland)",
        category: 'Crown',
        costTier: 'Premium',
        composition: "Lithium Disilicate Glass Ceramic",
        strengthMPa: "400 MPa (Natural Tooth Strength)",
        estheticScore: 10,
        warranty: "10 Years",
        durability: "10-15 Years",
        bestFor: {
            en: "Front teeth (Smile Design) and Veneers.",
            ta: "முன் பற்கள் மற்றும் அழகு சிகிச்சைக்கு.",
            te: "ముందు పళ్లకు మరియు అందానికి.",
            hi: "सामने के दांतों और स्माइल डिजाइन के लिए।",
            kn: "ಮುಂದಿನ ಹಲ್ಲುಗಳಿಗೆ (ಸ್ಮೈಲ್ ಡಿಸೈನ್).",
            ml: "മുൻപല്ലുകൾക്കും സൗന്ദര്യ ചികിത്സയ്ക്കും."
        },
        doctorPitch: {
            en: "The most beautiful crown in the world. It mimics natural enamel transparency perfectly. Used by movie stars.",
            ta: "உலகிலேயே மிக அழகான கேப் இதுதான். சினிமா நட்சத்திரங்கள் பயன்படுத்துவது. அசல் பல் போலவே இருக்கும்.",
            te: "ఇది ప్రపంచంలోనే అత్యంత అందమైన క్యాప్. సినిమా స్టార్స్ వాడేది ఇదే.",
            hi: "यह दुनिया का सबसे सुंदर क्राउन है। यह बिल्कुल असली दांत जैसा दिखता है।",
            kn: "ಇದು ಅತ್ಯಂತ ಸುಂದರವಾದ ಕ್ಯಾಪ್. ಸಿನಿಮಾ ತಾರೆಯರು ಬಳಸುವಂತದ್ದು.",
            ml: "ലോകത്തിലെ തന്നെ ഏറ്റവും മനോഹരമായ ക്യാപ്പ്. സിനിമാ താരങ്ങൾ ഉപയോഗിക്കുന്നത് ഇതാണ്."
        }
    },

    'dmls_pfm': {
        id: 'dmls_pfm',
        brandName: "DentCare DMLS PFM (Laser)",
        category: 'Crown',
        costTier: 'Standard',
        composition: "Laser Sintered Metal + Ceramic",
        strengthMPa: "800 MPa (Metal Core)",
        estheticScore: 7,
        warranty: "5 Years",
        durability: "7-10 Years",
        bestFor: {
            en: "Budget-friendly strong bridges.",
            ta: "குறைந்த செலவில் உறுதியான பல் செட்.",
            te: "తక్కువ ఖర్చులో గట్టి పళ్ళు.",
            hi: "कम बजट में मजबूत दांत।",
            kn: "ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ಗಟ್ಟಿಯಾದ ಹಲ್ಲುಗಳು.",
            ml: "കുറഞ്ഞ ചിലവിൽ ഉറപ്പുള്ള പല്ലുകൾ."
        },
        doctorPitch: {
            en: "Better than local caps. Made with Laser (DMLS) technology for zero gaps. Strong metal inside.",
            ta: "சாதாரண கேப் விட இது சிறந்தது. லேசர் தொழில்நுட்பத்தில் உருவானது. உள்ளே உலோகம் இருப்பதால் நல்ல உறுதி கிடைக்கும்.",
            te: "సాధారణ క్యాప్ కంటే ఇది మంచిది. లేజర్ టెక్నాలజీతో తయారైంది.",
            hi: "साधारण कैप से बेहतर। लेजर तकनीक से बना है, इसलिए फिटिंग अच्छी आती है।",
            kn: "ಸಾಮಾನ್ಯ ಕ್ಯಾಪ್ಗಿಂತ ಉತ್ತಮ. ಲೇಸರ್ ತಂತ್ರಜ್ಞಾನದಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ.",
            ml: "സാധാരണ ക്യാപ്പിനേക്കാൾ നല്ലത്. ലേസർ സാങ്കേതികവിദ്യ ഉപയോഗിച്ചാണ് നിർമ്മാണം."
        }
    },

    // ==========================================
    // 2. DENTURES (Removable)
    // ==========================================

    'bps_denture': {
        id: 'bps_denture',
        brandName: "BPS Dentures (Ivoclar Bio-Functional)",
        category: 'Denture',
        costTier: 'Premium',
        composition: "High Impact Acrylic + SR Phonares Teeth",
        strengthMPa: "High Flexural Strength",
        estheticScore: 9,
        warranty: "5 Years",
        durability: "5-8 Years",
        bestFor: {
            en: "Complete dentures with high suction (Grip).",
            ta: "கழன்று விழாத முழு பல் செட்.",
            te: "గట్టిగా పట్టుకునే పూర్తి పళ్ళు.",
            hi: "पूरी बत्तीसी जो गिरती नहीं है।",
            kn: "ಜಾರಿ ಬೀಳದ ಸಂಪೂರ್ಣ ಹಲ್ಲು ಸೆಟ್.",
            ml: "ഇളകിപ്പോകാത്ത മുഴുവൻ പല്ല് செட்."
        },
        doctorPitch: {
            en: "These are 'Injection Molded' for a vacuum fit. They stick to your gums better and allow you to eat hard food.",
            ta: "இது வாயில் கச்சிதமாகப் பிடிக்கும் (Suction). கடினமான உணவையும் சாப்பிடலாம்.",
            te: "ఇవి నోటిలో గట్టిగా అతుక్కుంటాయి. గట్టి పదార్థాలు కూడా తినవచ్చు.",
            hi: "यह मसूड़ों से चिपक जाता है। आप सख्त खाना भी खा सकते हैं।",
            kn: "ಇದು ಬಾಯಿಯಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಕುಳಿತುಕೊಳ್ಳುತ್ತದೆ. ಗಟ್ಟಿಯಾದ ಆಹಾರವನ್ನೂ ತಿನ್ನಬಹುದು.",
            ml: "ഇത് വായയിൽ കൃത്യമായി ഇരിക്കും. കട്ടിയുള്ള ഭക്ഷണം കഴിക്കാനും സാധിക്കും."
        }
    },

    'flexible_denture': {
        id: 'flexible_denture',
        brandName: "Valplast Flexible",
        category: 'Denture',
        costTier: 'Standard',
        composition: "Nylon Resin",
        strengthMPa: "Flexible",
        estheticScore: 8,
        warranty: "1 Year",
        durability: "3-5 Years",
        bestFor: {
            en: "Replacing 1-2 missing teeth comfortably.",
            ta: "ஒன்று இரண்டு பற்கள் கட்ட.",
            te: "ఒకటి రెండు పళ్ళు లేనప్పుడు.",
            hi: "एक या दो दांत लगवाने के लिए।",
            kn: "ಒಂದು ಅಥವಾ ಎರಡು ಹಲ್ಲುಗಳನ್ನು ಹಾಕಿಸಲು.",
            ml: "ഒന്നോ രണ്ടോ പല്ലുകൾ വയ്ക്കാൻ."
        },
        doctorPitch: {
            en: "No metal hooks. It is soft, flexible, and blends with your gums.",
            ta: "இதில் இரும்பு கம்பி இருக்காது. ஈறுகளுக்கு மென்மையாக இருக்கும்.",
            te: "ఇందులో ఇనుప తీగలు ఉండవు. మెత్తగా ఉంటుంది.",
            hi: "इसमें लोहे के हुक नहीं होते। यह मुलायम होता है।",
            kn: "ಇದರಲ್ಲಿ ಲೋಹದ ತಂತಿ ಇರುವುದಿಲ್ಲ. ಮೃದುವಾಗಿರುತ್ತದೆ.",
            ml: "ഇതിൽ കമ്പികൾ ഉണ്ടാവില്ല. മോണയ്ക്ക് ക്ഷതം ഏൽക്കില്ല."
        }
    },

    // ==========================================
    // 3. FILLINGS (Clinical)
    // ==========================================

    'ivoclar_composite': {
        id: 'ivoclar_composite',
        brandName: "Ivoclar Tetric N-Ceram",
        category: 'Filling',
        costTier: 'Premium',
        composition: "Nano-Hybrid Composite",
        strengthMPa: "120 MPa",
        estheticScore: 9,
        warranty: "N/A",
        durability: "5-7 Years",
        bestFor: {
            en: "Invisible fillings.",
            ta: "கண்ணுக்கு தெரியாத பல் அடைப்பு.",
            te: "కనిపించని సిమెంట్.",
            hi: "न दिखने वाली फिलिंग।",
            kn: "ಕಾಣಿಸದ ಫಿಲ್ಲಿಂಗ್.",
            ml: "കാണാൻ കഴിയാത്ത ഫില്ലിംഗ്."
        },
        doctorPitch: {
            en: "Swiss Technology. It absorbs the color of your tooth and becomes invisible.",
            ta: "இது பல்லின் நிறத்தையே எடுத்துக்கொள்ளும். அடைத்ததே தெரியாது.",
            te: "ఇది మీ పన్ను రంగులోనే ఉంటుంది. సిమెంట్ వేసినట్లు తెలియదు.",
            hi: "यह आपके दांत के रंग जैसा हो जाता है। पता भी नहीं चलेगा।",
            kn: "ಇದು ಹಲ್ಲಿನ ಬಣ್ಣವನ್ನೇ ಹೋಲುತ್ತದೆ. ಫಿಲ್ಲಿಂಗ್ ಮಾಡಿದ್ದು ತಿಳಿಯುವುದಿಲ್ಲ.",
            ml: "ഇത് പല്ലിന്റെ നിറം തന്നെ സ്വീകരിക്കുന്നു. ഫില്ലിംഗ് ചെയ്തെന്ന് തിരിച്ചറിയാൻ കഴിയില്ല."
        }
    }
};

export class MaterialHelper {
    /**
     * Comparison logic for "Local vs Branded"
     */
    static getComparisonScript(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "சாதாரண லேப்: கைகளால் செய்யப்படுவது (சரியாக பொருந்தாது).\nடென்ட்கேர்: ரோபோக்களால் செய்யப்படுவது (துல்லியமானது).";
        if (lang === 'te') return "సాధారణ ల్యాబ్: చేతితో చేస్తారు.\nడెంట్ కేర్: మెషిన్ తో చేస్తారు (ఖచ్చితంగా ఉంటుంది).";
        if (lang === 'hi') return "लोकल: हाथ से बनाया जाता है।\nब्रांडेड: मशीन से बनता है, फिटिंग अच्छी होती है।";
        if (lang === 'kn') return "ಸ್ಥಳೀಯ ಲ್ಯಾಬ್: ಕೈಯಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ.\nಡೆಂಟ್ ಕೇರ್: ಯಂತ್ರದಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ (ನಿಖರವಾಗಿದೆ).";
        if (lang === 'ml') return "ലോക്കൽ ലാബ്: കൈകൊണ്ട് നിർമ്മിക്കുന്നത്.\nഡെന്റ് കെയർ: മെഷീൻ വഴി നിർമ്മിക്കുന്നത് (കൃത്യമായ അളവിൽ).";
        return "Local Lab: Handmade (Risk of gaps).\nDentCare: CAD/CAM Sintered (Zero gaps).";
    }

    /**
     * Explains the Strength Difference (The Science Pitch)
     */
    static compareStrength(materialId: string): string {
        const mat = DENTAL_MATERIALS_DB[materialId];
        if (!mat) return "";

        const naturalStrength = 380; // Enamel
        const matStrength = parseInt(mat.strengthMPa) || 0;

        if (matStrength > naturalStrength * 2) {
            return `💪 **Science Fact:** ${mat.brandName} (${mat.strengthMPa}) is over **3x stronger** than your natural enamel. Unbreakable.`;
        }
        if (matStrength >= naturalStrength) {
            return `⚖️ **Biomimetic:** ${mat.brandName} matches natural tooth strength exactly. This prevents wear on opposing teeth.`;
        }
        return `⚠️ **Note:** ${mat.brandName} is softer than natural teeth. Gentle chewing advised.`;
    }
}
