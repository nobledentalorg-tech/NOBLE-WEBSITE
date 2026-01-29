import Link from 'next/link';
import { Phone, ArrowLeft, ShieldAlert, Activity } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Emergency First Aid | Noble Dental Care',
    description: 'Immediate dental first aid instructions for broken teeth, bleeding, and severe pain. Works offline.',
};

export default function EmergencyFirstAid() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
            <div className="bg-red-600 text-white p-6 pb-12 rounded-b-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <Link href="/" className="inline-flex items-center gap-2 text-red-100 hover:text-white mb-6 font-bold text-sm uppercase tracking-widest">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
                    <ShieldAlert className="text-red-200" size={48} />
                    First Aid
                </h1>
                <p className="text-red-100 text-lg font-medium max-w-xl">
                    Steps to take IMMEDIATELY while you travel to our clinic.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-6 -mt-8 relative z-10 space-y-6">

                {/* Avulsed Tooth (Knocked Out) */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border-l-[6px] border-red-500">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                            <Activity size={20} />
                        </div>
                        <h2 className="text-xl font-black uppercase text-slate-800">Tooth Knocked Out?</h2>
                    </div>
                    <ol className="space-y-3 list-decimal list-inside font-medium text-slate-600">
                        <li><strong className="text-slate-900">Pick it up by the CROWN</strong> (white part), DO NOT touch the root.</li>
                        <li>Rinse gently with water (do not scrub).</li>
                        <li>Try to place it back in the socket. Bite on gauze/cloth to hold it.</li>
                        <li>If not possible, keep it in a container of <strong>MILK</strong> or saliva.</li>
                        <li><strong className="text-red-600">Rush to us immediately. Time is critical (60 mins).</strong></li>
                    </ol>
                </div>

                {/* Broken Tooth */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border-l-[6px] border-amber-500">
                    <h2 className="text-xl font-black uppercase text-slate-800 mb-4 ml-2">Broken / Chipped Tooth</h2>
                    <ul className="space-y-3 list-disc list-inside font-medium text-slate-600">
                        <li>Rinse mouth with warm water.</li>
                        <li>Apply cold pack to cheek to reduce swelling.</li>
                        <li>Save any broken tooth fragments in milk.</li>
                        <li>Cover sharp edge with dental wax or sugarless gum.</li>
                    </ul>
                </div>

                {/* Severe Toothache */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border-l-[6px] border-blue-500">
                    <h2 className="text-xl font-black uppercase text-slate-800 mb-4 ml-2">Severe Toothache</h2>
                    <ul className="space-y-3 list-disc list-inside font-medium text-slate-600">
                        <li>Rinse mouth with warm salt water.</li>
                        <li>Gently floss to remove trapped food.</li>
                        <li><strong className="text-slate-900">DO NOT</strong> place aspirin directly on gum (burn risk).</li>
                        <li>Take ibuprofen (if not allergic) for pain relief.</li>
                    </ul>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-8 text-center mt-8">
                    <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
                    <p className="text-slate-400 mb-6">Our emergency line is active 24/7 for triage.</p>
                    <a href="tel:+918610425342" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95">
                        <Phone fill="currentColor" size={20} /> Call Emergency
                    </a>
                </div>

            </div>
        </main>
    );
}
