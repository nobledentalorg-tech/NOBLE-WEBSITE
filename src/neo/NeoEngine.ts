
import { ClinicalNode, NeoResponse } from '../types/neoSchema';
import { SafetyFilter } from './SafetyFilter';
import { IntentRouter } from './IntentRouter';
import { ROSTER_DB, TARIFF_DB } from '../data/business/tariff'; // Note: TARIFF_DB is in tariff.ts
import { treatmentsData } from '../../data/treatments';
import { NEO_KNOWLEDGE_GRAPH } from './NeoKnowledgeGraph';
import { NEO_CONFIG } from '../config/settings';
import { ConfidenceCalculator } from './ConfidenceCalculator';

import { RiskAssessor } from './RiskAssessor';
import { normalizeClinicalInput } from './NeoSynonyms';
import { AuthorityHelper } from './NeoAuthority';
import { NeoTime } from './NeoTime';

// Specialist Module Imports
import { RADIOLOGY_DB, RadiologyHelper } from './NeoRadiology';
import { PEDO_CLINICAL_DB } from './NeoPediatrics';
import { PUBLIC_HEALTH_DB, PublicHealthHelper } from './NeoPublicHealth';
import { ENDO_DB, ORTHO_DB, SURGERY_DB, SpecialtyHelper } from './NeoSpecialties';
import { ORAL_MEDICINE_DB } from './NeoOralMedicine';
import { PROSTHO_DB, ProsthoHelper } from './NeoProsthodontics';
import { NeoSystemsLinker } from './NeoSystemsLinker';
import { NeoLearningSystem } from './NeoLearning';

export class NeoEngine {

    static processInput(input: string, currentStateId: string = 'root', historyLength: number = 0): NeoResponse {
        console.log(`[NeoEngine] Processing: "${input}" | CurrentState: ${currentStateId}`);

        // GLOBAL: NORMALIZE INPUT (Tanglish/Hinglish -> Clinical)
        const cleanInput = normalizeClinicalInput(input);

        // LASER 1: SAFETY
        const safetyBlock = SafetyFilter.check(cleanInput);
        if (safetyBlock) return this.wrap(safetyBlock);

        // LAYER 2: INTENT
        const intent = IntentRouter.classify(input);

        // LAYER 3: ROUTING
        if (intent === 'cost') return this.wrap(this.handleCost(cleanInput));
        if (intent === 'availability') return this.wrap(this.handleAvailability());
        if (intent === 'care') return this.wrap(this.handleCare(cleanInput));
        if (intent === 'greeting') return this.wrap(NEO_KNOWLEDGE_GRAPH['root']);

        // 🚀 NEW: DIRECT CLINIC/DOCTOR ROUTING (Anti-Fallback logic)
        if (cleanInput.includes('lead_doctor')) return this.wrap(NEO_KNOWLEDGE_GRAPH['doctor_info']);
        if (cleanInput.includes('clinic_info')) return this.wrap(NEO_KNOWLEDGE_GRAPH['clinic_meta']);

        // --- NEW: SPECIALIST KNOWLEDGE LAYER ---
        const specialistNode = this.findSpecialistKnowledge(cleanInput);
        if (specialistNode) return this.wrap(specialistNode, cleanInput);

        // LAYER 4: CLINICAL STATE MACHINE
        let resultNode: ClinicalNode | null = null;
        // ... (rest of processInput) ...
        // [Existing shortcut and graph traversal code]
        const shortcut = this.checkShortcuts(cleanInput);
        if (shortcut) {
            resultNode = shortcut;
        } else {
            const currentNode = NEO_KNOWLEDGE_GRAPH[currentStateId] || NEO_KNOWLEDGE_GRAPH['root'];
            if (currentNode.options) {
                const bestMatch = this.findBestMatch(cleanInput, currentNode.options);
                if (bestMatch) {
                    const nextNode = NEO_KNOWLEDGE_GRAPH[bestMatch.nextId];
                    if (nextNode.type === 'question' && nextNode.options) {
                        const deepMatch = this.findBestMatch(cleanInput, nextNode.options);
                        if (deepMatch) {
                            resultNode = NEO_KNOWLEDGE_GRAPH[deepMatch.nextId];
                        } else {
                            resultNode = nextNode;
                        }
                    } else {
                        resultNode = nextNode;
                    }
                }
            }
        }

        if (!resultNode) {
            resultNode = {
                id: 'fallback',
                type: 'info',
                text: {
                    en: "I'm listening. Could you tell me more about your symptoms?",
                    ta: "தயவுசெய்து உங்கள் அறிகுறிகளை பற்றி மேலும் சொல்லுங்கள்."
                }
            };
            // 4. Learning: Track unknown terms for Dr. Dhivakaran
            NeoLearningSystem.trackUnknownTerms(cleanInput, [cleanInput]); // Simplistic tracking
        }

        let confidenceScore = 100;
        let urgency: 'low' | 'medium' | 'high' | 'emergency' = 'low';

        if (resultNode.type === 'assessment' && resultNode.possibilities) {
            confidenceScore = ConfidenceCalculator.calculate(resultNode, historyLength, [cleanInput]);
            resultNode.possibilities = resultNode.possibilities.map(p => ({
                ...p,
                likelihood: confidenceScore > 80 ? 'High' : confidenceScore > 50 ? 'Moderate' : 'Low',
                title: `${p.title} (${confidenceScore}% Match)`
            }));
        }

        urgency = RiskAssessor.assess(resultNode, [cleanInput]);
        resultNode.urgencyLevel = urgency;

        // --- 5. Systemic Safety Linker (The "fatal error" prevention) ---
        // Checks if user input mentions any medical condition (BP, Diabetes, etc.)
        const conditions = ['hypertension', 'diabetes_mellitus', 'asthma', 'epilepsy', 'liver_disease', 'renal_failure', 'myocardial_infarction'];
        for (const condId of conditions) {
            if (cleanInput.includes(condId.replace('_', ' '))) {
                const link = NeoSystemsLinker.analyzeSystemicImpact(condId);
                if (link) {
                    resultNode.text.en += `\n\n⚠️ **MEDICAL ALERT (${link.conditionId.toUpperCase()}):** ${link.explanation}\n* **Pharma**: ${link.affectedSystems.pharma}\n* **Surgery**: ${link.affectedSystems.surgery}`;
                }
            }
        }

        const citation = AuthorityHelper.getCitation(cleanInput.toLowerCase());
        if (citation) {
            resultNode.text.en += `\n\n> 🏛️ *${citation}*`;
        }

        return {
            node: resultNode,
            confidenceScore,
            urgency
        };
    }

    private static wrap(node: ClinicalNode, input?: string): NeoResponse {
        // Final polish for specialist responses
        if (input && node.id.includes('specialist')) {
            const citation = AuthorityHelper.getCitation(input);
            if (citation && !node.text.en.includes(citation)) {
                node.text.en += `\n\n> 🏛️ *${citation}*`;
            }
        }
        return {
            node: node,
            confidenceScore: 100,
            urgency: node.urgencyLevel || 'low'
        };
    }

    /**
     * Master Lookup across all Clinical Specialist DBs
     */
    private static findSpecialistKnowledge(input: string): ClinicalNode | null {
        const lower = input.toLowerCase();

        // 1. Radiology Check
        for (const [id, feature] of Object.entries(RADIOLOGY_DB)) {
            if (lower.includes(id.replace('_', ' ')) || lower.includes(feature.name.en.toLowerCase())) {
                return {
                    id: `specialist_radio_${id}`,
                    type: 'info',
                    text: {
                        en: `**Radiology Interpretation**: ${feature.description.en}\n\n*Clinical Note*: ${feature.clinicalSignificance}`,
                        ta: feature.description.ta
                    },
                    urgencyLevel: 'low'
                };
            }
        }

        // 2. Specialty Triage (Endo/Ortho/Surgery)
        const specialties = { ...ENDO_DB, ...ORTHO_DB, ...SURGERY_DB };
        for (const [id, cond] of Object.entries(specialties)) {
            if (lower.includes(id.replace('_', ' ')) || lower.includes(cond.diagnosis.toLowerCase())) {
                const triage = SpecialtyHelper.getTriageLevel(cond.severityIndex);
                return {
                    id: `specialist_triage_${id}`,
                    type: 'assessment',
                    text: {
                        en: `### ${cond.diagnosis}\n${cond.description.en}\n\n**Symptoms**: ${cond.symptoms?.en || 'N/A'}\n\n**Triage Status**: ${triage}`,
                        ta: cond.description.ta
                    },
                    possibilities: [{
                        title: cond.diagnosis,
                        description: cond.treatment.en,
                        likelihood: 'High',
                        action: "View Treatment",
                        relatedSlug: cond.specialty === 'Endo' ? 'root-canal' : cond.specialty === 'Ortho' ? 'braces-orthodontics' : 'wisdom-teeth-removal'
                    }],
                    urgencyLevel: cond.severityIndex >= 8 ? 'emergency' : cond.severityIndex >= 5 ? 'high' : 'low'
                };
            }
        }

        // 3. Radiology Safety / Modality Checks
        if (lower.includes('x-ray') || lower.includes('radiation') || lower.includes('scanner')) {
            let modality = "IOPA";
            if (lower.includes('implant')) modality = "Implant";
            if (lower.includes('wisdom') || lower.includes('full')) modality = "WisdomTooth";

            const advice = RadiologyHelper.chooseModality(modality as any);
            const safety = RadiologyHelper.explainRadiationSafety(true, 'en');

            return {
                id: 'specialist_radio_advice',
                type: 'info',
                text: {
                    en: `${advice}\n\n${safety}`,
                    ta: "எக்ஸ்-ரே மிகவும் பாதுகாப்பானது."
                }
            };
        }

        // 4. Lab Diagnostics
        if (lower.includes('blood test') || lower.includes('cbc') || lower.includes('sugar')) {
            return {
                id: 'specialist_lab',
                type: 'info',
                text: {
                    en: "I can help interpret your **CBC**, **HbA1c**, or **Clotting Profile**. Please provide your values (e.g., 'HbA1c is 8').",
                    ta: "உங்கள் ரத்த பரிசோதனை முடிவுகளை நான் சரிபார்க்க முடியும்."
                }
            };
        }

        // 5. Pediatrics (Children)
        for (const [id, protocol] of Object.entries(PEDO_CLINICAL_DB)) {
            if (lower.includes(id.replace('_', ' ')) || lower.includes('child') || lower.includes('baby')) {
                return {
                    id: `specialist_pedo_${id}`,
                    type: 'info',
                    text: {
                        en: `### Child Care: ${protocol.name.en}\n${protocol.indication.en}\n\n**Parent Advice**: ${protocol.parentAdvice.en}`,
                        ta: protocol.indication.ta
                    },
                    urgencyLevel: 'low'
                };
            }
        }

        // 6. Oral Medicine (Pathology/Lesions)
        for (const [id, lesion] of Object.entries(ORAL_MEDICINE_DB)) {
            if (lower.includes(id.replace('_', ' ')) || lower.includes(lesion.name.en.toLowerCase())) {
                const triage = `Risk Level: ${lesion.riskLevel}`;
                return {
                    id: `specialist_patho_${id}`,
                    type: 'assessment',
                    text: {
                        en: `### ${lesion.name.en}\n${lesion.clinicalFeatures.appearance.en}\n\n**Management**: ${lesion.management.en}\n\n**Triage**: ${triage}`,
                        ta: lesion.clinicalFeatures.appearance.ta
                    },
                    possibilities: [{
                        title: lesion.name.en,
                        description: "Biopsy or specialist consultation may be required.",
                        likelihood: 'High',
                        action: "Specialist Consult",
                        relatedSlug: "scan-diagnostics"
                    }],
                    urgencyLevel: lesion.riskLevel === 'Emergency' ? 'emergency' : 'medium'
                };
            }
        }

        // 7. Prosthodontics (Denture/Crown materials)
        for (const [id, material] of Object.entries(PROSTHO_DB)) {
            if (lower.includes(id.replace('_', ' ')) || lower.includes(material.name.en.toLowerCase())) {
                return {
                    id: `specialist_prostho_${id}`,
                    type: 'info',
                    text: {
                        en: `### ${material.name.en}\n${material.indication.en}\n\n**Patient Info**: ${material.patientPitch.en}\n\n**Lifespan**: ${material.lifespan}`,
                        ta: material.indication.ta
                    },
                    urgencyLevel: 'low'
                };
            }
        }

        // 8. Public Health & Insurance
        for (const [id, info] of Object.entries(PUBLIC_HEALTH_DB)) {
            if (lower.includes(id.replace('_', ' ')) || lower.includes(info.category.toLowerCase())) {
                return {
                    id: `specialist_ph_${id}`,
                    type: 'info',
                    text: {
                        en: `### ${info.title.en}\n${info.summary.en}\n\n**Action**: ${info.actionableAdvice.en}`,
                        ta: info.summary.ta
                    },
                    urgencyLevel: 'low'
                };
            }
        }

        return null;
    }

    private static handleCost(input: string): ClinicalNode {
        const lower = input.toLowerCase();

        // 1. Detect Specific Treatment
        const item = TARIFF_DB.find(t =>
            lower.includes(t.id) ||
            (t.id === 'rct' && (lower.includes("root canal") || lower.includes("rct") || lower.includes("nerve"))) ||
            (t.id === 'implant' && lower.includes("implant")) ||
            (t.id === 'veneer' && lower.includes("veneer")) ||
            (t.id === 'invisalign' && (lower.includes("aligner") || lower.includes("braces"))) ||
            (t.id === 'whitening' && lower.includes("whiten"))
        );

        // 2. Return Specific Price if found
        if (item) {
            return {
                id: 'cost_response',
                type: 'info',
                text: {
                    en: `The estimated cost for **${item.name.en}** starts at ${item.price.currency} ${item.price.min}${item.price.max ? ' - ' + item.price.max : ''}. \n\n*Note: This is a provisional estimate. Final cost depends on clinical examination.*`,
                    ta: `${item.name.ta || item.name.en} விலை ${item.price.min} முதல் தொடங்குகிறது.`,
                    te: `${item.name.en} ఖరీదు ${item.price.min} నుండి ప్రారంభమవుతుంది.`
                },
                possibilities: [{
                    title: `Plan ${item.name.en}`,
                    description: "Schedule a digital scan and consultation with our specialist.",
                    likelihood: 'High',
                    action: "Book Now",
                    relatedSlug: item.id === 'rct' ? 'root-canal' : item.id === 'implant' ? 'dental-implants' : item.id
                }]
            };
        }

        // 3. Fallback: Ask which treatment (Interactive Question)
        return {
            id: 'cost_clarification',
            type: 'question',
            text: {
                en: "I can provide cost estimates for our most common treatments. Which one are you interested in?",
                ta: "எந்த சிகிச்சையின் விலை உங்களுக்கு வேண்டும்?",
                te: "మీకు ఏ చికిత్స ఖరీదు వివరాలు కావాలి?"
            },
            options: [
                { label: { en: "Root Canal (RCT)", ta: "வேர் சிகிச்சை", te: "రూట్ కెనాల్" }, nextId: 'assess_pulpitis', keywords: ['rct', 'root canal'] },
                { label: { en: "Dental Implant", ta: "இம்பிளான்ட்", te: "ఇంప్లాంట్" }, nextId: 'missing_tooth', keywords: ['implant'] },
                { label: { en: "Braces / Aligners", ta: "பல் வரிசை", te: "క్లిప్పులు" }, nextId: 'cosmetic', keywords: ['braces', 'aligner', 'invisalign'] },
                { label: { en: "Teeth Whitening", ta: "வெண்மையாக்குதல்", te: "వైట్నింగ్" }, nextId: 'assess_whitening', keywords: ['whitening'] }
            ]
        };
    }

    private static handleCare(input: string): ClinicalNode {
        const lower = input.toLowerCase();
        if (lower.includes('extraction') || lower.includes('tooth removal')) return NEO_KNOWLEDGE_GRAPH['extraction_care'];
        if (lower.includes('root canal') || lower.includes('rct') || lower.includes('nerve')) return NEO_KNOWLEDGE_GRAPH['rct_care'];

        return {
            id: 'care_general',
            type: 'info',
            text: {
                en: "I can provide post-op care instructions for **Extractions** and **Root Canal** treatments. Which one did you have?",
                ta: "எந்த சிகிச்சையின் பராமரிப்பு முறைகள் உங்களுக்கு வேண்டும்?"
            }
        };
    }

    private static handleAvailability(): ClinicalNode {
        const isOpen = NeoTime.isOpenNow();
        const currentTime = NeoTime.getCurrentTimeStr();

        return {
            id: 'availability_response',
            type: 'info',
            text: {
                en: `Current Time: ${currentTime}. ${isOpen ? "✅ Yes, Dr. Dhivakaran is currently available at Noble Dental Care." : "🕒 The clinic is currently closed. We open at 9:30 AM."}`,
                ta: `தற்போதைய நேரம்: ${currentTime}. ${isOpen ? "✅ ஆம், டாக்டர் இப்போது இருக்கிறார்." : "🕒 கிளினிக் இப்போது மூடப்பட்டுள்ளது."}`
            }
        };
    }

    private static checkShortcuts(input: string): ClinicalNode | null {
        const lower = input.toLowerCase();

        // 1. Clinical Shortcuts
        if (lower.includes('pain') || lower.includes('வலி')) return NEO_KNOWLEDGE_GRAPH['pain_type'];
        if (lower.includes('root canal') || lower.includes('வேர் சிகிச்சை')) return NEO_KNOWLEDGE_GRAPH['assess_pulpitis'];

        // 2. Public Health & Insurance Shortcuts
        // TODO: Import PUBLIC_HEALTH_DB properly. For now, we perform direct lookups if loaded.
        if (lower.includes('insurance') || lower.includes('claim') || lower.includes('star health')) {
            return {
                id: 'insurance_response',
                type: 'info',
                text: {
                    en: "Regarding Insurance: " + "Most OPD plans (like Star Outpatient Care) inhibit coverage for aesthetic procedures, but Trauma is covered.", // Fallback text until DB import
                    ta: "இன்சூரன்ஸ் பற்றி: விபத்து சிகிச்சைக்கு காப்பீடு உண்டு."
                }
            };
        }

        // 3. Authority Checks (Whitening etc)
        if (lower.includes('whitening') && lower.includes('safe')) {
            return {
                id: 'authority_whitening',
                type: 'info',
                text: {
                    en: "According to GDC (UK) Standards: Tooth whitening is the practice of dentistry. It is illegal for non-dentists to perform it.",
                    ta: "பல் வெளுப்பாக்குதல் மருத்துவரால் மட்டுமே செய்யப்பட வேண்டும்."
                }
            };
        }

        // 4. Content-Rich Treatments Lookup (The "King" Logic)
        const treatments = Object.values(treatmentsData);
        for (const t of treatments) {
            // Check if input matches treatment title or keywords
            const matchesKeyword = t.keywords.some(k => lower.includes(k.toLowerCase()));
            const matchesTitle = lower.includes(t.title.toLowerCase());

            if (matchesTitle || matchesKeyword) {
                return {
                    id: `treatment_${t.id}`,
                    type: 'info',
                    text: {
                        en: `**${t.title}** at Noble Dental Care is designed to be pain-free and effective.\n\n${t.description}\n\nOur specialists use advanced technology like ${t.id === 'rct' ? 'Microscopes' : 'Digital Scanners'} to ensure the best results. Would you like to check the cost or book a consultation?`,
                        ta: t.description // Fallback
                    },
                    // Inject rich possibilities from the treatment itself
                    possibilities: [
                        {
                            title: `Book ${t.title}`,
                            description: "Schedule a consultation with our specialist.",
                            likelihood: 'High',
                            // DYNAMIC CTA: Changes based on urgency
                            action: (t.id === 'rct' || t.title.toLowerCase().includes('surgery')) ? "Request Immediate Relief" : "View Available Slots",
                            relatedSlug: t.id
                        }
                    ]
                };
            }
        }

        return null;
    }
    private static findBestMatch(input: string, options: any[]): any | null {
        // 1. Normalize the user input (Translate slang -> clinical)
        const cleanInput = normalizeClinicalInput(input);
        const lowerInput = input.toLowerCase(); // Keep original too, just in case

        for (const opt of options) {
            // A. Check Direct Label Match (English & Tamil)
            if (cleanInput.includes(opt.label.en.toLowerCase())) return opt;
            if (opt.label.ta && cleanInput.includes(opt.label.ta.toLowerCase())) return opt;

            // B. Check Keywords (The Smart Check)
            if (opt.keywords) {
                for (const kw of opt.keywords) {
                    const lowKw = kw.toLowerCase();
                    // Check both normalized input AND original input
                    if (cleanInput.includes(lowKw) || lowerInput.includes(lowKw)) {
                        return opt;
                    }
                }
            }
        }
        return null;
    }
}
