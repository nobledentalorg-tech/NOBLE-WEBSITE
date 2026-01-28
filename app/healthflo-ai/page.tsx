import React from 'react';
import type { Metadata } from 'next';
import NeoCompanionClient from '@/components/NeoCompanionClient';

export const metadata: Metadata = {
  title: 'Neo AI: Virtual Dental Consultant Nallagandla | Noble Dental',
  description: 'Get an instant provisional diagnosis and cost estimates with Neo AI at Noble Dental Care. Nallagandla’s first AI-powered dental screening tool.',
  keywords: ['Virtual Dental Consultant', 'AI Dentist Nallagandla', 'Dental Symptom Checker', 'Tooth Pain Calculator', 'Root Canal Cost Calculator Hyderabad'],
  openGraph: {
    title: 'Neo AI: Your 24/7 Virtual Dental Expert',
    description: 'Skip the wait and the guesswork. Neo AI uses advanced algorithms to provide instant insights into your dental health, treatment options, and estimated costs.',
    url: 'https://nobledentalnallagandla.in/healthflo-ai',
    siteName: 'Noble Dental Care',
    locale: 'en_IN',
    type: 'website',
    images: ['/assets/neo-ai-meta.jpg'],
  }
};

import AuthWrapper from '@/components/AuthWrapper';

export default function NeoPage() {
  return (
    <AuthWrapper>
      <NeoCompanionClient />
    </AuthWrapper>
  );
}
