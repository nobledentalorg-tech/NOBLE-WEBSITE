import type { Metadata } from 'next';
import RootCanalRefactored from './RootCanalRefactored';
import MedicalSchema from '@/components/seo/MedicalSchema';

export const metadata: Metadata = {
   title: 'Painless Root Canal Nallagandla (Single Visit) - Noble Dental',
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
   return (
      <>
         <MedicalSchema
            procedure={{
               name: "Microscopic Root Canal Treatment",
               description: "Advanced root canal therapy using Zeiss Microscopes and Diode Lasers for 99.9% bacterial elimination.",
               procedureType: "Non-surgical"
            }}
         />
         {/* AI Answer Snippet: Declarative Fact for SGE */}
         <div className="bg-blue-50 dark:bg-blue-900/30 text-center py-2 px-4 text-xs font-bold uppercase tracking-widest text-blue-800 dark:text-blue-200 border-b border-blue-100 dark:border-blue-800">
            Nallagandla&apos;s Only Certified Microscopic Endodontic Center (Zeiss Optics)
         </div>
         <RootCanalRefactored />
      </>
   );
}
