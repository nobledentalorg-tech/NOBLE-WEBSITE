import type { Metadata } from 'next';
import InvisalignRefactored from './InvisalignRefactored';
import MedicalSchema from '@/components/seo/MedicalSchema';

export const metadata: Metadata = {
    title: 'Invisalign & Clear Aligners in Nallagandla | Dr. Dhivakaran Reddy | Noble Dental',
    description: 'Certified Invisalign providers in Nallagandla. Experience 3D engineered bite correction with iTero 5D scanning. Anti-DIY clinical approach for root safety.',
    keywords: ['invisalign nallagandla', 'clear aligners hyderabad', 'invisible braces cost', 'Dr. Dhivakaran Reddy orthodontist', 'iTero 5D scan'],
};

export default function InvisalignPage() {
    return (
        <>
            <MedicalSchema
                procedure={{
                    name: "Invisalign Aligner Therapy",
                    description: "Custom-engineered clear aligner system with 3D clinical monitoring and iTero scanning.",
                    procedureType: "Non-surgical",
                    image: "https://nobledentalnallagandla.in/images/invisalign-hero.webp"
                }}
            />
            <InvisalignRefactored />
        </>
    );
}
