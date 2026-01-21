import { NeoBiochemistry } from './NeoBiochemistry';
import { NeoPhysiology } from './NeoPhysiology';
import { DENTAL_PHARMACOPOEIA } from './NeoPharmacology';
import { GENERAL_PATHOLOGY_DB } from './NeoGeneralPathology';

// THE HOLISTIC ENGINE
// This connects specific organ dysfunctions to dental treatment rules.

export interface SystemicLink {
    conditionId: string;
    affectedSystems: {
        pharma?: string; // Drug modifications
        surgery?: string; // Procedural risks
        healing?: string; // Recovery impact
    };
    explanation: string;
}

export class NeoSystemsLinker {
    /**
     * The Master Function: How does X affect everything else?
     */
    static analyzeSystemicImpact(conditionId: string): SystemicLink | null {

        // 1. Liver Disease Analysis
        if (conditionId === 'liver_cirrhosis' || conditionId === 'hepatitis') {
            return {
                conditionId,
                explanation: "Liver is the primary metabolism site for Amide Anesthetics and Clotting Factors.",
                affectedSystems: {
                    pharma: "Reduce Lignocaine dose (Max 2 carpules). Avoid Paracetamol overdose.",
                    surgery: "Check PT/INR. High bleeding risk due to low Factor II, VII, IX, X.",
                    healing: "Delayed due to protein deficiency."
                }
            };
        }

        // 2. Renal (Kidney) Failure Analysis
        if (conditionId === 'renal_failure') {
            return {
                conditionId,
                explanation: "Kidneys excrete active drug metabolites. Dysfunction leads to toxicity.",
                affectedSystems: {
                    pharma: "Avoid NSAIDs (Ibuprofen/Ketorolac) - Nephrotoxic. Adjust Amoxicillin interval.",
                    surgery: "Check for Heparinization (if on Dialysis). Operate on non-dialysis days.",
                    healing: "Risk of anemia (low Erythropoietin) delays tissue repair."
                }
            };
        }

        // 3. Diabetes Analysis (The Connective Tissue Link)
        if (conditionId === 'diabetes_mellitus') {
            return {
                conditionId,
                explanation: "Hyperglycemia alters neutrophil function and collagen homeostasis.",
                affectedSystems: {
                    pharma: "Cover with Antibiotics for surgical procedures.",
                    surgery: "Morning appointments (High Glucose -> Hypoglycemia risk).",
                    healing: "Severe delay. High risk of Dry Socket and spreading Abscess."
                }
            };
        }

        return null;
    }
}
