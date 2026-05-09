import { MedicalCondition } from '../../../types/neoSchema';

export const PATHOLOGY_LEUKOPLAKIA: MedicalCondition = {
    id: 'leukoplakia',
    medicalTerm: {
        en: "Leukoplakia",
        ta: "லுகோபிளாக்கியா"
    },
    laymanTerm: {
        en: "White Patches in Mouth",
        ta: "வாயில் வெள்ளை திட்டுகள்"
    },
    description: {
        en: "A condition where thick, white patches form on the gums, the insides of the cheeks, the bottom of the mouth, or the tongue. These patches cannot be scraped off and are considered potentially precancerous.",
        ta: "ஈறுகள், கன்னங்களின் உட்புறம் அல்லது நாக்கில் ஏற்படும் தடிமனான வெள்ளை திட்டுகள்."
    },
    symptoms: {
        en: [
            "White or grayish patches that can't be wiped away",
            "Irregular or flat-textured areas",
            "Thickened or hardened areas in the mouth",
            "In some cases, red lesions (erythroplakia) alongside white patches"
        ],
        ta: [
            "அழிக்க முடியாத வெள்ளை அல்லது சாம்பல் நிற திட்டுகள்",
            "வாயில் தடிமனான அல்லது கடினமான பகுதிகள்"
        ]
    },
    cause: {
        en: "The exact cause is unknown, but chronic irritation from tobacco use (smoking or chewing) is the most common culprit. Heavy alcohol use or chronic friction from rough teeth/dentures can also contribute.",
        ta: "புகையிலை மற்றும் மது பழக்கம் முக்கிய காரணமாகும்."
    },
    physiology: {
        en: "Chronic irritation causes hyperkeratosis (excessive growth of the outer skin layer) of the oral mucosa as a protective response, leading to the clinical appearance of white plaques.",
        ta: "தொடர்ச்சியான எரிச்சல் காரணமாக வாய் உட்புறத்தில் தடிமனான வெள்ளை திட்டுகள் உருவாகின்றன."
    },
    treatments: ['laser-dentistry']
};
