
import { LocalizedText } from '../../types/neoSchema';

export interface TariffItem {
    id: string;
    name: LocalizedText;
    price: {
        min: number;
        max?: number;
        currency: string;
    };
    unit: string; // "per tooth", "per jaw"
    keywords?: string[]; // Added for AI Search
}

export const TARIFF_DB: TariffItem[] = [
    {
        id: 'consultation',
        name: { en: "General Consultation" },
        price: { min: 300, currency: "INR" },
        unit: "per visit",
        keywords: ['checkup', 'consult', 'doctor', 'appointment']
    },
    {
        id: 'rct',
        name: { en: "Root Canal Treatment (RCT)" },
        price: { min: 3500, max: 6000, currency: "INR" },
        unit: "per tooth",
        keywords: ['root canal', 'nerve', 'pulp', 'rct', 'pain']
    },
    {
        id: 'extraction',
        name: { en: "Simple Extraction" },
        price: { min: 1500, max: 2500, currency: "INR" },
        unit: "per tooth",
        keywords: ['remove', 'pull', 'extraction', 'loose']
    },
    {
        id: 'implant',
        name: { en: "Dental Implant" },
        price: { min: 25000, max: 45000, currency: "INR" },
        unit: "per unit",
        keywords: ['implant', 'screw', 'fix', 'permanent', 'missing']
    },
    {
        id: 'veneer',
        name: { en: "Ceramic Veneer" },
        price: { min: 12000, max: 18000, currency: "INR" },
        unit: "per tooth",
        keywords: ['veneer', 'smile', 'laminate', 'design']
    },
    {
        id: 'invisalign',
        name: { en: "Invisalign (Clear Aligners)" },
        price: { min: 150000, max: 350000, currency: "INR" },
        unit: "full treatment",
        keywords: ['invisalign', 'aligner', 'clip', 'braces', 'straight']
    },
    {
        id: 'whitening',
        name: { en: "Laser Teeth Whitening" },
        price: { min: 8000, currency: "INR" },
        unit: "per session",
        keywords: ['white', 'bleach', 'yellow', 'clean']
    }
];

export const ROSTER_DB = {
    isOpenNow: (): boolean => {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const day = now.getDay(); // 0 = Sun

        // Clinic Hours: 9:30 AM - 11:30 PM (23:30)
        const totalMinutes = hour * 60 + minute;
        const openTime = 9 * 60 + 30;
        const closeTime = 23 * 60 + 30;

        // Assuming open every day including Sunday based on "accepts 24hrs emergency out side clinic hours" 
        // implies standard operating hours are the main ones. 
        // The user didn't specify Sunday hours, so I will apply this generally.
        return totalMinutes >= openTime && totalMinutes <= closeTime;
    }
};
