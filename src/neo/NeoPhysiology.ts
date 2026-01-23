import { LocalizedText } from '../types/neoSchema';

// Data derived from: Guyton & Hall Textbook of Medical Physiology
// Focus: Vital Signs, Pain Pathways, Pregnancy, and Hemostasis.

export interface PhysioNorm {
    id: string;
    parameter: string;
    unit: string;
    normalRange: string;
    criticalValue: string;
    dentalImplication: LocalizedText;
    patientExplanation: LocalizedText;
}

export const VITAL_SIGNS: Record<string, PhysioNorm> = {

    // --- 1. CARDIOVASCULAR ---
    'blood_pressure': {
        id: 'blood_pressure',
        parameter: "Blood Pressure (BP)",
        unit: "mmHg",
        normalRange: "120/80",
        criticalValue: "> 160/100 (Stage 2)",
        dentalImplication: {
            en: "Defer elective surgery if > 160/100. Risk of stroke/bleeding.",
            ta: "BP அதிகமாக இருந்தால் பல் பிடுங்கக் கூடாது. ரத்தம் நிற்காது.",
            te: "BP ఎక్కువగా ఉంటే పన్ను తీయకూడదు.",
            hi: "BP ज्यादा होने पर इलाज न करें।",
            kn: "BP ಹೆಚ್ಚಿದ್ದರೆ ಚಿಕಿತ್ಸೆ ನೀಡಬೇಡಿ.",
            ml: "BP കൂടുതലാണെങ്കിൽ ചികിത്സിക്കരുത്."
        },
        patientExplanation: {
            en: "High pressure pushes blood clots out, causing bleeding that won't stop.",
            ta: "அதிக அழுத்தம் இருந்தால் ரத்தம் உறைவதை தடுக்கும்."
        }
    },
    'pulse_rate': {
        id: 'pulse_rate',
        parameter: "Pulse Rate",
        unit: "bpm",
        normalRange: "60 - 100",
        criticalValue: "> 120 (Tachycardia)",
        dentalImplication: {
            en: "Anxiety or Cardiac issue. Avoid Epinephrine if > 110.",
            ta: "பதற்றம் அல்லது இதய பிரச்சனை. மயக்க மருந்தில் கவனம் தேவை.",
            te: "గుండె దడ.",
            hi: "घबराहट या दिल की धड़कन तेज।",
            kn: "ಹೃದಯ ಬಡಿತ ಹೆಚ್ಚು.",
            ml: "ഹൃദയമിടിപ്പ് കൂടുതൽ."
        },
        patientExplanation: {
            en: "Your heart is racing. We need to calm you down before starting.",
            ta: "உங்கள் இதயம் வேகமாக துடிக்கிறது. சற்று ஓய்வெடுக்கவும்."
        }
    },

    // --- 2. RESPIRATORY ---
    'spo2': {
        id: 'spo2',
        parameter: "Oxygen Saturation (SpO2)",
        unit: "%",
        normalRange: "95 - 100",
        criticalValue: "< 90 (Hypoxia)",
        dentalImplication: {
            en: "Hypoxia risk. Do not sedate. Keep oxygen cylinder ready.",
            ta: "ஆக்சிஜன் அளவு குறைவு. மயக்க மருந்து கொடுக்கக்கூடாது.",
            te: "ఆక్సిజన్ తక్కువ.",
            hi: "ऑक्सीजन कम है।",
            kn: "ಆಮ್ಲಜನಕ ಕಡಿಮೆ.",
            ml: "ഓക്സിജൻ കുറവ്."
        },
        patientExplanation: {
            en: "Your body isn't getting enough oxygen.",
            ta: "உங்கள் உடலில் ஆக்சிஜன் குறைவாக உள்ளது."
        }
    },

    // --- 3. HEMOSTASIS (Clotting) ---
    'bleeding_time': {
        id: 'bleeding_time',
        parameter: "Bleeding Time (BT)",
        unit: "mins",
        normalRange: "1 - 3",
        criticalValue: "> 6 mins",
        dentalImplication: {
            en: "Platelet disorder likely. Risk of prolonged bleeding.",
            ta: "ரத்தம் உறைவதில் தாமதம் (தட்டணுக்கள் குறைவு).",
            te: "రక్తం ఆగడం ఆలస్యం.",
            hi: "खून बहना नहीं रुकता।",
            kn: "ರಕ್ತಸ್ರಾವ ನಿಲ್ಲುವುದಿಲ್ಲ.",
            ml: "രക്തം നിൽക്കാൻ സമയമെടുക്കും."
        },
        patientExplanation: {
            en: "Your blood takes too long to stop flowing naturally.",
            ta: "உங்கள் ரத்தம் நிற்க அதிக நேரம் ஆகிறது."
        }
    }
};

// ==========================================
// 2. PAIN PHYSIOLOGY (Neurophysiology)
// ==========================================
export const PAIN_MECHANISMS = {
    'acute_pulpitis': {
        condition: "Acute Pulpitis",
        nerveFiber: "A-Delta Fibers (Myelinated)",
        sensation: "Sharp, shooting, localized pain.",
        mechanism: {
            en: "Inflammation causes pressure inside the tooth, firing fast nerve fibers.",
            ta: "பல்லின் உள்ளே அழுத்தம் அதிகரிப்பதால் சுருக்கு என்ற வலி ஏற்படுகிறது."
        }
    },
    'chronic_pulpitis': {
        condition: "Chronic Pulpitis",
        nerveFiber: "C-Fibers (Unmyelinated)",
        sensation: "Dull, throbbing, aching pain.",
        mechanism: {
            en: "Deep decay activates slow nerve fibers causing lingering pain.",
            ta: "ஆழ்ந்த சொத்தை நரம்பை பாதிப்பதால் விண்-விண் என்ற வலி இருக்கும்."
        }
    },
    'local_anesthesia': {
        condition: "Numbing Shot (Lignocaine)",
        mechanism: {
            en: "It blocks Sodium (Na+) channels in the nerve, stopping the pain signal from reaching the brain.",
            ta: "இது நரம்பில் உள்ள சோடியம் வழியை அடைத்து, வலி மூளைக்கு செல்வதை தடுக்கிறது."
        }
    }
};

// ==========================================
// 3. PREGNANCY PHYSIOLOGY
// ==========================================
export const PREGNANCY_GUIDELINES = {
    'first_trimester': {
        period: "Months 1-3",
        risk: "Organogenesis (Baby organs forming).",
        advice: {
            en: "Avoid elective treatment. Emergency only. No X-rays.",
            ta: "சிகிச்சையை தவிர்க்கவும். அவசர சிகிச்சை மட்டும் செய்யலாம்.",
            hi: "इलाज से बचें।",
            te: "చికిత్స వద్దు.",
            kn: "ಚಿಕಿತ್ಸೆ ಬೇಡ.",
            ml: "ചികിത്സ ഒഴിവാക്കുക."
        }
    },
    'second_trimester': {
        period: "Months 4-6",
        risk: "Low Risk (Golden Period).",
        advice: {
            en: "✅ SAFEST time for dental treatment (Cleaning, Fillings, Extraction).",
            ta: "சிகிச்சை செய்ய இதுவே சிறந்த நேரம்.",
            hi: "इलाज के लिए सबसे सुरक्षित समय।",
            te: "చికిత్సకు మంచి సమయం.",
            kn: "ಚಿಕಿತ್ಸೆಗೆ ಸುರಕ್ಷಿತ ಸಮಯ.",
            ml: "ചികിത്സയ്ക്ക് ഏറ്റവും നല്ല സമയം."
        }
    },
    'third_trimester': {
        period: "Months 7-9",
        risk: "Supine Hypotension (Baby presses on Vena Cava).",
        advice: {
            en: "Short appointments only. Do not lie flat (Supine). Turn to left side.",
            ta: "நீண்ட நேரம் படுக்க வேண்டாம். இடது பக்கமாக சாய்ந்து இருக்கவும்.",
            hi: "सीधे न लेटें। बाईं करवट लें।",
            te: "ఎక్కువ సేపు పడుకోవద్దు.",
            kn: "ನೆಟ್ಟಗೆ ಮಲಗಬೇಡಿ.",
            ml: "നിവർന്നു കിടക്കരുത്."
        }
    }
};

export class PhysioHelper {

    /**
     * Syncope (Fainting) Risk Logic
     */
    static checkSyncopeRisk(anxiety: 'High' | 'Low', position: 'Upright' | 'Supine'): string {
        if (anxiety === 'High' && position === 'Upright') {
            return "⚠️ **High Risk of Fainting (Vasovagal Syncope):** Brain blood flow may drop. Keep patient reclined.";
        }
        return "✅ Low Risk.";
    }

    /**
     * Explains why we numb the tooth
     */
    static explainAnesthesia(lang: 'en' | 'ta' | 'te' | 'hi' | 'kn' | 'ml' = 'en'): string {
        if (lang === 'ta') return "ஊசி போட்டால், அது நரம்பின் 'தபால் பெட்டியை' மூடிவிடும். அதனால் வலி செய்தி மூளைக்கு போகாது.";
        if (lang === 'te') return "ఇంజక్షన్ చేస్తే, అది నరాల 'పోస్ట్ బాక్స్' ను మూసివేస్తుంది. అందువల్ల మెదడుకు నొప్పి చేరదు.";
        if (lang === 'hi') return "इंजेक्शन नसों के 'पोस्ट बॉक्स' को बंद कर देता है, जिससे मस्तिष्क तक दर्द का संदेश नहीं पहुँचता।";
        return "The injection acts like a roadblock. It temporarily stops the nerve from sending 'pain messages' to your brain.";
    }

    /**
     * Pregnancy Safety Check
     */
    static checkPregnancySafety(month: number): string {
        if (month <= 3) return PREGNANCY_GUIDELINES.first_trimester.advice.en;
        if (month <= 6) return PREGNANCY_GUIDELINES.second_trimester.advice.en;
        return PREGNANCY_GUIDELINES.third_trimester.advice.en;
    }
}
