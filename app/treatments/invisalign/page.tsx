import { Metadata } from 'next';
import InvisalignRefactored from './InvisalignRefactored';

export const metadata: Metadata = {
    title: 'Invisalign & Clear Aligners in Nallagandla | Dr. Dhivakaran | Noble Dental',
    description: 'Certified Invisalign providers in Nallagandla. Experience 3D engineered bite correction with iTero 5D scanning. Anti-DIY clinical approach for root safety.',
    keywords: ['invisalign nallagandla', 'clear aligners hyderabad', 'invisible braces cost', 'Dr. Dhivakaran orthodontist', 'iTero 5D scan'],
};

export default function InvisalignPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Orthodontic Engineering: Invisalign & Clear Aligners",
        "description": "Medical-grade teeth straightening focusing on bite correction and TMJ health by Dr. Dhivakaran.",
        "medicalSpecialty": "Orthodontics",
        "mainEntity": {
            "@type": "MedicalProcedure",
            "name": "Invisalign Aligner Therapy",
            "procedureCode": "D8080",
            "description": "Custom-engineered clear aligner system with 3D clinical monitoring.",
            "bodyLocation": "Dental Arches",
            "howItWorks": "Gradual tooth movement using biocompatible thermoplastic controlled by AI ClinCheck software.",
            "preparation": "iTero 5D Scan, Periodontal Clearance, Root Vector Mapping",
            "followup": "Custom retainers and bite stabilization",
            "relevantSpecialty": "Orthodontics",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "lowPrice": "60000",
                "highPrice": "150000",
                "availability": "https://schema.org/InStock",
                "offeredBy": {
                    "@type": "MedicalClinic",
                    "name": "Noble Dental & Implant Centre",
                    "address": "Opp. Citizens Hospital, Nallagandla, Hyderabad"
                }
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <InvisalignRefactored />
        </>
    );
}
