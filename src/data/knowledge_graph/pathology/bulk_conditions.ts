import { MedicalCondition } from '../../../types/neoSchema';

export const BULK_CONDITIONS: Record<string, MedicalCondition> = {
    'gingivitis': {
        id: 'gingivitis',
        medicalTerm: { en: "Gingivitis", ta: "ஈறு வீக்கம்" },
        laymanTerm: { en: "Mild Gum Disease", ta: "ஆரம்ப ஈறு நோய்" },
        description: { en: "A common and mild form of gum disease that causes irritation, redness, and swelling of your gingiva (gums).", ta: "ஈறுகளில் ஏற்படும் வீக்கம் மற்றும் சிவப்பாதல்." },
        symptoms: { en: ["Red, puffy gums", "Bleeding when brushing", "Bad breath"], ta: ["சிவப்பு ஈறுகள்", "ரத்தம் வருதல்", "வாய் துர்நாற்றம்"] },
        cause: { en: "Poor oral hygiene leading to plaque buildup along the gumline.", ta: "பற்களை சரியாக சுத்தம் செய்யாததால் காரை சேருவது." },
        physiology: { en: "Bacterial plaque triggers a localized immune response, causing acute inflammation of the gingival tissue without bone loss.", ta: "பாக்டீரியா காரணமாக ஈறுகளில் ஏற்படும் ஆரம்பகட்ட வீக்கம்." },
        treatments: ['gum-disease', 'laser-dentistry']
    },
    'halitosis': {
        id: 'halitosis',
        medicalTerm: { en: "Halitosis", ta: "வாய் துர்நாற்றம்" },
        laymanTerm: { en: "Bad Breath", ta: "கெட்ட சுவாசம்" },
        description: { en: "Chronic bad breath that does not go away with standard oral hygiene practices.", ta: "தொடர்ச்சியான வாய் துர்நாற்றம்." },
        symptoms: { en: ["Unpleasant odor from the mouth", "White coating on the tongue", "Dry mouth"], ta: ["வாயில் இருந்து கெட்ட வாசனை", "நாக்கில் வெள்ளை படிவம்"] },
        cause: { en: "Bacteria on the tongue, gum disease, dry mouth, or systemic conditions like acid reflux.", ta: "நாக்கில் உள்ள பாக்டீரியா, ஈறு நோய் அல்லது வறண்ட வாய்." },
        physiology: { en: "Anaerobic bacteria degrade sulfur-containing amino acids, releasing volatile sulfur compounds (VSCs) which cause the odor.", ta: "பாக்டீரியாக்கள் புரதத்தை சிதைப்பதன் மூலம் கெட்ட வாசனை வாயுக்கள் உருவாகின்றன." },
        treatments: ['gum-disease']
    },
    'candidiasis': {
        id: 'candidiasis',
        medicalTerm: { en: "Oral Candidiasis", ta: "வாய்வழி கேண்டிடியாசிஸ்" },
        laymanTerm: { en: "Oral Thrush", ta: "வாயில் பூஞ்சை தொற்று" },
        description: { en: "A fungal infection where the Candida albicans fungus accumulates on the lining of the mouth.", ta: "வாயின் உட்புறத்தில் ஏற்படும் ஒரு வகை பூஞ்சை தொற்று." },
        symptoms: { en: ["Creamy white lesions on tongue or inner cheeks", "Redness or soreness", "Loss of taste"], ta: ["நாக்கில் வெள்ளை படிவுகள்", "எரிச்சல்", "சுவை இழப்பு"] },
        cause: { en: "Overgrowth of Candida fungus, often due to weakened immunity, antibiotics, or inhaled corticosteroids.", ta: "நோய் எதிர்ப்பு சக்தி குறைதல் அல்லது நுண்ணுயிர் எதிர்ப்பி மருந்துகள்." },
        physiology: { en: "Candida adheres to oral epithelial cells and forms hyphae, invading the superficial layers and causing pseudomembranous plaques.", ta: "பூஞ்சைகள் வாய் திசுக்களில் ஒட்டி படலங்களை உருவாக்குகின்றன." },
        treatments: ['laser-dentistry']
    },
    'bruxism': {
        id: 'bruxism',
        medicalTerm: { en: "Bruxism", ta: "ப்ரூக்ஸிஸம்" },
        laymanTerm: { en: "Teeth Grinding", ta: "பல் நரநரப்பு" },
        description: { en: "A condition in which you unconsciously gnash, grind or clench your teeth, often during sleep.", ta: "உறக்கத்தில் அல்லது விழித்திருக்கும்போது அறியாமல் பற்களை கடிப்பது அல்லது அரைப்பது." },
        symptoms: { en: ["Worn down teeth", "Jaw muscle pain", "Dull headaches originating in the temples"], ta: ["தேய்ந்த பற்கள்", "தாடை வலி", "தலைவலி"] },
        cause: { en: "Stress, anxiety, sleep apnea, or abnormal bite alignment.", ta: "மன அழுத்தம், பதட்டம் அல்லது தூக்கப் பிரச்சனைகள்." },
        physiology: { en: "Hyperactivity of the masseter and temporalis muscles leads to severe mechanical attrition of enamel and dentin.", ta: "தாடை தசைகளின் அதிகப்படியான செயல்பாட்டால் பற்கள் தேய்கின்றன." },
        treatments: ['full-mouth-rehab']
    },
    'xerostomia': {
        id: 'xerostomia',
        medicalTerm: { en: "Xerostomia", ta: "ஜெரோஸ்டோமியா" },
        laymanTerm: { en: "Dry Mouth", ta: "வறண்ட வாய்" },
        description: { en: "A condition in which the salivary glands in your mouth don't make enough saliva to keep your mouth wet.", ta: "வாயில் போதுமான உமிழ்நீர் சுரக்காத நிலை." },
        symptoms: { en: ["Sticky, dry feeling in mouth", "Difficulty chewing or swallowing", "Cracked lips"], ta: ["வாயில் வறட்சி", "விழுங்குவதில் சிரமம்", "உதடு வெடிப்பு"] },
        cause: { en: "Medications, aging, radiation therapy, or conditions like Sjogren's syndrome.", ta: "மருந்துகள், வயது முதிர்வு அல்லது கதிர்வீச்சு சிகிச்சை." },
        physiology: { en: "Hypofunction of the parotid, submandibular, or sublingual glands leads to reduced salivary flow, increasing caries risk.", ta: "உமிழ்நீர் சுரப்பிகளின் செயல்பாடு குறைவதால் உமிழ்நீர் குறைகிறது." },
        treatments: ['root-canal', 'gum-disease']
    },
    'impaction': {
        id: 'impaction',
        medicalTerm: { en: "Tooth Impaction", ta: "பல் உள்ளே சிக்கிக் கொள்ளுதல்" },
        laymanTerm: { en: "Impacted Wisdom Teeth", ta: "வளராத ஞானப்பல்" },
        description: { en: "When a tooth fails to fully emerge through the gums, often remaining trapped in the jawbone.", ta: "ஒரு பல் ஈறுக்கு வெளியே முழுமையாக வராமல் தாடை எலும்புக்குள்ளேயே சிக்கிக்கொள்ளும் நிலை." },
        symptoms: { en: ["Red, swollen gums around back of mouth", "Jaw pain", "Difficulty opening mouth"], ta: ["பின் ஈறுகளில் வீக்கம்", "தாடை வலி", "வாய் திறக்க சிரமம்"] },
        cause: { en: "Lack of space in the jawbone for the tooth to erupt properly.", ta: "தாடையில் போதுமான இடம் இல்லாதது." },
        physiology: { en: "The third molars (wisdom teeth) lack sufficient arch length to erupt, leading to partial eruption and subsequent pericoronitis or cyst formation.", ta: "ஞானப்பற்களுக்கு இடம் இல்லாததால் அவை எலும்புக்குள்ளேயே தங்கிவிடுகின்றன." },
        treatments: ['emergency-trauma', 'laser-dentistry']
    },
    'malocclusion': {
        id: 'malocclusion',
        medicalTerm: { en: "Malocclusion", ta: "மலோக்ளூஷன்" },
        laymanTerm: { en: "Crooked Teeth / Bad Bite", ta: "கோணலான பற்கள்" },
        description: { en: "Misalignment or incorrect relation between the teeth of the two dental arches when they approach each other.", ta: "மேல் மற்றும் கீழ் பற்கள் சரியாக பொருந்தாத நிலை." },
        symptoms: { en: ["Abnormal alignment of teeth", "Alteration in facial appearance", "Difficulty biting or chewing"], ta: ["பற்களின் சீரற்ற நிலை", "முக அமைப்பு மாறுதல்", "மெல்லுவதில் சிரமம்"] },
        cause: { en: "Genetics, childhood habits (thumb sucking), or mismatch in size between jaw and teeth.", ta: "மரபணுக்கள் அல்லது குழந்தை பருவ பழக்கவழக்கங்கள்." },
        physiology: { en: "Skeletal or dental discrepancies lead to Class I, II, or III malocclusions, causing uneven occlusal forces.", ta: "தாடை அல்லது பற்களின் அளவு வேறுபாடுகளால் பற்கள் சரியாக பொருந்துவதில்லை." },
        treatments: ['braces', 'smile-design']
    },
    'tmj-disorder': {
        id: 'tmj-disorder',
        medicalTerm: { en: "Temporomandibular Joint Disorder", ta: "டி.எம்.ஜே கோளாறு" },
        laymanTerm: { en: "TMJ / Jaw Joint Pain", ta: "தாடை மூட்டு வலி" },
        description: { en: "Conditions causing pain and dysfunction in the jaw joint and the muscles that control jaw movement.", ta: "தாடை மூட்டு மற்றும் தசைகளில் ஏற்படும் வலி மற்றும் செயல்பாடு குறைபாடு." },
        symptoms: { en: ["Pain in jaw, face, or ear", "Clicking or popping sound when opening mouth", "Jaw locking"], ta: ["தாடை வலி", "வாய் திறக்கும்போது சத்தம்", "தாடை சிக்கிக்கொள்ளுதல்"] },
        cause: { en: "Bruxism, arthritis, jaw injury, or genetics.", ta: "பல் நரநரப்பு, மூட்டுவலி அல்லது காயம்." },
        physiology: { en: "Displacement of the articular disc, muscular spasms, or degenerative joint disease affects the condylar articulation.", ta: "மூட்டு வட்டு நகர்வது அல்லது தசை பிடிப்பு காரணமாக ஏற்படுகிறது." },
        treatments: ['full-mouth-rehab']
    },
    'dental-abscess': {
        id: 'dental-abscess',
        medicalTerm: { en: "Periapical Abscess", ta: "பல் சீழ்" },
        laymanTerm: { en: "Tooth Infection / Pus", ta: "பல்லில் சீழ்" },
        description: { en: "A pocket of pus that's caused by a bacterial infection, usually at the tip of the root.", ta: "பாக்டீரியா தொற்றால் பல்லின் வேர் பகுதியில் சீழ் சேருவது." },
        symptoms: { en: ["Severe, persistent throbbing toothache", "Swelling in face or cheek", "Fever"], ta: ["கடுமையான பல் வலி", "முகத்தில் வீக்கம்", "காய்ச்சல்"] },
        cause: { en: "Untreated dental cavity, injury, or prior dental work causing pulp necrosis.", ta: "சிகிச்சை அளிக்கப்படாத சொத்தை பல் அல்லது காயம்." },
        physiology: { en: "Necrotic pulp tissue allows bacteria to exit the apical foramen, causing acute purulent inflammation in the periapical bone.", ta: "இறந்த பல் நரம்பில் உள்ள பாக்டீரியாக்கள் வேர் வழியாக எலும்பை அடைந்து சீழை உருவாக்குகிறது." },
        treatments: ['root-canal', 'emergency-trauma']
    },
    'pulpitis': {
        id: 'pulpitis',
        medicalTerm: { en: "Pulpitis", ta: "பல் நரம்பு வீக்கம்" },
        laymanTerm: { en: "Inflamed Tooth Nerve", ta: "பல் நரம்பு வீக்கம்" },
        description: { en: "Inflammation of the dental pulp, the central part of the tooth containing connective tissue, blood vessels, and cells.", ta: "பல்லின் நரம்புப் பகுதியில் ஏற்படும் வீக்கம்." },
        symptoms: { en: ["Sharp pain elicited by cold/hot stimuli", "Lingering pain after stimulus removal", "Spontaneous pain"], ta: ["கடுமையான கூச்சம் மற்றும் வலி", "காரணமில்லாமல் வலி வருதல்"] },
        cause: { en: "Deep caries, trauma, or multiple dental procedures.", ta: "ஆழமான சொத்தை பல் அல்லது காயம்." },
        physiology: { en: "Bacterial toxins reach the pulp, causing vasodilation and edema within a rigid, unyielding chamber, leading to intense pain.", ta: "பாக்டீரியா நரம்பை அடைவதால் ஏற்படும் வீக்கம் காரணமாக கடுமையான வலி உண்டாகிறது." },
        treatments: ['root-canal']
    },
    'lichen-planus': {
        id: 'lichen-planus',
        medicalTerm: { en: "Oral Lichen Planus", ta: "வாய்வழி லைகன் பிளானஸ்" },
        laymanTerm: { en: "White Lacy Webbed Mouth Patches", ta: "வாயில் வலை போன்ற வெள்ளை கோடுகள்" },
        description: { en: "An ongoing (chronic) inflammatory condition that affects mucous membranes inside your mouth.", ta: "வாய் உட்புறத்தில் ஏற்படும் நாள்பட்ட அழற்சி நிலை." },
        symptoms: { en: ["Lacy white patches", "Red, swollen tissues", "Open sores (ulcers)"], ta: ["வெள்ளை வலை போன்ற கோடுகள்", "சிவப்பு வீக்கம்", "புண்கள்"] },
        cause: { en: "An autoimmune response, exact trigger often unknown.", ta: "உடல் எதிர்ப்பு சக்தி உடலையே தாக்கும் ஒரு நிலை." },
        physiology: { en: "T lymphocytes attack the basal keratinocytes of the oral mucosa, causing a hyperkeratotic or erosive response.", ta: "வெள்ளை அணுக்கள் வாய் திசுக்களை தாக்குவதால் ஏற்படுகிறது." },
        treatments: ['laser-dentistry']
    },
    'aphthous-ulcer': {
        id: 'aphthous-ulcer',
        medicalTerm: { en: "Aphthous Stomatitis", ta: "ஆப்தஸ் அல்சர்" },
        laymanTerm: { en: "Canker Sore", ta: "வாய்ப்புண்" },
        description: { en: "Small, shallow lesions that develop on the soft tissues in your mouth or at the base of your gums.", ta: "வாயின் உட்புறத்தில் ஏற்படும் சிறிய புண்கள்." },
        symptoms: { en: ["Painful sore with a white/yellow center and red border", "Tingling or burning sensation"], ta: ["வலிமிகுந்த சிறு புண்கள்", "எரிச்சல்"] },
        cause: { en: "Stress, minor injury, acidic foods, or nutritional deficiencies (B12, iron).", ta: "மன அழுத்தம், சிறு காயம், வைட்டமின் குறைபாடு." },
        physiology: { en: "Localized destruction of the mucosal epithelium mediated by a localized T-cell immune response.", ta: "குறிப்பிட்ட பகுதியில் வாய் திசுக்கள் அழிவதால் ஏற்படும் புண்." },
        treatments: ['laser-dentistry']
    },
    'cold-sore': {
        id: 'cold-sore',
        medicalTerm: { en: "Herpes Labialis", ta: "ஹெர்பெஸ் லாபியாலிஸ்" },
        laymanTerm: { en: "Cold Sores / Fever Blisters", ta: "உதடு கொப்புளங்கள்" },
        description: { en: "A viral infection causing tiny, fluid-filled blisters on and around your lips.", ta: "உதடுகளில் ஏற்படும் வைரஸ் தொற்று கொப்புளங்கள்." },
        symptoms: { en: ["Tingling and itching", "Fluid-filled blisters", "Oozing and crusting"], ta: ["உதட்டில் அரிப்பு", "நீர் கோர்த்த கொப்புளங்கள்"] },
        cause: { en: "Herpes simplex virus type 1 (HSV-1).", ta: "ஹெர்பெஸ் வைரஸ் தொற்று." },
        physiology: { en: "Virus remains dormant in the trigeminal ganglion and reactivates during stress or immunosuppression, traveling down the nerve to cause epithelial lesions.", ta: "நரம்புகளில் தங்கியிருக்கும் வைரஸ் மீள் செயல்பாட்டால் ஏற்படுகிறது." },
        treatments: ['laser-dentistry']
    },
    'fluorosis': {
        id: 'fluorosis',
        medicalTerm: { en: "Dental Fluorosis", ta: "பல் புளோரோசிஸ்" },
        laymanTerm: { en: "White/Brown Spots on Teeth", ta: "பற்களில் வெள்ளை/பழுப்பு கறைகள்" },
        description: { en: "A cosmetic condition that affects the teeth's enamel, caused by overexposure to fluoride during the first eight years of life.", ta: "குழந்தை பருவத்தில் அதிகப்படியான புளோரைடு உட்கொள்வதால் பற்களில் ஏற்படும் நிறமாற்றம்." },
        symptoms: { en: ["Faint white lines or streaks on teeth", "Brown spots or pitting in severe cases"], ta: ["பற்களில் வெள்ளை அல்லது பழுப்பு கறைகள்"] },
        cause: { en: "Excessive consumption of fluoride (usually in drinking water) during tooth development.", ta: "தண்ணீரில் அதிக புளோரைடு இருத்தல்." },
        physiology: { en: "Excess fluoride interferes with ameloblasts during enamel matrix formation, leading to hypomineralized enamel.", ta: "பற்களின் எனாமல் உருவாகும்போது அதிக புளோரைடு சேருவதால் எனாமல் தரம் குறைகிறது." },
        treatments: ['veneers', 'smile-design']
    },
    'enamel-hypoplasia': {
        id: 'enamel-hypoplasia',
        medicalTerm: { en: "Enamel Hypoplasia", ta: "எனாமல் ஹைப்போபிளாசியா" },
        laymanTerm: { en: "Thin Enamel", ta: "மெல்லிய எனாமல்" },
        description: { en: "A defect of the teeth in which the enamel is hard but thin and deficient in amount.", ta: "பற்களின் எனாமல் மிகவும் மெல்லியதாக உருவாகும் நிலை." },
        symptoms: { en: ["Pits, grooves, or missing parts of enamel", "High sensitivity", "Yellowish appearance"], ta: ["பற்களில் குழிகள்", "அதிக கூச்சம்", "மஞ்சள் நிற பற்கள்"] },
        cause: { en: "Malnutrition, premature birth, childhood illness, or genetics.", ta: "ஊட்டச்சத்து குறைபாடு அல்லது மரபணு கோளாறு." },
        physiology: { en: "Disruption of amelogenesis during the secretory phase results in a quantitative defect of enamel.", ta: "எனாமல் உருவாகும் போது ஏற்படும் இடையூறால் முழுமையாக உருவாவதில்லை." },
        treatments: ['dental-crowns', 'veneers']
    },
    'hyperdontia': {
        id: 'hyperdontia',
        medicalTerm: { en: "Hyperdontia", ta: "ஹைப்பர்டோன்ஷியா" },
        laymanTerm: { en: "Extra Teeth", ta: "கூடுதல் பற்கள்" },
        description: { en: "The condition of having supernumerary teeth, or teeth that appear in addition to the regular number of teeth.", ta: "சாதாரண எண்ணிக்கையை விட அதிகமாக வளரும் பற்கள்." },
        symptoms: { en: ["Teeth growing in unusual places", "Crowding", "Delayed eruption of normal teeth"], ta: ["சீரற்ற இடங்களில் பற்கள் முளைத்தல்", "நெருக்கமான பற்கள்"] },
        cause: { en: "Genetics, often associated with syndromes like Cleidocranial dysplasia.", ta: "மரபணு காரணங்கள்." },
        physiology: { en: "Hyperactivity of the dental lamina leads to the formation of extra tooth buds.", ta: "பல் உருவாகும் அணுக்களின் அதிகப்படியான செயல்பாட்டால் கூடுதல் பற்கள் உருவாகின்றன." },
        treatments: ['emergency-trauma', 'braces']
    },
    'hypodontia': {
        id: 'hypodontia',
        medicalTerm: { en: "Hypodontia", ta: "ஹைப்போடோன்ஷியா" },
        laymanTerm: { en: "Missing Teeth (Congenital)", ta: "பிறவியிலேயே பற்கள் இல்லாமை" },
        description: { en: "A developmental abnormality resulting in the failure of one or more teeth to develop.", ta: "பிறவியிலேயே சில பற்கள் முளைக்காமல் இருக்கும் நிலை." },
        symptoms: { en: ["Gaps between teeth", "Retained baby teeth", "Chewing difficulties"], ta: ["பற்களுக்கு இடையில் இடைவெளி", "பால் பற்கள் விழாமல் இருத்தல்"] },
        cause: { en: "Genetics and mutations in genes like MSX1 and PAX9.", ta: "மரபணு கோளாறுகள்." },
        physiology: { en: "Failure of the dental lamina to form or arrest of tooth bud development.", ta: "பல் உருவாகும் செயல்முறை தொடக்கத்திலேயே நின்றுவிடுதல்." },
        treatments: ['dental-implants', 'dental-crowns']
    },
    'macrodontia': {
        id: 'macrodontia',
        medicalTerm: { en: "Macrodontia", ta: "மேக்ரோடோன்ஷியா" },
        laymanTerm: { en: "Abnormally Large Teeth", ta: "வழக்கத்திற்கு மாறான பெரிய பற்கள்" },
        description: { en: "A condition in which one or more teeth appear larger than normal.", ta: "பற்கள் வழக்கத்தை விட மிகவும் பெரியதாக வளரும் நிலை." },
        symptoms: { en: ["Visibly oversized teeth", "Crowding", "Aesthetic concerns"], ta: ["பெரிய பற்கள்", "முக அமைப்பில் மாற்றம்"] },
        cause: { en: "Genetics, hormonal imbalances (like pituitary gigantism).", ta: "மரபணு அல்லது ஹார்மோன் மாற்றங்கள்." },
        physiology: { en: "Excessive proliferation of the tooth bud cells during development.", ta: "பல் வளரும்போது அணுக்கள் அதிகமாக பெருகும் நிலை." },
        treatments: ['smile-design', 'braces']
    },
    'microdontia': {
        id: 'microdontia',
        medicalTerm: { en: "Microdontia", ta: "மைக்ரோடோன்ஷியா" },
        laymanTerm: { en: "Abnormally Small Teeth", ta: "வழக்கத்திற்கு மாறான சிறிய பற்கள்" },
        description: { en: "A condition in which one or more teeth appear smaller than normal (e.g., 'peg laterals').", ta: "பற்கள் வழக்கத்தை விட மிகவும் சிறியதாக வளரும் நிலை." },
        symptoms: { en: ["Visibly undersized teeth", "Large gaps between teeth"], ta: ["சிறிய பற்கள்", "பற்களுக்கு இடையில் இடைவெளி"] },
        cause: { en: "Genetics, radiation therapy during childhood.", ta: "மரபணு காரணங்கள்." },
        physiology: { en: "Underdevelopment of the tooth bud during the morphodifferentiation stage.", ta: "பல் வளரும் செயல்முறை முழுமையடையாமல் போவது." },
        treatments: ['veneers', 'dental-crowns']
    },
    'geographic-tongue': {
        id: 'geographic-tongue',
        medicalTerm: { en: "Benign Migratory Glossitis", ta: "பெனைன் மைக்ரேட்டரி குளோசிடிஸ்" },
        laymanTerm: { en: "Geographic Tongue", ta: "நிலப்பட நாக்கு" },
        description: { en: "An inflammatory condition of the mucous membrane of the tongue, characterized by map-like patterns on the surface.", ta: "நாக்கில் வரைபடம் போன்ற சிவந்த திட்டுகள் தோன்றும் நிலை." },
        symptoms: { en: ["Irregular, smooth, red patches on tongue", "Frequent changes in pattern", "Mild discomfort with spicy foods"], ta: ["நாக்கில் சிவந்த திட்டுகள்", "காரமான உணவுகளால் எரிச்சல்"] },
        cause: { en: "Unknown, but linked to stress, allergies, and genetics.", ta: "காரணம் அறியப்படவில்லை, மன அழுத்தத்துடன் தொடர்புடையது." },
        physiology: { en: "Loss of filiform papillae in localized areas leads to smooth, erythematous patches surrounded by raised white margins.", ta: "நாக்கின் மேற்பரப்பில் உள்ள சிறிய மொட்டுகள் உதிர்வதால் ஏற்படுகிறது." },
        treatments: ['laser-dentistry']
    },
    'black-hairy-tongue': {
        id: 'black-hairy-tongue',
        medicalTerm: { en: "Lingua Villosa Nigra", ta: "லிங்குவா வில்லோசா நிக்ரா" },
        laymanTerm: { en: "Black Hairy Tongue", ta: "கருப்பு முடி நாக்கு" },
        description: { en: "A temporary, harmless oral condition that gives your tongue a dark, furry appearance.", ta: "நாக்கில் கறுப்பு நிறத்தில் முடிகள் போன்ற அமைப்பு தோன்றும் தற்காலிக நிலை." },
        symptoms: { en: ["Black, brown, or yellow discoloration", "Furry or hairy appearance", "Bad breath"], ta: ["நாக்கு கருப்பாதல்", "முடி போன்ற தோற்றம்", "வாய் துர்நாற்றம்"] },
        cause: { en: "Poor oral hygiene, tobacco use, drinking a lot of coffee/tea, or antibiotic use.", ta: "புகையிலை, அதிக காபி/டீ மற்றும் சுத்தமின்மை." },
        physiology: { en: "Elongation and hypertrophy of the filiform papillae combined with pigment from food, tobacco, and chromogenic bacteria.", ta: "நாக்கில் உள்ள மொட்டுகள் நீண்டு வளர்ந்து கறைகளை உறிஞ்சுவதால் ஏற்படுகிறது." },
        treatments: ['gum-disease']
    },
    'mucocele': {
        id: 'mucocele',
        medicalTerm: { en: "Mucocele", ta: "மியூகோசல்" },
        laymanTerm: { en: "Mucous Cyst", ta: "நீர் கட்டி" },
        description: { en: "A fluid-filled swelling that occurs on the lip or the mouth lining.", ta: "உதடு அல்லது வாய் உட்புறத்தில் தோன்றும் நீர் கோர்த்த கட்டி." },
        symptoms: { en: ["Painless, soft, fluid-filled lump", "Usually on the lower lip", "Bluish or clear color"], ta: ["உதட்டில் நீர் கட்டி", "வலி இல்லாத வீக்கம்"] },
        cause: { en: "Lip biting or trauma damaging a minor salivary gland.", ta: "உதட்டைக் கடிப்பதாலோ அல்லது சிறு காயத்தாலோ உமிழ்நீர் சுரப்பி சேதமடைதல்." },
        physiology: { en: "Severance of a minor salivary gland duct leads to extravasation of mucin into the surrounding connective tissue.", ta: "உமிழ்நீர் சுரப்பி குழாய் அடைபடுவதால் உமிழ்நீர் திசுக்களில் தேங்குகிறது." },
        treatments: ['laser-dentistry']
    },
    'tori': {
        id: 'tori',
        medicalTerm: { en: "Torus Palatinus / Mandibularis", ta: "டோரஸ் பலாட்டினஸ்" },
        laymanTerm: { en: "Bone Growths in Mouth", ta: "வாயில் எலும்பு வளர்ச்சி" },
        description: { en: "Harmless, painless bony growths on the roof of the mouth or along the lower jaw beneath the tongue.", ta: "வாயின் மேல் பகுதி அல்லது கீழ் தாடையில் ஏற்படும் வலியற்ற எலும்பு வளர்ச்சி." },
        symptoms: { en: ["Hard lump in mouth", "Painless", "Slow growing"], ta: ["வாயில் கடினமான எலும்பு கட்டி", "வலி இல்லை"] },
        cause: { en: "Genetics or bruxism (teeth grinding).", ta: "மரபணு அல்லது பல் நரநரப்பு." },
        physiology: { en: "Cortical bone overgrowth (exostosis) occurring in specific anatomic regions of the maxilla or mandible.", ta: "குறிப்பிட்ட தாடை பகுதிகளில் அதிகப்படியான எலும்பு வளர்ச்சி." },
        treatments: ['laser-dentistry']
    },
    'sjogren': {
        id: 'sjogren',
        medicalTerm: { en: "Sjogren's Syndrome", ta: "ஜோக்ரென்ஸ் சிண்ட்ரோம்" },
        laymanTerm: { en: "Severe Dry Mouth Autoimmune", ta: "கடுமையான வறண்ட வாய் நோய்" },
        description: { en: "An immune system disorder characterized by dry eyes and dry mouth.", ta: "கண்கள் மற்றும் வாயை வறட்சியாக்கும் ஒரு நோய் எதிர்ப்பு சக்தி குறைபாடு." },
        symptoms: { en: ["Severe dry mouth", "Dry eyes", "Joint pain", "Increased cavities"], ta: ["கடுமையான வறண்ட வாய்", "வறண்ட கண்கள்", "அதிக சொத்தை பற்கள்"] },
        cause: { en: "Autoimmune disease where white blood cells attack moisture-producing glands.", ta: "வெள்ளை அணுக்கள் உமிழ்நீர் சுரப்பிகளை தாக்குவதால் ஏற்படுகிறது." },
        physiology: { en: "Lymphocytic infiltration of the exocrine glands leads to acinar destruction and hyposalivation.", ta: "உமிழ்நீர் சுரப்பிகள் அழிக்கப்படுவதால் உமிழ்நீர் சுரப்பு நின்றுவிடுகிறது." },
        treatments: ['full-mouth-rehab', 'root-canal']
    },
    'angular-cheilitis': {
        id: 'angular-cheilitis',
        medicalTerm: { en: "Angular Cheilitis", ta: "ஆங்குலர் சீலிடிஸ்" },
        laymanTerm: { en: "Cracked Lip Corners", ta: "உதட்டு ஓரங்களில் வெடிப்பு" },
        description: { en: "Inflammation of one or both corners of the mouth, causing painful sores or cracks.", ta: "உதட்டின் ஓரங்களில் ஏற்படும் வெடிப்பு மற்றும் புண்கள்." },
        symptoms: { en: ["Painful cracks in mouth corners", "Bleeding", "Crusting"], ta: ["உதட்டு ஓரங்களில் வெடிப்பு", "ரத்தம் வருதல்"] },
        cause: { en: "Fungal infection (Candida), vitamin B deficiency, or ill-fitting dentures causing pooling of saliva.", ta: "பூஞ்சை தொற்று, வைட்டமின் குறைபாடு அல்லது தவறான பல் செட்." },
        physiology: { en: "Maceration of the commissural epithelium provides an ideal environment for opportunistic infection by Candida albicans or Staphylococcus aureus.", ta: "உமிழ்நீர் தங்குவதால் பூஞ்சைகள் எளிதாக வளர்கின்றன." },
        treatments: ['laser-dentistry']
    },
    'pericoronitis': {
        id: 'pericoronitis',
        medicalTerm: { en: "Pericoronitis", ta: "பெரிகொரோனிடிஸ்" },
        laymanTerm: { en: "Infection Around Wisdom Tooth", ta: "ஞானப்பல் ஈறு தொற்று" },
        description: { en: "Inflammation of the gum tissue surrounding the crown portion of a tooth that is partially erupted.", ta: "பாதி முளைத்த ஞானப்பல்லைச் சுற்றியுள்ள ஈறுகளில் ஏற்படும் தொற்று." },
        symptoms: { en: ["Severe pain near back teeth", "Swollen gum flap", "Bad taste or smell", "Difficulty opening jaw"], ta: ["ஞானப்பல் பகுதியில் வலி", "ஈறு வீக்கம்", "வாய் திறக்க சிரமம்"] },
        cause: { en: "Food and bacteria trapped under the flap of gum (operculum) covering a partially erupted wisdom tooth.", ta: "பாதி முளைத்த பல்லின் மேல் உள்ள ஈறுக்குள் உணவு மற்றும் பாக்டீரியா சிக்குதல்." },
        physiology: { en: "Bacterial proliferation in the opercular pocket causes acute purulent inflammation.", ta: "பல்லுக்கு மேல் உள்ள ஈறுப்பகுதியில் பாக்டீரியா பெருகுவதால் வீக்கம் ஏற்படுகிறது." },
        treatments: ['emergency-trauma', 'laser-dentistry']
    },
    'cleft-lip': {
        id: 'cleft-lip',
        medicalTerm: { en: "Cleft Lip and Palate", ta: "பிளவு உதடு மற்றும் அண்ணம்" },
        laymanTerm: { en: "Cleft Lip", ta: "பிளவு உதடு" },
        description: { en: "Birth defects that occur when a baby's lip or mouth do not form properly during pregnancy.", ta: "குழந்தை பிறக்கும்போதே உதடு அல்லது மேல் அண்ணத்தில் ஏற்படும் பிளவு." },
        symptoms: { en: ["Visible split in the lip or roof of mouth", "Difficulty feeding", "Speech difficulties"], ta: ["உதடு அல்லது வாயின் மேல் பகுதியில் பிளவு", "பாலூட்டுவதில் சிரமம்"] },
        cause: { en: "Genetics and environmental factors during fetal development.", ta: "மரபணு மற்றும் சுற்றுச்சூழல் காரணிகள்." },
        physiology: { en: "Failure of the medial nasal prominence and maxillary prominence to fuse during embryogenesis.", ta: "கருவில் குழந்தை வளரும்போது முகத்தின் பகுதிகள் சரியாக இணையாததால் ஏற்படுகிறது." },
        treatments: ['braces', 'smile-design']
    },
    'squamous-cell-carcinoma': {
        id: 'squamous-cell-carcinoma',
        medicalTerm: { en: "Squamous Cell Carcinoma", ta: "ஸ்குவாமஸ் செல் கார்சினோமா" },
        laymanTerm: { en: "Oral Cancer", ta: "வாய் புற்றுநோய்" },
        description: { en: "The most common type of oral cancer, developing in the flat, scale-like cells that line the mouth and throat.", ta: "வாய் மற்றும் தொண்டையில் ஏற்படும் பொதுவான வகை வாய் புற்றுநோய்." },
        symptoms: { en: ["A sore that doesn't heal", "Lump or thickening in cheek", "White or red patch", "Difficulty swallowing"], ta: ["குணமாகாத புண்", "கன்னத்தில் கட்டி", "விழுங்குவதில் சிரமம்"] },
        cause: { en: "Tobacco use, heavy alcohol consumption, HPV infection.", ta: "புகையிலை, மது பழக்கம் மற்றும் வைரஸ் தொற்று." },
        physiology: { en: "Malignant transformation of squamous epithelial cells due to DNA mutations, often progressing from dysplastic lesions.", ta: "வாய் திசுக்களின் அணுக்கள் மரபணு மாற்றமடைந்து புற்றுநோயாக மாறுகிறது." },
        treatments: ['full-mouth-rehab']
    },
    'dentin-hypersensitivity': {
        id: 'dentin-hypersensitivity',
        medicalTerm: { en: "Dentin Hypersensitivity", ta: "டென்டின் ஹைப்பர்சென்சிட்டிவிட்டி" },
        laymanTerm: { en: "Sensitive Teeth", ta: "பல் கூச்சம்" },
        description: { en: "Short, sharp pain arising from exposed dentin in response to stimuli, typically thermal, evaporative, tactile, or osmotic.", ta: "குளிர்ந்த அல்லது சூடான உணவுகளை உட்கொள்ளும்போது ஏற்படும் கடுமையான பல் கூச்சம்." },
        symptoms: { en: ["Sharp pain when eating cold/hot foods", "Pain when breathing cold air", "Pain from sweet or acidic foods"], ta: ["சூடு அல்லது குளிர்ச்சியால் கடுமையான கூச்சம்"] },
        cause: { en: "Gum recession exposing the root, or enamel wear from aggressive brushing or acidic diets.", ta: "ஈறுகள் பின்வாங்குதல் அல்லது எனாமல் தேய்மானம்." },
        physiology: { en: "Exposure of dentinal tubules allows fluid movement within them, stimulating nerve fibers in the pulp (hydrodynamic theory).", ta: "பல்லின் நரம்புக்கு செல்லும் துவாரங்கள் திறக்கப்படுவதால் கூச்சம் ஏற்படுகிறது." },
        treatments: ['laser-dentistry', 'tooth-fillings']
    },
    'abfraction': {
        id: 'abfraction',
        medicalTerm: { en: "Abfraction", ta: "அப்ஃப்ராக்‌ஷன்" },
        laymanTerm: { en: "Notches near Gumline", ta: "ஈறுக்கு அருகில் பற்கள் தேய்மானம்" },
        description: { en: "Wedge-shaped defects at the cementoenamel junction (gumline) of a tooth, not caused by tooth decay.", ta: "சொத்தை இல்லாமல் ஈறுக்கு அருகில் பற்களில் ஏற்படும் V வடிவ தேய்மானம்." },
        symptoms: { en: ["V-shaped notch at the gumline", "Tooth sensitivity", "Food packing"], ta: ["ஈறுக்கு அருகில் V வடிவ குழி", "பல் கூச்சம்"] },
        cause: { en: "Biomechanical loading forces (teeth grinding or heavy biting) causing teeth to flex and enamel to snap off near the gumline.", ta: "அதிகப்படியான கடிக்கும் விசையால் பற்கள் வளைந்து எனாமல் உடைதல்." },
        physiology: { en: "Flexure of the tooth under occlusal loading causes microfractures in the cervical enamel and dentin.", ta: "கடிப்பதால் ஏற்படும் அழுத்தம் காரணமாக ஈறுக்கு அருகில் உள்ள எனாமல் உடைகிறது." },
        treatments: ['tooth-fillings', 'smile-design']
    }
};
