import React from 'react';
import { NeoSystemsLinker } from '@/src/neo/NeoSystemsLinker';
import { Heart, Activity, Brain, Baby, Gauge, Apple, ShieldCheck, Stethoscope } from 'lucide-react';

interface Props {
    topic: 'gum-disease' | 'pregnancy';
}

const IconMap: Record<string, any> = {
    Heart, Activity, Brain, Baby, Gauge, Apple
};

export default function WholeBodyConnection({ topic }: Props) {
    const data = NeoSystemsLinker.getWholeBodyImpact(topic);

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Authority Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <ShieldCheck size={14} />
                        Medical Authority
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                        The Whole-Body <span className="text-blue-600">Connection</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                        {data.conclusion}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-white/10 px-4 py-2 rounded-lg">
                        <Stethoscope size={14} />
                        {data.guideline}
                    </div>
                </div>

                {/* Risk Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {data.riskFactors.map((factor, idx) => {
                        const Icon = IconMap[factor.icon] || Activity;
                        return (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    {factor.system}
                                </h3>
                                <div className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-4">
                                    {factor.statistic}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {factor.impact}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
