"use client";
import React from 'react';
import { TreatmentCase } from '@/data/cases';
import BeforeAfterSlider from './BeforeAfterSlider';
import { BadgeCheck, Clock, AlignLeft, Info } from 'lucide-react';

interface CaseCardProps {
    data: TreatmentCase;
    onClick?: () => void;
}

const CaseCard: React.FC<CaseCardProps> = ({ data, onClick }) => {
    return (
        <div className="bg-white dark:bg-[#111620] rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">

            {/* Header: Patient Profile (Instagram Style) */}
            <div className="p-4 flex items-center justify-between border-b border-slate-50 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white dark:ring-[#111620]">
                        {data.id.split('-')[1] || 'PT'}
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1">
                            {data.title} <BadgeCheck size={14} className="text-blue-500 fill-blue-500/20" />
                        </h4>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">
                            {data.patientProfile.age} • {data.patientProfile.gender}
                        </div>
                    </div>
                </div>
                {/* Difficulty Badge */}
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${data.difficulty === 'Complex' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                        data.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                            'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                    {data.difficulty}
                </span>
            </div>

            {/* Visual: Before/After Slider */}
            <div className="p-2">
                <BeforeAfterSlider
                    beforeImage={data.visuals.before}
                    afterImage={data.visuals.after}
                    alt={data.title}
                />
            </div>

            {/* Content: The Clinical Story */}
            <div className="p-5">
                {/* Stats */}
                <div className="flex gap-4 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                        <Clock size={14} /> {data.duration}
                    </div>
                </div>

                {/* Narrative */}
                <div className="space-y-3 mb-4">
                    <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">Chief Complaint</span>
                        <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-2">&quot;{data.complaint}&quot;</p>
                    </div>
                    <div>
                        <span className="text-xs font-bold text-green-500 uppercase tracking-wider block mb-1">The Solution</span>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{data.solution}</p>
                    </div>
                </div>

                {/* Doctor's Note (Trust) */}
                {data.doctorNote && (
                    <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-dashed border-slate-200 dark:border-white/10 text-xs italic text-slate-500">
                        <span className="font-bold not-italic text-blue-500 mr-2">Dr. Dhivakaran:</span>
                        {data.doctorNote}
                    </div>
                )}

                {data.tags && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-50 dark:border-white/5">
                        {data.tags.map(tag => (
                            <span key={tag} className="text-[10px] text-slate-400 hover:text-blue-500 cursor-pointer">#{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            <div className="px-5 pb-4">
                <p className="text-[9px] text-slate-300 text-center">
                    *Photos displayed with written consent. Results may vary.
                </p>
            </div>
        </div>
    );
};

export default CaseCard;
