'use client';

import React from 'react';
import { Heart, Brain, UserCheck } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#0B1019] transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Heart size={12} fill="currentColor" /> Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Treating you like Family.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">With the Precision of AI.</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              At Noble Dental, we believe true care combines warmth with world-class technology. We don&apos;t just fix teeth; we treat the person behind the smile.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-10">
              Led by <span className="font-bold text-slate-900 dark:text-white">Dr. Dhivakaran</span> (Director, HealthFlo & Author), we are your personal dental consultants—offering the comfort of a friend and the accuracy of advanced digital dentistry.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Your Personal Consultant</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">We listen first. Every treatment plan is co-authored by you and Dr. Dhivakaran.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 shrink-0">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Guided by Technology</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">No guesswork. We use data, AI, and digital imaging to ensure 100% predictable results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - The "Personal" Touch */}
          <div className="relative order-1 lg:order-2 h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
              alt="Dr. Dhivakaran Consultation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-10 left-10 text-white">
              <div className="text-3xl font-black mb-2">Dr. Dhivakaran</div>
              <div className="text-white/80 font-medium">Chief Dental Surgeon & Implantologist</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
