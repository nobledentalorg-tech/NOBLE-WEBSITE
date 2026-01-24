import type { Metadata } from 'next';
import RootCanalRefactored from './RootCanalRefactored';

export const metadata: Metadata = {
   title: 'Root Canal Treatment Hyderabad',
   description: 'Save your natural tooth with microscopic precision. Single-visit root canals using laser disinfection and bioceramic sealers effectively.',
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
                  "name": "How much does a Microscopic Root Canal cost in Nallagandla?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "At Noble Dental Care, standard rotary RCT starts at ₹3,500. Microscopic RCT starts around ₹6,000 depending on complexity. Check our <a href='/tariff'>Live Tariff Page</a> for transparent pricing."
                  }
               },
               {
                  "@type": "Question",
                  "name": "Is the procedure painful?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "No. We use computer-controlled Local Anesthesia (STA System) which makes the injection itself painless. The procedure is performed under high magnification, ensuring precise and trauma-free cleaning."
                  }
               },
               {
                  "@type": "Question",
                  "name": "Can I get a Root Canal on Sunday?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, Noble Dental Care handles emergency root canals 24/7, including Sundays. Please call ahead."
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
