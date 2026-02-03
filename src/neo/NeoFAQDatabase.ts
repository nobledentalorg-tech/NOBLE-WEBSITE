export interface FAQData {
    id: string;
    question: string;
    conciseAnswer: string; // 50 words max, bold key terms
    clinicalDetail: string; // Detailed explanation
    category: string;
    relatedServices: string[];
}

// ... (previous entries included in full replacement below for safety)

export const DENTAL_FAQ_DB: Record<string, FAQData> = {
    // --- GUM HEALTH ---
    'bleed-brushing': {
        id: 'bleed-brushing',
        question: 'Why do my gums bleed when I brush?',
        conciseAnswer: 'Bleeding gums are the **#1 sign of Gingivitis** (early gum disease). It means plaque bacteria are irritating your gums. It is **not normal**. Do not stop brushing; instead, brush gently and see a dentist for a cleaning to stop the infection.',
        clinicalDetail: 'Gingivitis is reversible. If left untreated, it progresses to Periodontitis, where the bone supporting the teeth is destroyed. Dr. Dhivakaran recommends a "Scaling & Polishing" procedure to remove the hardened tartar that your brush cannot reach. Using a soft-bristled brush and floss daily prevents recurrence.',
        category: 'Gum Health',
        relatedServices: ['Teeth Cleaning', 'Gum Surgery']
    },
    'bad-breath': {
        id: 'bad-breath',
        question: 'How do I get rid of chronic bad breath?',
        conciseAnswer: 'Chronic bad breath (Halitosis) is usually caused by **bacteria on the tongue** or untreated gum disease. Mouthwash only masks it. To cure it, you need to remove the source: tartar buildup or decay.',
        clinicalDetail: 'Tongue scraping and professional cleaning are the most effective cures. If the odor persists, it may be due to tonsil stones or gastric issues.',
        category: 'Gum Health',
        relatedServices: ['Teeth Cleaning']
    },
    'receding-gums': {
        id: 'receding-gums',
        question: 'Can receding gums grow back?',
        conciseAnswer: 'No, gum tissue does not regenerate naturally once lost. However, the process can be **stopped** by switching to a soft brush and treating gum disease. In severe cases, a gum graft surgery can cover the exposed roots.',
        clinicalDetail: 'Gum recession is often caused by "aggressive brushing" or grinding teeth. We may prescribe a desensitizing toothpaste to help with sensitivity caused by exposed roots.',
        category: 'Gum Health',
        relatedServices: ['Gum Surgery']
    },

    // --- ENDODONTICS (Root Canal) ---
    'root-canal-pain': {
        id: 'root-canal-pain',
        question: 'Is a Root Canal painful?',
        conciseAnswer: 'No. With modern **local anesthesia**, a Root Canal is as **painless as a filling**. The pain you feel comes from the infection itself, not the treatment. The procedure removes the nerve, instantly stopping the pain.',
        clinicalDetail: 'At Noble Dental Care, we use "Electronic Anesthesia Delivery" (Wand) which makes even the injection pain-free. A Root Canal allows you to keep your natural tooth instead of extracting it. Post-procedure discomfort is mild and manageable with Ibuprofen.',
        category: 'Endodontics',
        relatedServices: ['Root Canal Treatment', 'Crowns']
    },
    'root-canal-cost': {
        id: 'root-canal-cost',
        question: 'How much does a Root Canal cost?',
        conciseAnswer: 'A standard Root Canal starts at **₹4,500**. Microscopic Root Canal treatment (for higher precision) ranges from **₹6,000 to ₹8,000**. The final crown is charged separately depending on the material chosen.',
        clinicalDetail: 'Investing in a Microscopic RCT (using Zeiss optics) increases the success rate to near 99% by locating hidden canals that standard treatment might miss.',
        category: 'Endodontics',
        relatedServices: ['Root Canal Treatment']
    },
    'rct-alternative': {
        id: 'rct-alternative',
        question: 'Is there an alternative to Root Canal treatment?',
        conciseAnswer: 'The only alternative is **extracting the tooth**. However, replacing a missing tooth with an implant or bridge is significantly more expensive than saving it with a Root Canal.',
        clinicalDetail: 'We always advise saving the natural tooth whenever possible. Implants are great, but your own tooth is best.',
        category: 'Endodontics',
        relatedServices: ['Extraction', 'Dental Implants']
    },
    'single-sitting-rct': {
        id: 'single-sitting-rct',
        question: 'Is Single Sitting Root Canal safe?',
        conciseAnswer: 'Yes, for most cases of vital (living) teeth or mild infections. It saves time and requires only one anesthesia shot. Severe abscesses may still require 2 visits for drainage.',
        clinicalDetail: 'Dr. Dhivakaran specializes in single-visit Micro-Endodontics, completing the cleaning and shaping in 45-60 minutes.',
        category: 'Endodontics',
        relatedServices: ['Root Canal Treatment']
    },
    'cap-necessary': {
        id: 'cap-necessary',
        question: 'Is a crown (cap) necessary after Root Canal?',
        conciseAnswer: 'Yes, absolutely. A root canal treated tooth becomes **brittle** because it has no blood supply. Without a crown, it is very likely to fracture under chewing pressure.',
        clinicalDetail: 'We recommend Zirconia crowns for the best balance of strength and aesthetics. The crown seals the tooth and prevents reinfection.',
        category: 'Endodontics',
        relatedServices: ['Crowns']
    },

    // --- IMPLANTS ---
    'implant-cost-hyderabad': {
        id: 'implant-cost-hyderabad',
        question: 'How much does a Dental Implant cost in Hyderabad?',
        conciseAnswer: 'A single dental implant usually costs between **₹25,000 to ₹45,000**, depending on the brand (Osstem vs. Nobel Biocare). This includes the titanium screw and the surgical procedure. The crown (cap) is charged separately based on material (Metal vs. Zirconia).',
        clinicalDetail: 'Price variations exist due to the quality of the titanium surface treatments (which affect healing speed) and the type of warranty offered. Dr. Dhivakaran offers a 15-year warranty on premium implants. We recommend scheduling a consultation for a precise quote as bone grafting requirements can affect the total.',
        category: 'Implants',
        relatedServices: ['Dental Implants', 'Full Mouth Rehabilitation']
    },
    'implant-pain': {
        id: 'implant-pain',
        question: 'Is dental implant surgery painful?',
        conciseAnswer: 'Surprisingly, most patients report **less pain** with implants than with a tooth extraction. It is done under sterile conditions with precise anesthesia.',
        clinicalDetail: 'We use 3D Computed Tomography (CBCT) to plan the surgery digitally, meaning we don’t need to make large incisions. This keyhole approach ensures faster healing.',
        category: 'Implants',
        relatedServices: ['Dental Implants']
    },
    'implant-diabetic': {
        id: 'implant-diabetic',
        question: 'Can diabetics get dental implants?',
        conciseAnswer: 'Yes, provided your blood sugar is **controlled** (HbA1c under 7.5). Uncontrolled diabetes increases the risk of infection and implant failure.',
        clinicalDetail: 'We coordinate with your physician to manage your levels before surgery. Once healed, implants actually help diabetics eat a better, more fibrous diet.',
        category: 'Implants',
        relatedServices: ['Dental Implants']
    },
    'immediate-implant': {
        id: 'immediate-implant',
        question: 'Can I get a tooth immediately after extraction?',
        conciseAnswer: 'Yes, this is called an **Immediate Implant**. If there is no severe infection and enough bone, we can place the implant in the same appointment as the extraction.',
        clinicalDetail: 'This preserves the bone and gum architecture. In aesthetic zones (front teeth), we can sometimes even place a temporary crown the same day.',
        category: 'Implants',
        relatedServices: ['Dental Implants']
    },
    'implant-life': {
        id: 'implant-life',
        question: 'How long do dental implants last?',
        conciseAnswer: 'With good hygiene, dental implants can last a **lifetime**. The crown on top may need replacement after 10-15 years due to wear.',
        clinicalDetail: 'The leading cause of implant failure is "Peri-implantitis" (infection) caused by poor cleaning. Maintenance is key.',
        category: 'Implants',
        relatedServices: ['Dental Implants']
    },

    // --- ORTHODONTICS (Invisalign) ---
    'invisalign-cost': {
        id: 'invisalign-cost',
        question: 'What is the cost of Invisalign in Hyderabad?',
        conciseAnswer: 'Invisalign treatments range from **₹1.5 Lakh to ₹3.5 Lakh** depending on the complexity. Simple cases use "Invisalign Lite", while complex bite corrections need "Invisalign Comprehensive".',
        clinicalDetail: 'We also offer unbranded Clear Aligners starting at ₹60,000 for budget-conscious patients, though Invisalign remains the gold standard for predictability.',
        category: 'Orthodontics',
        relatedServices: ['Invisalign']
    },
    'braces-age': {
        id: 'braces-age',
        question: 'Am I too old for braces?',
        conciseAnswer: 'No! There is **no age limit** for moving teeth. As long as your gums and bone are healthy, you can straighten your teeth at 30, 40, or even 60.',
        clinicalDetail: 'Adult orthodontics is very common. We highly recommend Invisalign for adults as it is invisible and does not impact your social or professional life.',
        category: 'Orthodontics',
        relatedServices: ['Invisalign', 'Braces']
    },
    'invisalign-vs-braces': {
        id: 'invisalign-vs-braces',
        question: 'Is Invisalign better than metal braces?',
        conciseAnswer: 'For comfort and hygiene, **Invisalign is superior**. It allows you to eat whatever you want and brush easily. Metal braces are faster for certain complex surgical cases.',
        clinicalDetail: 'Invisalign uses smart force attachments to move teeth precisely without the pain of poking wires.',
        category: 'Orthodontics',
        relatedServices: ['Invisalign']
    },
    'retainer-necessary': {
        id: 'retainer-necessary',
        question: 'Do I need retainers forever?',
        conciseAnswer: 'Yes. Teeth have a memory and will try to move back. You must wear retainers **every night** to maintain your new smile.',
        clinicalDetail: 'We offer "Vivera" retainers which are durable and comfortable. Think of them as night-cream for your teeth—maintenance is essential.',
        category: 'Orthodontics',
        relatedServices: ['Invisalign']
    },

    // --- COSMETIC ---
    'yellow-teeth': {
        id: 'yellow-teeth',
        question: 'Why are my teeth yellow despite brushing?',
        conciseAnswer: 'Yellowing can be intrinsic (inside the tooth) or extrinsic (surface stains). Aging naturally thins the white enamel, revealing the yellow dentin underneath. **Coffee, tea, and turmeric** also stain the surface. Brushing alone cannot whiten deep stains.',
        clinicalDetail: 'For surface stains, a professional cleaning works. For deeper yellowing, "Professional Zoom Whitening" is required to bleach the enamel safely. Avoid abrasive "whitening toothpastes" as they damage enamel over time.',
        category: 'Cosmetic',
        relatedServices: ['Teeth Whitening', 'Veneers']
    },
    'veneers-damage': {
        id: 'veneers-damage',
        question: 'Do veneers ruin your natural teeth?',
        conciseAnswer: 'Minimal preparation veneers require removing a **very thin layer** (0.5mm) of enamel. This is irreversible but does not "ruin" the tooth health if done by an expert.',
        clinicalDetail: 'We also offer "No-Prep Veneers" in selected cases where no drilling is required at all.',
        category: 'Cosmetic',
        relatedServices: ['Veneers']
    },
    'whitening-sensitivity': {
        id: 'whitening-sensitivity',
        question: 'Does teeth whitening cause sensitivity?',
        conciseAnswer: 'Temporary sensitivity for 24 hours is common. Modern systems like Philips Zoom use desensitizers to minimize this.',
        clinicalDetail: 'We advise avoiding cold drinks for a day after whitening. The sensitivity always subsides.',
        category: 'Cosmetic',
        relatedServices: ['Teeth Whitening']
    },

    // --- PEDIATRIC ---
    'kids-dentist-age': {
        id: 'kids-dentist-age',
        question: 'When should my child first visit the dentist?',
        conciseAnswer: 'The first visit should be **by their 1st birthday** or when the first tooth appears. This is to check for development and educate parents on hygiene.',
        clinicalDetail: 'Early visits are "Happy Visits" to build trust. Waiting until there is pain creates dental anxiety.',
        category: 'Pediatric',
        relatedServices: ['Kids Dentistry']
    },
    'cavity-milk-teeth': {
        id: 'cavity-milk-teeth',
        question: 'Do milk teeth need fillings?',
        conciseAnswer: 'Yes. Milk teeth hold space for permanent teeth. Losing them early due to decay causes **crowding** in the future. Also, untreated infection can damage the permanent tooth bud beneath.',
        clinicalDetail: 'Simple fillings prevent big problems. For deep decay, we perform "Pulpectomy" (Baby Root Canal).',
        category: 'Pediatric',
        relatedServices: ['Kids Dentistry']
    },
    'fluoride-safety': {
        id: 'fluoride-safety',
        question: 'Is fluoride safe for children?',
        conciseAnswer: 'Yes, in appropriate chemical dosages. Fluoride serves as a **shield** for enamel against acid attacks. It is the #1 way to prevent cavities.',
        clinicalDetail: 'We apply a professional fluoride varnish twice a year. It takes 2 minutes and reduces cavity risk by 40%.',
        category: 'Pediatric',
        relatedServices: ['Kids Dentistry']
    },

    // --- GENERAL ---
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
    },
    'sensitivity-cause': {
        id: 'sensitivity-cause',
        question: 'What causes sudden tooth sensitivity?',
        conciseAnswer: 'Sensitivity is usually exposed dentin. Causes include **hard brushing**, acidic foods eroding enamel, or a crack in the tooth.',
        clinicalDetail: 'Switching to a desensitizing toothpaste (like Sensodyne) helps mild cases. If pain persists, you may need a filling or bonding agent.',
        category: 'General Dentistry',
        relatedServices: ['Tooth Fillings']
    },
    'pregnancy-dentist': {
        id: 'pregnancy-dentist',
        question: 'Is it safe to visit the dentist while pregnant?',
        conciseAnswer: 'Yes, and it is **essential**. Hormone changes cause "Pregnancy Gingivitis". Infections in the mouth have been linked to pre-term birth.',
        clinicalDetail: 'The second trimester is the safest time for procedures. We limit X-rays and use safe anesthetics. Cleaning is recommended.',
        category: 'General Dentistry',
        relatedServices: ['Teeth Cleaning']
    },
    'electric-brush': {
        id: 'electric-brush',
        question: 'Is an electric toothbrush better?',
        conciseAnswer: 'Studies show electric toothbrushes remove **more plaque** with less effort than manual ones. They also have timers to ensure you brush for 2 minutes.',
        clinicalDetail: 'We recommend Oral-B or Philips Sonicare. They prevent "scrubbing" which protects your gums from recession.',
        category: 'General Dentistry',
        relatedServices: ['Teeth Cleaning']
    },
    'charcoal-toothpaste': {
        id: 'charcoal-toothpaste',
        question: 'Is charcoal toothpaste good?',
        conciseAnswer: 'No. Charcoal is **abrasive**. It scrubs away stains but also scrubs away your enamel. Long term use leads to yellowing and sensitivity.',
        clinicalDetail: 'Stick to fluoridated toothpaste with a seal of acceptance. Whitening should be done chemically (bleach), not aggressively (scrubbing).',
        category: 'General Dentistry',
        relatedServices: ['Teeth Whitening']
    },
    'silver-fillings': {
        id: 'silver-fillings',
        question: 'Should I replace my old silver fillings?',
        conciseAnswer: 'Only if they are broken or leaking. Silver (amalgam) is strong but requires drilling more tooth structure. We use **tooth-colored composites** for all new fillings.',
        clinicalDetail: 'Composite bonds to the tooth, strengthening it. Silver does not bond and can act as a wedge, cracking the tooth over time.',
        category: 'General Dentistry',
        relatedServices: ['Tooth Fillings']
    },
    'mouthwash-necessary': {
        id: 'mouthwash-necessary',
        question: 'Is mouthwash necessary?',
        conciseAnswer: 'It is a good **adjunct**, but not a substitute for brushing/flossing. Use a therapeutic mouthwash (non-alcoholic) for cavity protection or gum health.',
        clinicalDetail: 'Avoid alcohol-based mouthwashes as they dry the mouth, worsening breath in the long run.',
        category: 'General Dentistry',
        relatedServices: ['Teeth Cleaning']
    },
    'floss-everyday': {
        id: 'floss-everyday',
        question: 'Do I really need to floss everyday?',
        conciseAnswer: 'Yes. Brushing only cleans 60% of the tooth surface. The areas between teeth are where **cavities starts**. Floss cleans where the brush misses.',
        clinicalDetail: 'Water flossers are a great alternative if you find string floss difficult.',
        category: 'General Dentistry',
        relatedServices: ['Teeth Cleaning']
    },
    'dental-xray-safety': {
        id: 'dental-xray-safety',
        question: 'Are dental X-rays safe?',
        conciseAnswer: 'Yes. Digital X-rays emit **extremely low radiation**. A set of dental X-rays is equivalent to the background radiation you get from a 2-hour flight.',
        clinicalDetail: 'We use lead aprons and fast sensors to minimize exposure. The risk of missing a hidden infection is far greater than the risk of the X-ray.',
        category: 'General Dentistry',
        relatedServices: ['Consultation']
    }
};
