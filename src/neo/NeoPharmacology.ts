import { LocalizedText } from '../types/neoSchema';

export interface DrugProtocol {
    id: string;
    class: string;
    genericName: string;
    brandExamples: string[];
    adultDosage: string;
    pediatricDosage: string;
    pregnancyCategory: 'A' | 'B' | 'C' | 'D' | 'X';
    citations: string[];
    mechanism: LocalizedText;
    whoShouldTake: LocalizedText;
    whoShouldNotTake: LocalizedText;
    patientAdvice: LocalizedText;
}

export const DENTAL_PHARMACOPOEIA: Record<string, DrugProtocol> = {

    // 1. ANTIBIOTIC (Gold Standard)
    'amoxicillin': {
        id: 'amoxicillin',
        class: 'Antibiotic (Beta-Lactam)',
        genericName: 'Amoxicillin 500mg',
        brandExamples: ['Amox', 'Novamox', 'Mox'],
        adultDosage: '500mg TDS (8 hourly) for 5 days',
        pediatricDosage: '40 mg/kg/day in divided doses',
        pregnancyCategory: 'B',
        citations: ["KD Tripathi 8th Ed", "CDSCO Approved", "AHA Guidelines"],
        mechanism: {
            en: "Kills bacteria by destroying their cell wall structure. ",
            ta: "பாக்டீரியாவின் செல் சுவரை அழித்து அதை கொள்கிறது.",
            te: "బ్యాక్టీరియా రక్షణ కవచాన్ని నాశనం చేసి చంపుతుంది.",
            hi: "बैक्टीरिया की दीवार को नष्ट करके उसे मारता है।",
            kn: "ಬ್ಯಾಕ್ಟೀರಿಯಾದ ರಕ್ಷಣಾತ್ಮಕ ಗೋಡೆಯನ್ನು ನಾಶಪಡಿಸುತ್ತದೆ.",
            ml: "ബാക്ടീരിയയുടെ സെൽ ഭിത്തി തകർത്ത് നശിപ്പിക്കുന്നു."
        },
        whoShouldTake: {
            en: "Patients with bacterial infections like abscesses or cellulitis.",
            ta: "பல் சீழ் அல்லது ஈறு தொற்று உள்ளவர்கள்.",
            te: "పంటి చీము లేదా వాపు ఉన్నవారు.",
            hi: "मवाद या संक्रमण वाले रोगी।",
            kn: "ಕೀವು ಅಥವಾ సోంకు ಇರುವವರು.",
            ml: "പഴുപ്പ് അല്ലെങ്കിൽ അണുബാധ ഉള്ളവർ."
        },
        whoShouldNotTake: {
            en: "Anyone with a Penicillin allergy.",
            ta: "பெனிசிலின் ஒவ்வாமை உள்ளவர்கள்.",
            te: "పెన్సిలిన్ ఎలర్జీ ఉన్నవారు.",
            hi: "पेनिसिलिन से एलर्जी वाले।",
            kn: "ಪೆನ್ಸಿಲಿನ್ ಅಲರ್ಜಿ ಇರುವವರು.",
            ml: "പെൻസിലിൻ അലർജിയുള്ളവർ."
        },
        patientAdvice: {
            en: "Finish the full course to prevent resistance.",
            ta: "முழு கோர்ஸையும் முடிக்கவும்.",
            te: "కోర్సు పూర్తిగా వాడాలి.",
            hi: "पूरा कोर्स खत्म करें।",
            kn: "ಕೋರ್ಸ್ ಪೂರ್ಣಗೊಳಿಸಿ.",
            ml: "കോഴ്സ് പൂർത്തിയാക്കുക."
        }
    },

    // 2. ANALGESIC (NSAID)
    'ibuprofen': {
        id: 'ibuprofen',
        class: 'Analgesic (NSAID)',
        genericName: 'Ibuprofen 400mg',
        brandExamples: ['Brufen', 'Ibugesic'],
        adultDosage: '400mg TDS after food',
        pediatricDosage: '10 mg/kg/dose',
        pregnancyCategory: 'C', // Avoid in 3rd Trimester
        citations: ["FDA Black Box Warning", "KD Tripathi: NSAIDs"],
        mechanism: {
            en: "Reduces pain and swelling by blocking prostaglandin chemicals. ",
            ta: "வீக்கத்தை உண்டாக்கும் ரசாயனங்களை தடுக்கிறது.",
            te: "వాపును తగ్గించే రసాయనాలను అడ్డుకుంటుంది.",
            hi: "सूजन और दर्द कम करता है।",
            kn: "ಊತ ಮತ್ತು ನೋವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
            ml: "നീർവീക്കവും വേദനയ്ക്കും കുറയ്ക്കുന്നു."
        },
        whoShouldTake: {
            en: "Best for toothache with visible swelling.",
            ta: "வீக்கத்துடன் கூடிய பல் வலிக்கு சிறந்தது.",
            te: "వాపుతో కూడిన నొప్పికి మంచిది.",
            hi: "सूजन के साथ दर्द के लिए।",
            kn: "ಊತದೊಂದಿಗೆ ನೋವಿಗೆ ಉತ್ತಮ.",
            ml: "നീർവീക്കത്തോടുകൂടിയ വേദനയ്ക്ക്."
        },
        whoShouldNotTake: {
            en: "Patients with stomach ulcers or asthma.",
            ta: "வயிற்றுப் புண் அல்லது ஆஸ்துமா உள்ளவர்கள்.",
            te: "అల్సర్ లేదా ఆస్తమా ఉన్నవారు.",
            hi: "पेट के अल्सर या अस्थमा वाले।",
            kn: "ಹೊಟ್ಟೆ ಹುಣ್ಣು ಇರುವವರು.",
            ml: "അൾസർ അല്ലെങ്കിൽ ആസ്ത്മ ഉള്ളവർ."
        },
        patientAdvice: {
            en: "Always take after a full meal.",
            ta: "உணவுக்குப் பின் மட்டுமே எடுக்கவும்.",
            te: "భోజనం తర్వాతే వేసుకోండి.",
            hi: "भोजन के बाद लें।",
            kn: "ಊಟದ ನಂತರ ತೆಗೆದುಕೊಳ್ಳಿ.",
            ml: "ഭക്ഷണത്തിന് ശേഷം കഴിക്കുക."
        }
    },

    // 3. ANESTHETIC (Local)
    'lignocaine': {
        id: 'lignocaine',
        class: 'Local Anesthetic',
        genericName: 'Lignocaine 2% + Adrenaline',
        brandExamples: ['Lignox', 'Xylocaine'],
        adultDosage: 'Max 7mg/kg',
        pediatricDosage: 'Max 4.4mg/kg',
        pregnancyCategory: 'B',
        citations: ["Malamed: Handbook of Local Anesthesia"],
        mechanism: {
            en: "Temporarily blocks nerve signals to the brain. ",
            ta: "நரம்பு சமிக்ஞைகளை தற்காலிகமாக துண்டிக்கிறது.",
            te: "నరాల సంకేతాలను ఆపివేస్తుంది.",
            hi: "नसों के संकेतों को रोकता है।",
            kn: "ನರಗಳ ಸಂಕೇತಗಳನ್ನು ತಡೆಯುತ್ತದೆ.",
            ml: "നാഡികളുടെ പ്രവർത്തനം താൽക്കാലികമായി നിർത്തുന്നു."
        },
        whoShouldTake: {
            en: "Used by doctors for extractions and root canals.",
            ta: "பல் பிடுங்குதல் மற்றும் வேர் சிகிச்சைக்கு.",
            te: "పన్ను తీయడానికి మరియు RCT కి.",
            hi: "दांत निकालने और आरसीटी के लिए।",
            kn: "ಹಲ್ಲು ಕೀಳಲು ಮತ್ತು ಆರ್ಸಿಟಿಗೆ.",
            ml: "പല്ല് പറിക്കുന്നതിനും ആർസിടിക്കും."
        },
        whoShouldNotTake: {
            en: "Patients with uncontrolled hyperthyroidism (due to adrenaline).",
            ta: "கட்டுப்படுத்தப்படாத தைராய்டு பிரச்சனை உள்ளவர்கள்.",
            te: "థైరాయిడ్ సమస్య ఎక్కువగా ఉన్నవారు.",
            hi: "अनियंत्रित थायराइड वाले।",
            kn: "ಥೈರಾಯ್ಡ್ ಸಮಸ್ಯೆ ಇರುವವರು.",
            ml: "തൈറോയ്ഡ് പ്രശ്നമുള്ളവർ."
        },
        patientAdvice: {
            en: "Do not chew your lip while numb.",
            ta: "உதடு மரத்து இருக்கும்போது கடிக்க வேண்டாம்.",
            te: "మత్తులో ఉన్నప్పుడు పెదవి కొరకద్దు.",
            hi: "सुन्न होने पर होंठ न चबाएं।",
            kn: "ಮರವಿದ್ದಾಗ ತುಟಿ ಕಚ್ಚಬೇಡಿ.",
            ml: "മരവിപ്പുള്ളപ്പോൾ ചുണ്ട് കടിക്കരുത്."
        }
    },

    // 4. ANTIFUNGAL (Oral Thrush)
    'clotrimazole': {
        id: 'clotrimazole',
        class: 'Antifungal',
        genericName: 'Clotrimazole 1% Paint',
        brandExamples: ['Candid Mouth Paint'],
        adultDosage: 'Apply 3-4 times daily',
        pediatricDosage: 'Same as adult',
        pregnancyCategory: 'B',
        citations: ["CDC Fungal Guidelines"],
        mechanism: {
            en: "Destroys the fungal cell membrane.",
            ta: "பூஞ்சையின் செல் உறையை அழிக்கிறது.",
            te: "ఫంగస్ కణాలను నాశనం చేస్తుంది.",
            hi: "फंगस को नष्ट करता है।",
            kn: "ಶಿಲೀಂಧ್ರವನ್ನು ನಾಶಪಡಿಸುತ್ತದೆ.",
            ml: "ഫംഗസിനെ നശിപ്പിക്കുന്നു."
        },
        whoShouldTake: {
            en: "Patients with white patches (Oral Thrush).",
            ta: "வாயில் வெள்ளை திட்டு (பூஞ்சை தொற்று) உள்ளவர்கள்.",
            te: "నోటిలో తెల్లటి మచ్చలు ఉన్నవారు.",
            hi: "मुंह में सफेद दाग वाले।",
            kn: "ಬಾಯಿಯಲ್ಲಿ ಬಿಳಿ ಕಲೆ ಇರುವವರು.",
            ml: "വായയിൽ വെളുത്ത പാടുകൾ ഉള്ളവർ."
        },
        whoShouldNotTake: {
            en: "Known hypersensitivity.",
            ta: "ஒவ்வாமை உள்ளவர்கள்.",
            te: "ఎలర్జీ ఉన్నవారు.",
            hi: "एलर्जी वाले।",
            kn: "ಅಲರ್ಜಿ ಇರುವವರು.",
            ml: "അലർജിയുള്ളവർ."
        },
        patientAdvice: {
            en: "Keep in mouth for 2 minutes before swallowing.",
            ta: "விழுங்குவதற்கு முன் 2 நிமிடம் வாயில் வைத்திருக்கவும்.",
            te: "మింగే ముందు 2 నిమిషాలు నోట్లో ఉంచండి.",
            hi: "निगलने से पहले 2 मिनट मुंह में रखें।",
            kn: "ನುಂಗುವ ಮೊದಲು 2 ನಿಮಿಷ ಬಾಯಿಯಲ್ಲಿಡಿ.",
            ml: "വിഴുങ്ങുന്നതിന് മുമ്പ് 2 മിനിറ്റ് വായയിൽ വയ്ക്കുക."
        }
    },

    // 5. ANTIVIRAL (Herpes/Cold Sores)
    'acyclovir': {
        id: 'acyclovir',
        class: 'Antiviral',
        genericName: 'Acyclovir 200mg / Cream',
        brandExamples: ['Zovirax', 'Acivir'],
        adultDosage: '200mg 5 times daily for 5 days',
        pediatricDosage: 'Consult Pediatrician',
        pregnancyCategory: 'B',
        citations: ["KD Tripathi: Antivirals"],
        mechanism: {
            en: "Stops the virus from replicating DNA. ",
            ta: "வைரஸ் பரவுவதை தடுக்கிறது.",
            te: "వైరస్ వ్యాప్తిని అడ్డుకుంటుంది.",
            hi: "वायरस को बढ़ने से रोकता है।",
            kn: "ವೈರಸ್ ಹರಡುವುದನ್ನು ತಡೆಯುತ್ತದೆ.",
            ml: "വൈറസ് പടരുന്നത് തടയുന്നു."
        },
        whoShouldTake: {
            en: "Patients with painful blisters on lips (Herpes Labialis).",
            ta: "உதட்டில் கொபுளம் (ஹெர்பெஸ்) உள்ளவர்கள்.",
            te: "పెదవిపై కురుపులు ఉన్నవారు.",
            hi: "होंठों पर छाले वाले रोगी।",
            kn: "ತುಟಿಯ ಮೇಲೆ ಬೊಕ್ಕೆ ಇರುವವರು.",
            ml: "ചുണ്ടിൽ കുരുക്കൾ ഉള്ളവർ."
        },
        whoShouldNotTake: {
            en: "Kidney failure patients (Oral dose).",
            ta: "சிறுநீரகக் கோளாறு உள்ளவர்கள்.",
            te: "కిడ్నీ సమస్య ఉన్నవారు.",
            hi: "किडनी रोगी।",
            kn: "ಕಿಡ್ನಿ సమస్య ಇರುವವರು.",
            ml: "കിഡ്നി രോഗികൾ."
        },
        patientAdvice: {
            en: "Start as soon as you feel the first tingling sensation.",
            ta: "கூச்ச உணர்வு தொடங்கிய உடனேயே பயன்படுத்தவும்.",
            te: "దురద మొదలైన వెంటనే వాడండి.",
            hi: "जलन महसूस होते ही शुरू करें।",
            kn: "ತುರಿಕೆ ಶುರುವಾದ ತಕ್ಷಣ ಬಳಸಿ.",
            ml: "തരിപ്പ് തുടങ്ങുമ്പോൾ തന്നെ ഉപയോഗിക്കുക."
        }
    },

    // 6. CORTICOSTEROID (Ulcers)
    'triamcinolone': {
        id: 'triamcinolone',
        class: 'Corticosteroid (Topical)',
        genericName: 'Triamcinolone Acetonide 0.1%',
        brandExamples: ['Kenacort', 'Tess'],
        adultDosage: 'Apply TDS after food',
        pediatricDosage: 'Apply BD',
        pregnancyCategory: 'C',
        citations: ["Burket's Oral Medicine"],
        mechanism: {
            en: "Suppresses immune response to reduce inflammation.",
            ta: "நோய் எதிர்ப்பு சக்தியை குறைத்து வீக்கத்தைக் குறைக்கிறது.",
            te: "వాపును తగ్గిస్తుంది.",
            hi: "सूजन कम करता है।",
            kn: "ಊತವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
            ml: "നീർവീക്കം കുറയ്ക്കുന്നു."
        },
        whoShouldTake: {
            en: "Painful mouth ulcers (Aphthous Ulcers).",
            ta: "வலிமிகுந்த வாய் புண் உள்ளவர்கள்.",
            te: "నోటి పూత ఉన్నవారు.",
            hi: "मुंह के छाले।",
            kn: "ಬಾಯಿ ಹುಣ್ಣು.",
            ml: "വായയിലെ പുണ്ണ്."
        },
        whoShouldNotTake: {
            en: "Viral or Fungal infections (Use makes it worse).",
            ta: "பூஞ்சை அல்லது வைரஸ் தொற்று உள்ளவர்கள் (பயன்படுத்தக்கூடாது).",
            te: "వైరల్ లేదా ఫంగల్ ఇన్ఫెక్షన్ ఉన్నవారు.",
            hi: "वायरल या फंगल संक्रमण वाले।",
            kn: "ವೈರಸ್ ಅಥವಾ ಫಂಗಲ್ ಸೋಂಕು ಇರುವವರು.",
            ml: "വൈറൽ അല്ലെങ്കിൽ ഫംഗസ് ബാധയുള്ളവർ."
        },
        patientAdvice: {
            en: "Dab paste on the ulcer. Do NOT rub.",
            ta: "புண் மீது தடவவும். தேய்க்க வேண்டாம்.",
            te: "పుండు మీద రాయండి. రుద్దకండి.",
            hi: "छाले पर लगाएं। रगड़ें नहीं।",
            kn: "ಹುಣ್ಣಿನ ಮೇಲೆ ಹಚ್ಚಿ. ಉಜ್ಜಬೇಡಿ.",
            ml: "പുണ്ണിൽ പുരട്ടുക. ഉരയ്ക്കരുത്."
        }
    },

    // 7. MUSCLE RELAXANT (TMJ/Jaw Pain)
    'thiocolchicoside': {
        id: 'thiocolchicoside',
        class: 'Muscle Relaxant',
        genericName: 'Thiocolchicoside 4mg',
        brandExamples: ['Myoril', 'Thioquest'],
        adultDosage: '4mg BD for 5 days',
        pediatricDosage: 'Not Recommended',
        pregnancyCategory: 'X', // UNSAFE
        citations: ["European Medicines Agency (EMA)"],
        mechanism: {
            en: "Relaxes skeletal muscles via CNS pathways.",
            ta: "தசைகளை தளர்த்தி வலியை குறைக்கிறது.",
            te: "కండరాలను సడలించి నొప్పి తగ్గిస్తుంది.",
            hi: "मांसपेशियों को आराम देता है।",
            kn: "ಸ್ನಾಯುಗಳನ್ನು ಸಡಿಲಗೊಳಿಸುತ್ತದೆ.",
            ml: "പേശികൾക്ക് അയവ് നൽകുന്നു."
        },
        whoShouldTake: {
            en: "Patients with jaw lock or severe muscle spasm.",
            ta: "தாடைப் பிடிப்பு உள்ளவர்கள்.",
            te: "దవడ పట్టేసిన వారు.",
            hi: "जबड़े में जकड़न वाले।",
            kn: "ದವಡೆ ಹಿಡಿತ ಇರುವವರು.",
            ml: "താടിയెല്ല് పిടുത്തം ഉള്ളവർ."
        },
        whoShouldNotTake: {
            en: "Pregnant women (Highly Unsafe).",
            ta: "கர்ப்பிணிகள் கண்டிப்பாக தவிர்க்கவும்.",
            te: "గర్భిణీలు అస్సలు వాడకూడదు.",
            hi: "गर्भवती महिलाएं (असुरक्षित)।",
            kn: "ಗರ್ಭಿಣಿಯರು (ಅಸುರಕ್ಷಿತ).",
            ml: "ഗർഭിണികൾ (സുരക്ഷിതമല്ല)."
        },
        patientAdvice: {
            en: "May cause drowsiness. Do not drive.",
            ta: "தூக்கம் வரலாம். வாகனம் ஓட்ட வேண்டாம்.",
            te: "నిద్ర రావచ్చు. డ్రైవింగ్ చేయవద్దు.",
            hi: "नींद आ सकती है। गाड़ी न चलाएं।",
            kn: "ನಿದ್ದೆ ಬರಬಹುದು. ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ.",
            ml: "ഉറക്കം വരാം. വാഹനം ഓടിക്കരുത്."
        }
    },

    // 8. EMERGENCY (Anaphylaxis)
    'adrenaline': {
        id: 'adrenaline',
        class: 'Emergency (Sympathomimetic)',
        genericName: 'Adrenaline 1:1000',
        brandExamples: ['Vasocon', 'EpiPen'],
        adultDosage: '0.5mg IM (Thigh)',
        pediatricDosage: '0.15 - 0.3mg IM',
        pregnancyCategory: 'C',
        citations: ["AHA ACLS Guidelines"],
        mechanism: {
            en: "Constricts blood vessels and opens airways instantly.",
            ta: "ரத்த நாளங்களை சுருக்கி மூச்சுக்குழாயை திறக்கிறது.",
            te: "రక్త నాళాలను కుదించి శ్వాస మార్గాలను తెరుస్తుంది.",
            hi: "सांस की नली को खोलता है।",
            kn: "ಉಸಿರಾಟದ ಮಾರ್ಗವನ್ನು ತೆರೆಯುತ್ತದೆ.",
            ml: "ശ്വാസനാളം തുറക്കുന്നു."
        },
        whoShouldTake: {
            en: "Life-threatening allergic reaction (Anaphylaxis).",
            ta: "உயிருக்கு ஆபத்தான ஒவ்வாமை (Allergy) ஏற்பட்டால்.",
            te: "తీవ్రమైన ఎలర్జీ రియాక్షన్.",
            hi: "जानलेवा एलर्जी।",
            kn: "ಪ್ರಾಣಾಪಾಯದ అలర్జి.",
            ml: "മാരകമായ അലർജി."
        },
        whoShouldNotTake: {
            en: "No absolute contraindication in life-threatening situations.",
            ta: "உயிர் காக்கும் சூழலில் எந்த தடையும் இல்லை.",
            te: "అత్యవసర సమయంలో ఎవరైనా వాడవచ్చు.",
            hi: "आपात स्थिति में कोई मनाही नहीं।",
            kn: "ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಯಾರೂ ಬಳಸಬಹುದು.",
            ml: "അടിയന്തിര ഘട്ടത്തിൽ ആർക്കും ഉപയോഗിക്കാം."
        },
        patientAdvice: {
            en: "Inject immediately into outer thigh. Call ambulance.",
            ta: "உடனடியாக தொடையில் ஊசி போடவும். ஆம்புலன்ஸை அழைக்கவும்.",
            te: "వెంటనే తొడకు ఇంజెక్షన్ చేయండి.",
            hi: "तुरंत जांघ में इंजेक्शन लगाएं।",
            kn: "ತಕ್ಷಣ ತೊಡೆಗೆ చుచ్చుమెద్దు నీడి.",
            ml: "തുടയിൽ കുത്തിവയ്ക്കുക. ആംബുലൻസ് വിളിക്കുക."
        }
    }
};

export class PharmaHelper {
    /**
     * Checks if antibiotic prophylaxis is needed (AHA Guidelines 2021)
     */
    static needsProphylaxis(condition: string): boolean {
        const high_risk = [
            'prosthetic cardiac valve',
            'previous infective endocarditis',
            'congenital heart disease',
            'cardiac transplant'
        ];
        return high_risk.some(r => condition.toLowerCase().includes(r));
    }

    /**
     * Returns safe drugs for pregnancy (Category B)
     */
    static getSafeDrugsPregnancy(): DrugProtocol[] {
        return Object.values(DENTAL_PHARMACOPOEIA).filter(d => d.pregnancyCategory === 'B');
    }
}
