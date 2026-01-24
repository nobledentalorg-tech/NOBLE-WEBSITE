export interface ProductData {
  id: string;
  name: string;
  brand: string;
  category: string;
  healthIssue?: string; // New: Categorization by health issue (Netmeds style)
  image: string;
  bgImage: string;
  titleImage: string;
  clinicPrice: number;
  mrp: number;
  saving: number;
  subText: string;
  badges: string[];
  tags: string[];
  indications: string[];
  usage: string[];
  ingredients: string[];
  form: 'Paste' | 'Gel' | 'Liquid' | 'Tablet' | 'Kit' | 'Cream' | 'Spray' | 'Powder' | 'Foam' | 'Capsule';
  isPrescription: boolean;
  rating: number;
  reviews: number;
  available: boolean;
  
  // --- NEW CLINICAL FIELDS (NETMEDS STYLE) ---
  introduction?: string;
  howItWorks?: {
    description: string;
    animationType: 'ions' | 'shield' | 'bacteria-kill' | 'none'; // MOA Animation Trigger
  };
  sideEffects?: {
    common: string[];
    uncommon: string[];
    rare: string[];
  };
  warnings?: {
    pregnancy: string;
    breastfeeding: string;
    kidney: string;
    liver: string;
  };
  drugInteractions?: string[];
  tripathiRef?: string; // K.D. Tripathi Reference
}



export const nobleProducts: ProductData[] = [
  // --- BACTERIAL INFECTIONS (NETMEDS DATA) ---
  {
    id: 'resteclin-500',
    name: 'Resteclin 500mg Capsule',
    brand: 'Abbott',
    category: 'dental',
    healthIssue: 'Bacterial Infection',
    image: 'https://www.netmeds.com/images/product-v1/600x600/8237271/resteclin_500mg_capsule_10s_0_1.jpg',
    bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=RESTECLIN',
    clinicPrice: 42,
    mrp: 50,
    saving: 8,
    subText: 'Broad-spectrum Tetracycline antibiotic for acute dental infections.',
    badges: ['Rx Only', 'Antibiotic'],
    tags: ['infection', 'antibiotic', 'tetracycline'],
    indications: ['Dental Abscess', 'Gingivitis', 'Respiratory Infections'],
    usage: ['Swallow 1 hr before or 2 hrs after meals', 'Do not lie down for 30 mins'],
    ingredients: ['Tetracycline 500mg'],
    form: 'Capsule',
    isPrescription: true,
    rating: 4.8,
    reviews: 540,
    available: true,
    introduction: 'RESTECLIN 500MG CAPSULE contains Tetracycline which belongs to the group of medicines called Antibiotics. It works by stopping bacterial growth.',
    howItWorks: {
      description: 'Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit, preventing the addition of amino acids to the growing peptide chain.',
      animationType: 'bacteria-kill'
    },
    sideEffects: {
      common: ['Nausea', 'Vomiting', 'Diarrhea'],
      uncommon: ['Skin Peeling', 'Rash'],
      rare: ['Vision Loss', 'Pancreatitis']
    },
    warnings: {
      pregnancy: 'Not recommended; causes permanent tooth discoloration in unborn babies.',
      breastfeeding: 'Not recommended; passes into breast milk.',
      kidney: 'Not recommended for severe kidney disease.',
      liver: 'Use with caution in liver impairment.'
    },
    tripathiRef: 'Chapter 52: Tetracyclines and Chloramphenicol'
  },
  {
    id: 'metrogyl-400',
    name: 'Metrogyl 400mg Tablet',
    brand: 'JB Chemicals',
    category: 'dental',
    healthIssue: 'Bacterial Infection',
    image: 'https://www.netmeds.com/images/product-v1/600x600/15992/metrogyl_400mg_tablet_15s_0_1.jpg',
    bgImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=METROGYL',
    clinicPrice: 22,
    mrp: 25,
    saving: 3,
    subText: 'Effective against anaerobic bacteria prevalent in gum diseases.',
    badges: ['Anaerobic Cover', 'Gum Care'],
    tags: ['anaerobic', 'metronidazole', 'abscess'],
    indications: ['Acute Ulcerative Gingivitis', 'Pericoronitis', 'Dental Abscess'],
    usage: ['Take with food to avoid stomach upset', 'Avoid alcohol during therapy'],
    ingredients: ['Metronidazole 400mg'],
    form: 'Tablet',
    isPrescription: true,
    rating: 4.7,
    reviews: 890,
    available: true,
    introduction: 'Metrogyl 400 contains Metronidazole, a nitroimidazole antimicrobial used for anaerobic bacterial and parasitic infections.',
    howItWorks: {
      description: 'Works by damaging the DNA of the bacteria, leading to cell death of anaerobic microorganisms.',
      animationType: 'bacteria-kill'
    },
    sideEffects: {
      common: ['Metallic Taste', 'Headache', 'Nausea'],
      uncommon: ['Dizziness', 'Stomach Pain'],
      rare: ['Seizures', 'Dark Urine']
    },
    warnings: {
      pregnancy: 'Avoid in 1st trimester.',
      breastfeeding: 'Consult MD; enters milk.',
      kidney: 'Dose adjustment needed in severe cases.',
      liver: 'Dose reduction required in severe liver disease.'
    },
    tripathiRef: 'Chapter 60: Antiamoebic and Other Antiprotozoal Drugs'
  },
  {
    id: 'dalacin-c-300',
    name: 'Dalacin C 300mg Capsule',
    brand: 'Pfizer',
    category: 'dental',
    healthIssue: 'Bacterial Infection',
    image: 'https://www.netmeds.com/images/product-v1/600x600/15822/dalacin_c_300mg_capsule_10s_0_1.jpg',
    bgImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=DALACIN',
    clinicPrice: 215,
    mrp: 238,
    saving: 23,
    subText: 'Superior bone penetration; ideal for jaw and bone-related infections.',
    badges: ['Bone Penetration', 'Surgery Choice'],
    tags: ['clindamycin', 'bone infection', 'jaw'],
    indications: ['Osteomyelitis', 'Post-Op Jaw Infection', 'Penicillin Allergy Alt'],
    usage: ['Take with 1 full glass of water', 'Do not lie down for 30 mins'],
    ingredients: ['Clindamycin 300mg'],
    form: 'Capsule',
    isPrescription: true,
    rating: 4.9,
    reviews: 310,
    available: true,
    introduction: 'Dalacin C contains Clindamycin, a lincosamide antibiotic highly effective against aerobic and anaerobic Gram-positive bacteria.',
    howItWorks: {
      description: 'Suppresses bacterial protein synthesis by binding to the 50S ribosomal subunit.',
      animationType: 'bacteria-kill'
    },
    sideEffects: {
      common: ['Diarrhea', 'Abdominal Pain'],
      uncommon: ['Vaginal Infection', 'Esophagitis'],
      rare: ['Pseudomembranous Colitis']
    },
    warnings: {
      pregnancy: 'Use only if clearly needed.',
      breastfeeding: 'Monitor infant for GIT symptoms.',
      kidney: 'No major dose adjustment for mild cases.',
      liver: 'Monitor liver function during long-term use.'
    },
    tripathiRef: 'Chapter 53: Lincosamides and Glycopeptides'
  },
  {
    id: 'azee-500',
    name: 'Azee 500mg Tablet',
    brand: 'Cipla',
    category: 'dental',
    healthIssue: 'Bacterial Infection',
    image: 'https://www.netmeds.com/images/product-v1/600x600/15266/azee_500mg_tablet_5s_0_1.jpg',
    bgImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=AZEE',
    clinicPrice: 110,
    mrp: 132,
    saving: 22,
    subText: 'Convenient once-daily dosing for dental infections.',
    badges: ['Once Daily', 'Patient Favorite'],
    tags: ['azithromycin', 'macrolide', 'compliance'],
    indications: ['Dental Abscess', 'Periodontitis', 'Allergy to Penicillin'],
    usage: ['One tablet daily for 3-5 days', 'Take 1 hr before food'],
    ingredients: ['Azithromycin 500mg'],
    form: 'Tablet',
    isPrescription: true,
    rating: 4.8,
    reviews: 1200,
    available: true,
    introduction: 'Azee 500 contains Azithromycin, a macrolide antibiotic that stops the growth of bacteria by inhibiting protein synthesis.',
    howItWorks: {
      description: 'Prevents bacteria from growing by interfering with their protein synthesis (50S subunit).',
      animationType: 'bacteria-kill'
    },
    sideEffects: {
      common: ['Loose Stools', 'Nausea', 'Vomiting'],
      uncommon: ['Dizziness', 'Headache'],
      rare: ['Liver Dysfunction', 'Arrhythmia']
    },
    warnings: {
      pregnancy: 'Generally safe; consult MD.',
      breastfeeding: 'Caution; monitor infant.',
      kidney: 'Use with caution in renal failure.',
      liver: 'Contraindicated in severe liver disease.'
    },
    tripathiRef: 'Chapter 54: Macrolides and Ketolides'
  },

  // --- HYPERSENSITIVITY ---
  {
    id: 'shy-nm-foam',
    name: 'SHY-NM Tooth Sensitivity Foam',
    brand: 'Group Pharma',
    category: 'preventive',
    healthIssue: 'Hypersensitivity',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
    bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=SHY-NM',
    clinicPrice: 371,
    mrp: 495,
    saving: 124,
    subText: 'Strengthens enamel and calms sudden zingers with Potassium nitrate and NovaMin.',
    badges: ['Best Seller', 'Instant Relief'],
    tags: ['sensitivity', 'enamel', 'foam'],
    indications: ['Hot-Cold Sensitivity', 'Post-Whitening Care', 'Exposed Tubules'],
    usage: ['Apply foam to teeth', 'Leave for 2-3 mins', 'Spit without rinsing'],
    ingredients: ['Potassium Nitrate', 'NovaMin', 'Fluoride'],
    form: 'Foam',
    isPrescription: false,
    rating: 4.9,
    reviews: 1240,
    available: true,
    introduction: 'SHY-NM Uses patented NovaMin technology to provide clinically proven relief from dentinal hypersensitivity.',
    howItWorks: {
      description: 'Forms a tooth-like mineral layer (HCA) over exposed dentinal tubules to block nerve impulses.',
      animationType: 'shield'
    }
  },

  // --- ENAMEL EROSION ---
  {
    id: 'enafix-cream',
    name: 'Enafix Remineralising Cream',
    brand: 'Group Pharma',
    category: 'preventive',
    healthIssue: 'Enamel Erosion',
    image: 'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&q=80&w=400',
    bgImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=Enafix',
    clinicPrice: 570,
    mrp: 760,
    saving: 190,
    subText: 'Rapid relief for early enamel lesions using ACP-CPP technology.',
    badges: ['Clinic Exclusive', 'Enamel Repair'],
    tags: ['remineralisation', 'white spots', 'cream'],
    indications: ['Early Enamel Lesions', 'White Spot Lesions', 'Fluoride Boost'],
    usage: ['Apply pea-sized amount', 'Massage onto teeth', 'Use nightly'],
    ingredients: ['ACP-CPP', 'Sodium Fluoride'],
    form: 'Cream',
    isPrescription: false,
    rating: 4.8,
    reviews: 856,
    available: true,
    introduction: 'Enafix provides bio-available Calcium and Phosphate through ACP-CPP technology to remineralize surface enamel.',
    howItWorks: {
      description: 'Releases Calcium and Phosphate ions into the subsurface enamel, rebuilding the hydroxyapatite crystalline structure.',
      animationType: 'ions'
    }
  }
];


