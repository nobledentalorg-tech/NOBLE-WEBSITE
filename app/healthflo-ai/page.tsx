import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import AuthWrapper from '@/components/AuthWrapper';

const NeoCompanionClient = dynamic(() => import('@/components/NeoCompanionClient'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-slate-50 dark:bg-[#020202] flex items-center justify-center"><div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div></div>
});

export default function NeoPage() {
  return (
    <AuthWrapper>
      <NeoCompanionClient />
    </AuthWrapper>
  );
}
