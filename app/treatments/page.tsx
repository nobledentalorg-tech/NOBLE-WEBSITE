import type { Metadata } from 'next';
import TreatmentsRefactored from './TreatmentsRefactored';

export const metadata: Metadata = {
  title: 'Dental Treatments',
  description: 'Explore our evidence-based clinical protocols. From Microscopic Root Canals to AI-Guided Implants, we offer rigorous, high-precision dental care.'
};

export default function TreatmentsPage() {
  return <TreatmentsRefactored />;
}
