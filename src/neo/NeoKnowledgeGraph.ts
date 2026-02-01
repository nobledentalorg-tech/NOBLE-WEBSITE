
import { ClinicalNode } from '../types/neoSchema';
import { PERIO_STAGING } from './NeoPeriodontics';

export const NEO_KNOWLEDGE_GRAPH: Record<string, ClinicalNode> = {
    // --- ROOT ---
    root: {
        id: 'root',
        type: 'question',
        text: {
            en: "Hello. I am Neo v2.0, your Medical Intelligence Unit. How can I help?",
            ta: "வணக்கம். நான் Neo. உங்களுக்கு எப்படி உதவ முடியும்?"
        },
        options: [
            { label: { en: "Tooth Pain", ta: "பல் வலி" }, nextId: 'pain_type' },
            { label: { en: "Missing Tooth", ta: "பல் இல்லை" }, nextId: 'missing_tooth' },
            { label: { en: "Better Smile", ta: "அழகு" }, nextId: 'cosmetic' },
            { label: { en: "Bleeding Gums", ta: "ஈறு ரத்தம்" }, nextId: 'gums' },
            { label: { en: "Other Issues", ta: "மற்றவை" }, nextId: 'other_symptoms' }
        ]
    },

    // --- PAIN BRANCH ---
    pain_type: {
        id: 'pain_type',
        type: 'question',
        text: {
            en: "Describe the pain.",
            ta: "வலியை விவரிக்கவும்."
        },
        options: [
            {
                label: { en: "Sharp with Cold/Hot", ta: "கூச்சம்" },
                nextId: 'pain_sensitivity',
                keywords: ['sharp', 'shock', 'sensitivity', 'cold', 'hot', 'ice', 'water']
            },
            {
                label: { en: "Dull / Night Pain", ta: "இரவு வலி" },
                nextId: 'pain_night',
                keywords: ['dull', 'ache', 'continuous', 'severe', 'night', 'sleep', 'throbbing', 'heavy', 'all the time', 'constant']
            },
            {
                label: { en: "Pain when Chewing", ta: "கடிக்கும் போது வலி" },
                nextId: 'pain_chewing',
                keywords: ['chew', 'bite', 'eating', 'pressure', 'food']
            }
        ]
    },
    pain_sensitivity: {
        id: 'pain_sensitivity',
        type: 'question',
        text: {
            en: "Does the pain linger for more than 10-15 seconds after the trigger is removed?",
            ta: "வலி 10 வினாடிகளுக்கு மேல் நீடிக்கிறதா?"
        },
        options: [
            { label: { en: "Yes, it lingers", ta: "ஆம்" }, nextId: 'assess_pulpitis' },
            { label: { en: "No, goes away instantly", ta: "இல்லை" }, nextId: 'assess_sensitivity' }
        ]
    },
    pain_night: {
        id: 'pain_night',
        type: 'question',
        text: {
            en: "Is there any visible swelling?",
            ta: "வீக்கம் உள்ளதா?"
        },
        options: [
            { label: { en: "Yes, Swelling", ta: "ஆம்" }, nextId: 'assess_abscess' },
            { label: { en: "No Swelling", ta: "இல்லை" }, nextId: 'assess_pulpitis' }
        ]
    },
    assess_sensitivity: {
        id: 'assess_sensitivity',
        type: 'assessment',
        text: {
            en: "This indicates Dentin Hypersensitivity.",
            ta: "இது பற்கூச்சம்."
        },
        possibilities: [{
            title: "Dentin Hypersensitivity",
            description: "Sharp pain triggered by cold/hot. Caused by exposed dentin layer.",
            likelihood: 'High',
            action: "Desensitizing Checkup",
            relatedSlug: "scan-diagnostics"
        }]
    },
    assess_pulpitis: {
        id: 'assess_pulpitis',
        type: 'assessment',
        text: {
            en: "This indicates Acute Pulpitis (Nerve Infection). Root Canal is likely required.",
            ta: "இது நரம்பு தொற்று. வேர் சிகிச்சை (RCT) தேவைப்படலாம்."
        },
        possibilities: [{
            title: "Acute Pulpitis",
            description: "Deep infection of the tooth nerve. Requires immediate attention to save the tooth.",
            likelihood: 'High',
            action: "Root Canal Therapy",
            relatedSlug: "root-canal"
        }]
    },
    assess_abscess: {
        id: 'assess_abscess',
        type: 'assessment',
        text: {
            en: "This indicates a Dental Abscess (Infection).",
            ta: "இது பல் சீழ் கட்டி."
        },
        possibilities: [{
            title: "Dental Abscess",
            description: "Bacterial infection causing pus accumulation. Requires drainage.",
            likelihood: 'High',
            action: "Emergency Drainage",
            relatedSlug: "root-canal"
        }]
    },

    // --- CHEWING PAIN ---
    pain_chewing: {
        id: 'pain_chewing',
        type: 'question',
        text: {
            en: "Did you have any recent dental fillings or crowns?",
            ta: "சமீபத்தில் பல் சிகிச்சை செய்தீர்களா?"
        },
        options: [
            { label: { en: "Yes, recently treated", ta: "ஆம்" }, nextId: 'assess_high_point' },
            { label: { en: "No, hasn't been touched", ta: "இல்லை" }, nextId: 'assess_cracked' }
        ]
    },
    assess_high_point: {
        id: 'assess_high_point',
        type: 'assessment',
        text: {
            en: "It is likely a simple bite alignment issue.",
            ta: "கடிப்பு சீரமைப்பு தேவைப்படலாம்."
        },
        possibilities: [{
            title: "High Occlusal Point",
            description: "The new filling/crown might be slightly 'tall', causing shock to the nerve.",
            likelihood: 'High',
            action: "Bite Adjustment",
            relatedSlug: "dental-fillings"
        }]
    },
    assess_cracked: {
        id: 'assess_cracked',
        type: 'assessment',
        text: {
            en: "Sharp pain on release of biting often indicates a structural issue.",
            ta: "இது பல் விரிசல் அறிகுறி."
        },
        possibilities: [{
            title: "Cracked Tooth Syndrome",
            description: "A microscopic crack flexing under pressure.",
            likelihood: 'Moderate',
            action: "Crown Protection",
            relatedSlug: "crowns-bridges"
        }]
    },

    // --- MISSING TOOTH ---
    missing_tooth: {
        id: 'missing_tooth',
        type: 'question',
        text: {
            en: "How many teeth are you missing?",
            ta: "எத்தனை பற்கள் இல்லை?"
        },
        options: [
            { label: { en: "One or Two", ta: "ஒன்று / இரண்டு" }, nextId: 'missing_duration_single', keywords: ['one', 'single', 'two', 'gap'] },
            { label: { en: "Multiple / All", ta: "பல / அனைத்தும்" }, nextId: 'missing_all', keywords: ['all', 'full', 'denture', 'multiple', 'many'] }
        ]
    },
    missing_duration_single: {
        id: 'missing_duration_single',
        type: 'question',
        text: {
            en: "Replacing missing teeth protects your jawbone. How long has it been?",
            ta: "பல் விழுந்து எவ்வளவு காலம் ஆகிறது?"
        },
        options: [
            { label: { en: "Recent (< 6 months)", ta: "< 6 மாதங்கள்" }, nextId: 'assess_implant_ideal', keywords: ['recent', 'new', 'month'] },
            { label: { en: "Long time (> 6 months)", ta: "> 6 மாதங்கள்" }, nextId: 'assess_implant_bone', keywords: ['long', 'years', 'old'] }
        ]
    },
    missing_all: {
        id: 'missing_all',
        type: 'question',
        text: {
            en: "Are you currently wearing dentures?",
            ta: "பல் செட் உள்ளதா?"
        },
        options: [
            { label: { en: "Yes, I hate them", ta: "ஆம்" }, nextId: 'assess_all_on_4', keywords: ['yes', 'denture', 'loose'] },
            { label: { en: "No, teeth are failing", ta: "இல்லை" }, nextId: 'assess_full_mouth', keywords: ['no', 'failing', 'rotten'] }
        ]
    },
    assess_implant_ideal: {
        id: 'assess_implant_ideal',
        type: 'assessment',
        text: {
            en: "You are in the optimal timeframe for a Dental Implant. We can likely place it directly.",
            ta: "இம்பிளான்ட் செய்ய இது சரியான நேரம்."
        },
        possibilities: [{
            title: "Single Dental Implant",
            description: "Titanium root replacement. Lifetime solution if placed early.",
            likelihood: 'High',
            action: "Get Implant Quote",
            relatedSlug: "dental-implants"
        }]
    },
    assess_implant_bone: {
        id: 'assess_implant_bone',
        type: 'assessment',
        text: {
            en: "Bone loss occurs when teeth are missing for long. We may need to rebuild foundation.",
            ta: "எலும்பு தேய்மானம் இருக்கலாம்."
        },
        possibilities: [{
            title: "Implant with Bone Graft",
            description: "Augmentation needed to ensure implant stability.",
            likelihood: 'Moderate',
            action: "Bone Scan (CBCT)",
            relatedSlug: "dental-implants"
        }]
    },
    assess_all_on_4: {
        id: 'assess_all_on_4',
        type: 'assessment',
        text: {
            en: "We can fix permanent teeth in just 3 days using 'All-on-4' technology.",
            ta: "3 நாட்களில் முழு பல் செட் பொருத்தலாம்."
        },
        possibilities: [{
            title: "All-on-4 Implants",
            description: "Fixed full-mouth teeth. No more removing dentures at night.",
            likelihood: 'High',
            action: "Full Mouth Consult",
            relatedSlug: "dental-implants"
        }]
    },
    assess_full_mouth: {
        id: 'assess_full_mouth',
        type: 'assessment',
        text: {
            en: "For failing teeth, we can extract and place implants in the same visit.",
            ta: "ஒரே நாளில் பல் அகற்றி இம்பிளான்ட் செய்யலாம்."
        },
        possibilities: [{
            title: "Immediate Load Implants",
            description: "Walk in with bad teeth, walk out with fixed temporaries.",
            likelihood: 'High',
            action: "Full Mouth Rehab",
            relatedSlug: "dental-implants"
        }]
    },

    // --- COSMETIC ---
    cosmetic: {
        id: 'cosmetic',
        type: 'question',
        text: {
            en: "What would you like to improve?",
            ta: "எதை சரிசெய்ய வேண்டும்?"
        },
        options: [
            { label: { en: "Crooked / Gapped Teeth", ta: "பல் வரிசை" }, nextId: 'assess_ortho' },
            { label: { en: "Yellow / Stained", ta: "மஞ்சள் பல்" }, nextId: 'assess_whitening' },
            { label: { en: "Shape / Chipped", ta: "பல் வடிவம்" }, nextId: 'assess_veneers' }
        ]
    },
    assess_ortho: {
        id: 'assess_ortho',
        type: 'assessment',
        text: {
            en: "Straightening teeth is easier than ever.",
            ta: "பற்களை எளிதாக சீரமைக்கலாம்."
        },
        possibilities: [
            {
                title: "Invisalign / Aligners",
                description: "Clear, removable trays to align teeth without metal braces.",
                likelihood: 'High',
                action: "View Aligners",
                relatedSlug: "invisalign"
            },
            {
                title: "Ceramic Braces",
                description: "Traditional control with tooth-colored aesthetics.",
                likelihood: 'Moderate',
                action: "Ortho Consult",
                relatedSlug: "braces-orthodontics"
            }
        ]
    },
    assess_whitening: {
        id: 'assess_whitening',
        type: 'assessment',
        text: {
            en: "Brightening your smile is a quick procedure.",
            ta: "பற்களை வெண்மையாக்குவது எளிது."
        },
        possibilities: [{
            title: "Laser Zoom Whitening",
            description: "Instant 4-shade jump in a single 45-minute session.",
            likelihood: 'High',
            action: "Book Whitening Spa",
            relatedSlug: "teeth-whitening"
        }]
    },
    assess_veneers: {
        id: 'assess_veneers',
        type: 'assessment',
        text: {
            en: "We can redesign your smile shape.",
            ta: "புன்னகையை வடிவமைக்கலாம்."
        },
        possibilities: [{
            title: "Ceramic Veneers",
            description: "Ultra-thin shells bonded to front teeth for a Hollywood smile.",
            likelihood: 'High',
            action: "Smile Design",
            relatedSlug: "dental-veneers"
        }]
    },

    // --- GUMS ---
    gums: {
        id: 'gums',
        type: 'question',
        text: {
            en: "What are you noticing about your gums?",
            ta: "ஈறுகளில் என்ன பிரச்சனை?"
        },
        options: [
            { label: { en: "Bleeding", ta: "ரத்தம்" }, nextId: 'assess_gingivitis' },
            { label: { en: "Loose Teeth", ta: "ஆடும் பல்" }, nextId: 'assess_perio' },
            { label: { en: "Swollen", ta: "வீக்கம்" }, nextId: 'assess_gingivitis' }
        ]
    },
    assess_gingivitis: {
        id: 'assess_gingivitis',
        type: 'assessment',
        text: {
            en: "This sounds like early-stage inflammation (Gingivitis).",
            ta: "இது ஈறு வீக்கம் (Gingivitis)."
        },
        possibilities: [{
            title: "Gingivitis",
            description: "Reversible gum inflammation caused by plaque.",
            likelihood: 'High',
            action: "Professional Cleaning",
            relatedSlug: "scaling-whitening"
        }]
    },
    assess_perio: {
        id: 'assess_perio',
        type: 'question',
        text: {
            en: "Are any of your teeth loose or shaky?",
            ta: "உங்கள் பற்கள் ஆடுகிறதா?"
        },
        options: [
            { label: { en: "Yes, Loose Teeth", ta: "ஆம்" }, nextId: 'perio_advanced', keywords: ['loose', 'shaky', 'moving', 'mobility'] },
            { label: { en: "No, Just Bleeding/Pain", ta: "இல்லை" }, nextId: 'perio_early', keywords: ['no', 'stable', 'tight'] }
        ]
    },
    perio_early: {
        id: 'perio_early',
        type: 'assessment',
        text: PERIO_STAGING['stage_2'].description, // Moderate Periodontitis
        possibilities: [{
            title: "Periodontitis (Stage I/II)",
            description: "Gum infection has started to affect the bone. Deep cleaning needed.",
            likelihood: 'High',
            action: PERIO_STAGING['stage_2'].treatment.en,
            relatedSlug: "gum-disease"
        }],
        urgencyLevel: 'medium'
    },
    perio_advanced: {
        id: 'perio_advanced',
        type: 'assessment',
        text: PERIO_STAGING['stage_3'].description, // Severe
        possibilities: [{
            title: "Advanced Periodontitis (Stage III/IV)",
            description: "Significant bone loss detected. Risk of tooth loss is high.",
            likelihood: 'High',
            action: PERIO_STAGING['stage_3'].treatment.en,
            relatedSlug: "gum-disease"
        }],
        urgencyLevel: 'high',
        redFlags: ['mobility', 'loose teeth']
    },

    // --- OTHER SYMPTOMS ---
    other_symptoms: {
        id: 'other_symptoms',
        type: 'question',
        text: {
            en: "Please select the issue.",
            ta: "பிரச்சனையை தேர்ந்தெடுக்கவும்."
        },
        options: [
            { label: { en: "Wisdom Tooth", ta: "ஞான பல்" }, nextId: 'branch_wisdom' },
            { label: { en: "Jaw Pain / TMJ", ta: "தாடை வலி" }, nextId: 'branch_tmj' },
            { label: { en: "Child Dental", ta: "குழந்தைகள்" }, nextId: 'branch_kids' },
            { label: { en: "Bad Breath", ta: "வாய் துர்நாற்றம்" }, nextId: 'assess_breath' },
            { label: { en: "Mouth Ulcers", ta: "வாய் புண்" }, nextId: 'assess_ulcer' }
        ]
    },

    // --- WISDOM TEETH ---
    branch_wisdom: {
        id: 'branch_wisdom',
        type: 'question',
        text: {
            en: "Is the gum swollen over the back tooth?",
            ta: "கடைவாய் ஈறு வீக்கமாக உள்ளதா?"
        },
        options: [
            { label: { en: "Yes, Swollen", ta: "ஆம்" }, nextId: 'assess_pericoronitis' },
            { label: { en: "No, Just Pressure", ta: "இல்லை" }, nextId: 'assess_impaction' }
        ]
    },
    assess_pericoronitis: {
        id: 'assess_pericoronitis',
        type: 'assessment',
        text: {
            en: "This sounds like an infection of the gum flap (Pericoronitis).",
            ta: "இது ஞான பல் ஈறு தொற்று."
        },
        possibilities: [{
            title: "Pericoronitis",
            description: "Infection around erupting wisdom tooth.",
            likelihood: 'High',
            action: "Clean & Removal Consult",
            relatedSlug: "wisdom-teeth-removal"
        }]
    },
    assess_impaction: {
        id: 'assess_impaction',
        type: 'assessment',
        text: {
            en: "The tooth might be impacted against the bone.",
            ta: "பல் எலும்பினுள் சிக்கியிருக்கலாம்."
        },
        possibilities: [{
            title: "Impacted Wisdom Tooth",
            description: "Tooth lacks space to erupt, causing pressure.",
            likelihood: 'High',
            action: "OPG X-Ray & Removal",
            relatedSlug: "wisdom-teeth-removal"
        }]
    },

    // --- TMJ ---
    branch_tmj: {
        id: 'branch_tmj',
        type: 'question',
        text: {
            en: "Does your jaw click or obtain locking?",
            ta: "தாடை சத்தம் இடுகிறதா?"
        },
        options: [
            { label: { en: "Clicking / Popping", ta: "சத்தம்" }, nextId: 'assess_tmj' },
            { label: { en: "Grinding at Night", ta: "பல் கடித்தல்" }, nextId: 'assess_bruxism' }
        ]
    },
    assess_tmj: {
        id: 'assess_tmj',
        type: 'assessment',
        text: {
            en: "The joint cartilage might be displaced.",
            ta: "மூட்டு விலகியிருக்கலாம்."
        },
        possibilities: [{
            title: "TMJ Disorder",
            description: "Stress or misalignment affecting jaw joint.",
            likelihood: 'Moderate',
            action: "TMD Consultation",
            relatedSlug: "general-dentistry"
        }]
    },
    assess_bruxism: {
        id: 'assess_bruxism',
        type: 'assessment',
        text: {
            en: "Night grinding wears down teeth.",
            ta: "இரவில் பல் கடிப்பது பற்களை தேய்க்கும்."
        },
        possibilities: [{
            title: "Bruxism",
            description: "Unconscious grinding during sleep.",
            likelihood: 'High',
            action: "Night Guard Splint",
            relatedSlug: "general-dentistry"
        }]
    },

    // --- KIDS ---
    branch_kids: {
        id: 'branch_kids',
        type: 'question',
        text: {
            en: "What is the issue with the child?",
            ta: "குழந்தைக்கு என்ன பிரச்சனை?"
        },
        options: [
            { label: { en: "Cavity / Black Spot", ta: "சொத்தை" }, nextId: 'assess_kids_decay' },
            { label: { en: "New Tooth / Loose", ta: "பல் முளைத்தல்" }, nextId: 'assess_kids_growth' }
        ]
    },
    assess_kids_decay: {
        id: 'assess_kids_decay',
        type: 'assessment',
        text: {
            en: "Milk teeth decay spreads very fast.",
            ta: "பால் பல் சொத்தை வேகமாக பரவும்."
        },
        possibilities: [{
            title: "Early Childhood Caries",
            description: "Decay in baby teeth needs treatment.",
            likelihood: 'High',
            action: "Pediatric Filling",
            relatedSlug: "paediatric-dentistry"
        }]
    },
    assess_kids_growth: {
        id: 'assess_kids_growth',
        type: 'assessment',
        text: {
            en: "Growth is a process we monitor carefully.",
            ta: "வளர்ச்சியை கண்காணிக்க வேண்டும்."
        },
        possibilities: [{
            title: "Eruption Check",
            description: "Monitoring proper shedding of milk teeth.",
            likelihood: 'High',
            action: "Growth Checkup",
            relatedSlug: "paediatric-dentistry"
        }]
    },

    // --- BREATH & ULCER ---
    assess_breath: {
        id: 'assess_breath',
        type: 'assessment',
        text: {
            en: "Bad breath usually has a dental cause.",
            ta: "வாய் துர்நாற்றம் வாய் சுகாதார குறைவால் வரும்."
        },
        possibilities: [{
            title: "Halitosis",
            description: "Caused by bacteria or gum pockets.",
            likelihood: 'High',
            action: "Deep Cleaning",
            relatedSlug: "scaling-whitening"
        }]
    },
    // --- ORAL MEDICINE (Burket's Data) ---
    assess_ulcer: {
        id: 'assess_ulcer',
        type: 'question',
        text: {
            en: "How long have you had this ulcer/patch?",
            ta: "எவ்வளவு நாட்களாக இந்த புண் இருக்கிறது?"
        },
        options: [
            { label: { en: "Less than 2 weeks", ta: "< 2 வாரங்கள்" }, nextId: 'assess_acute_ulcer' },
            { label: { en: "More than 2 weeks", ta: "> 2 வாரங்கள்" }, nextId: 'assess_chronic_lesion' }
        ]
    },
    assess_acute_ulcer: {
        id: 'assess_acute_ulcer',
        type: 'assessment',
        text: {
            en: "Short-term ulcers are usually due to stress or trauma.",
            ta: "இது சாதாரண வாய் புண் அல்லது காயமாக இருக்கலாம்."
        },
        possibilities: [{
            title: "Aphthous Ulcer / Trauma",
            description: "Benign sore. Apply topical gel. Avoid spicy food.",
            likelihood: 'High',
            action: "Prescribe Gel",
            relatedSlug: "laser-dentistry"
        }]
    },
    assess_chronic_lesion: {
        id: 'assess_chronic_lesion',
        type: 'question',
        text: {
            en: "Does it look White, Red, or Mixed?",
            ta: "அது வெள்ளை அல்லது சிவப்பு நிறத்தில் உள்ளதா?"
        },
        options: [
            { label: { en: "White Patch (Cannot wipe off)", ta: "வெள்ளை" }, nextId: 'assess_leukoplakia' },
            { label: { en: "Red Patch / Ulcer", ta: "சிவப்பு" }, nextId: 'assess_erythroplakia' },
            { label: { en: "Lacy White Lines", ta: "வலை போன்ற வெள்ளை" }, nextId: 'assess_lichen' }
        ]
    },
    assess_leukoplakia: {
        id: 'assess_leukoplakia',
        type: 'assessment',
        text: {
            en: "A white patch that doesn't wipe off requires investigation.",
            ta: "அழிக்க முடியாத வெள்ளை திட்டு பரிசோதிக்கப்பட வேண்டும்."
        },
        possibilities: [{
            title: "Leukoplakia (Pre-Cancerous?)",
            description: "Thickened white patch. Biopsy recommended to rule out dysplasia.",
            likelihood: 'Moderate',
            action: "Biopsy Consult",
            relatedSlug: "scan-diagnostics"
        }],
        urgencyLevel: 'high',
        redFlags: ['tobacco', 'smoking', 'painless']
    },
    assess_erythroplakia: {
        id: 'assess_erythroplakia',
        type: 'assessment',
        text: {
            en: "Persistent red patches are high-risk indicators.",
            ta: "நீண்ட நாள் சிவப்பு திட்டு ஆபத்தானது."
        },
        possibilities: [{
            title: "Erythroplakia",
            description: "High risk of cellular changes. Immediate specialist evaluation needed.",
            likelihood: 'High',
            action: "Oncologist Referral",
            relatedSlug: "scan-diagnostics"
        }],
        urgencyLevel: 'emergency',
        redFlags: ['bleeding', 'weight loss']
    },
    assess_lichen: {
        id: 'assess_lichen',
        type: 'assessment',
        text: {
            en: "Lacy white lines often indicate an autoimmune reaction.",
            ta: "இது லைக்கன் பிளானஸ் அறிகுறி."
        },
        possibilities: [{
            title: "Oral Lichen Planus",
            description: "Chronic inflammatory condition. Needs monitoring.",
            likelihood: 'High',
            action: "Manage Stress/Rx",
            relatedSlug: "general-dentistry"
        }]
    },
    // --- POST-OP CARE ---
    extraction_care: {
        id: 'extraction_care',
        type: 'info',
        text: {
            en: "### Extraction Post-Op Care\n1. **Bite the Gauze**: Keep firm pressure for 45 mins.\n2. **No Rinsing/Spitting**: Do not disturb the clot for 24 hours.\n3. **Cold Pack**: Apply externally to reduce swelling (20 mins on/off).\n4. **Soft Food**: Avoid hot/spicy food for 2 days.\n5. Don't use a straw!",
            ta: "### பல் பிடுங்கிய பின் கவனிக்க வேண்டியவை\n1. பஞ்சை 45 நிமிடங்கள் கடித்துக் கொள்ளவும்.\n2. 24 மணி நேரம் கொப்பளிக்கக் கூடாது.\n3. ஐஸ் கட்டி ஒத்தடம் கொடுக்கவும்.\n4. மென்மையான உணவுகளை உட்கொள்ளவும்."
        },
        possibilities: [{
            title: "Post-Op Recovery",
            description: "Follow these steps to ensure fast healing and prevent 'Dry Socket'.",
            likelihood: 'High',
            action: "Download PDF Guide",
            relatedSlug: "wisdom-teeth-removal"
        }]
    },
    rct_care: {
        id: 'rct_care',
        type: 'info',
        text: {
            en: "### Root Canal Post-Op Care\n1. **Avoid Chewing**: Do not eat on the treated side until the permanent crown is placed.\n2. **Mild Discomfort**: Some tenderness is normal for 2-3 days.\n3. **Medication**: Take prescribed antibiotics/painkillers as directed.\n4. **Temporary Filling**: If it falls out, contact us immediately.",
            ta: "### வேர் சிகிச்சைக்கு பின் கவனிக்க வேண்டியவை\n1. சிகிச்சை செய்த பக்கத்தில் கடிக்க வேண்டாம்.\n2. 2-3 நாட்கள் லேசான வலி இருக்கலாம்.\n3. மருந்துகளை தவறாமல் உட்கொள்ளவும்."
        },
        possibilities: [{
            title: "Endodontic Healing",
            description: "The tooth is fragile until the final crown is fixed.",
            likelihood: 'High',
            action: "Book Crown Fitting",
            relatedSlug: "root-canal"
        }]
    },
    // --- CLINIC & DOCTOR META ---
    doctor_info: {
        id: 'doctor_info',
        type: 'info',
        text: {
            en: "Dr. Dhivakaran is a pioneer in the field of Dentistry (11+ Years). He is a contributor to the academic book 'Triumph's Complete Review of Dentistry' and serves as the Director of HealthFlo.",
            ta: "டாக்டர் திவாகரன் 11 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட பல் மருத்துவ முன்னோடி. இவர் 'Triumph's Complete Review of Dentistry' புத்தகத்தின் பங்களிப்பாளர் மற்றும் HealthFlo-ன் இயக்குனர்."
        },
        possibilities: [{
            title: "Meet Dr. Dhivakaran",
            description: "Specialist in Zeiss Microscopic RCT and Digital Implants.",
            likelihood: 'High',
            action: "View Doctor Profile",
            relatedSlug: "about"
        }]
    },
    clinic_meta: {
        id: 'clinic_meta',
        type: 'info',
        text: {
            en: "Noble Dental Care Nallagandla is a premium multispecialty center specializing in Microscopic Dentistry. We are located near Citizen Hospital, serving Nallagandla, Tellapur, and Gachibowli.",
            ta: "Noble Dental Care நல்லகண்ட்லாவில் உள்ள ஒரு உயர்தர பல் மருத்துவமனை. இது சிட்டிசன் மருத்துவமனை அருகில் அமைந்துள்ளது."
        },
        possibilities: [{
            title: "Visit Clinic",
            description: "Premium dental care with advanced AI and Microscopic technology.",
            likelihood: 'High',
            action: "Get Directions",
            relatedSlug: "contact"
        }]
    }
};
