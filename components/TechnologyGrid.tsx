import React from 'react';
import { Microscope, Scan, ShieldCheck, Zap, Monitor, Sparkles } from 'lucide-react';
import Image from 'next/image';

const TechnologyGrid = () => {

    const technologies = [
        {
            icon: ShieldCheck,
            title: "Class B Autoclave",
            desc: "Vacuum-sealed sterilization. 100% Virus-free instruments.",
            color: "text-green-500",
            bg: "bg-green-500/10",
            image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            icon: Scan,
            title: "Ultra-Low Radiation AI",
            desc: "Digital OPG with AI clarity. 90% safer than film. 100% Diagnostic Precision.",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            image: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?q=80&w=2070&auto=format&fit=crop"
        },
        {
            icon: Zap,
            title: "Laser Dentistry",
            desc: "No-cut, no-sew surgery. Painless gum treatments.",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            image: "https://images.unsplash.com/photo-1629686520703-2415d862f1dd?q=80&w=2071&auto=format&fit=crop"
        },
        {
            icon: Monitor,
            title: "Intraoral Cameras",
            desc: "See what we see. Total transparency in your diagnosis.",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            image: "https://images.unsplash.com/photo-1629686532822-42173167b0aa?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 px-6 bg-slate-50 dark:bg-[#0B1019] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute left-0 bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Microscope size={12} /> Clinical Excellence
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6">
                        Leading Dental Technology <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">& Advanced Clinical Care.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        While others rely on traditional methods, we invest in the world&apos;s best diagnostic and treatment technology. Precision means less pain and faster recovery for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, i) => (
                        <div key={i} className="group relative bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            {/* Image Overlay */}
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10"></div>
                                <Image
                                    src={tech.image}
                                    alt={tech.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute bottom-4 left-4 z-20 w-10 h-10 rounded-xl ${tech.bg} ${tech.color} flex items-center justify-center backdrop-blur-md border border-white/10`}>
                                    <tech.icon size={20} />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{tech.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{tech.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison vs Traditional */}
                <div className="mt-16 bg-slate-100 dark:bg-white/5 rounded-2xl p-8 border border-slate-200 dark:border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span> Traditional Dentistry
                            </h4>
                            <p className="text-sm text-slate-500">Manual scraping, film X-rays (high radiation), visual guessing, and basic sterilization.</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-slate-300 dark:bg-white/10"></div>
                        <div className="flex-1">
                            <h4 className="font-black text-xl mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Noble Digital Dentistry
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Laser precision, AI-assisted diagnostics, Digital impressions, and Hospital-grade sterility.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechnologyGrid;
