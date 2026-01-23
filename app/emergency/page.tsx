'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, AlertTriangle, ChevronDown, ChevronUp, Clock, ShieldCheck, Ambulance, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mayo-Style Color Palette:
// Blue: #005CA9 (Mayo Blue) -> Tailwind blue-700
// Text: #333333 -> slate-800
// Background: #FFFFFF

const emergencies = [
    {
        id: 'knocked-out',
        title: 'Knocked-Out Tooth (Avulsion)',
        urgency: 'Critical (Act within 30 mins)',
        image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800',
        treatmentLink: { title: 'DENTAL IMPLANTS', href: '/treatments/dental-implants' },
        whatToDo: [
            'Pick up the tooth by the CROWN (top), do not touch the root.',
            'Rinse gently with water if dirty. Do NOT scrub.',
            'Try to put the tooth back in the socket immediately.',
            'If you cannot re-insert, place it in cold milk or inside your cheek.',
            'Rush to Noble Dental or nearest hospital immediately.'
        ],
        notToDo: [
            'Do not wrap in tissue or cloth (dries out the root).',
            'Do not scrub the root surface.'
        ],
        indiaContext: 'In Indian traffic, time is crucial. If you cannot reach us in 30 mins, visit ANY nearby dentist to reimplant the tooth first, then come to us for stabilization.'
    },
    {
        id: 'toothache',
        title: 'Severe Toothache',
        urgency: 'High (See dentist today)',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
        treatmentLink: { title: 'ROOT CANAL THERAPY', href: '/treatments/root-canal' },
        whatToDo: [
            'Rinse your mouth with warm salt water.',
            'Use dental floss to remove any lodged food.',
            'Apply a cold compress to the outside of your cheek if there is swelling.',
            'Take an over-the-counter pain reliever (Ibuprofen/Paracetamol).'
        ],
        notToDo: [
            'Do not put Aspirin directly on gums (buurs the tissue).',
            'Do not ignore swelling near the eye or neck.'
        ],
        indiaContext: 'Clove oil (Lavangam) is a safe home remedy for temporary relief. Dip a small cotton ball in clove oil and place it on the tooth. Avoid direct contact with gums.'
    },
    {
        id: 'broken-tooth',
        title: 'Chipped or Broken Tooth',
        urgency: 'Moderate (See dentist in 24 hrs)',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
        treatmentLink: { title: 'PRECISION CROWNS', href: '/treatments/veneers' },
        whatToDo: [
            'Save any broken pieces of the tooth.',
            'Rinse mouth with warm water.',
            'If bleeding, apply gauze/cotton to the area for 10 minutes.',
            'Cover the sharp edge with dental wax or sugarless gum if it cuts your tongue.'
        ],
        notToDo: [
            'Do not eat hard foods.',
            'Do not chew on the broken side.'
        ],
        indiaContext: 'If you have swelling, sleep with your head elevated on pillows.'
    },
    {
        id: 'jaw-fracture',
        title: 'Suspected Jaw Fracture',
        urgency: 'EMERGENCY (Hospital Required)',
        image: 'https://images.unsplash.com/photo-1600170574244-5d97f8f9c065?auto=format&fit=crop&q=80&w=800',
        treatmentLink: { title: 'MAXILLOFACIAL SURGERY', href: '/team' },
        whatToDo: [
            'Control swelling with cold compress.',
            'Stabilize the jaw by tying a handkerchief around the head (under the chin).',
            'Go to a Hospital Emergency Room immediately.'
        ],
        notToDo: [
            'Do not try to move the jaw.',
            'Do not eat solid food.'
        ],
        indiaContext: 'Dial 108 for an ambulance if you are dizzy or bleeding heavily. Dr. Roger (our Maxillofacial Surgeon) specializes in trauma.'
    }
];

const EmergencyPage = () => {
    const [expanded, setExpanded] = useState<string | null>('knocked-out');

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans">
            <Header />

            {/* Mayo-Style Header */}
            <header className="bg-blue-800 text-white pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-4 text-blue-200 font-semibold text-sm uppercase tracking-widest">
                        <AlertTriangle size={16} /> Dental First Aid Center
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Dental Emergencies: What to do right now.
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                        Authorized clinical protocols for managing dental injuries before you reach the clinic.
                        Reviewed by Dr. Roger Ronaldo, Trauma Specialist.
                    </p>
                </div>
            </header>

            {/* Quick Actions Bar */}
            <div className="bg-blue-50 border-b border-blue-100 sticky top-[64px] sm:top-[80px] z-40 shadow-sm">
                <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                        <Clock size={20} className="text-blue-600" />
                        <span>Clinic Emergency Line:</span>
                    </div>
                    <a href="tel:+918610425342" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95">
                        <Phone size={18} /> Call +91 86104 25342
                    </a>
                </div>
            </div>

            {/* Content Content */}
            <section className="py-12 px-6 max-w-4xl mx-auto">
                <div className="grid gap-6">
                    {emergencies.map((item) => (
                        <div key={item.id} className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                            <button
                                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                                className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-slate-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="hidden sm:block w-16 h-16 rounded-2xl overflow-hidden relative border border-slate-100 shrink-0">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mb-1">{item.title}</h3>
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.urgency.includes('Critical') || item.urgency.includes('EMERGENCY') ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {item.urgency}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                    {expanded === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {expanded === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-slate-50 border-t border-slate-100"
                                    >
                                        <div className="p-6 sm:p-10 space-y-8">
                                            {/* Mobile Image Only */}
                                            <div className="sm:hidden w-full aspect-video rounded-2xl overflow-hidden mb-6 relative border border-slate-200">
                                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-10">
                                                {/* Action Plan */}
                                                <div>
                                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <ShieldCheck size={18} className="text-green-600" /> Steps to Take
                                                    </h4>
                                                    <ol className="space-y-3">
                                                        {item.whatToDo.map((step, i) => (
                                                            <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                                                                    {i + 1}
                                                                </span>
                                                                {step}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>

                                                <div className="space-y-6">
                                                    {/* Warnings */}
                                                    <div className="p-6 bg-red-100/50 border-l-4 border-red-500 rounded-r-2xl">
                                                        <h4 className="font-bold text-red-800 mb-3 text-xs uppercase tracking-widest">Medical Warning</h4>
                                                        <ul className="space-y-2">
                                                            {item.notToDo.map((step, i) => (
                                                                <li key={i} className="flex gap-2 text-red-700 text-sm font-medium">
                                                                    <X size={14} className="mt-0.5 shrink-0" /> {step}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Internal Linking */}
                                                    <div className="p-6 bg-blue-700 text-white rounded-3xl shadow-xl shadow-blue-500/20">
                                                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">Permanent Solution</h4>
                                                        <p className="text-sm font-bold mb-4">Once stabilized, this requires specialized clinical care.</p>
                                                        <Link href={item.treatmentLink.href} className="flex items-center justify-between bg-white text-blue-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter hover:gap-3 transition-all">
                                                            Learn about {item.treatmentLink.title}
                                                            <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Local Context */}
                                            {item.indiaContext && (
                                                <div className="flex items-start gap-4 p-6 bg-blue-100/30 rounded-2xl text-sm text-slate-600 border border-blue-100 italic">
                                                    <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                                                    <p><strong>Nallagandla Quick Tip:</strong> {item.indiaContext}</p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Disclaimer */}
            <section className="px-6 pb-12">
                <div className="max-w-4xl mx-auto p-4 border border-slate-200 rounded-lg bg-slate-50 text-xs text-slate-500">
                    <strong>Medical Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice.
                    In case of a life-threatening emergency (severe bleeding, difficulty breathing), dial <strong>108</strong> or go to the nearest hospital immediately.
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default EmergencyPage;
