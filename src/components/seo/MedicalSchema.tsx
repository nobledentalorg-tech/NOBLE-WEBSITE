
import { MedicalCondition, DrugProfile } from '../../types/neoSchema';

interface Props {
    type: 'MedicalCondition' | 'Drug';
    data: MedicalCondition | DrugProfile;
}

export default function MedicalSchema({ type, data }: Props) {
    let schema = {};

    if (type === 'MedicalCondition') {
        const c = data as MedicalCondition;
        schema = {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": c.medicalTerm.en,
            "alternateName": c.laymanTerm.en,
            "description": c.description.en,
            "signOrSymptom": c.symptoms.en.map(s => ({
                "@type": "MedicalSymptom",
                "name": s
            })),
            "possibleTreatment": c.treatments?.map(t => ({
                "@type": "MedicalTherapy",
                "name": t
            })),
            "reviewedBy": {
                "@type": "Physician",
                "name": "Dr. Dhivakaran",
                "url": "https://nobledental.in" // Assuming actual domain
            }
        };
    } else if (type === 'Drug') {
        const d = data as DrugProfile;
        schema = {
            "@context": "https://schema.org",
            "@type": "Drug",
            "name": d.genericName.en,
            "proprietaryName": d.brandNames,
            "description": d.description.en,
            "warning": d.dosageWarning.en
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
