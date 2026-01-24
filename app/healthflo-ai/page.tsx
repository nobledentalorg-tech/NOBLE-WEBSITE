import React from 'react';
import type { Metadata } from 'next';
import NeoCompanionClient from '@/components/NeoCompanionClient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

async function checkAdmin() {
    const session = cookies().get('admin_session');
    return session?.value === 'authorized';
}

async function loginAdmin(formData: FormData) {
    'use server';
    const password = formData.get('password') as string;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    
    if (password === ADMIN_PASSWORD) {
        cookies().set('admin_session', 'authorized', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 24 hours
        });
    }
}

export default async function NeoPage() {
  const isAdmin = await checkAdmin();

  if (!isAdmin) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-[#05070a] text-white p-8">
              <div className="max-w-md w-full bg-white/5 border border-white/10 p-12 rounded-[2.5rem] text-center backdrop-blur-xl">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-8 shadow-lg shadow-red-600/20">N</div>
                  <h1 className="text-3xl font-black mb-2 uppercase tracking-tighter text-red-500">Secure AI Access</h1>
                  <p className="text-slate-500 mb-10 text-sm font-bold uppercase tracking-widest">Noble OS • Dental Intelligence</p>
                  
                  <form action={async (formData) => { 
                      'use server'; 
                      const password = formData.get('password') as string;
                       const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
                      if (password === ADMIN_PASSWORD) {
                          cookies().set('admin_session', 'authorized', { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 86400 });
                      }
                  }} className="space-y-4">
                      <input 
                          name="password" 
                          type="password" 
                          required 
                          placeholder="Master Unlock Key" 
                          className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-center text-lg outline-none focus:border-red-500/50 transition-all font-mono"
                      />
                      <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl shadow-red-600/10">
                          Initialize Neo
                      </button>
                  </form>
                  <p className="mt-8 text-[10px] text-slate-700 uppercase font-black tracking-widest italic">Dr. Dhivakaran CMD Clinical Protocol</p>
              </div>
          </div>
      );
  }

  return <NeoCompanionClient isAdmin={true} />;
}

