
import { LocalizedText } from '../types/neoSchema';

export interface VaultEntry {
    id: string;
    category: string;
    keywords: string[];
    content: {
        [key: string]: {
            question: string;
            answer: string;
            advice?: string;
            source?: string;
        };
    };
}

export const NEO_VAULT: VaultEntry[] = [
    // --- BLOCK 1: CLINICAL ANCHORS (IDs 001-050) ---
    {
        "id": "noble_faq_001",
        "category": "Emergency",
        "keywords": ["pain", "night", "swelling", "emergency", "నొప్పి", "दर्द", "வலி"],
        "content": {
            "en": {
                "question": "Is severe tooth pain at night a medical emergency?",
                "answer": "Yes. Severe nocturnal pain often indicates acute pulpitis or an abscess. Per ADA 2026 guidelines, untreated dental infections can spread systemically. Noble Dental Nallagandla provides triage until 11:30 PM.",
                "advice": "Rinse with warm salt water and avoid lying flat to reduce throbbing.",
                "source": "https://www.ada.org/resources/research/science/evidence-based-dental-research/pain-management-guideline"
            },
            "te": { "question": "రాత్రిపూట పంటి నొప్పి వస్తే అది ఎమర్జెన్సీనా?", "answer": "అవును. తీవ్రమైన నొప్పి ఇన్ఫెక్షన్ కావచ్చు. ADA ప్రకారం దీనికి తక్షణ చికిత్స అవసరం. మేము రాత్రి 11:30 వరకు అందుబాటులో ఉంటాము." },
            "hi": { "question": "क्या रात में दांतों का दर्द इमरजेंसी है?", "answer": "हाँ। रात का तेज दर्द संक्रमण का संकेत हो सकता है। ADA के अनुसार, इसका तुरंत इलाज होना चाहिए।" },
            "ta": { "question": "இரவில் பல் வலி ஏற்பட்டால் அது அவசரநிலையா?", "answer": "ஆம். கடுமையான வலி தொற்றுநோயைக் குறிக்கலாம். ADA விதிமுறைகளின்படி இதற்கு உடனடி சிகிச்சை தேவை." },
            "kn": { "question": "ರಾತ್ರಿಯಲ್ಲಿ ಹಲ್ಲು ನೋವು ಬಂದರೆ ಅದು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯೇ?", "answer": "ಹೌದು. ಇದು ಸೋಂಕಿನ ಲಕ್ಷಣವಾಗಿರಬಹುದು. ತಕ್ಷಣದ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯ." },
            "ml": { "question": "ರಾತ್ರಿയിലെ ಪಲ್ಲುವೇദന ഒരു എമർജൻസി ആണോ?", "answer": "അതെ. അസഹനീയമായ വേദന അണുബാധയുടെ ലക്ഷണമാകാം. ഉടൻ ചികിത്സ തേടണം." }
        }
    },
    {
        "id": "noble_faq_002",
        "category": "Endodontics",
        "keywords": ["root canal", "rct", "painless", "రూట్ కెనాల్", "रूट कैनाल"],
        "content": {
            "en": {
                "question": "Is a modern Root Canal (RCT) painful?",
                "answer": "No. With rotary endodontics and advanced anesthesia, the IDA confirms RCT is as comfortable as a filling. It saves your natural tooth from extraction.",
                "advice": "Don't delay; early RCT prevents the need for a more expensive implant later.",
                "source": "https://www.ada.org/resources/ada-library/oral-health-topics/endodontics"
            },
            "te": { "question": "రూట్ కెనాల్ చికిత్స నొప్పిగా ఉంటుందా?", "answer": "లేదు. ఆధునిక సాంకేతికతతో ఇది చాలా సులభంగా మరియు నొప్పి లేకుండా జరుగుతుంది." },
            "hi": { "question": "क्या रूट कैनाल में दर्द होता है?", "answer": "नहीं। आधुनिक एनेस्थीसिया के साथ यह प्रक्रिया पूरी तरह से दर्द रहित होती है।" },
            "ta": { "question": "ரூட் கெனால் வலிக்குமா?", "answer": "இல்லை. நவீன தொழில்நுட்பம் மூலம் ఇది வலியற்ற சிகிச்சையாக மாற்றப்பட்டுள்ளது." },
            "kn": { "question": "ರೂಟ್ ಕೆನಾಲ್ ನೋವುಂಟುಮಾಡುತ್ತದೆಯೇ?", "answer": "ಇಲ್ಲ. ಈಗಿನ ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ఇది ಯಾವುದೇ ನೋವಿಲ್ಲದೆ ನಡೆಯುತ್ತದೆ." },
            "ml": { "question": "റൂಟ್ കനാൽ വേദനയുള്ളതാണോ?", "answer": "അല്ല. അത്യാധുനിക രീതിയിൽ വേദനയില്ലാതെ ಇದು ചെയ്യാവുന്നതാണ്." }
        }
    },
    {
        "id": "noble_faq_003",
        "category": "Technology",
        "keywords": ["x-ray", "radiation", "pregnant", "safety", "ఎక్స్-రే", "एक्स-रे"],
        "content": {
            "en": {
                "question": "Are dental X-rays safe during pregnancy?",
                "answer": "Yes. ADA and CDC guidelines confirm that modern digital X-rays with lead aprons are safe for both mother and baby. Diagnostic benefits outweigh risks.",
                "advice": "Always inform us if you are pregnant so we can use ALARA (As Low As Reasonably Achievable) radiation protocols.",
                "source": "https://www.cdc.gov/oralhealth/basics/pregnancy-oral-health.html"
            },
            "te": { "question": "గర్భిణీలకు ఎక్స్-రేలు సురక్షితమేనా?", "answer": "అవును. ఆధునిక డిజిటల్ ఎక్స్-రేలు తల్లికి మరియు బిడ్డకు పూర్తిగా సురక్షితం." },
            "hi": { "question": "क्या गर्भावस्था में एक्स-रे सुरक्षित है?", "answer": "हाँ। आधुनिक सुरक्षा उपकरणों के साथ यह पूरी तरह से सुरक्षित है।" },
            "ta": { "question": "கர்ப்பிணிகளுக்கு எக்ஸ்ரே பாதுகாப்பானதா?", "answer": "ஆம். நவீன டிஜிட்டல் எக்ஸ்ரேக்கள் பாதுகாப்பானவை என்று CDC உறுதிப்படுத்துகிறது." },
            "kn": { "question": "ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲಿ ఎక్స్-రే సురಕ್ಷಿತవాగిదే?", "answer": "ಹೌದು. ఇది తాయి మత్తు మగువిగె సుರಕ್ಷิตವಾగిదే." },
            "ml": { "question": "ഗർഭകാലത്ത് എക്സ്-റേ എടുക്കാമോ?", "answer": "അതെ. കൃത്യമായ സുരക്ഷാ മാനദണ്ഡങ്ങളോടെ ఇది ചെയ്യാവുന്നതാണ്." }
        }
    },
    {
        "id": "noble_faq_004",
        "category": "Implants",
        "keywords": ["implant", "tooth replacement", "implant cost", "ఇంప్లాంట్", "इम्प्लांट"],
        "content": {
            "en": {
                "question": "Are dental implants better than bridges?",
                "answer": "Yes. Implants preserve jawbone and don't require grinding adjacent teeth. The WHO identifies implants as the gold standard for long-term tooth replacement.",
                "advice": "Implants prevent facial sagging by maintaining bone density.",
                "source": "https://www.ada.org/resources/ada-library/oral-health-topics/dental-implants"
            },
            "te": { "question": "ఇంప్లాంట్లు బ్రిడ్జ్ కంటే మెరుగైనవా?", "answer": "అవును. ఇవి పక్క పళ్ళను దెబ్బతీయవు మరియు ఎముకను బలంగా ఉంచుతాయి." },
            "hi": { "question": "क्या इम्प्लांट ब्रिज से बेहतर हैं?", "answer": "हाँ। इम्प्लांट आपके जबड़े की हड्डी को सुरक्षित रखते हैं और लंबे समय तक चलते हैं।" },
            "ta": { "question": "இம்ப்லான்ட் சிறந்ததா அல்லது பிரிட்ஜ் சிறந்ததா?", "answer": "இம்ப்லான்ட் சிறந்தது. ఇది மற்ற பற்களைப் பாதிக்காமல் எலும்பை வலுப்படுத்தும்." },
            "kn": { "question": "ಇಂಪ್ಲಾಂಟ್ ಉತ್ತಮವೇ?", "answer": "ಹೌದು. ఇది నೈಸರ್ಗಿಕ హల్లివంతయే కార్యనిರ್ವಹಿసుత్తదే." },
            "ml": { "question": "ഇംപ്ലാന്റ് ആണോ ബ്രിഡ്ജ് ആണോ നല്ലത്?", "answer": "ഇംപ്ലാന്റ് ആണ് നല്ലത്. ఇది എല്ലിന്റെ ആരോഗ്യം നിലനിർത്താൻ സഹായിക്കുന്നു." }
        }
    },
    {
        "id": "noble_faq_005",
        "category": "Kids",
        "keywords": ["kids", "milk teeth", "cavity", "పిల్లలు", "बच्चे"],
        "content": {
            "en": {
                "question": "Should we treat cavities in milk teeth?",
                "answer": "Yes. Decayed milk teeth can cause pain and affect the growth of permanent teeth. IDA recommends early intervention to prevent orthodontic issues later.",
                "advice": "Healthy milk teeth act as placeholders for permanent adult teeth.",
                "source": "https://www.ada.org/resources/ada-library/oral-health-topics/baby-teeth"
            },
            "te": { "question": "పిల్లల పాల పళ్ళకు చికిత్స అవసరమా?", "answer": "అవును. పాల పళ్ళు ఆరోగ్యంగా ఉంటేనే భవిష్యత్తులో వచ్చే పళ్ళు సరిగ్గా వస్తాయి." },
            "hi": { "question": "क्या बच्चों के दूध के दांतों का इलाज जरूरी है?", "answer": "हाँ। खराब दूध के दांत बच्चों के जबड़े के विकास को प्रभावित कर सकते हैं।" }
        }
    },
    {
        "id": "noble_faq_011",
        "category": "Smile Restoration",
        "keywords": ["implants", "bone", "safety", "senior", "ఎముక", "हड्डी"],
        "content": {
            "en": {
                "question": "Are dental implants safe for seniors with low bone density?",
                "answer": "Yes. With 2026 3D CBCT planning, we can identify precise areas of bone for safe placement. WHO recognizes implants as the best geriatric tooth replacement option to maintain nutrition.",
                "advice": "Implants prevent the 'sunken face' look common with bone loss in seniors.",
                "source": "https://www.who.int/news-room/fact-sheets/detail/oral-health"
            },
            "te": { "question": "ఎముక బలం తక్కువగా ఉన్న వృద్ధులకు ఇంప్లాంట్లు సురక్షితమేనా?", "answer": "అవును. 3D CBCT స్కానింగ్ ద్వారా తక్కువ ఎముక ఉన్నా సురక్షితంగా ఇంప్లాంట్ చేయవచ్చు." },
            "hi": { "question": "क्या कम हड्डी वाले बुजुर्गों के लिए इम्प्लांट सुरक्षित हैं?", "answer": "हाँ। 3D CBCT प्लानिंग के साथ हम बुजुर्गों में भी सुरक्षित इम्प्लांट लगा सकते हैं।" }
        }
    },
    {
        "id": "noble_faq_014",
        "category": "Orthodontics",
        "keywords": ["braces", "age", "clips", "వయస్సు", "उम्र", "வயது"],
        "content": {
            "en": {
                "question": "What is the best age for braces?",
                "answer": "The AAO recommends a first screening by age 7. While braces can be done at any age, early intervention allows us to guide jaw growth and prevent complex surgeries later.",
                "advice": "Early checkups help identify skeletal issues before they become permanent.",
                "source": "https://www.aaoinfo.org/blog/parent-guide-to-orthodontics/"
            },
            "te": { "question": "క్లిప్పులు (Braces) పెట్టించుకోవడానికి 7 ఏళ్ళ వయస్సులో మొదటిసారి పరీక్ష చేయించుకోవడం ఉత్తమం.", "answer": "దీనివల్ల దవడ పెరుగుదలను సరిచేయవచ్చు." },
            "hi": { "question": "ब्रेसिज़ के लिए 7 साल की उम्र में पहली जांच करानी चाहिए", "answer": "ताकि जबड़े के विकास को सही दिशा दी जा सके।" }
        }
    },
    {
        "id": "noble_faq_037",
        "category": "Prosthodontics",
        "keywords": ["zirconia", "PFM", "crown", "బలం", "मजबూత్", "வலிமை"],
        "content": {
            "en": {
                "question": "Zirconia vs. PFM Crowns: Which lasts longer?",
                "answer": "Zirconia is metal-free, highly aesthetic, and stronger than PFM (Porcelain-Fused-to-Metal), making it the gold standard for long-term durability as per IDA.",
                "advice": "Zirconia is the best choice for back teeth which withstand heavy chewing forces.",
                "source": "https://www.ada.org/resources/ada-library/oral-health-topics/crowns"
            },
            "te": { "question": "జిర్కోనియా క్రౌన్లు మెటల్-ఫ్రీ మరియు పీఎఫ్ఎమ్ (PFM) కంటే చాలా బలంగా, అందంగా ఉంటాయి.", "answer": "ఇది దశాబ్దాల పాటు మన్నికగా ఉంటుంది." },
            "hi": { "question": "ज़िरकोनिया क्राउन धातु-मुक्त होते हैं और PFM की तुलना में अधिक मजबूत और सुंदर होते हैं।", "answer": "लंबे समय तक चलने वाला समाधान।" }
        }
    },
    {
        "id": "noble_faq_050",
        "category": "Technology",
        "keywords": ["microscope", "hidden canal", "accuracy", "నైపుణ్యం", "सटीक"],
        "content": {
            "en": {
                "question": "Why choose a clinic with specialized microscopes?",
                "answer": "Microscopes allow us to see what the naked eye misses—micro-fractures and hidden canals. This ensures your treatment at Noble Dental is precise and long-lasting as per AAE standards.",
                "advice": "Micro-dentistry leads to higher success rates in root canals, often exceeding 98%.",
                "source": "https://www.aae.org/patients/root-canal-treatment/why-see-an-endodontist/microscopes/"
            },
            "te": { "question": "మైక్రోస్కోప్ ద్వారా కంటికి కనిపించని సన్నని నరాలను కూడా క్లియర్ చేయవచ్చు, దీనివల్ల చికిత్స 99% సక్సెస్ అవుతుంది.", "answer": "ఇది ఆధునిక వైద్యం." },
            "hi": { "question": "माइक्रोस्कोप हमें उन सूक्ष्म विवरणों को देखने में मदद करता है जो नग्न आंखों से छूट जाते हैं, जिससे सटीक इलाज संभव है।", "answer": "सटीक इलाज के लिए बेहतर।" }
        }
    },

    // --- BLOCK 1.5: RECOVERY & ADVANCED CLINICAL (IDs 051-100) ---
    {
        "id": "noble_faq_051",
        "category": "Recovery",
        "keywords": ["eat", "normal food", "extraction", "diet", "తీండి", "खाना", "உணவு"],
        "content": {
            "en": {
                "question": "When can I start eating normal food after a tooth extraction?",
                "answer": "Stick to soft foods (yogurt, mashed potatoes) for the first 24–48 hours. Avoid hard, crunchy, or spicy foods for at least 7 days to protect the blood clot.",
                "advice": "Chew on the opposite side of the extraction site until healing is well advanced."
            },
            "te": { "question": "పన్ను తీయించుకున్నాక మామూలు ఆహారం ఎప్పుడు తినవచ్చు?", "answer": "మొదటి 2 రోజులు మెత్తని ఆహారం తీసుకోండి. వారం వరకు గట్టి పదార్ధాలు వద్దు." },
            "hi": { "question": "दांत निकालने के बाद मैं सामान्य भोजन कब शुरू कर सकता हूं?", "answer": "पहले 2 दिनों तक नरम भोजन लें। कम से कम एक हफ्ते तक सख्त या मसालेदार भोजन से बचें।" },
            "ta": { "question": "பல் பிடுங்கிய பிறகு எப்போது சாதாரண உணவை உண்ணலாம்?", "answer": "முதல் 2 நாட்களுக்கு மென்மையான உணவுகளை உண்ணுங்கள். ஒரு வாரம் வரை கடினமான உணவுகளைத் தவிர்க்கவும்." },
            "kn": { "question": "ಹಲ್ಲು ತೆಗೆದ ನಂತರ ಯಾವಾಗ ಸಾಮಾನ್ಯ ಆಹಾರ ಸೇವಿಸಬಹುದು?", "answer": "ಮೊದಲ 2 ದಿನಗಳ ಕಾಲ ಮೃದುವಾದ ಆಹಾರವನ್ನು ಸೇವಿಸಿ. ಒಂದು ವಾರದವರೆಗೆ ಗಟ್ಟಿಯಾದ ಆಹಾರ ಬೇಡ." },
            "ml": { "question": "പല്ല് എടുത്തതിനുശേഷം എപ്പോൾ സാധാരണ ഭക്ഷണം കഴിക്കാം?", "answer": "ആദ്യ 2 ദിവസം മൃദുവായ ഭക്ഷണം കഴിക്കുക. ഒരാഴ്ചത്തേക്ക് കഠിനമായ ഭക്ഷണങ്ങൾ ഒഴിവാക്കുക." }
        }
    },
    {
        "id": "noble_faq_052",
        "category": "Recovery",
        "keywords": ["dry socket", "pain", "clot", "డ్రై సాకెట్", "ड्राई सॉकेट"],
        "content": {
            "en": {
                "question": "What is a 'Dry Socket' and how do I avoid it?",
                "answer": "A dry socket occurs when the blood clot dislodges. Avoid using straws, smoking, or forceful spitting for 72 hours to prevent this painful condition.",
                "advice": "Keep the area clean but do not brush directly on the extraction site for 24 hours."
            },
            "te": { "question": "'డ్రై సాకెట్' అంటే ఏమిటి? దానిని ఎలా నివారించాలి?", "answer": "రక్తపు గడ్డ ఊడిపోవడాన్ని 'డ్రై సాకెట్' అంటారు. ఇది రాకుండా ఉండాలంటే స్ట్రా వాడకండి మరియు పొగత్రాగకండి." },
            "hi": { "question": "'ड्राई सॉकेट' क्या है और इससे कैसे बचें?", "answer": "जब खून का थक्का हट जाता है, तो उसे 'ड्राई सॉकेट' कहते हैं। इससे बचने के लिए स्ट्रॉ का उपयोग न करें और धूम्रपान न करें।" },
            "ta": { "question": "'டிரை சாக்கெட்' என்றால் என்ன? அதை எவ்வாறு தவிர்ப்பது?", "answer": "ரத்த உறைவு நீங்குவதை 'டிரை சாக்கெட்' என்பார்கள். இதைத் தவிர்க்க ஸ்ட்ரா பயன்படுத்துவதையும் புகைப்பிடிப்பதையும் தவிர்க்கவும்." },
            "kn": { "question": "'ಡ್ರೈ ಸಾಕೆಟ್' ಎಂದರೇನು?", "answer": "ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವಿಕೆ ಹೊರಬರುವುದನ್ನು 'ಡ್ರೈ ಸಾಕೆಟ್' ಎನ್ನಲಾಗುತ್ತದೆ. ಇದನ್ನು ತಡೆಯಲು ಸ್ಟ್ರಾ ಬಳಸಬೇಡಿ ಮತ್ತು ಧೂಮಪಾನ ಮಾಡಬೇಡಿ." },
            "ml": { "question": "'ഡ്രൈ സോക്കറ്റ്' എന്നാൽ എന്ത്?", "answer": "രക്തം കട്ടപിടിക്കുന്നത് തടസ്സപ്പെടുന്നതിനെ 'ഡ്രൈ സോക്കറ്റ്' എന്ന് വിളിക്കുന്നു. ഇത് ഒഴിവാക്കാൻ സ്ട്രോ ഉപയോഗിക്കരുത്, പുകവലിക്കരുത്." }
        }
    },
    {
        "id": "noble_faq_060",
        "category": "Implants",
        "keywords": ["bone graft", "not enough bone", "jaw", "ఎముక", "हड्डी", "எலும்பு"],
        "content": {
            "en": {
                "question": "What happens if I don't have enough bone for an implant?",
                "answer": "We can perform a 'Bone Graft' to rebuild the jaw structure. Modern techniques at Noble Dental make this a routine and highly successful procedure.",
                "advice": "Bone grafting ensures a stable foundation for the implant, increasing its longevity."
            },
            "te": { "question": "ఇంప్లాంట్‌కు సరిపడా ఎముక లేకపోతే ఏమవుతుంది?", "answer": "మీకు ఎముక తక్కువగా ఉంటే 'బోన్ గ్రాఫ్ట్' ద్వారా ఎముకను పెంచి ఇంప్లాంట్ వేయవచ్చు." },
            "hi": { "question": "यदि इम्प्लांट के लिए पर्याप्त हड्डी नहीं है तो क्या होगा?", "answer": "यदि हड्डी कम है, तो 'बोन ग्राफ्ट' के जरिए हड्डी को दोबारा बनाया जा सकता है।" },
            "ta": { "question": "எலும்பு குறைவாக இருந்தால் இம்ப்லான்ட் பொருத்த முடியுமா?", "answer": "எலும்பு குறைவாக இருந்தால் 'எலும்பு ஒட்டு' (Bone Graft) மூலம் சரிசெய்து இம்ப்லான்ட் பொருத்தலாம்." },
            "kn": { "question": "ಇಂಪ್ಲಾಂಟ್‌ಗೆ ಎಲುಬು ಕಡಿಮೆ ಇದ್ದರೆ ಏನು ಮಾಡುವುದು?", "answer": "ಎಲುಬು ಕಡಿಮೆ ಇದ್ದರೆ 'ಬೋನ್ ಗ್ರಫ್ಟ್' ಮೂಲಕ ಎಲುಬನ್ನು ಹೆಚ್ಚಿಸಿ ಇಂಪ್ಲಾಂಟ್ ಮಾಡಬಹುದು." },
            "ml": { "question": "എല്ലിന് ബലം കുറവാണെങ്കിൽ ഇംപ്ലാന്റ് ചെയ്യാമോ?", "answer": "എല്ലിന് ബലം കുറവാണെങ്കിൽ 'ബോൺ ഗ്രാഫ്റ്റിംഗ്' വഴി അത് പരിഹരിക്കാവുന്നതാണ്." }
        }
    },
    {
        "id": "noble_faq_065",
        "category": "Implants",
        "keywords": ["waiting period", "time", "healing", "సమయం", "समय", "நேரம்"],
        "content": {
            "en": {
                "question": "How long is the total waiting period for a dental implant?",
                "answer": "It usually takes 3–6 months for the implant to fuse with the bone (Osseointegration) before the final crown is placed.",
                "advice": "We provide temporary solutions during the waiting period so you never have a gap in your smile."
            },
            "te": { "question": "ఇంప్లాంట్ కోసం ఎంత కాలం వేచి ఉండాలి?", "answer": "ఇంప్లాంట్ ఎముకతో కలవడానికి సాధారణంగా 3 నుండి 6 నెలల సమయం పడుతుంది." },
            "hi": { "question": "इम्प्लांट प्रक्रिया में कुल कितना समय लगता है?", "answer": "इम्प्लांट को हड्डी के साथ जुड़ने में आमतौर पर 3 से 6 महीने का समय लगता है।" },
            "ta": { "question": "இம்ப்லான்ட் சிகிச்சைக்கு எவ்வளவு காலம் ஆகும்?", "answer": "இம்ப்லான்ட் தாடை எலும்புடன் ஒன்றிணைய 3 முதல் 6 மாதங்கள் ஆகும்." },
            "kn": { "question": "ಇಂಪ್ಲಾಂಟ್ ಚಿಕಿತ್ಸೆಗೆ ಎಷ್ಟು ಸಮಯ ಬೇಕು?", "answer": "ಇಂಪ್ಲಾಂಟ್ ಎಲುಬಿನೊಂದಿಗೆ ಸೇರಲು 3 ರಿಂದ 6 ತಿಂಗಳು ಬೇಕಾಗುತ್ತದೆ." },
            "ml": { "question": "ഇംപ്ലാന്റ് ചെയ്യാൻ എത്ര കാലതാമസം എടുക്കും?", "answer": "ഇംപ്ലാന്റ് താടിയെല്ലുമായി ഉറയ്ക്കാൻ 3 മുതൽ 6 മാസം വരെ സമയമെടുക്കും." }
        }
    },
    {
        "id": "noble_faq_075",
        "category": "Hygiene",
        "keywords": ["bad breath", "halitosis", "gum disease", "దుర్వాసన", "बदबू", "துர்நாற்றம்"],
        "content": {
            "en": {
                "question": "Can gum disease cause bad breath (halitosis)?",
                "answer": "Yes. Bacteria hiding in deep gum pockets produce foul-smelling gases. Professional 'Deep Scaling' is the only way to remove this underlying cause.",
                "advice": "Mouthwash only masks the smell; scaling treats the source."
            },
            "te": { "question": "చిగుళ్ళ వ్యాధి వల్ల నోటి దుర్వాసన వస్తుందా?", "answer": "అవును. చిగుళ్ళలో దాగి ఉన్న బ్యాక్టీరియా వల్ల నోటి దుర్వాసన వస్తుంది. క్లీనింగ్ ద్వారా దీనిని వదిలించుకోవచ్చు." },
            "hi": { "question": "क्या मसूड़ों की बीमारी से सांसों में बदबू आ सकती है?", "answer": "हाँ। मसूड़ों में छिपे बैक्टीरिया के कारण सांसों में बदबू आती है। स्केलिंग से इसे ठीक किया जा सकता है।" },
            "ta": { "question": "ஈறு நோயால் வாய் துர்நாற்றம் ஏற்படுமா?", "answer": "ஆம். ஈறுகளில் உள்ள பாக்டீரியாக்களால் வாய் துர்நாற்றம் ஏற்படும். கிளீனிங் மூலம் இதைச் சரிசெய்யலாம்." },
            "kn": { "question": "ಚಿಗುರು ರೋಗದಿಂದ ಬಾಯಿ ದುರ್ವಾಸನೆ ಬರುತ್ತದೆಯೇ?", "answer": "ಹೌದು. ಚಿಗುರಿನಲ್ಲಿರುವ ಬ್ಯಾಕ್ಟೀರಿಯಾದಿಂದ ಬಾಯಿ ದುರ್ವಾಸನೆ ಬರುತ್ತದೆ. ಕ್ಲೀನಿಂಗ್ ಮಾಡಿಸುವುದು ಇದಕ್ಕೆ ಉತ್ತಮ ಪರಿಹಾರ." },
            "ml": { "question": "മോണരോഗം വായനാറ്റത്തിന് കാരണമാകുമോ?", "answer": "അതെ. മോണയിലെ ബാക്ടീരിയകൾ വായനാറ്റത്തിന് കാരണമാകും. ക്ലീനിംഗ് വഴി ഇത് പരിഹരിക്കാം." }
        }
    },
    {
        "id": "noble_faq_080",
        "category": "Hygiene",
        "keywords": ["bleeding", "flossing", "inflammation", "రక్తం", "खून", "ரத்தம்"],
        "content": {
            "en": {
                "question": "Is bleeding during flossing normal?",
                "answer": "No. Bleeding gums are a sign of inflammation. If it persists for more than 3 days, you likely have early-stage gingivitis that needs professional attention.",
                "advice": "Don't stop flossing because it bleeds; clean more gently and visit your dentist."
            },
            "te": { "question": "ఫ్లాసింగ్ చేసేటప్పుడు రక్తం రావడం సాధారణమా?", "answer": "లేదు. ఫ్లాసింగ్ చేసేటప్పుడు రక్తం వస్తే అది చిగుళ్ళ వాపుకు సంకేతం. వెంటనే డాక్టరును సంప్రదించండి." },
            "hi": { "question": "क्या फ्लॉसिंग के दौरान खून आना सामान्य है?", "answer": "नहीं। फ्लॉसिंग के समय खून आना मसूड़ों की सूजन का संकेत है।" },
            "ta": { "question": "பிளாஸிங் செய்யும்போது ரத்தம் வருவது சாதாரணமா?", "answer": "இல்லை. பிளாஸிங் செய்யும்போது ரத்தம் வருவது ஈறு வீக்கத்தைக் குறிக்கும்." },
            "kn": { "question": "ಫ್ಲಾಸಿಂಗ್ ಮಾಡುವಾಗ ರಕ್ತ ಬರುವುದು ಸಾಮಾನ್ಯವೇ?", "answer": "ಇಲ್ಲ. ಹಲ್ಲುಜ್ಜುವಾಗ ಅಥವಾ ಫ್ಲಾಸಿಂಗ್ ಮಾಡುವಾಗ ರಕ್ತ ಬರುವುದು ಚಿಗುರು ರೋಗದ ಲಕ್ಷಣ." },
            "ml": { "question": "ഫ്ലോസിംഗ് ചെയ്യുമ്പോൾ രക്തം വരുന്നത് സ്വാഭാവികമാണോ?", "answer": "അല്ല. ഫ്ലോസിംഗ് ചെയ്യുമ്പോൾ രക്തം വരുന്നത് മോണവീക്കത്തിന്റെ ലക്ഷണമാണ്." }
        }
    },
    {
        "id": "noble_faq_095",
        "category": "Recovery",
        "keywords": ["exercise", "surgery", "post-op", "వ్యాయామం", "व्यायाम", "பயிற்சி"],
        "content": {
            "en": {
                "question": "Can I exercise after a dental procedure?",
                "answer": "Avoid strenuous exercise for 48–72 hours after surgery. Increased blood pressure can cause the surgical site to throb or bleed.",
                "advice": "Gentle walking is okay, but avoid heavy lifting or high-intensity workouts."
            },
            "te": { "question": "సర్జరీ తర్వాత వ్యాయామం చేయవచ్చా?", "answer": "శస్త్రచికిత్స తర్వాత 2-3 రోజులు వ్యాయామం చేయకండి. రక్తపోటు పెరిగితే రక్తస్రావం అయ్యే అవకాశం ఉంది." },
            "hi": { "question": "क्या मैं डेंटल सर्जरी के बाद व्यायाम कर सकता हूं?", "answer": "सर्जरी के बाद 2-3 दिनों तक व्यायाम न करें। रक्तचाप बढ़ने से खून निकल सकता है।" },
            "ta": { "question": "சிகிச்சைக்குப் பிறகு உடற்பயிற்சி செய்யலாமா?", "answer": "அறுவை சிகிச்சைக்குப் பிறகு 2-3 நாட்களுக்கு உடற்பயிற்சி செய்ய வேண்டாம். ரத்த அழுத்தம் அதிகரித்தால் ரத்தப்போக்கு ஏற்படலாம்." },
            "kn": { "question": "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ವ್ಯಾಯಾಮ ಮಾಡಬಹುದೇ?", "answer": "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ 2-3 ದಿನಗಳ ಕಾಲ ವ್ಯಾಯಾಮ ಮಾಡಬೇಡಿ." },
            "ml": { "question": "ശസ്ത്രക്രിയയ്ക്ക് ശേഷം വ്യായാമം ചെയ്യാമോ?", "answer": "ശസ്ത്രക്രിയയ്ക്ക് ശേഷം 2-3 ദിവസത്തേക്ക് കഠിനമായ വ്യായാമങ്ങൾ ഒഴിവാക്കുക." }
        }
    },
    {
        "id": "noble_faq_100",
        "category": "Technology",
        "keywords": ["intraoral camera", "see teeth", "high-res", "కెమెరా", "कैमरा", "கேமரா"],
        "content": {
            "en": {
                "question": "Why does Noble Dental use Intraoral Cameras?",
                "answer": "So you can see what the doctor sees. High-resolution images help you understand the exact condition of your teeth and make informed decisions.",
                "advice": "It's a great way to monitor progress across multiple visits."
            },
            "te": { "question": "నోబుల్ డెంటల్ ఇంట్రాఓరల్ కెమెరాలను ఎందుకు ఉపయోగిస్తుంది?", "answer": "డాక్టర్ చూసేదాన్ని మీరు కూడా చూడవచ్చు. దీనివల్ల మీ పంటి సమస్యపై మీకు స్పష్టమైన అవగాహన వస్తుంది." },
            "hi": { "question": "नोबल डेंटल इंट्राओरल कैमरा का उपयोग क्यों करता है?", "answer": "ताकि आप वही देख सकें जो डॉक्टर देख रहा है। इससे आप अपनी समस्या को बेहतर समझ सकते हैं।" },
            "ta": { "question": "இன்ட்ராஓரல் கேமராவை ஏன் பயன்படுத்துகிறீர்கள்?", "answer": "மருத்துவர் பார்ப்பதை நீங்களும் பார்க்கலாம். இது உங்கள் பல் பிரச்சனையை எளிதாகப் புரிந்துகொள்ள உதவும்." },
            "kn": { "question": "ವೈದ್ಯರು ನೋಡುವುದನ್ನು ನೀವು ಕೂಡ ನೋಡಬಹುದೇ?", "answer": "ವೈದ್ಯರು ನೋಡುವುದನ್ನು ನೀವು ಕೂಡ ನೋಡಬಹುದು. ಇದರಿಂದ ಚಿಕಿತ್ಸೆಯ ಬಗ್ಗೆ ನಿಮಗೆ ಸ್ಪಷ್ಟತೆ ಸಿಗುತ್ತದೆ." },
            "ml": { "question": "എന്തുകൊണ്ടാണ് ഇൻട്രാഓറൽ ക്യാമറകൾ ഉപയോഗിക്കുന്നത്?", "answer": "ഡോക്ടർ കാണുന്നത് രോഗിക്കും കാണാൻ സാധിക്കും. ഇത് പല്ലിലെ പ്രശ്നം കൃത്യമായി മനസ്സിലാക്കാൻ സഹായിക്കുന്നു." }
        }
    },

    // --- BLOCK 2: CONVERSATIONAL & ETHICS (IDs 101-151) ---
    {
        "id": "noble_conv_101",
        "category": "Ethics & Pricing",
        "keywords": ["cost", "cheap", "expensive", "marketing", "ads", "advertising", "ఖరీదు", "कीमत"],
        "content": {
            "en": {
                "question": "Why are Noble Dental Care’s rates lower than major hospital chains?",
                "answer": "We prioritize patient care over corporate marketing. We don't spend crores on Google sponsored advertisements, false celebrity marketing, or paying for #1 visibility spots. These overheads typically inflate patient bills in other chains. At Noble, you pay only for treatment and expert clinical time, not for our advertising costs.",
                "advice": "Ethics in pricing is as important as ethics in treatment.",
                "source": "https://www.ida.org.in/Public/Details/Ethics-in-Dentistry"
            },
            "te": { "question": "నోబుల్ డెంటల్ కేర్‌లో ధరలు ఎందుకు తక్కువగా ఉన్నాయి?", "answer": "మేము లక్షలాది రూపాయలు ప్రకటనల కోసం ఖర్చు చేయము. మీరు చెల్లించేది మీ చికిత్సకు మాత్రమే, మా మార్కెటింగ్ ఖర్చుల కోసం కాదు." },
            "hi": { "question": "नोबल डेंटल केयर में फीस कम क्यों है?", "answer": "हम विज्ञापनों पर करोड़ों खर्च नहीं करते हैं। हम इलाज की गुणवत्ता पर ध्यान देते हैं, जिससे मरीजों का खर्च कम होता है।" }
        }
    },
    {
        "id": "noble_conv_102",
        "category": "Sterilization",
        "keywords": ["safe", "clean", "sterilize", "hygiene", "పరిశుభ్రత", "సఫాయి"],
        "content": {
            "en": {
                "question": "How do you ensure patients are safe from infections?",
                "answer": "We use Class-B Autoclaves for 100% sterilization. Our instruments are vacuum-sealed and opened only in front of the patient. We follow strict international clinical safety standards.",
                "advice": "Always ask to see the indicator tape on your sterilized pouches.",
                "source": "https://nobledentalnallagandla.in/safety"
            },
            "te": { "question": "ఇన్ఫెక్షన్ల నుండి రక్షణ ఎలా ఉంటుంది?", "answer": "మేము అత్యాధునిక క్లాస్-బి ఆటోక్లేవ్ యంత్రాలను ఉపయోగిస్తాము." }
        }
    },
    {
        "id": "noble_conv_103",
        "category": "Consultation",
        "keywords": ["appointment", "booking", "message", "అపాయింట్‌మెంట్", "అపాయింట్మెంట్"],
        "content": {
            "en": {
                "question": "Can I book via WhatsApp?",
                "answer": "Yes! We encourage WhatsApp bookings for immediate response and history tracking. Simply click the WhatsApp link on our site to start a chat with Noble Reception.",
                "advice": "Send a photo of your concern for a quicker preliminary triage.",
                "source": "https://wa.me/91XXXXXXXXXX"
            },
            "te": { "question": "నేను వాట్సాప్ ద్వారా అపాయింట్‌మెంట్ బుక్ చేసుకోవచ్చా?", "answer": "అవును, మా వాట్సాప్ లింక్ ద్వారా మీరు సులభంగా బుక్ చేసుకోవచ్చు." }
        }
    },
    {
        "id": "noble_conv_104",
        "category": "Location",
        "keywords": ["location", "mall", "aparna", "find you", "రుట్", "రస్తా"],
        "content": {
            "en": {
                "question": "Where exactly is the clinic located?",
                "answer": "We are in Nallagandla, at Suite 101, Ground Floor, near Aparna Neo Mall. It's easily accessible via ORR Exit 19.",
                "advice": "Search 'Noble Dental Care Nallagandla' on Google Maps for live traffic updates."
            },
            "te": { "question": "క్లినిక్ ఎక్కడుంది?", "answer": "నల్లగండ్ల లోని అపర్ణ నియో మాల్ దగ్గర, సూట్ 101, గ్రౌండ్ ఫ్లోర్ లో ఉన్నాము." }
        }
    },
    {
        "id": "noble_conv_105",
        "category": "Parking",
        "keywords": ["parking", "car", "bike", "పార్కింగ్", "పార్కింగ్"],
        "content": {
            "en": {
                "question": "Is there parking for patients?",
                "answer": "Yes, we have dedicated parking for both cars and bikes directly in front of the clinic.",
                "advice": "Inform our security if you need assistance with parking."
            }
        }
    },
    {
        "id": "noble_conv_106",
        "category": "Payments",
        "keywords": ["upi", "card", "cash", "gpay", "పేమెంట్", "భుక్తాన్"],
        "content": {
            "en": {
                "question": "What payment methods do you accept?",
                "answer": "We accept all UPI (GPay, PhonePe), Credit/Debit Cards, Cash, and provide 0% EMI options for major treatments.",
                "advice": "Ask for the EMI tenure options during your treatment planning."
            }
        }
    },
    {
        "id": "noble_conv_107",
        "category": "Accessibility",
        "keywords": ["elderly", "wheelchair", "stairs", "లిఫ్ట్", "సీడ్హైన్"],
        "content": {
            "en": {
                "question": "Is the clinic elderly-friendly?",
                "answer": "Yes! We are located on the Ground Floor (Suite 101) with zero-step entry, making it 100% wheelchair and senior-citizen friendly.",
                "advice": "We can provide a wheelchair from the parking area to the clinic upon request."
            }
        }
    },
    {
        "id": "noble_conv_108",
        "category": "Timing",
        "keywords": ["wait time", "punctual", "late", "వేచి ఉండటం", "ఇంతజార్"],
        "content": {
            "en": {
                "question": "How long will I have to wait?",
                "answer": "We value your time. Our 'Precision Scheduling' ensures average wait times of less than 10 minutes for pre-booked appointments.",
                "advice": "Try to arrive 5 minutes early to complete your digital check-in."
            }
        }
    },
    {
        "id": "noble_conv_109",
        "category": "Specialty",
        "keywords": ["kids", "pedo", "children", "పిల్లలు", "बच्चे"],
        "content": {
            "en": {
                "question": "Do you treat children?",
                "answer": "Yes, Dr. Dhivakaran and our team specialize in 'Gentle Pediatrics' to make sure children have a fear-free experience.",
                "advice": "Let the child skip a meal before the visit if they are prone to gagging."
            }
        }
    },
    {
        "id": "noble_conv_110",
        "category": "Corporate",
        "keywords": ["it employees", "corporate", "discount", "ఆఫర్", "ఛూట్"],
        "content": {
            "en": {
                "question": "Do you have corporate tie-ups for IT employees?",
                "answer": "Yes, we offer special priority slots and consultation benefits for employees of major IT firms in Nallagandla and Tellapur.",
                "advice": "Bring your corporate ID to check for active community benefits."
            }
        }
    },
    {
        "id": "noble_conv_111",
        "category": "Experience",
        "keywords": ["dr dhivakaran", "experience", "how many years", "నైపుణ్యం", "अनुभव"],
        "content": {
            "en": {
                "question": "What is Dr. Dhivakaran's experience?",
                "answer": "Dr. Dhivakaran has over 11 years of clinical experience, is an MDS specialist, and a primary contributor to 'Triumph's Complete Review of Dentistry'.",
                "advice": "He is also the Director of HealthFlo and a mentor to many young dentists."
            }
        }
    },
    {
        "id": "noble_conv_112",
        "category": "Technology",
        "keywords": ["scanner", "painless", "modern", "తంత్రజ్ఞానం", "తકનીక్"],
        "content": {
            "en": {
                "question": "What advanced technology do you use?",
                "answer": "We use Microscopic Dentistry, Digital Intra-oral Scanners (no messy pastes), and Electronic Anesthesia (The Wand) for a painless experience.",
                "advice": "Micro-dentistry ensures 5x higher precision than traditional methods."
            }
        }
    },
    {
        "id": "noble_conv_113",
        "category": "Ethics",
        "keywords": ["referral", "cut", "commission", "ethics", "నీతి", "నైతికత"],
        "content": {
            "en": {
                "question": "Does Dr. Dhivakaran take cuts or commissions for referrals?",
                "answer": "No. Noble Dental Care follows a strict 'Zero-Cut' policy. We refer patients to specialists only based on merit and clinical necessity, never for commissions. This keeps your costs low and our integrity high.",
                "advice": "Ethical referrals are a cornerstone of our practice."
            }
        }
    },
    {
        "id": "noble_conv_114",
        "category": "Comfort",
        "keywords": ["music", "anxiety", "scared", "భయం", "డర్"],
        "content": {
            "en": {
                "question": "Can I listen to music during treatment?",
                "answer": "Absolutely! We encourage patients to use noise-canceling headphones or listen to our calming clinic playlist to reduce anxiety.",
                "advice": "Bringing your own headphones can help you feel more at home."
            }
        }
    },
    {
        "id": "noble_conv_115",
        "category": "Post-Op",
        "keywords": ["food", "eat", "after rct", "after extraction", "తిండి", "खाना"],
        "content": {
            "en": {
                "question": "What can I eat after a tooth extraction?",
                "answer": "Stick to soft, cold foods like ice cream, curd rice, or smoothies for the first 24 hours. Avoid hot, spicy foods and do not use a straw.",
                "advice": "Cold food helps in faster clot formation and reduces swelling."
            }
        }
    },
    {
        "id": "noble_conv_116",
        "category": "Post-Op",
        "keywords": ["smoke", "tobacco", "healing", "పొగ", "ధూమపాన"],
        "content": {
            "en": {
                "question": "Can I smoke after a dental procedure?",
                "answer": "We strongly advise against smoking for at least 72 hours post-surgery. Smoking reduces blood flow and can lead to a painful 'Dry Socket'.",
                "advice": "This is a great time to consider quitting for your long-term oral health."
            }
        }
    },
    {
        "id": "noble_conv_117",
        "category": "Hygiene",
        "keywords": ["scaling", "ultrasonic", "gap", "క్లీనింగ్", "సఫాయి"],
        "content": {
            "en": {
                "question": "Does scaling create gaps between teeth?",
                "answer": "No. Scaling only removes the hard tartar (calculus) that was already creating a false bridge between teeth. The 'gaps' you feel are simply the clean spaces where your gums should be.",
                "advice": "Regular scaling every 6 months prevents bone loss and gum disease."
            }
        }
    },
    {
        "id": "noble_conv_118",
        "category": "Hygiene",
        "keywords": ["brush", "electric", "manual", "బ్రష్", "బ్రష్"],
        "content": {
            "en": {
                "question": "Is an electric toothbrush better than a manual one?",
                "answer": "Yes, for most people. Electric toothbrushes provide more strokes per minute and often have pressure sensors to prevent gum damage.",
                "advice": "Regardless of the brush, the 'Modified Bass' technique is key to effective cleaning."
            }
        }
    },
    {
        "id": "noble_conv_119",
        "category": "Cosmetic",
        "keywords": ["whitening", "bleaching", "safe", "తెల్లగా", "సఫేద్"],
        "content": {
            "en": {
                "question": "Is professional teeth whitening safe for enamel?",
                "answer": "Yes. Professional whitening uses pH-balanced gels that do not strip enamel. It is far safer than 'home remedies' like lemon or charcoal which are abrasive.",
                "advice": "Avoid dark-colored drinks (coffee, tea) for 48 hours after whitening for best results."
            }
        }
    },
    {
        "id": "noble_conv_120",
        "category": "General",
        "keywords": ["mouthwash", "daily", "alcohol-free", "మౌత్ వాష్", "మౌత్వాష్"],
        "content": {
            "en": {
                "question": "Should I use mouthwash every day?",
                "answer": "Mouthwash is a great addition but not a substitute for brushing and flossing. Use an alcohol-free fluoride mouthwash for the best results.",
                "advice": "Wait 30 minutes after brushing to use mouthwash so you don't wash away the toothpaste's fluoride."
            }
        }
    },
    {
        "id": "noble_conv_121",
        "category": "Technology",
        "keywords": ["cbct", "3d scan", "xray", "వైద్యం", "జున్చ్"],
        "content": {
            "en": {
                "question": "What is a CBCT scan and why is it needed?",
                "answer": "CBCT is a 3D X-ray that allows us to see the exact structure of your bone and teeth. It is essential for precise implant planning and finding difficult root canals.",
                "advice": "Unlike medical CT scans, dental CBCT has much lower radiation."
            }
        }
    },
    {
        "id": "noble_conv_122",
        "category": "Endodontics",
        "keywords": ["rct success", "failed rct", "microscope", "సక్సెస్", "సఫల్తా"],
        "content": {
            "en": {
                "question": "Can a failed root canal be saved?",
                "answer": "Yes, in many cases. Using our specialized microscopes, we can perform 'Endodontic Retreatment' to clean missed canals and save the tooth.",
                "advice": "Microscopic retreatment is often the last line of defense before extraction."
            }
        }
    },
    {
        "id": "noble_conv_123",
        "category": "Comfort",
        "keywords": ["sedation", "sleep", "fear", "భయం", "నీంద్"],
        "content": {
            "en": {
                "question": "Do you offer sedation for very nervous patients?",
                "answer": "We focus on 'Comfort Dentistry' with profound local anesthesia and behavioral relaxation. For extreme anxiety, we can discuss conscious sedation options.",
                "advice": "Most patients find our gentle technique and 'The Wand' electronic anesthesia sufficient to feel zero pain."
            }
        }
    },
    {
        "id": "noble_conv_124",
        "category": "Hygiene",
        "keywords": ["bad breath", "halitosis", "smell", "వాసన", "గంధ్"],
        "content": {
            "en": {
                "question": "How can I get rid of bad breath permanently?",
                "answer": "Chronic bad breath (halitosis) is often caused by bacteria hidden in deep gum pockets or the tongue. A professional scaling and tongue cleaning can eliminate the source.",
                "advice": "Staying hydrated and using a tongue scraper daily are simple but effective starting points."
            }
        }
    },
    {
        "id": "noble_conv_125",
        "category": "Cosmetic",
        "keywords": ["aligners", "invisalign", "braces", "అలైయర్స్", "ఎలీనర్"],
        "content": {
            "en": {
                "question": "Are clear aligners as effective as metal braces?",
                "answer": "Yes, for most orthodontic cases. Aligners are nearly invisible and removable, making them a preferred choice for adults and IT professionals in Nallagandla.",
                "advice": "The best way to know is a quick 3D scan at our clinic to see your predicted smile."
            }
        }
    },
    {
        "id": "noble_conv_126",
        "category": "Oral Health",
        "keywords": ["diabetes", "sugar", "gums", "షుగర్", "మధుమేహ్"],
        "content": {
            "en": {
                "question": "How does diabetes affect my dental health?",
                "answer": "High blood sugar can lead to faster gum disease and slower healing after procedures. We coordinate with your physician to ensure safe dental care.",
                "advice": "Keep your HbA1c levels in check for the best outcomes after dental surgery."
            }
        }
    },
    {
        "id": "noble_conv_127",
        "category": "General",
        "keywords": ["coffee", "tea", "stains", "మచ్చలు", "దాగ్"],
        "content": {
            "en": {
                "question": "How can I prevent coffee or tea stains on my teeth?",
                "answer": "Rinse your mouth with water immediately after drinking coffee/tea. Using a straw can also minimize contact with your front teeth.",
                "advice": "Consider a professional 'Prophy-Jet' cleaning every few months to keep your smile bright."
            }
        }
    },
    {
        "id": "noble_conv_128",
        "category": "Oral Health",
        "keywords": ["wisdom tooth", "pain", "swelling", "జ్ఞాన దంతం", "అకల్ దాద్"],
        "content": {
            "en": {
                "question": "Do all wisdom teeth need to be removed?",
                "answer": "Only if they are 'impacted' (stuck), causing pain, or pushing against other teeth. Many people keep their wisdom teeth if they have enough jaw space.",
                "advice": "A panoramic X-ray (OPG) is the best way to check your wisdom tooth's position."
            }
        }
    },
    {
        "id": "noble_conv_129",
        "category": "Hygiene",
        "keywords": ["floss", "bleeding", "gums", "రక్తం", "ఖూన్"],
        "content": {
            "en": {
                "question": "Why do my gums bleed when I floss?",
                "answer": "Bleeding is usually a sign of early gum disease (gingivitis) due to plaque buildup. It sounds counterintuitive, but consistent flossing will actually stop the bleeding over time as your gums get healthier.",
                "advice": "If bleeding persists for more than a week, please visit us for a gum checkup."
            }
        }
    },
    {
        "id": "noble_conv_130",
        "category": "Aesthetics",
        "keywords": ["veneers", "smile makeover", "chipped tooth", "అందం", "సుందర్తా"],
        "content": {
            "en": {
                "question": "What are porcelain veneers?",
                "answer": "Veneers are thin, custom-made shells that cover the front surface of teeth to improve appearance. They can fix chipped, stained, or slightly misaligned teeth instantly.",
                "advice": "Veneers are a great 'conservative' way to get a Hollywood smile without full crowns."
            }
        }
    },
    {
        "id": "noble_conv_131",
        "category": "Sensitivity",
        "keywords": ["cold water", "sensitivity", "pain", "జివ్వున", "జునుజుని"],
        "content": {
            "en": {
                "question": "Why do my teeth hurt when I drink cold water?",
                "answer": "This is likely tooth sensitivity caused by exposed dentin (due to gum recession or enamel wear). Using a desensitizing toothpaste can help.",
                "advice": "Avoid acidic drinks like sodas which can further wear down your enamel."
            }
        }
    },
    {
        "id": "noble_conv_132",
        "category": "Safety",
        "keywords": ["pregnant", "anesthesia", "safe", "గర్భిణీ", "గర్భవతి"],
        "content": {
            "en": {
                "question": "Is local anesthesia safe during pregnancy?",
                "answer": "Yes, especially during the second trimester. Delaying necessary dental treatment can lead to infections that are riskier for the baby than the anesthesia itself.",
                "advice": "We use specific 'fetal-safe' anesthetics for our expecting mothers."
            }
        }
    },
    {
        "id": "noble_conv_133",
        "category": "Kids",
        "keywords": ["thumb sucking", "habit", "teeth position", "పిల్లలు", "ఆదత్"],
        "content": {
            "en": {
                "question": "When should I worry about my child's thumb-sucking habit?",
                "answer": "If it continues past age 4-5, it can affect the alignment of permanent teeth and the shape of the palate. We use 'Habit Breaking Appliances' if needed.",
                "advice": "Positive reinforcement is often more effective than punishment for stopping these habits."
            }
        }
    },
    {
        "id": "noble_conv_134",
        "category": "Cost",
        "keywords": ["estimate", "quote", "price list", "ధర", "కీమత్"],
        "content": {
            "en": {
                "question": "Can you give me a price quote over the phone?",
                "answer": "We can provide broad ranges, but a precise quote requires a clinical exam. Every mouth is unique, and we want to ensure you don't overpay for unnecessary treatments.",
                "advice": "Our first consultation is thorough and includes a detailed treatment plan with transparent costs."
            }
        }
    },
    {
        "id": "noble_conv_135",
        "category": "Emergency",
        "keywords": ["swelling", "face", "abscess", "వాపు", "సూజన్"],
        "content": {
            "en": {
                "question": "My face is swollen. What should I do?",
                "answer": "Facial swelling due to a tooth is a serious infection. Please visit us immediately or go to an ER. Do not apply heat to the area; use a cold compress externally.",
                "advice": "Dental infections near the jaw can affect breathing if left untreated—please don't delay."
            }
        }
    },
    {
        "id": "noble_conv_136",
        "category": "Oral Health",
        "keywords": ["wisdom tooth", "recovery", "pain", "తర్వాత", "కే బాద్"],
        "content": {
            "en": {
                "question": "What is the recovery time after wisdom tooth removal?",
                "answer": "Initial healing takes 3-5 days. Complete bone healing takes a few weeks. You can usually return to work the next day if it was a simple extraction.",
                "advice": "Follow our 'Post-Op Instruction Sheet' strictly for the first 24 hours to avoid complications."
            }
        }
    },
    {
        "id": "noble_conv_137",
        "category": "Ethics",
        "keywords": ["commission", "referral", "cut", "నీతి", "నైతిక్"],
        "content": {
            "en": {
                "question": "Do you give commissions to other doctors for referring patients?",
                "answer": "No. We believe in ethical dentistry. We get patients through our results and word-of-mouth. We do not participate in referral 'cut' practices, which is why we can keep our treatment costs lower.",
                "advice": "Trust is our biggest marketing asset."
            }
        }
    },
    {
        "id": "noble_conv_138",
        "category": "Technology",
        "keywords": ["microscope", "accuracy", "modern", "మైక్రోస్కోప్", "సూక్ష్మదర్శి"],
        "content": {
            "en": {
                "question": "Is microscopic dentistry more expensive?",
                "answer": "While the equipment is high-end, we keep our costs competitive. Micro-dentistry saves you money long-term by ensuring treatments like RCT don't fail and require expensive retreats.",
                "advice": "Precision today means no pain tomorrow."
            }
        }
    },
    {
        "id": "noble_conv_139",
        "category": "Kids",
        "keywords": ["first visit", "age", "dentist", "వయస్సు", "ఉమ్ర"],
        "content": {
            "en": {
                "question": "When should my child's first dental visit be?",
                "answer": "By their first birthday or when their first tooth appears. This helps the child feel comfortable with the dentist and allows us to check for early decay.",
                "advice": "Early visits are 90% fun and 10% exam!"
            }
        }
    },
    {
        "id": "noble_conv_140",
        "category": "Aesthetics",
        "keywords": ["smile transformation", "wedding", "fast", "పెళ్లి", "శాని"],
        "content": {
            "en": {
                "question": "I have a wedding in two weeks. Can I improve my smile quickly?",
                "answer": "Yes! We offer 'Express Smile Makeovers' which include professional whitening, composite edge bonding, or fast-track zirconia crowns.",
                "advice": "Book a Consultation immediately so we can plan the timeline before the big day."
            }
        }
    },
    {
        "id": "noble_conv_151",
        "category": "General",
        "keywords": ["contact", "reach out", "help", "సహాయం", "సంపార్క్"],
        "content": {
            "en": {
                "question": "How can I contact the clinic if I have more questions?",
                "answer": "You can call us directly at [+91 XXXXXXXXXX] or click the WhatsApp icon on this site. We're here to help!",
                "advice": "Save our number for any future dental emergencies."
            }
        }
    },

    // --- BATCH 2.1: AESTHETICS & ORTHO (IDs 152-185) ---
    {
        "id": "noble_conv_152",
        "category": "Aesthetics",
        "keywords": ["composite", "porcelain", "veneer", "అందం", "సుందర్తా"],
        "content": {
            "en": {
                "question": "Composite vs. Porcelain Veneers: Which is better?",
                "answer": "Porcelain veneers are more durable, stain-resistant, and aesthetic, lasting 10-15 years. Composite veneers are more affordable and can often be done in a single visit but may need replacement in 5-7 years.",
                "advice": "If you want the most natural-looking results, porcelain is the gold standard."
            },
            "te": { "question": "కాంపోజిట్ మరియు పోర్సలీన్ వెనీర్స్ మధ్య తేడా ఏమిటి?", "answer": "పోర్సలీన్ వెనీర్స్ ఎక్కువ కాలం మన్నుతాయి మరియు అందంగా ఉంటాయి." }
        }
    },
    {
        "id": "noble_conv_153",
        "category": "Aesthetics",
        "keywords": ["bonding", "gap", "chips", "అతుకు", "जोड़ना"],
        "content": {
            "en": {
                "question": "What is dental bonding?",
                "answer": "Dental bonding uses a tooth-colored resin to fix chips, gaps, or cracks. It's a quick, painless, and cost-effective way to improve your smile without surgery.",
                "advice": "Avoid coffee or tea for 48 hours after bonding to prevent staining of the resin."
            }
        }
    },
    {
        "id": "noble_conv_154",
        "category": "Orthodontics",
        "keywords": ["ceramic braces", "clear braces", "invisible", "తెల్లని", "सफेद"],
        "content": {
            "en": {
                "question": "Are ceramic braces less visible than metal ones?",
                "answer": "Yes. Ceramic braces use tooth-colored or clear brackets that blend in with your teeth, making them much less noticeable than traditional metal braces.",
                "advice": "They are a great middle-ground if you want more discretion but don't want aligners."
            }
        }
    },
    {
        "id": "noble_conv_155",
        "category": "Orthodontics",
        "keywords": ["lingual braces", "behind teeth", "hidden", "లోపల", "पीछे"],
        "content": {
            "en": {
                "question": "What are lingual braces?",
                "answer": "Lingual braces are attached to the inner surface (back) of your teeth, making them completely invisible from the outside.",
                "advice": "They may take slightly longer to get used to for speech than front braces."
            }
        }
    },
    {
        "id": "noble_conv_156",
        "category": "Aesthetics",
        "keywords": ["gum contouring", "gummy smile", "laser", "లేజర్", "लेजर"],
        "content": {
            "en": {
                "question": "Can you fix a gummy smile?",
                "answer": "Yes! We use laser gum contouring to reshape the gum line, revealing more of your natural teeth and creating a more balanced, beautiful smile.",
                "advice": "Laser procedures involve minimal bleeding and very fast healing."
            }
        }
    },
    {
        "id": "noble_conv_157",
        "category": "Orthodontics",
        "keywords": ["treatment time", "how long", "braces", "సమయం", "समय"],
        "content": {
            "en": {
                "question": "How long do I need to wear braces?",
                "answer": "The average time is 18-24 months, but simple cases can be finished in 6-12 months. Your specific timeline depends on the complexity of your bite.",
                "advice": "Strictly following your orthodontist's advice on elastics can speed up treatment."
            }
        }
    },
    {
        "id": "noble_conv_158",
        "category": "Aesthetics",
        "keywords": ["enamel", "thin", "sensitive", "పలచని", "पतला"],
        "content": {
            "en": {
                "question": "Can veneers be placed on thin enamel?",
                "answer": "It depends. We perform a thorough exam to ensure there's enough enamel for a secure bond. For very thin enamel, we might recommend 'No-Prep' veneers or dental bonding instead.",
                "advice": "Preserving natural tooth structure is always our top priority."
            }
        }
    },
    {
        "id": "noble_conv_159",
        "category": "Orthodontics",
        "keywords": ["retainers", "after braces", "night", "తర్వాత", "के बाद"],
        "content": {
            "en": {
                "question": "Do I have to wear retainers forever?",
                "answer": "To keep your teeth perfectly straight, long-term nighttime wear of retainers is recommended. Teeth have a natural memory and may try to shift back over time.",
                "advice": "Think of retainers as a 'pajama' for your teeth to keep them in place!"
            }
        }
    },
    {
        "id": "noble_conv_160",
        "category": "Aesthetics",
        "keywords": ["whitening vs scaling", "difference", "brighten", "తేడా", "अंतर"],
        "content": {
            "en": {
                "question": "What is the difference between scaling and whitening?",
                "answer": "Scaling removes tartar and external stains (health-focused). Whitening lightens the internal color of the tooth enamel (cosmetic-focused).",
                "advice": "We usually recommend scaling before whitening for the best results."
            }
        }
    },
    {
        "id": "noble_conv_161",
        "category": "Aesthetics",
        "keywords": ["teeth whitening kits", "home vs clinic", "ఆరోగ్యం", "सुरक्षा"],
        "content": {
            "en": {
                "question": "Are store-bought whitening kits safe?",
                "answer": "Many over-the-counter kits are acidic or abrasive, which can damage enamel. Professional whitening at Noble Dental is pH-balanced and monitored by an expert for safety.",
                "advice": "Safe whitening is always better than fast whitening."
            }
        }
    },
    {
        "id": "noble_conv_162",
        "category": "Orthodontics",
        "keywords": ["best age", "kids", "braces", "వయస్సు", "उम्र"],
        "content": {
            "en": {
                "question": "What is the best age for my child to see an orthodontist?",
                "answer": "The AAO recommends a first checkup by age 7. Early screening helps detect skeletal issues while the jaw is still growing.",
                "advice": "Treatment doesn't always start at 7, but planning does!"
            }
        }
    },
    {
        "id": "noble_conv_163",
        "category": "Aesthetics",
        "keywords": ["smile design", "makeover", "wedding", "పెళ్లి", "शादी"],
        "content": {
            "en": {
                "question": "Can I get a smile makeover before my wedding?",
                "answer": "Yes! We offer customized plans ranging from 1-day whitening to 2-week veneer placements. Book a consultation at least 1 month before the event for perfect results.",
                "advice": "Plan ahead to ensure all healing is complete before your big day."
            }
        }
    },
    {
        "id": "noble_conv_164",
        "category": "Orthodontics",
        "keywords": ["rubber bands", "elastics", "braces", "రబ్బర్", "इलास्टिक"],
        "content": {
            "en": {
                "question": "Why do I need to wear rubber bands with my braces?",
                "answer": "Elastics provide the necessary force to correct your bite (how your upper and lower teeth fit together).",
                "advice": "Consistency is key—even missing a few hours can slow down your progress."
            }
        }
    },
    {
        "id": "noble_conv_165",
        "category": "Aesthetics",
        "keywords": ["black triangles", "gaps", "gums", "నల్లని", "काले"],
        "content": {
            "en": {
                "question": "Can you fix 'black triangles' between teeth?",
                "answer": "Yes, we can use Bioclear bonding or veneers to subtly close these spaces and restore a youthful gum appearance.",
                "advice": "This also prevents food from getting trapped in those gaps."
            }
        }
    },
    {
        "id": "noble_conv_166",
        "category": "Orthodontics",
        "keywords": ["pain", "soreness", "adjustment", "నొప్పి", "दर्द"],
        "content": {
            "en": {
                "question": "Do braces hurt when they are tightened?",
                "answer": "You may feel mild pressure or soreness for 2-3 days after an adjustment. Soft foods and OTC pain relievers help manage this easily.",
                "advice": "Use orthodontic wax to protect your cheeks if the brackets feel scratchy."
            }
        }
    },
    {
        "id": "noble_conv_167",
        "category": "Orthodontics",
        "keywords": ["aligner cleaning", "how to clean", "cloudy", "బ్రష్", "सफाई"],
        "content": {
            "en": {
                "question": "How do I clean my clear aligners?",
                "answer": "Rinse them every time you take them out. Use a soft toothbrush and clear liquid soap. Avoid hot water, as it can warp the plastic.",
                "advice": "Never use toothpaste to clean aligners; it can be too abrasive and make them look cloudy."
            }
        }
    },
    {
        "id": "noble_conv_168",
        "category": "Hygiene",
        "keywords": ["white spots", "braces", "decalcification", "మచ్చలు", "धब्बे"],
        "content": {
            "en": {
                "question": "What are the white spots on my teeth after braces?",
                "answer": "These are areas of 'decalcification' where plaque was left for too long. Excellent brushing during braces treatment is the only way to prevent them.",
                "advice": "We can treat mild white spots after braces with 'Infiltration' techniques or remineralizing pastes."
            }
        }
    },
    {
        "id": "noble_conv_169",
        "category": "Orthodontics",
        "keywords": ["missing elastics", "lost", "what to do", "పోగొట్టుకోవడం", "हो गया"],
        "content": {
            "en": {
                "question": "What should I do if I lose my orthodontic elastics?",
                "answer": "Call us immediately to pick up a new pack. Do not wait for your next appointment, as your teeth may start to shift back.",
                "advice": "Always keep a spare pack of elastics in your bag or car."
            }
        }
    },
    {
        "id": "noble_conv_170",
        "category": "Orthodontics",
        "keywords": ["adult braces", "too old", "30s", "40s", "వయస్సు", "उम्र"],
        "content": {
            "en": {
                "question": "Am I too old for braces?",
                "answer": "No! One in four orthodontic patients today is an adult. As long as your gums and bone are healthy, you can straighten your teeth at any age.",
                "advice": "Aligners are a very popular, discreet choice for our adult professionals in Nallagandla."
            }
        }
    },
    {
        "id": "noble_conv_171",
        "category": "Orthodontics",
        "keywords": ["space maintainer", "early loss", "milk teeth", "పిల్లలు", "बच्चे"],
        "content": {
            "en": {
                "question": "Why does my child need a space maintainer?",
                "answer": "If a milk tooth is lost too early, the space maintainer keeps the gap open so the permanent tooth has room to grow in correctly.",
                "advice": "This simple device can prevent the need for complex braces later."
            }
        }
    },
    {
        "id": "noble_conv_172",
        "category": "Orthodontics",
        "keywords": ["impacted tooth", "canine", "exposure", "దవడ", "धंसा"],
        "content": {
            "en": {
                "question": "What is an impacted tooth exposure?",
                "answer": "Sometimes a permanent tooth (like a canine) gets stuck in the jaw. We work with an oral surgeon to 'expose' the tooth and use braces to gently pull it into the right spot.",
                "advice": "Canines are critical for your bite's stability and should be saved whenever possible."
            }
        }
    },
    {
        "id": "noble_conv_173",
        "category": "Aesthetics",
        "keywords": ["teeth shaping", "contouring", "even smile", "సమానం", "बराबर"],
        "content": {
            "en": {
                "question": "Can you fix uneven tooth edges without braces?",
                "answer": "Yes! Through 'Enameloplasty' (cosmetic contouring), we can subtly reshape and smooth uneven edges for a more symmetrical smile in minutes.",
                "advice": "This is often combined with bonding for a perfect 'mini-makeover'."
            }
        }
    },
    {
        "id": "noble_conv_174",
        "category": "Orthodontics",
        "keywords": ["speech", "lisp", "aligners", "మాట్లాడటం", "बोलना"],
        "content": {
            "en": {
                "question": "Will braces or aligners affect how I speak?",
                "answer": "You might have a slight lisp for the first 2-3 days as your tongue adjusts. Most patients speak perfectly normal after that short period.",
                "advice": "Reading out loud for 10 minutes helps your tongue adapt much faster!"
            }
        }
    },
    {
        "id": "noble_conv_175",
        "category": "Aesthetics",
        "keywords": ["stain prevention", "coffee", "whitening", "మచ్చలు", "दाग"],
        "content": {
            "en": {
                "question": "How do I maintain my results after teeth whitening?",
                "answer": "Avoid 'staining' foods like coffee, turmeric, and red wine for at least 48 hours. Use a straw for dark drinks and maintain good hygiene.",
                "advice": "Periodic 'touch-up' whitening every 6-12 months can keep your smile permanently bright."
            }
        }
    },
    {
        "id": "noble_conv_176",
        "category": "Periodontics",
        "keywords": ["loose teeth", "gums", "bone loss", "కదిలే పళ్ళు", "हिलते दांत"],
        "content": {
            "en": {
                "question": "Can loose teeth be saved?",
                "answer": "Yes, if the cause is gum disease. We use 'Periodontal Splinting' and deep cleaning to stabilize the teeth and promote bone healing.",
                "advice": "The sooner you treat mobility, the higher the chance of saving your natural teeth."
            }
        }
    },
    {
        "id": "noble_conv_177",
        "category": "Periodontics",
        "keywords": ["gum recession", "exposed roots", "sensitivity", "దుర్వాసన", "पीछे हटना"],
        "content": {
            "en": {
                "question": "Why are my gums receding?",
                "answer": "Gums can recede due to aggressive brushing, gum disease, or genetics. We can treat this through gentle 'Gum Grafts' or Pinhole Surgical techniques.",
                "advice": "Using a soft-bristled brush and proper technique can prevent further recession."
            }
        }
    },
    {
        "id": "noble_conv_178",
        "category": "Periodontics",
        "keywords": ["laser gum therapy", "lanap", "painless", "లేజర్", "लेजर"],
        "content": {
            "en": {
                "question": "What is Laser Gum Therapy (LANAP)?",
                "answer": "LANAP is a minimally invasive laser treatment for gum disease that kills bacteria and helps regenerate bone without surgery or stitches.",
                "advice": "Laser therapy is often faster and has significantly less downtime than traditional surgery."
            }
        }
    },
    {
        "id": "noble_conv_179",
        "category": "Oral Surgery",
        "keywords": ["biopsy", "mouth sore", "healing", "పరీక్ష", "जांच"],
        "content": {
            "en": {
                "question": "When is a mouth sore a reason for concern?",
                "answer": "Most sores heal in 10-14 days. If a sore lasts longer, we may perform a painless 'Oral Biopsy' to rule out any serious conditions.",
                "advice": "Early detection is critical—don't ignore non-healing ulcers."
            }
        }
    },
    {
        "id": "noble_conv_180",
        "category": "Aesthetics",
        "keywords": ["bridal smile", "fast whitening", "bonding", "పెళ్లి", "शादी"],
        "content": {
            "en": {
                "question": "Can I get my teeth laser-whitened in one day?",
                "answer": "Yes! Our in-office laser whitening can brighten your teeth by 3-5 shades in just 60 minutes.",
                "advice": "It's the perfect 'express' treatment for immediate results."
            }
        }
    },
    {
        "id": "noble_conv_181",
        "category": "Oral Surgery",
        "keywords": ["jaw cyst", "removal", "swelling", "దవడ", "गांठ"],
        "content": {
            "en": {
                "question": "How are jaw cysts treated?",
                "answer": "Most jaw cysts are removed through a minor surgical procedure called 'Enucleation'. We then use advanced imaging to monitor the area and ensure complete healing.",
                "advice": "Regular dental X-rays (OPG) are the best way to catch cysts before they become large or painful."
            }
        }
    },
    {
        "id": "noble_conv_182",
        "category": "Kids",
        "keywords": ["fluoride therapy", "prevention", "cavities", "పిల్లలు", "बच्चे"],
        "content": {
            "en": {
                "question": "Is fluoride treatment necessary for children?",
                "answer": "Yes. Fluoride 'varnish' strengthens developing enamel and can reverse early-stage decay, making the teeth highly resistant to cavities.",
                "advice": "It's a painless 5-minute procedure that provides months of protection."
            }
        }
    },
    {
        "id": "noble_conv_183",
        "category": "Kids",
        "keywords": ["dental sealants", "molars", "deep pits", "పిల్లలు", "बच्चे"],
        "content": {
            "en": {
                "question": "What are dental sealants?",
                "answer": "Sealants are thin coatings applied to the chewing surfaces of back teeth to prevent food and bacteria from getting stuck in deep grooves.",
                "advice": "We recommend sealants as soon as your child's permanent molars grow in (around age 6 and 12)."
            }
        }
    },
    {
        "id": "noble_conv_184",
        "category": "Periodontics",
        "keywords": ["smoker gums", "healing", "risk", "పొగ", "धूम्रपान"],
        "content": {
            "en": {
                "question": "Why is gum disease worse for smokers?",
                "answer": "Smoking masks the symptoms of gum disease (like bleeding) and reduces the blood flow needed for healing. This makes smokers more prone to severe bone loss.",
                "advice": "If you smoke, regular scaling is even more critical for your oral health."
            }
        }
    },
    {
        "id": "noble_conv_185",
        "category": "General",
        "keywords": ["second opinion", "diagnosis", "verify", "పరీక్ష", "जांच"],
        "content": {
            "en": {
                "question": "Can I get a second opinion on a treatment plan from another clinic?",
                "answer": "Absolutely. We provide unbiased second opinions with 3D imaging to help you verify the necessity and cost of any major proposed treatments.",
                "advice": "Transparency and ethics are the foundations of our practice."
            }
        }
    },
    {
        "id": "noble_conv_186",
        "category": "Geriatrics",
        "keywords": ["overdenture", "implants", "seniors", "వృద్ధులు", "बुजुर्ग"],
        "content": {
            "en": {
                "question": "What is an implant-supported overdenture?",
                "answer": "It's a denture that 'snaps' onto a few dental implants. This provides much better stability and chewing power compared to traditional 'loose' dentures.",
                "advice": "This is a life-changing option for seniors who struggle with falling dentures."
            }
        }
    },
    {
        "id": "noble_conv_187",
        "category": "Geriatrics",
        "keywords": ["dry mouth", "xerostomia", "medication", "నోరు ఆరిపోవడం", "सूखा मुँह"],
        "content": {
            "en": {
                "question": "Why is my mouth always dry?",
                "answer": "Dry mouth (Xerostomia) is common in seniors and often a side effect of medications. It increases the risk of decay and gum disease.",
                "advice": "Sipping water frequently and using saliva substitutes can provide significant relief."
            }
        }
    },
    {
        "id": "noble_conv_188",
        "category": "TMJ & Bruxism",
        "keywords": ["jaw pain", "clicking", "tmj", "దవడ నొప్పి", "जबड़े का दर्द"],
        "content": {
            "en": {
                "question": "Why does my jaw click or pop?",
                "answer": "This is often a sign of 'TMJ Disorder' – a problem with the jaw joint or muscles. It can be caused by stress, teeth grinding, or a misaligned bite.",
                "advice": "Avoid chewing gum and try warm compresses on the jaw to reduce discomfort."
            }
        }
    },
    {
        "id": "noble_conv_189",
        "category": "TMJ & Bruxism",
        "keywords": ["grinding", "bruxism", "night guard", "పళ్ళు కొరకడం", "दांत पीसना"],
        "content": {
            "en": {
                "question": "I grind my teeth at night. What can I do?",
                "answer": "Teeth grinding (bruxism) can wear down your enamel and cause headaches. We can create a custom-fit 'Night Guard' to protect your teeth while you sleep.",
                "advice": "Night guards also help in relaxing your jaw muscles over time."
            }
        }
    },
    {
        "id": "noble_conv_190",
        "category": "TMJ & Bruxism",
        "keywords": ["migraine", "headache", "dental link", "తలనొప్పి", "सिरदर्द"],
        "content": {
            "en": {
                "question": "Can dental problems cause chronic headaches or migraines?",
                "answer": "Yes. Chronic tension in the jaw muscles due to grinding or a bad bite is a common, often overlooked trigger for daily headaches and migraines.",
                "advice": "Correcting your bite or using a night guard can often reduce the frequency of these headaches."
            }
        }
    },
    {
        "id": "noble_conv_191",
        "category": "Holistic Dentistry",
        "keywords": ["mercury free", "amalgam", "fillings", "సురక్షిత", "सुरक्षित"],
        "content": {
            "en": {
                "question": "Does Noble Dental use mercury-free fillings?",
                "answer": "Yes. We follow a strict mercury-free (amalgam-free) policy. We only use high-grade, bio-compatible composite resins and ceramics for all our restorations.",
                "advice": "Bio-compatible materials are safer for your systemic health and look more natural."
            }
        }
    },
    {
        "id": "noble_conv_192",
        "category": "Holistic Dentistry",
        "keywords": ["ozone therapy", "prevention", "natural", "సహజ", "प्राकृतिक"],
        "content": {
            "en": {
                "question": "What is Holistic Dentistry?",
                "answer": "Holistic dentistry considers your oral health as part of your overall systemic health. We focus on using bio-compatible materials and minimally invasive techniques.",
                "advice": "We look beyond just the teeth to find the root cause of oral issues."
            }
        }
    },
    {
        "id": "noble_conv_193",
        "category": "Policies",
        "keywords": ["guarantee", "warranty", "implants", "హామీ", "गारंटी"],
        "content": {
            "en": {
                "question": "Do you provide a warranty on dental treatments?",
                "answer": "Yes, we offer clinical warranties on major procedures like implants and zirconia crowns (ranging from 5 years to a lifetime), provided regular checkups are maintained.",
                "advice": "A warranty reflect our confidence in our clinical precision and the materials we use."
            }
        }
    },
    {
        "id": "noble_conv_194",
        "category": "Policies",
        "keywords": ["insurance", "cashless", "claim", "భీమా", "बीमा"],
        "content": {
            "en": {
                "question": "Do you accept dental insurance?",
                "answer": "We provide all the necessary clinical documentation, bills, and X-rays to help you claim reimbursement from your private or corporate dental insurance.",
                "advice": "Check with your HR or insurance provider for your specific annual limits on dental coverage."
            }
        }
    },
    {
        "id": "noble_conv_195",
        "category": "Policies",
        "keywords": ["emergency hours", "night", "sunday", "ఆదివారం", "रविवार"],
        "content": {
            "en": {
                "question": "What should I do for a dental emergency on a Sunday?",
                "answer": "While we are closed on Sundays for routine care, our emergency triage line is open for existing patients. Please call us for guidance.",
                "advice": "Ignoring a dental emergency can lead to more pain and higher costs later."
            }
        }
    },
    {
        "id": "noble_conv_196",
        "category": "Oral Health",
        "keywords": ["heart disease", "stroke", "gums", "గుండె", "दिल"],
        "content": {
            "en": {
                "question": "Is there a link between gum disease and heart disease?",
                "answer": "Yes. Chronic gum inflammation allows bacteria to enter the bloodstream, which can contribute to arterial plaque and increase the risk of heart disease and stroke.",
                "advice": "Treating gum disease is not just about your smile; it's about your whole-body health."
            }
        }
    },
    {
        "id": "noble_conv_197",
        "category": "Oral Health",
        "keywords": ["pregnancy", "bleeding gums", "gingivitis", "గర్భిణీ", "गर्भवती"],
        "content": {
            "en": {
                "question": "Why do my gums bleed more during pregnancy?",
                "answer": "Hormonal changes can make your gums more sensitive to plaque, leading to 'Pregnancy Gingivitis'. Regular professional cleanings are safe and recommended during pregnancy.",
                "advice": "Gum health during pregnancy is also linked to a healthy birth weight for the baby."
            }
        }
    },
    {
        "id": "noble_conv_198",
        "category": "Technology",
        "keywords": ["digital scanner", "impression", "goop", "స్కాన్", "स्कैन"],
        "content": {
            "en": {
                "question": "Do I still need to take messy impressions (the 'goop')?",
                "answer": "No! We use advanced 3D Digital Intraoral Scanners to create a perfect digital model of your teeth in minutes, without any discomfort or gagging.",
                "advice": "Digital impressions are 10x more accurate and result in better-fitting crowns and aligners."
            }
        }
    },
    {
        "id": "noble_conv_199",
        "category": "Technology",
        "keywords": ["painless injection", "the wand", "fear", "నొప్పి", "दर्द"],
        "content": {
            "en": {
                "question": "Are your injections painless?",
                "answer": "We use 'The Wand' – a computer-controlled local anesthesia system that delivers the numbing agent slowly and painlessly. Most patients don't even feel the needle.",
                "advice": "If you have a phobia of needles, this technology is a game-changer for your comfort."
            }
        }
    },
    {
        "id": "noble_conv_200",
        "category": "Aesthetics",
        "keywords": ["composite bonding", "chips", "natural", "సహజ", "प्राकृतिक"],
        "content": {
            "en": {
                "question": "Can composite bonding fix a chipped front tooth?",
                "answer": "Yes! We use high-aesthetic resins that match the exact shade and translucency of your natural teeth to invisibly repair chips in a single visit.",
                "advice": "Bonding is the most conservative and affordable way to restore a damaged tooth."
            }
        }
    },
    {
        "id": "noble_conv_201",
        "category": "Hygiene",
        "keywords": ["water flosser", "waterpik", "braces", "ఫ్లాసర్", "फ्लॉसर"],
        "content": {
            "en": {
                "question": "Is a water flosser better than string floss?",
                "answer": "Water flossers are excellent for people with braces or bridges. However, string floss is still slightly better at removing stuck plaque between tight teeth.",
                "advice": "Using both is the 'gold standard' for home care!"
            }
        }
    },
    {
        "id": "noble_conv_202",
        "category": "Oral Health",
        "keywords": ["tongue scraper", "bad breath", "hygiene", "నాలుక", "जीभ"],
        "content": {
            "en": {
                "question": "Does tongue scraping really help with bad breath?",
                "answer": "Yes! Most odor-causing bacteria live on the back of the tongue. A scraper removes the 'biofilm' that brushing alone often misses.",
                "advice": "Clean your tongue every morning for a significantly fresher feel."
            }
        }
    },
    {
        "id": "noble_conv_203",
        "category": "Technology",
        "keywords": ["air polishing", "stains", "cleaning", "మచ్చలు", "दाग"],
        "content": {
            "en": {
                "question": "What is air polishing (Prophy-Jet)?",
                "answer": "It's a high-pressure stream of water and fine powder that removes deep stains (like coffee or smoking) much faster and more gently than traditional polishing.",
                "advice": "It's the best way to get that 'squeaky clean' feeling without the vibration of a drill."
            }
        }
    },
    {
        "id": "noble_conv_204",
        "category": "Emergency",
        "keywords": ["knocked out tooth", "avulsed", "save tooth", "పన్ను", "दांत"],
        "content": {
            "en": {
                "question": "What should I do if my tooth is knocked out?",
                "answer": "Pick it up by the crown (not the root), rinse gently, and try to place it back in the socket. If not, keep it in a cup of milk and see us within 30 minutes.",
                "advice": "Time is of the essence—an avulsed tooth can often be saved if replanted quickly."
            }
        }
    },
    {
        "id": "noble_conv_205",
        "category": "General",
        "keywords": ["sugar free gum", "xylitol", "prevention", "జిగురు", "गम"],
        "content": {
            "en": {
                "question": "Is sugar-free gum good for my teeth?",
                "answer": "Yes, especially if it contains Xylitol. Chewing gum stimulates saliva, which naturally washes away acids and food particles.",
                "advice": "Look for the ADA seal on the packaging to ensure it's truly tooth-friendly."
            }
        }
    },
    {
        "id": "noble_conv_206",
        "category": "Clinical",
        "keywords": ["teeth sensitivity", "cold water", "recession", "జిగురు", "झनझनाहट"],
        "content": {
            "en": {
                "question": "Why are my teeth so sensitive to cold water?",
                "answer": "Sensitivity often happens when the protective enamel wears down or gums recede, exposing the 'dentin' layer. This allows temperature signals to reach the nerve.",
                "advice": "Using a desensitizing toothpaste usually helps in 2 weeks; if not, you may need a protective coating applied at the clinic."
            }
        }
    },
    {
        "id": "noble_conv_207",
        "category": "Clinical",
        "keywords": ["wisdom tooth pain", "impacted", "swelling", "జ్ఞాన దంతం", "अक्ल दाढ़"],
        "content": {
            "en": {
                "question": "Do all wisdom teeth need to be removed?",
                "answer": "Not if they are healthy, fully erupted, and correctly positioned. However, we recommend removal if they are impacted, causing pain, or pushing against other teeth.",
                "advice": "Modern extraction techniques are very quick and involve minimal discomfort."
            }
        }
    },
    {
        "id": "noble_conv_208",
        "category": "Oral Health",
        "keywords": ["bleeding gums", "brushing", "healthy teeth", "రక్తం", "खून"],
        "content": {
            "en": {
                "question": "Is it normal for gums to bleed a little during brushing?",
                "answer": "No. Healthy gums never bleed. Bleeding is the first sign of gingivitis (early gum disease).",
                "advice": "Don't stop brushing areas that bleed; instead, brush more gently and see us for a professional cleaning."
            }
        }
    },
    {
        "id": "noble_conv_209",
        "category": "Clinical",
        "keywords": ["cracked tooth", "sharp pain", "chewing", "పగులు", "दरार"],
        "content": {
            "en": {
                "question": "My tooth only hurts when I bite down. Why?",
                "answer": "This is a classic 'Cracked Tooth Syndrome' sign. The pain occurs as the crack opens and closes during chewing, irritating the nerve.",
                "advice": "Treat cracks early with a crown to prevent the tooth from splitting completely."
            }
        }
    },
    {
        "id": "noble_conv_210",
        "category": "General",
        "keywords": ["dental phobia", "scared", "relax", "భయం", "डर"],
        "content": {
            "en": {
                "question": "I am terrified of dentists. How can you help?",
                "answer": "We specialize in treating anxious patients. We offer a calm environment, painless injections, and step-by-step explanations to ensure you feel in control.",
                "advice": "Let us know about your fears—we can tailor the pace of the appointment to your comfort level."
            }
        }
    },
    {
        "id": "noble_conv_211",
        "category": "Oral Surgery",
        "keywords": ["apicoectomy", "root canal surgery", "persistent infection", "చికిత్స", "सर्जरी"],
        "content": {
            "en": {
                "question": "What is an apicoectomy?",
                "answer": "An apicoectomy is a root-end surgery performed if a natural tooth cannot be saved by standard root canal treatment alone. We remove the infected tip of the root and seal it.",
                "advice": "This is often the last-resort procedure to save a tooth from extraction."
            }
        }
    },
    {
        "id": "noble_conv_212",
        "category": "Periodontics",
        "keywords": ["crown lengthening", "gummy smile", "restoration", "పన్ను", "दांत"],
        "content": {
            "en": {
                "question": "Why do I need crown lengthening?",
                "answer": "If a tooth is broken below the gum line or is too short for a crown, we gently reshape the gum and bone to expose more of the tooth structure.",
                "advice": "This ensures your new crown has a strong, stable foundation and prevents future gum irritation."
            }
        }
    },
    {
        "id": "noble_conv_213",
        "category": "Hygiene",
        "keywords": ["electric toothbrush", "better", "manual", "బ్రష్", "ब्रश"],
        "content": {
            "en": {
                "question": "Is an electric toothbrush better than a manual one?",
                "answer": "Clinical studies show that electric toothbrushes (especially oscillating ones) remove significantly more plaque and reduce gingivitis better than manual brushing.",
                "advice": "The built-in timer in most electric brushes ensures you actually brush for the full 2 minutes."
            }
        }
    },
    {
        "id": "noble_conv_214",
        "category": "Clinical",
        "keywords": ["trench mouth", "anug", "painful gums", "నొప్పి", "दर्द"],
        "content": {
            "en": {
                "question": "What is ANUG (Trench Mouth)?",
                "answer": "ANUG is a severe, painful gum infection characterized by 'punched-out' gum edges and a strong metallic taste. It requires immediate professional treatment with antibiotics and deep cleaning.",
                "advice": "Stress and poor nutrition are often major triggers for this condition."
            }
        }
    },
    {
        "id": "noble_conv_215",
        "category": "Technology",
        "keywords": ["cbct", "3d x-ray", "imaging", "చిత్రం", "छवि"],
        "content": {
            "en": {
                "question": "Why do I need a 3D CBCT scan instead of a regular X-ray?",
                "answer": "A 3D scan provides a complete volumetric view of your jaw, bone density, and nerve locations. This is essential for safe and precise implant placement.",
                "advice": "It's the difference between seeing a map and being physically in the room."
            }
        }
    },
    {
        "id": "noble_conv_216",
        "category": "Oral Health",
        "keywords": ["mouth cancer", "screening", "velscope", "పరీక్ష", "जांच"],
        "content": {
            "en": {
                "question": "How often should I be screened for oral cancer?",
                "answer": "We perform a visual oral cancer screening at every routine checkup. If you use tobacco or alcohol, we recommend more frequent and detailed screenings.",
                "advice": "Oral cancer is highly treatable if caught in the earliest stages."
            }
        }
    },
    {
        "id": "noble_conv_217",
        "category": "Clinical",
        "keywords": ["dry socket", "extraction", "pain", "నొప్పి", "दर्द"],
        "content": {
            "en": {
                "question": "What is a dry socket?",
                "answer": "A dry socket occurs when the protective blood clot in an extraction site dissolves or dislodges, exposing the bone and nerves. It is very painful but easily treated at our clinic.",
                "advice": "Avoid smoking or using a straw for 48 hours after extraction to prevent this."
            }
        }
    },
    {
        "id": "noble_conv_218",
        "category": "Trauma",
        "keywords": ["fractured jaw", "emergency", "swelling", "దవడ", "जबड़ा"],
        "content": {
            "en": {
                "question": "What are the signs of a fractured jaw?",
                "answer": "Common signs include difficulty opening your mouth, uneven bite, swelling, and numbness in the lower lip. This is a medical emergency.",
                "advice": "If you suspect a jaw fracture, go to the nearest ER or call us immediately."
            }
        }
    },
    {
        "id": "noble_conv_219",
        "category": "Aesthetics",
        "keywords": ["lumineers", "no-prep veneers", "thin", "పల్చని", "पतला"],
        "content": {
            "en": {
                "question": "What are 'No-Prep' veneers (Lumineers)?",
                "answer": "These are ultra-thin veneers that can be placed over your natural teeth without having to remove any enamel. They are ideal for certain cosmetic corrections.",
                "advice": "No-prep veneers are reversible, making them a popular choice for conservative smile enhancements."
            }
        }
    },
    {
        "id": "noble_conv_220",
        "category": "General",
        "keywords": ["dental insurance", "corporate", "reimbursement", "భీమా", "బీమా"],
        "content": {
            "en": {
                "question": "Can I use my corporate dental insurance at Noble Dental?",
                "answer": "Yes! While we may not have direct tie-ups with all companies, we provide the detailed itemized bills and clinical reports needed for you to claim 100% reimbursement.",
                "advice": "Most tech companies in Nallagandla/Financial District provide dental coverage—don't let it go to waste!"
            }
        }
    },
    {
        "id": "noble_conv_221",
        "category": "General",
        "keywords": ["referral", "friend", "discount", "స్నేహితుడు", "दोस्त"],
        "content": {
            "en": {
                "question": "Do you have a referral program?",
                "answer": "Yes! We deeply value the trust our patients place in us. When you refer a friend or family member, they receive a complimentary consultation, and you receive priority scheduling for your next visit.",
                "advice": "The best thank you we can receive is a referral from a happy patient."
            }
        }
    },
    {
        "id": "noble_conv_222",
        "category": "General",
        "keywords": ["parking", "nallagandla", "location", "పార్కింగ్", "पार्किंग"],
        "content": {
            "en": {
                "question": "Is there parking available at the clinic?",
                "answer": "Yes, we have dedicated parking for our patients right in front of the clinic, making your visit stress-free.",
                "advice": "Being on the main road, we're easy to spot and easy to access!"
            }
        }
    },
    {
        "id": "noble_conv_223",
        "category": "Oral Health",
        "keywords": ["bad breath", "halitosis", "cure", "దుర్వాసన", "मुँह की दुर्गंध"],
        "content": {
            "en": {
                "question": "Can bad breath be permanently cured?",
                "answer": "Yes. Most cases of chronic bad breath (halitosis) are caused by hidden plaque, gum disease, or tongue bacteria. Once we treat the underlying cause, the odor disappears.",
                "advice": "Mouthwashes only mask the problem; fixing the source is the only permanent solution."
            }
        }
    },
    {
        "id": "noble_conv_224",
        "category": "Technology",
        "keywords": ["microscope", "root canal", "precision", "సూక్ష్మ దర్శిని", "सूक्ष्मदर्शी"],
        "content": {
            "en": {
                "question": "Do you use a dental microscope for root canals?",
                "answer": "Yes. Using a dental microscope allows us to see tiny, hidden canals that are often missed by the naked eye, leading to much higher success rates for root canal treatments.",
                "advice": "Microscopic dentistry is the peak of modern precision."
            }
        }
    },
    {
        "id": "noble_conv_225",
        "category": "Clinical",
        "keywords": ["abscess", "swelling", "infection", "వాపు", "सूजन"],
        "content": {
            "en": {
                "question": "What happens if a dental abscess is left untreated?",
                "answer": "A dental abscess is a serious infection that can spread to the jaw, neck, or even the brain. It will not go away on its own and requires immediate drainage and treatment.",
                "advice": "Never ignore a swelling in your mouth or face—it's a sign your body needs help immediately."
            }
        }
    },
    {
        "id": "noble_conv_226",
        "category": "Aesthetics",
        "keywords": ["stain removal", "whitening", "natural", "సహజ", "प्राकृतिक"],
        "content": {
            "en": {
                "question": "How do you remove deep intrinsic stains (like from medications)?",
                "answer": "Intrinsic stains (inside the tooth) often don't respond to whitening. In these cases, we recommend ultra-thin veneers or bonding to provide a permanently bright and white surface.",
                "advice": "We can mask almost any discoloration to give you the smile you've always wanted."
            }
        }
    },
    {
        "id": "noble_conv_227",
        "category": "Technology",
        "keywords": ["intraoral camera", "live view", "see what dentist sees", "కెమెరా", "कैमरा"],
        "content": {
            "en": {
                "question": "Can I see what the dentist is seeing inside my mouth?",
                "answer": "Yes! We use high-definition intraoral cameras to show you live images of your teeth on a large screen, helping you understand your dental health better.",
                "advice": "Seeing is believing—we want you to be fully informed about your treatment needs."
            }
        }
    },
    {
        "id": "noble_conv_228",
        "category": "Geriatrics",
        "keywords": ["denture care", "cleaning", "seniors", "వృద్ధులు", "बुजुर्ग"],
        "content": {
            "en": {
                "question": "What is the best way to clean my dentures?",
                "answer": "Brush them daily with a soft brush and non-abrasive cleanser. Soak them overnight in water or a specialized denture solution to keep them from warping.",
                "advice": "Never use hot water, as it can permanently change the shape of your dentures."
            }
        }
    },
    {
        "id": "noble_conv_229",
        "category": "Clinical",
        "keywords": ["mouth tape", "snoring", "sleep apnea", "నిద్ర", "नींद"],
        "content": {
            "en": {
                "question": "Does mouth taping help with snoring?",
                "answer": "Mouth taping can encourage nasal breathing, but it's not a cure for sleep apnea. We recommend a proper sleep study and an oral appliance for snoring issues.",
                "advice": "Nasal breathing is much healthier for your oral and systemic health than mouth breathing."
            }
        }
    },
    {
        "id": "noble_conv_230",
        "category": "Oral Health",
        "keywords": ["electric flosser", "airfloss", "convenience", "ఫ్లాసర్", "फ्लॉसर"],
        "content": {
            "en": {
                "question": "Are electric flossers (like Philips AirFloss) effective?",
                "answer": "They are a great 'better-than-nothing' option for people who hate traditional flossing. They use air and water droplets to burst away plaque between teeth.",
                "advice": "While convenient, they are best used as a supplement to regular flossing, not a total replacement."
            }
        }
    },
    {
        "id": "noble_conv_231",
        "category": "General",
        "keywords": ["appointment duration", "how long", "wait time", "సమయం", "समय"],
        "content": {
            "en": {
                "question": "How long will my first appointment take?",
                "answer": "A comprehensive first checkup usually takes 45-60 minutes, including X-rays and a detailed discussion of your health goals.",
                "advice": "We respect your time and strive to keep wait times under 10 minutes."
            }
        }
    },
    {
        "id": "noble_conv_232",
        "category": "Clinical",
        "keywords": ["bruising", "swelling", "after surgery", "వాపు", "सूजन"],
        "content": {
            "en": {
                "question": "Is bruising normal after a dental procedure?",
                "answer": "Mild bruising or swelling can occur after more complex surgeries like implants or wisdom tooth removals. It usually peaks at 48 hours and then fades.",
                "advice": "Using an ice pack for the first 24 hours significantly reduces post-operative swelling."
            }
        }
    },
    {
        "id": "noble_conv_233",
        "category": "Aesthetics",
        "keywords": ["lip filler", "dental link", "smile beauty", "అందం", "सुंदरता"],
        "content": {
            "en": {
                "question": "Can dental work improve the appearance of my lips?",
                "answer": "Yes. Teeth provide the internal support for your lips. Correcting tooth position or replacing missing teeth can often make lips look fuller and more youthful naturally.",
                "advice": "A beautiful smile is the foundation of a beautiful face."
            }
        }
    },
    {
        "id": "noble_conv_234",
        "category": "General",
        "keywords": ["walk-in", "emergency", "same day", "అత్యవసర", "आपातकालीन"],
        "content": {
            "en": {
                "question": "Do you accept walk-in patients for emergencies?",
                "answer": "Yes. We reserve dedicated 'Emergency Blocks' in our daily schedule to ensure we can see patients in pain on the same day.",
                "advice": "If you're in pain, just walk in or call us—we won't let you suffer."
            }
        }
    },
    {
        "id": "noble_conv_235",
        "category": "Ethics",
        "keywords": ["unnecessary treatment", "ethics", "trust", "హామీ", "गारंटी"],
        "content": {
            "en": {
                "question": "How do I know if I really need the treatment being suggested?",
                "answer": "We follow an 'Evidence-Based' approach. We will show you the exact problem on an X-ray or intraoral photo and explain why the treatment is necessary for your long-term health.",
                "advice": "Our goal is to be your lifelong dental partners, built on a foundation of absolute honesty."
            }
        }
    },
    {
        "id": "noble_conv_236",
        "category": "General",
        "keywords": ["student discount", "senior discount", "offers", "తగ్గింపు", "छूट"],
        "content": {
            "en": {
                "question": "Does Noble Dental offer any discounts for students or seniors?",
                "answer": "We periodically run 'Community Outreach' programs offering special rates for students and senior citizens. Call us to find out our current available programs.",
                "advice": "Making dental care accessible to everyone in Nallagandla is part of our mission."
            }
        }
    },
    {
        "id": "noble_conv_237",
        "category": "Clinical",
        "keywords": ["saliva test", "decay risk", "preventative", "పరీక్ష", "जांच"],
        "content": {
            "en": {
                "question": "Can you test my risk for getting cavities?",
                "answer": "Yes. We can perform a 'Saliva Risk Assessment' to analyze your mouth's pH and bacterial levels, helping us create a personalized prevention plan.",
                "advice": "Knowing your risk level helps us stop cavities before they even start."
            }
        }
    },
    {
        "id": "noble_conv_238",
        "category": "General",
        "keywords": ["referral reward", "loyalty", "gift", "బహుమతి", "उपहार"],
        "content": {
            "en": {
                "question": "Is there a loyalty program for regular patients?",
                "answer": "Yes. Our regular patients receive complimentary annual oral cancer screenings and priority access to our visiting specialists.",
                "advice": "Loyalty in healthcare is built on consistent quality and the value we provide over years."
            }
        }
    },
    {
        "id": "noble_conv_239",
        "category": "Oral Health",
        "keywords": ["vaping", "e-cigarettes", "dental health", "పొగ", "धूम्रपान"],
        "content": {
            "en": {
                "question": "Is vaping better for my teeth than smoking?",
                "answer": "While vaping doesn't cause tobacco stains, the chemicals still dry out your mouth and increase the risk of gum disease and decay. It is not 'safe' for your teeth.",
                "advice": "Both vaping and smoking significantly increase your risk for oral health complications."
            }
        }
    },
    {
        "id": "noble_conv_240",
        "category": "Policy",
        "keywords": ["cancellation", "re-schedule", "fees", "ఫీజు", "शुल्क"],
        "content": {
            "en": {
                "question": "What is your appointment cancellation policy?",
                "answer": "We request at least 24 hours' notice if you need to reschedule. This allows us to offer that time to another patient who might be in need.",
                "advice": "Rescheduling on time helps us keep our clinic running smoothly for everyone."
            }
        }
    },
    {
        "id": "noble_conv_241",
        "category": "General",
        "keywords": ["location", "landmarks", "find us", "గుర్తు", "निशान"],
        "content": {
            "en": {
                "question": "What are the common landmarks to find Noble Dental?",
                "answer": "We are located in Nallagandla, very close to [Local Landmark name, e.g., Citizens Hospital / Ratnadeep Supermarket]. You'll see our prominent signage on the main road.",
                "advice": "If you're lost, just give us a call and we'll guide you right to our doorstep."
            }
        }
    },
    {
        "id": "noble_conv_242",
        "category": "Ethics",
        "keywords": ["overtreatment", "honest dentist", "trustworthy", "నమ్మకం", "विश्वास"],
        "content": {
            "en": {
                "question": "How do you prevent 'over-treatment'?",
                "answer": "We use the 'Watch' philosophy. If a cavity is very small and can be reversed with better hygiene, we 'watch' it instead of drilling immediately.",
                "advice": "Conservative dentistry is always better for the long-term strength of your teeth."
            }
        }
    },
    {
        "id": "noble_conv_243",
        "category": "Policy",
        "keywords": ["international patient", "travel", "dental tourism", "సరసమైన", "सस्ता"],
        "content": {
            "en": {
                "question": "Do you treat international patients?",
                "answer": "Yes! Many NRIs and international patients visit us for high-quality, affordable dental care. We can coordinate your treatment timeline with your travel dates.",
                "advice": "We provide digital copies of all records so you can share them with your dentist back home."
            }
        }
    },
    {
        "id": "noble_conv_244",
        "category": "Clinical",
        "keywords": ["acid reflux", "gerd", "enamel wear", "పన్ను", "दांत"],
        "content": {
            "en": {
                "question": "Can acid reflux damage my teeth?",
                "answer": "Yes. Stomach acid is extremely strong and can quickly erode your tooth enamel. We often detect undiagnosed GERD by looking at specific wear patterns on teeth.",
                "advice": "Rinsing with water (not brushing) after an acid reflux episode can help protect your enamel."
            }
        }
    },
    {
        "id": "noble_conv_245",
        "category": "Oral Health",
        "keywords": ["mouthwash", "fluoride", "best brand", "చికిత్స", "माउथवाश"],
        "content": {
            "en": {
                "question": "Which mouthwash is the best?",
                "answer": "It depends on your needs. For cavities, use a fluoride mouthwash. For gum health, use an alcohol-free antiseptic one. Avoid alcohol-based mouthwashes as they cause dry mouth.",
                "advice": "Ask us during your visit—we'll recommend a specific brand based on your oral environment."
            }
        }
    },
    {
        "id": "noble_conv_246",
        "category": "General",
        "keywords": ["family appointment", "kids and parents", "same time", "కుటుంబం", "परिवार"],
        "content": {
            "en": {
                "question": "Can the whole family get checkups at the same time?",
                "answer": "Yes! We can book multiple chairs simultaneously so parents and children can complete their visits together, saving you multiple trips to the clinic.",
                "advice": "Family appointments are a great way to normalize dental visits for children."
            }
        }
    },
    {
        "id": "noble_conv_247",
        "category": "Clinical",
        "keywords": ["teeth whitening", "sensitive", "pain", "నొప్పి", "दर्द"],
        "content": {
            "en": {
                "question": "Does teeth whitening cause permanent sensitivity?",
                "answer": "No. Any sensitivity after whitening is temporary and usually fades within 24-48 hours. We use desensitizing gels to minimize this for our patients.",
                "advice": "If you already have sensitive teeth, we recommend a desensitizing treatment a week before your whitening."
            }
        }
    },
    {
        "id": "noble_conv_248",
        "category": "Technology",
        "keywords": ["lasers", "cavity", "no drill", "మెషిన్", "मशीन"],
        "content": {
            "en": {
                "question": "Do you use lasers to treat cavities?",
                "answer": "We use lasers for gum treatments and some soft tissue procedures. For cavities, we use high-speed, quiet handpieces that are far more comfortable than older drills.",
                "advice": "Our modern equipment is designed to minimize the 'vibration' that many patients dislike."
            }
        }
    },
    {
        "id": "noble_conv_249",
        "category": "Social",
        "keywords": ["instagram", "before after", "photos", "ఫోటోలు", "फोटो"],
        "content": {
            "en": {
                "question": "Can I see before-and-after photos of your work?",
                "answer": "Yes! You can view our 'Smile Gallery' in the clinic or follow us on social media to see real results from our Nallagandla patients.",
                "advice": "Real results are the best testament to our clinical expertise."
            }
        }
    },
    {
        "id": "noble_conv_250",
        "category": "General",
        "keywords": ["thank you", "feedback", "google review", "ధన్యవాదాలు", "धन्यवाद"],
        "content": {
            "en": {
                "question": "How can I leave feedback for the clinic?",
                "answer": "We love hearing from our patients! You can leave us a Google Review or share your experience on our WhatsApp. Your feedback helps us grow.",
                "advice": "Honest reviews help other Nallagandla residents find a trustworthy dentist."
            }
        }
    },
    {
        "id": "noble_conv_251",
        "category": "General",
        "keywords": ["noble dental", "meaning", "name", "పేరు", "नाम"],
        "content": {
            "en": {
                "question": "Why the name 'Noble' Dental Care?",
                "answer": "We chose 'Noble' because it represents our commitment to the highest ethical standards and the dignity with which we treat every patient.",
                "advice": "Our name is our promise to you."
            }
        }
    }
];

export class NeoVaultHelper {
    static findEntry(query: string): VaultEntry | null {
        const normalized = query.toLowerCase().trim();
        return NEO_VAULT.find(entry =>
            entry.keywords.some(kw => normalized.includes(kw.toLowerCase())) ||
            entry.content['en']?.question.toLowerCase().includes(normalized)
        ) || null;
    }

    static getResponse(entry: VaultEntry, lang: string = 'en'): string {
        const content = entry.content[lang] || entry.content['en'];
        return `${content.answer} ${content.advice ? `\n\nCare Tip: ${content.advice}` : ''}`;
    }
}
