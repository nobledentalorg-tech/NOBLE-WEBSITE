import { LocalizedText } from '../types/neoSchema';

// Data derived from: KD Tripathi, ADA Guidelines, and AHA
// Focus: Antibiotics, Analgesics, Anesthesia

export interface DrugProtocol {
    id: string;
    class: 'Antibiotic' | 'Analgesic' | 'Anesthetic';
    genericName: string;
    brandExamples: string[]; // India specific
    adultDosage: string;
    pediatricDosage: string;
    indications: string[];
    contraindications: string[];
}

export const DENTAL_PHARMACOPOEIA: Record<string, DrugProtocol> = {
    // --- ANTIBIOTICS ---
    'amoxicillin_500': {
        id: 'amoxicillin_500',
        class: 'Antibiotic',
        genericName: 'Amoxicillin',
        brandExamples: ['Amox 500', 'Novamox'],
        adultDosage: '500mg TDS for 3-5 days',
        pediatricDosage: '20-40 mg/kg/day in divided doses',
        indications: ["Dental Abscess", "Cellulitis", "Space Infection"],
        contraindications: ["Penicillin Allergy"]
    },
    'augmentin_625': {
        id: 'augmentin_625',
        class: 'Antibiotic',
        genericName: 'Amoxicillin + Clavulanic Acid',
        brandExamples: ['Augmentin 625', 'Clavam 625'],
        adultDosage: '625mg BD for 5 days',
        pediatricDosage: 'Based on Amox component',
        indications: ["Resistant Infections", "Severe Swelling"],
        contraindications: ["Penicillin Allergy", "Liver Dysfunction"]
    },
    'metrogyl_400': {
        id: 'metrogyl_400',
        class: 'Antibiotic',
        genericName: 'Metronidazole',
        brandExamples: ['Metrogyl 400', 'Flagyl'],
        adultDosage: '400mg TDS for 5 days',
        pediatricDosage: '30 mg/kg/day',
        indications: ["Anaerobic Infections", "Pericoronitis", "Periodontal Abscess"],
        contraindications: ["Alcohol consumption (Disulfiram reaction)", "First Trimester Pregnancy"]
    },

    // --- ANALGESICS ---
    'ibuprofen_400': {
        id: 'ibuprofen_400',
        class: 'Analgesic',
        genericName: 'Ibuprofen',
        brandExamples: ['Brufen 400'],
        adultDosage: '400mg TDS after food',
        pediatricDosage: '10 mg/kg/dose',
        indications: ["Pulpitis Pain", "Post-Extraction"],
        contraindications: ["Gastric Ulcer", "Asthma", "Third Trimester"]
    },
    'ketorolac_dt': {
        id: 'ketorolac_dt',
        class: 'Analgesic',
        genericName: 'Ketorolac Tromethamine',
        brandExamples: ['Ketorol DT', 'Dentforce'],
        adultDosage: '10mg SOS (Max 40mg/day)',
        pediatricDosage: 'Not Recommended',
        indications: ["Severe Acute Dental Pain (toothache)"],
        contraindications: ["Bleeding disorders", "Gastric Ulcer", "Pregnancy"]
    },

    // --- ANESTHETICS ---
    'lignocaine_adrenaline': {
        id: 'lignocaine_adrenaline',
        class: 'Anesthetic',
        genericName: 'Lignocaine 2% + Adrenaline 1:80,000',
        brandExamples: ['Lignox', 'Xylocaine'],
        adultDosage: 'Max 7 mg/kg (approx 7-8 cartridges)',
        pediatricDosage: 'Max 4.4 mg/kg',
        indications: ["Routine Extractions", "RCT", "Minor Surgery"],
        contraindications: ["Hyperthyroidism (uncontrolled)", "Recent MI", "Sulfite Allergy"]
    },

    // --- EMERGENCY DRUGS (Crash Cart) ---
    'adrenaline_ampoule': {
        id: 'adrenaline_ampoule',
        class: 'Analgesic', // Categorized broadly
        genericName: 'Adrenaline (Epinephrine) 1:1000',
        brandExamples: ['Vasocon'],
        adultDosage: '0.3 - 0.5 mg IM (Thigh)',
        pediatricDosage: '0.15 - 0.3 mg IM',
        indications: ["Anaphylactic Shock (Severe Allergy)"],
        contraindications: ["None in life-threatening anaphylaxis"]
    },
    'drug_nitroglycerin': {
        id: 'drug_nitroglycerin',
        class: 'Analgesic',
        genericName: 'Nitroglycerin (Sublingual)',
        brandExamples: ['Sorbitrate'],
        adultDosage: '0.4 mg SL (Repeat every 5 mins x3)',
        pediatricDosage: 'Not indicated',
        indications: ["Angina Pectoris (Chest Pain)"],
        contraindications: ["Hypotension", "Viagra use (last 24h)"]
    }
};

export class PharmaHelper {
    /**
     * Checks if antibiotic prophylaxis is needed (AHA Guidelines 2021)
     */
    static needsProphylaxis(condition: string): boolean {
        const high_risk = [
            'Prosthetic Cardiac Valve',
            'Previous Infective Endocarditis',
            'Congenital Heart Disease (Unrepaired)',
            'Cardiac Transplant with Valvulopathy'
        ];
        return high_risk.includes(condition);
    }

    /**
     * Safe drugs for Pregnancy
     */
    static getSafeDrugsPregnancy(): string[] {
        return ['Amoxicillin', 'Paracetamol (Acetaminophen)', 'Lignocaine (Category B)'];
    }
}
