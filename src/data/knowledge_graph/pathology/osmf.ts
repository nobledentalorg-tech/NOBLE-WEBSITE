import { MedicalCondition } from '../../../types/neoSchema';

export const PATHOLOGY_OSMF: MedicalCondition = {
    id: 'osmf',
    medicalTerm: {
        en: "Oral Submucous Fibrosis",
        ta: "வாய்வழி சப்மியூகோசல் ஃபைப்ரோஸிஸ்"
    },
    laymanTerm: {
        en: "OSMF / Restricted Mouth Opening",
        ta: "வாய் திறக்க சிரமம்"
    },
    description: {
        en: "A chronic, precancerous condition of the oral cavity characterized by inflammation and progressive fibrosis of the submucosal tissues, leading to marked rigidity and an eventual inability to open the mouth.",
        ta: "வாய் உட்புறத்தில் ஏற்படும் நாள்பட்ட, புற்றுநோய்க்கு முந்தைய நிலை, இதனால் வாய் திறப்பதில் கடுமையான சிரமம் ஏற்படும்."
    },
    symptoms: {
        en: [
            "Inability to open mouth fully (Trismus)",
            "Burning sensation when eating spicy foods",
            "Ulceration and dryness of the mouth",
            "Stiffening and thinning of oral tissues",
            "Change in voice or hearing (in advanced stages)"
        ],
        ta: [
            "வாயை முழுமையாக திறக்க இயலாமை",
            "காரமான உணவுகளை உண்ணும்போது எரியும் உணர்வு",
            "வாயில் வறட்சி மற்றும் புண்கள்"
        ]
    },
    cause: {
        en: "Primarily caused by chewing areca nut (betel nut), gutkha, or pan masala. Nutritional deficiencies and genetic predisposition can also play a role.",
        ta: "முக்கியமாக பாக்கு, குட்கா அல்லது பான் மசாலா மெல்லுவதால் ஏற்படுகிறது."
    },
    physiology: {
        en: "Alkaloids in areca nut stimulate fibroblasts to produce excess collagen while simultaneously inhibiting collagen breakdown. This leads to a dense, fibrous band formation beneath the oral mucosa, restricting muscle movement.",
        ta: "பாக்கில் உள்ள வேதிப்பொருட்கள் வாய் உட்புறத்தில் அதிகப்படியான கொலாஜனை உருவாக்கி திசுக்களை கடினமாக்குகிறது."
    },
    treatments: ['laser-dentistry', 'full-mouth-rehab']
};
