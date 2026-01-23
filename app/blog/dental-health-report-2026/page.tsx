
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

                {/* Header */}
                <div className="mb-8">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Nallagandla Community Health</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        The State of Dental Hygiene in 2026: A Study of 500 Residents in Nallagandla.
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> Jan 24, 2026</span>
                        <span className="flex items-center gap-2"><Tag size={16} /> Public Health</span>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                    <p className="lead text-xl text-slate-600 dark:text-slate-300">
                        Are residents of high-rise communities like <strong>Aparna Sarovar</strong> and <strong>My Home Sayuk</strong> neglecting their gums? Our latest internal study reveals a shocking gap in flossing habits despite high toothbrushing frequency.
                    </p>

                    <h3>The &quot;Flossing Gap&quot; in West Hyderabad</h3>
                    <p>
                        We surveyed 500 patients visiting Noble Dental Care from the <strong>Nallagandla-Tellapur corridor</strong>. While 92% brush twice daily, only <strong>8%</strong> floss regularly. This correlates with a 40% rise in interdental cavities among young IT professionals working in Gachibowli.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 my-8">
                        <h4 className="text-blue-800 dark:text-blue-100 font-bold mb-4 m-0">Key Findings (Data for Journalists):</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                            <li><strong>Pediatric Concern:</strong> 60% of children aged 5-10 in Nallagandla have at least one untreated cavity.</li>
                            <li><strong>Stress Grinding:</strong> Cases of Bruxism (Teeth Grinding) have doubled since 2024 among Wipro Circle commuters.</li>
                            <li><strong>Water Quality:</strong> Residents using RO water without remineralization show higher enamel sensitivity.</li>
                        </ul>
                    </div>

                    <h3>Why This Matters for Nallagandla</h3>
                    <p>
                        As Nallagandla transforms into a premium residential hub similar to Jubilee Hills, lifestyle diseases are creeping in. The reliance on swift delivery apps for sugary snacks is a major contributor.
                    </p>
                    <p>
                        &quot;We are seeing early gum recession in patients as young as 25,&quot; says <strong>Dr. Dhivakaran</strong>, Chief Dentist at Noble Dental Care. &quot;It is not just about brushing; it is about diet and stress management.&quot;
                    </p>

                    <hr className="my-10 border-slate-200 dark:border-white/10" />

                    <h3>Recommendation for Residents</h3>
                    <p>
                        We recommend residents of <strong>Ramky One Galaxia</strong> and surrounding townships to schedule a bi-annual cleaning. Early detection using our <Link href="/treatments/root-canal">Microscopic Diagnostics</Link> can save natural teeth from extraction.
                    </p>

                    <p className="text-sm text-slate-500 italic mt-8">
                        *Data collected from anonymized patient records at Noble Dental Care, Nallagandla, Q4 2025. Contact care@nobledentalnallagandla.in for press inquiries.
                    </p>
                </div>

            </div>
        </article>
    );
}
