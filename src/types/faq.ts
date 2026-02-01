import { LocalizedText } from './neoSchema';

export interface FAQEntry {
    id: string;
    category: string;
    question: LocalizedText;
    answer: LocalizedText;
    speakableAnswer: LocalizedText; // Optimized for Siri/Alexa (max 30 words)
    keywords: string[]; // For vector/keyword search
    relatedSlugs?: string[]; // Internal linking to treatment pages
    schemaType?: 'FAQPage' | 'MedicalProcedure' | 'MedicalCondition';
    lastPublished: string; // ISO date
}

export interface FAQVault {
    version: string;
    lastUpdated: string;
    faqs: FAQEntry[];
}
