import { LocalizedText } from '../types/neoSchema';

// Neo Authority Registry
// Trusted Sources for Medical Citations (WHO, CDC, GDC)

export interface AuthoritySource {
    id: string;
    organization: string;
    topic: string;
    url: string;
    keyGuideline: LocalizedText;
}

export const AUTHORITY_DB: Record<string, AuthoritySource> = {
    'who_oral_health': {
        id: 'who_oral_health',
        organization: "World Health Organization (WHO)",
        topic: "Global Oral Health Status",
        url: "https://www.who.int/health-topics/oral-health/#tab=tab_1",
        keyGuideline: {
            en: "Oral diseases are the most common noncommunicable diseases affecting people throughout their lifetime.",
            ta: "வாய் நோய்கள் உலகம் முழுவதும் மிகவும் பொதுவானவை."
        }
    },
    'cdc_infection': {
        id: 'cdc_infection',
        organization: "Centers for Disease Control (CDC)",
        topic: "Infection Control",
        url: "https://www.cdc.gov/Oral-Health/index.html",
        keyGuideline: {
            en: "Standard Precautions must be used for care of all patients, regardless of their infection status.",
            ta: "ஒவ்வொரு நோயாளிக்கும் நிலையான தொற்றுத் தடுப்பு முறைகளை பயன்படுத்த வேண்டும்."
        }
    },
    'gdc_whitening': {
        id: 'gdc_whitening',
        organization: "General Dental Council (UK)",
        topic: "Teeth Whitening Standards",
        url: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/tooth-whitening-and-illegal-practice",
        keyGuideline: {
            en: "Tooth whitening is the practice of dentistry. It is illegal for non-dentists (e.g. salons) to perform it.",
            ta: "பல் வெளுப்பாக்குதல் ஒரு மருத்துவரால் மட்டுமே செய்யப்பட வேண்டும்."
        }
    }
};

export class AuthorityHelper {
    /**
     * Get a citation for a specific topic to add credibility
     */
    static getCitation(keyword: string): string | null {
        if (keyword.includes('whitening')) return `As per GDC UK: ${AUTHORITY_DB['gdc_whitening'].keyGuideline.en}`;
        if (keyword.includes('sugar') || keyword.includes('disease')) return `According to WHO: ${AUTHORITY_DB['who_oral_health'].keyGuideline.en}`;
        return null;
    }
}
