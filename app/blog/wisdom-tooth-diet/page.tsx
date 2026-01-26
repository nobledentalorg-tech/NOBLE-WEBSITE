
import React from 'react';
import { Share2, Clock, User, Bookmark, ChevronLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'Wisdom Tooth Removal Diet: When Can I Eat Solid Food? | Noble Dental Nallagandla',
    description: 'Day-by-day diet guide for wisdom tooth recovery in Hyderabad. Learn when to eat Curd Rice, Idli, and which spicy foods to avoid to prevent Dry Socket.',
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] font-sans">
            <Header />
            <article className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Breadcrumb */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ChevronLeft size={16} /> Back to Blog
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Patient Recovery Guide</span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Wisdom Tooth Removal Diet: When Can I Eat Solid Food? (Day-by-Day Guide)
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                            Your survival guide to eating safely without disturbing the blood clot.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-100 dark:border-white/10 pb-8">
                            <span className="flex items-center gap-2"><User size={16} /> Dr. Dhivakaran</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Medically Reviewed</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                        <p className="lead text-xl text-slate-600 dark:text-slate-300">
                            The Hunger is Real. You just had your <Link href="/treatments/tooth-extraction">wisdom tooth removed</Link>. The anesthesia is wearing off, and you are starving. But you are terrified: <em>"If I eat the wrong thing, will it hurt? Will I get a Dry Socket?"</em>
                        </p>
                        <p>
                            We see this question every day at Noble Dental. The good news is, you don't have to starve. You just have to be strategic. Here is your timeline for safe eating, specifically for our patients in Hyderabad.
                        </p>

                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-800 my-8">
                            <h4 className="text-red-800 dark:text-red-100 font-bold mb-2 flex items-center gap-2">
                                <AlertTriangle size={20} /> The Golden Rule: NO STRAWS
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 m-0">
                                Before we look at food, remember this: <strong>Never use a straw for 7 days.</strong> The sucking motion creates a vacuum that can pull out the blood clot, causing a painful condition called "Dry Socket." Drink directly from the cup or use a spoon.
                            </p>
                        </div>

                        <h2>📅 Day 1: The "Cool & Liquid" Phase (First 24 Hours)</h2>
                        <p><strong>Goal:</strong> Stop the bleeding and reduce swelling.<br /><strong>Rule:</strong> No hot food. No chewing.</p>
                        <p>In the first 24 hours, heat increases blood flow, which can restart bleeding. Stick to cold liquids.</p>

                        <h3>✅ What to Eat:</h3>
                        <ul>
                            <li><strong>Ice Cream:</strong> (Yes! This is doctor-ordered). Choose plain flavors like Vanilla or Butterscotch. Avoid flavors with nuts, chocolate chips, or crunchy bits.</li>
                            <li><strong>Cold Smoothies:</strong> Mango or Banana shakes (No straw!).</li>
                            <li><strong>Yogurt / Curd:</strong> Plain, cold, and soothing.</li>
                            <li><strong>Cold Milkshakes:</strong> Boost or Horlicks (chilled).</li>
                        </ul>

                        <h2>📅 Day 2 & 3: The "No-Chew" Phase</h2>
                        <p><strong>Goal:</strong> Nutrition without jaw movement.<br /><strong>Rule:</strong> Warm food is okay now, but nothing spicy.</p>
                        <p>Your jaw will be stiff. You need soft foods that can be swallowed with minimal effort.</p>

                        <h3>✅ What to Eat:</h3>
                        <ul>
                            <li><strong>Mashed Potatoes:</strong> With plenty of butter/ghee.</li>
                            <li><strong>Curd Rice (Thayir Sadam):</strong> Make it extra mushy ("gooey"). This is the perfect healing food for Hyderabad summers.</li>
                            <li><strong>Scrambled Eggs:</strong> Soft, not dry.</li>
                            <li><strong>Dal / Sambar (Filtered):</strong> Soaked with soft rice or eaten as soup. Avoid drumsticks or hard veggies.</li>
                            <li><strong>Idli soaked in Sambar:</strong> Soft Idlis are great; avoid crispy Dosa or Vada for now.</li>
                        </ul>

                        <h2>📅 Day 4 to 7: The "Semi-Solid" Transition</h2>
                        <p><strong>Goal:</strong> Regaining strength.<br /><strong>Rule:</strong> You can chew gently, but chew on the opposite side of the extraction.</p>

                        <h3>✅ What to Eat:</h3>
                        <ul>
                            <li><strong>Khichdi / Pongal:</strong> The ultimate comfort food. Soft, nutritious, and easy to eat.</li>
                            <li><strong>Paneer:</strong> Soft paneer cubes (not fried).</li>
                            <li><strong>Well-cooked Pasta:</strong> Macaroni and cheese style.</li>
                            <li><strong>Upma:</strong> Ensure it is soft (Rava Upma), not dry.</li>
                            <li><strong>Soft Fruits:</strong> Bananas, Stewed Apples, or ripe Papaya.</li>
                        </ul>

                        <h2>📅 When Can I Eat Chicken/Mutton? (Day 7+)</h2>
                        <p>Most patients can return to a normal diet after 7 days, provided there is no pain.</p>
                        <ul>
                            <li><strong>Start with:</strong> Minced chicken (Kheema) or fish.</li>
                            <li><strong>Wait for:</strong> Chewy mutton or steak for at least 10-14 days. If food gets stuck in the socket, use a warm salt water rinse to gently dislodge it. Do not use a toothpick!</li>
                        </ul>

                        <h2>❌ The "Danger Zone" (Avoid for 10 Days)</h2>
                        <p>These foods are notorious for getting stuck in the wound or causing infection:</p>
                        <ul>
                            <li><strong>Rice Grains (Biryani):</strong> Loose grains can get trapped in the socket. Stick to mushy Curd Rice or Khichdi initially.</li>
                            <li><strong>Spicy Foods:</strong> Mirchi ka Salan or spicy pickles will sting the wound.</li>
                            <li><strong>Crunchy Snacks:</strong> No Murukku, Popcorn, Chips, or Nuts. Sharp edges can poke the healing gum.</li>
                            <li><strong>Alcohol:</strong> Avoid for 48 hours as it interferes with medication and healing.</li>
                        </ul>

                        <hr className="my-10 border-slate-200 dark:border-white/10" />

                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl text-center">
                            <h3 className="mt-0">❓ Still in Pain?</h3>
                            <p className="mb-6">
                                If you have severe pain that throbs even after taking medication, or if you notice a bad smell coming from your mouth, you might have a Dry Socket. This needs quick attention.
                            </p>
                            <Link href="/emergency" className="inline-block px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
                                Get Emergency Help Now
                            </Link>
                            <p className="mt-4 text-sm text-slate-500">
                                Serving Nallagandla, Tellapur, and Gopanpally.
                            </p>
                        </div>
                    </div>

                </div>
            </article>
            <Footer />
        </main>
    );
}
