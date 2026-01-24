import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Noble Dental Care',
  description: 'Terms and conditions for surgical consultations and clinical visits at Noble Dental Care.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-black mb-8 border-b-4 border-teal-500 pb-4 inline-block">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8 font-mono tracking-widest uppercase">Last Updated: January 2026</p>

        <section className="space-y-12 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Appointment Booking</h2>
            <p>
              Slots booked via the website are subject to final confirmation by our staff. While we strive to honor every booking, medical emergencies may sometimes cause slight delays in the scheduled time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Clinical Consultation</h2>
            <p>
              A physical examination and possibly dental X-rays (RVG/OPG) are required before any surgical quote or final diagnosis can be provided. Clinical decisions are made in the best interest of the patient's long-term health.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Payment & Refunds</h2>
            <p>
              Payments for procedures are generally made in stages (Advance/Interim/Final). Refunds are strictly governed by our internal clinical policy based on the materials consumed and lab-work already initiated.
            </p>
          </div>

          <div className="p-8 bg-teal-50 dark:bg-teal-900/10 rounded-3xl border border-teal-100 dark:border-teal-800/30">
            <h3 className="font-bold text-teal-900 dark:text-teal-100 mb-2">Emergency Policy</h3>
            <p className="text-sm text-teal-800 dark:text-teal-300">
              For active dental trauma or severe pain during off-hours, please use our 24/7 WhatsApp concierge for immediate triaging.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
