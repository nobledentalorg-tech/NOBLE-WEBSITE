
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
}

export const TARIFF_DB: TariffItem[] = [
    {
        id: 'consultation',
        name: { en: "General Consultation" },
        price: { min: 300, currency: "INR" },
        unit: "per visit"
    },
    {
        id: 'rct',
        name: { en: "Root Canal Treatment (RCT)" },
        price: { min: 3500, max: 6000, currency: "INR" },
        unit: "per tooth"
    },
    {
        id: 'extraction',
        name: { en: "Simple Extraction" },
        price: { min: 1500, max: 2500, currency: "INR" },
        unit: "per tooth"
    }
];

export const ROSTER_DB = {
    isOpenNow: (): boolean => {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const day = now.getDay(); // 0 = Sun

        // Clinic Hours: 11:00 AM - 10:15 PM (22:15)
        const totalMinutes = hour * 60 + minute;
        const openTime = 11 * 60;
        const closeTime = 22 * 60 + 15;

        // Assuming open every day including Sunday based on "accepts 24hrs emergency out side clinic hours" 
        // implies standard operating hours are the main ones. 
        // The user didn't specify Sunday hours, so I will apply this generally.
        return totalMinutes >= openTime && totalMinutes <= closeTime;
    }
};
