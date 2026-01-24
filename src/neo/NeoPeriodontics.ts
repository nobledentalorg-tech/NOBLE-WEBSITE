import { LocalizedText } from '../types/neoSchema';

interface PerioStage {
    clinicalName: string;
    description: LocalizedText;
    symptoms: LocalizedText;
    treatment: LocalizedText;
    clinicalSigns: {
        pocketDepth: string;
        boneLoss: string;
    };
    severityIndex: number; // 1 (Mild) to 10 (Emergency)
}

export const PERIO_STAGING: Record<string, PerioStage> = {

    // --- STAGE 1: GINGIVITIS (Reversible) ---
    stage_1: {
        clinicalName: "Gingivitis (Gum Inflammation)",
        severityIndex: 2,
        clinicalSigns: {
            pocketDepth: "≤ 3mm",
            boneLoss: "None"
        },
        description: {
            en: "Gums are red, swollen, and bleed easily. This is the only stage that is 100% reversible.",
            ta: "ஈறுகள் சிவந்து வீங்கியிருக்கும். இது ஆரம்ப நிலை.",
            te: "చిగుళ్ళు ఎర్రగా మారి వాపు వస్తుంది. ఇది ప్రారంభ దశ.",
            hi: "मसूड़े लाल और सूजे हुए हैं। यह शुरुआती चरण है।",
            kn: "ಒಸಡುಗಳು ಕೆಂಪಾಗಿ ಊದಿಕೊಂಡಿವೆ. ಇದು ಆರಂಭಿಕ ಹಂತ.",
            ml: "മോണകൾ ചുവന്ന് വീർത്തിരിക്കുന്നു. ഇത് പൂർണ്ണമായും മാറ്റാവുന്നതാണ്."
        },
        symptoms: {
            en: "Bleeding while brushing, pink foam, mild bad breath.",
            ta: "பல் துலக்கும்போது ரத்தம் வருதல், வாய் துர்நாற்றம்.",
            te: "బ్రష్ చేసేటప్పుడు రక్తం రావడం, నోటి దుర్వాసన.",
            hi: "ब्रश करते समय खून आना, सांसों की बदबू।",
            kn: "ಹಲ್ಲುಜ್ಜುವಾಗ ರಕ್ತಸ್ರಾವ, ಬಾಯಿಯ ದುರ್ವಾಸನೆ.",
            ml: "പല്ല് തേക്കുമ്പോൾ രക്തം വരിക, വായ് നാറ്റം."
        },
        treatment: {
            en: "Professional Scaling & Polishing (GBT Protocol)",
            ta: "பல் சுத்தம் செய்தல் (Scaling)",
            te: "పళ్లు శుభ్రపరచడం (Scaling)",
            hi: "दांतों की सफाई (Scaling)",
            kn: "ಹಲ್ಲುಗಳ ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ (Scaling)",
            ml: "പല്ല് ക്ലീനിംഗ് (Scaling)"
        }
    },

    // --- STAGE 2: EARLY PERIODONTITIS ---
    stage_2: {
        clinicalName: "Stage I/II Periodontitis (Early)",
        severityIndex: 5,
        clinicalSigns: {
            pocketDepth: "4-5mm",
            boneLoss: "< 15% (Coronal Third)"
        },
        description: {
            en: "Infection has moved below the gum line. Ligaments are detaching. Permanent damage has started.",
            ta: "தொற்று ஈறுகளுக்கு அடியில் பரவியுள்ளது. எலும்பு தேய்மானம் ஆரம்பம்.",
            te: "ఇన్ఫెక్షన్ చిగుళ్ళ లోపలికి వెళ్ళింది. ఎముక అరుగుదల మొదలైంది.",
            hi: "संक्रमण मसूड़ों के नीचे है। हड्डी का नुकसान शुरू हो गया है।",
            kn: "ಸೋಂಕು ಒಸಡುಗಳ ಕೆಳಗೆ ಹೋಗಿದೆ. ಎಲುಬಿನ ಸವೆತ ಪ್ರಾರಂಭವಾಗಿದೆ.",
            ml: "അണുബാധ മോണയ്ക്കടിയിലേക്ക് പടർന്നു. എല്ല് തേയ്മാനം തുടങ്ങുന്നു."
        },
        symptoms: {
            en: "Receding gums (teeth look longer), sensitivity to cold, food getting stuck.",
            ta: "ஈறு இறங்குதல், பற்கூச்சம், உணவு சிக்கிக்கொள்ளுதல்.",
            te: "చిగుళ్ళు కిందకు జారడం, పళ్ళు జువ్వుమనడం.",
            hi: "मसूड़े नीचे खिसकना, दांतों में झनझनाहट।",
            kn: "ಒಸಡುಗಳು ಕೆಳಗೆ ಇಳಿಯುವುದು, ಹಲ್ಲುಗಳಲ್ಲಿ ಜುಮ್ಮೆನ್ನುವುದು.",
            ml: "മോണ താഴേക്ക് പോകുക, పല്ല് പുളിപ്പ്."
        },
        treatment: {
            en: "Deep Cleaning (SRP) + Laser Decontamination",
            ta: "ஆழ்ந்த சுத்தம் (Deep Cleaning) மற்றும் லேசர் சிகிச்சை",
            te: "డీప్ క్లీనింగ్ మరియు లేజర్ చికిత్స",
            hi: "गहरी सफाई और लेजर उपचार",
            kn: "ಆಳವಾದ ಶುಚಿಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಲೇಸರ್ ჩಿಕಿತ್ಸೆ",
            ml: "ഡീപ്പ് ക്ലീനിംഗ്, ലേസർ ചികിത്സ"
        }
    },

    // --- STAGE 3: MODERATE/SEVERE ---
    stage_3: {
        clinicalName: "Stage III Periodontitis (Severe)",
        severityIndex: 7,
        clinicalSigns: {
            pocketDepth: "≥ 6mm",
            boneLoss: "30-50% (Mid Third)"
        },
        description: {
            en: "Significant bone loss. Teeth may become loose or shift. Risk of tooth loss is high.",
            ta: "அதிகப்படியான எலும்பு தேய்மானம். பற்கள் ஆடத் தொடங்கும்.",
            te: "ఎముక బాగా అరిగిపోయింది. పళ్ళు కదలడం మొదలవుతుంది.",
            hi: "हड्डी का नुकसान। दांत हिलने लगे हैं।",
            kn: "ಎಲುಬು ಬಹಳಷ್ಟು ಸವೆದಿದೆ. ಹಲ್ಲುಗಳು ಅಲುಗಾಡಬಹುದು.",
            ml: "എല്ല് തേയ്മാനം ഗുരുതരം. പല്ലുകൾ ഇളകാൻ തുടങ്ങുന്നു."
        },
        symptoms: {
            en: "Loose teeth, gaps appearing, pus discharge, dull pain.",
            ta: "பல் ஆடுதல், பல் இடைவெளி, சீழ் வடிதல்.",
            te: "పళ్ళు కదలడం, పళ్ళ మధ్య ఖాళీలు, చీము రావడం.",
            hi: "दांत हिलना, दांतों के बीच गैप, मवाद आना।",
            kn: "ಹಲ್ಲು ಅಲುಗಾಡುವುದು, ಕೀவு ಬರುವುದು.",
            ml: "പല്ല് ഇളക്കം, പല്ലുകൾക്കിടയിൽ വിടവ്, പഴുപ്പ്."
        },
        treatment: {
            en: "Flap Surgery / Bone Grafting / Splinting",
            ta: "ஈறு அறுவை சிகிச்சை (Flap Surgery)",
            te: "చిగుళ్ళ ఆపరేషన్ మరియు ఎముక గ్రాఫ్టింగ్",
            hi: "मसूड़ों की सर्जरी",
            kn: "ಒಸಡು ಶಸ್ತ್ರಚಿಕਿತ್ಸೆ",
            ml: "മോണ ശസ്ത്രക്രിയ"
        }
    },

    // --- STAGE 4: ADVANCED/TERMINAL (The Implant Driver) ---
    stage_4: {
        clinicalName: "Stage IV Periodontitis (Advanced)",
        severityIndex: 9,
        clinicalSigns: {
            pocketDepth: "> 8mm",
            boneLoss: "> 50% (Apical Third)"
        },
        description: {
            en: "Critical condition. Multiple teeth may be loose or drifting. Chewing is difficult.",
            ta: "மிகவும் முற்றிய நிலை. பற்கள் விழும் நிலையில் உள்ளன. உணவு மெல்லுவது கடினம்.",
            te: "అత్యవసర పరిస్థితి. పళ్ళు ఊడిపోయే దశలో ఉన్నాయి. తినడం కష్టం.",
            hi: "गंभीर स्थिति। कई दांत हिल रहे हैं। खाना चबाना मुश्किल है।",
            kn: "ಗಂಭೀರ ಸ್ಥಿತಿ. ಹಲ್ಲುಗಳು ಉದುರುವ హంతంలో ఉన్నాయి.",
            ml: "ഗുരുതരാവസ്ഥ. പല്ലുകൾ നഷ്ടപ്പെടാൻ സാധ്യത."
        },
        symptoms: {
            en: "Teeth flaring out, inability to chew, severe bad breath, multiple loose teeth.",
            ta: "பற்கள் விலகுதல், சாப்பிட முடியவில்லை, கடும் வாய் துர்நாற்றம்.",
            te: "పళ్ళు బయటకు రావడం, నమలలేకపోవడం.",
            hi: "दांत बाहर निकल रहे हैं, चबाने में असमर्थता।",
            kn: "ಹಲ್ಲುಗಳು ಹೊರಬರುವುದು, ಜಗಿಯಲು ತೊಂದರೆ.",
            ml: "പല്ലുകൾ അകലുന്നു, ഭക്ഷണം കഴിക്കാൻ ബുദ്ധിമുട്ട്."
        },
        treatment: {
            en: "Full Mouth Rehabilitation / Extraction & Implants",
            ta: "முழு பல் சீரமைப்பு / இம்பிளான்ட் சிகிச்சை",
            te: "పూర్తి నోటి చికిత్స / ఇంప్లాంట్స్",
            hi: "पूरे मुंह का पुनर्वास / इम्प्लांट्स",
            kn: "ಪೂರ್ಣ ಬಾಯಿ ಪುನರ್ವಸತಿ / ಇಂಪ್ಲಾಂಟ್ಸ್",
            ml: "ഫുൾ മൗത്ത് റീഹാബിലിറ്റേഷൻ / ഇംപ്ലാന്റുകൾ"
        }
    }
};
