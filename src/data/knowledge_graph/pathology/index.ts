
import { PATHOLOGY_CARIES } from './caries';
import { MedicalCondition } from '../../../types/neoSchema';

export const PATHOLOGY_INDEX: Record<string, MedicalCondition> = {
    'dental-caries': PATHOLOGY_CARIES
};

export const getAllPathologySlugs = () => Object.keys(PATHOLOGY_INDEX);
export const getPathologyData = (slug: string) => PATHOLOGY_INDEX[slug];
