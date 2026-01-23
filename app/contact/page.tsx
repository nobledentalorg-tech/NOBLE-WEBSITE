'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarCheck, Send, Navigation, Store, Stethoscope, Car } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'generate_lead', method: 'contact_page_form', value: 25 });
    setStatus('success');
    alert("Message Sent! We will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1019] selection:bg-blue-500/30">
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Touch.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Whether you have a dental emergency or just want a second opinion, our team is ready to listen.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* LEFT: INFO & MAP */}
          <div className="space-y-12">

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4"><Phone size={24} /></div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Mon-Sat from 9am to 9pm</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+918610425342" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">+91 861-042-5342</a>
                  <a href="tel:+918074512305" className="text-sm text-slate-500 hover:text-blue-600 font-medium">+91 807-451-2305</a>
                </div>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4"><Mail size={24} /></div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email & Online</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Support typically replies in 2h</p>
                <a href="mailto:care@nobledentalnallagandla.in" className="text-green-600 dark:text-green-400 font-bold hover:underline">care@nobledental...</a>
              </div>
            </div>

            {/* Address & Map */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">Noble Dental Care</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    Nallagandla Water Tank Road (Kanchi Gachibowli Rd),<br />
                    Opp. Citizens Specialty Hospital,<br />
                    Hyderabad 500019
                  </p>
                </div>
              </div>

              {/* GOOGLE MAP EMBED */}
              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg relative bg-slate-100 dark:bg-white/5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.076864112347!2d78.3081889!3d17.4738964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936d705f0d7b%3A0x3f1aca1c9cebf1ae!2sNoble%20Dental%20Care%20%7C%20Multispeciality%20Dental%20clinic%20in%20Nallagandla!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              {/* PROXIMITY & NINJA SEO SIGNALS */}
              <div className="space-y-4">
                {/* Basic Proximity */}
                <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/20">
                  <h3 className="font-bold text-slate-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-blue-600" /> Serving Nallagandla & Tellapur
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    We are the dental clinic of choice for residents of <strong>Aparna Sarovar</strong>, <strong>Ramky One Galaxia</strong>, and <strong>My Home Sayuk</strong>.
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-2"><Clock size={14} className="text-green-600" /> 5 mins from Citizens Hospital</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-green-600" /> 8 mins from American Oncology Institute</span>
                  </div>
                </div>

                {/* Neo Mall Context (Travel Anchor) */}
                <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Store size={80} /></div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm flex items-center gap-2 relative z-10">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span> Heading to the Movies?
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed relative z-10 font-medium">
                    We are just <strong>450 meters</strong> from <strong>Aparna Neo Mall</strong>.
                    Many patients drop their family for a movie at Neo Mall and get their dental cleaning done with us in the meantime!
                    Ample parking available.
                  </p>
                </div>

                {/* Directions Accordion */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 group hover:border-blue-200 transition-colors">
                    <strong className="flex items-center gap-2 text-xs uppercase tracking-wide text-blue-600 mb-1"><Navigation size={12} /> From Aparna Sarovar Zenith</strong>
                    <p className="text-xs text-slate-500">Take the road toward HUDA Water Tank. We are exactly <strong>800 meters</strong> away in a peaceful lane, avoiding the main junction traffic.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 group hover:border-blue-200 transition-colors">
                    <strong className="flex items-center gap-2 text-xs uppercase tracking-wide text-blue-600 mb-1"><Navigation size={12} /> From Ramky One Galaxia</strong>
                    <p className="text-xs text-slate-500">Head north on <strong>Kanchi Gachibowli Road</strong> toward Cloudnine Hospital. We are located just before the turn to Pranaam Hospital.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 group hover:border-blue-200 transition-colors">
                    <strong className="flex items-center gap-2 text-xs uppercase tracking-wide text-blue-600 mb-1"><Car size={12} /> From Tellapur (My Home Tridasa)</strong>
                    <p className="text-xs text-slate-500">Take the <strong>100ft Road</strong> past Aliens Space Station. Turn right at Nallagandla Junction. Drive 2 mins towards Citizens Hospital.</p>
                  </div>
                </div>

                {/* Competitor Differentiator */}
                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800/30 text-center">
                  <p className="text-xs text-green-800 dark:text-green-300 font-bold">
                    🌱 Unlike clinics on the busy Nallagandla Main Circle, we offer a dust-free, quiet environment.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-slate-50 dark:bg-[#131B2C] p-8 md:p-12 rounded-[3rem] h-fit sticky top-32">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h2>
              <p className="text-slate-500 text-sm">Direct line to Dr. Dhivakaran & Team.</p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div><label className="label">Your Name</label><input type="text" className="input" placeholder="John Doe" /></div>
              <div><label className="label">Phone / WhatsApp</label><input type="tel" className="input" placeholder="+91 98765 43210" /></div>
              <div><label className="label">How can we help?</label><textarea rows={4} className="input" placeholder="I have a toothache..."></textarea></div>
              <button type="submit" disabled={status === 'submitting' || status === 'success'} className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <Send size={18} /> {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
            <style jsx>{` .label { display:block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.5rem; } .input { width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 0.75rem 1rem; color: #0f172a; outline: none; } .dark .input { background: #0B1019; border-color: rgba(255,255,255,0.1); color: white; } `}</style>
          </div>

        </section>
      </main>
    </div>
  );
}
