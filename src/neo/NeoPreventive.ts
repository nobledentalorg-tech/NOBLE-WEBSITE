import { LocalizedText } from '../types/neoSchema';

// Data derived from: Soben Peter's Community Dentistry & CAMBRA Protocols
// Focus: Hygiene, Fluoride Safety, Diet, and Risk Assessment.

export interface PreventionProtocol {
    id: string;
    category: 'Hygiene' | 'Fluoride' | 'Diet' | 'Risk';
    name: LocalizedText;
    instruction: LocalizedText; // How to do it
    rationale: LocalizedText;   // Why do it
    targetAudience: string;     // e.g., "Kids < 6", "Perio Patients"
}

export const PREVENTIVE_DB: Record<string, PreventionProtocol> = {

    // ==========================================
    // 1. BRUSHING TECHNIQUES
    // ==========================================
    'bass_method': {
        id: 'bass_method',
        category: 'Hygiene',
        name: { en: "Bass Method (Sulcular Brushing)", ta: "ஈறு ஓர சுத்தம் (Bass Method)", hi: "बास तकनीक", te: "బాస్ టెక్నిక్", kn: "ಬಾಸ್ ತಂತ್ರ", ml: "ബാസ് രീതി" },
        instruction: {
            en: "Place bristles at 45° angle to the gum line. Vibrate gently and sweep down.",
            ta: "பிரஷ்ஷை ஈறுகளின் ஓரத்தில் 45 டிகிரி கோணத்தில் வைத்து மெதுவாக அதிரவிட்டு கீழே இழுக்கவும்.",
            te: "బ్రష్ను చిగుళ్ళ దగ్గర 45 డిగ్రీల కోణంలో ఉంచి మెల్లగా కదలించండి.",
            hi: "ब्रश को मसूड़ों के पास 45 डिग्री पर रखें और धीरे-धीरे हिलाएं।",
            kn: "ಬ್ರಷ್ ಅನ್ನು ಒಸಡುಗಳ ಬಳಿ 45 ಡಿಗ್ರಿ ಕೋನದಲ್ಲಿ ಇರಿಸಿ ನಿಧಾನವಾಗಿ ಅಲ್ಲಾಡಿಸಿ.",
            ml: "ബ്രഷ് മോണയോട് ചേർത്ത് 45 ഡിഗ്രിയിൽ വെച്ച് മെല്ലെ ഇളക്കുക."
        },
        rationale: {
            en: "Cleans INSIDE the gum pocket. Best for adults and gum disease patients.",
            ta: "ஈறுகளுக்குள் இருக்கும் அழுக்கை நீக்க சிறந்தது.",
            hi: "मसूड़ों के अंदर की सफाई के लिए सबसे अच्छा।",
            te: "చిగుళ్ళ మధ్య శుభ్రపరచడానికి ఉత్తమమైనది.",
            kn: "ಒಸಡುಗಳ ಒಳಗಿನ ಸ್ವಚ್ಛತೆಗೆ ಉತ್ತಮ.",
            ml: "മോണയ്ക്കുള്ളിലെ വൃത്തിയാക്കലിന് ഏറ്റവും അനുയോജ്യം."
        },
        targetAudience: "Adults, Periodontitis Patients"
    },
    'fones_method': {
        id: 'fones_method',
        category: 'Hygiene',
        name: { en: "Fones Method (Circular)", ta: "வட்ட முறை (Fones Method)", hi: "गोलाकार तकनीक", te: "ఫోన్స్ టెక్నిక్", kn: "ಫೋನ್ಸ್ ತಂತ್ರ", ml: "ഫോൺസ് രീതി" },
        instruction: {
            en: "Move the brush in large circular motions over teeth and gums.",
            ta: "பற்கள் மற்றும் ஈறுகளின் மேல் வட்ட வடிவில் பிரஷ் செய்யவும்.",
            te: "గుండ్రంగా బ్రష్ చేయండి.",
            hi: "गोल-गोल घुमाकर ब्रश करें।",
            kn: "ವೃತ್ತಾಕಾರದಲ್ಲಿ ಬ್ರಷ್ ಮಾಡಿ.",
            ml: "വൃത്താകാരത്തിൽ ബ്രഷ് ചെയ്യുക."
        },
        rationale: {
            en: "Easy to learn for children with less dexterity.",
            ta: "குழந்தைகளுக்கு மிகவும் சுலபமானது.",
            hi: "बच्चों के लिए सीखने में आसान।",
            te: "పిల్లలకు సులభమైన పద్ధతి.",
            kn: "ಮಕ್ಕಳಿಗೆ ಕಲಿಯಲು ಸುಲಭ.",
            ml: "കുട്ടികൾക്ക് പഠിക്കാൻ എളുപ്പമുള്ള രീതി."
        },
        targetAudience: "Children < 10 years"
    },

    // ==========================================
    // 2. FLUORIDE & TOOTHPASTE SAFETY
    // ==========================================
    'toothpaste_amount_kids': {
        id: 'toothpaste_amount_kids',
        category: 'Fluoride',
        name: { en: "Toothpaste Quantity (Kids < 3)", ta: "பற்பசை அளவு (3 வயது வரை)", hi: "टूथपेस्ट की मात्रा (छोटे बच्चे)", te: "పేస్ట్ పరిమాణం (పిల్లలకు)", kn: "ಪೇಸ್ಟ್ ಪ್ರಮಾಣ (ಮಕ್ಕಳಿಗೆ)", ml: "പേസ്റ്റിന്റെ അളവ് (കുട്ടികൾക്ക്)" },
        instruction: {
            en: "Use a smear or 'Grain of Rice' size amount. 1000ppm Fluoride.",
            ta: "அரிசி அளவு மட்டுமே பயன்படுத்தவும். துப்ப கற்றுக்கொடுக்கவும்.",
            te: "బియ్యం గింజంత పేస్ట్ వాడండి.",
            hi: "चावल के दाने जितना पेस्ट लें।",
            kn: "ಅಕ್ಕಿ ಕಾಳಿನಷ್ಟು ಪೇಸ್ಟ್ ಬಳಸಿ.",
            ml: "അരിമണി വലിപ്പത്തിൽ പേസ്റ്റ് എടുക്കുക."
        },
        rationale: {
            en: "Prevents Fluorosis (white spots) if swallowed.",
            ta: "விழுங்கினால் பற்களில் வெள்ளை புள்ளி வராமல் தடுக்கும்.",
            hi: "निगलने पर दांतों पर सफेद धब्बे (फ्लोरोसिस) होने से रोकता है।"
        },
        targetAudience: "Toddlers (0-3 Years)"
    },
    'toothpaste_amount_adult': {
        id: 'toothpaste_amount_adult',
        category: 'Fluoride',
        name: { en: "Toothpaste Quantity (Adults/Kids > 3)", ta: "பற்பசை அளவு (பெரியவர்கள்)", hi: "बड़ों के लिए मात्रा", te: "పెద్దలకు పేస్ట్ పరిమాణం", kn: "ದೊಡ್ಡವರಿಗೆ ಪೇಸ್ಟ್ ಪ್ರಮಾಣ", ml: "മുതിർന്നവർക്കുള്ള പേസ്റ്റിന്റെ അളവ്" },
        instruction: {
            en: "Use a 'Pea-sized' amount. Spit, do not rinse forcefully.",
            ta: "பட்டாணி அளவு பயன்படுத்தவும். துப்பிய பிறகு வாயை கழுவ வேண்டாம் (மருந்து பல்லில் இருக்கட்டும்).",
            te: "బఠానీ గింజంత పేస్ట్ వాడండి. ఉమ్మివేయండి, కడగవద్దు.",
            hi: "मटर के दाने जितना लें। थूकें, कुल्ला न करें।",
            kn: "ಬಟಾಣಿ ಗಾತ್ರದಷ್ಟು ಬಳಸಿ.",
            ml: "പയറുമണി വലിപ്പത്തിൽ എടുക്കുക."
        },
        rationale: {
            en: "Leave fluoride on teeth for maximum protection.",
            ta: "ஃப்ளோரைடு பல்லில் தங்கி கவசமாக செயல்படும்.",
            hi: "दांतों पर सुरक्षा के लिए फ्लोराइड की परत छोडें।"
        },
        targetAudience: "Everyone > 3 Years"
    },

    // ==========================================
    // 3. DIET & SNACKING
    // ==========================================
    'sugar_frequency': {
        id: 'sugar_frequency',
        category: 'Diet',
        name: { en: "The Frequency Rule", ta: "இனிப்பு சாப்பிடும் முறை", hi: "मीठा खाने का नियम", te: "తీపి తినే నియమం", kn: "ಸಿಹಿ ತಿನ್ನುವ ನಿಯಮ", ml: "മധുരം കഴിക്കുന്ന രീതി" },
        instruction: {
            en: "It's not HOW MUCH sugar, but HOW OFTEN. Eat sweets with meals, not in between.",
            ta: "அளவை விட, எத்தனை முறை சாப்பிடுகிறீர்கள் என்பது முக்கியம். சாப்பாட்டுடன் இனிப்பு சாப்பிடுங்கள், நடுவில் வேண்டாம்.",
            te: "ఎంత తింటున్నారో కాదు, ఎన్నిసార్లు తింటున్నారో ముఖ్యం. భోజనంతో పాటు తినండి.",
            hi: "कितना नहीं, कितनी बार खाते हैं यह मायने रखता है। खाने के साथ मीठा खाएं।",
            kn: "ಊಟದ ಜೊತೆ ಸಿಹಿ ತಿನ್ನಿರಿ, ಮಧ್ಯದಲ್ಲಿ ಬೇಡ.",
            ml: "ഭക്ഷണത്തോടൊപ്പം മധുരം കഴിക്കുക, ഇടവേളകളിൽ അരുത്."
        },
        rationale: {
            en: "Frequent snacking keeps mouth acidic all day, causing cavities.",
            ta: "அடிக்கடி சாப்பிட்டால் வாய் எப்போதும் அமிலத்தன்மையுடன் இருக்கும், சொத்தை வரும்.",
            hi: "बार-बार खाने से मुंह में एसिड बना रहता है, जिससे कैविटी होती है।"
        },
        targetAudience: "High Caries Risk Patients"
    },
    'sticky_foods': {
        id: 'sticky_foods',
        category: 'Diet',
        name: { en: "Sticky Foods Warning", ta: "ஒட்டும் உணவுகள்", hi: "चिपकने वाला खाना", te: "అతికే ఆహారాలు", kn: "ಅಂಟುವ ಆಹಾರ", ml: "ഒട്ടിപ്പിടിക്കുന്ന ഭക്ഷണങ്ങൾ" },
        instruction: {
            en: "Avoid eclairs, gummies, and dried fruits. They stick to grooves for hours.",
            ta: "மிட்டாய், ஜவ்வு மிட்டாய், உலர்ந்த பழங்களை தவிர்க்கவும். இவை பல்லில் ஒட்டிக்கொள்ளும்.",
            hi: "चिपकने वाली टॉफी न खाएं।",
            te: "అతికే చాక్లెట్లు మరియు పండ్రు తినవద్దు.",
            kn: "ಅಂಟುವ ಮಿಠಾಯಿ ಬೇಡ.",
            ml: "ഒട്ടിപ്പിടിക്കുന്ന മിഠായികൾ ഒഴിവാക്കുക."
        },
        rationale: {
            en: "Saliva cannot wash these away easily.",
            ta: "எச்சிலால் இதை சுத்தம் செய்ய முடியாது.",
            hi: "लार इसे आसानी से साफ नहीं कर पाती है।"
        },
        targetAudience: "Kids, Braces Patients"
    }
};

export class PreventionHelper {

    /**
     * CAMBRA Risk Assessment (Caries Management By Risk Assessment)
     */
    static assessRisk(cavitiesLast3Years: number, hygiene: 'Good' | 'Poor', hasBraces: boolean): string {

        // 1. High Risk
        if (cavitiesLast3Years > 2 || (hasBraces && hygiene === 'Poor')) {
            return "🔴 **HIGH RISK:** \n- Recall: Every 3 months.\n- Rx: Fluoride Varnish + 1000ppm Toothpaste.\n- Diet: Stop between-meal snacking.";
        }

        // 2. Moderate Risk
        if (cavitiesLast3Years === 1 || hygiene === 'Poor') {
            return "🟡 **MODERATE RISK:** \n- Recall: Every 6 months.\n- Rx: Fluoride Mouthwash daily.\n- Diet: Limit sticky foods.";
        }

        // 3. Low Risk
        return "🟢 **LOW RISK:** \n- Recall: Every 6-12 months.\n- Rx: Standard hygiene.";
    }

    /**
     * Recommends the correct brush type
     */
    static getBrushRecommendation(age: number, gumStatus: 'Healthy' | 'Bleeding'): string {
        if (age < 10) return "Use a **Soft, Small-headed** manual brush (Fones Method).";
        if (gumStatus === 'Bleeding') return "Use an **Ultra-Soft** brush (Bass Method). Hard bristles will damage gums further.";
        return "Use a **Medium/Soft** brush or Electric Toothbrush.";
    }

    /**
     * The "Spit, Don't Rinse" Logic
     */
    static getRinsingAdvice(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "பல் துலக்கிய பின் வாயை தண்ணீரால் கழுவ வேண்டாம். துப்பினால் போதும். மருந்து பல்லில் இருக்கட்டும்.";
        if (lang === 'te') return "బ్రష్ చేసిన తర్వాత నీటితో కడగవద్దు. ఉమ్మివేస్తే సరిపోతుంది. మందు పంటి మీద ఉండనివ్వండి.";
        if (lang === 'hi') return "ब्रश करने के बाद कुल्ला न करें। थूक दें ताकि फ्लोराइड आपके दांतों को सुरक्षित रख सके।";
        return "⚠️ **Tip:** Spit out the foam, but **DO NOT rinse** with water immediately. Leaving a thin layer of toothpaste on teeth strengthens enamel.";
    }
}
