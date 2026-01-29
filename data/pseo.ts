export interface PSEOLocality {
    slug: string;
    name: string; // Display Name (e.g., "Tellapur")
    landmark: string; // "Near Tellapur Circle"
    driving_directions: string; // "5 mins from Urja Stadium"
    coordinates: { lat: number; lng: number };
}

export interface PSEOService {
    slug: string; // Matches existing /treatments slugs
    title: string; // "Emergency Root Canal"
    emergency_hook: string; // "Throbbing tooth pain?"
}

export const pseoLocalities: PSEOLocality[] = [
    {
        slug: "tellapur",
        name: "Tellapur",
        landmark: "near Urja Stadium / Alien Space Station",
        driving_directions: "a quick 7-minute drive via the Nallagandla-Tellapur road",
        coordinates: { lat: 17.4618, lng: 78.2885 }
    },
    {
        slug: "gachibowli",
        name: "Gachibowli",
        landmark: "near DLF Cyber City / AIG Hospital",
        driving_directions: "accessible via the ORR Service Road (Exit 19)",
        coordinates: { lat: 17.4401, lng: 78.3489 }
    },
    {
        slug: "serilingampally",
        name: "Serilingampally",
        landmark: "near Lingampally Station",
        driving_directions: "located directly on the main road towards BHEL",
        coordinates: { lat: 17.4838, lng: 78.3134 }
    },
    {
        slug: "kondapur",
        name: "Kondapur",
        landmark: "near Sarat City Capital",
        driving_directions: "straight drive past Botanical Garden",
        coordinates: { lat: 17.4622, lng: 78.3569 }
    },
    {
        slug: "chandanagar",
        name: "Chandanagar",
        landmark: "near GSM Mall",
        driving_directions: "just 10 minutes from Gangaram Circle",
        coordinates: { lat: 17.4933, lng: 78.3276 }
    }
];

export const pseoServices: PSEOService[] = [
    {
        slug: "root-canal",
        title: "Emergency Root Canal",
        emergency_hook: "Severe throbbing tooth pain keeping you awake?"
    },
    {
        slug: "dental-implants",
        title: "Dental Implant Surgeon",
        emergency_hook: "Broken tooth or loose denture needing immediate fixing?"
    },
    {
        slug: "kids-dentistry",
        title: "Pediatric Dentist",
        emergency_hook: "Child has a toothache or broken tooth from falling?"
    },
    {
        slug: "emergency-dentistry",
        title: "Urgent Dental Care",
        emergency_hook: "Bleeding gums, knocked-out tooth, or extreme sensitivity?"
    },
    {
        slug: "wisdom-tooth-surgery",
        title: "Wisdom Tooth Removal",
        emergency_hook: "Swollen jaw or inability to open mouth due to pain?"
    }
];
