import React from 'react';
import Link from 'next/link';
import { Star, ThumbsUp, Heart, ExternalLink, QrCode } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Leave a Review | Noble Dental Care Nallagandla',
    description: 'We value your feedback! Share your experience with Noble Dental Care and help us continue providing top-rated dental services in Nallagandla.',
};

export default function ReviewPage() {
    // Standard Google Review link derived from the map CID/Place ID
    const googleReviewLink = "https://g.page/r/Ca7x65wcyho_EAE/review";

    return (
        <main className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-[#0B1019] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-black text-xs uppercase tracking-[0.2em] mb-6">
                        <Star size={14} className="fill-amber-500" /> Patient Feedback
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
                        How was your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Smile Journey?</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Your feedback is the heartbeat of our clinic. It helps us improve and helps other patients in Nallagandla find a trusted dental home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Direct Review Card */}
                    <div className="bg-white dark:bg-[#151b2b] rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-blue-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                        
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-6">
                            <ThumbsUp size={32} />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Review on Google
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">
                            Take 60 seconds to share your experience on our official Google Business Profile.
                        </p>
                        
                        <a 
                            href={googleReviewLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30"
                        >
                            <Star size={18} className="fill-white" /> Write a Review
                        </a>
                    </div>

                    {/* QR Code / Share Card */}
                    <div className="bg-white dark:bg-[#151b2b] rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-indigo-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                        
                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 mb-6 mx-auto md:mx-0">
                            <QrCode size={32} />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Scan to Review
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-6">
                            Already at the clinic? Simply scan this code with your phone camera to leave a review instantly.
                        </p>
                        
                        <div className="bg-white p-4 rounded-2xl inline-block shadow-sm border border-slate-100">
                            {/* Using Google Chart API to generate the exact QR Code on the fly */}
                            <img 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(googleReviewLink)}`} 
                                alt="Google Review QR Code" 
                                width={200}
                                height={200}
                                className="w-[200px] h-[200px] object-contain"
                            />
                        </div>

                        <div className="mt-6">
                            <a 
                                href="/google-qr.pdf" 
                                download="Noble_Dental_Care_QR.pdf"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 rounded-lg font-bold transition-all"
                            >
                                <ExternalLink size={14} /> Download PDF Version
                            </a>
                        </div>
                    </div>
                </div>

                {/* Trust Signal */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 justify-center w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 mb-4">
                        <Heart size={24} className="fill-rose-500" />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Thank you for trusting <strong className="text-slate-900 dark:text-white">Noble Dental Care</strong>.
                    </p>
                </div>
            </div>
        </main>
    );
}
