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
  author?: string; // Clinical Author / Verified By
}



export const nobleProducts: ProductData[] = [
  // --- BACTERIAL INFECTIONS ---
  {
    id: 'resteclin-500',
    name: 'Resteclin 500mg Capsule',
    brand: 'Abbott',
    category: 'dental',
    healthIssue: 'Bacterial Infection',
    image: '/images/products/med-placeholder.jpg',
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
    image: '/images/products/med-placeholder.jpg',
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
    image: '/images/products/med-placeholder.jpg',
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
    image: '/images/products/med-placeholder.jpg',
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

  // --- PAIN MANAGEMENT ---
  {
    id: 'zerodol-sp',
    name: 'Zerodol-SP Tablet',
    brand: 'Ipca Labs',
    category: 'dental',
    healthIssue: 'Pain Management',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=ZERODOL',
    clinicPrice: 105,
    mrp: 118,
    saving: 13,
    subText: 'Triple action formula for post-extraction swelling and pain.',
    badges: ['Rx Only', 'Pain + Swelling'],
    tags: ['painkiller', 'nsaid', 'swelling'],
    indications: ['Post-Extraction Pain', 'Dental Abscess Swelling', 'Root Canal Inflammation'],
    usage: ['Take one tablet twice daily after food', 'Do not exceed 7 days'],
    ingredients: ['Aceclofenac 100mg', 'Paracetamol 325mg', 'Serratiopeptidase 15mg'],
    form: 'Tablet',
    isPrescription: true,
    rating: 4.9,
    reviews: 2100,
    available: true,
    introduction: 'Zerodol-SP is a combination of two pain killers (Aceclofenac, Paracetamol) and an enzyme (Serratiopeptidase).',
    howItWorks: {
      description: 'Aceclofenac/Paracetamol block chemical messengers that cause pain; Serratiopeptidase breaks down abnormal proteins at the site of inflammation.',
      animationType: 'none'
    },
    sideEffects: {
      common: ['Nausea', 'Stomach Upset', 'Heartburn'],
      uncommon: ['Dizziness', 'Gas'],
      rare: ['Allergic reaction', 'Peptic UIcer']
    },
    warnings: {
      pregnancy: 'Not recommended; consult doctor.',
      breastfeeding: 'Avoid; enters breast milk.',
      kidney: 'Dose adjustment needed.',
      liver: 'Use with caution; avoid in severe disease.'
    },
    tripathiRef: 'Chapter 15: Nonsteroidal Antiinflammatory Drugs'
  },
  {
    id: 'ketorol-dt',
    name: 'Ketorol DT 10mg',
    brand: 'Dr. Reddys',
    category: 'dental',
    healthIssue: 'Pain Management',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=KETOROL',
    clinicPrice: 131,
    mrp: 145,
    saving: 14,
    subText: 'Dispersible tablet for rapid relief of acute surgical dental pain.',
    badges: ['Rx Only', 'Severe Pain'],
    tags: ['acute pain', 'ketorolac', 'rapid relief'],
    indications: ['Intense Acute Toothache', 'Post-Op Surgical Pain'],
    usage: ['Dissolve tablet in water', 'Do not use for more than 5 days'],
    ingredients: ['Ketorolac Tromethamine 10mg'],
    form: 'Tablet',
    isPrescription: true,
    rating: 4.8,
    reviews: 890,
    available: true,
    introduction: 'Ketorol DT contains Ketorolac, a potent NSAID used for short-term management of moderate to severe pain.',
    howItWorks: {
      description: 'Works by blocking the production of prostaglandins, which are responsible for pain and inflammation.',
      animationType: 'none'
    },
    sideEffects: {
      common: ['Stomach Pain', 'Drowsiness', 'Indigestion'],
      uncommon: ['High Blood Pressure', 'Swelling'],
      rare: ['Bleeding', 'Kidney damage']
    },
    warnings: {
      pregnancy: 'Contraindicated.',
      breastfeeding: 'Not recommended.',
      kidney: 'Contraindicated in severe renal impairment.',
      liver: 'Use with caution.'
    },
    tripathiRef: 'Chapter 15: Nonsteroidal Antiinflammatory Drugs'
  },

  // --- PEDIATRIC DENTAL HEALTH ---
  {
    id: 'kidodent-paste',
    name: 'Kidodent Cavity Shield',
    brand: 'Group Pharma',
    category: 'dental',
    healthIssue: 'Pediatric Dental Health',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=KIDODENT',
    clinicPrice: 95,
    mrp: 120,
    saving: 25,
    subText: 'Safe fluoride levels for children with a delicious bubblegum flavor.',
    badges: ['Kids 3+', 'Cavity Protection'],
    tags: ['kids', 'toothpaste', 'fluoride'],
    indications: ['Plaque Prevention', 'Early Cavity Shield'],
    usage: ['Apply pea-sized amount', 'Brush under supervision twice daily'],
    ingredients: ['Sodium Monofluorophosphate', 'Xylitol'],
    form: 'Paste',
    isPrescription: false,
    rating: 4.9,
    reviews: 1540,
    available: true,
    introduction: 'Kidodent is specifically formulated for kids to provide effective cavity protection while being safe if accidentally swallowed in tiny amounts.',
    howItWorks: {
      description: 'Fluoride ions incorporate into the hydroxyapatite crystals of developing enamel, making it more resistant to acid attack.',
      animationType: 'ions'
    },
    tripathiRef: 'Chapter 14: Vitamins & Mineral Supplementation'
  },
  {
    id: 'pediflor-kidz-paste',
    name: 'Pediflor Kidz 0.05% Paste',
    brand: 'Group Pharma',
    category: 'dental',
    healthIssue: 'Pediatric Dental Health',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=PEDIFLOR',
    clinicPrice: 110,
    mrp: 145,
    saving: 35,
    subText: 'Low dose fluoride formulation specifically for early childhood caries prevention.',
    badges: ['Low Fluoride', 'Aged 2-6'],
    tags: ['pediatric', 'cavity', 'fluoride'],
    indications: ['Early Decay Prevention', 'Enamel Strengthening'],
    usage: ['Apply smear amount for under 3s', 'Apply pea-sized for over 3s', 'Brush 2x daily'],
    ingredients: ['Sodium Fluoride 0.05%', 'Xylitol'],
    form: 'Paste',
    isPrescription: false,
    rating: 4.8,
    reviews: 670,
    available: true,
    introduction: 'Pediflor Kidz contains the precise amount of fluoride recommended by dental associations for children in the 2-6 age group.',
    howItWorks: {
      description: 'Enhances remineralization by attracting calcium and phosphate to the tooth surface.',
      animationType: 'ions'
    },
    tripathiRef: 'Chapter 14: Vitamins & Mineral Supplementation',
    author: 'Dr Dhivakaran'
  },
  {
    id: 'nitrofur-sr-100',
    name: 'Nitrofur SR 100mg Tablet',
    brand: 'Wanbury Ltd',
    category: 'wellness',
    healthIssue: 'Bacterial Infection',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=NITROFUR',
    clinicPrice: 96,
    mrp: 121,
    saving: 25,
    subText: 'Sustained-release antibiotic specifically for urinary tract infections (UTIs).',
    badges: ['Rx Only', 'UTI Care'],
    tags: ['antibiotic', 'nitrofurantoin', 'uti'],
    indications: ['Lower Urinary Tract Infections', 'Cystitis', 'UTI Prophylaxis'],
    usage: ['Swallow whole with food or milk', 'Do not crush or chew'],
    ingredients: ['Nitrofurantoin 100mg'],
    form: 'Tablet',
    isPrescription: true,
    rating: 4.5,
    reviews: 120,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'NITROFUR SR 100MG TABLET contains Nitrofurantoin, an antibiotic used to manage infections in the bladder, kidneys, and other parts of the urinary system.',
    howItWorks: {
      description: 'Kills bacteria by disrupting the production of genetic material (DNA/RNA) in the bacterial cell, specifically targeting pathogens in the urinary tract.',
      animationType: 'bacteria-kill'
    },
    sideEffects: {
      common: ['Nausea', 'Vomiting', 'Loss of appetite', 'Diarrhea'],
      uncommon: ['Acute pulmonary reactions', 'Fever', 'Chills'],
      rare: ['Liver failure', 'Anemia', 'Loss of consciousness']
    },
    warnings: {
      pregnancy: 'Not recommended during labor or delivery; risk of hemolytic anemia in the newborn.',
      breastfeeding: 'Use with caution; avoid if infant has G6PD deficiency.',
      kidney: 'Not recommended in severe kidney disease.',
      liver: 'Use with caution; monitor liver enzymes.'
    },
    tripathiRef: 'Chapter 55: Urinary Antiseptics'
  },
  {
    id: 'colgate-pain-out',
    name: 'Colgate Pain Out Gel',
    brand: 'Colgate-Palmolive',
    category: 'dental',
    healthIssue: 'Pain Management',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=PAIN+OUT',
    clinicPrice: 50,
    mrp: 60,
    saving: 10,
    subText: 'Express relief from tooth pain with a single-drop application.',
    badges: ['Instant Relief', 'Dental Analgesic'],
    tags: ['toothache', 'analgesic', 'clove oil'],
    indications: ['Acute Toothache', 'Gum Pain', 'Inflamed Tissue Relief'],
    usage: ['Apply one drop to the affected tooth', 'Repeat up to 3 times a day'],
    ingredients: ['Eugenol', 'Menthol', 'Camphor'],
    form: 'Gel',
    isPrescription: false,
    rating: 4.7,
    reviews: 3200,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'Colgate Pain Out is a first-aid dental gel that provides symptomatic relief from sudden toothache.',
    howItWorks: {
      description: 'Eugenol provides a local anesthetic and antiseptic effect, while Menthol and Camphor soothe the nerve endings.',
      animationType: 'none'
    }
  },
  {
    id: 'smyle-ulcer-gel',
    name: 'Smyle Mouth Ulcer Gel',
    brand: 'Maneesh Pharma',
    category: 'dental',
    healthIssue: 'Mouth Ulcers',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=SMYLE',
    clinicPrice: 45,
    mrp: 55,
    saving: 10,
    subText: 'Astringent and cooling gel for fast healing of mouth ulcers.',
    badges: ['Herbal Based', 'Rapid Healing'],
    tags: ['ulcer', 'canker sore', 'healing'],
    indications: ['Apthous Ulcers', 'Stomatitis', 'Denture Sores'],
    usage: ['Apply to the ulcerated area', 'Avoid eating for 15 mins after application'],
    ingredients: ['Khadir', 'Irimed', 'Tagar', 'Rasana'],
    form: 'Gel',
    isPrescription: false,
    rating: 4.6,
    reviews: 540,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'Smyle is an ayurvedic gel that combines the power of healing herbs to treat mouth ulcers effectively.',
    howItWorks: {
      description: 'Forms a protective coating over the ulcer, protecting it from irritation while herbs accelerate tissue repair.',
      animationType: 'shield'
    }
  },
  {
    id: 'mandls-paint',
    name: "Agrawal Mandl's Paint",
    brand: 'Agrawal Pharma',
    category: 'dental',
    healthIssue: 'Mouth Ulcers',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&q=80&w=400',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=MANDL',
    clinicPrice: 40,
    mrp: 50,
    saving: 10,
    subText: 'Traditional antiseptic paint for chronic mouth ulcers and sore throats.',
    badges: ['Antiseptic', 'Standard Care'],
    tags: ['ulcer', 'sore throat', 'antiseptic'],
    indications: ['Chronic Mouth Ulcers', 'Pharyngitis', 'Gums Infection'],
    usage: ['Apply with a cotton swab twice daily', 'Do not rinse immediately'],
    ingredients: ['Iodine', 'Potassium Iodide', 'Glycerol'],
    form: 'Liquid',
    isPrescription: false,
    rating: 4.5,
    reviews: 210,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'Mandls Paint is a time-tested iodine-based antiseptic for oropharyngeal infections.',
    howItWorks: {
      description: 'Iodine provides broad-spectrum antimicrobial activity while Glycerol provides a soothing, viscous coating.',
      animationType: 'none'
    }
  },
  {
    id: 'clohex-mouthwash',
    name: 'Clohex Plus Mouthwash',
    brand: 'Cipla',
    category: 'dental',
    healthIssue: 'Gingivitis',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=CLOHEX',
    clinicPrice: 110,
    mrp: 135,
    saving: 25,
    subText: 'Gold-standard Chlorhexidine mouthwash for surgical and gum care.',
    badges: ['Antiseptic', 'Post-Op'],
    tags: ['gingivitis', 'chlorhexidine', 'mouthwash'],
    indications: ['Bleeding Gums', 'Post-Scaling Care', 'Oral Candidiasis'],
    usage: ['Rinse with 10ml for 1 minute', 'Use twice daily', 'Do not eat for 30 mins after'],
    ingredients: ['Chlorhexidine Gluconate 0.2%'],
    form: 'Liquid',
    isPrescription: false,
    rating: 4.8,
    reviews: 1420,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'Clohex Plus is an antiseptic and anti-plaque mouthwash used to prevent gingivitis and oral infections.',
    howItWorks: {
      description: 'Chlorhexidine molecule binds to the bacterial cell wall, causing leakage of intracellular components and eventual cell death.',
      animationType: 'bacteria-kill'
    },
    tripathiRef: 'Chapter 65: Antiseptics and Disinfectants'
  },
  {
    id: 'stolin-gum-paint',
    name: 'Stolin Gum Astringent',
    brand: 'Dr. Reddys',
    category: 'dental',
    healthIssue: 'Gingivitis',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=STOLIN',
    clinicPrice: 85,
    mrp: 105,
    saving: 20,
    subText: 'Astringent paint to tighten gums and stop bleeding.',
    badges: ['Gum Toner', 'Anti-Bleeding'],
    tags: ['gum paint', 'bleeding gums', 'astringent'],
    indications: ['Spongy Gums', 'Bleeding Gums', 'Gingival Inflammation'],
    usage: ['Massage onto gums with finger or cotton', 'Use 2-3 times daily'],
    ingredients: ['Tannic Acid', 'Zinc Chloride', 'Cetrimide'],
    form: 'Liquid',
    isPrescription: false,
    rating: 4.7,
    reviews: 890,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'Stolin provides dual action of an astringent (Tannic Acid) and an antiseptic (Cetrimide) for gum health.',
    howItWorks: {
      description: 'Tannic acid precipitates proteins on the gum surface, causing tissue contraction (astringency) which stops bleeding.',
      animationType: 'shield'
    }
  },
  {
    id: 'perfora-mouth-spray',
    name: 'Perfora Ultra Mint Spray',
    brand: 'Perfora',
    category: 'wellness',
    healthIssue: 'Bad Breath',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=PERFORA',
    clinicPrice: 280,
    mrp: 350,
    saving: 70,
    subText: 'Breath freshener with nano-hydroxyapatite and probiotics.',
    badges: ['Alcohol Free', 'On-the-go'],
    tags: ['bad breath', 'halitosis', 'probiotics'],
    indications: ['Halitosis', 'Dry Mouth', 'Instant Refreshment'],
    usage: ['Spray 1-2 times into the mouth', 'Use as needed'],
    ingredients: ['Peppermint Oil', 'Spearmint Oil', 'Probiotics'],
    form: 'Spray',
    isPrescription: false,
    rating: 4.9,
    reviews: 640,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'Perfora Ultra Mint Spray targets Volatile Sulfur Compounds (VSCs) that cause bad breath while maintaining a healthy microbiome.',
    howItWorks: {
      description: 'Neutralizes odor-causing bacteria and provides a cooling sensation through natural essential oils.',
      animationType: 'none'
    }
  },
  {
    id: 'stim-ortho-wax',
    name: 'STIM Orthodontic Wax',
    brand: 'STIM Dental',
    category: 'ortho',
    healthIssue: 'Pain Management',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=ORTHOWAX',
    clinicPrice: 120,
    mrp: 150,
    saving: 30,
    subText: 'Relief from bracket irritation and wire pokes during orthodontic treatment.',
    badges: ['Bracket Relief', 'Must-Have'],
    tags: ['braces', 'ortho', 'wax'],
    indications: ['Braces Irritation', 'Wire Impingement', 'Mucosal Ulcers from Brackets'],
    usage: ['Clean and dry the bracket', 'Apply a small ball of wax over the poking part'],
    ingredients: ['Medical Grade Paraffin Wax'],
    form: 'Kit',
    isPrescription: false,
    rating: 5.0,
    reviews: 1200,
    available: false,
    author: 'Dr Dhivakaran',
    introduction: 'STIM Ortho wax provides a smooth protective barrier between the oral mucosa and orthodontic appliances.',
    howItWorks: {
      description: 'Physically shields the inner cheeks and lips from sharp metal edges of braces.',
      animationType: 'shield'
    }
  },
  {
    id: 'chymoral-forte',
    name: 'Chymoral Forte Tablet',
    brand: 'Torrent Pharma',
    category: 'dental',
    healthIssue: 'Pain Management',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=CHYMORAL',
    clinicPrice: 425,
    mrp: 480,
    saving: 55,
    subText: 'Enzymatic anti-inflammatory for reducing severe post-operative edema.',
    badges: ['Rx Only', 'Anti-Swelling'],
    tags: ['swelling', 'enzymes', 'bruising'],
    indications: ['Post-Surgical Swelling', 'Maxillofacial Trauma', 'Deep Tissue Inflammation'],
    usage: ['Take 1 tablet 3 times a day', 'Take on empty stomach 1 hr before meals'],
    ingredients: ['Trypsin-Chymotrypsin 100,000 AU'],
    form: 'Tablet',
    isPrescription: true,
    rating: 4.8,
    reviews: 430,
    available: true,
    author: 'Dr Dhivakaran',
    introduction: 'Chymoral Forte contains a mixture of enzymes which help in faster healing by reducing inflammation and edema.',
    howItWorks: {
      description: 'Works by breaking down proteins involved in inflammation and improves blood supply to the affected area.',
      animationType: 'none'
    },
    warnings: {
      pregnancy: 'Consult doctor before use.',
      breastfeeding: 'Consult doctor; safety not established.',
      kidney: 'Use with caution.',
      liver: 'Use with caution.'
    },
    tripathiRef: 'Chapter 69: Miscellaneous Drugs'
  },
  {
    id: 'enafix-kids',
    name: 'Enafix Kids Toothpaste',
    brand: 'Group Pharma',
    category: 'dental',
    healthIssue: 'Pediatric Dental Health',
    image: '/images/products/med-placeholder.jpg',
    bgImage: 'https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&q=80&w=600',
    titleImage: 'https://via.placeholder.com/200x50/000000/FFFFFF?text=ENAFIX+KIDS',
    clinicPrice: 145,
    mrp: 175,
    saving: 30,
    subText: 'Non-fluoride remineralizing paste for children with delicate enamel.',
    badges: ['Fluoride Free', 'Safe to Swallow'],
    tags: ['pediatric', 'enamel', 'calcium'],
    indications: ['Weak Enamel', 'Enamel Hypoplasia', 'Fluorosis Correction'],
    usage: ['Apply small amount', 'Massage for 2 mins', 'Spit or swallow safely'],
    ingredients: ['Bio-available Calcium', 'Phosphate'],
    form: 'Paste',
    isPrescription: false,
    rating: 5.0,
    reviews: 210,
    available: true,
    author: 'Dr Dhivakaran',
    introduction: 'Enafix Kids is a breakthrough non-fluoride formula that focuses on rebuilding tooth minerals using natural calcium flux.',
    howItWorks: {
      description: 'Releases calcium and phosphate ions to replenish the enamel lattice structure.',
      animationType: 'ions'
    },
    tripathiRef: 'Chapter 14: Vitamins & Mineral Supplementation'
  },
  {
    id: 'shy-nm-foam',
    name: 'SHY-NM Tooth Sensitivity Foam',
    brand: 'Group Pharma',
    category: 'preventive',
    healthIssue: 'Hypersensitivity',
    image: '/images/products/med-placeholder.jpg',
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
    author: 'Dr Dhivakaran',
    introduction: 'SHY-NM Uses patented NovaMin technology to provide clinically proven relief from dentinal hypersensitivity.',
    howItWorks: {
      description: 'Forms a tooth-like mineral layer (HCA) over exposed dentinal tubules to block nerve impulses.',
      animationType: 'shield'
    }
  },
  {
    id: 'enafix-cream',
    name: 'Enafix Remineralising Cream',
    brand: 'Group Pharma',
    category: 'preventive',
    healthIssue: 'Enamel Erosion',
    image: '/images/products/med-placeholder.jpg',
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
    author: 'Dr Dhivakaran',
    introduction: 'Enafix provides bio-available Calcium and Phosphate through ACP-CPP technology to remineralize surface enamel.',
    howItWorks: {
      description: 'Releases Calcium and Phosphate ions into the subsurface enamel, rebuilding the hydroxyapatite crystalline structure.',
      animationType: 'ions'
    }
  }
];

