import { LocalizedText } from '../types/neoSchema';

// Neo Post-Operative Care Module
// Focus: After-care instructions for Extractions, Implants, RCT, Braces, & Dentures.

export interface PostOpInstruction {
    id: string;
    procedureName: LocalizedText;
    dos: LocalizedText[];
    donts: LocalizedText[];
    emergencyTrigger: LocalizedText; // When to call Dr. Dhivakaran immediately
    dietaryAdvice: LocalizedText;
}

export const POST_OP_DB: Record<string, PostOpInstruction> = {

    // ==========================================
    // 1. EXTRACTION / SURGERY CARE
    // ==========================================
    'extraction_care': {
        id: 'extraction_care',
        procedureName: { en: "Tooth Extraction / Surgery", ta: "பல் எடுத்த பிறகு", te: "పన్ను తీసిన తర్వాత", hi: "दांत निकालने के बाद", kn: "ಹಲ್ಲು ತೆಗೆದ ನಂತರ", ml: "പല്ല് പറിച്ച ശേഷം" },
        dos: [
            {
                en: "Bite firmly on the cotton gauze for 1 hour to stop bleeding.",
                ta: "பஞ்சு மீது 1 மணி நேரம் அழுத்தமாக கடிக்கவும்.",
                te: "1 గంట పాటు పత్తిని గట్టిగా కొరకండి.",
                hi: "1 घंटे तक रुई को जोर से दबाकर रखें।",
                kn: "1 ಗಂಟೆ ಹತ್ತಿಯನ್ನು ಗಟ್ಟಿಯಾಗಿ ಕಚ್ಚಿ.",
                ml: "ഒരു മണിക്കൂർ പഞ്ഞി കടിച്ചുപിടിക്കുക."
            },
            {
                en: "Apply Ice Pack externally (cheek) to reduce swelling.",
                ta: "கன்னத்தில் ஐஸ் ஒத்தடம் கொடுக்கவும்.",
                te: "బుగ్గపై ఐస్ ప్యాక్ పెట్టండి.",
                hi: "बर्फ की सिकाई करें।",
                kn: "ಕೆನ್ನೆಯ ಮೇಲೆ ಐಸ್ ಇಡಿ.",
                ml: "കവിളിൽ ഐസ് വെക്കുക."
            }
        ],
        donts: [
            {
                en: "DO NOT spit, rinse, or use a straw for 24 hours (Clot protection).",
                ta: "24 மணி நேரத்திற்கு துப்பவோ, வாய் கொப்பளிக்கவோ, ஸ்ட்ரா (Straw) பயன்படுத்தவோ கூடாது.",
                te: "24 గంటల పాటు ఉమ్మివేయవద్దు. స్ట్రా వాడవద్దు.",
                hi: "24 घंटे तक थूकें नहीं और स्ट्रॉ का इस्तेमाल न करें।",
                kn: "24 ಗಂಟೆಗಳ ಕಾಲ ಉಗುಳಬೇಡಿ. ಸ್ಟ್ರಾ ಬಳಸಬೇಡಿ.",
                ml: "24 മണിക്കൂർ നേരത്തേക്ക് തുപ്പുകയോ വായ കഴുകുകയോ ചെയ്യരുത്."
            },
            {
                en: "No smoking for 3 days (Causes Dry Socket).",
                ta: "3 நாட்களுக்கு புகை பிடிக்கவே கூடாது.",
                te: "3 రోజుల వరకు పొగత్రాగవద్దు.",
                hi: "3 दिन तक धूम्रपान न करें।",
                kn: "3 ದಿನಗಳವರೆಗೆ ಧೂಮಪಾನ ಮಾಡಬೇಡಿ.",
                ml: "3 ദിവസത്തേക്ക് പുകവലിക്കരുത്."
            }
        ],
        dietaryAdvice: {
            en: "Soft, cold diet (Ice cream, Yogurt). No spicy/hot food for 24 hours.",
            ta: "ஜில்லென்று ஐஸ்கிரீம் அல்லது தயிர் சாதம் சாப்பிடவும்.",
            te: "మెత్తటి మరియు చల్లని ఆహారం తీసుకోండి. కారం వద్దు.",
            hi: "ठंडा और नरम खाना खाएं।",
            kn: "ಮೆದುವಾದ ಮತ್ತು ತಣ್ಣನೆಯ ಆಹಾರ ಸೇವಿಸಿ.",
            ml: "തണുത്തതും മൃദുവായതുമായ ഭക്ഷണം കഴിക്കുക."
        },
        emergencyTrigger: {
            en: "Bleeding not stopping after 2 hours OR Fever > 101°F.",
            ta: "ரத்தம் நிற்காமல் வருதல் அல்லது அதிக காய்ச்சல்.",
            te: "2 గంటల తర్వాత కూడా రక్తస్రావం ఆగకపోతే లేదా జ్వరం వస్తే.",
            hi: "खून बहना बंद न होना या तेज बुखार।",
            kn: "2 ಗಂಟೆಯ ನಂತರವೂ ರಕ್ತಸ್ರಾವ ನಿಲ್ಲದಿದ್ದರೆ ಅಥವಾ ಜ್ವರ ಬಂದರೆ.",
            ml: "2 മണിക്കൂറിന് ശേഷവും രക്തസ്രാവം നിലച്ചില്ലെങ്കിൽ അല്ലെങ്കിൽ പനി വന്നാൽ."
        }
    },

    // ==========================================
    // 2. DENTAL IMPLANT SURGERY
    // ==========================================
    'implant_care': {
        id: 'implant_care',
        procedureName: { en: "Dental Implant Surgery", ta: "இம்பிளான்ட் அறுவை சிகிச்சை", hi: "इम्प्लांट सर्जरी", te: "డెంటల్ ఇంప్లాంట్ సర్జరీ", kn: "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ ಸರ್ಜರಿ", ml: "ഡെന്റൽ ഇംപ്ലാന്റ് സർജറി" },
        dos: [
            {
                en: "Keep your head elevated with pillows while sleeping.",
                ta: "தலையணை வைத்து தலை உயர்த்தி படுக்கவும்.",
                te: "పడుకునేటప్పుడు తల ఎత్తుగా ఉంచండి.",
                hi: "सोते समय सिर ऊंचा रखें।",
                kn: "ಮಲಗುವಾಗ ತಲೆ ಎತ್ತರವಾಗಿಡಿ.",
                ml: "ഉറങ്ങുമ്പോൾ തല ഉയർത്തി വെക്കുക."
            },
            {
                en: "Take antibiotics exactly as prescribed.",
                ta: "மருத்துவர் கொடுத்த மருந்தை சரியாக சாப்பிடவும்.",
                te: "డాక్టర్ చెప్పిన విధంగా యాంటీబయాటిక్స్ వాడండి.",
                hi: "बताई गई दवाएं समय पर लें।"
            }
        ],
        donts: [
            {
                en: "Do NOT disturb the surgery site with your tongue or finger.",
                ta: "அறுவை சிகிச்சை செய்த இடத்தை நாக்கால் தொடக்கூடாது.",
                te: "నాలుకతో గాయాన్ని తాకవద్దు.",
                hi: "जीभ या उंगली से घाव को न छुएं।",
                kn: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮಾಡಿದ ಜಾಗವನ್ನು ನಾಕಿನಿಂದ ಮುಟ್ಟಬೇಡಿ.",
                ml: "ശസ്ത്രക്രിയ നടന്ന ഭാഗത്ത് നാവോ വിരലോ ഉപയോഗിച്ച് തൊടരുത്."
            },
            {
                en: "If sinus lift was done: Do NOT blow your nose.",
                ta: "மூக்கை பலமாக சிந்தக்கூடாது.",
                te: "ముక్కు చీదకండి.",
                hi: "नाक न छिड़कें।"
            }
        ],
        dietaryAdvice: {
            en: "Liquid/Pureed diet for 3 days. Do not chew on the implant side.",
            ta: "3 நாட்களுக்கு திரவ உணவு மட்டும். அந்த பக்கம் மெல்லக்கூடாது.",
            te: "3 రోజుల పాటు ద్రవ ఆహారం తీసుకోండి.",
            hi: "3 दिन तक तरल भोजन लें।",
            kn: "3 ದಿನಗಳವರೆಗೆ ದ್ರವ ಆಹಾರ ಸೇವಿಸಿ.",
            ml: "3 ദിവസത്തേക്ക് ദ്രാവകരൂപത്തിലുള്ള ഭക്ഷണം കഴിക്കുക."
        },
        emergencyTrigger: {
            en: "Numbness persisting > 24 hours or Implant feels loose.",
            ta: "உதடு மரத்துப்போதல் சரியாகவில்லை என்றால்.",
            te: "24 గంటల తర్వాత కూడా తిమ్మిరి ఉంటే.",
            hi: "सुन्नपन 24 घंटे से ज्यादा रहे।",
            kn: "24 ಗಂಟೆಯ ನಂತರವೂ ಮರಗಟ್ಟುವಿಕೆ ಇದ್ದರೆ.",
            ml: "24 മണിക്കൂറിന് ശേഷവും മരവിപ്പ് തുടരുകയാണെങ്കിൽ."
        }
    },

    // ==========================================
    // 3. ROOT CANAL TREATMENT (RCT)
    // ==========================================
    'rct_care': {
        id: 'rct_care',
        procedureName: { en: "Root Canal Treatment", ta: "வேர் சிகிச்சை (RCT)", hi: "रूट कैनाल ट्रीटमेंट", te: "రూట్ కెనాల్ ట్రీట్మెంట్", kn: "ಬೇರು ಚಿಕಿತ್ಸೆ", ml: "വേരുചികിത്സ" },
        dos: [
            {
                en: "Take painkillers before the numbness wears off.",
                ta: "மரத்துப்போதல் விலகும் முன்னே வலி மாத்திரை எடுக்கவும்.",
                te: "మత్తు వదలక ముందే నొప్పి నివారణ మందు వాడండి.",
                hi: "सुन्नपन जाने से पहले दर्द की दवा लें।"
            }
        ],
        donts: [
            {
                en: "Do not chew hard food (Nuts/Bones) until the permanent crown is fixed.",
                ta: "கேப் (Crown) போடும் வரை கடினமான உணவை கடிக்க வேண்டாம்.",
                te: "గట్టి పదార్థాలు తినవద్దు.",
                hi: "कठोर चीजें न चबाएं।",
                kn: "ಗಟ್ಟಿಯಾದ ಆಹಾರವನ್ನು ಜಗಿಯಬೇಡಿ.",
                ml: "കട്ടിയുള്ള ഭക്ഷണം കഴിക്കരുത്."
            }
        ],
        dietaryAdvice: {
            en: "Chew on the opposite side to protect the temporary filling.",
            ta: "மறுபுறம் மெல்லவும்.",
            te: "రెండవ వైపు నుండి నమలండి.",
            hi: "दूसरी तरफ से चबाएं।",
            kn: "ಮತ್ತೊಂದು ಬದಿಯಿಂದ ಜಗಿಯಿರಿ.",
            ml: "മറ്റേ വശത്തുകൂടി ഭക്ഷണം ചവയ്ക്കുക."
        },
        emergencyTrigger: {
            en: "Swelling spreading to the eye or difficulty breathing.",
            ta: "கண் அல்லது கழுத்துக்கு பரவும் வீக்கம்.",
            te: "వాపు కంటి వరకు వ్యాపిస్తే లేదా శ్వాస తీసుకోవడం కష్టమైతే.",
            hi: "सूजन आंख या गले तक फैल जाए।",
            kn: "ಬಾವು ಕಣ್ಣಿನವರೆಗೆ ಹರಡಿದರೆ ಅಥವಾ ಉಸಿರಾಟಕ್ಕೆ ತೊಂದರೆಯಾದರೆ.",
            ml: "വീക്കം കണ്ണ് വരെയെത്തിയാൽ അല്ലെങ്കിൽ ശ്വാസമെടുക്കാൻ ബുദ്ധിമുട്ടുണ്ടായാൽ."
        }
    },

    // ==========================================
    // 4. BRACES / ORTHODONTICS
    // ==========================================
    'braces_care': {
        id: 'braces_care',
        procedureName: { en: "Braces / Aligners", ta: "பல் சீரமைப்பு (Clip)", hi: "ब्रेसिज़", te: "క్లిప్పులు", kn: "ಬ್ರೇಸ್‌ಗಳು", ml: "ക്ലിപ്പുകൾ" },
        dos: [
            {
                en: "Use Ortho Wax if the wire pokes your cheek.",
                ta: "கம்பி குத்தினால் மெழுகு (Wax) வைக்கவும்.",
                te: "వైర్ గుచ్చుకుంటే వాక్స్ వాడండి.",
                hi: "अगर तार चुभे तो वैक्स लगाएं।"
            },
            {
                en: "Floss using a threader daily to prevent gum inflammation.",
                ta: "தினமும் பற்களை சுத்தம் செய்யவும்.",
                te: "ప్రతిరోజూ ఫ్లాస్ చేయండి.",
                hi: "रोजाना फ्लॉसिंग करें।"
            }
        ],
        donts: [
            {
                en: "No sticky foods (Caramel, Gum) or hard foods (Whole Apple, Murukku).",
                ta: "மிட்டாய், முறுக்கு போன்றவற்றை தவிர்க்கவும்.",
                te: "అతికే పదార్థాలు తినవద్దు.",
                hi: "चिपकने वाली चीजें न खाएं।",
                kn: "ಅಂಟುವ ಆಹಾರ ಬೇಡ.",
                ml: "ഒട്ടിപ്പിടിക്കുന്ന മിഠായികൾ കഴിക്കരുത്."
            }
        ],
        dietaryAdvice: {
            en: "Cut fruits into small pieces before eating.",
            ta: "பழங்களை சிறு துண்டுகளாக வெட்டி சாப்பிடவும்.",
            te: "పండ్లను చిన్న ముక్కలుగా కోసి తినండి.",
            hi: "फल काटकर खाएं।"
        },
        emergencyTrigger: {
            en: "Broken bracket or wire injury causing bleeding.",
            ta: "கிளிப் உடைந்து ரத்தம் வந்தால்.",
            te: "వైర్ విరిగి రక్తం వస్తే.",
            hi: "तार टूटने से खून आए।"
        }
    },

    // ==========================================
    // 5. DENTURES (New Set)
    // ==========================================
    'denture_care': {
        id: 'denture_care',
        procedureName: { en: "New Dentures", ta: "புதிய பல் செட்", hi: "नकली दांत", te: "కొత్త పళ్ళ సెట్", kn: "ಹೊಸ ಹಲ್ಲುಗಳ ಸೆಟ್", ml: "പുതിയ പല്ലുസെറ്റ്" },
        dos: [
            {
                en: "Remove dentures at night and keep in water.",
                ta: "இரவில் கழட்டி தண்ணீரில் வைக்கவும்.",
                te: "రాత్రి పూట నీటిలో పెట్టండి.",
                hi: "रात को पानी में रखें।",
                kn: "ರಾತ್ರಿ ನೀರಿನಲ್ಲಿ ಇಡಿ.",
                ml: "രാത്രി വെള്ളത്തിൽ ഇട്ടു വെക്കുക."
            },
            {
                en: "Read aloud to practice speech with the new appliance.",
                ta: "பேச்சு பழக சத்தமாக படித்துப் பழகவும்.",
                te: "మాటలు స్పష్టంగా రావడానికి గట్టిగా చదవండి."
            }
        ],
        donts: [
            {
                en: "Do not use hot water to clean (It warps the plastic).",
                ta: "சுடுநீரில் கழுவக்கூடாது.",
                te: "వేడి నీటితో కడగవద్దు.",
                hi: "गर्म पानी से न धोएं।"
            }
        ],
        dietaryAdvice: {
            en: "Start with soft food cut into small pieces.",
            ta: "ஆரம்பத்தில் மென்மையான உணவை சாப்பிடவும்.",
            te: "మొదట్లో మెత్తటి ఆహారం తీసుకోండి.",
            hi: "शुरुआत में नरम खाना खाएं।"
        },
        emergencyTrigger: {
            en: "Severe ulcer/sore spot that prevents wearing.",
            ta: "தாங்க முடியாத புண் ஏற்பட்டால்.",
            te: "తీవ్రమైన పుండు పడితే.",
            hi: "बहुत ज्यादा छाले हो जाएं।"
        }
    }
};

export class PostOpHelper {

    /**
     * Logic for "Can I Smoke?"
     */
    static getSmokingAdvice(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "⛔ புகை பிடிக்காதீர்கள்! புகையை இழுக்கும் போது வாயில் ஏற்படும் அழுத்தம் (Suction), ரத்த உறைவை (Clot) கலைத்துவிடும். இதனால் 'Dry Socket' என்ற கடும் வலி ஏற்படும்.";
        if (lang === 'te') return "⛔ పొగత్రాగవద్దు! దీనివల్ల 'Dry Socket' అనే తీవ్రమైన నొప్పి వచ్చే అవకాశం ఉంది.";
        if (lang === 'hi') return "⛔ धूम्रपान न करें! इससे घाव भरने में दिक्कत होगी और तेज दर्द हो सकता है।";
        return "⛔ **Do NOT Smoke:** The sucking motion creates a vacuum that pulls the blood clot out of the socket. This causes **Dry Socket**, a condition more painful than the toothache itself.";
    }

    /**
     * Logic for "When can I brush?"
     */
    static getBrushingAdvice(isExtraction: boolean): string {
        if (isExtraction) {
            return "You can brush other teeth gently tonight. **Skip the extraction site.** Tomorrow, rinse gently with warm salt water.";
        }
        return "Brush normally, but be gentle around the treated area.";
    }

    /**
     * Triage for Post-Op Bleeding
     */
    static checkBleedingStatus(hoursPassed: number, isActiveFlow: boolean): string {
        if (isActiveFlow && hoursPassed > 4) {
            return "⚠️ **Alert:** Active bleeding after 4 hours is not normal. Bite on a tea bag (Tannic acid helps clotting) and call the clinic.";
        }
        if (!isActiveFlow) {
            return "✅ **Normal:** Slight oozing (pink saliva) is normal for 24 hours.";
        }
        return "Bite firmly on gauze for another 30 mins.";
    }
}
