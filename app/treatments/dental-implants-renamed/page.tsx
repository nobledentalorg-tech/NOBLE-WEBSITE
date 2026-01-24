import type { Metadata } from 'next';
import DentalImplantsRefactored from './DentalImplantsRefactored';

export const metadata: Metadata = {
   title: 'Dental Implants Hyderabad | Swiss Titanium & Zirconia | Noble Dental',
   description: 'Restore your smile with 99.2% success rate implants. Authorized centre for Straumann (Swiss) and Nobel Biocare (USA). Lifetime Warranty available.',
   alternates: {
      canonical: '/treatments/dental-implants'
   },
   openGraph: {
      title: 'Dental Implants Hyderabad | Swiss Titanium & Zirconia',
      description: 'Restore your smile with 99.2% success rate implants. Authorized centre for Straumann and Nobel Biocare.',
      url: 'https://nobledentalnallagandla.in/treatments/dental-implants',
      siteName: 'Noble Dental Care',
      images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
      type: 'article'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Dental Implants Hyderabad | Noble Dental Care',
      description: 'Leading implantology center in Nallagandla. 99.2% Success Rate.',
      images: ['/assets/og-image.jpg']
   }
};

export default function DentalImplantsPage() {
   return <DentalImplantsRefactored />;
}
