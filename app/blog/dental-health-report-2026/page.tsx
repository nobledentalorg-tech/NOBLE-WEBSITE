
import React from 'react';
import Image from 'next/image';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Dental Health Report 2026: Nallagandla & Tellapur Study | Noble Dental',
    description: 'A comprehensive study of dental hygiene habits among 500 residents in Nallagandla and Tellapur. Key findings on Flossing, Sugar intake, and Pediatric cavities.',
};

export default function BlogPost() {
    return (
        <article className="min-h-screen bg-white dark:bg-[#0B1019] pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-6">

                {/* Navigation */}
                <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Back to Community Reports
                </Link>

                {/* HERO SECTION */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-widest">
                            Nallagandla Community Health
                        </span>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                            Data Report
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15]">
                        The State of <span className="text-blue-600">Dental Hygiene</span> in 2026: <br />
                        <span className="text-slate-400 font-light">A Study of 500 Residents.</span>
                    </h1>

                    {/* Author Bio - TRUST SIGNAL */}
                    <div className="flex items-center justify-between border-y border-slate-100 dark:border-white/10 py-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                                <Image
                                    src="/images/dr-dhivakaran.webp"
                                    alt="Dr. Dhivakaran"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-900 dark:text-white text-sm">Dr. Dhivakaran</span>
                                    <Tag size={14} className="text-blue-500" />
                                </div>
                                <p className="text-xs text-slate-500 m-0">Chief Medical Director • Public Health</p>
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Published</p>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Jan 24, 2026</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert prose-blue max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="lead text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200">
                        Are residents of high-rise communities like <strong>Aparna Sarovar</strong> and <strong>My Home Sayuk</strong> neglecting their gums? Our latest internal study reveals a shocking gap in flossing habits despite high toothbrushing frequency.
                    </p>

                    <h3>The &quot;Flossing Gap&quot; in West Hyderabad</h3>
                    <p>
                        We surveyed 500 patients visiting Noble Dental Care from the <strong>Nallagandla-Tellapur corridor</strong>. While 92% brush twice daily, only <strong>8%</strong> floss regularly. This correlates with a 40% rise in interdental cavities among young IT professionals working in Gachibowli.
                    </p>

                    {/* DATA GRID - VISUAL UPGRADE */}
                    <div className="grid sm:grid-cols-3 gap-4 my-10 not-prose">
                        <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-center">
                            <p className="text-4xl font-black text-blue-600 mb-2">92%</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Brush 2x Daily</p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 text-center">
                            <p className="text-4xl font-black text-red-500 mb-2">8%</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-red-400">Floss Daily</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 text-center">
                            <p className="text-4xl font-black text-slate-900 dark:text-white mb-2">40%</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Cavity Rise</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 my-8">
                        <h4 className="text-blue-800 dark:text-blue-100 font-bold mb-6 m-0 flex items-center gap-2">
                            <Tag size={20} /> Key Findings (Data for Journalists)
                        </h4>
                        <ul className="space-y-4 text-slate-700 dark:text-slate-300 m-0">
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded bg-blue-200 dark:bg-blue-700 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-white shrink-0">1</span>
                                <span><strong>Pediatric Concern:</strong> 60% of children aged 5-10 in Nallagandla have at least one untreated cavity.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded bg-blue-200 dark:bg-blue-700 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-white shrink-0">2</span>
                                <span><strong>Stress Grinding:</strong> Cases of Bruxism (Teeth Grinding) have doubled since 2024 among Wipro Circle commuters.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded bg-blue-200 dark:bg-blue-700 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-white shrink-0">3</span>
                                <span><strong>Water Quality:</strong> Residents using RO water without remineralization show higher enamel sensitivity.</span>
                            </li>
                        </ul>
                    </div>

                    <h3>Why This Matters for Nallagandla</h3>
                    <p>
                        As Nallagandla transforms into a premium residential hub similar to Jubilee Hills, lifestyle diseases are creeping in. The reliance on swift delivery apps for sugary snacks is a major contributor.
                    </p>
                    <p>
                        &quot;We are seeing early gum recession in patients as young as 25,&quot; says <strong>Dr. Dhivakaran</strong>. &quot;It is not just about brushing; it is about diet and stress management.&quot;
                    </p>

                    <hr className="my-10 border-slate-200 dark:border-white/10" />

                    {/* CTA SECTION - COMMUNITY FOCUSED */}
                    <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
                            Living in Nallagandla?
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
                            We recommend residents of <strong>Ramky One Galaxia</strong> and surrounding townships to schedule a bi-annual cleaning. Early detection saves teeth.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2"
                            >
                                Book Community Checkup <Calendar size={18} />
                            </Link>
                        </div>
                        <p className="text-xs text-slate-500 italic mt-6 relative z-10">
                            *Data collected from anonymized patient records. Contact care@nobledentalnallagandla.in for press.
                        </p>
                    </div>
                </div>

            </div>
        </article>
    );
}
