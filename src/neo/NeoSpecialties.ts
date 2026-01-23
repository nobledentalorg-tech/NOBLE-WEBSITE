import { LocalizedText } from '../types/neoSchema';

// Neo Dental Specialties Module
// Covers: Endodontics (Pain), Orthodontics (Alignment), Oral Surgery (Impactions)

export interface SpecialtyCondition {
    id: string;
    specialty: 'Endo' | 'Ortho' | 'Surgery';
    diagnosis: string;
    severityIndex: number; // 1 (Cosmetic) to 10 (Medical Emergency)
    description: LocalizedText;
    symptoms?: LocalizedText;
    treatment: LocalizedText;
}

// ==========================================
// 1. ENDODONTICS (The Pain Department)
// ==========================================
export const ENDO_DB: Record<string, SpecialtyCondition> = {
    'reversible_pulpitis': {
        id: 'reversible_pulpitis',
        specialty: 'Endo',
        diagnosis: "Reversible Pulpitis",
        severityIndex: 3,
        description: {
            en: "Mild inflammation of the nerve. The tooth can still heal itself.",
            ta: "லேசான நரம்பு வீக்கம். பல் தன்னைத்தானே குணப்படுத்திக்கொள்ளும்.",
            te: "నరం యొక్క తేలికపాటి వాపు. పన్ను దానంతట అదే నయమవుతుంది.",
            hi: "नस में हल्की सूजन। दांत अभी भी ठीक हो सकता है।",
            kn: "ನರದ ಸೌಮ್ಯ ಉರಿಯೂತ. ಹಲ್ಲು ಗುಣವಾಗಬಹುದು.",
            ml: "നാഡിക്ക് ചെറിയ വീക്കം. പല്ലിന് സ്വയം ഭേദമാക്കാൻ കഴിയും."
        },
        symptoms: {
            en: "Sharp pain with cold/sweet that vanishes instantly when trigger is removed.",
            ta: "குளிர்ந்த நீர் பட்டால் கூச்சம், ஆனால் உடனே சரியாகிவிடும்.",
            te: "చల్లని పదార్థం తగిలితే జివ్వుమంటుంది, వెంటనే తగ్గుతుంది.",
            hi: "ठंडा/मीठा खाने पर तेज दर्द, जो तुरंत ठीक हो जाता है।",
            kn: "ತಂಪು/ಸಿಹಿ ತಿಂದರೆ ನೋವು, ತಕ್ಷಣ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
            ml: "തണുത്തത് കഴിക്കുമ്പോൾ പുളിപ്പ്, പെട്ടെന്ന് മാറുന്നു."
        },
        treatment: {
            en: "Caries Removal + Protective Filling (Dycal/GIC)",
            ta: "சொத்தை நீக்கம் மற்றும் சிமெண்ட் பூசுதல்",
            te: "పుచ్చు తీసివేత మరియు ఫిల్లింగ్",
            hi: "कीड़ा निकालना और फिलिंग",
            kn: "ಕುಳಿ ತುಂಬುವುದು",
            ml: "പോടുള്ള ഭാഗം അടയ്ക്കൽ"
        }
    },
    'irreversible_pulpitis': {
        id: 'irreversible_pulpitis',
        specialty: 'Endo',
        diagnosis: "Symptomatic Irreversible Pulpitis",
        severityIndex: 8, // High Pain = Urgent
        description: {
            en: "The nerve is damaged beyond repair. Bacteria have reached the core.",
            ta: "பல் நரம்பு பாதிக்கப்பட்டுள்ளது. வேர் சிகிச்சை அவசியம்.",
            te: "నరం దెబ్బతింది. బాక్టీరియా లోపలికి వెళ్ళింది.",
            hi: "नस पूरी तरह खराब हो चुकी है।",
            kn: "ನರ ಹಾನಿಯಾಗಿದೆ. ಬಾಕ್ಟೀರಿಯಾ ಸೋಂಕು ತಗುಲಿದೆ.",
            ml: "നാഡിക്ക് സാരമായ കേടുപാട് സംഭവിച്ചു."
        },
        symptoms: {
            en: "Lingering pain (>30 sec) after cold/hot. Pain keeps you awake at night.",
            ta: "வலி நீண்ட நேரம் நீடிக்கும். இரவில் தூங்க விடாத வலி.",
            te: "నొప్పి చాలా సేపు ఉంటుంది. రాత్రి నిద్రపట్టదు.",
            hi: "दर्द देर तक रहता है। रात में दर्द के कारण नींद नहीं आती।",
            kn: "ರಾತ್ರಿ ನಿದ್ದೆ ಬರದಷ್ಟು ನೋವು.",
            ml: "രാത്രിയിൽ ഉറങ്ങാൻ സമ്മതിക്കാത്ത വേദന."
        },
        treatment: {
            en: "Root Canal Treatment (RCT)",
            ta: "வேர் சிகிச்சை (Root Canal)",
            te: "రూట్ కెనాల్ చికిత్స",
            hi: "रूट कैनाल ट्रीटमेंट (RCT)",
            kn: "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ",
            ml: "റൂട്ട് കനാൽ ചികിത്സ"
        }
    },
    'necrosis': {
        id: 'necrosis',
        specialty: 'Endo',
        diagnosis: "Pulp Necrosis (Dead Tooth)",
        severityIndex: 6, // Dangerous but often painless
        description: {
            en: "The nerve inside the tooth is dead. You may feel no pain, but infection is building up.",
            ta: "பல் நரம்பு இறந்துவிட்டது. வலி இருக்காது, ஆனால் உள்ளே சீழ் வைக்கும்.",
            te: "పంటి నరం చచ్చిపోయింది. నొప్పి లేకపోయినా లోపల ఇన్ఫెక్షన్ ఉంటుంది.",
            hi: "दांत की नस मर चुकी है। दर्द नहीं होगा, लेकिन संक्रमण बढ़ रहा है।",
            kn: "ಹಲ್ಲಿನ ನರ ಸತ್ತಿದೆ. ಸೋಂಕು ಹೆಚ್ಚಾಗುತ್ತಿದೆ.",
            ml: "പല്ലിലെ നാഡി നശിച്ചു. പഴുപ്പ് ഉണ്ടാകാൻ സാധ്യതയുണ്ട്."
        },
        symptoms: {
            en: "Tooth discoloration (darkening). No sensation to cold.",
            ta: "பல் கருப்பாக மாறுதல். குளிர்ச்சியான உணர்வு தெரியாது.",
            te: "పన్ను నల్లగా మారుతుంది. చల్లదనం తెలియదు.",
            hi: "दांत काला पड़ना। ठंडे का असर नहीं होता।",
            kn: "ಹಲ್ಲು ಕಪ್ಪಾಗುವುದು.",
            ml: "പല്ല് കറുക്കുന്നു. തണുപ്പ് അറിയുന്നില്ല."
        },
        treatment: {
            en: "RCT + Crown (Essential to prevent fracture)",
            ta: "வேர் சிகிச்சை மற்றும் கேப் (Crown)",
            te: "RCT మరియు క్యాప్",
            hi: "RCT और कैप",
            kn: "RCT ಮತ್ತು ಕ್ರೌನ್",
            ml: "RCT പിന്നെ ക്യാപ്പ്"
        }
    }
};

// ==========================================
// 2. ORTHODONTICS (The Smile Department)
// ==========================================
export const ORTHO_DB: Record<string, SpecialtyCondition> = {
    'class_1_crowding': {
        id: 'class_1_crowding',
        specialty: 'Ortho',
        diagnosis: "Class I Crowding",
        severityIndex: 2, // Cosmetic
        description: {
            en: "Jaw relationship is normal, but teeth are crooked or overlapping.",
            ta: "தாடை சரியாக உள்ளது, ஆனால் பற்கள் முன்னும் பின்னும் உள்ளன.",
            te: "దవడ బాగానే ఉంది, కానీ పళ్లు వంకరగా ఉన్నాయి.",
            hi: "जबड़ा ठीक है, लेकिन दांत टेढ़े-मेढ़े हैं।",
            kn: "ದವಡೆ ಸರಿಯಾಗಿದೆ, ಆದರೆ ಹಲ್ಲುಗಳು ಓರೆಯಾಗಿವೆ.",
            ml: "താടിയെല്ല് ശരിയാണ്, പക്ഷെ പല്ലുകൾ നിര തെറ്റിയാണ്."
        },
        treatment: {
            en: "Invisalign (Aligners) or Metal/Ceramic Braces",
            ta: "இன்விசலைன் (கண்ணாடி கவசம்) அல்லது கம்பி சிகிச்சை",
            te: "క్లిప్పులు లేదా అలైయినర్స్",
            hi: "तार या इनविजिलाइन",
            kn: "ಕ್ಲಿಪ್ ಅಥವಾ ಅಲೈನರ್ಸ್",
            ml: "ക്ലിപ്പ് അല്ലെങ്കിൽ അലൈനറുകൾ"
        }
    },
    'class_2_overbite': {
        id: 'class_2_overbite',
        specialty: 'Ortho',
        diagnosis: "Class II (Overbite/Buck Teeth)",
        severityIndex: 4, // Functional & Cosmetic
        description: {
            en: "Upper teeth stick out significantly past lower teeth.",
            ta: "மேல் பற்கள் முன்னால் நீட்டிக்கொண்டுள்ளன (ஏற்றி பல்).",
            te: "పై పళ్లు ముందుకు ఉన్నాయి.",
            hi: "ऊपर के दांत आगे निकले हुए हैं।",
            kn: "ಮೇಲಿನ ಹಲ್ಲುಗಳು ಮುಂದಕ್ಕೆ ಬಂದಿವೆ.",
            ml: "മുകളിലത്തെ പല്ലുകൾ ഉന്തി നിൽക്കുന്നു."
        },
        treatment: {
            en: "Functional Appliances (Kids) or Braces/Extraction (Adults)",
            ta: "சிறு வயதில் தாடை வளர்ச்சி சிகிச்சை, பெரியவர்களுக்கு கம்பி சிகிச்சை",
            te: "చిన్నపిల్లలకు గ్రోత్ ప్లేట్స్, పెద్దలకు క్లిప్పులు",
            hi: "ब्रेसेस",
            kn: "ಬ್ರೇಸಸ್",
            ml: "ക്ലിപ്പ് ചികിത്സ"
        }
    }
};

// ==========================================
// 3. ORAL SURGERY (The Extraction Dept)
// ==========================================
export const SURGERY_DB: Record<string, SpecialtyCondition> = {
    'simple_extraction': {
        id: 'simple_extraction',
        specialty: 'Surgery',
        diagnosis: "Grossly Decayed / Mobile Tooth",
        severityIndex: 5,
        description: {
            en: "Tooth is too damaged to save. Removal is straightforward.",
            ta: "பல் மிகவும் சேதமடைந்துள்ளது. அதை எடுக்க வேண்டும்.",
            te: "పన్ను బాగా పాడైపోయింది. తీసివేయాలి.",
            hi: "दांत बहुत खराब हो गया है। निकालना पड़ेगा।",
            kn: "ಹಲ್ಲು ತುಂಬಾ ಹಾಳಾಗಿದೆ. ಕೀಳಬೇಕು.",
            ml: "പല്ല് തീരെ നശിച്ചുപോയി. എടുത്തു കളയണം."
        },
        treatment: {
            en: "Simple Extraction under Local Anesthesia",
            ta: "சாதாரண பல் பிடுங்குதல்",
            te: "సాధారణ పన్ను తొలగింపు",
            hi: "साधारण दांत निकालना",
            kn: "ಸಾಮಾನ್ಯ ಹಲ್ಲು ಕೀಳುವಿಕೆ",
            ml: "സാധാരണ പല്ലെടുക്കൽ"
        }
    },
    'impacted_wisdom': {
        id: 'impacted_wisdom',
        specialty: 'Surgery',
        diagnosis: "Impacted Third Molar (Wisdom Tooth)",
        severityIndex: 7, // High Pain
        description: {
            en: "Wisdom tooth is stuck under the bone/gum and pushing other teeth.",
            ta: "ஞானப் பல் எலும்புக்குள் சிக்கியுள்ளது.",
            te: "జ్ఞాన దంతం ఎముకలో ఇరుక్కుపోయింది.",
            hi: "अकल दाढ़ हड्डी के अंदर फंसी है।",
            kn: "ಬುದ್ಧಿ ಹಲ್ಲು ಎಲುಬಿನ ಒಳಗೆ ಸಿಲುಕಿಕೊಂಡಿದೆ.",
            ml: "വിസ്ഡം ടൂത്ത് എല്ലിനുള്ളിൽ കുടുങ്ങി."
        },
        symptoms: {
            en: "Pain at back of jaw, difficulty opening mouth, ear pain.",
            ta: "கடைவாய் வலி, வாய் திறப்பதில் சிரமம், காது வலி.",
            te: "దవడ చివర నొప్పి, నోరు తెరవడం కష్టం.",
            hi: "जबड़े के पीछे दर्द, मुंह खोलने में दिक्कत।",
            kn: "ದವಡೆಯ ಹಿಂಭಾಗದಲ್ಲಿ ನೋವು, ಬಾಯಿ ತೆರೆಯಲು ಕಷ್ಟ.",
            ml: "വായ തുറക്കാൻ ബുദ്ധിമുട്ട്, ചെവി വേദന."
        },
        treatment: {
            en: "Surgical Extraction (Disimpaction)",
            ta: "அறுவை சிகிச்சை மூலம் பல் அகற்றுதல்",
            te: "సర్జరీ ద్వారా పన్ను తొలగింపు",
            hi: "सर्जिकल निष्कर्षण",
            kn: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
            ml: "ശസ്ത്രക്രിയയിലൂടെ നീക്കം ചെയ്യൽ"
        }
    }
};

// ==========================================
// 4. HELPER CLASS
// ==========================================
export class SpecialtyHelper {

    /**
     * Triage Logic: Determines Urgency based on Condition
     */
    static getTriageLevel(severity: number): string {
        if (severity >= 8) return "🚨 **EMERGENCY:** Patient in acute distress. Immediate appointment required.";
        if (severity >= 5) return "⚠️ **PRIORITY:** Condition worsening. Schedule within 48 hours.";
        return "📅 **ROUTINE:** Elective procedure. Schedule at convenience.";
    }

    /**
     * Consolidator for all specialties
     */
    static getCondition(id: string): SpecialtyCondition | undefined {
        return { ...ENDO_DB, ...ORTHO_DB, ...SURGERY_DB }[id];
    }
}
