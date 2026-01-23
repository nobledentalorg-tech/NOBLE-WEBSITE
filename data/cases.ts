export interface TreatmentCase {
    id: string;
    title: string;
    patientProfile: {
        age: string; // e.g. "30s"
        gender: string; // e.g. "Male"
    };
    category: 'Implants' | 'Veneers' | 'Ortho' | 'Endo' | 'Full Mouth';
    difficulty: 'Routine' | 'Intermediate' | 'Complex';
    complaint: string;
    diagnosis: string;
    solution: string;
    duration: string;
    doctorNote?: string;
    visuals: {
        before: string;
        after: string;
        healed?: string;
        xray?: string;
    };
    tags: string[];
}

export const cases: TreatmentCase[] = [
    {
        id: "Case-109",
        title: "Digital Smile Makeover",
        patientProfile: { age: "20s", gender: "Female" },
        category: "Veneers",
        difficulty: "Intermediate",
        complaint: "Patient was unhappy with the gaps (diastema) and yellow shade of her upper front teeth. Wanted a 'Celebrity Smile' but natural.",
        diagnosis: "Generalized spacing with mild fluorosis staining.",
        solution: "6 E.max Lithium Disilicate Veneers (BL2 Shade) with Digital Smile Design planning to close gaps without orthodontics.",
        duration: "10 Days (2 Visits)",
        doctorNote: "I chose minimal-prep veneers here (0.3mm) to preserve her natural enamel while giving her the brightness she wanted.",
        visuals: {
            before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", // Placeholder
            after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"   // Placeholder
        },
        tags: ["Veneers", "SmileDesign", "NoBraces"]
    },
    {
        id: "Case-114",
        title: "Full Mouth Rehab",
        patientProfile: { age: "60s", gender: "Male" },
        category: "Implants",
        difficulty: "Complex",
        complaint: "Unable to chew food comfortably. Wore loose dentures for 5 years and hated them.",
        diagnosis: "Total edentulism with severe mandibular ridge resorption.",
        solution: "All-on-4 Basal Implants. Fixed Hybrid Zirconia Bridges.",
        duration: "5 Days (Immediate Loading)",
        doctorNote: "Basal implants were essential here as the patient had very little bone. We avoided bone grafting entirely.",
        visuals: {
            before: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2052&auto=format&fit=crop",
            after: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1974&auto=format&fit=crop"
        },
        tags: ["Implants", "FullMouth", "NoDentures"]
    },
    {
        id: "Case-201",
        title: "Invisible Alignment",
        patientProfile: { age: "20s", gender: "Female" },
        category: "Ortho",
        difficulty: "Routine",
        complaint: "Crowding in lower front teeth. Didn't want metal braces due to job.",
        diagnosis: "Class I Malocclusion with anterior crowding.",
        solution: "Invisalign Comprehensive Package (24 Aligners).",
        duration: "9 Months",
        doctorNote: "Note the expansion of the arch. We created space without extracting any premolars.",
        visuals: {
            before: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1983&auto=format&fit=crop",
            after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1974&auto=format&fit=crop"
        },
        tags: ["Invisalign", "ClearAligners", "Orthodontics"]
    }
];
