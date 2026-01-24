// THE HOLISTIC ENGINE
// Connects Organ Dysfunction -> Dental Safety Rules

export interface SystemicLink {
    conditionId: string;
    riskLevel: 'Moderate' | 'High' | 'Critical';
    affectedSystems: {
        pharma: string;   // "Don't prescribe X"
        surgery: string;  // "Do Y during procedure"
        healing: string;  // "Expect Z afterwards"
    };
    explanation: string; // The "Why" (Physiology)
}

export class NeoSystemsLinker {

    /**
     * ANALYZE IMPACT: The Master Linker Function
     */
    static analyzeSystemicImpact(conditionId: string): SystemicLink | null {

        // ==========================================
        // 1. CARDIOVASCULAR (The #1 Emergency Risk)
        // ==========================================

        // HYPERTENSION (High BP)
        if (conditionId === 'hypertension') {
            return {
                conditionId,
                riskLevel: 'Moderate',
                explanation: "High pressure increases bleeding risk and stroke potential during stress.",
                affectedSystems: {
                    pharma: "Limit Epinephrine to 0.04mg (Max 2 carpules of 1:100,000 LA). Avoid retraction cords with adrenaline.",
                    surgery: "Morning appointments (Cortisol spike is managed). Monitor BP pre-op. Defer if >160/100.",
                    healing: "Secondary hemorrhage risk if BP spikes post-op."
                }
            };
        }

        // MYOCARDIAL INFARCTION (Heart Attack History)
        if (conditionId === 'myocardial_infarction') {
            return {
                conditionId,
                riskLevel: 'Critical',
                explanation: "Heart muscle is recovering. Electrical stability is low.",
                affectedSystems: {
                    pharma: "Avoid Epinephrine if MI was < 6 months ago. Absolute contraindication for elective care.",
                    surgery: "Defer all elective treatment for 6 months post-MI. Keep Nitroglycerin spray ready.",
                    healing: "Patients usually on dual anti-platelets (Aspirin + Clopidogrel) -> Bleeding risk."
                }
            };
        }

        // PROSTHETIC HEART VALVES (Endocarditis Risk)
        if (conditionId === 'prosthetic_valve' || conditionId === 'rheumatic_heart') {
            return {
                conditionId,
                riskLevel: 'High',
                explanation: "Bacteria from mouth (Bacteremia) can travel through blood to the heart valves causing Infective Endocarditis.",
                affectedSystems: {
                    pharma: "ANTIBIOTIC PROPHYLAXIS MANDATORY: Amoxicillin 2g (or Clindamycin 600mg) 1 hour before procedure.",
                    surgery: "Minimize bloody procedures. Chlorhexidine rinse pre-op.",
                    healing: "Watch for fever post-op (Endocarditis sign)."
                }
            };
        }


        // ==========================================
        // 2. ENDOCRINE (Hormones)
        // ==========================================

        // DIABETES (The Silent Destroyer)
        if (conditionId === 'diabetes_mellitus') {
            return {
                conditionId,
                riskLevel: 'High',
                explanation: "Hyperglycemia impairs White Blood Cell (Neutrophil) function, destroying collagen repair.",
                affectedSystems: {
                    pharma: "Antibiotic cover often needed for surgical extractions.",
                    surgery: "Schedule Morning appointments (after breakfast) to prevent Hypoglycemia.",
                    healing: "High risk of Dry Socket and spreading Abscess. Delayed healing."
                }
            };
        }

        // THYROID (Hyperthyroidism)
        if (conditionId === 'hyperthyroidism') {
            return {
                conditionId,
                riskLevel: 'High',
                explanation: "Excess thyroid hormone sensitizes the heart to adrenaline.",
                affectedSystems: {
                    pharma: "AVOID EPINEPHRINE completely if uncontrolled. Risk of 'Thyroid Storm' (Life threatening).",
                    surgery: "Stress reduction protocol essential.",
                    healing: "Accelerated bone turnover (Osteoporosis risk in jaws)."
                }
            };
        }

        // ==========================================
        // 3. RESPIRATORY & NEUROLOGICAL
        // ==========================================

        // ASTHMA
        if (conditionId === 'asthma') {
            return {
                conditionId,
                riskLevel: 'Moderate',
                explanation: "Airways are hyper-reactive. Stress or drugs can trigger bronchospasm.",
                affectedSystems: {
                    pharma: "AVOID NSAIDs (Ibuprofen/Aspirin) - can trigger 'Aspirin-induced Asthma'. Use Paracetamol.",
                    surgery: "Avoid Sulphite-containing Local Anesthetics if allergic. Keep Inhaler on tray.",
                    healing: "Mouth breathing causes dry mouth -> Higher caries risk."
                }
            };
        }

        // EPILEPSY (Seizures)
        if (conditionId === 'epilepsy') {
            return {
                conditionId,
                riskLevel: 'Moderate',
                explanation: "Stress or bright lights can trigger a seizure in the chair.",
                affectedSystems: {
                    pharma: "Check for Gingival Hyperplasia (Side effect of Phenytoin).",
                    surgery: "Use mouth prop (bite block) to prevent biting tongue during seizure. Dark glasses for light sensitivity.",
                    healing: "Risk of tongue injury."
                }
            };
        }

        // ==========================================
        // 4. ORGAN FAILURE (The Filters)
        // ==========================================

        // LIVER CIRRHOSIS
        if (conditionId === 'liver_disease') {
            return {
                conditionId,
                riskLevel: 'High',
                explanation: "Liver processes drugs (Amides) and makes Clotting Factors.",
                affectedSystems: {
                    pharma: "Reduce Lignocaine (Max 2 carpules). Avoid Paracetamol overdose/NSAIDs.",
                    surgery: "Check PT/INR. High bleeding risk (Low Factors II, VII, IX, X).",
                    healing: "Delayed due to hypoproteinemia."
                }
            };
        }

        // RENAL FAILURE (Kidneys)
        if (conditionId === 'renal_failure') {
            return {
                conditionId,
                riskLevel: 'High',
                explanation: "Kidneys excrete drugs. Failure leads to toxic buildup.",
                affectedSystems: {
                    pharma: "AVOID NSAIDs/Aminoglycosides (Nephrotoxic). Adjust antibiotic intervals.",
                    surgery: "Do not treat on Dialysis Day (Heparin in blood). Treat on the day AFTER dialysis.",
                    healing: "Anemia is common (Low Erythropoietin) -> Poor tissue oxygenation."
                }
            };
        }

        return null;
    }
}
