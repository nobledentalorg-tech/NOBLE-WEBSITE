import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Cohen's Pathways of the Pulp
// Focus: Pulp Vitality, Periapical Diagnosis, Trauma

export interface EndoDiagnosis {
    id: string;
    condition: LocalizedText;
    symptoms: string[];
    thermalTestResponse: 'Normal' | 'Lingers' | 'No Response' | 'Sharp Transient';
    percussionSensitivity: boolean;
    radiographicFeatures: string;
    treatment: LocalizedText;
}

export const PULP_DIAGNOSES: Record<string, EndoDiagnosis> = {
    'reversible_pulpitis': {
        id: 'reversible_pulpitis',
        condition: { en: "Reversible Pulpitis", ta: "மீளக்கூடிய பல் வலி" },
        symptoms: ["Sharp pain with cold/sweet", "Disappears immediately"],
        thermalTestResponse: 'Sharp Transient',
        percussionSensitivity: false,
        radiographicFeatures: "Normal periapical area",
        treatment: { en: "Caries Removal & Restoration", ta: "சொத்தையை நீக்கி அடைத்தல்" }
    },
    'symptomatic_irreversible_pulpitis': {
        id: 'symptomatic_irreversible_pulpitis',
        condition: { en: "Symptomatic Irreversible Pulpitis", ta: "தீவிர நரம்பு பாதிப்பு" },
        symptoms: ["Spontaneous pain", "Keeps awake at night", "Referred pain"],
        thermalTestResponse: 'Lingers',
        percussionSensitivity: false, // Unless apical periodontitis also present
        radiographicFeatures: "May show widened PDL",
        treatment: { en: "Root Canal Treatment (RCT)", ta: "வேர் சிகிச்சை (RCT)" }
    },
    'pulp_necrosis': {
        id: 'pulp_necrosis',
        condition: { en: "Pulp Necrosis", ta: "நரம்பு இறப்பு" },
        symptoms: ["Variable", "Often asymptomatic until abscess"],
        thermalTestResponse: 'No Response',
        percussionSensitivity: true, // Often associated with SAP
        radiographicFeatures: "Periapical Radioluscency may be present",
        treatment: { en: "Root Canal Treatment (RCT)", ta: "வேர் சிகிச்சை (RCT)" }
    }
};

export const TRAUMA_PROTOCOL = {
    'avulsion': {
        action: "Replant immediately (< 60 mins critical)", // Golden Hour
        storage: ["HBSS", "Milk", "Saliva"]
    },
    'complicated_fracture': {
        action: "Pulp Capping (if small/recent) or RCT (if large/old)"
    }
};
