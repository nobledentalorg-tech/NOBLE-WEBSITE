
import { GoogleGenerativeAI } from '@google/generative-ai';

// ==============================================================================
// 🦷 TREATMENT PLANNER LOGIC (HARVESTED FROM Y-MAIN)
// ==============================================================================
// Source: external_modules/y-main/src/rag/dental_rag.py

export interface TreatmentOption {
    name: string;
    description: string;
    indications: string[];
    contraindications: string[];
    procedure_steps: string[];
    estimated_cost_range: { min: number; max: number; currency: string };
    recovery_time: string;
    success_rate: number;
}

// Hardcoded Intelligence from the "y-main" Python module
const DENTAL_INTELLIGENCE: Record<string, Record<string, TreatmentOption>> = {
    "Caries": {
        "mild": {
            name: "Fluoride Therapy + Monitoring",
            description: "Non-invasive remineralization therapy with professional fluoride application",
            indications: ["Early enamel caries", "White spot lesions", "Incipient decay"],
            contraindications: ["Cavitated lesions", "Dentin involvement"],
            procedure_steps: ["Professional cleaning", "Apply 5% sodium fluoride varnish", "Prescribe high-fluoride toothpaste"],
            estimated_cost_range: { min: 500, max: 1500, currency: "INR" }, // Converted AED 150-400 -> INR 3000-8000 approx, adjusted for India
            recovery_time: "None - immediate",
            success_rate: 90.0
        },
        "moderate": {
            name: "Composite Resin Restoration",
            description: "Direct tooth-colored filling to restore cavity",
            indications: ["Dentin caries", "Cavitated lesions"],
            contraindications: ["Pulp exposure", "Extensive destruction"],
            procedure_steps: ["Local anesthesia", "Caries removal", "Etch and bond", "Composite placement", "Polishing"],
            estimated_cost_range: { min: 2000, max: 4000, currency: "INR" },
            recovery_time: "1-2 hours numbness",
            success_rate: 92.0
        }
    },
    "Deep Caries": {
        "severe": {
            name: "Stepwise Caries Excavation",
            description: "Conservative two-stage caries removal to preserve pulp vitality",
            indications: ["Deep caries near pulp", "Vital tooth", "No spontaneous pain"],
            contraindications: ["Pulp necrosis", "Spontaneous pain"],
            procedure_steps: ["First visit: Remove peripheral caries", "Place Calcium Hydroxide/MTA", "Temporary filling", "Re-entry in 6-8 weeks"],
            estimated_cost_range: { min: 5000, max: 8000, currency: "INR" },
            recovery_time: "6-8 weeks between visits",
            success_rate: 85.0
        }
    },
    "Root Canal": {
        "treatment": {
            name: "Root Canal Therapy (RCT)",
            description: "Complete endodontic treatment to eliminate infection and preserve tooth",
            indications: ["Irreversible pulpitis", "Necrosis", "Abscess"],
            contraindications: ["Vertical root fracture", "Unrestorable tooth"],
            procedure_steps: ["Access opening", "Working length", "Cleaning & Shaping (Rotary)", "Obturation", "Core build-up"],
            estimated_cost_range: { min: 4500, max: 12000, currency: "INR" },
            recovery_time: "1-3 days soreness",
            success_rate: 92.0
        }
    }
};

export class TreatmentPlanner {

    static getPlan(condition: string, severity: string): TreatmentOption | null {
        // Simple heuristic lookup
        const condParams = DENTAL_INTELLIGENCE[condition];
        if (!condParams) return null;

        return condParams[severity] || null;
    }

    static getAllPlans(): Record<string, Record<string, TreatmentOption>> {
        return DENTAL_INTELLIGENCE;
    }
}
