"use client";

import { Syringe, Zap, Activity, ThumbsDown, Wifi } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function AnesthesiaSpecSheet() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-purple-500/20">
                            <Zap size={14} /> Pain Management Logic
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Needle vs. The Wand</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Why &quot;Painless&quot; isn&apos;t a marketing buzzword at Noble Dental. It&apos;s **Flow Rate Physics.**
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* THE OLD WAY (Traditional) */}
                        <div className="bg-slate-800/30 rounded-3xl p-8 border border-white/5 backdrop-blur-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-black text-slate-400 line-through decoration-red-500">Traditional Syringe</h3>
                                <div className="px-3 py-1 bg-slate-700/50 rounded-lg text-xs font-bold uppercase text-slate-500">Legacy Tech</div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Injection Pressure</span>
                                    <span className="font-bold text-red-400">High (Manual Force)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Numbness Spread</span>
                                    <span className="font-bold text-slate-300">Entire Face/Lip</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Pain Cause</span>
                                    <span className="font-bold text-slate-300">Fluid Tissue Expansion</span>
                                </div>
                                <div className="mt-6 pt-4">
                                    <p className="text-sm font-bold text-slate-500 mb-2">The Patient Reality:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider flex items-center gap-2">
                                        <ThumbsDown size={14} /> &quot;The pinch determines the fear.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* THE NOBLE WAY (STA) */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-500/50 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full animate-pulse"></div>

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <h3 className="text-2xl font-black text-white">Computer Controlled (STA)</h3>
                                <div className="px-3 py-1 bg-purple-500 rounded-lg text-xs font-bold uppercase text-white shadow-lg shadow-purple-500/30">Standard of Care</div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Injection Pressure</span>
                                    <div className="flex items-center gap-2 text-teal-400 font-bold">
                                        <Wifi size={16} /> AI Regulated Flow
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Numbness Spread</span>
                                    <span className="font-bold text-white">Single Tooth Only</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-slate-400 font-medium">Anxiety Score</span>
                                    <div className="flex text-teal-400">
                                        <span className="font-bold">Near Zero</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4">
                                    <p className="text-sm font-bold text-purple-300 mb-2">Clinical Advantage:</p>
                                    <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wider">
                                        You leave the clinic without a droopy lip. Comparison is irrelevant when comfort is guaranteed.
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
