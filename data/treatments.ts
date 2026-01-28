// Icons imported via string map in component

export interface TreatmentStep {
  title: string;
  desc: string;
}

export interface TreatmentFAQ {
  q: string;
  a: string;
}

export interface ProductRecommendation {
  id: string;
  name: string;
  image: string;
  subText: string;
  purpose: string;
  usage: string;
  isPrescription: boolean;
  safetyNote?: string;
}

export interface TreatmentData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  heroImage: string;
  description: string;
  longDescription: string;
  stats: { label: string; value: string; icon: any }[];
  process: { title: string; desc: string }[]; // Basic process (Legacy)
  benefits: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  recommendedProducts?: ProductRecommendation[];
  storyHook?: {
    headline: string;
    subheadline: string;
    body: string;
    videoUrl?: string;
  };
  // [NEW] Price War Table
  priceComparison?: {
    item: string;
    noblePrice: string;
    marketPrice: string;
  }[];

  // [NEW] Deep Dive Medical Data
  medicalContext?: {
    etiology: { cause: string; medicalTerm?: string; description: string }[];
    investigations: { name: string; purpose: string }[];
    prevention: string[];
  };
  procedureDetailed?: {
    step: string;
    description: string;
    duration: string;
    painLevel: "None" | "Mild" | "Moderate";
  }[];
  postOp?: {
    immediate: string[];
    diet: string[];
    warningSigns: string[];
  };
  citations?: string[];
}

export const treatmentsData: Record<string, TreatmentData> = {
  "root-canal": {
    id: "root-canal",
    title: "Microscopic Root Canal (Pain-Free Treatment)",
    subtitle: "Advanced microscopy-guided Endodontics.",
    storyHook: {
      headline: "I would rather give birth than have a Root Canal.",
      subheadline: "The Myth of Root Canal Pain: Why You Are Scared (And Why You Shouldn't Be).",
      body: "I hear this all the time. And I understand why. Traditional root canals used to be painful because doctors worked blindly.\n\nBut at Noble Dental, we use **Microscopes**. Imagine trying to thread a needle in the dark vs. doing it with a spotlight. That is the difference.",

    },
    category: "Endodontics",
    heroImage: "/assets/images/treatments/root-canal-hyderabad.webp",
    description: "Microscopic Root Canal treatment performed strictly according to international endodontic guidelines.",
    longDescription: "At Noble Dental Care, we prioritize long-term clinical success over marketing trends. While we are equipped for Single-Visit Root Canals, we strictly follow medical evidence: complex infections or severe abscesses may require multiple visits to ensure complete disinfection. We do not rush biology. Using Zeiss Extaro 300 magnification, we locate and treat hidden canals (MB2) to prevent failure, ensuring your tooth is saved for life.\n\n**Transparency in Pricing:**\nWe believe in no hidden costs. Root Canal treatment ranges from **₹4,500 - ₹7,000** depending on the complexity (e.g., re-treatment is higher). Zirconia Crowns start from **₹8,000**.\n\n**Is it Safe?**\nYes. We follow a strict 4-step sterilization protocol (Class B Autoclave) to ensure 100% bacterial elimination, making the procedure safe even for diabetic and cardiac patients.",

    // [NEW] Medical Context - Etiology
    medicalContext: {
      etiology: [
        {
          cause: "Deep Tooth Decay",
          medicalTerm: "Caries Profunda",
          description: "Bacteria penetrate the enamel and dentin, reaching the soft pulp tissue, causing irreversible inflammation."
        },
        {
          cause: "Cracked Tooth",
          medicalTerm: "Fractured Cusp",
          description: "A fracture allows bacteria to bypass protection and infect the nerve, often causing sharp pain upon chewing."
        },
        {
          cause: "Trauma",
          medicalTerm: "Luxation Injury",
          description: "A blow to the tooth (sports injury/fall) can sever the blood supply, causing the nerve to die silently over time."
        }
      ],
      investigations: [
        { name: "Pre-Procedural Evaluation", purpose: "Vitals check (BP/Sugar) & Pre-Anesthetic assessment for patient safety." },
        { name: "Digital IOPA X-Ray", purpose: "To visualize the root tip and depth of decay." },
        { name: "Pulp Vitality Test", purpose: "Thermal test (Cold/Hot) to confirm if the nerve is dead or alive." },
        { name: "CBCT (3D Scan)", purpose: "For re-treatment cases to find hidden canals (MB2) missed by previous dentists." }
      ],
      prevention: [
        "Treat cavities early before they reach the nerve.",
        "Wear mouthguards during contact sports.",
        "Avoid chewing on hard ice or pens to prevent cracks."
      ]
    },

    stats: [
      { label: "Protocol", value: "Guideline Based", icon: "Shield" },
      { label: "Precision", value: "25x Zoom", icon: "Ruler" },
      { label: "Success", value: "99.2%", icon: "Activity" }
    ],

    // [NEW] Deep Dive Procedure
    procedureDetailed: [
      {
        step: "Safety & Anesthesia",
        description: "We begin with a Pre-Anesthetic Checkup. Once cleared, we use 'The Wand' for computer-controlled, painless anesthesia.",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Isolation & Access",
        description: "Rubber dam isolation ensures a sterile field. Dr. Dhivakaran uses the Zeiss Microscope to locate all canals, including the hidden MB2.",
        duration: "15 Mins",
        painLevel: "None"
      },
      {
        step: "Cleaning & Shaping",
        description: "Infected tissue is removed. We use ultrasonic activation to flush bacteria from deep anatomical irregularities.",
        duration: "15 Mins",
        painLevel: "None"
      },
      {
        step: "Assessment of Healing",
        description: "Medical Decision Point: If the canal is dry, we seal it (Single Visit). If infection is active (pus), we place medication and wait (Multi-Visit).",
        duration: "Clinical Decision",
        painLevel: "None"
      },
      {
        step: "3D Obturation",
        description: "The tooth is sealed with a biocompatible ceramic material to prevent future re-infection.",
        duration: "15 Mins",
        painLevel: "None"
      }
    ],

    // Legacy Process (Keep for now or remove if unused)
    process: [
      { title: "Safety Check", desc: "Vitals & Pre-Anesthetic validation." },
      { title: "Microscopic Clean", desc: "Removing infection with precision." },
      { title: "Medical Assessment", desc: "Strict evidence-based timing." },
      { title: "Bio-Seal", desc: "Permanent ceramic obturation." }
    ],

    // [NEW] Post-Op Guide
    postOp: {
      immediate: [
        "Numbness lasts 2-3 hours. Avoid chewing to prevent biting your cheek.",
        "A temporary filling is placed; avoid sticky foods.",
        "Mild discomfort is normal as the anesthesia wears off."
      ],
      diet: [
        "Soft diet (Dal, Curd Rice, Smoothies) for the first 24 hours.",
        "Resume normal chewing once the permanent crown is placed.",
        "Stay hydrated."
      ],
      warningSigns: [
        "Visible facial swelling spreading to the eye or neck.",
        "Difficulty in opening the mouth (limited range of motion).",
        "Medication failing to relieve pain after 48 hours."
      ]
    },

    citations: [
      "American Association of Endodontists (AAE): Guide to Clinical Endodontics (2024)",
      "Cohen's Pathways of the Pulp - 12th Edition: Chapter on 'Antibiotic Stewardship'",
      "Burket's Oral Medicine: Systemic Disease Considerations in Dentistry"
    ],

    benefits: [
      "Microscope-Enhanced Precision",
      "Evidence-Based Treatment Plans",
      "Save Your Natural Tooth",
      "Transparent 'No-Hype' Pricing",
      "10-Year Warranty on Crowns"
    ],
    faqs: [
      { q: "Is it painful after the procedure?", a: "Mild soreness is possible as the body heals. We prescribe analgesics to manage this comfortably." },
      { q: "Do I need antibiotics?", a: "Antibiotics are prescribed based on the **severity of infection** and your **systemic health** (e.g., Diabetes/Cardiac issues). We follow strict medical guidelines to avoid overuse." },
      { q: "Why check Vitals before procedure?", a: "Your safety is paramount. We evaluate your blood pressure and sugar levels (if diabetic) to ensure you can tolerate the procedure safely." }
    ],
    keywords: ["microscopic root canal", "painless rct nallagandla", "single sitting root canal", "endodontist near me", "root canal cost"],
    recommendedProducts: [
      {
        id: "ketorol-dt",
        name: "Ketorol DT 10mg",
        image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400",
        subText: "Potent relief for intense acute toothache.",
        purpose: "Pain Management",
        usage: "Dissolve in water. Take only if prescribed.",
        isPrescription: true,
        safetyNote: "Do not take on an empty stomach. Max 5 days."
      },
      {
        id: "augmentin-625",
        name: "Augmentin 625 Duo",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
        subText: "Standard of care for dental infections.",
        purpose: "Infection Control",
        usage: "1 tablet every 12 hours after meals.",
        isPrescription: true,
        safetyNote: "Complete full 3-5 day course even if pain stops."
      }
    ]
  },
  "dental-implants": {
    id: "dental-implants",
    title: "Guided Dental Implants",
    subtitle: "Permanent fixed teeth with 3D surgical guides.",
    storyHook: {
      headline: "Don't Let Them Pull Your Tooth Yet.",
      subheadline: "Why 30% of 'Unsavable' teeth can actually be saved with Microscopic Dentistry.",
      body: "I often see patients who were told their tooth is 'gone' and they need a ₹35,000 implant. But here is the secret most clinics won't tell you: **Nothing is better than your natural tooth.**\n\nBefore you agree to an extraction, we run a 'Save-My-Tooth' Assessment. Using our Dental Microscope, we check if the root is truly fractured. If it’s not, we save it. If it is, then we talk about Implants."
    },
    category: "Surgery",
    heroImage: "/assets/images/treatments/implants-hyderabad.webp",
    description: "Replace missing teeth with Nobel Biocare / Straumann implants. Minimally invasive, suture-free options available.",
    longDescription: "Reclaim your ability to eat and smile. We are Nallagandla's premier center for 'Computer Guided Implant Surgery'. By planning your surgery digitally, we place implants with 0.1mm accuracy, often without cutting the gums (Flapless). This means less pain, faster healing, and a lifetime warranty on your new teeth.",
    stats: [
      { label: "Accuracy", value: "0.1mm", icon: "Ruler" },
      { label: "Warranty", value: "Lifetime", icon: "Shield" },
      { label: "Healing", value: "3 Days", icon: "Clock" }
    ],
    process: [
      { title: "Free 3D Scan", desc: "In-house CBCT to assess bone quality instantly." },
      { title: "Virtual Planning", desc: "Dr. Dhivakaran designs your surgery on software first." },
      { title: "3D Printed Guide", desc: "A custom template ensures the implant goes exactly where planned." },
      { title: "Immediate Loading", desc: "Walk out with a fixed temporary tooth on the same day." }
    ],
    benefits: [
      "Transparent Cost (No Hidden Fees)",
      "Global Brands (Nobel/Straumann)",
      "Fixed Teeth in 72 Hours",
      "Safe for Diabetics (Guided Protocol)",
      "0% EMI Options Available"
    ],

    faqs: [
      { q: "How much do dental implants cost?", a: "Implants start from ₹25,000. Basic options to premium Swiss brands available. We provide a full cost breakdown upfront." },
      { q: "Is it painful?", a: "With our 'Keyhole Guided Surgery', most patients report less pain than a simple extraction and return to work the next day." }
    ],
    keywords: ["dental implants cost nallagandla", "full mouth implants", "guided implant surgery", "best implantologist hyderabad", "fixed teeth cost"],
    priceComparison: [
      { item: "Straumann Implant (Swiss)", noblePrice: "₹ 25,000", marketPrice: "₹ 35,000+" },
      { item: "Zirconia Crown (Monolith)", noblePrice: "₹ 8,000", marketPrice: "₹ 15,000" },
      { item: "3D Surgical Guide", noblePrice: "Included", marketPrice: "₹ 5,000 (Extra)" }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Tooth Loss",
          medicalTerm: "Edentulism",
          description: "Loss of teeth due to decay, gum disease, or trauma leads to bone resorption (shrinking jaw)."
        },
        {
          cause: "Loose Dentures",
          medicalTerm: "Alveolar Atrophy",
          description: "Long-term denture wear causes the jawbone to melt away, making dentures loose and uncomfortable."
        }
      ],
      investigations: [
        { name: "CBCT Bone Scan", purpose: "To measure bone width (D1/D2/D3 quality) for implant stability." },
        { name: "Virtual Surgical Plan", purpose: "Digital placement of the implant on software to avoid nerves." },
        { name: "HbA1c Test", purpose: "To ensure diabetes is under control (<7.0) for healing." }
      ],
      prevention: [
        "Replace missing teeth immediately to stop bone loss.",
        "Maintain excellent hygiene around existing implants."
      ]
    },
    procedureDetailed: [
      {
        step: "3D Planning",
        description: "We merge your CBCT scan with an intraoral scan to design a custom surgical guide.",
        duration: "24 Hours (Lab)",
        painLevel: "None"
      },
      {
        step: "Guide Placement",
        description: "The 3D printed guide is placed over your gums. No cuts or blades are needed (Flapless).",
        duration: "5 Mins",
        painLevel: "None"
      },
      {
        step: "Implant Insertion",
        description: "The titanium implant is placed through the guide with 0.1mm precision.",
        duration: "15 Mins",
        painLevel: "Mild"
      },
      {
        step: "Immediate Tooth",
        description: "If bone stability is high (ISQ > 70), we place a fixed temporary tooth immediately.",
        duration: "20 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Apply ice pack on cheek for 15 mins every hour.",
        "Do not spit; swallow saliva to protect the clot.",
        "Take prescribed antibiotics (Augmentin) on time."
      ],
      diet: [
        "Cold, soft diet for 3 days (Ice cream, yogurt).",
        "Avoid chewing on the implant side for 6 weeks (Osseointegration phase).",
        "No hot coffee/tea for 24 hours."
      ],
      warningSigns: [
        "Numbness in the lip persisting after 24 hours.",
        "Implant mobility (shaking).",
        "Severe throbbing pain not controlled by medication."
      ]
    },
    citations: [
      "Journal of Oral Implantology: 'Accuracy of Computer-Guided Surgery' (2023)",
      "Nobel Biocare: 'All-on-4 Clinical Protocol'",
      "ITI (International Team for Implantology) Guidelines"
    ],
    recommendedProducts: [
      {
        id: "desmocare",
        name: "Desmocare Implant Mouthwash",
        image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=400",
        subText: "Antioxidant-rich mouthwash for healing.",
        purpose: "Site Healing",
        usage: "Rinse gently twice daily. Do not dilute.",
        isPrescription: false
      },
      {
        id: "augmentin-625",
        name: "Augmentin 625 Duo",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
        subText: "Prevents surgical site infection.",
        purpose: "Infection Control",
        usage: "As prescribed by Dr. Dhivakaran.",
        isPrescription: true,
        safetyNote: "Report any skin rash immediately."
      }
    ]
  },
  "invisalign": {
    id: "invisalign",
    title: "Invisalign & Aligners",
    subtitle: "Invisible teeth straightening with AI planning.",
    storyHook: {
      headline: "The Hidden Cost of 'Cheap' Online Aligners.",
      subheadline: "Why DIY plastic trays can permanently damage your roots.",
      body: "You've seen the ads on Instagram: 'Straight teeth at home for ₹30,000'.\n\n**Here is the Dangerous Truth:** Moving teeth without a doctor's supervision can lead to root resorption (where the root dissolves) or a ruined bite that costs ₹2 Lakhs to fix.\n\nI use **Invisalign & FDA-Approved Aligners** that actually track your roots in 3D. Don't gamble with your bone health."
    },
    category: "Orthodontics",
    heroImage: "/assets/images/treatments/invisalign-hyderabad.webp",
    description: "Straighten crooked teeth without metal braces. Certified Invisalign providers in Nallagandla.",
    longDescription: "Transform your smile discreetly. Using the iTero 5D Scanner, we show you your 'After' smile before you even start. Whether you choose Invisalign or affordable clear aligners, our AI-driven planning ensures precise movement for faster results compared to traditional metal braces.",
    stats: [
      { label: "Visibility", value: "Invisible", icon: "Sparkles" },
      { label: "Scan", value: "iTero 5D", icon: "Scan" },
      { label: "Speed", value: "2x Faster", icon: "Zap" }
    ],
    process: [
      { title: "3D Smile Scan", desc: "Instant simulation of your straight teeth." },
      { title: "Custom Plan", desc: "Review your digital treatment video." },
      { title: "Aligner Delivery", desc: "Receive your set of custom transparent trays." },
      { title: "Remote Monitoring", desc: "Weekly check-ins via app, minimal clinic visits." }
    ],
    benefits: [
      "No Food Restrictions",
      "Remove for Parties/Meetings",
      "Comfortable & Smooth",
      "Fewer Clinic Visits",
      "EMI Plans for Affordability"
    ],
    faqs: [
      { q: "What is the cost of Invisalign in Nallagandla?", a: "Clear aligners start from ₹65,000 for simple cases. Invisalign pricing depends on complexity. Book a scan for a quote." },
      { q: "Does it work for severe gaps?", a: "Yes, modern aligners can fix complex crowding, gaps, and bite issues just like braces." }
    ],
    keywords: ["invisalign cost nallagandla", "clear aligners", "invisible braces", "teeth straightening cost", "orthodontist near me"],
    priceComparison: [
      { item: "HealthFlo Clear Aligners", noblePrice: "₹ 65,000", marketPrice: "₹ 80,000+" },
      { item: "Invisalign (Official)", noblePrice: "₹ 1.5L - 3.5L", marketPrice: "₹ 1.8L - 4.5L" },
      { item: "iTero 5D Simulation", noblePrice: "Free", marketPrice: "₹ 3,500" }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Crowding",
          medicalTerm: "Dental Malocclusion",
          description: "Lack of jaw space causes teeth to overlap, making cleaning difficult and increasing cavity risk."
        },
        {
          cause: "Gaps",
          medicalTerm: "Diastema",
          description: "Spacing between teeth affects speech and can lead to gum pocket formation."
        }
      ],
      investigations: [
        { name: "iTero 5D Scan", purpose: "Infrared scan to visualize teeth structure without radiation." },
        { name: "Lateral Cephalogram", purpose: "X-ray to measure jaw bone angle and growth." },
        { name: "ClinCheck AI", purpose: "Software simulation of the final result." }
      ],
      prevention: [
        "Early orthodontic screening at age 7.",
        "Identify thumb-sucking habits early."
      ]
    },
    procedureDetailed: [
      {
        step: "Digital Scan",
        description: "We scan your teeth using iTero Element 5D. No gooey impression material used.",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "AI Planning",
        description: "Dr. Dhivakaran plans the movement of every single tooth using ClinCheck software.",
        duration: "3 Days (Lab)",
        painLevel: "None"
      },
      {
        step: "Attachment Placement",
        description: "Tiny tooth-colored buttons are placed on teeth to give the aligners grip.",
        duration: "20 Mins",
        painLevel: "None"
      },
      {
        step: "Fitting",
        description: "You receive your first set of aligners and learn how to wear/remove them.",
        duration: "15 Mins",
        painLevel: "Mild"
      }
    ],
    postOp: {
      immediate: [
        "Teeth may feel 'tight' or slightly loose for 2 days.",
        "Speech might be slightly lisping for 24 hours.",
        "Use chewies to seat the aligners properly."
      ],
      diet: [
        "Eat WHATEVER you want! Just remove aligners first.",
        "Drink only water while wearing aligners.",
        "Avoid turmeric/curry while wearing (stains the plastic)."
      ],
      warningSigns: [
        "Aligner cracking or breaking.",
        "Sharp edge cutting the tongue (use an emery board to smooth it)."
      ]
    },
    citations: [
      "American Journal of Orthodontics: 'Efficacy of Clear Aligners' (2022)",
      "Invisalign Master Clinical Protocol",
      "PubMed: 'Periodontal Health in Aligners vs Braces'"
    ],
    recommendedProducts: [
      {
        id: "amflor-rinse",
        name: "Amflor Oral Rinse",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=400",
        subText: "Amine fluoride protection for aligner wearers.",
        purpose: "Cavity Prevention",
        usage: "Rinse daily before bed.",
        isPrescription: false
      }
    ]
  },
  "crowns-bridges": {
    id: "crowns-bridges",
    title: "Zirconia Crowns & Bridges",
    subtitle: "Metal-free digital caps with 15-year warranty.",
    storyHook: {
      headline: "Does your Crown look like a 'Chiclet'?",
      subheadline: "If you have a black line near your gums, it's time to upgrade.",
      body: "Old-school PFM (Porcelain Fused to Metal) crowns cause that ugly grey shadow at the gumline. They also chip easily.\n\nI treat teeth like jewelry. Using **Monolithic Zirconia**, we mill crowns that catch light exactly like natural enamel. No metal. No shadows. Just a seamless smile that lasts 15+ years."
    },
    category: "Restorative",
    heroImage: "/assets/images/treatments/crowns-bridges-hyderabad.webp",
    description: "Replace broken or missing teeth with high-strength Monolith Zirconia. 3D designed for perfect fit.",
    longDescription: "Say goodbye to black metal lines. We use exclusively Metal-Free Zirconia and E.max crowns. Milled with 5-micron CAD/CAM precision, our crowns fit perfectly and look exactly like your natural enamel. Ideal for front teeth aesthetics and back teeth chewing strength.",
    stats: [
      { label: "Material", value: "Zirconia", icon: "Shield" },
      { label: "Warranty", value: "15 Years", icon: "Award" },
      { label: "Speed", value: "48 Hours", icon: "Clock" }
    ],
    process: [
      { title: "Digital Scan", desc: "No messy clay impressions, just a quick 3D scan." },
      { title: "CAD Design", desc: "Computer engineering of your tooth shape." },
      { title: "Robot Milling", desc: "Carved from a solid diamond-hard zirconia block." },
      { title: "Bonding", desc: "Permanently fixed for chewing power." }
    ],
    benefits: [
      "Look 100% Natural",
      "Chip-Resistant Strength",
      "Biocompatible (Gum Friendly)",
      "Digital Warranty Card",
      "Stain Proof"
    ],
    faqs: [{ q: "How much does a Zirconia crown cost?", a: "Zirconia crowns start from ₹8,000 depending on the warranty and brand (3M/BruxZir)." }],
    medicalContext: {
      etiology: [
        {
          cause: "Root Canal Treated Tooth",
          medicalTerm: "Non-Vital Tooth",
          description: "After RCT, the tooth becomes brittle and requires a crown ('Helmet') to prevent vertical fracture."
        },
        {
          cause: "Large Filling",
          medicalTerm: "Compromised Structure",
          description: "When >50% of the tooth is filling material, a crown is needed to hold it together."
        }
      ],
      investigations: [
        { name: "Digital Impression", purpose: "3D Intraoral scan for 5-micron accuracy." },
        { name: "Shade Selection", purpose: "Digital color matching to adjacent teeth." }
      ],
      prevention: [
        "Avoid opening bottles with teeth.",
        "Wear a nightguard if you grind your teeth (Bruxism)."
      ]
    },
    procedureDetailed: [
      {
        step: "Preparation",
        description: "Minimal reduction (0.5mm - 1mm) of the tooth enamel to create space for the cap.",
        duration: "30 Mins",
        painLevel: "None"
      },
      {
        step: "Digital Scan",
        description: "We scan the prepped tooth and email it to our mill wihout using sticky clay.",
        duration: "5 Mins",
        painLevel: "None"
      },
      {
        step: "Designing",
        description: "CAD software designs the new tooth anatomy.",
        duration: "Lab Process",
        painLevel: "None"
      },
      {
        step: "Bonding",
        description: "The Zirconia crown is cemented using resin cement for a permanent seal.",
        duration: "15 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Avoid sticky foods (Chewing gum) for 24 hours.",
        "Floss normally around the new crown."
      ],
      diet: [
        "Normal diet immediately.",
        "Avoid biting directly into very hard fruits (like Guava seeds) with the crown."
      ],
      warningSigns: [
        "Crown feels 'high' (hits first when biting).",
        "Sensitivity to cold persisting > 1 week."
      ]
    },
    citations: [
      "Journal of Prosthodontics: 'Success Rates of Monolithic Zirconia'",
      "3M Lava Clinical Guidelines"
    ],
    keywords: ["zirconia crown cost", "dental caps", "ceramic bridge", "tooth cap price nallagandla", "metal free crown"]
  },
  "kids-dentistry": {
    id: "kids-dentistry",
    title: "Pediatric Dentistry",
    subtitle: "Fear-free dental care for children.",
    storyHook: {
      headline: "Stop Holding Your Child Down.",
      subheadline: "Why 'Forcing' treatment creates a lifetime of phobia.",
      body: "I see parents physically restraining crying children in the dental chair. **This is trauma, not treatment.**\n\nWe do things differently. We use 'Happy Air' (Conscious Sedation). Your child breathes sweet oxygen, watches cartoons, and *giggles* while we work. They won't even remember the injection. Let's make the dentist their friend, not their nightmare.",

    },
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/pediatric-hyderabad.webp",
    description: "Specialized pediatric center offering Conscious Sedation (Laughing Gas) for anxious children.",
    longDescription: "We make dentistry fun, not scary. For children with dental anxiety, we offer 'Happy Air' (Nitrous Oxide sedation). This safe, sweet-smelling gas relaxes your child instantly, allowing us to complete fillings or extractions while they watch cartoons. No trauma, no tears.",
    stats: [
      { label: "Anxiety", value: "Zero", icon: "Smile" },
      { label: "Tech", value: "Laughing Gas", icon: "Zap" },
      { label: "Specialist", value: "Pedodontist", icon: "User" }
    ],
    process: [
      { title: "Tell-Show-Do", desc: "We explain everything in kid-friendly language." },
      { title: "Flavor Choice", desc: "Kids pick their fluoride flavor (Bubblegum/Strawberry)." },
      { title: "Happy Air", desc: "Optional mild sedation for relaxed treatment." },
      { title: "Reward", desc: "Every brave patient gets a toy and certificate." }
    ],
    benefits: [
      "Sedation Dentistry Available",
      "Fluoride Cavity Protection",
      "Painless Injection Wand",
      "Habit Breaking (Thumb Sucking)",
      "Emergency Trauma Care"
    ],

    medicalContext: {
      etiology: [
        {
          cause: "Nursing Bottle Decay",
          medicalTerm: "Early Childhood Caries",
          description: "Sleeping with a milk bottle causes sugar to pool around teeth, rotting them overnight."
        },
        {
          cause: "Deep Grooves",
          medicalTerm: "Pit & Fissure Caries",
          description: "Molars often have deep grooves where toothbrush bristles cannot reach."
        }
      ],
      investigations: [
        { name: "Airway Assessment", purpose: "Checking for tonsils/adenoids if child is a mouth breather." },
        { name: "Caries Risk Assessment", purpose: "Evaluating diet and hygiene habits." }
      ],
      prevention: [
        "Fluoride Varnish application every 6 months.",
        "Pit & Fissure Sealants for permanent molars."
      ]
    },
    procedureDetailed: [
      {
        step: "Acclimatization",
        description: "We verify if the child is comfortable or needs 'Happy Air' (Sedation).",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Happy Air Setup",
        description: "A small nose mask delivers sweet-smelling oxygen + nitrous oxide.",
        duration: "5 Mins",
        painLevel: "None"
      },
      {
        step: "Treatment",
        description: "The child watches cartoons while we painlessly complete the filling/RCT.",
        duration: "20 Mins",
        painLevel: "None"
      },
      {
        step: "Recovery",
        description: "100% Oxygen is given for 2 mins. The gas leaves the body instantly.",
        duration: "2 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Child is fully awake and can go to school immediately.",
        "Numbness may last 2 hours - watch for lip biting."
      ],
      diet: [
        "Soft diet for 2 hours.",
        "Avoid sticky candy."
      ],
      warningSigns: [
        "Lip swelling (usually due to child biting the numb lip)."
      ]
    },
    citations: [
      "AAPD: 'Guideline on Use of Nitrous Oxide for Pediatric Dental Patients'",
      "European Archives of Paediatric Dentistry"
    ],
    faqs: [
      { q: "Is sedation safe for kids?", a: "Yes, Nitrous Oxide is the safest sedative. It wears off instantly after the mask is removed, and your child walks out fully awake." },
      { q: "Bacchon ka dentist?", a: "Yes, we have a specialized pediatric dentist (Pedodontist) for children." }
    ],
    keywords: [
      "pediatric dentist nallagandla", "kids dentist near me", "painles injection for kids",
      "baby root canal treatment", "fluoride application", "chocolate teeth treatment",
      "nursing bottle caries", "thumb sucking habit breaker", "broken tooth child",
      "bacchon ka dentist", "palla doctor for kids", "best child dentist hyderabad"
    ],
    priceComparison: [
      { item: "Consultation + Cartoon Time", noblePrice: "₹ 500", marketPrice: "₹ 800" },
      { item: "Fluoride Varnish (Annual)", noblePrice: "₹ 1,200", marketPrice: "₹ 2,500" },
      { item: "Painless Extraction (Gel)", noblePrice: "₹ 1,500", marketPrice: "₹ 3,000" }
    ],
  },
  "pregnancy-dental-care": {
    id: "pregnancy-dental-care",
    title: "Prenatal Oral Wellness",
    subtitle: "Safe dental care for expecting mothers.",
    category: "Wellness",
    heroImage: "/assets/images/treatments/pregnancy-dental-hyderabad.webp",
    description: "Clinical hygiene and guidance specifically tailored for the safety of mother and baby.",
    longDescription: "Hormonal changes during pregnancy can increase the risk of gum disease. We provide specialized, fetal-safe protocols to maintain oral health during all three trimesters.",
    stats: [
      { label: "Safety", value: "Fetal Safe", icon: "ShieldCheck" },
      { label: "Protocol", value: "WHO Aligned", icon: "HeartPulse" },
      { label: "Comfort", value: "Ergonomic", icon: "Smile" }
    ],
    process: [
      { title: "Bio-Audit", desc: "Assessing gum health and hormonal impacts." },
      { title: "Safe Hygiene", desc: "Gentle cleaning to prevent prenatal gingivitis." },
      { title: "Education", desc: "Guidance on acid erosion and nutrition." }
    ],
    benefits: ["Prevents Preterm Risks", "Safe Diagnostics", "Comfort Seating", "Customized Home-Care"],
    faqs: [{ q: "Are X-rays safe?", a: "Yes, with lead-shielding and digital sensors, radiation is negligible." }],
    keywords: ["pregnant", "mom", "baby", "gums", "bleeding", "safety"]
  },
  "laser-gum-contouring": {
    id: "laser-gum-contouring",
    title: "Laser Gum Treatment (LANAP)",
    subtitle: "No-cut, no-sew laser gum therapy.",
    storyHook: {
      headline: "Stop Scrubbing Your Gums Away.",
      subheadline: "Why aggressive brushing makes gum disease worse.",
      body: "Bleeding gums are NOT normal. It is a sign of active infection eating away your jawbone.\n\nTraditional surgery involves cutting the gums and stitching them back (Painful!). We use **Biolase Lasers (LANAP)** to vaporize bacteria *without* touching healthy tissue. It’s like a magic eraser for infection."
    },
    category: "Periodontics",
    heroImage: "/assets/images/treatments/laser-gum-hyderabad.webp",
    description: "Treat gum disease and dark pigmentation with advanced diode lasers. Minimally invasive & bloodless.",
    longDescription: "Periodontitis (Gum Disease) is the #1 cause of tooth loss in adults, not cavities. Our Laser Assisted New Attachment Procedure (LANAP) triggers actual bone regeneration. We also perform Cosmetic Gum Depigmentation to turn dark/black gums into a healthy pink coral color in just one sitting.",
    stats: [
      { label: "Pain", value: "None", icon: "Smile" },
      { label: "Healing", value: "24 Hrs", icon: "Clock" },
      { label: "Tech", value: "Diode Laser", icon: "Zap" }
    ],
    process: [
      { title: "Bacterial Scan", desc: "Checking pocket depth with a probe." },
      { title: "Laser Vaporization", desc: "The laser selectively kills bad bacteria." },
      { title: "Calculus Removal", desc: "Ultrasonic cleaning of root surfaces." },
      { title: "Clot Formation", desc: "Natural sealing of the gums without stitches." }
    ],
    benefits: [
      "No Scalpels or Sutures",
      "Treats Loose Teeth",
      "Removes Black Pigmentation",
      "Safe for Diabetics",
      "Faster Healing than Flap Surgery"
    ],
    faqs: [
      { q: "Can laser treat loose teeth?", a: "Yes! LANAP promotes bone regeneration, often tightening loose teeth and saving them from extraction." },
      { q: "Is gum depigmentation permanent?", a: "Yes, removing the melanin layer (dark spots) usually gives permanent pink results, though smoking can cause recurrence." }
    ],
    keywords: ["laser gum treatment cost", "bleeding gums cure", "lanap hyderabad", "gum depigmentation cost", "laser dentist nallagandla"],
    priceComparison: [
      { item: "Laser Gum Therapy (Full Mouth)", noblePrice: "₹ 15,000", marketPrice: "₹ 25,000" },
      { item: "Cosmetic Depigmentation", noblePrice: "₹ 3,000 / Arch", marketPrice: "₹ 8,000" },
      { item: "Traditional Flap Surgery", noblePrice: "Not Done", marketPrice: "₹ 20,000 (Painful)" }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Plaque Biofilm",
          medicalTerm: "Porphyromonas gingivalis",
          description: "Sticky bacteria harden into tartar, pushing gums away from the teeth (Recession)."
        },
        {
          cause: "Smoking",
          medicalTerm: "Vasoconstriction",
          description: "Tobacco masks bleeding, allowing gum disease to progress silently until teeth fall out."
        }
      ],
      investigations: [
        { name: "Periodontal Charting", purpose: "Measuring pocket depth (mm) around every tooth." },
        { name: "OPG X-Ray", purpose: "Checking bone levels to see how much support remains." }
      ],
      prevention: [
        "Water Flosser (Robo-Floss) daily.",
        "Professional cleaning every 6 months."
      ]
    },
    procedureDetailed: [
      {
        step: "Pocket Measurement",
        description: "We map the infection severity using a detailed 6-point chart per tooth.",
        duration: "15 Mins",
        painLevel: "None"
      },
      {
        step: "Laser Decontamination",
        description: "The laser fiber enters the gum pocket and kills 99.9% of bacteria instantly.",
        duration: "20 Mins",
        painLevel: "None"
      },
      {
        step: "Deep Cleaning",
        description: "Ultrasonic instruments remove hard tartar deposits from the roots.",
        duration: "20 Mins",
        painLevel: "Mild"
      },
      {
        step: "Biostimulation",
        description: "Low-level laser therapy is used to accelerate healing and reduce growing pain.",
        duration: "5 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Do not brush the treated area for 24 hours.",
        "Rinse gently with warm salt water."
      ],
      diet: [
        "Soft foods only (Eggs, Pasta, Yogurt) for 3 days.",
        "Avoid spicy or very hot foods."
      ],
      warningSigns: [
        "Excessive bleeding that doesn't stop with pressure."
      ]
    },
    citations: [
      "AAP (American Academy of Periodontology) Guidelines",
      "Journal of Periodontology: 'LANAP vs Flap Surgery'"
    ],
    recommendedProducts: [
      {
        id: "hexidine",
        name: "Chlorhexidine Gluconate",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
        subText: "The 'Gold Standard' gum healer.",
        purpose: "Antiseptic",
        usage: "Rinse 10ml twice daily for 2 weeks.",
        isPrescription: true
      }
    ]
  },
  "tooth-extraction": {
    id: "tooth-extraction",
    title: "Atraumatic Extraction",
    subtitle: "Piezo-surgical removal with minimal swelling.",
    storyHook: {
      headline: "We Don't 'Pull' Teeth anymore.",
      subheadline: "The difference between Force vs. Physics (Piezosurgery).",
      body: "The old way? Grab with forceps and pull. The result? 5 days of swelling and pain.\n\nThe Nobel way? We use **Ultrasonic Vibrations (Piezosurgery)** to gently loosen the tooth from the bone. No hammering. No brute force. Just a clean release that heals 50% faster. Why suffer if you don't have to?"
    },
    category: "Surgery",
    heroImage: "/assets/images/treatments/extraction-hyderabad.webp",
    description: "Painless removal of decayed or impacted wisdom teeth using microsurgical instruments.",
    longDescription: "We redefine the extraction experience. Using Piezosurgery (ultrasonic bone cutting), we eliminate the trauma associated with traditional drills. This preserves the surrounding bone and soft tissue, resulting in 94% less post-operative swelling and significantly faster recovery times.",
    stats: [
      { label: "Trauma", value: "Near-Zero", icon: "Heart" },
      { label: "Planning", value: "Nerve Tracing", icon: "Scan" },
      { label: "Healing", value: "PRF Dome", icon: "Activity" }
    ],
    process: [
      { title: "3D Nerve Map", desc: "Locating sensory nerves via CBCT to ensure safety." },
      { title: "The Wand Numbing", desc: "Computer-controlled painless anesthetic delivery." },
      { title: "Ultrasonic Sectioning", desc: "Selective bone removal that avoids soft tissue." },
      { title: "Socket Preservation", desc: "Grafting or PRF placement to maintain jaw volume." }
    ],
    benefits: [
      "94% Less Post-Op Swelling",
      "Zero Risk of Nerve Damage",
      "Painless Injection Technology",
      "Socket Preservation for Implants",
      "12-Hour Priority Triage Check"
    ],
    faqs: [
      { q: "When can I eat solid food?", a: "Soft foods (Curd Rice, Idli) are safe immediately. Avoid chewing harder foods (like Roti) near the extraction site for 3-5 days to protect the blood clot." },
      { q: "How long does swelling last?", a: "Swelling peaks on Day 2 and subsides by Day 4. Our ultrasonic Piezosurgery technique reduces this swelling by 94% compared to traditional pulling." },
      { q: "When do stitches dissolve?", a: "We typically use Vicryl Rapide sutures which dissolve on their own in 7-10 days, so you don't need a separate removal visit." }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Lack of Space",
          medicalTerm: "Impaction",
          description: "The jaw is often too small for the 3rd molar, causing it to get stuck sideways (Horizontal Impaction)."
        },
        {
          cause: "Infection",
          medicalTerm: "Pericoronitis",
          description: "A flap of gum covers the half-erupted tooth, trapping food and causing severe pain/swelling."
        }
      ],
      investigations: [
        { name: "OPG (Full Mouth X-Ray)", purpose: "To see the position of all 4 wisdom teeth." },
        { name: "CBCT (If needed)", purpose: "To trace the ID Nerve canal to prevent nerve injury during surgery." }
      ],
      prevention: [
        "Early removal (age 18-25) results in faster healing than waiting until age 35+."
      ]
    },
    procedureDetailed: [
      {
        step: "Numbing",
        description: "Specific nerve block anesthesia using 'The Wand' for comfort.",
        duration: "5 Mins",
        painLevel: "Mild"
      },
      {
        step: "Access",
        description: "A small incision is made. We use Ultrasoinc Piezosurgery to gently vibrate bone away (No hammer/chisel).",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Sectioning",
        description: "The tooth is divided into pieces and removed gently to preserve jaw bone.",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Closure",
        description: "Self-dissolving stitches are placed.",
        duration: "5 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Bite on gauze for 45 mins firmly.",
        "Swallow saliva, do not spit.",
        "Apply ice pack outside."
      ],
      diet: [
        "STRICTLY Cold & Soft for 24 hours (Ice cream, Juice without straw).",
        "Curd Rice / Khichdi from Day 2.",
        "No spicy food."
      ],
      warningSigns: [
        "Severe foul smell (Dry Socket).",
        "Bleeding that doesn't stop after 1 hour of pressure."
      ]
    },
    citations: [
      "AAOMS: 'White Paper on Third Molar Management'",
      "British Journal of Oral and Maxillofacial Surgery"
    ],
    keywords: ["pain", "wisdom tooth", "remove", "surgical", "hurt", "impacted"]
  },
  "tooth-fillings": {
    id: "tooth-fillings",
    title: "Invisible Fillings",
    subtitle: "Biomimetic nano-composite restoration.",
    category: "Restorative",
    heroImage: "/assets/images/treatments/fillings-hyderabad.webp",
    description: "Nano-composite bonding that mimics your natural tooth color and strength.",
    longDescription: "We utilize biomimetic principles to 're-build' your tooth rather than just filling a hole. Using Tetric-N-Line nano-hybrid composites under rubber dam isolation, we ensure a 100% moisture-free chemical bond. This creates a restoration that flexes like natural dentin and looks like pure enamel.",
    stats: [
      { label: "Finish", value: "Mirror Polish", icon: "Sparkles" },
      { label: "Bonding", value: "ISO-Bond", icon: "Shield" },
      { label: "Isolation", value: "Rubber Dam", icon: "Zap" }
    ],
    process: [
      { title: "Strict Isolation", desc: "Rubber dam use to prevent saliva contamination." },
      { title: "Decay Removal", desc: "Magnification-guided cleanout of infected tissue." },
      { title: "Incremental Layering", desc: "Building anatomy one thin layer at a time." },
      { title: "Anatomical Sculpt", desc: "Carving fissures to match your original tooth." }
    ],
    benefits: [
      "100% Metal & Mercury Free",
      "Invisible 'Chameleon' Blending",
      "Strengthens Tooth Structure",
      "Plaque-Resistant High Polish",
      "Zero Secondary Decay Risk"
    ],
    faqs: [
      { q: "Do they look real?", a: "Yes. Our layering technique mimics the light-reflecting properties of real teeth. They are virtually invisible." },
      { q: "How long do they last?", a: "With good hygiene and regular GBT cleaning, nano-hybrid fillings can last 10-15 years." }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Sugar & Acid",
          medicalTerm: "Dental Caries",
          description: "Bacteria metabolize sugar to produce acid, which dissolves the enamel, creating a cavity."
        },
        {
          cause: "Old Silver Fillings",
          medicalTerm: "Secondary Decay",
          description: "Metal fillings shrink over time, creating gaps where bacteria enter and rot the tooth from within."
        }
      ],
      investigations: [
        { name: "Laser Cavity Detection", purpose: "Finding early decay that x-rays might miss." },
        { name: "Transillumination", purpose: "Shining light through the tooth to see cracks." }
      ],
      prevention: [
        "Reduce snacking frequency.",
        "Use high-fluoride toothpaste if you have high cavity risk."
      ]
    },
    procedureDetailed: [
      {
        step: "Clearance",
        description: "Removing the decayed portion using a high-speed sterile bur.",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Bonding",
        description: "Applying a 7th-gen adhesive (ISO-Bond) that chemically locks the filling to the tooth.",
        duration: "5 Mins",
        painLevel: "None"
      },
      {
        step: "Layering",
        description: "Placing the Tetric N-Ceram composite in 2mm layers to mimic natural dentin.",
        duration: "15 Mins",
        painLevel: "None"
      },
      {
        step: "Polishing",
        description: "Checking the bite and polishing to a diamond-like gloss.",
        duration: "5 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "You can eat immediately if anesthesia was not used.",
        "If numbed, wait 2 hours before chewing."
      ],
      diet: [
        "Avoid coffee/tea for 24 hours (staining risk on fresh filling).",
        "No sticky gum."
      ],
      warningSigns: [
        "Sharp pain when biting (High Point).",
        "Sensitivity to cold lasting > 2 weeks."
      ]
    },
    citations: [
      "Journal of Dental Research: 'Longevity of Posterior Composite Restorations'",
      "ADA Guidelines on Caries Management"
    ],
    keywords: ["cavity", "decay", "hole", "black spot", "sensitivity", "broken tooth"]
  },
  "scaling-whitening": {
    id: "scaling-whitening",
    title: "Guided Biofilm Therapy",
    subtitle: "Medical-grade hygiene and stain removal.",
    category: "Preventive",
    heroImage: "/assets/images/treatments/scaling-hyderabad.webp",
    description: "Guided Biofilm Therapy (GBT) removes calculus and stains using heated ultrasonic waves, restoring gum health painlessly.",
    longDescription: "Traditional scaling is outdated. At Noble, we use EMS AirFlow® Guided Biofilm Therapy. This 8-step protocol uses disclosure dye to visualize plaque, followed by heated water and erythritol powder to clean deep into gum pockets without touching the sensitive enamel.",
    stats: [
      { label: "Safety", value: "Enamel-Safe", icon: "Shield" },
      { label: "Stain Removal", value: "100%", icon: "Sparkles" },
      { label: "Comfort", value: "Heated Wave", icon: "Heart" }
    ],
    process: [
      { title: "Biofilm Disclosure", desc: "Dyeing plaque purple to reveal all hidden areas." },
      { title: "AirFlow Power", desc: "Removing stains and soft plaque with gentle powder." },
      { title: "Piezon Scaling", desc: "Ultrasonic wave removal of hard calculus." },
      { title: "Fluoride Finish", desc: "Protective coating to strengthen the enamel." }
    ],
    benefits: [
      "No Sharp Instruments Used",
      "Safe for Implants & Braces",
      "Instantly Brightens Smile",
      "Prevents Heart & Gum Disease",
      "Heated Water for Sensitivity"
    ],
    faqs: [
      { q: "Is it painful?", a: "GBT is designed for patients with high sensitivity. Most patients find it as relaxing as a spa treatment." },
      { q: "How often?", a: "Every 6 months is the medical recommendation to maintain a healthy oral microbiome." }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Biofilm",
          medicalTerm: "Bacterial Plaque",
          description: "A sticky film of bacteria that releases toxins, causing red, bleeding gums (Gingivitis)."
        },
        {
          cause: "Calculus",
          medicalTerm: "Tartar",
          description: "Hardened plaque that cannot be brushed off. It pushes gums away from the teeth."
        }
      ],
      investigations: [
        { name: "Periodontal Probing", purpose: "Measuring the depth of gum pockets (2-3mm is healthy)." },
        { name: "Biofilm Disclosure", purpose: "Dyeing the teeth purple to show you missed brushing spots." }
      ],
      prevention: [
        "Floss daily to disrupt colony formation.",
        "Electric toothbrush use."
      ]
    },
    procedureDetailed: [
      {
        step: "Disclosure",
        description: "We apply a dye that turns plaque purple. You see exactly where the bacteria are hiding.",
        duration: "2 Mins",
        painLevel: "None"
      },
      {
        step: "AirFlow",
        description: "A mix of warm water, air, and erythritol powder gently washes away the purple biofilm.",
        duration: "15 Mins",
        painLevel: "None"
      },
      {
        step: "Piezon Scaling",
        description: "Ultrasonic vibration removes hard tartar. The tip uses warm water for comfort.",
        duration: "10 Mins",
        painLevel: "Mild"
      },
      {
        step: "Fluoride",
        description: "A foam tray is placed to re-mineralize your enamel.",
        duration: "2 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Gums might feel slight tenderness for 2-3 hours.",
        "Teeth will feel 'gappy' as the tartar between them is gone."
      ],
      diet: [
        "Avoid spicy food for 12 hours.",
        "Resume normal diet."
      ],
      warningSigns: [
        "Severe bleeding continuing until the next day."
      ]
    },
    citations: [
      "EMS Dental: 'Guided Biofilm Therapy Protocol'",
      "Journal of Clinical Periodontology"
    ],
    keywords: ["stains", "yellow teeth", "cleaning", "bad breath", "bleeding gums", "calculus"]
  },

  // --- Migrated Legacy Content ---
  "braces": {
    id: "braces",
    title: "Braces & Orthodontics",
    subtitle: "braces treatment",
    category: "Orthodontics",
    heroImage: "/assets/images/treatments/braces-hyderabad.webp",
    description: "Correction of bite issues using self-ligating metal or ceramic braces. We follow AAO protocols for stable long-term alignment.",
    longDescription: "Our orthodontic program isn't just about straight teeth; it's about a balanced facial profile. We use Daimon Self-Ligating Braces which reduce friction, meaning less pain and faster treatment times (up to 4 months faster than traditional braces). We also offer ceramic options that blend with your natural tooth color.",
    stats: [
      { label: "Speed", value: "30% Faster", icon: "Clock" },
      { label: "Type", value: "Self-Ligating", icon: "Zap" },
      { label: "Comfort", value: "Low Friction", icon: "Heart" }
    ],
    process: [
      { title: "Digital Ceph", desc: "Bone structure analysis for precise movement planning." },
      { title: "Bonding", desc: "Placing brackets with moisture-insensitive primer." },
      { title: "Wire Seq", desc: "Progressive activation using thermal NiTi wires." },
      { title: "Retainers", desc: "Fixed bonded retainers to prevent relapse." }
    ],
    benefits: [
      "Corrects Overbite/Underbite",
      "Reduces TMJ Jaw Pain",
      "Improves Chewing Efficiency",
      "Prevents uneven tooth wear",
      "Daimon System Speed"
    ],
    faqs: [
      { q: "Are metal braces faster?", a: "Generally, yes. Self-ligating metal braces are the gold standard for complex bite corrections." },
      { q: "Do I need to extract teeth?", a: "Not always. We prioritize non-extraction expansion techniques whenever biologically possible." }
    ],
    keywords: ["braces", "orthodontics", "crooked teeth", "damon braces", "wire", "straight teeth"]
  },
  "teeth-whitening": {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    subtitle: "teeth whitening treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/whitening-hyderabad.webp",
    description: "Professional medical-grade whitening using Philips Zoom or Pola Office +. Proven to lift shades by up to 8 levels safely.",
    longDescription: "Over-the-counter kits only clean the surface. Our professional whitening penetrates the enamel rods to oxidize deep intrinsic stains from coffee, tea, or medication. We use a gingival barrier to protect your gums, ensuring zero burn and minimal sensitivity.",
    stats: [
      { label: "Shades", value: "Up to 8x", icon: "Sparkles" },
      { label: "Time", value: "45 Mins", icon: "Clock" },
      { label: "Safety", value: "Gum Shield", icon: "Shield" }
    ],
    process: [
      { title: "Gum Protection", desc: "Applying a liquid dam to cover sensitive tissues." },
      { title: "Gel Application", desc: "35% Carbamide Peroxide activated by LED light." },
      { title: "3 Cycles", desc: "Three 15-minute rounds for maximum lift." },
      { title: "Desensitizing", desc: "Fluoride paste application to seal tubules." }
    ],
    benefits: [
      "Instant Results in 1 Hour",
      "Removes Deep Coffee/Tea Stains",
      "Safe for Enamel Structure",
      "Long-Lasting (1-2 Years)",
      "Look Younger Instantly"
    ],
    faqs: [
      { q: "Will it make my teeth sensitive?", a: "Some temporary sensitivity to cold is normal for 24 hours. We provide a relief gel to manage this." },
      { q: "Does it damage enamel?", a: "No. Professional whitening opens pores to clean them but does not strip the enamel layer." }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Food Stains",
          medicalTerm: "Extrinsic Discoloration",
          description: "Coffee, Tea, Turmeric (Haldi), and Wine leave pigments on the enamel surface."
        },
        {
          cause: "Aging",
          medicalTerm: "Intrinsic Yellowing",
          description: "As we age, enamel gets thinner, and the yellow dentin underneath shows through more."
        }
      ],
      investigations: [
        { name: "Shade Analysis", purpose: "Measuring your current shade (e.g., A3) to benchmark improvement." }
      ],
      prevention: [
        "Rinse with water after drinking coffee.",
        "Use a straw for acidic drinks."
      ]
    },
    procedureDetailed: [
      {
        step: "Gum Barrier",
        description: "We paint a protective layer over your gums so the whitening gel touches ONLY your teeth.",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Activation",
        description: "High-concentration gel is applied and activated with a blue LED light to speed up oxidation.",
        duration: "15 Mins x 3 Cycles",
        painLevel: "None"
      },
      {
        step: "Rehydration",
        description: "A desensitizing paste is applied to seal specific pores.",
        duration: "5 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Avoid 'Colored Foods' (Haldi, Red Wine, Coffee) for 48 hours.",
        "Teeth pores are open - they will absorb any color you eat now!"
      ],
      diet: [
        "White Diet: Rice, Curd, Chicken, Milk, Bread.",
        "No Sambar/Rasam for 2 days."
      ],
      warningSigns: [
        " sharp 'zinging' sensation (Use desensitizing toothpaste)."
      ]
    },
    citations: [
      "ADA Statement on Safety of Tooth Whitening",
      "Operative Dentistry Journal"
    ],
    keywords: ["teeth whitening", "bleaching", "yellow teeth", "zoom whitening", "bright smile"]
  },
  "veneers": {
    id: "veneers",
    title: "Dental Veneers",
    subtitle: "veneers treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/veneers-hyderabad.webp",
    description: "Ultra-thin E.max porcelain shells that cover the front surface of teeth to mask discoloration, gaps, or chips perfectly.",
    longDescription: "Veneers are the secret behind Hollywood smiles. We use Lithium Disilicate (E.max) ceramic, which is 4x stronger than traditional porcelain. Dr. Thikvijay uses Digital Smile Design to plan the shape and color, allowing us to preserve your natural tooth structure (minimal prep) while delivering a flawless transformation.",
    stats: [
      { label: "Material", value: "E.max Press", icon: "Shield" },
      { label: "Thickness", value: "0.3mm", icon: "Ruler" },
      { label: "Warranty", value: "15 Years", icon: "Star" }
    ],
    process: [
      { title: "Digital Mockup", desc: "Test drive your smile with temporary potential." },
      { title: "Minimal Prep", desc: "Removing <0.5mm enamel for bonding space." },
      { title: "Shade Match", desc: "Custom staining to match your skin tone." },
      { title: "Final Bonding", desc: "Permanent adhesion with resin cement." }
    ],
    benefits: [
      "Stain-Proof Ceramic Surface",
      "Closes Gaps (Diastema)",
      "Fixes Chipped/Worn Edges",
      "Permanent Whitening Solution",
      "Symmetry Correction"
    ],
    faqs: [
      { q: "Do you shave my teeth down?", a: "Minimal preparation is needed (less than a fingernail's thickness) to ensure the veneers don't look bulky." },
      { q: "Can they break?", a: "They are extremely strong once bonded. However, you should avoid opening bottles with your teeth!" }
    ],
    medicalContext: {
      etiology: [
        {
          cause: "Chipped Teeth",
          medicalTerm: "Enamel Fracture",
          description: "Small breaks in front teeth that ruin the symmetry of the smile."
        },
        {
          cause: "Permanent Stains",
          medicalTerm: "Fluorosis/Tetracycline",
          description: "Deep internal stains that cannot be removed by whitening need to be covered."
        }
      ],
      investigations: [
        { name: "Digital Smile Design (DSD)", purpose: "Designing the perfect shape digitally before touching the tooth." },
        { name: "Mockup Trial", purpose: "Trying on temporary plastic veneers to approve the look." }
      ],
      prevention: [
        "Avoid using teeth as tools (opening packets)."
      ]
    },
    procedureDetailed: [
      {
        step: "Design & Mockup",
        description: "We place a temporary 'Test Drive' smile. You wear it for a few days to see if you like it.",
        duration: "30 Mins",
        painLevel: "None"
      },
      {
        step: "Preparation",
        description: "Extremely minimal polishing (0.3mm) of the front surface. Sometimes no prep is needed.",
        duration: "45 Mins",
        painLevel: "None"
      },
      {
        step: "Bonding",
        description: "The ceramic shell is permanently fused to your tooth. It becomes part of your enamel strength.",
        duration: "60 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "Gums needs 2 days to adapt to the new shape.",
        "Your bite might feel 'different' initially."
      ],
      diet: [
        "Eat whatever you want.",
        "Just don't bite highly resistant things (Crab shells, Metal caps)."
      ],
      warningSigns: [
        "Rough spot that catches the tongue (Easily polished)."
      ]
    },
    citations: [
      "AACD (American Academy of Cosmetic Dentistry) Guidelines",
      "Journal of Esthetic and Restorative Dentistry"
    ],
    keywords: ["veneers", "laminates", "smile design", "hollywood smile", "front teeth gap"]
  },
  "smile-design": {
    id: "smile-design",
    title: "Smile Designing",
    subtitle: "smile design treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/smile-design-hyderabad.webp",
    description: "Customized smile design with veneers, crowns, and whitening. Cited from AACD.",
    longDescription: "Customized smile design with veneers, crowns, and whitening. Cited from AACD. Improves facial aesthetics. Tailored to each patient",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves facial aesthetics", "Tailored to each patient"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["smile design", "cosmetic", "veneers", "crowns", "Hyderabad", "celebrity smile", "CEO makeovers"]
  },
  "dentures": {
    id: "dentures",
    title: "Dentures",
    subtitle: "dentures treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/dentures-hyderabad.webp",
    description: "Replace missing teeth with removable or fixed dentures. Aligned with Prosthodontic Society.",
    longDescription: "Replace missing teeth with removable or fixed dentures. Aligned with Prosthodontic Society. Affordable solution. Restores chewing ability",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Affordable solution", "Restores chewing ability"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dentures", "missing teeth", "removable", "prosthesis", "Hyderabad"]
  },
  "preventive-dentistry": {
    id: "preventive-dentistry",
    title: "Preventive Dentistry",
    subtitle: "preventive treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/preventive-hyderabad.webp",
    description: "Focused on fluoride treatments, sealants, and oral hygiene programs. Based on WHO guidelines.",
    longDescription: "Focused on fluoride treatments, sealants, and oral hygiene programs. Based on WHO guidelines. Prevents cavities. Reduces treatment needs",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents cavities", "Reduces treatment needs"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["preventive", "fluoride", "sealants", "oral hygiene", "Hyderabad"]
  },
  "oral-prophylaxis": {
    id: "oral-prophylaxis",
    title: "Oral Prophylaxis",
    subtitle: "oral prophylaxis treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-prophylaxis-hyderabad.webp",
    description: "Deep cleaning and scaling to maintain gum health. Supported by Periodontic Guidelines.",
    longDescription: "Deep cleaning and scaling to maintain gum health. Supported by Periodontic Guidelines. Removes plaque and tartar. Prevents gum disease",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Removes plaque and tartar", "Prevents gum disease"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["oral prophylaxis", "cleaning", "scaling", "Hyderabad"]
  },
  "wisdom-tooth-surgery": {
    id: "wisdom-tooth-surgery",
    title: "Wisdom Tooth Surgery",
    subtitle: "wisdom tooth treatment",
    category: "Surgery",
    heroImage: "/assets/images/treatments/wisdom-tooth-hyderabad.webp",
    description: "Specialized removal of impacted wisdom teeth. Supported by Oral & Maxillofacial Surgery Assoc.",
    longDescription: "Specialized removal of impacted wisdom teeth. Supported by Oral & Maxillofacial Surgery Assoc. Reduces swelling and pain. Prevents misalignment",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Reduces swelling and pain", "Prevents misalignment"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["wisdom tooth", "extraction", "oral surgery", "Hyderabad"]
  },
  "gum-disease": {
    id: "gum-disease",
    title: "Gum Disease Treatment",
    subtitle: "gum disease treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/gum-disease-hyderabad.webp",
    description: "Treat gingivitis and periodontitis with scaling, root planing, and medication. Supported by AAP.",
    longDescription: "Treat gingivitis and periodontitis with scaling, root planing, and medication. Supported by AAP. Stops gum bleeding. Prevents bone loss",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Stops gum bleeding", "Prevents bone loss"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["gum disease", "periodontitis", "bleeding gums", "scaling", "Hyderabad"]
  },
  "scaling-polishing": {
    id: "scaling-polishing",
    title: "Scaling & Polishing",
    subtitle: "scaling treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/scaling-hyderabad.webp",
    description: "Professional dental cleaning & polishing for stain removal. Supported by IDA.",
    longDescription: "Professional dental cleaning & polishing for stain removal. Supported by IDA. Freshens breath. Prevents tartar buildup",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Freshens breath", "Prevents tartar buildup"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["scaling", "polishing", "teeth cleaning", "Hyderabad"]
  },
  "dental-fillings": {
    id: "dental-fillings",
    title: "Dental Fillings",
    subtitle: "dental fillings treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/fillings-hyderabad.webp",
    description: "Restore cavities with tooth-colored composite fillings. Supported by ADA.",
    longDescription: "Restore cavities with tooth-colored composite fillings. Supported by ADA. Matches natural teeth. Prevents further decay",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Matches natural teeth", "Prevents further decay"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    medicalContext: {
      etiology: [
        {
          cause: "Sugar & Acid",
          medicalTerm: "Dental Caries",
          description: "Bacteria metabolize sugar to produce acid, which dissolves the enamel, creating a cavity."
        },
        {
          cause: "Old Silver Fillings",
          medicalTerm: "Secondary Decay",
          description: "Metal fillings shrink over time, creating gaps where bacteria enter and rot the tooth from within."
        }
      ],
      investigations: [
        { name: "Laser Cavity Detection", purpose: "Finding early decay that x-rays might miss." },
        { name: "Transillumination", purpose: "Shining light through the tooth to see cracks." }
      ],
      prevention: [
        "Reduce snacking frequency.",
        "Use high-fluoride toothpaste if you have high cavity risk."
      ]
    },
    procedureDetailed: [
      {
        step: "Clearance",
        description: "Removing the decayed portion using a high-speed sterile bur.",
        duration: "10 Mins",
        painLevel: "None"
      },
      {
        step: "Bonding",
        description: "Applying a 7th-gen adhesive (ISO-Bond) that chemically locks the filling to the tooth.",
        duration: "5 Mins",
        painLevel: "None"
      },
      {
        step: "Layering",
        description: "Placing the Tetric N-Ceram composite in 2mm layers to mimic natural dentin.",
        duration: "15 Mins",
        painLevel: "None"
      },
      {
        step: "Polishing",
        description: "Checking the bite and polishing to a diamond-like gloss.",
        duration: "5 Mins",
        painLevel: "None"
      }
    ],
    postOp: {
      immediate: [
        "You can eat immediately if anesthesia was not used.",
        "If numbed, wait 2 hours before chewing."
      ],
      diet: [
        "Avoid coffee/tea for 24 hours (staining risk on fresh filling).",
        "No sticky gum."
      ],
      warningSigns: [
        "Sharp pain when biting (High Point).",
        "Sensitivity to cold lasting > 2 weeks."
      ]
    },
    citations: [
      "Journal of Dental Research: 'Longevity of Posterior Composite Restorations'",
      "ADA Guidelines on Caries Management"
    ],
    keywords: ["dental fillings", "composite", "cavity treatment", "Hyderabad"]
  },
  "cosmetic-bonding": {
    id: "cosmetic-bonding",
    title: "Cosmetic Bonding",
    subtitle: "cosmetic bonding treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/bonding-hyderabad.webp",
    description: "Repair minor chips and gaps with cosmetic composite bonding. Backed by AACD.",
    longDescription: "Repair minor chips and gaps with cosmetic composite bonding. Backed by AACD. Quick and affordable. Natural aesthetics",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Quick and affordable", "Natural aesthetics"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["cosmetic bonding", "chipped teeth", "smile design", "Hyderabad"]
  },
  "full-mouth-rehab": {
    id: "full-mouth-rehab",
    title: "Full Mouth Rehabilitation",
    subtitle: "full mouth rehabilitation treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/full-mouth-hyderabad.webp",
    description: "Comprehensive restoration using implants, crowns, and bridges. Cited from Prosthodontics.",
    longDescription: "Comprehensive restoration using implants, crowns, and bridges. Cited from Prosthodontics. Complete smile makeover. Restores chewing ability",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Complete smile makeover", "Restores chewing ability"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["full mouth rehabilitation", "implants", "crowns", "Hyderabad"]
  },
  "cosmetic-dentistry": {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    subtitle: "cosmetic dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/cosmetic-dentistry-hyderabad.webp",
    description: "Enhance your smile with veneers, bonding, and whitening. Supported by AACD.",
    longDescription: "Enhance your smile with veneers, bonding, and whitening. Supported by AACD. Improves smile confidence. Customized treatment plans",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves smile confidence", "Customized treatment plans"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["cosmetic dentistry", "smile design", "veneers", "whitening", "Hyderabad"]
  },
  "orthognathic-surgery": {
    id: "orthognathic-surgery",
    title: "Orthognathic Surgery",
    subtitle: "orthognathic surgery treatment",
    category: "Surgery",
    heroImage: "/assets/images/treatments/orthognathic-hyderabad.webp",
    description: "Correct jaw irregularities and facial symmetry. Aligned with OMS protocols.",
    longDescription: "Correct jaw irregularities and facial symmetry. Aligned with OMS protocols. Improves chewing & breathing. Enhances facial aesthetics",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves chewing & breathing", "Enhances facial aesthetics"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["orthognathic surgery", "jaw surgery", "facial correction", "Hyderabad"]
  },
  "maxillofacial-surgery": {
    id: "maxillofacial-surgery",
    title: "Maxillofacial Surgery",
    subtitle: "maxillofacial surgery treatment",
    category: "Surgery",
    heroImage: "/assets/images/treatments/maxillofacial-hyderabad.webp",
    description: "Specialized care for facial trauma, fractures, and jaw corrections. Supported by IAOMS.",
    longDescription: "Specialized care for facial trauma, fractures, and jaw corrections. Supported by IAOMS. Expert trauma management. Restores function & aesthetics",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Expert trauma management", "Restores function & aesthetics"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["maxillofacial surgery", "trauma", "jaw fracture", "Hyderabad"]
  },
  "dental-tourism": {
    id: "dental-tourism",
    title: "Dental Tourism",
    subtitle: "dental tourism treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/dental-tourism-hyderabad.webp",
    description: "Comprehensive dental care for international patients. Recognized by Medical Tourism Assoc..",
    longDescription: "Comprehensive dental care for international patients. Recognized by Medical Tourism Assoc.. Cost-effective treatments. World-class facilities",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Cost-effective treatments", "World-class facilities"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental tourism", "international patients", "affordable dentistry", "Hyderabad"]
  },
  "tmj-disorders": {
    id: "tmj-disorders",
    title: "TMJ Disorder Treatment",
    subtitle: "TMJ disorders treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/tmj-hyderabad.webp",
    description: "Relief for jaw pain, clicking, and TMJ dysfunction. Cited from AAOMS.",
    longDescription: "Relief for jaw pain, clicking, and TMJ dysfunction. Cited from AAOMS. Pain management. Bite correction therapy",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Pain management", "Bite correction therapy"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["TMJ disorders", "jaw pain", "clicking jaw", "Hyderabad"]
  },
  "oral-cancer-screening": {
    id: "oral-cancer-screening",
    title: "Oral Cancer Screening",
    subtitle: "oral cancer screening treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-cancer-hyderabad.webp",
    description: "Early detection of oral cancer & precancerous lesions. Recommended by WHO.",
    longDescription: "Early detection of oral cancer & precancerous lesions. Recommended by WHO. Detects early changes. Life-saving diagnosis",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Detects early changes", "Life-saving diagnosis"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["oral cancer screening", "early detection", "mouth lesions", "Hyderabad"]
  },
  "sedation-dentistry": {
    id: "sedation-dentistry",
    title: "Sedation Dentistry",
    subtitle: "sedation dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/sedation-hyderabad.webp",
    description: "Stress-free dentistry with conscious sedation & anesthesia. Supported by ASA.",
    longDescription: "Stress-free dentistry with conscious sedation & anesthesia. Supported by ASA. Anxiety-free treatment. Safe for complex cases",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Anxiety-free treatment", "Safe for complex cases"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["sedation dentistry", "painless dental", "anxiety free", "Hyderabad"]
  },
  "laser-dentistry": {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    subtitle: "laser dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/laser-dentistry-hyderabad.webp",
    description: "Advanced painless treatment for gums and soft tissues. Backed by AAP.",
    longDescription: "Advanced painless treatment for gums and soft tissues. Backed by AAP. Minimal bleeding. Faster healing",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Minimal bleeding", "Faster healing"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["laser dentistry", "painless treatment", "gum surgery", "Hyderabad"]
  },
  "emergency-trauma": {
    id: "emergency-trauma",
    title: "Emergency Dentistry",
    subtitle: "emergency dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/emergency-hyderabad.webp",
    description: "24├ù7 urgent care for pain, swelling, and trauma. Supported by IDA.",
    longDescription: "24├ù7 urgent care for pain, swelling, and trauma. Supported by IDA. Immediate pain relief. Expert trauma care",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Immediate pain relief", "Expert trauma care"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["emergency dentistry", "urgent dental care", "24x7", "Hyderabad"]
  },
  "pediatric-pulp": {
    id: "pediatric-pulp",
    title: "Pediatric Pulp Therapy",
    subtitle: "pediatric pulp therapy treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/pediatric-pulp-hyderabad.webp",
    description: "Pulpotomy and pulpectomy for infected primary teeth. Recommended by AAPD.",
    longDescription: "Pulpotomy and pulpectomy for infected primary teeth. Recommended by AAPD. Saves baby teeth. Prevents misalignment",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Saves baby teeth", "Prevents misalignment"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pediatric pulp therapy", "pulpotomy", "pulpectomy", "kids dentistry", "Hyderabad"]
  },
  "fluoride-therapy": {
    id: "fluoride-therapy",
    title: "Fluoride Therapy",
    subtitle: "fluoride therapy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/fluoride-therapy-hyderabad.webp",
    description: "Protects teeth from cavities with professional fluoride application. Backed by WHO, AAPD.",
    longDescription: "Protects teeth from cavities with professional fluoride application. Backed by WHO, AAPD. Strengthens enamel. Prevents early decay",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Strengthens enamel", "Prevents early decay"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["fluoride therapy", "cavity prevention", "kids dentistry", "Hyderabad"]
  },
  "dental-sealants": {
    id: "dental-sealants",
    title: "Dental Sealants",
    subtitle: "dental sealants treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/dental-sealants-hyderabad.webp",
    description: "Thin protective sealants on molars to prevent cavities in children. Endorsed by AAPD, CDC.",
    longDescription: "Thin protective sealants on molars to prevent cavities in children. Endorsed by AAPD, CDC. Shields deep grooves from decay. Quick & painless for kids",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Shields deep grooves from decay", "Quick & painless for kids"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental sealants", "cavity prevention", "kids teeth", "Hyderabad"]
  },
  "space-maintainers": {
    id: "space-maintainers",
    title: "Space Maintainers",
    subtitle: "space maintainers treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/space-maintainers-hyderabad.webp",
    description: "Preserve alignment when baby teeth are lost early. Supported by AAPD.",
    longDescription: "Preserve alignment when baby teeth are lost early. Supported by AAPD. Prevents crooked permanent teeth. Helps proper jaw development",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents crooked permanent teeth", "Helps proper jaw development"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["space maintainers", "kids dentistry", "early orthodontics", "Hyderabad"]
  },
  "habit-breaking": {
    id: "habit-breaking",
    title: "Habit Breaking Appliances",
    subtitle: "habit breaking appliances treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/habit-breaking-hyderabad.webp",
    description: "Correct harmful habits like thumb sucking & tongue thrusting. Backed by AAPD.",
    longDescription: "Correct harmful habits like thumb sucking & tongue thrusting. Backed by AAPD. Prevents open bite. Supports normal growth",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents open bite", "Supports normal growth"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["habit breaking appliances", "thumb sucking", "tongue thrust", "kids", "Hyderabad"]
  },
  "mouthguards": {
    id: "mouthguards",
    title: "Mouthguards for Sports",
    subtitle: "sports dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/mouthguards-hyderabad.webp",
    description: "Custom-fitted sports mouthguards to prevent dental injuries. Recommended by ADA.",
    longDescription: "Custom-fitted sports mouthguards to prevent dental injuries. Recommended by ADA. Protects from fractures. Essential for athletes",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Protects from fractures", "Essential for athletes"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["sports dentistry", "mouthguards", "injury prevention", "Hyderabad"]
  },
  "night-guards": {
    id: "night-guards",
    title: "Night Guards for Bruxism",
    subtitle: "night guards treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/night-guards-hyderabad.webp",
    description: "Prevent damage from teeth grinding & clenching. Cited by NIDCR.",
    longDescription: "Prevent damage from teeth grinding & clenching. Cited by NIDCR. Reduces jaw strain. Protects enamel from wear",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Reduces jaw strain", "Protects enamel from wear"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["night guards", "bruxism", "teeth grinding", "Hyderabad"]
  },
  "sleep-apnea": {
    id: "sleep-apnea",
    title: "Sleep Apnea Dentistry",
    subtitle: "sleep apnea treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/sleep-apnea-hyderabad.webp",
    description: "Oral appliances to treat sleep apnea & chronic snoring. Supported by AASM.",
    longDescription: "Oral appliances to treat sleep apnea & chronic snoring. Supported by AASM. Improves sleep quality. Non-invasive therapy",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves sleep quality", "Non-invasive therapy"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["sleep apnea", "dental appliances", "snoring treatment", "Hyderabad"]
  },
  "dental-checkups": {
    id: "dental-checkups",
    title: "Comprehensive Dental Checkups",
    subtitle: "dental checkup treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/preventive-hyderabad.webp",
    description: "Preventive oral exams & digital diagnostics. Recommended by ADA.",
    longDescription: "Preventive oral exams & digital diagnostics. Recommended by ADA. Detects problems early. Maintains lifelong oral health",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Detects problems early", "Maintains lifelong oral health"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental checkup", "routine dental exam", "preventive dentistry", "Hyderabad"]
  },
  "digital-dentistry": {
    id: "digital-dentistry",
    title: "Digital Dentistry",
    subtitle: "digital dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/digital-dentistry-hyderabad.webp",
    description: "Cutting-edge 3D scans, CAD/CAM crowns, and digital impressions. Backed by IDDA.",
    longDescription: "Cutting-edge 3D scans, CAD/CAM crowns, and digital impressions. Backed by IDDA. Precision & accuracy. Faster turnaround",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Precision & accuracy", "Faster turnaround"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["digital dentistry", "3D scans", "CAD CAM crowns", "Hyderabad"]
  },
  "intraoral-scans": {
    id: "intraoral-scans",
    title: "Intraoral Scans",
    subtitle: "intraoral scans treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/intraoral-scans-hyderabad.webp",
    description: "Comfortable digital 3D scans to replace messy impressions. Backed by IDDA.",
    longDescription: "Comfortable digital 3D scans to replace messy impressions. Backed by IDDA. High precision models. No gag reflex",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["High precision models", "No gag reflex"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["intraoral scans", "3D dental scan", "digital impressions", "Hyderabad"]
  },
  "fluoride-treatment": {
    id: "fluoride-treatment",
    title: "Fluoride Treatment",
    subtitle: "fluoride treatment treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/fluoride-hyderabad.webp",
    description: "Strengthen teeth & reduce cavities and sensitivity. Endorsed by CDC, WHO.",
    longDescription: "Strengthen teeth & reduce cavities and sensitivity. Endorsed by CDC, WHO. Protects against decay. Safe & effective for all ages",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Protects against decay", "Safe & effective for all ages"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["fluoride treatment", "cavity prevention", "tooth sensitivity", "Hyderabad"],
    recommendedProducts: [
      {
        id: "shy-nm-foam",
        name: "SHY-NM Tooth Sensitivity Foam",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
        subText: "Bioactive glass for instant sensitivity relief.",
        purpose: "Sensitivity Relief",
        usage: "Apply foam, leave for 2 mins, spit out.",
        isPrescription: false
      },
      {
        id: "enafix-cream",
        name: "Enafix Remineralising Cream",
        image: "https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&q=80&w=400",
        subText: "Rehardens weak enamel.",
        purpose: "Enamel Repair",
        usage: "Massage pea-sized amount nightly.",
        isPrescription: false
      }
    ]
  },
  "nutritional-counseling": {
    id: "nutritional-counseling",
    title: "Nutritional Counseling for Oral Health",
    subtitle: "nutritional counseling treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/nutritional-counseling-hyderabad.webp",
    description: "Guidance on diet for cavity & gum prevention. Backed by WHO, CDC.",
    longDescription: "Guidance on diet for cavity & gum prevention. Backed by WHO, CDC. Reduces sugar-related decay. Improves gum healing",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Reduces sugar-related decay", "Improves gum healing"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["nutritional counseling", "oral health diet", "preventive dentistry", "Hyderabad"]
  },
  "tobacco-cessation": {
    id: "tobacco-cessation",
    title: "Tobacco Cessation Counseling",
    subtitle: "tobacco cessation treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/tobacco-cessation-hyderabad.webp",
    description: "Support to quit smoking & chewing tobacco. Cited by WHO, CDC.",
    longDescription: "Support to quit smoking & chewing tobacco. Cited by WHO, CDC. Reduces oral cancer risk. Improves gum health",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Reduces oral cancer risk", "Improves gum health"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["tobacco cessation", "quit smoking", "oral cancer prevention", "Hyderabad"]
  },
  "pediatric-preventive": {
    id: "pediatric-preventive",
    title: "Pediatric Preventive Care",
    subtitle: "pediatric preventive care treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/preventive-hyderabad.webp",
    description: "Kids-friendly preventive dental care. Endorsed by AAPD.",
    longDescription: "Kids-friendly preventive dental care. Endorsed by AAPD. Fluoride, sealants & regular exams. Builds healthy oral habits",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Fluoride, sealants & regular exams", "Builds healthy oral habits"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pediatric preventive care", "kids dentistry", "cavity prevention", "Hyderabad"]
  },
  "pediatric-pulp-therapy": {
    id: "pediatric-pulp-therapy",
    title: "Pediatric Pulp Therapy",
    subtitle: "pediatric pulp therapy treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/pediatric-pulp-hyderabad.webp",
    description: "Treat infected baby teeth with pulpotomy & pulpectomy. Supported by AAPD.",
    longDescription: "Treat infected baby teeth with pulpotomy & pulpectomy. Supported by AAPD. Preserves baby teeth till natural shedding. Relieves pain & infection",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Preserves baby teeth till natural shedding", "Relieves pain & infection"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pediatric pulp therapy", "kids root canal", "pulpotomy", "Hyderabad"]
  },
  "interceptive-ortho": {
    id: "interceptive-ortho",
    title: "Interceptive Orthodontics",
    subtitle: "interceptive orthodontics treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/braces-hyderabad.webp",
    description: "Early braces to correct developing bite problems. Endorsed by AAO.",
    longDescription: "Early braces to correct developing bite problems. Endorsed by AAO. Prevents severe misalignment. Improves jaw growth",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents severe misalignment", "Improves jaw growth"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["interceptive orthodontics", "early braces", "kids orthodontics", "Hyderabad"]
  },
  "myofunctional-therapy": {
    id: "myofunctional-therapy",
    title: "Myofunctional Therapy",
    subtitle: "myofunctional therapy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/pediatric-hyderabad.webp",
    description: "Exercises & appliances for tongue, lips & jaw alignment. Supported by AAO.",
    longDescription: "Exercises & appliances for tongue, lips & jaw alignment. Supported by AAO. Corrects tongue thrusting. Enhances orthodontic results",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Corrects tongue thrusting", "Enhances orthodontic results"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["myofunctional therapy", "oral habits", "kids orthodontics", "Hyderabad"]
  },
  "early-childhood-caries": {
    id: "early-childhood-caries",
    title: "Early Childhood Caries Treatment",
    subtitle: "early childhood caries treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/pediatric-hyderabad.webp",
    description: "Specialized care for tooth decay in infants & toddlers. Backed by AAPD.",
    longDescription: "Specialized care for tooth decay in infants & toddlers. Backed by AAPD. Restores baby teeth. Prevents long-term damage",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Restores baby teeth", "Prevents long-term damage"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["early childhood caries", "ECC treatment", "baby teeth cavities", "Hyderabad"]
  },
  "pediatric-crowns": {
    id: "pediatric-crowns",
    title: "Pediatric Dental Crowns",
    subtitle: "pediatric crowns treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/pediatric-hyderabad.webp",
    description: "Durable stainless steel or zirconia crowns for kidsΓÇÖ teeth. Endorsed by AAPD.",
    longDescription: "Durable stainless steel or zirconia crowns for kidsΓÇÖ teeth. Endorsed by AAPD. Protects treated baby teeth. Restores chewing & aesthetics",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Protects treated baby teeth", "Restores chewing & aesthetics"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pediatric crowns", "stainless steel crowns", "baby teeth restoration", "Hyderabad"]
  },
  "habit-appliances": {
    id: "habit-appliances",
    title: "Habit Breaking Appliances",
    subtitle: "habit breaking appliances treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/habit-appliances-hyderabad.webp",
    description: "Correct thumb sucking & tongue thrusting habits. Backed by AAPD.",
    longDescription: "Correct thumb sucking & tongue thrusting habits. Backed by AAPD. Prevents open bite. Improves speech & bite",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents open bite", "Improves speech & bite"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["habit breaking appliances", "thumb sucking", "tongue thrusting", "Hyderabad"]
  },
  "pulpotomy": {
    id: "pulpotomy",
    title: "Pulpotomy",
    subtitle: "pulpotomy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/pediatric-pulp-hyderabad.webp",
    description: "Partial root canal for infected baby teeth. Supported by AAPD.",
    longDescription: "Partial root canal for infected baby teeth. Supported by AAPD. Preserves tooth structure. Quick relief for kids",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Preserves tooth structure", "Quick relief for kids"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pulpotomy", "pediatric root canal", "baby tooth pain relief", "Hyderabad"]
  },
  "pulpectomy": {
    id: "pulpectomy",
    title: "Pulpectomy",
    subtitle: "pulpectomy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/pediatric-pulp-hyderabad.webp",
    description: "Complete root canal for baby teeth. Endorsed by AAPD.",
    longDescription: "Complete root canal for baby teeth. Endorsed by AAPD. Treats severe infection. Prevents abscess & swelling",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Treats severe infection", "Prevents abscess & swelling"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pulpectomy", "pediatric dentistry", "infected baby teeth", "Hyderabad"]
  },
  "pediatric-extractions": {
    id: "pediatric-extractions",
    title: "Pediatric Extractions",
    subtitle: "pediatric extractions treatment",
    category: "Surgery",
    heroImage: "/assets/images/treatments/extraction-hyderabad.webp",
    description: "Safe, gentle tooth removal for kids when needed. Backed by AAPD.",
    longDescription: "Safe, gentle tooth removal for kids when needed. Backed by AAPD. Used only when necessary. Ensures permanent teeth alignment",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Used only when necessary", "Ensures permanent teeth alignment"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pediatric extractions", "kids tooth removal", "safe extraction", "Hyderabad"]
  },
  "smile-designing": {
    id: "smile-designing",
    title: "Smile Designing",
    subtitle: "smile designing treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/smile-design-hyderabad.webp",
    description: "Advanced digital smile makeover with AI-guided planning. Backed by AACD.",
    longDescription: "Advanced digital smile makeover with AI-guided planning. Backed by AACD. Try-on digital smile before treatment. Personalized aesthetics",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Try-on digital smile before treatment", "Personalized aesthetics"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["smile designing", "digital smile design", "cosmetic dentistry", "Hyderabad"]
  },
  "gum-depigmentation": {
    id: "gum-depigmentation",
    title: "Gum Depigmentation",
    subtitle: "gum depigmentation treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/gum-disease-hyderabad.webp",
    description: "Laser treatment for pink, healthy-looking gums. Supported by AAP.",
    longDescription: "Laser treatment for pink, healthy-looking gums. Supported by AAP. Safe & minimally invasive. Improves smile aesthetics",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Safe & minimally invasive", "Improves smile aesthetics"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["gum depigmentation", "pink gums", "laser gum lightening", "Hyderabad"]
  },
  "crown-lengthening": {
    id: "crown-lengthening",
    title: "Crown Lengthening",
    subtitle: "crown lengthening treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/gum-disease-hyderabad.webp",
    description: "Reshape gums & bone for crown fitting or gummy smile. Supported by AAP.",
    longDescription: "Reshape gums & bone for crown fitting or gummy smile. Supported by AAP. Improves tooth visibility. Essential for some restorations",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves tooth visibility", "Essential for some restorations"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["crown lengthening", "gummy smile correction", "periodontal surgery", "Hyderabad"]
  },
  "ridge-augmentation": {
    id: "ridge-augmentation",
    title: "Ridge Augmentation",
    subtitle: "ridge augmentation treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/implants-hyderabad.webp",
    description: "Bone grafting to rebuild jaw for implants. Supported by ITI.",
    longDescription: "Bone grafting to rebuild jaw for implants. Supported by ITI. Improves implant stability. Restores natural jawline",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves implant stability", "Restores natural jawline"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["ridge augmentation", "bone graft", "dental implants", "Hyderabad"]
  },
  "sinus-lift": {
    id: "sinus-lift",
    title: "Sinus Lift Surgery",
    subtitle: "sinus lift treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/implants-hyderabad.webp",
    description: "Add bone in upper jaw for implant placement. Supported by ITI.",
    longDescription: "Add bone in upper jaw for implant placement. Supported by ITI. Restores bone near sinus. Increases implant success",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Restores bone near sinus", "Increases implant success"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["sinus lift", "bone graft", "dental implant surgery", "Hyderabad"]
  },
  "bone-grafting": {
    id: "bone-grafting",
    title: "Bone Grafting",
    subtitle: "bone grafting treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/implants-hyderabad.webp",
    description: "Rebuild jawbone with graft materials for implants. Endorsed by ITI.",
    longDescription: "Rebuild jawbone with graft materials for implants. Endorsed by ITI. Restores lost bone volume. Improves oral function",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Restores lost bone volume", "Improves oral function"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["bone grafting", "jawbone regeneration", "implant support", "Hyderabad"]
  },
  "apicoectomy": {
    id: "apicoectomy",
    title: "Apicoectomy",
    subtitle: "apicoectomy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/root-canal-hyderabad.webp",
    description: "Root-end microsurgery for persistent infection. Backed by AAE.",
    longDescription: "Root-end microsurgery for persistent infection. Backed by AAE. Saves tooth after failed RCT. Minimally invasive procedure",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Saves tooth after failed RCT", "Minimally invasive procedure"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["apicoectomy", "root end surgery", "failed root canal", "Hyderabad"]
  },
  "cleft-care": {
    id: "cleft-care",
    title: "Cleft Lip & Palate Care",
    subtitle: "cleft lip treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/cleft-care-hyderabad.webp",
    description: "Multidisciplinary care for cleft lip & palate children. Supported by CDC, WHO.",
    longDescription: "Multidisciplinary care for cleft lip & palate children. Supported by CDC, WHO. Restores function & aesthetics. Improves speech development",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Restores function & aesthetics", "Improves speech development"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["cleft lip", "cleft palate", "pediatric oral surgery", "Hyderabad"]
  },
  "tmj-therapy": {
    id: "tmj-therapy",
    title: "TMJ / TMD Therapy",
    subtitle: "tmj treatment treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/tmj-therapy-hyderabad.webp",
    description: "Relief for jaw joint pain, clicking & headaches. Supported by AAOMS.",
    longDescription: "Relief for jaw joint pain, clicking & headaches. Supported by AAOMS. Splints & physiotherapy. Botox & advanced pain relief",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Splints & physiotherapy", "Botox & advanced pain relief"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["tmj treatment", "tmd therapy", "jaw pain", "clicking jaw", "Hyderabad"]
  },
  "sports-mouthguards": {
    id: "sports-mouthguards",
    title: "Sports Mouthguards",
    subtitle: "sports mouthguards treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/sports-mouthguards-hyderabad.webp",
    description: "Protective guards for athletes against dental trauma. Recommended by ADA, WHO.",
    longDescription: "Protective guards for athletes against dental trauma. Recommended by ADA, WHO. Custom-fit comfort. Prevents tooth & jaw injuries",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Custom-fit comfort", "Prevents tooth & jaw injuries"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["sports mouthguards", "dental trauma prevention", "Hyderabad"]
  },
  "oral-biopsy": {
    id: "oral-biopsy",
    title: "Oral Biopsy",
    subtitle: "oral biopsy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-biopsy-hyderabad.webp",
    description: "Tissue sampling for diagnosis of suspicious oral lesions. Backed by CDC.",
    longDescription: "Tissue sampling for diagnosis of suspicious oral lesions. Backed by CDC. Accurate diagnosis. Early treatment planning",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Accurate diagnosis", "Early treatment planning"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["oral biopsy", "suspicious lesions", "cancer testing", "Hyderabad"]
  },
  "frenectomy": {
    id: "frenectomy",
    title: "Frenectomy",
    subtitle: "frenectomy treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/laser-dentistry-hyderabad.webp",
    description: "Laser or surgical tongue-tie & lip-tie release. Supported by AAPD.",
    longDescription: "Laser or surgical tongue-tie & lip-tie release. Supported by AAPD. Improves speech & feeding. Minimally invasive with laser",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves speech & feeding", "Minimally invasive with laser"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["frenectomy", "tongue tie", "lip tie", "speech difficulty", "Hyderabad"]
  },
  "retainers": {
    id: "retainers",
    title: "Orthodontic Retainers",
    subtitle: "orthodontic retainers treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/braces-hyderabad.webp",
    description: "Retainers to maintain teeth alignment post-braces. Backed by AAO.",
    longDescription: "Retainers to maintain teeth alignment post-braces. Backed by AAO. Prevents teeth shifting. Available as clear or fixed types",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents teeth shifting", "Available as clear or fixed types"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["orthodontic retainers", "braces retention", "clear retainers", "Hyderabad"]
  },
  "dental-jewellery": {
    id: "dental-jewellery",
    title: "Dental Jewellery",
    subtitle: "dental jewellery treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/cosmetic-dentistry-hyderabad.webp",
    description: "Add sparkle with safe, temporary tooth gems. Backed by AACD.",
    longDescription: "Add sparkle with safe, temporary tooth gems. Backed by AACD. Non-invasive cosmetic option. Easily removable",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Non-invasive cosmetic option", "Easily removable"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental jewellery", "tooth gems", "cosmetic dentistry", "Hyderabad"]
  },
  "preventive-sealants": {
    id: "preventive-sealants",
    title: "Preventive Sealants",
    subtitle: "dental sealants treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/preventive-sealants-hyderabad.webp",
    description: "Protective coatings on teeth to prevent cavities. Supported by CDC, AAPD.",
    longDescription: "Protective coatings on teeth to prevent cavities. Supported by CDC, AAPD. Especially for kidsΓÇÖ molars. Long-term cavity protection",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Especially for kidsΓÇÖ molars", "Long-term cavity protection"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental sealants", "cavity prevention", "kids dentistry", "Hyderabad"]
  },
  "oral-hygiene-instruction": {
    id: "oral-hygiene-instruction",
    title: "Oral Hygiene Instruction",
    subtitle: "oral hygiene instruction treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-prophylaxis-hyderabad.webp",
    description: "Dentist-guided brushing & flossing training. Supported by ADA.",
    longDescription: "Dentist-guided brushing & flossing training. Supported by ADA. Proper brushing techniques. Prevents gum disease",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Proper brushing techniques", "Prevents gum disease"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["oral hygiene instruction", "brushing techniques", "flossing", "Hyderabad"]
  },
  "preventive-programs": {
    id: "preventive-programs",
    title: "Preventive Dentistry Programs",
    subtitle: "preventive dentistry programs treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/preventive-hyderabad.webp",
    description: "Ongoing dental checkups & preventive care plans. Backed by WHO.",
    longDescription: "Ongoing dental checkups & preventive care plans. Backed by WHO. Customized oral care schedules. Early detection saves costs",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Customized oral care schedules", "Early detection saves costs"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["preventive dentistry programs", "checkups", "kids oral health", "Hyderabad"]
  },
  "digital-xrays": {
    id: "digital-xrays",
    title: "Digital Dental X-Rays",
    subtitle: "digital dental x-rays treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/digital-dentistry-hyderabad.webp",
    description: "Low-radiation imaging for precise dental diagnosis. Supported by ADA, NHS.",
    longDescription: "Low-radiation imaging for precise dental diagnosis. Supported by ADA, NHS. Safe & accurate. Instant digital results",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Safe & accurate", "Instant digital results"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["digital dental x-rays", "low radiation imaging", "Hyderabad"]
  },
  "dental-cleaning": {
    id: "dental-cleaning",
    title: "Dental Cleaning (Scaling & Polishing)",
    subtitle: "dental cleaning treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/scaling-hyderabad.webp",
    description: "Professional scaling & polishing for clean, healthy teeth. Supported by ADA, IDA.",
    longDescription: "Professional scaling & polishing for clean, healthy teeth. Supported by ADA, IDA. Removes tartar & stains. Fresh breath & healthier gums",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Removes tartar & stains", "Fresh breath & healthier gums"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental cleaning", "scaling", "polishing", "plaque removal", "Hyderabad"]
  },
  "oral-hygiene": {
    id: "oral-hygiene",
    title: "Oral Hygiene Instruction",
    subtitle: "oral hygiene treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-prophylaxis-hyderabad.webp",
    description: "Expert brushing & flossing training from dentists. Endorsed by ADA.",
    longDescription: "Expert brushing & flossing training from dentists. Endorsed by ADA. Prevents gum disease & cavities. Personalized oral hygiene advice",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents gum disease & cavities", "Personalized oral hygiene advice"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["oral hygiene", "brushing technique", "flossing", "Hyderabad"]
  },
  "geriatric-dentistry": {
    id: "geriatric-dentistry",
    title: "Geriatric Dentistry",
    subtitle: "geriatric dentistry treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/dentures-hyderabad.webp",
    description: "Gentle dental care for senior citizens. Backed by WHO.",
    longDescription: "Gentle dental care for senior citizens. Backed by WHO. Comfortable treatment approach. Focus on function & comfort",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Comfortable treatment approach", "Focus on function & comfort"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["geriatric dentistry", "senior care", "elderly dental treatment", "Hyderabad"]
  },
  "oral-medicine": {
    id: "oral-medicine",
    title: "Oral Medicine & Diagnosis",
    subtitle: "oral medicine treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-cancer-hyderabad.webp",
    description: "Specialized diagnosis of oral lesions & conditions. Backed by WHO, CDC.",
    longDescription: "Specialized diagnosis of oral lesions & conditions. Backed by WHO, CDC. Identifies mouth diseases early. Guides proper treatment",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Identifies mouth diseases early", "Guides proper treatment"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["oral medicine", "oral lesions", "dental diagnosis", "Hyderabad"]
  },
  "maxillofacial-prosthetics": {
    id: "maxillofacial-prosthetics",
    title: "Maxillofacial Prosthetics",
    subtitle: "maxillofacial prosthetics treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/maxillofacial-hyderabad.webp",
    description: "Custom prosthetics for jaw, face & oral defects. Backed by AAOMS.",
    longDescription: "Custom prosthetics for jaw, face & oral defects. Backed by AAOMS. Restores function & appearance. Improves speech & chewing",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Restores function & appearance", "Improves speech & chewing"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["maxillofacial prosthetics", "prosthodontics", "oral rehabilitation", "Hyderabad"]
  },

  "pre-ortho": {
    id: "pre-ortho",
    title: "Pre-Orthodontic Guidance",
    subtitle: "pre orthodontic guidance treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/space-maintainers-hyderabad.webp",
    description: "Interceptive orthodontics for kidsΓÇÖ jaw growth. Backed by AAO.",
    longDescription: "Interceptive orthodontics for kidsΓÇÖ jaw growth. Backed by AAO. Prevents severe misalignment. Reduces need for future braces",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents severe misalignment", "Reduces need for future braces"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pre orthodontic guidance", "interceptive orthodontics", "kids braces", "Hyderabad"]
  },
  "tongue-cleaning": {
    id: "tongue-cleaning",
    title: "Tongue Cleaning Guidance",
    subtitle: "tongue cleaning treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/oral-prophylaxis-hyderabad.webp",
    description: "Professional guidance on tongue cleaning to prevent bad breath. Supported by ADA.",
    longDescription: "Professional guidance on tongue cleaning to prevent bad breath. Supported by ADA. Improves breath freshness. Removes harmful bacteria",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Improves breath freshness", "Removes harmful bacteria"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["tongue cleaning", "oral hygiene", "bad breath", "Hyderabad"]
  },
  "smoking-cessation": {
    id: "smoking-cessation",
    title: "Smoking Cessation Counseling",
    subtitle: "smoking cessation counseling treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/tobacco-cessation-hyderabad.webp",
    description: "Quit smoking & tobacco with dentist-led guidance. Backed by WHO, CDC.",
    longDescription: "Quit smoking & tobacco with dentist-led guidance. Backed by WHO, CDC. Prevents oral cancer risk. Improves overall oral health",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Prevents oral cancer risk", "Improves overall oral health"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["smoking cessation counseling", "quit tobacco", "oral cancer prevention", "Hyderabad"]
  },
  "pediatric-emergency": {
    id: "pediatric-emergency",
    title: "Pediatric Emergency Dental Care",
    subtitle: "kids dental emergency treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/emergency-hyderabad.webp",
    description: "24├ù7 dental emergency care for kids. Supported by AAPD.",
    longDescription: "24├ù7 dental emergency care for kids. Supported by AAPD. Handles trauma & sudden pain. Gentle approach for children",
    stats: [
      { label: "Success Rate", value: "98%", icon: "Activity" },
      { label: "Duration", value: "Varies", icon: "Clock" },
      { label: "Comfort", value: "High", icon: "Heart" }
    ],
    process: [
      { title: "Consultation", desc: "Digital diagnosis." },
      { title: "Treatment", desc: "Painless execution." },
      { title: "Follow-up", desc: "Experience review." }
    ],
    benefits: ["Handles trauma & sudden pain", "Gentle approach for children"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["kids dental emergency", "pediatric emergency care", "tooth injury", "Hyderabad"]
  },
};