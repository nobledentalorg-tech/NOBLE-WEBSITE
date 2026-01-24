import { LocalizedText } from '../types/neoSchema';

// Neo Lab Diagnostics Module
// Focus: Comprehensive interpretation of blood work for dental & general safety.

export interface LabParameter {
    id: string;
    name: string;
    unit: string;
    normalRangeMale: string;
    normalRangeFemale: string;
    lowIndication: LocalizedText;
    highIndication: LocalizedText;
    dentalImplication: LocalizedText;
    criticalAlert: string; // Doctor warning
}

export const LAB_DATABASE: Record<string, LabParameter> = {

    // --- 1. COMPLETE BLOOD COUNT (CBC) ---
    'hemoglobin': {
        id: 'hemoglobin',
        name: "Hemoglobin (Hb)",
        unit: "g/dL",
        normalRangeMale: "13.5 - 17.5",
        normalRangeFemale: "12.0 - 15.5",
        lowIndication: { en: "Anemia (Fatigue, Pallor)", ta: "ரத்த சோகை", te: "రక్తహీనత", hi: "एनीमिया", kn: "ರಕ್ತಹೀನತೆ", ml: "വിളർച്ച" },
        highIndication: { en: "Polycythemia (Thick Blood)", ta: "அதிக ரத்த அணுக்கள்", te: "రక్తం చిక్కగా ఉండటం", hi: "गाढ़ा खून", kn: "ಪಾಲಿ ಸೈಥೆಮಿಯಾ", ml: "പോളിസിത്തീമിയ" },
        dentalImplication: {
            en: "Levels < 10g/dL delay wound healing. Avoid general anesthesia if < 9.",
            ta: "ரத்தம் 10க்கு கீழ் இருந்தால் காயம் ஆறாது.",
            te: "10 కంటే తక్కువ ఉంటే గాయం మానదు.",
            hi: "10 से कम होने पर घाव नहीं भरता।",
            kn: "10 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದ್ದರೆ ಗಾಯ ಮಾಯುವುದಿಲ್ಲ.",
            ml: "10-ൽ താഴെയാണെങ്കിൽ മുറിവ് ഉണങ്ങില്ല."
        },
        criticalAlert: "If Hb < 7: Critical Anemia. Postpone all non-emergency care."
    },
    'platelets': {
        id: 'platelets',
        name: "Platelet Count",
        unit: "Lakhs/mcL",
        normalRangeMale: "1.5 - 4.5",
        normalRangeFemale: "1.5 - 4.5",
        lowIndication: { en: "Thrombocytopenia (Bleeding Risk)", ta: "குறைந்த தட்டணுக்கள்", te: "ప్లేట్లెట్స్ తక్కువ", hi: "प्लेटलेट्स की कमी", kn: "ಪ್ಲೇಟ್ಲೆಟ್ ಕೊರತೆ", ml: "പ്ലേറ്റ്ലെറ്റ് കുറവ്" },
        highIndication: { en: "Thrombocytosis (Clotting Risk)", ta: "அதிக தட்டணுக்கள்", te: "ప్లేట్లెట్స్ ఎక్కువ", hi: "प्लेटलेट्स की अधिकता", kn: "ಪ್ಲೇಟ್ಲೆಟ್ ಹೆಚ್ಚು", ml: "ಪ್ಲೇಟ್ಲೆಟ್ ಹೆಚ್ಚು" },
        dentalImplication: {
            en: "Count < 50,000 indicates severe bleeding risk. Do not extract teeth.",
            ta: "50,000க்கு கீழ் இருந்தால் பல் எடுக்கக் கூடாது.",
            te: "50,000 కంటే తక్కువ ఉంటే పన్ను తీయకూడదు.",
            hi: "50,000 से कम होने पर दांत न निकालें।",
            kn: "50,000 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದ್ದರೆ ಹಲ್ಲು ಕೀಳಬಾರದು.",
            ml: "50,000-ൽ താഴെയാണെങ്കിൽ പല്ല് പറിക്കരുത്."
        },
        criticalAlert: "If < 20,000: Spontaneous bleeding possible. Hospital referral needed."
    },
    'wbc': {
        id: 'wbc',
        name: "Total WBC Count",
        unit: "cells/mcL",
        normalRangeMale: "4,500 - 11,000",
        normalRangeFemale: "4,500 - 11,000",
        lowIndication: { en: "Leukopenia (Weak Immunity)", ta: "நோய் எதிர்ப்பு சக்தி குறைவு", te: "రోగనిరోధక శక్తి తక్కువ", hi: "कमजोर प्रतिरक्षा", kn: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಕಡಿಮೆ", ml: "പ്രതിരോധശേഷി കുറവ്" },
        highIndication: { en: "Leukocytosis (Infection)", ta: "தொற்று", te: "ఇన్ఫెక్షన్", hi: "संक्रमण", kn: "ಸೋಂಕು", ml: "അണുബാധ" },
        dentalImplication: {
            en: "High WBC often confirms a dental abscess. Antibiotics required.",
            ta: "பல் சீழ் இருப்பதை உறுதி செய்கிறது. மருந்து தேவை.",
            te: "పంటి చీము ఉందని అర్థం.",
            hi: "दांत में मवाद होने का संकेत।",
            kn: "ಹಲ್ಲಿನ ಕೀವು ಇರುವ ಲಕ್ಷಣ.",
            ml: "പല്ലിൽ പഴുപ്പുണ്ടെന്ന് സൂചിപ്പിക്കക്കുന്നു."
        },
        criticalAlert: "If > 20,000: Possible systemic infection or leukemia."
    },

    // --- 2. KIDNEY FUNCTION TEST (KFT) ---
    'creatinine': {
        id: 'creatinine',
        name: "Serum Creatinine",
        unit: "mg/dL",
        normalRangeMale: "0.7 - 1.3",
        normalRangeFemale: "0.6 - 1.1",
        lowIndication: { en: "Muscle Atrophy (Rare)", ta: "தசை பலவீனம்", te: "కండరాల బలహీనత", hi: "मांसपेशियों की कमजोरी", kn: "ಸ್ನಾಯು ದೌರ್ಬಲ್ಯ", ml: "പേശി ബലഹീനത" },
        highIndication: { en: "Kidney Dysfunction", ta: "சிறுநீரக பாதிப்பு", te: "కిడ్నీ సమస్య", hi: "किडनी की समस्या", kn: "ಕಿಡ್ನಿ ಸಮಸ್ಯೆ", ml: "വൃക്ക രോഗം" },
        dentalImplication: {
            en: "Avoid NSAIDs (Ibuprofen/Ketorolac) as they worsen kidney damage.",
            ta: "வலி நிவாரணி மாத்திரைகளை (Painkillers) தவிர்க்கவும்.",
            te: "నొప్పి మందులు (Painkillers) వాడకండి.",
            hi: "पेनकिलर से बचें।",
            kn: "ನೋವು ನಿವಾರಕಗಳನ್ನು ತಪ್ಪಿಸಿ.",
            ml: "വേദന സംഹാരികൾ ഒഴിവാക്കുക."
        },
        criticalAlert: "If > 2.0: Significant renal impairment. Adjust drug dosages."
    },
    'urea': {
        id: 'urea',
        name: "Blood Urea Nitrogen (BUN)",
        unit: "mg/dL",
        normalRangeMale: "7 - 20",
        normalRangeFemale: "7 - 20",
        lowIndication: { en: "Liver Failure / Malnutrition", ta: "கல்லீரல் பாதிப்பு", te: "లివర్ సమస్య", hi: "लिवर की समस्या", kn: "ಲಿವರ್ ಸಮಸ್ಯೆ", ml: "കരൾ രോഗം" },
        highIndication: { en: "Dehydration / Kidney Failure", ta: "நீர்ச்சத்து குறைபாடு", te: "డీహైడ్రేషన్", hi: "पानी की कमी", kn: "ನಿರ್ಜಲೀಕರಣ", ml: "നിർജ്ജലീകരണം" },
        dentalImplication: {
            en: "High levels cause 'Uremic Breath' (Ammonia smell) and bad taste.",
            ta: "வாயில் அம்மோனியா நாற்றம் வீசும்.",
            te: "నోటి దుర్వాసన వస్తుంది.",
            hi: "मुंह से बदबू आती है।",
            kn: "ಬಾಯಿಯಲ್ಲಿ ವಾಸನೆ ಬರುತ್ತದೆ.",
            ml: "വായനാറ്റം ഉണ്ടാകാം."
        },
        criticalAlert: "Interpret with Creatinine for accuracy."
    },

    // --- 3. LIVER FUNCTION TEST (LFT) ---
    'bilirubin': {
        id: 'bilirubin',
        name: "Total Bilirubin",
        unit: "mg/dL",
        normalRangeMale: "0.1 - 1.2",
        normalRangeFemale: "0.1 - 1.2",
        lowIndication: { en: "Normal", ta: "சாதாரண", te: "సాధారణ", hi: "सामान्य", kn: "ಸಾಮಾನ್ಯ", ml: "സാധാരണം" },
        highIndication: { en: "Jaundice / Liver Damage", ta: "மஞ்சள் காமாலை", te: "కామెర్లు", hi: "पीलिया", kn: "ಕಾಮಾಲೆ", ml: "മഞ്ഞപ്പിത്തം" },
        dentalImplication: {
            en: "Check for bleeding problems (Liver makes clotting factors).",
            ta: "ரத்தம் உறைவதில் சிக்கல் இருக்கலாம்.",
            te: "రక్తం గడ్డకట్టకపోవచ్చు.",
            hi: "खून जमने में दिक्कत हो सकती है।",
            kn: "ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವಲ್ಲಿ ಸಮಸ್ಯೆ ಇರಬಹುದು.",
            ml: "രക്തം കട്ടപിടിക്കാൻ പ്രയാസമുണ്ടാകാം."
        },
        criticalAlert: "If clinically jaundiced (yellow eyes), defer treatment."
    },
    'sgpt': {
        id: 'sgpt',
        name: "ALT (SGPT)",
        unit: "U/L",
        normalRangeMale: "29 - 33",
        normalRangeFemale: "19 - 25",
        lowIndication: { en: "Normal", ta: "-", te: "-", hi: "-", kn: "-", ml: "-" },
        highIndication: { en: "Liver Inflammation (Hepatitis)", ta: "கல்லீரல் வீக்கம்", te: "లివర్ వాపు", hi: "लिवर में सूजन", kn: "ಲಿವರ್ ಊತ", ml: "കരൾ വീക്കം" },
        dentalImplication: {
            en: "Avoid Paracetamol overdose. Metabolized in liver.",
            ta: "பாரசிட்டமால் மாத்திரையை அளவாக எடுக்கவும்.",
            te: "పారాసిటమాల్ తక్కువ వాడాలి.",
            hi: "पैरासिटामोल कम लें।",
            kn: "ಪ್ಯಾರಸಿಟಮಾಲ್ ಕಡಿಮೆ ಬಳಸಿ.",
            ml: "പാരസെറ്റമോൾ കുറച്ച് ഉപയോഗിക്കുക."
        },
        criticalAlert: "High levels indicate active liver damage."
    },

    // --- 4. DIABETES PROFILE ---
    'hba1c': {
        id: 'hba1c',
        name: "HbA1c (3-Month Sugar)",
        unit: "%",
        normalRangeMale: "< 5.7",
        normalRangeFemale: "< 5.7",
        lowIndication: { en: "Hypoglycemia Risk", ta: "குறைந்த சர்க்கரை", te: "తక్కువ షుగర్", hi: "लो शुगर", kn: "ಕಡಿಮೆ ಶುಗರ್", ml: "കുറഞ്ഞ ഷുഗർ" },
        highIndication: { en: "Diabetes (Poor Control)", ta: "சர்க்கரை நோய்", te: "షుగర్ వ్యాధి", hi: "मधुमेह", kn: "ಮಧುಮೇಹ", ml: "പ്രമേഹം" },
        dentalImplication: {
            en: "Levels > 8%: High risk of implant failure and gum abscess.",
            ta: "8%க்கு மேல் இருந்தால் இம்பிளான்ட் தோல்வியடையலாம்.",
            te: "8% కంటే ఎక్కువ ఉంటే ఇంప్లాంట్ ఫెయిల్ అవ్వొచ్చు.",
            hi: "8% से ऊपर इम्प्लांट फेल हो सकता है।",
            kn: "8% ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಇಂಪ್ಲಾಂಟ್ ವಿಫಲವಾಗಬಹುದು.",
            ml: "8%-ൽ കൂടുതലാണെങ്കിൽ ഇംപ്ലാന്റ് പരാജയപ്പെടാം."
        },
        criticalAlert: "If > 9.0: Delay elective surgery until control improves."
    },
    'rbs': {
        id: 'rbs',
        name: "Random Blood Sugar",
        unit: "mg/dL",
        normalRangeMale: "70 - 140",
        normalRangeFemale: "70 - 140",
        lowIndication: { en: "Hypoglycemia", ta: "மயக்கம் வரலாம்", te: "కళ్ళు తిరగవచ్చు", hi: "चक्कर आ सकते हैं", kn: "ತಲೆಸುತ್ತು ಬರಬಹುದು", ml: "തലകറക്കം വരാം" },
        highIndication: { en: "Hyperglycemia", ta: "அதிக சர்க்கரை", te: "ఎక్కువ షుగర్", hi: "हाई शुगर", kn: "ಹೆಚ್ಚు ಶುಗರ್", ml: "కూടിയ షുഗർ" },
        dentalImplication: {
            en: "> 200 mg/dL: Risk of post-op infection. Prophylactic antibiotics advised.",
            ta: "200க்கு மேல் இருந்தால் காயம் ஆறுவது கடினம்.",
            te: "200 పైన ఉంటే ఇన్ఫెక్షన్ రావచ్చు.",
            hi: "200 से ऊपर संक्रमण का खतरा।",
            kn: "200 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಸೋಂಕು ತಗುಲಬಹುದು.",
            ml: "200-ൽ കൂടുതലാണെങ്കിൽ അണുബാധയുണ്ടാകാം."
        },
        criticalAlert: "If < 70: Give glucose immediately."
    },

    // --- 5. COAGULATION PROFILE ---
    'pt_inr': {
        id: 'pt_inr',
        name: "PT/INR",
        unit: "Ratio",
        normalRangeMale: "0.8 - 1.2",
        normalRangeFemale: "0.8 - 1.2",
        lowIndication: { en: "Clotting Risk", ta: "ரத்தம் உறைதல் அதிகம்", te: "రక్తం గడ్డకట్టడం", hi: "खून का जमना", kn: "ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವಿಕೆ", ml: "രക്തം കട്ടപിടിക്കൽ" },
        highIndication: { en: "Bleeding Risk", ta: "ரத்தம் உறையாது", te: "రక్తం ఆగదు", hi: "खून नहीं जमेगा", kn: "ರಕ್ತ ನಿಲ್ಲುವುದಿಲ್ಲ", ml: "രಕ್ತം നിൽക്കില്ല" },
        dentalImplication: {
            en: "INR > 3.0: Stop! Do not extract. Consult Cardiologist.",
            ta: "3.0க்கு மேல் இருந்தால் பல் பிடுங்கக் கூடாது.",
            te: "3.0 పైన ఉంటే పన్ను తీయవద్దు.",
            hi: "3.0 से ऊपर दांत न निकालें।",
            kn: "3.0 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಹಲ್ಲು ಕೀಳಬೇಡಿ.",
            ml: "3.0-ൽ കൂടുതലാണെങ്കിൽ പല്ല് പറിക്കരുത്."
        },
        criticalAlert: "Safe range for dental extraction: INR 2.0 - 2.5"
    },

    // --- 6. LIPID PROFILE (Heart Health) ---
    'cholesterol': {
        id: 'cholesterol',
        name: "Total Cholesterol",
        unit: "mg/dL",
        normalRangeMale: "< 200",
        normalRangeFemale: "< 200",
        lowIndication: { en: "Malnutrition", ta: "ஊட்டச்சத்து குறைபாடு", te: "పోషకాహార లోపం", hi: "कुपोषण", kn: "ಪೋಷಕಾಂಶ ಕೊರತೆ", ml: "പോഷകാഹാരക്കുറവ്" },
        highIndication: { en: "High Cholesterol (Cardiac Risk)", ta: "அதிக கொழுப்பு (இதய பாதிப்பு)", te: "కొలెస్ట్రాల్ ఎక్కువ", hi: "हाई कोलेस्ट्रॉल", kn: "ಹೆಚ್ಚು ಕೊಲೆಸ್ಟ್ರಾಲ್", ml: "കൊളസ്ട്രോൾ കൂടുതൽ" },
        dentalImplication: {
            en: "High risk of heart disease. We will use 'Stress Reduction Protocol' during treatment.",
            ta: "இதய பாதிப்பு அபாயம். சிகிச்சையின் போது பதற்றம் தவிர்க்கப்படும்.",
            te: "గుండె జబ్బు వచ్చే అవకాశం ఉంది.",
            hi: "दिल की बीमारी का खतरा।",
            kn: "ಹೃದಯ ಕಾಯಿಲೆಯ ಅಪಾಯ.",
            ml: "ഹൃദ്രോഗ സാധ്യത. ചികിത്സയിൽ ശ്രദ്ധിക്കും."
        },
        criticalAlert: "If > 300: High cardiac risk. Avoid extensive surgery."
    },
    'triglycerides': {
        id: 'triglycerides',
        name: "Triglycerides",
        unit: "mg/dL",
        normalRangeMale: "< 150",
        normalRangeFemale: "< 150",
        lowIndication: { en: "Normal", ta: "-", te: "-", hi: "-", kn: "-", ml: "-" },
        highIndication: { en: "Hypertriglyceridemia", ta: "ரத்தத்தில் அதிக கொழுப்பு", te: "కొవ్వు ఎక్కువ", hi: "ट्राइग्लिसराइड्स ज्यादा", kn: "ಕೊಬ್ಬು ಹೆಚ್ಚು", ml: "രക്തത്തിൽ കൊഴുപ്പ്" },
        dentalImplication: {
            en: "Linked to inflammation. Manage diet before gum surgery.",
            ta: "உணவு கட்டுப்பாடு அவசியம்.",
            te: "ఆహార నియమాలు పాటించాలి.",
            hi: "डाइट कंट्रोल जरूरी है।",
            kn: "ಆಹಾರ ನಿಯಂತ್ರಣ ಅಗತ್ಯ.",
            ml: "ഭക്ഷണ നിയന്ത്രണം വേണം."
        },
        criticalAlert: "If > 500: Pancreatitis risk."
    },

    // --- 7. BONE & MINERAL PROFILE (Implant Success) ---
    'calcium': {
        id: 'calcium',
        name: "Serum Calcium",
        unit: "mg/dL",
        normalRangeMale: "8.6 - 10.3",
        normalRangeFemale: "8.6 - 10.3",
        lowIndication: { en: "Hypocalcemia (Weak Bones)", ta: "கால்சியம் குறைபாடு", te: "కాల్షియం తక్కువ", hi: "कैल्शियम की कमी", kn: "ಕ್ಯಾಲ್ಸಿಯಂ ಕೊರತೆ", ml: "കാൽസ്യം കുറവ്" },
        highIndication: { en: "Hypercalcemia", ta: "அதிக கால்சியம்", te: "కాల్షియం ఎక్కువ", hi: "कैल्शियम ज्यादा", kn: "ಕ್ಯಾಲ್ಸಿಯಂ ಹೆಚ್ಚು", ml: "കാൽസ്യം കൂടുതൽ" },
        dentalImplication: {
            en: "Low levels weaken jaw bone. Implants may not integrate well.",
            ta: "எலும்பு பலவீனம். இம்பிளான்ட் சிகிச்சை தோல்வியடையலாம்.",
            te: "ఎముకలు బలహీనపడతాయి. ఇంప్లాంట్స్ కి మంచిది కాదు.",
            hi: "हड्डियां कमजोर हो सकती हैं।",
            kn: "ಮೂಳೆಗಳು ದುರ್ಬಲವಾಗುತ್ತವೆ.",
            ml: "എല്ലുകൾ ദുർബലമാകും. ഇംപ്ലാന്റ് പരാജയപ്പെടാം."
        },
        criticalAlert: "If < 7.0: Risk of tetany (muscle spasms)."
    },
    'vitamin_d': {
        id: 'vitamin_d',
        name: "Vitamin D (25-OH)",
        unit: "ng/mL",
        normalRangeMale: "30 - 100",
        normalRangeFemale: "30 - 100",
        lowIndication: { en: "Deficiency", ta: "வைட்டமின் D குறைபாடு", te: "విటమిన్ D తక్కువ", hi: "विटामिन डी की कमी", kn: "ವಿಟಮಿನ್ ಡಿ ಕೊರತೆ", ml: "വിറ്റാമിൻ ഡി കുറവ്" },
        highIndication: { en: "Toxicity", ta: "நச்சுத்தன்மை", te: "విషపూరితం", hi: "विषाक्तता", kn: "ವಿಷತ್ವ", ml: "വിഷാംശം" },
        dentalImplication: {
            en: "Crucial for healing. Deficiency causes gum disease and implant failure.",
            ta: "குறைபாடு இருந்தால் காயம் ஆறாது. ஈறு நோய் வரும்.",
            te: "గాయం మానదు. చిగుళ్ళ వ్యాధి వస్తుంది.",
            hi: "घाव नहीं भरेगा। मसूड़ों की बीमारी होगी।",
            kn: "ಗಾಯ ಮಾಯುವುದಿಲ್ಲ. ಒಸಡು ರೋಗ ಬರುತ್ತದೆ.",
            ml: "മുറിവ് ഉണങ്ങില്ല. മോണരോഗം വരാം."
        },
        criticalAlert: "If < 10: Severe deficiency. Supplement needed before surgery."
    },

    // --- 8. INFLAMMATORY MARKERS (Infection Check) ---
    'esr': {
        id: 'esr',
        name: "ESR (Erythrocyte Sedimentation Rate)",
        unit: "mm/hr",
        normalRangeMale: "0 - 15",
        normalRangeFemale: "0 - 20",
        lowIndication: { en: "Normal", ta: "-", te: "-", hi: "-", kn: "-", ml: "-" },
        highIndication: { en: "Chronic Inflammation", ta: "உடலில் வீக்கம்/தொற்று", te: "దీర్ఘకాలిక ఇన్ఫెక్షన్", hi: "सूजन/संक्रमण", kn: "ದೀರ್ಘಕಾಲದ ಉರಿಯೂತ", ml: "വിട്ടുമാറാത്ത വീക്കം" },
        dentalImplication: {
            en: "Indicates hidden infection somewhere in the body.",
            ta: "உடலில் எங்கேயோ தொற்று உள்ளது.",
            te: "శరీరంలో ఇన్ఫెక్షన్ ఉంది.",
            hi: "शरीर में संक्रमण है।",
            kn: "ದೇಹದಲ್ಲಿ ಸೋಂಕು ಇದೆ.",
            ml: "ശരീരത്തിൽ അണുബാധയുണ്ട്."
        },
        criticalAlert: "If > 100: Serious pathology (TB, Cancer, Autoimmune)."
    },
    'crp': {
        id: 'crp',
        name: "C-Reactive Protein (CRP)",
        unit: "mg/L",
        normalRangeMale: "< 5",
        normalRangeFemale: "< 5",
        lowIndication: { en: "Normal", ta: "-", te: "-", hi: "-", kn: "-", ml: "-" },
        highIndication: { en: "Acute Inflammation", ta: "திடீர் தொற்று", te: "తీవ్రమైన వాపు", hi: "तीव्र सूजन", kn: "ತೀವ್ರ ಉರಿಯೂತ", ml: "കഠിനമായ വീക്കം" },
        dentalImplication: {
            en: "High CRP suggests active bacterial infection or heart risk.",
            ta: "பாக்டீரியா தொற்று இருக்கலாம்.",
            te: "బాక్టీరియల్ ఇన్ఫెక్షన్ ఉండవచ్చు.",
            hi: "बैक्टीरियल इन्फेक्शन हो सकता है।",
            kn: "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಸೋಂಕು ಇರಬಹುದು.",
            ml: "ബാക്ടീരിയൽ അണുബാധ ഉണ്ടാകാം."
        },
        criticalAlert: "High CRP correlates with Periodontitis severity."
    },

    // --- 9. SEROLOGY (Infectious Diseases) ---
    'hiv': {
        id: 'hiv',
        name: "HIV I & II",
        unit: "Result",
        normalRangeMale: "Non-Reactive",
        normalRangeFemale: "Non-Reactive",
        lowIndication: { en: "-", ta: "-", te: "-", hi: "-", kn: "-", ml: "-" },
        highIndication: { en: "Reactive (Positive)", ta: "தொற்று உள்ளது", te: "పాజిటివ్", hi: "पॉजिटिव", kn: "ಪಾಸಿಟಿವ್", ml: "പോസിറ്റീവ്" },
        dentalImplication: {
            en: "Immune suppression. High risk of fungal infections (Candidiasis) and gum disease.",
            ta: "நோய் எதிர்ப்பு சக்தி குறைவு. பூஞ்சை தொற்று வரலாம்.",
            te: "రోగనిరోధక శక్తి తక్కువ. ఫంగల్ ఇన్ఫెక్షన్ రావచ్చు.",
            hi: "इम्युनिटी कम है। फंगल इन्फेक्शन हो सकता है।",
            kn: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಕಡಿಮೆ. ಫಂಗಲ್ ಸೋಂಕು ಬರಬಹುದು.",
            ml: "പ്രതിരോധശേഷി കുറവ്. ഫംഗസ് ബാധ ഉണ്ടാകാം."
        },
        criticalAlert: "Strict asepsis required. Oral lesions common."
    },
    'hbsag': {
        id: 'hbsag',
        name: "HBsAg (Hepatitis B)",
        unit: "Result",
        normalRangeMale: "Negative",
        normalRangeFemale: "Negative",
        lowIndication: { en: "-", ta: "-", te: "-", hi: "-", kn: "-", ml: "-" },
        highIndication: { en: "Positive (Carrier/Active)", ta: "ஹெபடைடிஸ் பி பாசிட்டிவ்", te: "పాజిటివ్", hi: "पॉजिटिव", kn: "ಪಾಸಿಟಿವ್", ml: "പോസിറ്റീവ്" },
        dentalImplication: {
            en: "Liver risk. Clotting factors may be low. High transmission risk.",
            ta: "கல்லீரல் பாதிப்பு. ரத்தம் உறைவது குறையலாம்.",
            te: "లివర్ సమస్య. రక్తం గడ్డకట్టకపోవచ్చు.",
            hi: "लिवर की समस्या। खून नहीं जमेगा।",
            kn: "ಲಿವರ್ ಸಮಸ್ಯೆ. ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವುದಿಲ್ಲ.",
            ml: "കരൾ രോഗം. രക്തം കട്ടപിടിക്കില്ല."
        },
        criticalAlert: "Double gloving mandatory. Check INR before extraction."
    }
};

export class LabDiagnosticsHelper {

    /**
     * White Blood Cell Interpreter
     */
    static interpretWBC(neutrophils: number, lymphocytes: number, eosinophils: number): string {
        if (neutrophils > 75) return "Result suggests **Bacterial Infection** (e.g. Abscess). Antibiotics likely needed.";
        if (lymphocytes > 45) return "Result suggests **Viral Infection** or Chronic Inflammation.";
        if (eosinophils > 6) return "Result suggests **Allergy** or Parasitic Infection.";
        return "Normal Differential Count.";
    }

    /**
     * Anemia Classifier based on MCV
     */
    static interpretAnemia(mcv: number): string {
        if (mcv < 80) return "Microcytic Anemia (Likely Iron Deficiency). Eat spinach, dates, jaggery.";
        if (mcv > 100) return "Macrocytic Anemia (Likely B12 Deficiency). Needs supplements.";
        return "Normocytic Anemia (Could be chronic disease).";
    }

    /**
     * Smart Safety Check for Surgery
     */
    static checkSurgicalSafety(report: { platelets?: number, inr?: number, rbs?: number }): string {
        if (report.platelets && report.platelets < 50000) return "⛔ STOP: Platelets too low for surgery.";
        if (report.inr && report.inr > 3.0) return "⛔ STOP: INR too high. Risk of hemorrhage.";
        if (report.rbs && report.rbs > 250) return "⚠️ WARNING: High sugar. Healing will be poor.";
        return "✅ Pre-operative lab values look safe.";
    }

    /**
     * Interprets Bone Health for Implants
     */
    static checkImplantReadiness(calcium: number, vitD: number): string {
        if (vitD < 20) return "⚠️ Vitamin D too low. Implant may fail to integrate. Supplement for 4 weeks first.";
        if (calcium < 8.5) return "⚠️ Low Calcium. Check for parathyroid issues before surgery.";
        return "✅ Bone markers look good for implant surgery.";
    }

    /**
     * Checks Cardiac Risk based on Lipids
     */
    static checkCardiacRisk(cholesterol: number): string {
        if (cholesterol > 240) return "⚠️ High Cardiac Risk. Use non-adrenaline anesthesia if possible.";
        return "✅ Low Cardiac Risk.";
    }
}
