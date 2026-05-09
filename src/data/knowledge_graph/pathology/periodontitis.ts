import { MedicalCondition } from '../../../types/neoSchema';

export const PATHOLOGY_PERIODONTITIS: MedicalCondition = {
    id: 'periodontitis',
    medicalTerm: {
        en: "Periodontitis",
        ta: "பெரியோடான்டிடிஸ்"
    },
    laymanTerm: {
        en: "Severe Gum Disease",
        ta: "கடுமையான ஈறு நோய்"
    },
    description: {
        en: "A serious gum infection that damages the soft tissue around teeth and, without treatment, can destroy the bone that supports your teeth, leading to tooth loss.",
        ta: "பற்களை சுற்றியுள்ள மென்மையான திசுக்களை சேதப்படுத்தும் ஒரு தீவிரமான ஈறு தொற்று."
    },
    symptoms: {
        en: [
            "Swollen, puffy, or receding gums",
            "Gums that bleed easily when brushing or flossing",
            "Persistent bad breath",
            "Loose teeth or painful chewing",
            "New spaces developing between your teeth"
        ],
        ta: [
            "வீங்கிய அல்லது பின்வாங்கும் ஈறுகள்",
            "பல் துலக்கும்போது ஈறுகளில் ரத்தம் வருதல்",
            "தொடர்ச்சியான வாய் துர்நாற்றம்",
            "ஆடும் பற்கள்"
        ]
    },
    cause: {
        en: "Begins with plaque, a sticky film composed of bacteria. Plaque hardens under your gumline into tartar (calculus), which causes chronic inflammation.",
        ta: "பற்களில் சேரும் பாக்டீரியா மற்றும் காரை காரணமாக ஏற்படுகிறது."
    },
    physiology: {
        en: "The immune system's response to the bacterial toxins in plaque leads to chronic inflammation. This inflammatory response breaks down the periodontium—the gums, alveolar bone, and periodontal ligaments supporting the teeth.",
        ta: "பாக்டீரியாவிற்கு எதிரான உடலின் எதிர்வினை காரணமாக பற்களை தாங்கும் எலும்புகள் மற்றும் திசுக்கள் சேதமடைகின்றன."
    },
    treatments: ['gum-disease', 'laser-dentistry', 'dental-implants']
};
