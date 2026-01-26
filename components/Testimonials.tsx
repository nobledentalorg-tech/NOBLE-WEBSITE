'use client';

import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { googleReviews } from '@/data/reviews';

const Testimonials = () => {
  // Use the top reviews from our data file
  // Filter for reviews with text content
  const reviews = googleReviews.filter(r => r.text && r.text.length > 10).slice(0, 3).map((r, i) => ({
    id: i.toString(),
    name: r.name,
    location: 'Patient',
    rating: r.rating,
    text: r.text,
    treatment: 'Dental Care'
  }));

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-blue-600 dark:text-cyan-400 font-bold tracking-widest text-xs uppercase mb-3">Community Trust</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Stories, Not Just Stats.
          </h3>
          <p className="text-slate-500 mt-4 max-w-lg">
            We don&apos;t chase numbers. We chase the perfect outcome for every single patient.
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
            {/* Visual Trust Badge */}
            <div className="absolute top-8 right-8 opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                width={24}
                height={24}
                alt="Verified Google Review"
              />
            </div>

            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 italic relative z-10">
              &quot;{review.text}&quot;
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
