'use client';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';

export default function AdminChatsPage() {
    const [chats, setChats] = useState<any[]>([]);
    const [selectedChat, setSelectedChat] = useState<string | null>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchChats();
    }, []);

    useEffect(() => {
        if (selectedChat) {
            fetchMessages(selectedChat);
        }
    }, [selectedChat]);

    const fetchChats = async () => {
        try {
            const res = await fetch('/api/admin/chats');
            if (res.ok) {
                const data = await res.json();
                setChats(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMessages = async (chatId: string) => {
        try {
            const res = await fetch(`/api/admin/chats?chatId=${chatId}`);
            if (res.ok) {
                const data = await res.json();
                setMessages(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white pt-24 px-8 pb-8 gap-6">
            {/* Sidebar List */}
            <div className="w-1/3 bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-lg flex justify-between items-center">
                    <span>Conversations</span>
                    <button onClick={fetchChats} className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Refresh</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {loading ? (
                        <div className="p-4 text-center opacity-50">Loading chats...</div>
                    ) : chats.length === 0 ? (
                        <div className="p-4 text-center opacity-50">No conversations found.</div>
                    ) : (
                        chats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat.id)}
                                className={`p-4 border-b border-slate-200 dark:border-slate-700 cursor-pointer transition-colors ${selectedChat === chat.id ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    {chat.users?.image && <Image src={chat.users.image} alt="User" width={20} height={20} className="rounded-full" unoptimized />}
                                    <div className="font-semibold text-sm">{chat.users?.name || chat.users?.email || 'Unknown User'}</div>
                                </div>
                                <div className="text-xs text-slate-500 truncate font-mono">{chat.title}</div>
                                <div className="text-xs text-slate-400 mt-1">{format(new Date(chat.created_at), 'MMM d, h:mm a')}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Chat View */}
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden">
                {selectedChat ? (
                    <>
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold flex justify-between">
                            <span>Chat History</span>
                            <span className="text-xs font-mono opacity-50">{selectedChat}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-black/20">
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm shadow-sm ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-sm'
                                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-sm'
                                        }`}>
                                        <div className="text-xs opacity-70 mb-1 uppercase tracking-wider font-bold">{msg.role}</div>
                                        <div className="whitespace-pre-wrap">{msg.content}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-400 flex-col gap-2">
                        <div className="text-4xl">💬</div>
                        <div>Select a conversation to view texts</div>
                    </div>
                )}
            </div>
        </div>
    );
}
