'use client';

import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  // Strategy: Use the most detailed/emotional reviews from the 39 available.
  const reviews = [
    {
      id: '1',
      name: 'Sahana Rao',
      location: 'Tellapur',
      rating: 5,
      text: "I was terrified of the dentist. Dr. Dhivakaran sat with me for 20 mins just talking before he even picked up a tool. The root canal was actually painless.",
      treatment: "Root Canal"
    },
    {
      id: '2',
      name: 'Arjun K.',
      location: 'Gachibowli',
      rating: 5,
      text: "Other clinics said I needed surgery. Noble Dental saved my natural tooth with their microscope. Highly technical and ethical team.",
      treatment: "Second Opinion" // Highlights trust
    },
    {
      id: '3',
      name: 'Priya M.',
      location: 'Nallagandla',
      rating: 5,
      text: "The invisible aligners changed my smile in 6 months. No one even knew I was wearing them. Best investment ever.",
      treatment: "Invisalign"
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-blue-600 dark:text-cyan-400 font-bold tracking-widest text-xs uppercase mb-3">Community Trust</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Stories, Not Just Stats.
          </h3>
          <p className="text-slate-500 mt-4 max-w-lg">
            We don't chase numbers. We chase the perfect outcome for every single patient.
          </p>
        </div>

        {/* CTA: Drive new reviews naturally */}
        <a
          href="https://maps.app.goo.gl/hy8B9WiQHtnaUqdPA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center gap-2 group"
        >
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          Read all our 5-Star Reviews
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform">

            {/* Visual Trust Badge */}
            <div className="absolute top-8 right-8 text-[#12B2A0] opacity-20">
              <Star size={40} fill="currentColor" />
            </div>

            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 italic relative z-10">
              "{review.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  {review.location} <span className="w-1 h-1 rounded-full bg-slate-300"></span> {review.treatment}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
