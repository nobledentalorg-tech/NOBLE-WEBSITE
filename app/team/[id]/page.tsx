import React from 'react';
import { Award, BookOpen, GraduationCap, Microscope, ShieldCheck, Mail, MapPin, ExternalLink, Calendar, CheckCircle, Smartphone, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { doctors } from '@/data/doctors';
import type { Metadata } from 'next';

interface Props {
    params: { id: string };
}

export async function generateStaticParams() {
    return doctors.map((doctor) => ({
        id: doctor.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const doctor = doctors.find(d => d.id === params.id);
    if (!doctor) return { title: 'Doctor Not Found' };

    return {
        title: `${doctor.name} - ${doctor.role} | Noble Dental Care`,
        description: doctor.bio?.substring(0, 160) || `${doctor.name} specialized in ${doctor.specialty} at Noble Dental Care.`,
    };
}

export default function DoctorProfile({ params }: Props) {
    const doctor = doctors.find(d => d.id === params.id);

    if (!doctor) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617]">
            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href="/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors uppercase text-xs font-black tracking-[0.3em] mb-12">
                        <ArrowLeft size={16} /> Back to Team
                    </Link>

                    {/* 1. Profile Hero Segment */}
                    <div className="grid lg:grid-cols-12 gap-12 mb-20">
                        <div className="lg:col-span-5 relative group">
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-xs font-black uppercase tracking-widest mb-4">
                                        Faculty Member
                                    </div>
                                    <h1 className="text-4xl font-black tracking-tighter mb-2">{doctor.name}</h1>
                                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">{doctor.role} {doctor.dciReg && `| Reg No: ${doctor.dciReg}`}</p>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 right-12 left-12 grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 text-center">
                                    <div className="text-2xl font-black text-blue-600">{doctor.experience}</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-slate-400">Exp</div>
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 text-center">
                                    <div className="text-2xl font-black text-green-500">{doctor.cases}</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-slate-400">Cases</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <Award size={14} /> Clinical Excellence
                            </div>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
                                {doctor.specialty}
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl">
                                {doctor.bio}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-2xl h-fit">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{doctor.success} Success Rate</h4>
                                        <p className="text-sm text-slate-500">Verified clinical outcomes across {doctor.cases} cases.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-2xl h-fit">
                                        <Microscope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">Advanced Diagnostics</h4>
                                        <p className="text-sm text-slate-500">Utilizing microscopic and AI-driven precision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Credentials & Memberships */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section className="bg-white dark:bg-white/5 rounded-[3rem] p-10 border border-slate-100 dark:border-white/5">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Clinical Focus Areas</h3>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Surgical Precision", desc: "Advanced protocols for minimal tissue trauma." },
                                        { title: "Digital Workflow", desc: "Fully integrated 3D planning and AI diagnostics." },
                                        { title: "Patient Comfort", desc: "Pain-free dentistry focused on positive outcomes." },
                                        { title: "Lifelong Care", desc: "Preventative strategies for long-term oral health." }
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
                                <h4 className="font-black text-lg mb-6 tracking-tight">Academic Credentials</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <GraduationCap size={16} className="group-hover/item:text-blue-400" /> Specialist Training (Authorized Faculty)
                                    </li>
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <ShieldCheck size={16} className="group-hover/item:text-blue-400" /> Council Verified Practitioner
                                    </li>
                                    <li className="flex items-center gap-3 text-xs font-bold text-slate-400 group/item">
                                        <Award size={16} className="group-hover/item:text-blue-400" /> Clinical Excellence Awardee
                                    </li>
                                </ul>

                                <div className="mt-10 pt-8 border-t border-white/10 flex gap-4">
                                    <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"><Mail size={20} /></a>
                                    <a href="#" className="flex-1 px-6 py-3 bg-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 text-xs">
                                        View Profile <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5">
                                <h4 className="font-black text-slate-900 dark:text-white mb-4">Practice Location</h4>
                                <p className="text-sm text-slate-500 mb-6 flex items-start gap-3">
                                    <MapPin size={18} className="text-blue-600 shrink-0" /> Nallagandla Main Road, Near Citizens Hospital.
                                </p>
                                <Link href="/contact" className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform text-center block">
                                    Book Consult
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
