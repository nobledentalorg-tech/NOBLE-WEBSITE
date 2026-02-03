import type { Metadata } from 'next';
import { treatmentsData } from '@/data/treatments';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import {
  ArrowLeft, CheckCircle2, Activity, Clock,
  ShieldCheck, Sparkles, ChevronRight,
  Star, Heart, Shield, Calendar, Zap,
  Stethoscope, Award, Microscope, Ruler,
  Monitor, Scissors, Waves
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import Skeleton from '@/components/Skeleton';

// --- ICON MAPPER ---
const IconMap: any = {
  Activity, Star, Clock, Heart, Shield,
  ShieldCheck, Sparkles, CheckCircle2, Zap
};

// 1. DYNAMIC STATIC PATHS
export async function generateStaticParams() {
  const staticPages = ['kids-dentistry', 'teeth-whitening', 'root-canal', 'dental-implants', 'invisalign', 'tooth-extraction', 'braces', 'veneers', 'crowns-bridges', 'tooth-fillings', 'gum-disease', 'orthognathic-surgery', 'emergency-trauma'];

  return Object.keys(treatmentsData)
    .filter(slug => !staticPages.includes(slug))
    .map((slug) => ({
      slug: slug,
    }));
}

// 2. DYNAMIC SEO METADATA
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const treatment = treatmentsData[params.slug];
  if (!treatment) return {};

  return {
    title: `${treatment.title} in Nallagandla | Noble Dental Care`,
    description: treatment.description,
    keywords: [...treatment.keywords, 'Dentist Nallagandla', 'Hyderabad'],
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      images: [treatment.heroImage],
    }
  };
}

// 3. THE PAGE UI
export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const t = treatmentsData[params.slug];

  if (!t) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t.title,
    description: t.description,
    medicalSpecialty: t.category,
    provider: {
      '@type': 'Dentist',
      name: 'Noble Dental Care',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nallagandla, Hyderabad'
      }
    },
    mainEntity: {
      '@type': 'MedicalProcedure',
      name: t.title,
      procedureType: 'Non-surgical',
      bodyLocation: 'Mouth'
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
      <style>{`
        .ios-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .dark .ios-glass {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Inject Schema: MedicalPage + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              jsonLd,
              ...(t.faqs ? [{
                '@type': 'FAQPage',
                mainEntity: t.faqs.map(f => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.a
                  }
                }))
              }] : [])
            ]
          })
        }}
      />

      {/* --- ANSWER BLOCK (GEO OPTIMIZATION) --- 
          Designed for AI Extraction (Gemini/ChatGPT) 
      */}
      {t.aiSummary && (
        <section className="bg-blue-50/50 dark:bg-slate-900/50 border-b border-blue-100 dark:border-blue-900/30 pt-20">
          <div className="max-w-7xl mx-auto px-6 py-6 lg:py-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg shrink-0 shadow-lg shadow-blue-600/20">
                <Sparkles size={20} className="animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                  AI Summary (TL;DR)
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  {t.aiSummary}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- PREMIUM HERO --- */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={t.heroImage}
            alt={t.title}
            fill
            className="object-cover brightness-[0.3] dark:brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:to-[#020617]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <RevealOnScroll>
            <div className="space-y-6 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/20">
                <Activity size={12} className="text-blue-400" /> Clinical Protocol
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                {t.title}
              </h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Book Procedure
                </button>
                <div className="flex items-center gap-4 px-6 border-l border-white/20">
                  <div className="text-xs uppercase font-black text-slate-400 tracking-widest leading-none">
                    System Category <br />
                    <span className="text-white uppercase">{t.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="relative -mt-16 z-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Suspense fallback={<Skeleton className="h-[120px] w-full" />}>
              {(t.stats || []).map((stat: any, i: number) => {
                const Icon = IconMap[stat.icon] || Activity;
                return (
                  <RevealOnScroll key={i} delay={i * 100}>
                    <div className="p-8 ios-glass rounded-[2rem] flex items-center gap-6 border border-white/40 shadow-xl group hover:scale-[1.02] transition-all">
                      <div className="w-14 h-14 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{stat.value}</div>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </Suspense>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-white dark:bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <RevealOnScroll>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic leading-none">
                    Clinical <br /> <span className="text-blue-600">Observation.</span>
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {t.longDescription}
                  </p>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white italic">Protocol Benefits</h3>
                  <div className="grid gap-4">
                    <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                      {(t.benefits || []).map((benefit: string, i: number) => (
                        <div key={i} className="flex gap-4 items-center p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:translate-x-2">
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <div className="space-y-12">
              <RevealOnScroll delay={200}>
                <div className="p-10 ios-glass rounded-[3rem] border-2 border-dashed border-blue-200 dark:border-blue-900">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase italic">The Treatment Process</h3>
                  <div className="space-y-8">
                    <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                      {(t.process || []).map((step: any, i: number) => (
                        <div key={i} className="flex gap-6 relative">
                          {i < t.process.length - 1 && (
                            <div className="absolute left-6 top-10 bottom-0 w-px bg-slate-200 dark:bg-white/10"></div>
                          )}
                          <div className="w-12 h-12 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full flex items-center justify-center shrink-0 font-black italic relative z-10 transition-transform hover:scale-110">
                            {i + 1}
                          </div>
                          <div className="pt-1">
                            <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic mb-2">{step.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </Suspense>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-white text-slate-900 rounded-2xl flex items-center justify-center">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-blue-400 uppercase tracking-widest">Quality Assurance</div>
                      <div className="font-bold">ADA Compliant Protocol</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    We adhere to the highest clinical standards. Every instrument is sterilized using Class-B autoclaves, and every procedure is digitally logged in our AI HealthOS.
                  </p>
                  <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs border border-white/10 transition-all">
                    View Safety Standards
                  </button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      {t.faqs && t.faqs.length > 0 && (
        <section className="py-24 bg-slate-50 dark:bg-slate-950/20">
          <div className="max-w-4xl mx-auto px-6">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Common Inquiries</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="space-y-6">
                <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                  {t.faqs.map((faq: any, i: number) => (
                    <div key={i} className="p-8 ios-glass rounded-[2rem] border border-white/40 shadow-sm transition-all hover:scale-[1.01]">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex gap-4">
                        <span className="text-blue-600 font-black italic">Q.</span> {faq.q}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed pl-8 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </Suspense>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_70%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.9] italic uppercase">
              Schedule <br />
              <span className="text-blue-500">Your Care.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Book Consultation
              </button>
              <a href="tel:+918610425342" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/20">
                Call Clinic
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
