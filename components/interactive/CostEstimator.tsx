"use client";

import { useState } from "react";
import { Calculator, Check, Info, MessageCircle, RefreshCw, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { PRICING_DATA, TreatmentType } from "@/src/data/pricing";

export default function InteractiveCostEstimator() {
    const [selectedTreatment, setSelectedTreatment] = useState<TreatmentType>("root-canal");

    return (
        <div className="w-full max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-emerald-500 shadow-2xl">
            <div className="bg-slate-50 dark:bg-[#0F1115] rounded-[1.4rem] overflow-hidden relative">

                {/* Header */}
                <div className="p-8 pb-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                        <Calculator size={14} /> AI Cost Estimator
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white">Estimate Your Investment</h3>
                    <p className="text-slate-500 text-sm mt-2">Select a treatment to see transparent price ranges.</p>
                </div>

                {/* TABS */}
                <div className="flex justify-center gap-2 px-6 overflow-x-auto pb-4 no-scrollbar">
                    {(Object.keys(PRICING_DATA) as TreatmentType[]).map((key) => (
                        <button
                            key={key}
                            onClick={() => setSelectedTreatment(key)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${selectedTreatment === key
                                ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-lg"
                                : "bg-white dark:bg-white/5 text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10"
                                }`}
                        >
                            {PRICING_DATA[key].title}
                        </button>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8 bg-white dark:bg-black/20 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTreatment}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {PRICING_DATA[selectedTreatment].tiers.map((tier, index) => (
                                <div
                                    key={index}
                                    className={`relative p-6 rounded-2xl border transition-all hover:shadow-xl ${index === 1
                                        ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white border-purple-500 shadow-purple-500/20"
                                        : "bg-white dark:bg-[#151b2b] text-slate-900 dark:text-white border-slate-200 dark:border-white/10"
                                        }`}
                                >
                                    {index === 1 && (
                                        <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl">
                                            Recommended
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <h4 className="text-lg font-bold opacity-90">{tier.name}</h4>
                                        <p className="text-xs opacity-60 font-medium uppercase tracking-wider mt-1">{tier.bestFor}</p>
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-3xl font-black">{tier.price}</div>
                                        <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest mt-1">All Inclusive / Unit</div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-80">
                                                {index === 1 ? <Check size={16} className="text-teal-400" /> : <Check size={16} className="text-slate-400" />}
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/918610425342?text=I%20am%20interested%20in%20${tier.name}%20for%20${PRICING_DATA[selectedTreatment].title}`}
                                        target="_blank"
                                        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${index === 1
                                            ? "bg-white text-slate-900 hover:bg-slate-200"
                                            : "bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10"
                                            }`}
                                    >
                                        <MessageCircle size={16} /> Check Availability
                                    </a>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="p-4 bg-slate-100 dark:bg-white/5 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                    <Info size={12} /> Prices are estimates. Final quote requires OPG X-Ray.
                </div>

            </div>
        </div>
    );
}
