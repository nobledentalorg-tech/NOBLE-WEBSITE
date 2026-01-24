import React from 'react';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { auth, signOut } from '@/src/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import { 
    Brain, 
    BookOpen, 
    FileText, 
    LogOut, 
    Plus, 
    Trash2, 
    CheckCircle, 
    Clock, 
    ExternalLink,
    Save,
    ShoppingBag,
    AlertCircle
} from 'lucide-react';

const prisma = new PrismaClient();

// --- SERVER ACTIONS ---

async function updateMemory(formData: FormData) {
    'use server';
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");

    const id = formData.get('id') as string;
    const action = formData.get('action') as string;
    const newAnswer = formData.get('answer') as string;

    if (action === 'delete') {
        await prisma.neoMemory.delete({ where: { id } });
    } else if (action === 'verify') {
        await prisma.neoMemory.update({
            where: { id },
            data: { isVerified: true, answer: newAnswer }
        });
    }
    revalidatePath('/admin');
}

async function savePost(formData: FormData) {
    'use server';
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");

    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as string;
    const excerpt = formData.get('excerpt') as string;
    const image = formData.get('image') as string;

    const data = {
        title,
        slug,
        content,
        category,
        excerpt,
        cover_image: image,
        published: true
    };

    if (id) {
        await prisma.post.update({ where: { id }, data });
    } else {
        await prisma.post.create({ data });
    }
    revalidatePath('/admin');
    revalidatePath('/blog');
}

async function deletePost(id: string) {
    'use server';
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");
    await prisma.post.delete({ where: { id } });
    revalidatePath('/admin');
    revalidatePath('/blog');
}

async function saveCase(formData: FormData) {
    'use server';
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");

    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;
    const beforeImage = formData.get('beforeImage') as string;
    const afterImage = formData.get('afterImage') as string;

    const data = {
        title,
        slug,
        category,
        description,
        beforeImage,
        afterImage,
        published: true
    };

    if (id) {
        await prisma.caseStudy.update({ where: { id }, data });
    } else {
        await prisma.caseStudy.create({ data });
    }
    revalidatePath('/admin');
    revalidatePath('/case-studies');
}

async function saveProduct(formData: FormData) {
    'use server';
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");

    const id = formData.get('id') as string;
    const name = formData.get('name') as string;
    const brand = formData.get('brand') as string;
    const category = formData.get('category') as string;
    const clinic_price = parseFloat(formData.get('clinic_price') as string);
    const available = formData.get('available') === 'true';
    const image = formData.get('image') as string;
    const subText = formData.get('subText') as string;

    const data: any = {
        name,
        brand,
        category,
        clinicPrice: clinic_price,
        available,
        image,
        subText,
    };

    if (id) {
        await prisma.pharmacyProduct.update({ where: { id }, data });
    } else {
        await prisma.pharmacyProduct.create({ data });
    }
    revalidatePath('/admin');
    revalidatePath('/products');
}

async function deleteProduct(id: string) {
    'use server';
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");
    await prisma.pharmacyProduct.delete({ where: { id } });
    revalidatePath('/admin');
    revalidatePath('/products');
}

// --- UI COMPONENT ---

export default async function AdminPage({ searchParams }: { searchParams: { tab?: string } }) {
    const session = await auth();
    const activeTab = searchParams.tab || 'ai';

    if (!session || (session.user as any)?.role !== 'admin') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-8">
                <div className="max-w-md text-center">
                    <h1 className="text-5xl font-black mb-6 text-red-500">RESTRICTED</h1>
                    <p className="text-slate-400 mb-8 italic">Logged as: {session?.user?.email || 'Guest'}</p>
                    <p className="text-slate-500 mb-8">Access limited to Dr. Dhivakaran CMD only.</p>
                    <a href="/" className="px-8 py-3 bg-white text-black rounded-full font-bold">Return Home</a>
                </div>
            </div>
        );
    }

    // Data Fetching
    const memories = await prisma.neoMemory.findMany({ orderBy: { createdAt: 'desc' } });
    const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
    const cases = await prisma.caseStudy.findMany({ orderBy: { createdAt: 'desc' } });
    const products = await prisma.pharmacyProduct.findMany({ orderBy: { createdAt: 'desc' } });

    const tabs = [
        { id: 'ai', label: 'Neo AI Brain', icon: <Brain size={18} /> },
        { id: 'posts', label: 'Clinical Blog', icon: <BookOpen size={18} /> },
        { id: 'cases', label: 'Case Studies', icon: <FileText size={18} /> },
        { id: 'pharmacy', label: 'Pharmacy', icon: <ShoppingBag size={18} /> },
    ];

    return (
        <div className="min-h-screen bg-[#05070a] text-slate-200 font-sans">
            {/* Header */}
            <header className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/20">N</div>
                        <div>
                            <h1 className="font-bold text-sm leading-tight text-white">Noble Admin OS</h1>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Clinical Command Center</p>
                        </div>
                    </div>
                    <form action={async () => { 'use server'; await signOut(); }}>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/20 text-slate-400 hover:text-red-400 transition-all text-xs font-bold">
                            <LogOut size={14} /> Sign Out
                        </button>
                    </form>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                
                {/* Tabs */}
                <div className="flex items-center gap-2 mb-12 p-1 bg-white/5 rounded-2xl w-fit border border-white/5">
                    {tabs.map(tab => (
                        <a 
                            key={tab.id}
                            href={`/admin?tab=${tab.id}`}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                activeTab === tab.id 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                                : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                            }`}
                        >
                            {tab.icon} {tab.label}
                        </a>
                    ))}
                </div>

                {/* --- AI BRAIN TAB --- */}
                {activeTab === 'ai' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold text-white">Learning Queue</h2>
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                                {memories.length} Memories
                            </span>
                        </div>
                        <div className="grid gap-4">
                            {memories.map(mem => (
                                <div key={mem.id} className="bg-white/5 border border-white/5 p-6 rounded-3xl group hover:border-white/10 transition-all">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`w-2 h-2 rounded-full ${mem.isVerified ? 'bg-green-500' : 'bg-amber-500 pulse'}`}></span>
                                                <h3 className="font-bold text-slate-100 italic">&quot;{mem.query}&quot;</h3>
                                            </div>
                                            <form action={updateMemory} className="space-y-4">
                                                <input type="hidden" name="id" value={mem.id} />
                                                <textarea 
                                                    name="answer"
                                                    defaultValue={mem.answer}
                                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-slate-400 focus:text-white focus:border-blue-500 outline-none transition-all min-h-[100px]"
                                                />
                                                <div className="flex items-center gap-4">
                                                    <button name="action" value="verify" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-xs font-bold transition-all">
                                                        <Save size={14} /> {mem.isVerified ? 'Update Knowledge' : 'Verify & Approve'}
                                                    </button>
                                                    <button name="action" value="delete" className="text-slate-500 hover:text-red-500 text-xs font-bold flex items-center gap-1 transition-colors">
                                                        <Trash2 size={14} /> Delete
                                                    </button>
                                                    <span className="ml-auto text-[10px] text-slate-600 uppercase font-black tracking-widest">Asked {mem.useCount} times</span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- BLOG POSTS TAB --- */}
                {activeTab === 'posts' && (
                    <div className="space-y-8">
                        <section className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-2 italic">Publish Wisdom.</h2>
                                <p className="text-blue-100 max-w-lg mb-8 opacity-80">Share your dental expertise with Nallagandla directly. SEO friendly and medical grade.</p>
                                <form action={savePost} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/20 p-6 rounded-2xl backdrop-blur-md">
                                    <div className="md:col-span-2">
                                        <label className="text-[10px] uppercase font-bold text-blue-200 block mb-2 tracking-widest">Article Title</label>
                                        <input name="title" required placeholder="e.g., The Truth About Wisdom Teeth" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:bg-white/20" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-bold text-blue-200 block mb-2 tracking-widest">Slug (URL)</label>
                                        <input name="slug" required placeholder="wisdom-teeth-guide" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-bold text-blue-200 block mb-2 tracking-widest">Category</label>
                                        <input name="category" defaultValue="Clinical" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-[10px] uppercase font-bold text-blue-200 block mb-2 tracking-widest">Full Content (Markdown Supported)</label>
                                        <textarea name="content" required rows={10} className="w-full bg-white/10 border border-white/10 rounded-xl p-4 text-white outline-none" placeholder="Start writing clinical excellence..."></textarea>
                                    </div>
                                    <button className="md:col-span-2 bg-white text-blue-600 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors uppercase tracking-widest">
                                        <Plus size={20} /> Publish Article
                                    </button>
                                </form>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {posts.map(post => (
                                <div key={post.id} className="bg-white/5 border border-white/5 rounded-3xl p-6 hover:border-blue-500/20 transition-all group">
                                    <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                                    <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-black">{post.category} • {new Date(post.createdAt).toLocaleDateString()}</p>
                                    <div className="flex items-center gap-4">
                                        <Link href={`/blog/${post.slug}`} target="_blank" className="text-blue-400 hover:underline text-xs font-bold flex items-center gap-1">
                                            <ExternalLink size={12} /> View Live
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- CASE STUDIES TAB --- */}
                {activeTab === 'cases' && (
                    <div className="space-y-8">
                        <section className="bg-emerald-600 rounded-3xl p-8 text-white">
                            <h2 className="text-3xl font-black mb-2 italic">Proof of Excellence.</h2>
                            <p className="text-emerald-100 mb-8 opacity-80">Add clinical before/after results to build surgical trust.</p>
                            <form action={saveCase} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/20 p-6 rounded-2xl">
                                <div className="md:col-span-2">
                                    <label className="text-[10px] uppercase font-bold text-emerald-200 block mb-2">Case Title</label>
                                    <input name="title" required placeholder="Full Mouth Rehabilitation - Zeiss Guided" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-[10px] uppercase font-bold text-emerald-200 block mb-2">Description</label>
                                    <textarea name="description" required rows={3} className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none"></textarea>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-emerald-200 block mb-2">Before Image (URL)</label>
                                    <input name="beforeImage" placeholder="/images/cases/user-before.jpg" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-emerald-200 block mb-2">After Image (URL)</label>
                                    <input name="afterImage" placeholder="/images/cases/user-after.jpg" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <button className="md:col-span-2 bg-white text-emerald-600 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                                    Archive Case Study
                                </button>
                            </form>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cases.map(c => (
                                <div key={c.id} className="bg-white/5 border border-white/5 rounded-3xl p-6 group hover:border-emerald-500/20 transition-all">
                                    <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                                    <p className="text-xs text-emerald-400 font-black uppercase active:tracking-widest transition-all mb-4">{c.category}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-slate-500">B</div>
                                        <div className="w-8 h-8 rounded bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-slate-500">A</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- PHARMACY TAB --- */}
                {activeTab === 'pharmacy' && (
                    <div className="space-y-8">
                        <section className="bg-indigo-600 rounded-3xl p-8 text-white">
                            <h2 className="text-3xl font-black mb-2 italic">Clinical Inventory.</h2>
                            <p className="text-indigo-100 mb-8 opacity-80">Add or manage clinic-exclusive products (Group Pharma etc).</p>
                            <form action={saveProduct} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black/20 p-6 rounded-2xl">
                                <div className="md:col-span-2">
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Product Name</label>
                                    <input name="name" required placeholder="SHY-NM Toothpaste" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Brand</label>
                                    <input name="brand" placeholder="Group Pharma" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Category</label>
                                    <select name="category" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none text-black">
                                        <option value="dental">Dental</option>
                                        <option value="wellness">Wellness</option>
                                        <option value="ortho">Ortho</option>
                                        <option value="preventive">Preventive</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Clinic Price (₹)</label>
                                    <input name="clinic_price" type="number" step="0.01" required className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Available</label>
                                    <select name="available" className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none text-black">
                                        <option value="true">In Stock (Active)</option>
                                        <option value="false">Out of Stock (SEO Only)</option>
                                    </select>
                                </div>
                                <div className="md:col-span-3">
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Short Description</label>
                                    <textarea name="subText" rows={2} className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none"></textarea>
                                </div>
                                <div className="md:col-span-3">
                                    <label className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">Image URL</label>
                                    <input name="image" placeholder="https://..." className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none" />
                                </div>
                                <button className="md:col-span-3 bg-white text-indigo-600 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-indigo-50 transition-colors">
                                    Add/Update Product
                                </button>
                            </form>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {products.map(p => (
                                <div key={p.id} className={`bg-white/5 border border-white/5 rounded-3xl p-6 transition-all relative ${!p.available ? 'opacity-50 grayscale' : ''}`}>
                                    <h3 className="font-bold text-sm mb-1">{p.name}</h3>
                                    <p className="text-[10px] text-slate-500 uppercase font-black">{p.brand} • ₹{p.clinicPrice}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className={`text-[8px] px-2 py-0.5 rounded-full font-bold uppercase ${p.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {p.available ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            {p.available ? <CheckCircle size={14} className="text-green-500" /> : <AlertCircle size={14} className="text-red-500" />}
                                            <form action={async () => { 'use server'; await deleteProduct(p.id); }}>
                                                <button className="text-slate-500 hover:text-red-500 transition-colors">
                                                    <Trash2 size={14} />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
