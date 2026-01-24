'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Send, ArrowLeft, Mic, MicOff, Sparkles,
    ExternalLink, Plus, Flame, Calendar, ShieldAlert, ChevronRight, FileText
} from 'lucide-react';

// ✅ IMPORT THE SERVER ACTION (The Secure Way)
import { getNeoResponse } from '@/app/actions';
import { ChatMessage } from '@/types';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function NeoCompanionClient() {
    const router = useRouter();
    const { data: session } = useSession();

    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);

    // AI State Logic
    const [currentNodeId, setCurrentNodeId] = useState('root');
    const [typedText, setTypedText] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<any>(null);

    // -- DB Sync State --
    const [currentChatId, setCurrentChatId] = useState<string | null>(null);

    const fullIntroText = session?.user?.name
        ? `Hi ${session.user.name.split(' ')[0]}. I am Neo, your Virtual Dental Consultant.`
        : "Hi. I am Neo, your Virtual Dental Consultant.";

    // -- DB Sync Logic --
    const saveMessageToDb = async (role: 'user' | 'model', content: string) => {
        if (!session?.user) return; // Only save if logged in

        try {
            const res = await fetch('/api/chat/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chatId: currentChatId,
                    role,
                    content
                })
            });
            const data = await res.json();
            if (data.chatId && !currentChatId) {
                setCurrentChatId(data.chatId);
            }
        } catch (error) {
            console.error("Failed to save message:", error);
        }
    };

    // --- 1. Typewriter Effect ---
    useEffect(() => {
        if (messages.length === 0) {
            let i = 0;
            const timer = setInterval(() => {
                setTypedText(fullIntroText.slice(0, i + 1));
                i++;
                if (i > fullIntroText.length) clearInterval(timer);
            }, 40);
            return () => clearInterval(timer);
        }
    }, [messages.length, fullIntroText]);

    // --- 2. Auto Scroll ---
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages, isLoading, input]);

    // --- 3. Speech Recognition Setup ---
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = false;
                recognitionRef.current.lang = 'en-IN';
                recognitionRef.current.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    setInput(prev => prev + (prev ? ' ' : '') + transcript);
                    setIsListening(false);
                };
                recognitionRef.current.onend = () => setIsListening(false);
            }
        }
    }, []);

    const toggleListening = () => {
        if (isListening) recognitionRef.current?.stop();
        else {
            setIsListening(true);
            recognitionRef.current?.start();
        }
    };

    // --- 4. THE CORE LOGIC (Refactored) ---
    const handleSend = async (customMessage?: string) => {
        const textToSend = customMessage || input;
        if (!textToSend.trim() || isLoading) return;

        setShowMenu(false);

        // A. Optimistic UI Update (Show user message immediately)
        const userMsg: ChatMessage = { role: 'user', text: textToSend, timestamp: Date.now() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        // Save User Msg to DB
        saveMessageToDb('user', textToSend);

        try {
            // -- Mock Patient Context (For Demo) --
            // In production, this would come from the user's logged-in profile.
            const patientContext = {
                age: 28,
                isPregnant: textToSend.toLowerCase().includes('pregnant') || messages.some(m => m.text.toLowerCase().includes('pregnant')),
                medicalHistory: ['asthma'],
                trimester: 'Second' as any
            };

            // B. Call the Server Action
            const neoResponse = await getNeoResponse(textToSend, currentNodeId, messages, patientContext);

            const nextNode = neoResponse.node;
            setCurrentNodeId(nextNode.id);

            // C. Construct AI Response
            const aiResponse: ChatMessage = {
                role: 'model',
                text: nextNode.text.en,
                timestamp: Date.now(),
                possibilities: nextNode.possibilities,
                urgency: neoResponse.urgency
            };

            setMessages(prev => [...prev, aiResponse]);

            // Save AI Msg to DB
            saveMessageToDb('model', nextNode.text.en);

        } catch (error) {
            console.error("Neo Error:", error);
            // Show visible error to user
            setMessages(prev => [...prev, {
                role: 'model',
                text: "I apologize, I'm having trouble connecting to the server. Please check your internet or try again.",
                timestamp: Date.now()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Quick Actions Config
    const quickActions = [
        { label: "Cost Estimate", query: "How much does a root canal cost?", icon: Sparkles, color: "text-amber-400", bg: "bg-amber-500/10" },
        { label: "Tooth Pain", query: "I have severe tooth pain", icon: Flame, color: "text-red-400", bg: "bg-red-500/10" },
        { label: "Book Visit", query: "Book an appointment", icon: Calendar, color: "text-emerald-400", bg: "bg-emerald-500/10" },
        { label: "Post-Op Guide", query: "Care instructions after extraction", icon: FileText, color: "text-blue-400", bg: "bg-blue-500/10" },
    ];

    return (
        <div className="relative min-h-[100dvh] bg-slate-50 dark:bg-[#020202] text-slate-900 dark:text-slate-200 font-sans overflow-hidden transition-colors duration-300">

            {/* Styles Injection */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');
        .font-gemini { font-family: 'Outfit', sans-serif; }
        .cinematic-bg {
          background: radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.05), transparent 70%);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        :global(.dark) .glass-panel {
          background: rgba(18, 18, 18, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing { 0%, 80%, 100% { transform: scale(0); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

            {/* Backgrounds */}
            <div className="absolute inset-0 cinematic-bg pointer-events-none z-0"></div>

            {/* Navbar */}
            <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center">
                <div onClick={() => router.back()} className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-full bg-white/5 border border-white/10"><ArrowLeft size={16} /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Back</span>
                </div>
                <div className="flex items-center gap-3">
                    {/* Auth Button */}
                    {session ? (
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <Image src={session.user?.image || ''} alt="User" width={20} height={20} className="w-5 h-5 rounded-full" />
                            <span className="font-gemini text-[10px] uppercase text-zinc-400 cursor-pointer hover:text-red-400" onClick={() => signOut()}>Sign Out</span>
                        </div>
                    ) : (
                        <div onClick={() => signIn('google')} className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all">
                            <span className="font-gemini text-[10px] font-bold text-blue-400 uppercase tracking-widest">Sign In</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Neo Online</span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-20 w-full h-[100dvh] flex flex-col items-center justify-center pt-20 pb-28 px-4">

                {messages.length === 0 ? (
                    /* HERO STATE */
                    <div className="text-center flex flex-col items-center max-w-2xl w-full animate-in fade-in zoom-in duration-700">
                        <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-b from-zinc-800 to-black flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                            <Flame size={32} className="text-red-500" />
                        </div>
                        <h1 className="font-gemini text-4xl md:text-5xl font-medium mb-4 tracking-tight">{typedText}<span className="animate-pulse text-red-500">_</span></h1>
                        <p className="text-zinc-400 mb-10">Instant provisional diagnosis & cost estimates.</p>

                        <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
                            {quickActions.map((action, i) => (
                                <button key={i} onClick={() => handleSend(action.query)} className="flex items-center gap-3 p-4 rounded-xl glass-panel hover:bg-white/5 transition-all text-left group">
                                    <div className={`p-2 rounded-lg ${action.bg} ${action.color}`}><action.icon size={18} /></div>
                                    <span className="text-xs font-bold uppercase text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* CHAT STREAM */
                    <div className="flex-1 w-full max-w-3xl overflow-y-auto no-scrollbar px-2 space-y-6 pb-4">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                                {msg.role !== 'user' && <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0"><Flame size={14} className="text-red-500" /></div>}

                                <div className={`max-w-[85%] p-5 rounded-2xl ${msg.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'glass-panel rounded-tl-none'}`}>
                                    <p className="font-gemini text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                                    {/* Possibility Cards */}
                                    {msg.possibilities && msg.possibilities.length > 0 && (
                                        <div className="mt-4 space-y-2">
                                            {msg.possibilities.map((p: any, idx: number) => (
                                                <div key={idx} className="bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-black/5 flex items-center justify-between group cursor-pointer hover:border-red-500/30 transition-all"
                                                    onClick={() => p.relatedSlug && router.push(`/treatments/${p.relatedSlug}`)}>
                                                    <div className="flex-1 pr-2">
                                                        <h3 className="text-sm font-bold">{p.title}</h3>
                                                        <p className="text-xs text-zinc-500 line-clamp-2">{p.description}</p>
                                                    </div>
                                                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-4 animate-in fade-in">
                                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center"><Flame size={14} className="text-red-500" /></div>
                                <div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full typing-dot"></div>
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full typing-dot"></div>
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full typing-dot"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>
                )}

                {/* INPUT BAR */}
                <div className="fixed bottom-6 w-full max-w-2xl px-4 z-40">
                    <div className="glass-panel p-2 rounded-full flex items-center shadow-xl">
                        <button onClick={() => setShowMenu(!showMenu)} className="p-3 rounded-full hover:bg-black/5 text-zinc-400 transition-colors"><Plus size={20} /></button>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask Neo..."
                            className="flex-1 bg-transparent border-none outline-none px-2 font-gemini text-base"
                        />
                        <button onClick={toggleListening} className={`p-3 rounded-full transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-zinc-400 hover:text-red-500'}`}>
                            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                        </button>
                        <button onClick={() => handleSend()} disabled={!input.trim()} className={`p-3 rounded-full transition-all ${input.trim() ? 'bg-red-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400'}`}>
                            <Send size={16} />
                        </button>
                    </div>

                    {/* Pop-up Quick Menu inside INPUT BAR area for consistency with logic */}
                    {showMenu && (
                        <div className="absolute bottom-full left-4 mb-4 glass-panel rounded-2xl p-2 animate-in slide-in-from-bottom-4 fade-in zoom-in duration-300 flex flex-col gap-1 min-w-[240px] border border-black/5">
                            {quickActions.map((action, i) => (
                                <button key={i} onClick={() => handleSend(action.query)} className="flex items-center gap-3 px-4 py-3 hover:bg-black/5 rounded-xl text-left transition-colors group">
                                    <action.icon size={16} className={`${action.color}`} />
                                    <span className="font-gemini text-sm font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
}
