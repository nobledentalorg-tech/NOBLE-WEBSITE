
export type TreatmentType = "root-canal" | "implant" | "crown" | "invisalign" | "whitening";

export interface PriceTier {
    name: string;
    price: string; // Display price (e.g., "₹4,500 - ₹5,500")
    minPrice: number; // Schema-friendly
    maxPrice: number; // Schema-friendly
    currency: string;
    features: string[];
    bestFor: string;
}

export const PRICING_DATA: Record<TreatmentType, { title: string; tiers: PriceTier[] }> = {
    "root-canal": {
        title: "Root Canal Treatment",
        tiers: [
            {
                name: "Standard RCT",
                price: "₹4,500 - ₹5,500",
                minPrice: 4500,
                maxPrice: 5500,
                currency: "INR",
                features: ["Manual/Rotary Cleaning", "Standard Fill", "X-Ray Included"],
                bestFor: "Simple front teeth"
            },
            {
                name: "Micro-Endodontic RCT",
                price: "₹7,500 - ₹9,000",
                minPrice: 7500,
                maxPrice: 9000,
                currency: "INR",
                features: ["Zeiss Magnification (25x)", "Laser Disinfection", "3D Obturation"],
                bestFor: "Molars & Infected teeth"
            }
        ]
    },
    "implant": {
        title: "Dental Implant",
        tiers: [
            {
                name: "Titanium Standard",
                price: "₹25,000 - ₹30,000",
                minPrice: 25000,
                maxPrice: 30000,
                currency: "INR",
                features: ["Korean/Israeli Implant", "PFM Crown", "10-Year Warranty"],
                bestFor: "Standard bone availability"
            },
            {
                name: "Premium Zirconia",
                price: "₹45,000 - ₹60,000",
                minPrice: 45000,
                maxPrice: 60000,
                currency: "INR",
                features: ["Swiss/German Implant", "Zirconia Crown", "Lifetime Warranty"],
                bestFor: "Esthetic zone & longevity"
            }
        ]
    },
    "crown": {
        title: "Dental Crown",
        tiers: [
            {
                name: "PFM (Metal Ceramic)",
                price: "₹3,500 - ₹5,000",
                minPrice: 3500,
                maxPrice: 5000,
                currency: "INR",
                features: ["Strong Metal Core", "Tooth-colored Layer", "5-Year Warranty"],
                bestFor: "Back teeth (Invisible)"
            },
            {
                name: "Monolith Zirconia",
                price: "₹8,000 - ₹12,000",
                minPrice: 8000,
                maxPrice: 12000,
                currency: "INR",
                features: ["Metal-Free", "Diamond Hardness", "15-Year Warranty"],
                bestFor: "Front teeth & Grinders"
            }
        ]
    },
    "invisalign": {
        title: "Invisalign & Aligners",
        tiers: [
            {
                name: "Basic Aligners",
                price: "₹45,000 - ₹65,000",
                minPrice: 45000,
                maxPrice: 65000,
                currency: "INR",
                features: ["Mild Corrections", "6-9 Months", "Remote Monitoring"],
                bestFor: "Minor crowding"
            },
            {
                name: "Invisalign Comprehensive",
                price: "₹1,50,000 - ₹3,50,000",
                minPrice: 150000,
                maxPrice: 350000,
                currency: "INR",
                features: ["Complex Cases", "Unlimited Aligners", "5-Year Verification"],
                bestFor: "Full mouth correction"
            }
        ]
    },
    "whitening": {
        title: "Teeth Whitening",
        tiers: [
            {
                name: "Office Bleach",
                price: "₹8,000 - ₹12,000",
                minPrice: 8000,
                maxPrice: 12000,
                currency: "INR",
                features: ["1 Hour Session", "Immediate Results", "Gum Protection"],
                bestFor: "Instant brightness"
            },
            {
                name: "Take-Home Kit",
                price: "₹5,000 - ₹7,000",
                minPrice: 5000,
                maxPrice: 7000,
                currency: "INR",
                features: ["Custom Trays", "Gradual Whitening", "14 Day Course"],
                bestFor: "Maintenance"
            }
        ]
    }
};
