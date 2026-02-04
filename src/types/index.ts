import { ClinicalOption } from './neoSchema';

export interface Doctor {
    id: string;
    name: string;
    role: string;
    specialty: string;
    experience: string;
    image: string;
    cases: string;
    success: string;
    aligners: boolean;
    bio?: string;
    dciReg?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
}

export interface Source {
    title: string;
    uri: string;
}

export interface Possibility {
    title: string;
    description: string;
    likelihood: 'Very High' | 'High' | 'Moderate' | 'Low';
    action: string;
    relatedSlug?: string;
}


export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    timestamp: number;
    language?: 'en' | 'te' | 'hi' | 'ta' | 'kn' | 'ml';
    sources?: Source[];
    possibilities?: Possibility[];
    options?: ClinicalOption[];
    urgency?: 'low' | 'medium' | 'high' | 'emergency';
}
