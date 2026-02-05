import React from 'react';
import { User, Users, Clock, Timer, ShieldCheck, ClipboardList, Gem, Award } from 'lucide-react';

const NobleDifference = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0B1019] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">
                        <Gem size={12} /> The Noble Advantage
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Boutique Care. <span className="text-slate-400 dark:text-slate-600 line-through decoration-red-500 decoration-2">Not Corporate Volume.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Your smile deserves a dedicated expert, not a rotational roster. <span className="font-bold text-blue-600">Premium Global Standards at Nominal Indian Charges.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-0 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">

                    {/* Left: Corporate Chains */}
                    <div className="bg-slate-50 dark:bg-[#111620] p-10 relative">
                        <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-800 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase text-slate-700 dark:text-slate-400">Standard Dental Chains</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                            <Users size={24} /> Mass Market Clinics
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                                    <ClipboardList size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Rotational Doctors</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">You might see a different junior dentist every time you visit. No continuity of care.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                                    <Timer size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Volume Focused</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">15-minute slots. Rushed appointments to meet corporate targets.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Basic Sterilization</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Standard protocols met, but often shared instruments between multiple units.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Noble Dental */}
                    <div className="bg-white dark:bg-[#0B1019] p-10 relative border-l border-slate-200 dark:border-white/10">
                        <div className="absolute top-0 left-0 bg-blue-600 text-white px-6 py-1 rounded-br-xl text-xs font-bold uppercase shadow-lg shadow-blue-500/20">Noble Dental Prime</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                            <Award size={24} className="text-blue-600" /> Owner-Operated Cluster
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shrink-0 shadow-lg shadow-blue-500/20">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">One Dedicated Surgeon</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Dr. Dhivakaran personally handles your case from Start to Finish.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0 shadow-lg shadow-amber-500/20">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Unrushed Consultations</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">We block 45-60 mins for you. We listen, explain, and treat with care.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0 shadow-lg shadow-green-500/20">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Hospital-Grade Safety</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Class B Autoclave & 8-Step Sterilization. We don&apos;t compromise.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VS Badge */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center font-black text-xs border-4 border-slate-100 dark:border-slate-700 shadow-xl z-10">
                        VS
                    </div>

                </div>

            </div>
        </section>
    );
};

export default NobleDifference;
