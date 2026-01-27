import type { Metadata } from 'next';
import RootCanalRefactored from './RootCanalRefactored';

export const metadata: Metadata = {
   title: 'Painless Root Canal Treatment in Nallagandla | 100% Success Rate',
   description: 'Stop tooth pain instantly with Microscopic Root Canal treatment in Nallagandla. 100% Painless, Single-Sitting procedure by Endodontist Dr. Dhivakaran.',
   alternates: {
      canonical: '/treatments/root-canal'
   },
   openGraph: {
      title: 'Root Canal Treatment Hyderabad | Painless Rotary Endodontics',
      description: 'Save your natural tooth with microscopic precision. Single-visit root canals using laser disinfection.',
      url: 'https://nobledentalnallagandla.in/treatments/root-canal',
      siteName: 'Noble Dental Care',
      images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
      type: 'article'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Root Canal Treatment | Noble Dental Care',
      description: 'Painless microscopic root canals.',
      images: ['/assets/og-image.jpg']
   }
};

export default function RootCanalPage() {
   const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "MedicalProcedure",
            "name": "Microscopic Root Canal Treatment",
            "procedureType": "Non-surgical",
            "bodyLocation": "Tooth",
            "provider": {
               "@type": "Dentist",
               "name": "Noble Dental Care",
               "image": "https://nobledentalnallagandla.in/logo.png"
            },
            "description": "Advanced root canal therapy using Zeiss Microscopes and Diode Lasers for 99.9% bacterial elimination.",
            "followup": "Permanent Crown placement within 3 days."
         },
         {
            "@type": "FAQPage",
            "mainEntity": [
               {
                  "@type": "Question",
                  "name": "Is it safe for Heart Patients or Diabetics?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. In fact, removing the infection is crucial for your heart and blood sugar control. We coordinate with your cardiologist/physician if blood thinners need to be adjusted."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What happens if I delay treatment?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "The infection will spread to the bone, causing a cyst. In severe cases, it can spread to the neck spaces (Ludwig’s Angina), which is a life-threatening emergency."
                  }
               },
               {
                  "@type": "Question",
                  "name": "Can I drive back home after the procedure?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes. Local anesthesia only numbs the tooth. You will be fully alert and can drive or return to work immediately."
                  }
               },
               {
                  "@type": "Question",
                  "name": "Why check Vitals before the procedure?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Your safety is paramount. We evaluate your blood pressure and sugar levels (if diabetic) to ensure you can tolerate the procedure safely."
                  }
               }
            ]
         }
      ]
   };

   return (
      <>
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
         />
         {/* AI Answer Snippet: Declarative Fact for SGE */}
         <div className="bg-blue-50 dark:bg-blue-900/30 text-center py-2 px-4 text-xs font-bold uppercase tracking-widest text-blue-800 dark:text-blue-200 border-b border-blue-100 dark:border-blue-800">
            Nallagandla&apos;s Only Certified Microscopic Endodontic Center (Zeiss Optics)
         </div>
         <RootCanalRefactored />
      </>
   );
}
