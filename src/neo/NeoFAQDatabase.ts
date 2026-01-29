export interface FAQData {
    id: string;
    question: string;
    conciseAnswer: string; // 50 words max, bold key terms
    clinicalDetail: string; // Detailed explanation
    category: string;
    relatedServices: string[];
}

export const DENTAL_FAQ_DB: Record<string, FAQData> = {
    'bleed-brushing': {
        id: 'bleed-brushing',
        question: 'Why do my gums bleed when I brush?',
        conciseAnswer: 'Bleeding gums are the **#1 sign of Gingivitis** (early gum disease). It means plaque bacteria are irritating your gums. It is **not normal**. Do not stop brushing; instead, brush gently and see a dentist for a cleaning to stop the infection.',
        clinicalDetail: 'Gingivitis is reversible. If left untreated, it progresses to Periodontitis, where the bone supporting the teeth is destroyed. Dr. Dhivakaran recommends a "Scaling & Polishing" procedure to remove the hardened tartar that your brush cannot reach. Using a soft-bristled brush and floss daily prevents recurrence.',
        category: 'Gum Health',
        relatedServices: ['Teeth Cleaning', 'Gum Surgery']
    },
    'root-canal-pain': {
        id: 'root-canal-pain',
        question: 'Is a Root Canal painful?',
        conciseAnswer: 'No. With modern **local anesthesia**, a Root Canal is as **painless as a filling**. The pain you feel comes from the infection itself, not the treatment. The procedure removes the nerve, instantly stopping the pain.',
        clinicalDetail: 'At Noble Dental Care, we use "Electronic Anesthesia Delivery" (Wand) which makes even the injection pain-free. A Root Canal allows you to keep your natural tooth instead of extracting it. Post-procedure discomfort is mild and manageable with Ibuprofen.',
        category: 'Endodontics',
        relatedServices: ['Root Canal Treatment', 'Crowns']
    },
    'implant-cost-hyderabad': {
        id: 'implant-cost-hyderabad',
        question: 'How much does a Dental Implant cost in Hyderabad?',
        conciseAnswer: 'A single dental implant usually costs between **₹25,000 to ₹45,000**, depending on the brand (Osstem vs. Nobel Biocare). This includes the titanium screw and the surgical procedure. The crown (cap) is charged separately based on material (Metal vs. Zirconia).',
        clinicalDetail: 'Price variations exist due to the quality of the titanium surface treatments (which affect healing speed) and the type of warranty offered. Dr. Dhivakaran offers a 15-year warranty on premium implants. We recommend scheduling a consultation for a precise quote as bone grafting requirements can affect the total.',
        category: 'Implants',
        relatedServices: ['Dental Implants', 'Full Mouth Rehabilitation']
    },
    'yellow-teeth': {
        id: 'yellow-teeth',
        question: 'Why are my teeth yellow despite brushing?',
        conciseAnswer: 'Yellowing can be intrinsic (inside the tooth) or extrinsic (surface stains). Aging naturally thins the white enamel, revealing the yellow dentin underneath. **Coffee, tea, and turmeric** also stain the surface. Brushing alone cannot whiten deep stains.',
        clinicalDetail: 'For surface stains, a professional cleaning works. For deeper yellowing, "Professional Zoom Whitening" is required to bleach the enamel safely. Avoid abrasive "whitening toothpastes" as they damage enamel over time.',
        category: 'Cosmetic',
        relatedServices: ['Teeth Whitening', 'Veneers']
    },
    'cavity-spread': {
        id: 'cavity-spread',
        question: 'Can a cavity spread to other teeth?',
        conciseAnswer: 'Yes. Cavities are caused by **bacteria** (Streptococcus mutans) required. These bacteria can spread to adjacent teeth through saliva or direct contact. If one tooth has a hole, the neighboring tooth is at **high risk**.',
        clinicalDetail: 'Treating a small cavity with a composite filling is quick and inexpensive. Delaying treatment allows the decay to reach the pulp (nerve), necessitating a Root Canal. Flossing between teeth is the single best way to prevent cavities from spreading.',
        category: 'General Dentistry',
        relatedServices: ['Tooth Fillings', 'Invisalign']
    },
    'wisdom-tooth-removal': {
        id: 'wisdom-tooth-removal',
        question: 'Do I really need to remove my Wisdom Tooth?',
        conciseAnswer: 'Not always. If it grows straight and has room, you can keep it. However, most wisdom teeth are **impacted** (stuck), leading to **pain, infection, or damage** to the neighbor tooth. In these cases, extraction is mandatory.',
        clinicalDetail: 'We use an OPG X-ray to determine the position. If the tooth is buried horizontally, it acts as a food trap causing "Pericoronitis" (severe gum swelling). Removal is a minor surgical procedure done under anesthesia.',
        category: 'Oral Surgery',
        relatedServices: ['Wisdom Tooth Surgery', 'Extraction']
    }
};
