import type { Metadata } from 'next';
import ProductsRefactored from './ProductsRefactored';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const metadata: Metadata = {
   title: 'Dental Pharmacy & Products | Noble Dental Care',
   description: 'Official clinical pharmacy. Order prescribed Group Pharma products (Enafix, Shy-NM, Rexidine) directly from our verified stock.',
   alternates: {
      canonical: '/products'
   },
   openGraph: {
      title: 'Dental Pharmacy & Products | Noble Dental Care',
      description: 'Order prescribed dental products directly from Noble Dental.',
      url: 'https://nobledentalnallagandla.in/products',
      siteName: 'Noble Dental Care',
      images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
      type: 'website'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Dental Pharmacy | Noble Dental Care',
      description: 'Official clinical pharmacy for Noble Dental Care patients.',
      images: ['/assets/og-image.jpg']
   }
};

export default async function ProductsPage() {
   let dbProducts: any[] = [];
   try {
       dbProducts = await prisma.pharmacyProduct.findMany({
           orderBy: { createdAt: 'desc' }
       });
   } catch (error) {
       console.error("Pharmacy Database not synced yet:", error);
   }

   return <ProductsRefactored dbProducts={dbProducts} />;
}


