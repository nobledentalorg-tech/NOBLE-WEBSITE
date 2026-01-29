import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface AIAnswerEngineProps {
    snippet: string;
    isFresh?: boolean;
}

export default function AIAnswerEngine({ snippet, isFresh = true }: AIAnswerEngineProps) {
    return (
        <div className="my-8 w-full max-w-4xl mx-auto">
            {/* 
                CLS PROTECTION: 
                min-height: 120px ensures that even if hydration lags, 
                the space is reserved, preventing layout shifts.
            */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-[2px] shadow-sm min-h-[140px]">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 h-full border border-blue-100 dark:border-slate-700 relative overflow-hidden">

                    {/* Header Label */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md flex items-center gap-1">
                            <Sparkles size={10} className="fill-white" />
                            AI Answer
                        </span>
                        {isFresh && (
                            <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                                <CheckCircle2 size={12} /> Verified Update
                            </span>
                        )}
                    </div>

                    {/* The Snippet Content (Inverted Pyramid) */}
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                        <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-lg">
                            {snippet}
                        </p>
                    </div>

                    {/* Google Answer Box Aesthetic: Subtle fading line if needed, but keeping it clean for now */}
                </div>
            </div>
        </div>
    );
}
