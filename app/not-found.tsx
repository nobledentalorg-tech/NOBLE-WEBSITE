import Link from 'next/link';
import { Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-6">
            <div className="text-center max-w-lg">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <FileQuestion size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                    Page Not Found
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
                >
                    <Home size={18} /> Back Home
                </Link>
            </div>
        </div>
    );
}
