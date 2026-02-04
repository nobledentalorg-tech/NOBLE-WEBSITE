
export type SupportedLanguage = 'en' | 'ta' | 'te' | 'kn' | 'hi' | 'ml';

export interface LocalizedText {
    en: string; // English
    ta?: string; // Tamil
    te?: string; // Telugu
    hi?: string; // Hindi
    kn?: string; // Kannada
    ml?: string; // Malayalam
}

export type ClinicalNodeType = 'question' | 'assessment' | 'info' | 'emergency';

export interface ClinicalOption {
    label: LocalizedText;
    nextId: string;
    icon?: string; // e.g. "🦷" or "🚨"
    keywords?: string[]; // Synonyms for NLP matching
}

export interface ClinicalNode {
    id: string;
    type: ClinicalNodeType;
    text: LocalizedText;

    // Navigation Options
    options?: ClinicalOption[];

    // Payloads
    medicalNote?: LocalizedText; // "Doctor's secret note" for reasoning
    relatedSlug?: string; // Link to treatment page (/treatments/root-canal)

    // Visuals
    mediaTag?: string; // Placeholder for future diagram rendering
    sentiment?: 'neutral' | 'empathetic' | 'urgent' | 'pro'; // Tone of voice

    // Risk Assessment Logic (New v2.1)
    redFlags?: string[]; // Keywords that trigger high urgency e.g. ["swelling", "fever"]
    urgencyLevel?: 'emergency' | 'high' | 'medium' | 'low'; // Pre-defined node urgency

    // UI Compatibility (Care Cards)
    possibilities?: {
        title: string;
        description: string;
        likelihood: 'Very High' | 'High' | 'Moderate' | 'Low';
        action: string;
        relatedSlug?: string;
    }[];
}

export interface NeoResponse {
    node: ClinicalNode;
    confidenceScore: number; // 0-100
    urgency: 'low' | 'medium' | 'high' | 'emergency';
}

// --- SEO / KNOWLEDGE GRAPH TYPES ---

export interface MedicalCondition {
    id: string;
    medicalTerm: LocalizedText;
    laymanTerm: LocalizedText;
    description: LocalizedText;

    symptoms: {
        en: string[];
        ta?: string[];
        te?: string[];
    };

    cause: LocalizedText;
    physiology: LocalizedText; // Deep explanation

    treatments: string[]; // IDs of treatments
}

export interface DrugProfile {
    id: string;
    genericName: LocalizedText;
    brandNames: string[]; // ["Dolo", "Crocin"]
    description: LocalizedText;
    dosageWarning: LocalizedText;
}
