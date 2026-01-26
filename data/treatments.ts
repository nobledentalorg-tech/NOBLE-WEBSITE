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
  process: TreatmentStep[];
  benefits: string[];
  faqs: TreatmentFAQ[];
  keywords: string[];
  recommendedProducts?: ProductRecommendation[];
}

export const treatmentsData: Record<string, TreatmentData> = {
  "root-canal": {
    id: "root-canal",
    title: "Microscopic Root Canal",
    subtitle: "Painless single-sitting rct with Zeiss optics.",
    category: "Endodontics",
    heroImage: "/assets/images/treatments/root-canal-hyderabad.webp",
    description: "Experience 100% painless root canal treatment in Nallagandla using advanced German Microscopes.",
    longDescription: "Stop searching for 'root canal near me' and discover precision. At Noble Dental Care, we specialize in Microscopic Root Canal Treatment. Unlike traditional methods, our Zeiss Extaro 300 magnification allows us to see and clean hidden canals (MB2) that others miss. This ensures a 99.2% success rate and a completely painless, single-sitting experience.",
    stats: [
      { label: "Pain Score", value: "0/10", icon: "Heart" },
      { label: "Precision", value: "25x Zoom", icon: "Ruler" },
      { label: "Visits", value: "Single Sitting", icon: "Clock" }
    ],
    process: [
      { title: "3D CBCT Scan", desc: "We map your tooth roots digitally to prevent errors." },
      { title: "Painless Numbing", desc: "Computer-controlled anesthesia (The Wand) for zero-sting injection." },
      { title: "Laser Disinfection", desc: "Er,Cr:YSGG Laser cleaning of deep canals." },
      { title: "Bioceramic Seal", desc: "Permanent 3D obturation for lifetime durability." }
    ],
    benefits: [
      "No Pain, No Swelling",
      "Completed in 45 Minutes (Single Visit)",
      "Save Your Natural Tooth",
      "Affordable Cost in Nallagandla",
      "10-Year Warranty on Crowns"
    ],
    faqs: [
      { q: "Is it really painless?", a: "Yes. Our microscopic technique combined with digital anesthesia ensures you feel absolutely nothing." },
      { q: "What is the cost of Root Canal in Nallagandla?", a: "Our microscopic RCT starts from ₹4,500. We offer transparent pricing with no hidden charges." }
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
    keywords: ["zirconia crown cost", "dental caps", "ceramic bridge", "tooth cap price nallagandla", "metal free crown"]
  },
  "kids-dentistry": {
    id: "kids-dentistry",
    subtitle: "Fear-free dental care for children.",
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
    faqs: [{ q: "Is sedation safe for kids?", a: "Yes, Nitrous Oxide is the safest sedative. It wears off instantly after the mask is removed, and your child walks out fully awake." }],
    keywords: ["pediatric dentist nallagandla", "sedation dentistry for kids", "child dentist", "kids root canal", "laughing gas dental"]
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
  "tooth-extraction": {
    id: "tooth-extraction",
    title: "Atraumatic Extraction",
    subtitle: "Piezo-surgical removal with minimal swelling.",
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
      { q: "When can I eat?", a: "You can have soft, cold foods immediately. Normal chewing usually resumes in 3-5 days." },
      { q: "Is sedation available?", a: "Yes, we offer conscious sedation for anxious patients or complex wisdom tooth impactions." }
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
    keywords: ["stains", "yellow teeth", "cleaning", "bad breath", "bleeding gums", "calculus"]
  },

  // --- Migrated Legacy Content ---
  "braces-orthodontics": {
    id: "braces-orthodontics",
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
  "invisalign-aligners": {
    id: "invisalign-aligners",
    title: "Invisalign Clear Aligners",
    subtitle: "invisalign treatment",
    category: "Orthodontics",
    heroImage: "/assets/images/treatments/invisalign-hyderabad.webp",
    description: "Straighten teeth with removable clear aligners for comfort and aesthetics. Backed by Invisalign, AAO.",
    longDescription: "Straighten teeth with removable clear aligners for comfort and aesthetics. Backed by Invisalign, AAO. Nearly invisible. Eat & brush normally",
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
    benefits: ["Nearly invisible", "Eat & brush normally"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["invisalign", "aligners", "clear braces", "crooked teeth", "Hyderabad"]
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
    keywords: ["teeth whitening", "bleaching", "yellow teeth", "zoom whitening", "bright smile"]
  },
  "dental-veneers": {
    id: "dental-veneers",
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
  "pediatric-dentistry": {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    subtitle: "pediatric treatment",
    category: "Pediatrics",
    heroImage: "/assets/images/treatments/pediatric-hyderabad.webp",
    description: "Gentle dental care for infants, toddlers, and children. Supported by AAPD.",
    longDescription: "Gentle dental care for infants, toddlers, and children. Supported by AAPD. Prevents cavities early. Child-friendly approach",
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
    benefits: ["Prevents cavities early", "Child-friendly approach"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pediatric", "kids dentistry", "children", "fluoride", "sealants", "Hyderabad"]
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
  "dental-bridges": {
    id: "dental-bridges",
    title: "Dental Bridges",
    subtitle: "dental bridges treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/dental-bridges-hyderabad.webp",
    description: "Replace missing teeth with fixed dental bridges. Based on Prosthodontic Guidelines.",
    longDescription: "Replace missing teeth with fixed dental bridges. Based on Prosthodontic Guidelines. Fixed solution. Restores chewing",
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
    benefits: ["Fixed solution", "Restores chewing"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["dental bridges", "missing teeth", "prosthesis", "Hyderabad"]
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
  "emergency-dentistry": {
    id: "emergency-dentistry",
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
  "tmj-treatment": {
    id: "tmj-treatment",
    title: "TMJ Disorder Treatment",
    subtitle: "TMJ disorder treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/tmj-treatment-hyderabad.webp",
    description: "Relief for jaw pain, clicking, and TMJ dysfunction. Cited by NIH.",
    longDescription: "Relief for jaw pain, clicking, and TMJ dysfunction. Cited by NIH. Custom splints for relief. Reduces headaches & strain",
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
    benefits: ["Custom splints for relief", "Reduces headaches & strain"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["TMJ disorder", "jaw pain", "clicking jaw", "Hyderabad"]
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
  "emergency-trauma": {
    id: "emergency-trauma",
    title: "Emergency Dental Trauma Care",
    subtitle: "emergency dental trauma treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/emergency-hyderabad.webp",
    description: "Immediate treatment for knocked-out or broken teeth. Backed by IDA.",
    longDescription: "Immediate treatment for knocked-out or broken teeth. Backed by IDA. 24├ù7 trauma support. Saves teeth when treated quickly",
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
    benefits: ["24├ù7 trauma support", "Saves teeth when treated quickly"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["emergency dental trauma", "knocked out tooth", "Hyderabad"]
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
  "pregnancy-dental": {
    id: "pregnancy-dental",
    title: "Pregnancy Dental Care",
    subtitle: "pregnancy dental care treatment",
    category: "General Dentistry",
    heroImage: "/assets/images/treatments/pregnancy-dental-hyderabad.webp",
    description: "Safe dental treatments during pregnancy. Backed by ADA, CDC.",
    longDescription: "Safe dental treatments during pregnancy. Backed by ADA, CDC. Prevents gum disease & cavities. Special care in 2nd trimester",
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
    benefits: ["Prevents gum disease & cavities", "Special care in 2nd trimester"],
    faqs: [{ "q": "Is the procedure painful?", "a": "We use advanced numbing techniques." }, { "q": "How many visits?", "a": "Usually 1-2 visits." }],
    keywords: ["pregnancy dental care", "safe dental treatment during pregnancy", "Hyderabad"]
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