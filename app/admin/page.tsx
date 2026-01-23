"use client";
import React, { useState } from 'react';
import { Copy, Plus, ClipboardCheck, Lock, Edit3, Image as ImageIcon, Send } from 'lucide-react';
import Link from 'next/link';

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<'cases' | 'blog'>('cases');

    // --- CASE STUDY STATE ---
    const [caseData, setCaseData] = useState({
        title: '', age: '', gender: 'Female', category: 'Veneers', difficulty: 'Intermediate',
        complaint: '', diagnosis: '', solution: '', duration: '', doctorNote: '', beforeImage: '', afterImage: '', tags: ''
    });
    const [generatedCode, setGeneratedCode] = useState('');
    const [copied, setCopied] = useState(false);

    // --- BLOG POST STATE ---
    const [blogData, setBlogData] = useState({
        title: '', excerpt: '', content: '', author: 'Dr. Dhivakaran', cover_image: '', tags: ''
    });
    const [isPublishing, setIsPublishing] = useState(false);
    const [publishStatus, setPublishStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Login Handler
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'Noble@2024') setIsAuthenticated(true);
        else alert('Wrong Password');
    };

    // Case Study Logic
    const generateJSON = () => {
        const id = `Case-${Math.floor(Math.random() * 1000) + 100}`;
        const code = `
    {
        id: "${id}",
        title: "${caseData.title}",
        patientProfile: { age: "${caseData.age}", gender: "${caseData.gender}" },
        category: "${caseData.category}",
        difficulty: "${caseData.difficulty}",
        complaint: "${caseData.complaint.replace(/"/g, '\\"')}",
        diagnosis: "${caseData.diagnosis.replace(/"/g, '\\"')}",
        solution: "${caseData.solution.replace(/"/g, '\\"')}",
        duration: "${caseData.duration}",
        doctorNote: "${caseData.doctorNote.replace(/"/g, '\\"')}",
        visuals: {
            before: "${caseData.beforeImage || 'PLACEHOLDER_URL'}",
            after: "${caseData.afterImage || 'PLACEHOLDER_URL'}"
        },
        tags: [${caseData.tags.split(',').map(t => `"${t.trim()}"`).join(', ')}]
    },`;
        setGeneratedCode(code);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Blog Logic
    const handlePublishBlog = async () => {
        setIsPublishing(true);
        setPublishStatus('idle');
        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...blogData,
                    tags: blogData.tags.split(',').map(t => t.trim()).filter(Boolean),
                    pin: password // Send PIN for verification
                })
            });
            if (res.ok) {
                setPublishStatus('success');
                setBlogData({ title: '', excerpt: '', content: '', author: 'Dr. Dhivakaran', cover_image: '', tags: '' });
                setTimeout(() => setPublishStatus('idle'), 3000);
            } else {
                setPublishStatus('error');
            }
        } catch (error) {
            setPublishStatus('error');
        } finally {
            setIsPublishing(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
                <form onSubmit={handleLogin} className="bg-[#111620] p-10 rounded-3xl border border-white/5 w-full max-w-md text-center">
                    <Lock size={40} className="text-blue-600 mx-auto mb-6" />
                    <h1 className="text-2xl font-black text-white mb-2">Restricted Access</h1>
                    <p className="text-slate-400 mb-8 text-sm">Enter Dr. Dhivakaran&apos;s Pin</p>
                    <input
                        type="password" placeholder="Enter PIN" value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white hover:border-blue-500/50 focus:border-blue-500 transition-colors mb-6 text-center tracking-[0.5em] font-bold text-xl"
                    />
                    <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white uppercase tracking-widest transition-all">Unlock</button>
                    <div className="mt-4"><Link href="/" className="text-xs text-slate-500 hover:text-white">Back to Home</Link></div>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-black tracking-tighter">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <Link href="/case-studies" className="text-slate-500 hover:text-blue-600 font-bold text-sm">View Cases</Link>
                        <Link href="/blog" className="text-slate-500 hover:text-blue-600 font-bold text-sm">View Blog</Link>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b border-slate-200">
                    <button onClick={() => setActiveTab('cases')} className={`px-6 py-3 font-bold text-sm transition-colors border-b-2 ${activeTab === 'cases' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
                        Case Generator
                    </button>
                    <button onClick={() => setActiveTab('blog')} className={`px-6 py-3 font-bold text-sm transition-colors border-b-2 ${activeTab === 'blog' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
                        Blog Writer
                    </button>
                </div>

                {/* --- CASE STUDY GENERATOR --- */}
                {activeTab === 'cases' && (
                    <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">Patient Details</h2>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input placeholder="Title" className="input-field" value={caseData.title} onChange={e => setCaseData({ ...caseData, title: e.target.value })} />
                                    <input placeholder="Duration" className="input-field" value={caseData.duration} onChange={e => setCaseData({ ...caseData, duration: e.target.value })} />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <input placeholder="Age" className="input-field" value={caseData.age} onChange={e => setCaseData({ ...caseData, age: e.target.value })} />
                                    <select className="input-field" value={caseData.gender} onChange={e => setCaseData({ ...caseData, gender: e.target.value })}><option>Female</option><option>Male</option><option>Kid</option></select>
                                    <select className="input-field" value={caseData.difficulty} onChange={e => setCaseData({ ...caseData, difficulty: e.target.value })}><option>Intermediate</option><option>Complex</option><option>Routine</option></select>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">Clinical Story</h2>
                                <textarea placeholder="Chief Complaint..." className="input-area mb-4" rows={2} value={caseData.complaint} onChange={e => setCaseData({ ...caseData, complaint: e.target.value })} />
                                <textarea placeholder="Diagnosis..." className="input-area mb-4" rows={2} value={caseData.diagnosis} onChange={e => setCaseData({ ...caseData, diagnosis: e.target.value })} />
                                <textarea placeholder="Solution..." className="input-area mb-4" rows={3} value={caseData.solution} onChange={e => setCaseData({ ...caseData, solution: e.target.value })} />
                                <textarea placeholder="Dr. Note..." className="input-area" rows={2} value={caseData.doctorNote} onChange={e => setCaseData({ ...caseData, doctorNote: e.target.value })} />
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">Visuals</h2>
                                <input placeholder="Before Image URL" className="input-field mb-4" value={caseData.beforeImage} onChange={e => setCaseData({ ...caseData, beforeImage: e.target.value })} />
                                <input placeholder="After Image URL" className="input-field" value={caseData.afterImage} onChange={e => setCaseData({ ...caseData, afterImage: e.target.value })} />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="sticky top-12">
                                <button onClick={generateJSON} className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold uppercase tracking-widest rounded-xl transition-all mb-6 flex items-center justify-center gap-2">
                                    <Plus size={20} /> Generate JSON
                                </button>
                                <div className="bg-[#1e293b] p-6 rounded-3xl overflow-hidden relative group">
                                    {copied && <span className="absolute top-4 right-4 text-green-500 text-xs font-bold flex items-center gap-1 bg-black/50 px-2 py-1 rounded"><ClipboardCheck size={14} /> Copied</span>}
                                    <pre className="text-xs text-green-400 font-mono overflow-x-auto p-4 bg-black/30 rounded-xl border border-white/5 whitespace-pre-wrap h-[500px] overflow-y-auto custom-scrollbar">
                                        {generatedCode || '// JSON will appear here...'}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- BLOG WRITER --- */}
                {activeTab === 'blog' && (
                    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="font-bold text-lg flex items-center gap-2"><Edit3 className="text-blue-600" /> Write New Article</h2>
                                {publishStatus === 'success' && <span className="text-green-600 font-bold text-sm flex items-center gap-1"><ClipboardCheck size={16} /> Published Successfully!</span>}
                                {publishStatus === 'error' && <span className="text-red-600 font-bold text-sm">Error Publishing. Check Console.</span>}
                            </div>

                            <div className="space-y-6">
                                <input placeholder="Article Title" className="input-field text-lg font-bold" value={blogData.title} onChange={e => setBlogData({ ...blogData, title: e.target.value })} />

                                <div className="grid grid-cols-2 gap-4">
                                    <input placeholder="Author (e.g. Dr. Dhivakaran)" className="input-field" value={blogData.author} onChange={e => setBlogData({ ...blogData, author: e.target.value })} />
                                    <input placeholder="Tags (comma separated)" className="input-field" value={blogData.tags} onChange={e => setBlogData({ ...blogData, tags: e.target.value })} />
                                </div>

                                <div className="relative">
                                    <ImageIcon className="absolute top-3 left-3 text-slate-400" size={18} />
                                    <input placeholder="Cover Image URL" className="input-field pl-10" value={blogData.cover_image} onChange={e => setBlogData({ ...blogData, cover_image: e.target.value })} />
                                </div>

                                <textarea placeholder="Short Excerpt (SEO Description)..." className="input-area h-24" value={blogData.excerpt} onChange={e => setBlogData({ ...blogData, excerpt: e.target.value })} />

                                <textarea
                                    placeholder="Write your article here... (Supports basic text formatting)"
                                    className="input-area h-96 font-serif text-lg leading-relaxed p-6"
                                    value={blogData.content}
                                    onChange={e => setBlogData({ ...blogData, content: e.target.value })}
                                />

                                <button
                                    onClick={handlePublishBlog}
                                    disabled={isPublishing || !blogData.title || !blogData.content}
                                    className={`w-full py-4 rounded-xl font-bold text-white uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${isPublishing ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30'}`}
                                >
                                    {isPublishing ? 'Publishing...' : <><Send size={18} /> Publish Live</>}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    .input-field, .input-area { width: 100%; padding: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; outline: none; transition: all 0.2s; }
                    .input-field:focus, .input-area:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
                    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
                `}</style>
            </div>
        </div>
    );
};

export default AdminPage;
