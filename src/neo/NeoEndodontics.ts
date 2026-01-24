import { LocalizedText } from '../types/neoSchema';

// Data derived from: Cohen's Pathways of the Pulp & AAE Guidelines
// Focus: Pulpal, Periapical, Trauma, Cracks, Resorption, Surgical & Regenerative Endo

export interface EndoDiagnosis {
    id: string;
    condition: LocalizedText;
    severityIndex: number; // 1-10 (Urgency)
    symptoms: string[];
    clinicalSigns: {
        thermal: 'Normal' | 'Lingers (>10s)' | 'No Response' | 'Sharp Transient';
        percussion: boolean; // Tapping test
        palpation: boolean; // Touching gums
        mobility: boolean;
        biteTest?: boolean; // Specific for cracks
    };
    radiographicFeatures: string;
    treatment: LocalizedText;
    prognosis: string;
}

// --- 1. PULPAL DIAGNOSES (Nerve Status) ---
export const PULP_DIAGNOSES: Record<string, EndoDiagnosis> = {
    'reversible_pulpitis': {
        id: 'reversible_pulpitis',
        condition: { en: "Reversible Pulpitis", ta: "மீளக்கூடிய பல் வலி" },
        severityIndex: 3,
        symptoms: ["Sharp pain with cold/sweet", "Pain vanishes immediately when stimulus removed"],
        clinicalSigns: {
            thermal: 'Sharp Transient',
            percussion: false,
            palpation: false,
            mobility: false
        },
        radiographicFeatures: "Normal periapical area. Caries/filling visible.",
        treatment: { en: "Caries Removal & Protective Restoration", ta: "சொத்தையை நீக்கி அடைத்தல்" },
        prognosis: "Excellent (>95%)"
    },
    'symptomatic_irreversible_pulpitis': {
        id: 'symptomatic_irreversible_pulpitis',
        condition: { en: "Symptomatic Irreversible Pulpitis", ta: "தீவிர நரம்பு பாதிப்பு" },
        severityIndex: 8,
        symptoms: ["Lingering pain (>30 sec) after cold", "Spontaneous throbbing", "Pain at night", "Pain medication ineffective"],
        clinicalSigns: {
            thermal: 'Lingers (>10s)',
            percussion: false,
            palpation: false,
            mobility: false
        },
        radiographicFeatures: "Usually normal PDL space (Acute phase).",
        treatment: { en: "Root Canal Treatment (RCT)", ta: "வேர் சிகிச்சை (RCT)" },
        prognosis: "Good (>90%)"
    },
    'asymptomatic_irreversible_pulpitis': {
        id: 'asymptomatic_irreversible_pulpitis',
        condition: { en: "Asymptomatic Irreversible Pulpitis", ta: "அறிகுறியற்ற நரம்பு பாதிப்பு" },
        severityIndex: 5,
        symptoms: ["No pain", "Patient unaware until deep caries found"],
        clinicalSigns: {
            thermal: 'Normal', // Sometimes delayed
            percussion: false,
            palpation: false,
            mobility: false
        },
        radiographicFeatures: "Deep caries contacting pulp.",
        treatment: { en: "Root Canal Treatment (RCT)", ta: "வேர் சிகிச்சை (RCT)" },
        prognosis: "Good (>90%)"
    },
    'pulp_necrosis': {
        id: 'pulp_necrosis',
        condition: { en: "Pulp Necrosis (Dead Tooth)", ta: "நரம்பு இறப்பு" },
        severityIndex: 6,
        symptoms: ["Tooth discoloration (Grey/Black)", "History of trauma", "No sensation to cold"],
        clinicalSigns: {
            thermal: 'No Response',
            percussion: true,
            palpation: false,
            mobility: false
        },
        radiographicFeatures: "Widened PDL or Periapical Lesion.",
        treatment: { en: "RCT or Extraction", ta: "வேர் சிகிச்சை அல்லது பல் நீக்கம்" },
        prognosis: "Variable"
    }
};

// --- 2. PERIAPICAL DIAGNOSES (Root Tip Status) ---
export const APICAL_DIAGNOSES: Record<string, EndoDiagnosis> = {
    'symptomatic_apical_periodontitis': {
        id: 'symptomatic_apical_periodontitis',
        condition: { en: "Symptomatic Apical Periodontitis (SAP)", ta: "வேர் நுனி வீக்கம்" },
        severityIndex: 7,
        symptoms: ["Pain on biting/chewing", "Tender to touch", "Feeling of 'high' tooth"],
        clinicalSigns: {
            thermal: 'No Response',
            percussion: true, // +++ Hallmark Sign
            palpation: true,
            mobility: false
        },
        radiographicFeatures: "Widened PDL space visible.",
        treatment: { en: "RCT + Occlusal Reduction", ta: "வேர் சிகிச்சை மற்றும் பல்லை குறைத்தல்" },
        prognosis: "Good"
    },
    'acute_apical_abscess': {
        id: 'acute_apical_abscess',
        condition: { en: "Acute Apical Abscess", ta: "பல் சீழ் கட்டி" },
        severityIndex: 10, // EMERGENCY
        symptoms: ["Severe swelling", "Pus discharge", "Fever", "Lymph node swelling"],
        clinicalSigns: {
            thermal: 'No Response',
            percussion: true,
            palpation: true,
            mobility: true // Tooth may feel loose
        },
        radiographicFeatures: "Rapid onset - X-ray may look normal or show wide PDL.",
        treatment: { en: "Incision & Drainage + RCT + Antibiotics", ta: "சீழ் வடிகட்டுதல் மற்றும் வேர் சிகிச்சை" },
        prognosis: "Fair (Requires immediate care)"
    },
    'chronic_apical_abscess': {
        id: 'chronic_apical_abscess',
        condition: { en: "Chronic Apical Abscess", ta: "நாள்பட்ட சீழ்" },
        severityIndex: 4,
        symptoms: ["Pus draining sinus tract (Gum boil)", "Intermittent bad taste", "Usually painless"],
        clinicalSigns: {
            thermal: 'No Response',
            percussion: false,
            palpation: false,
            mobility: false
        },
        radiographicFeatures: "Distinct radiolucency (Black spot at root tip).",
        treatment: { en: "Root Canal Treatment (RCT)", ta: "வேர் சிகிச்சை" },
        prognosis: "Good"
    }
};

// --- 3. CRACKED TOOTH SYNDROME (The Tricky One) ---
export const CRACK_DIAGNOSES: Record<string, EndoDiagnosis> = {
    'cracked_tooth': {
        id: 'cracked_tooth',
        condition: { en: "Cracked Tooth Syndrome", ta: "பல் விரிசல்" },
        severityIndex: 6,
        symptoms: ["Sharp pain on chewing", "Pain on release of bite", "Sensitivity to cold"],
        clinicalSigns: {
            thermal: 'Sharp Transient',
            percussion: false,
            biteTest: true, // +++ Hallmark Sign (Tooth Slooth)
            palpation: false,
            mobility: false
        },
        radiographicFeatures: "Often invisible on X-ray. CBCT may be needed.",
        treatment: { en: "Orthodontic Band / Crown / RCT if pulp involved", ta: "கேப் (Crown) அல்லது வேர் சிகிச்சை" },
        prognosis: "Guarded (Depends on depth of crack)"
    },
    'vertical_root_fracture': {
        id: 'vertical_root_fracture',
        condition: { en: "Vertical Root Fracture", ta: "வேர் விரிசல்" },
        severityIndex: 9,
        symptoms: ["Mild pain", "Deep pocket in one specific area", "Abscess looks like 'J-Shape' on X-ray"],
        clinicalSigns: {
            thermal: 'No Response', // Usually in RCT treated teeth
            percussion: true,
            palpation: true,
            mobility: true
        },
        radiographicFeatures: "J-Shaped radiolucency. Halo effect.",
        treatment: { en: "Extraction (Hopeless prognosis)", ta: "பல் அகற்றுதல்" },
        prognosis: "Hopeless"
    }
};

// --- 4. RESORPTION (Body eating the tooth) ---
export const RESORPTION_DB = {
    'internal_resorption': {
        id: 'internal_resorption',
        name: "Internal Resorption (Pink Tooth)",
        cause: "Trauma or Chronic Pulpitis",
        xray: "Oval enlargement of canal space (Ballooning)",
        treatment: "Immediate RCT to stop progression"
    },
    'external_cervical_resorption': {
        id: 'external_cervical_resorption',
        name: "External Cervical Resorption (ECR)",
        cause: "Trauma, Bleaching, or Orthodontics",
        xray: "Moth-eaten appearance near gum line",
        treatment: "Surgical repair (Geristore) or Extraction"
    }
};

// --- 5. TRAUMA PROTOCOL (Golden Hour) ---
export const TRAUMA_PROTOCOL = {
    'avulsion': {
        id: 'avulsion',
        name: "Avulsion (Knocked Out Tooth)",
        goldenHour: "< 60 Minutes",
        immediateAction: {
            en: "1. Pick up by crown (white part).\n2. Rinse gently with water (do not scrub).\n3. Replant immediately if possible OR store in Milk/Saliva.",
            ta: "1. பல்லை பாலில் போடவும்.\n2. உடனே மருத்துவரிடம் செல்லவும்."
        },
        clinicalNote: "Dry time > 60 mins significantly increases risk of ankylosis."
    },
    'intrusion': {
        id: 'intrusion',
        name: "Intrusion (Pushed In)",
        action: "Allow spontaneous re-eruption (immature root) or Surgical/Ortho repositioning.",
        risk: "High risk of Pulp Necrosis (96%). RCT usually required."
    },
    'luxation': {
        id: 'luxation',
        name: "Luxation (Displaced Tooth)",
        types: ["Intrusion (Pushed in)", "Extrusion (Pulled out)", "Lateral"],
        action: "Reposition + Flexible Splint for 2 weeks.",
        monitor: "Pulp vitality testing for 1 year."
    },
    'ellis_fracture': {
        id: 'ellis_fracture',
        name: "Crown Fracture (Broken Tooth)",
        classification: {
            class_1: "Enamel only (Smooth edges)",
            class_2: "Enamel + Dentin (Seal dentin)",
            class_3: "Enamel + Dentin + Pulp (Root Canal/Capping needed)"
        }
    }
};

// --- 6. ENDO EMERGENCIES (Flare-ups) ---
export const ENDO_EMERGENCIES = {
    'hypochlorite_accident': {
        name: "Sodium Hypochlorite Accident",
        signs: "Sudden severe pain, rapid swelling, bruising (ecchymosis).",
        management: "Stop irrigation. Anesthesia block. Cold packs for 24h, then warm. Antibiotics + Analgesics."
    },
    'flare_up': {
        name: "Inter-appointment Flare-up",
        signs: "Severe pain/swelling after starting RCT.",
        management: "Re-open access. Check working length. Intracanal medicament (CaOH). Occlusal relief."
    }
};

// --- 7. VITAL PULP THERAPY (Saving the Nerve) ---
export const VITAL_PULP_THERAPY = {
    'direct_pulp_capping': {
        id: 'direct_pulp_capping',
        condition: { en: "Pinpoint Pulp Exposure", ta: "சிறிய நரம்பு திறப்பு" },
        indication: "Mechanical exposure < 1mm in healthy pulp.",
        material: "MTA (Mineral Trioxide Aggregate) or Bioceramics.",
        successRate: "80-90% if seal is good.",
        procedure: "Stop bleeding -> Place MTA -> GIC/Composite Seal."
    },
    'partial_pulpotomy': {
        id: 'partial_pulpotomy',
        condition: { en: "Cvek Pulpotomy (Trauma)", ta: "பகுதி நரம்பு நீக்கம்" },
        indication: "Traumatic fracture exposing pulp < 24 hours.",
        procedure: "Remove top 2mm of inflamed pulp -> Place MTA.",
        advantage: "Maintains root development (Apexogenesis)."
    }
};

// --- 8. REGENERATIVE ENDODONTICS (Stem Cells) ---
export const REGENERATIVE_ENDO = {
    'revascularization': {
        id: 'revascularization',
        condition: { en: "Necrotic Immature Tooth (Open Apex)", ta: "வேர் வளர்ச்சி அடையாத பல்" },
        mechanism: "Uses Stem Cells of Apical Papilla (SCAP) to regrow tissue.",
        protocol: {
            step1: "Disinfection with Triple Antibiotic Paste (TAP).",
            step2: "Induce bleeding into canal (Scaffold).",
            step3: "Seal with MTA.",
        },
        outcome: "Root thickening and lengthening continued."
    }
};

// --- 9. SURGICAL ENDODONTICS (When RCT Fails) ---
export const SURGICAL_ENDO = {
    'apicoectomy': {
        id: 'apicoectomy',
        name: { en: "Apicoectomy (Root End Surgery)", ta: "வேர் நுனி அறுவை சிகிச்சை" },
        indication: "Persistent infection/cyst after good RCT. Broken instrument at tip.",
        procedure: "Reflect gum -> Cut root tip (3mm) -> Retro-fill with MTA.",
        contraindication: "Short root length, anatomical danger zone (nerve/sinus)."
    }
};

// --- 10. PROCEDURAL ACCIDENTS (Mishap Management) ---
export const ENDO_MISHAPS = {
    'calcified_canals': {
        factor: "Calcified Canals",
        impact: "High",
        reason: "Nerve canals are blocked by calcium stones. Requires microscope/ultrasonics.",
        costImplication: "Premium"
    },
    'curved_roots': {
        factor: "Severe Root Curvature (>30 degrees)",
        impact: "High",
        reason: "Risk of file separation. Requires flexible NiTi files.",
        costImplication: "Premium"
    },
    'mb2_canal': {
        factor: "MB2 Canal Presence (Upper Molars)",
        impact: "Moderate",
        reason: "Hidden 4th canal found in 90% of first molars. Missed MB2 is #1 cause of failure.",
        costImplication: "Standard/Premium"
    },
    'perforation': {
        id: 'perforation',
        name: "Root/Floor Perforation",
        risk: "Infection of PDL/Bone.",
        management: "Immediate repair with MTA/Biodentine. Prognosis depends on size and location (Furcal is worst)."
    },
    'separated_instrument': {
        id: 'separated_instrument',
        name: "Broken File in Canal",
        management: "1. Bypass (leave it & clean around). 2. Retrieval (Ultrasonics). 3. Surgery (if at tip)."
    },
    'ledge_formation': {
        id: 'ledge_formation',
        name: "Ledge (Blocked Canal)",
        cause: "Using large straight files in curved canals.",
        prevention: "Pre-curving files, using NiTi flexible files."
    },
    'retreatment': {
        factor: "Re-Treatment",
        impact: "Very High",
        reason: "Removing old cement/posts is complex and risky.",
        costImplication: "Premium Plus"
    }
};

// --- 11. RESTORATION (The Ferrule Effect) ---
export const POST_ENDO_RESTORATION = {
    'ferrule_effect': {
        concept: "Ferrule Effect",
        definition: "Minimum 1.5-2mm of healthy tooth structure above gum line to hold the crown.",
        significance: "Without ferrule, post & core will fail (Vertical Fracture).",
        decision: "If < 1.5mm ferrule -> Crown Lengthening or Extraction needed."
    },
    'fiber_post': {
        type: "Fiber Reinforced Post",
        advantage: "Modulus of elasticity matches dentin (flexes with tooth). Less risk of root fracture compared to metal posts."
    }
};

// --- HELPER CLASS ---
export class EndoHelper {

    // Diagnostic Aid for Users
    static triagePain(symptoms: string[]): string {
        const s = symptoms.join(' ').toLowerCase();

        // Check Emergency first
        if (s.includes('swelling') && s.includes('eye')) return "⚠️ DANGER: Spreading Infection. ER Visit Needed.";
        if (s.includes('swelling') || s.includes('fever')) return APICAL_DIAGNOSES['acute_apical_abscess'].condition.en;

        // Biting vs Pulpal
        if (s.includes('biting') || s.includes('chewing')) {
            if (s.includes('release')) return CRACK_DIAGNOSES['cracked_tooth'].condition.en;
            return APICAL_DIAGNOSES['symptomatic_apical_periodontitis'].condition.en;
        }

        if (s.includes('night') || s.includes('linger')) return PULP_DIAGNOSES['symptomatic_irreversible_pulpitis'].condition.en;
        if (s.includes('cold') && s.includes('sharp')) return PULP_DIAGNOSES['reversible_pulpitis'].condition.en;

        return "Unspecified Pulp Condition";
    }

    // Explains why certain RCTs cost more
    static explainComplexity(toothId: string): string {
        // Upper Molars (16, 17, 26, 27) usually have MB2
        if (['16', '17', '26', '27'].includes(toothId)) {
            return `Note: This tooth often has a hidden 'MB2' canal found in 90% of cases. Missing it is the #1 cause of failure, which is why specialist RCT is recommended.`;
        }
        return "";
    }

    // Explains why re-treatment is expensive
    static explainRetreatment(): string {
        return "Retreatment involves removing old filling material (Gutta Percha), locating missed canals, and disinfecting complex bacteria (E. Faecalis). This requires more time and advanced ultrasonics.";
    }

    // Decides between RCT vs Regen for kids
    static checkPediatricProtocol(age: number, diagnosis: string): string {
        if (age < 14 && diagnosis.includes('Necrosis')) {
            return "💡 **Recommendation:** Consider **Regenerative Endodontics** (Revascularization) instead of standard RCT to allow root maturation.";
        }
        return "Standard RCT / Apexification.";
    }

    // Checks restorability before starting RCT
    static checkRestorability(ferruleMM: number): string {
        if (ferruleMM < 1.5) {
            return "⚠️ **POOR PROGNOSIS:** Insufficient Ferrule (<1.5mm). High risk of fracture. Consider Crown Lengthening or Extraction.";
        }
        return "✅ Restorable. Proceed with Post & Core.";
    }
}
