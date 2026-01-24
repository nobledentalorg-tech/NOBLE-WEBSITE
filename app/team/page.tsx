import type { Metadata } from 'next';
import TeamRefactored from './TeamRefactored';

export const metadata: Metadata = {
   title: 'Our Specialist Team | Noble Dental Care Nallagandla',
   description: 'Meet the architects of your smile. A multidisciplinary council of surgeons, scientists, and artists dedicated to the 2035 standard of oral care.'
};

export default function TeamPage() {
   return <TeamRefactored />;
}
