
import React from 'react';
import Link from 'next/link';

export default function BlogTestPage() {
    return (
        <div className="min-h-screen pt-32 px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <h1 className="text-4xl font-black mb-6">Diagnostic Test Page</h1>
            <p className="text-xl mb-4">
                If you can see this page, the routing system is working correctly.
            </p>
            <div className="p-4 bg-green-100 text-green-800 rounded-xl mb-8">
                <strong>Status:</strong> Route /blog-test is active.
            </div>
            <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">
                Try Attempting /blog Link again
            </Link>
        </div>
    );
}
