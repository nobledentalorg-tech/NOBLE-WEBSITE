import React from 'react';
import type { Metadata } from 'next';
import NeoCompanionClient from '@/components/NeoCompanionClient';

export const metadata: Metadata = {
  title: 'Neo | Noble Dental AI Ecosystem',
  description: 'Meet Neo, your advanced AI Dental Architect. Analyze symptoms, understand procedures, and plan your recovery with Noble Dental Care.',
  openGraph: {
    title: 'Neo | AI Dental Architect',
    description: 'The future of dentistry is here. Self-check symptoms and get clinical guidance instantly.',
    images: ['/assets/neo-ai-meta.jpg'],
  }
};

export default function NeoPage() {
  return <NeoCompanionClient />;
}
