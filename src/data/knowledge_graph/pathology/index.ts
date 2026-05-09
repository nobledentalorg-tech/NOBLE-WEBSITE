import { PATHOLOGY_CARIES } from './caries';
import { PATHOLOGY_OSMF } from './osmf';
import { PATHOLOGY_LEUKOPLAKIA } from './leukoplakia';
import { PATHOLOGY_PERIODONTITIS } from './periodontitis';
import { BULK_CONDITIONS } from './bulk_conditions';
import { MedicalCondition } from '../../../types/neoSchema';

export const PATHOLOGY_INDEX: Record<string, MedicalCondition> = {
    'dental-caries': PATHOLOGY_CARIES,
    'osmf': PATHOLOGY_OSMF,
    'leukoplakia': PATHOLOGY_LEUKOPLAKIA,
    'periodontitis': PATHOLOGY_PERIODONTITIS,
    ...BULK_CONDITIONS
};

export const getAllPathologySlugs = () => Object.keys(PATHOLOGY_INDEX);
export const getPathologyData = (slug: string) => PATHOLOGY_INDEX[slug];
