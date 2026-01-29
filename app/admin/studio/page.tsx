'use client';

import React, { useState } from 'react';
import { generateAuthorityBlogPost } from '@/app/actions';
import { Sparkles, Save, BookOpen, Loader2, ShieldCheck } from 'lucide-react';

const WARHEAD_PRESETS = [
    { id: 'trauma', label: '1. The Golden Hour (Dental Trauma)', topic: 'The Golden Hour: Saving Knocked-Out Teeth', mode: 'Pediatric' },
    { id: 'rct', label: '2. Painless RCT (Bio-Reality)', topic: 'Painless Root Canal: The Biological Reality', mode: 'General' },
    { id: 'implant', label: '3. Implants (Biomechanics)', topic: 'Dental Implants: Why Bone Density Matters', mode: 'Geriatric' },
    { id: 'emergency', label: '4. Emergency Triage', topic: 'Dental Pain vs Fascial Space Infection', mode: 'General' },
    { id: 'kids', label: '5. Pediatric Behavioral Mastery', topic: 'Fear-Free Dentistry: Tell-Show-Do Technique', mode: 'Pediatric' },
    { id: 'filling', label: '6. Why Cheap Fillings Fail', topic: 'Composite Fillings & Polymerization Shrinkage', mode: 'General' },
    { id: 'tmj', label: '7. TMJ & Stress Clenching', topic: 'Jaw Pain: It is not just a Night Guard', mode: 'Professional' },
    { id: 'aligner', label: '8. Science of Clear Aligners', topic: 'Clear Aligners: Biology over Brand Marketing', mode: 'Professional' },
    { id: 'perio', label: '9. Gum Health & Heart', topic: 'The Link between Periodontitis & Heart Health', mode: 'General' },
    { id: 'la', label: '10. Safe Local Anesthesia', topic: 'Electronic Anesthesia: Safety for Cardiac Patients', mode: 'General' },
];

export default function NeoAIStudio() {
    const [topic, setTopic] = useState('');
    const [locality, setLocality] = useState('Tellapur');
    const [handbookMode, setHandbookMode] = useState('General');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!topic) return;
        setLoading(true);
        try {
            const blog = await generateAuthorityBlogPost(topic, locality, handbookMode);
            setContent(blog);
        } catch (error) {
            alert('Failed to generate.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 pt-32">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                            <Sparkles className="text-blue-600" /> Neo AI Studio
                        </h1>
                        <p className="text-slate-500">Generate 1,200-word Authority Pillars with <strong>Clinical Scholar Grounding</strong>.</p>
                    </div>
                    <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                        {handbookMode} Mode Active
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT PANEL: CONTROLS */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 h-fit">

                        {/* RANK PROTECTION BADGE */}
                        {['root canal', 'dental implant', 'pain relief'].some(k => topic.toLowerCase().includes(k)) && (
                            <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg flex items-start gap-3">
                                <div className="mt-1">
                                    <ShieldCheck size={16} className="text-amber-600 dark:text-amber-500" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black uppercase text-amber-700 dark:text-amber-400">Rank Protection Active</h4>
                                    <p className="text-[10px] text-amber-800 dark:text-amber-300/80 leading-relaxed mt-1">
                                        High Authority Detected. System will <strong>only generate an AIO Snippet</strong> & Clinical Update to prevent content shocks.
                                    </p>
                                </div>
                            </div>
                        )}

                        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Topic / Keyword</label>
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g., Painless Root Canal"
                            className="w-full p-3 bg-slate-100 dark:bg-slate-900 rounded-lg border-0 mb-6 font-bold"
                        />

                        {/* ... selectors ... */}
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Target Locality</label>
                        <select
                            value={locality}
                            onChange={(e) => setLocality(e.target.value)}
                            className="w-full p-3 bg-slate-100 dark:bg-slate-900 rounded-lg border-0 mb-6"
                        >
                            <option value="Tellapur">Tellapur</option>
                            <option value="Gachibowli">Gachibowli</option>
                            <option value="Chanda Nagar">Chanda Nagar</option>
                            <option value="Kondapur">Kondapur</option>
                            <option value="Serilingampally">Serilingampally</option>
                        </select>

                        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Use Handbook (Scholar Mode)</label>
                        <select
                            value={handbookMode}
                            onChange={(e) => setHandbookMode(e.target.value)}
                            className="w-full p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg border-2 border-blue-100 dark:border-blue-800 mb-8 font-bold"
                        >
                            <option value="General">General Clinical Protocol</option>
                            <option value="Pediatric">Pediatric Handbook (Nelson&apos;s)</option>
                            <option value="Professional">Professional&apos;s Guide (TMJ/Stress)</option>
                            <option value="Geriatric">Senior Oral Health Map (Misch)</option>
                        </select>

                        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-800/30">
                            <label className="block text-xs font-bold uppercase text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                                <Sparkles size={14} /> Warhead Presets (Top 10)
                            </label>
                            <select
                                onChange={(e) => {
                                    if (!e.target.value) return;
                                    const preset = WARHEAD_PRESETS.find(p => p.id === e.target.value);
                                    if (preset) {
                                        setTopic(preset.topic);
                                        setHandbookMode(preset.mode);
                                    }
                                }}
                                className="w-full p-2 text-sm bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 rounded-lg text-slate-700 dark:text-slate-300"
                            >
                                <option value="">Select a Topic...</option>
                                {WARHEAD_PRESETS.map(p => (
                                    <option key={p.id} value={p.id}>{p.label}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleGenerate}
                            disabled={loading || !topic}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${loading
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 shadow-lg shadow-blue-500/30'
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                            {loading ? 'Consulting Textbooks...' : 'Generate Scholar Post'}
                        </button>
                    </div>

                    {/* RIGHT PANEL: PREVIEW */}
                    <div className="lg:col-span-2 bg-white dark:bg-[#111620] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 min-h-[600px] flex flex-col">
                        {content ? (
                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xs font-bold uppercase text-green-500 flex items-center gap-2">
                                        <BookOpen size={14} /> Preview Mode
                                    </h2>
                                    <button
                                        className="text-xs font-bold text-slate-400 hover:text-blue-600 flex items-center gap-1"
                                        onClick={() => navigator.clipboard.writeText(content)}
                                    >
                                        <Save size={14} /> Copy MD
                                    </button>
                                </div>

                                <div className="prose prose-lg dark:prose-invert max-w-none flex-1 overflow-auto">
                                    <div className="whitespace-pre-wrap">{content}</div>
                                </div>

                                {/* SNIPPET VALIDATOR */}
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                                    <h3 className="text-xs font-bold uppercase text-slate-500 mb-2">AIO Snippet Validator</h3>
                                    {content.length > 0 && (
                                        (() => {
                                            // Heuristic: Try to match content between ">" and next newline or header
                                            // This is a rough check for the studio preview
                                            const snippetMatch = content.match(/> \*\*AIO Snippet.*?\*\*\n> (.*?)(?=\n|$)/s) || content.match(/# \[AIO Snippet\]\n(.*?)(?=\n#|$)/s);
                                            const snippet = snippetMatch ? snippetMatch[1].trim() : "Snippet not detected or formatted differently.";
                                            const charCount = snippet.length;
                                            const isIdeal = charCount > 50 && charCount < 300;

                                            return (
                                                <div className={`p-4 rounded-xl border ${isIdeal ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}`}>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className={`text-sm font-bold ${isIdeal ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                                            {isIdeal ? 'Snippet Optimized' : 'Snippet Needs Attention'}
                                                        </span>
                                                        <span className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                                                            {charCount} / 300 chars
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                                                        &quot;{snippet.substring(0, 100)}{snippet.length > 100 ? '...' : ''}&quot;
                                                    </p>
                                                </div>
                                            );
                                        })()
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-50">
                                <Sparkles size={48} className="mb-4" />
                                <p className="font-bold">Ready to write.</p>
                                <p className="text-sm">Enter a topic and hit generate.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
