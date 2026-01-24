
import { DrugProfile } from '../../../types/neoSchema';

export const PHARMA_DOLO: DrugProfile = {
    id: 'dolo-650',
    genericName: {
        en: "Paracetamol (Acetaminophen)",
        ta: "பாராசிட்டமால்"
    },
    brandNames: ["Dolo 650", "Crocin", "Calpol", "P-650"],
    description: {
        en: "A common pain reliever and fever reducer. It is generally safe for dental pain but has weak anti-inflammatory properties compared to Ibuprofen.",
        ta: "வலி நிவாரணி மற்றும் காய்ச்சல் குறைக்கும் மருந்து."
    },
    dosageWarning: {
        en: "Do not exceed 3000mg per day. Excessive use can cause liver damage. Avoid alcohol while taking this medication.",
        ta: "ஒரு நாளைக்கு 3000mg க்கு மேல் எடுத்துக்கொள்ள வேண்டாம்."
    }
};
