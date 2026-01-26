import React from 'react';
import { Award, BookOpen, GraduationCap, Microscope, ShieldCheck, Mail, MapPin, ExternalLink, Calendar, CheckCircle, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dr. Dhivakaran - Chief Clinical Officer | Noble Dental Care',
    description: '11+ years of surgical excellence. Specialist in Microscopic Endodontics and Implantology. Founder of HealthFlo AI and Director of Noble Dental Care.',
};

export default function DrDhivakaranProfile() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617]">

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* 1. Profile Hero Segment */}
                    <div className="grid lg:grid-cols-12 gap-12 mb-20">
                        <div className="lg:col-span-5 relative group">
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
                                    alt="Dr. Dhivakaran"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                                        Clinical Lead
                                    </div>
                                    <h1 className="text-4xl font-black tracking-tighter mb-2">Dr. Dhivakaran</h1>
                                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">BDS, Dental Surgeon | Reg No: 54321</p>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 right-12 left-12 grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 text-center">
                                    <div className="text-2xl font-black text-blue-600">11+</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years Exp</div>
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 text-center">
                                    <div className="text-2xl font-black text-green-500">25k+</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cases</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <Award size={14} /> Academic & Surgical Excellence
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
                                Merging AI with <br /><span className="text-blue-600">Surgical Precision.</span>
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl">
                                Dr. Dhivakaran is a pioneer in digital dentistry, serving as the Director of HealthFlo AI and Chief Clinical Officer at Noble Dental Care. His approach integrates advanced microscopic diagnostics with regenerative care.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-2xl h-fit">
                                        <Microscope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">5,000+ RCTs</h4>
                                        <p className="text-sm text-slate-500">Mastered single-visit microscopic root canal protocols.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-2xl h-fit">
                                        <Smartphone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">HealthFlo AI</h4>
                                        <p className="text-sm text-slate-500">Directing the future of digital patient monitoring.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Detailed Biography & Credentials */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <BookOpen className="text-blue-600" /> Professional Biography
                                </h3>
                                <div className="prose prose-lg dark:prose-invert prose-blue font-medium text-slate-600 dark:text-slate-400">
                                    <p>
                                        Dr. Dhivakaran is not just a clinician but a published contributor to the field of dental education, specifically in &quot;Triumph&apos;s Complete Review of Dentistry.&quot; His expertise was forged during his service at SIIMS Hospital during the high-pressure COVID-19 pandemic, where he balanced emergency surgical care with hospital-grade sterilization protocols.
                                    </p>
                                    <p>
                                        At Noble Dental Care Nallagandla, he leads the surgical council, ensuring that every protocol—from a simple filling to a complex full-mouth Zygomatic implant—is backed by the latest systemic evidence and AI-driven planning.
                                    </p>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-white/5 rounded-[3rem] p-10 border border-slate-100 dark:border-white/5">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Clinical Focus Areas</h3>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Micro-Endodontics", desc: "Using Zeiss optics to save natural teeth with 98% success." },
                                        { title: "Implantology", desc: "Digital load planning and same-day restorations." },
                                        { title: "Full Mouth Rehab", desc: "Bio-functional tooth replacement strategies." },
                                        { title: "AI Integration", desc: "Utilizing HealthFlo for post-surgical predictive monitoring." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3">
                                            <CheckCircle className="text-blue-600 mt-1 shrink-0" size={18} />
                                            <div>
                                                <h5 className="font-bold text-slate-900 dark:text-white">{item.title}</h5>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                                <h4 className="font-black text-lg mb-6 tracking-tight">Credentials & Memberships</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <GraduationCap size={16} className="group-hover/item:text-blue-400" /> Saveetha Dental College (Academic Link)
                                    </li>
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <ShieldCheck size={16} className="group-hover/item:text-blue-400" /> Indian Endodontic Society
                                    </li>
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <Award size={16} className="group-hover/item:text-blue-400" /> ITI International Member
                                    </li>
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <Calendar size={16} className="group-hover/item:text-blue-400" /> Published Author (Wolters Kluwer)
                                    </li>
                                </ul>

                                <div className="mt-10 pt-8 border-t border-white/10 flex gap-4">
                                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"><Mail size={20} /></a>
                                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"><Smartphone size={20} /></a>
                                    <a href="#" className="flex-1 px-6 py-3 bg-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 text-xs">
                                        LinkedIn <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5">
                                <h4 className="font-black text-slate-900 dark:text-white mb-4">Practice Location</h4>
                                <p className="text-sm text-slate-500 mb-6 flex items-start gap-3">
                                    <MapPin size={18} className="text-blue-600 shrink-0" /> Nallagandla Water Tank Road, Near Citizens Specialty Hospital.
                                </p>
                                <Link href="/contact" className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform text-center block">
                                    Consult Dr. Dhivakaran
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
