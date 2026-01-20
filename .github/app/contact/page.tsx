'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarCheck, Send } from 'lucide-react';
// Navbar and Footer are handled by LayoutShell globally

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1019] selection:bg-blue-500/30">
      {/* Header is global */}

      <main className="pt-32 pb-20">

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
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
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Mon-Sat from 9am to 9pm</p>
                <a href="tel:+918610425342" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">+91 861-042-5342</a>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Online support 24/7</p>
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
                    Nallagandla Main Road, Opp. Citizens Hospital,<br />
                    Serilingampally, Hyderabad 500019
                  </p>
                </div>
              </div>

              {/* GOOGLE MAP EMBED */}
              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg relative bg-slate-100 dark:bg-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.342790234148!2d78.30380631487784!3d17.47396308802672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f4c6b5e5d3%3A0x6a1aca1c6c68e1ae!2sNoble%20Dental%20Care!5e0!3m2!1sen!2sin!4v1675765432101!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-slate-50 dark:bg-[#131B2C] p-8 md:p-12 rounded-[3rem]">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h2>
              <p className="text-slate-500 text-sm">We typically reply within 2 hours.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Your Name</label>
                <input type="text" className="w-full bg-white dark:bg-[#0B1019] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone / WhatsApp</label>
                <input type="tel" className="w-full bg-white dark:bg-[#0B1019] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 98765 43210" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-white dark:bg-[#0B1019] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="I have a toothache..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>

              <p className="text-xs text-center text-slate-400 mt-4">
                By submitting, you agree to being contacted for your appointment request.
              </p>
            </form>
          </div>

        </section>
      </main>

      {/* Footer is global */}
    </div>
  );
}
