export const TEAM_MEMBERS = [
  {
    id: 'dr-dhivakaran',
    name: 'Dr Dhivakaran R.',
    role: 'Chief Implantologist & Microscope Endodontist',
    profileImage: 'images/dhivakaran.webp',
    category: 'Doctor'
  },
  {
    id: 'dr-roger-ronaldo',
    name: 'Dr Roger Ronaldo',
    role: 'Full-Arch Implant & Prostho Specialist',
    profileImage: 'images/roger.webp',
    category: 'Doctor'
  },
  {
    id: 'dr-deepak',
    name: 'Dr Deepak',
    role: 'Cosmetic Dentist & Smile Design Lead',
    profileImage: 'images/deepak.webp',
    category: 'Doctor'
  },
  {
    id: 'dr-thikvijay',
    name: 'Dr Thikvijay',
    role: 'Orthodontics & Airway Expansion Specialist',
    profileImage: 'images/thikvijay.webp',
    category: 'Doctor'
  },
  {
    id: 'dr-idhaya',
    name: 'Dr Idhaya',
    role: 'Pediatric Dentist & Preventive Care Mentor',
    profileImage: 'images/idhaya.webp',
    category: 'Doctor'
  },
  {
    id: 'akhila',
    name: 'Akhila',
    role: 'Sterilisation & Patient Experience Lead',
    profileImage: 'images/blog/implants.webp',
    category: 'Non-Medical'
  },
  {
    id: 'nizam',
    name: 'Nizam',
    role: 'Digital Workflow & CAD/CAM Specialist',
    profileImage: 'images/blog/whitening.webp',
    category: 'Non-Medical'
  }
];

export const CERTIFICATES_LIBRARY = [
  {
    id: 'cert-microscope-endodontics-masterclass',
    staffId: 'dr-dhivakaran',
    staffName: 'Dr Dhivakaran R.',
    staffRole: 'Chief Implantologist & Microscope Endodontist',
    profileImage: 'images/dhivakaran.webp',
    title: 'Microscope Endodontics Masterclass',
    issuer: 'Academy of Microscope Enhanced Dentistry',
    issuerWebsite: 'https://www.microscopedentistry.com',
    issueDate: '2024-02-18',
    expiryDate: '',
    credentialCode: 'AMED-2024-1189',
    location: 'Singapore',
    credentialType: 'Medical',
    tags: ['Microscope', 'Regeneration', 'Bio-ceramic'],
    image: 'images/dhivakaran.webp',
    evidenceUrl: 'https://nobledentalnallagandla.in/blog/microscope-endodontics-masterclass',
    description: 'Advanced regenerative protocols, laser-assisted disinfection and microscope isolation for predictable retreatments.'
  },
  {
    id: 'cert-digital-full-arch-implant',
    staffId: 'dr-roger-ronaldo',
    staffName: 'Dr Roger Ronaldo',
    staffRole: 'Full-Arch Implant & Prostho Specialist',
    profileImage: 'images/roger.webp',
    title: 'Digital Full-Arch Implant Residency',
    issuer: 'International Team for Implantology',
    issuerWebsite: 'https://www.iti.org',
    issueDate: '2023-10-12',
    expiryDate: '',
    credentialCode: 'ITI-GLOBAL-FA-2023',
    location: 'Zurich, Switzerland',
    credentialType: 'Medical',
    tags: ['Implants', 'Navigation', 'CAD/CAM'],
    image: 'images/blog/implants.webp',
    evidenceUrl: 'https://nobledentalnallagandla.in/blog/digital-full-arch-navigation',
    description: 'Hands-on digital planning, pterygoid and zygomatic implant training with in-house guide printing workflows.'
  },
  {
    id: 'cert-ai-smile-design',
    staffId: 'dr-deepak',
    staffName: 'Dr Deepak',
    staffRole: 'Cosmetic Dentist & Smile Design Lead',
    profileImage: 'images/deepak.webp',
    title: 'AI Smile Design Fellowship',
    issuer: 'Digital Dentistry Society',
    issuerWebsite: 'https://www.digital-dentistry.org',
    issueDate: '2024-04-05',
    expiryDate: '',
    credentialCode: 'DDS-AI-2024-011',
    location: 'Dubai, UAE',
    credentialType: 'Medical',
    tags: ['AI Dentistry', 'Smile Design', 'Digital'],
    image: 'images/blog/whitening.webp',
    evidenceUrl: 'https://nobledentalnallagandla.in/blog/ai-smile-design',
    description: 'Chairside AI simulation workflows, patient empathy labs and multi-disciplinary smile makeovers.'
  },
  {
    id: 'cert-sterilisation-audit',
    staffId: 'akhila',
    staffName: 'Akhila',
    staffRole: 'Sterilisation & Patient Experience Lead',
    profileImage: 'images/blog/implants.webp',
    title: 'Sterilisation Excellence & Audit Certification',
    issuer: 'Association of Dental Administrators',
    issuerWebsite: '',
    issueDate: '2023-08-22',
    expiryDate: '2025-08-21',
    credentialCode: 'ADA-SE-2023',
    location: 'Hyderabad, India',
    credentialType: 'Non-Medical',
    tags: ['Sterilisation', 'Quality Assurance', 'Patient Safety'],
    image: 'images/blog/implants.webp',
    evidenceUrl: 'https://nobledentalnallagandla.in/blog/sterilisation-audit',
    description: 'Daily sterilisation tracking, emergency readiness drills and patient comfort calibration for every operatory.'
  }
];

export const NEWS_BROADCAST = [
  {
    id: 'news-ai-mockups',
    headline: 'AI smile mock-ups deployed chairside',
    summary: 'Patients can now preview smile design outcomes in minutes thanks to in-operatory AI planning with Dr Deepak.',
    publishedOn: '2024-05-16',
    link: 'https://nobledentalnallagandla.in/blog/ai-smile-design',
    tags: ['AI Dentistry', 'Smile Design'],
    image: 'images/blog/whitening.webp'
  },
  {
    id: 'news-navigation-lab',
    headline: 'Navigation lab upgrades full-arch workflows',
    summary: 'Dr Roger Ronaldo completed cadaver-guided navigation residency to accelerate minimally invasive full-arch implants.',
    publishedOn: '2024-04-28',
    link: 'https://nobledentalnallagandla.in/blog/digital-full-arch-navigation',
    tags: ['Implants', 'Digital Surgery'],
    image: 'images/blog/implants.webp'
  },
  {
    id: 'news-sterilisation-audit',
    headline: 'Sterilisation taskforce hits zero-compromise rating',
    summary: 'Akhila and Nizam implemented new audit loops ensuring every cassette and surface meets NABH-grade sterilisation scores.',
    publishedOn: '2024-03-12',
    link: 'https://nobledentalnallagandla.in/blog/sterilisation-audit',
    tags: ['Patient Safety', 'Sterilisation'],
    image: 'images/blog/implants.webp'
  }
];
