
import { MedicalCondition } from '../../types/neoSchema';

export const PATHOLOGY_CARIES: MedicalCondition = {
    id: 'caries',
    medicalTerm: {
        en: "Dental Caries",
        ta: "பல் சொத்தை"
    },
    laymanTerm: {
        en: "Tooth Decay / Cavity",
        ta: "சொத்தை பல்"
    },
    description: {
        en: "Permanent damage to the hard surface of your teeth that develops into tiny openings or holes.",
        ta: "பற்களின் கடினமான மேற்பரப்பில் ஏற்படும் நிரந்தர சேதம்."
    },
    symptoms: {
        en: [
            "Toothache",
            "Sensitivity to hot or cold",
            "Visible holes or pits in teeth",
            "Brown, black or white staining"
        ],
        ta: [
            "பல் வலி",
            "சூடான அல்லது குளிர்ச்சியான உணர்திறன்",
            "பற்களில் ஓட்டைகள்"
        ]
    },
    cause: {
        en: "Caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks, and not cleaning your teeth well.",
        ta: "பாக்டீரியா மற்றும் சர்க்கரை உணவுகள் காரணமாக ஏற்படுகிறது."
    },
    physiology: {
        en: "Bacteria in the mouth convert sugars/starches into acids. These acids erode the Enamel (outer layer). If untreated, it progresses to Dentin (causing sensitivity) and finally the Pulp (causing severe pain/infection).",
        ta: "வாயில் உள்ள பாக்டீரியாக்கள் சர்க்கரையை அமிலமாக மாற்றுகின்றன. இது பல்லின் எனாமல் பகுதியை அழிக்கிறது."
    },
    treatments: ['dental-fillings', 'root-canal', 'dental-crowns']
};
