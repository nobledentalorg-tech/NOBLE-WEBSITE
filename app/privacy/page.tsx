import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Noble Dental Care',
  description: 'How we handle patient data and clinical records at Noble Dental Care Nallagandla.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-black mb-8 border-b-4 border-blue-600 pb-4 inline-block">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8 font-mono tracking-widest uppercase">Last Updated: January 2026</p>

        <section className="space-y-12 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
            <p>
              At Noble Dental Care, we collect essential patient information including name, contact details, and clinical history solely for the purpose of providing dental care and maintaining clinical records in compliance with medical ethics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Clinical Privacy</h2>
            <p>
              Patient X-rays, intra-oral photographs, and treatment notes are stored securely in our clinical management system. These are never shared with third parties without explicit patient consent, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Direct Communication</h2>
            <p>
              By using our booking form, you consent to receive clinical appointment reminders via WhatsApp or SMS. You can opt-out of these updates at any time by contacting our front desk.
            </p>
          </div>

          <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/30">
            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Patient Rights</h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              You have the right to request a digital copy of your clinical records or ask for the deletion of non-clinical data (like email subscriptions) at any time.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
