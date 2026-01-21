
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
        const hour = new Date().getHours();
        const day = new Date().getDay(); // 0 = Sun

        if (day === 0) return hour >= 10 && hour < 14; // Sun: 10am-2pm
        return hour >= 10 && hour < 21; // Mon-Sat: 10am-9pm
    }
};
