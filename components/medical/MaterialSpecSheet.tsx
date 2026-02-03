"use client";

import { Check, X, ShieldCheck, Zap, Activity } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function MaterialSpecSheet() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-teal-500/20">
                            <Activity size={14} /> Material Science
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Titanium vs. Zirconia</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            We select the substrate based on your **Bone Biology** and **Smile Line**.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* TITANIUM SPECS */}
                        <div className="bg-slate-800/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-black text-slate-200">Titanium Grade 4</h3>
                                <div className="px-3 py-1 bg-slate-700 rounded-lg text-xs font-bold uppercase text-slate-300">The Gold Standard</div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Osseointegration (Bone Fusion)</span>
                                    <div className="flex text-teal-400">
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Tensile Strength</span>
                                    <span className="font-bold text-white">~900 MPa</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Esthetic Score (Front Tooth)</span>
                                    <div className="flex text-amber-400">
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="mt-6 pt-4">
                                    <p className="text-sm font-bold text-slate-300 mb-2">Clinical Indication:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">
                                        Ideal for **Molar Replacements** and low bone density cases due to superior flexibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ZIRCONIA SPECS */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-teal-500/50 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-[50px] rounded-full"></div>

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <h3 className="text-2xl font-black text-white">Zirconia (Ceramic)</h3>
                                <div className="px-3 py-1 bg-teal-500 rounded-lg text-xs font-bold uppercase text-slate-900">Metal-Free</div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Osseointegration (Bone Fusion)</span>
                                    <div className="flex text-teal-400">
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} className="text-slate-600" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Tensile Strength</span>
                                    <span className="font-bold text-white">~1200 MPa (Harder)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Esthetic Score (Front Tooth)</span>
                                    <div className="flex text-teal-400">
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                        <Zap size={16} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="mt-6 pt-4">
                                    <p className="text-sm font-bold text-slate-300 mb-2">Clinical Indication:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">
                                        Perfect for **Front Teeth** and patients with metal allergies. Gum tissue loves Zirconia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
