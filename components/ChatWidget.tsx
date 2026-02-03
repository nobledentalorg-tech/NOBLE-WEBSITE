'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, MessageSquare, ExternalLink, Mic, MicOff } from 'lucide-react';
import { getNeoResponse } from '@/app/actions';
import { ChatMessage } from '@/types';
import { useMobileUI } from '@/context/MobileUIContext';

interface ChatWidgetProps {
  onBookClick?: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onBookClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Core Logic State (only initialized after load)
  const [currentNodeId, setCurrentNodeId] = useState('root');

  const { isStickyFooterVisible } = useMobileUI();

  // Initialize Chat Logic on First Interaction
  const initializeChat = async () => {
    if (!isLoaded) {
      setIsLoaded(true);
      // Set initial greeting
      setMessages([{ role: 'model', text: "Hello! I am the Noble AI assistant. How can I help you today?", timestamp: Date.now() }]);
    }
    setIsOpen(true);
  };

  // Track Chat Open
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'ai_chat_open',
          location: 'ChatWidget',
          timestamp: new Date().toISOString()
        });
      }
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen]);

  // Update initial greeting when language changes
  useEffect(() => {
    setMessages(prev => {
      // Only update if we have exactly one message (the greeting)
      if (prev.length > 0) {
        const newText = language === 'en'
          ? "Hello! I am the Noble AI assistant. How can I help you today?"
          : "வணக்கம்! நான் Noble AI உதவியாளன். உங்களுக்கு எப்படி உதவ முடியும்?";

        // Only update the very first message if it's the greeting
        if (prev.length === 1 && prev[0].role === 'model') {
          return [{ ...prev[0], text: newText }];
        }
      }
      return prev;
    });
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-IN';

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(prev => prev + (prev ? ' ' : '') + transcript);
          setIsListening(false);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, [isLoaded]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      if (recognitionRef.current) {
        setIsListening(true);
        recognitionRef.current.start();
      } else {
        alert("Speech recognition is not supported in this browser.");
      }
    }
  };


  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Track Message
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'ai_chat_message',
        message_length: input.length,
        language: language
      });
    }

    // 1. User Message
    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Call Server Action (Hybrid Neo + Gemini)
      const simpleHistory = messages.map(m => ({ role: m.role, text: m.text }));
      const response = await getNeoResponse(
        userMsg.text,
        currentNodeId,
        simpleHistory
      );

      const nextNode = response.node;
      setCurrentNodeId(nextNode.id);

      const aiResponse: ChatMessage = {
        role: 'model',
        text: (language === 'ta' && nextNode.text.ta) ? nextNode.text.ta : nextNode.text.en,
        timestamp: Date.now(),
        possibilities: nextNode.possibilities,
        sources: [],
        urgency: response.urgency
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Neo AI Error:', error);
      const errorResponse: ChatMessage = {
        role: 'model',
        text: 'I apologize, but I encountered an issue. Please try again or contact us directly.',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleBookClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'ai_chat_lead',
        method: 'header_button'
      });
    }
    if (onBookClick) onBookClick();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Heavy Chat Interface - Only Rendered if isLoaded is true */}
      {(isLoaded && isOpen) && (
        <div className="bg-white dark:bg-[#0F172A] w-[90vw] sm:w-[400px] h-[550px] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-5 transition-all duration-500">
          {/* Header */}
          <div className="bg-slate-50 dark:bg-slate-900 p-5 border-b border-slate-200 dark:border-white/5 flex justify-between items-center transition-colors duration-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 dark:bg-cyan-500/20 rounded-xl flex items-center justify-center text-white dark:text-cyan-400 shadow-lg shadow-blue-500/20 transition-all duration-500">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm transition-colors duration-500">Noble Dental AI</h3>

                {/* Book Link - NEW TRACKED ACTION */}
                <button onClick={handleBookClick} className="flex items-center gap-1 text-xs text-blue-600 dark:text-cyan-400 font-black uppercase tracking-wider hover:underline mt-0.5">
                  Book Appointment <ExternalLink size={10} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(prev => prev === 'en' ? 'ta' : 'en')}
                aria-label="Toggle Language"
                className="px-2 py-1 text-xs font-bold border border-slate-200 dark:border-white/10 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {language === 'en' ? 'தமிழ்' : 'ENG'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50 dark:bg-[#020617] scrollbar-hide transition-colors duration-500">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[90%] px-4 py-3 rounded-2xl text-sm transition-all duration-500 ${msg.role === 'user'
                  ? 'bg-blue-600 text-white dark:bg-blue-700 shadow-md'
                  : 'bg-white text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-white/5 shadow-sm'
                  }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                  {msg.possibilities && msg.possibilities.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.possibilities.map((p, pIdx) => (
                        <div key={pIdx} className="p-3 bg-slate-100 dark:bg-black/20 rounded-lg border border-slate-200 dark:border-white/10 text-xs">
                          <div className="font-bold text-blue-600 dark:text-cyan-400 mb-1">{p.title}</div>
                          <div className="text-slate-600 dark:text-slate-400 leading-tight mb-2">{p.description}</div>
                          <div className="font-medium text-xs uppercase tracking-wider text-slate-500">{p.action}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 space-y-2">
                      <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-2">Sources:</p>
                      <div className="flex flex-wrap gap-2">
                        {msg.sources.map((source, sIdx) => (
                          <a
                            key={sIdx}
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-md text-xs font-bold text-blue-600 dark:text-cyan-400 transition-all border border-slate-200 dark:border-white/5"
                          >
                            <span className="truncate max-w-[120px]">{source.title}</span>
                            <ExternalLink size={10} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-xs text-slate-400 mt-1 px-2 font-medium">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce"></span>
                Processing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="flex gap-2 items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type or use mic..."
                  className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-500 pr-10"
                  disabled={isLoading}
                />
                <button
                  onClick={toggleListening}
                  aria-label={isListening ? "Stop Listening" : "Start Listening"}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-slate-400 hover:text-blue-600'
                    }`}
                >
                  {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
              </div>
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Send Message"
                className={`p-3 rounded-xl transition-all duration-300 ${input.trim()
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                  }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightweight Launcher Button - Hidden when Sticky Footer is active on mobile */}
      {(!isOpen && !isStickyFooterVisible) && (
        <button
          onClick={initializeChat}
          aria-label="Open AI Assistant"
          className="group relative bg-blue-600 dark:bg-cyan-500 text-white dark:text-black p-4 rounded-full shadow-2xl shadow-blue-500/40 dark:shadow-cyan-500/30 transition-all hover:scale-110 duration-500 active:scale-95"
        >
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
          </div>
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
