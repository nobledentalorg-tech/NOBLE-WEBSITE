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
    phonetic: string; // "End-o-dont-ist"
    simple_term: string; // "Tooth Nerve Treatment"
    category: string; // "Emergency", "Orthodontics", etc.
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
    },
    {
        slug: "aparna-sarovar",
        name: "Aparna Sarovar",
        landmark: "near Aparna Sarovar Zenith Gate",
        driving_directions: "a quick 2-minute drive via the service road",
        coordinates: { lat: 17.4750, lng: 78.3030 }
    },
    {
        slug: "my-home-avatar",
        name: "My Home Avatar",
        landmark: "near My Home Avatar Entrance",
        driving_directions: "via Nallagandla Main Road in 7 minutes",
        coordinates: { lat: 17.4800, lng: 78.3100 }
    }
];

export const pseoServices: PSEOService[] = [
    {
        slug: "root-canal",
        title: "Emergency Root Canal",
        emergency_hook: "Severe throbbing tooth pain keeping you awake?",
        phonetic: "End-o-dont-ics Root Cah-nal",
        simple_term: "Tooth Nerve Treatment",
        category: "Emergency"
    },
    {
        slug: "dental-implants",
        title: "Dental Implant Surgeon",
        emergency_hook: "Broken tooth or loose denture needing immediate fixing?",
        phonetic: "Im-plant-ol-o-gy",
        simple_term: "New Fixed Teeth",
        category: "Implantology"
    },
    {
        slug: "kids-dentistry",
        title: "Pediatric Dentist",
        emergency_hook: "Child has a toothache or broken tooth from falling?",
        phonetic: "Ped-o-dont-ist",
        simple_term: "Children's Tooth Doctor",
        category: "Pediatrics"
    },
    {
        slug: "emergency-dentistry",
        title: "Urgent Dental Care",
        emergency_hook: "Bleeding gums, knocked-out tooth, or extreme sensitivity?",
        phonetic: "E-mer-gen-cy Den-tist",
        simple_term: "Urgent Tooth Pain Relief",
        category: "Emergency"
    },
    {
        slug: "wisdom-tooth-surgery",
        title: "Wisdom Tooth Removal",
        emergency_hook: "Swollen jaw or inability to open mouth due to pain?",
        phonetic: "Max-ill-o-fac-ial Sur-geon",
        simple_term: "Wisdom Tooth Extraction",
        category: "Emergency"
    }
];
