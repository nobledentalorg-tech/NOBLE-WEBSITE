'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
   ShoppingBag, Search, Info, X, CheckCircle2,
   Trash2, Plus, Minus, Lock, Phone, ArrowRight, HelpCircle, ListChecks, ThumbsUp, ThumbsDown
} from 'lucide-react';
import { nobleProducts, ProductData } from '@/data/products';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import BookingModal from '@/components/BookingModal';
import { PharmacologyAnimation } from '@/components/PharmacologyAnimation';
import { motion, AnimatePresence } from 'framer-motion';

// Styles for the 3D card effect
const effectStyles = `
  .product-3d-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    perspective: 2500px;
    height: 320px;
    width: 100%;
    border-radius: 2rem;
    overflow: visible;
  }

  .product-3d-wrapper {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 2rem;
    overflow: hidden;
  }

  @media (hover: hover) {
    .product-3d-card:hover .product-3d-wrapper {
      transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
      box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.4);
    }

    .product-3d-card:hover .product-3d-title {
      transform: translate(-50%, -100px) translate3d(0%, 0, 100px);
    }

    .product-3d-card:hover .product-3d-character {
      opacity: 1;
      transform: translate3d(0%, -15%, 150px) scale(1.3);
    }
  }

  /* Ensure character is visible if hover is not supported or for accessibility */
  @media (hover: none) {
    .product-3d-character {
      opacity: 1;
      transform: scale(1.1);
      bottom: 5%;
    }
    .product-3d-title {
      transform: translate(-50%, -120%) scale(0.8);
    }
  }
`;

interface CartItem extends ProductData {
   quantity: number;
}

// Metadata removed for client component

export default function ProductsRefactored({ dbProducts = [] }: { dbProducts?: any[] }) {
   // Merge static products with DB products
   // Priority: DB products come first, then static
   const [inventory] = useState<any[]>(() => {
       const all = [...dbProducts, ...nobleProducts];
       // Sort: Available products first
       return all.sort((a, b) => {
           if (a.available === b.available) return 0;
           return a.available ? -1 : 1;
       });
   });
   
   const [searchQuery, setSearchQuery] = useState('');
   const [activeCategory, setActiveCategory] = useState('All');
   const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
   const [activeTab, setActiveTab] = useState('Introduction');
   const [cart, setCart] = useState<CartItem[]>([]);
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

   const filteredProducts = inventory.filter((p: ProductData) => {
      const catMatch = activeCategory === 'All' || p.category?.toLowerCase() === activeCategory.toLowerCase();
      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         (p.brand || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
         (p.healthIssue || '').toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && searchMatch;
   });


   const addToCart = (product: ProductData) => {
      setCart((prev: CartItem[]) => {
         const existing = prev.find((item: CartItem) => item.id === product.id);
         if (existing) return prev.map((item: CartItem) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
         return [...prev, { ...product, quantity: 1 }];
      });
      setIsCartOpen(true);
   };

   const removeFromCart = (id: string) => {
      setCart((prev: CartItem[]) => prev.filter((item: CartItem) => item.id !== id));
   };

   const updateQuantity = (id: string, delta: number) => {
      setCart((prev: CartItem[]) => prev.map((item: CartItem) => {
         if (item.id === id) {
            const newQty = Math.max(1, item.quantity + delta);
            return { ...item, quantity: newQty };
         }
         return item;
      }));
   };

   const totalCart = cart.reduce((acc: number, item: CartItem) => acc + (item.clinicPrice * item.quantity), 0);


   return (
      <div className="pt-32 pb-24 min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans transition-colors duration-500">
         <style jsx global>{effectStyles}</style>

         <div className="max-w-7xl mx-auto px-6">

            <header className="mb-12 flex justify-between items-end">
               <div>
                  <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Pharmacy Kit.</h1>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mt-1">Group Pharma Official Link</p>
               </div>
               <div className="flex gap-4">
                  <button onClick={() => setIsCartOpen(true)} className="relative p-4 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 transition-colors">
                     <ShoppingBag size={24} />
                     {cart.length > 0 && <span className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse">{cart.length}</span>}
                  </button>
               </div>
            </header>

            <div className="sticky top-20 z-[40] bg-[#F8FAFC]/80 dark:bg-[#020617]/80 backdrop-blur-xl py-6 flex flex-col gap-6 mb-12 border-b border-slate-200 dark:border-white/5">
               <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative group">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                     <input
                        type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search medicines (Resteclin, Enafix, Shy-NM)..."
                        className="w-full bg-white dark:bg-[#151b2b] border border-slate-200 dark:border-white/5 rounded-[2rem] py-4 pl-16 pr-8 text-sm font-bold shadow-sm focus:ring-4 focus:ring-blue-600/10 outline-none transition-all dark:text-white"
                     />
                  </div>
                  <div className="flex overflow-x-auto gap-2 no-scrollbar">
                     {['All', 'Dental', 'Wellness', 'Preventive', 'Ortho'].map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/10 hover:border-blue-500'}`}>{cat}</button>
                     ))}
                  </div>
               </div>

               {/* New: Filter by Health Issue (Netmeds Style) */}
               <div className="flex flex-col gap-3">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Browse by Dental Health Issue</p>
                  <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2">
                     {['All Issues', 'Bacterial Infection', 'Hypersensitivity', 'Enamel Erosion', 'Gingivitis', 'Pain Management'].map(issue => (
                        <button 
                           key={issue} 
                           onClick={() => {
                              setActiveCategory('All'); // Reset main category
                              const filterVal = issue === 'All Issues' ? '' : issue;
                              // We use a separate state or just search query for this to keep it simple for now
                              setSearchQuery(filterVal === 'All Issues' ? '' : filterVal);
                           }} 
                           className={`px-6 py-2.5 rounded-xl text-[10px] font-bold border transition-all whitespace-nowrap flex items-center gap-2 ${searchQuery === (issue === 'All Issues' ? '' : issue) ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 border-blue-200' : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-blue-300'}`}
                        >
                           <div className={`w-1.5 h-1.5 rounded-full ${searchQuery === issue ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
                           {issue}
                        </button>
                     ))}
                  </div>
               </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 h-auto">
               {filteredProducts.map((product: ProductData, index: number) => (
                  <div key={product.id}>
                     <RevealOnScroll>
                        <div className={`bg-white dark:bg-[#151b2b] rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group relative overflow-visible ${!product.available ? 'opacity-70 grayscale-[0.5]' : ''}`}>

                        <div className="product-3d-card cursor-pointer" onClick={() => setSelectedProduct(product)}>
                           <div className="product-3d-wrapper">
                              {product.bgImage && <Image src={product.bgImage} className="product-3d-cover" alt={`${product.name} background`} width={300} height={320} unoptimized priority={index < 4} />}
                           </div>
                           {product.titleImage && <Image src={product.titleImage} className="product-3d-title" alt={`${product.name} brand logo`} width={200} height={100} unoptimized priority={index < 4} />}
                           {product.image && <Image src={product.image} className="product-3d-character" alt={`${product.name} product shot`} width={250} height={250} unoptimized priority={index < 4} />}

                           <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                              {!product.available && (
                                 <span className="px-3 py-1 bg-red-600 text-white rounded-lg text-[8px] font-black uppercase shadow-md">Out of Stock</span>
                              )}
                              {product.badges?.map((b: string) => (
                                 <span key={b} className="px-3 py-1 bg-white/90 dark:bg-black/70 rounded-lg text-[8px] font-black uppercase shadow-md dark:text-white">{b}</span>
                              ))}
                           </div>
                        </div>

                        <div className="p-8 pt-6 flex flex-col flex-1">
                           <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400 uppercase tracking-widest mb-1">{product.brand}</span>
                           <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{product.name}</h2>
                           <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 line-clamp-2">{product.subText}</p>

                           <div className="mt-auto flex items-center justify-between">
                              <div>
                                 <div className="text-2xl font-black dark:text-white">₹{product.clinicPrice}</div>
                                 {product.saving > 0 && <p className="text-[9px] font-bold text-green-500 uppercase">Save ₹{product.saving}</p>}
                              </div>
                              <div className="flex gap-2">
                                 <button onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }} className="w-10 h-10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white rounded-xl flex items-center justify-center transition-all hover:bg-slate-200">
                                    <Info size={18} />
                                 </button>
                                 {product.available ? (
                                    <button onClick={() => addToCart(product)} className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
                                       <Plus size={20} />
                                    </button>
                                 ) : (
                                    <button disabled className="w-12 h-12 bg-slate-200 dark:bg-white/5 text-slate-400 rounded-2xl flex items-center justify-center cursor-not-allowed">
                                       <ShoppingBag size={20} />
                                    </button>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </RevealOnScroll>
               </div>
            ))}
         </div>


         </div>

         {/* Product Detail Popup Modal: THE CLINICAL DOSSIER */}
         {selectedProduct && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto">
               <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={() => setSelectedProduct(null)}></div>

               <div className="relative w-full max-w-7xl bg-white dark:bg-[#0B1019] rounded-[2rem] sm:rounded-[3.5rem] shadow-4xl overflow-hidden animate-in zoom-in duration-500 flex flex-col lg:flex-row h-auto min-h-[50vh] max-h-[98vh] lg:h-[85vh]">
                  
                  {/* Left Side: Product Showcase & Pricing */}
                  <div className="lg:w-[35%] relative bg-slate-50 dark:bg-black/40 flex flex-col items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5 shrink-0">
                     <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                     
                     <div className="relative w-full aspect-square max-w-[300px] mb-8 group">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="relative z-10 object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700" unoptimized />
                     </div>

                     <div className="w-full space-y-4">
                        <div className="flex justify-between items-center bg-white dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-sm">
                           <div>
                              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Market Price</p>
                              <p className="text-lg font-bold text-slate-400 line-through">₹{selectedProduct.mrp}</p>
                           </div>
                           <div className="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
                           <div className="text-right">
                              <p className="text-[10px] font-black uppercase text-blue-600 dark:text-cyan-400 mb-1">Noble Clinic Price</p>
                              <p className="text-3xl font-black text-slate-900 dark:text-white">₹{selectedProduct.clinicPrice}</p>
                           </div>
                        </div>

                        <button onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }} className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-blue-500/40 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                           Add to Clinical Kit <ArrowRight size={18} />
                        </button>
                     </div>
                  </div>

                  {/* Right Side: Tabbed Clinical Content */}
                  <div className="lg:w-[65%] flex flex-col bg-white dark:bg-[#0B1019] overflow-hidden">
                     <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 rounded-full transition-all group z-[1001]">
                        <X size={24} className="group-hover:rotate-90 transition-transform" />
                     </button>

                     {/* Tab Headers (Netmeds Style) */}
                     <div className="px-8 lg:px-16 pt-12 border-b border-slate-100 dark:border-white/5 bg-white/50 dark:bg-transparent backdrop-blur-md sticky top-0 z-[50]">
                        <div className="mb-8">
                           <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-widest">{selectedProduct.healthIssue || 'General Care'}</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">• Verified by Noble Pharma</span>
                           </div>
                           <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-[1] tracking-tighter">{selectedProduct.name}</h2>
                           <p className="text-sm text-slate-400 uppercase font-black tracking-widest mt-1 opacity-50">{selectedProduct.brand}</p>
                        </div>

                        <div className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth">
                           {['Introduction', 'Uses', 'How it works', 'Side Effects', 'Precautions'].map((tab) => {
                              const isActive = (tab === activeTab); 
                              return (
                                 <button 
                                    key={tab} 
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${isActive ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent hover:text-slate-600 dark:hover:text-white'}`}
                                 >
                                    {tab}
                                 </button>
                                 );
                           })}
                        </div>
                     </div>

                     {/* Tab Content (Controlled by activeTab state) */}
                     <div className="flex-1 overflow-y-auto p-8 lg:p-16 no-scrollbar">
                        <AnimatePresence mode="wait">
                           <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-12"
                           >
                              {/* Section: Introduction */}
                              {activeTab === 'Introduction' && (
                                 <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400"><Info size={24} /></div>
                                       <div>
                                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Section 01</h4>
                                          <h3 className="text-xl font-black text-slate-900 dark:text-white">Pharmacological Introduction</h3>
                                       </div>
                                    </div>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic">
                                       {selectedProduct.introduction || selectedProduct.subText}
                                    </p>
                                 </section>
                              )}

                              {/* Section: Clinical Indications */}
                              {activeTab === 'Uses' && (
                                 <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400"><ListChecks size={24} /></div>
                                       <div>
                                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Section 02</h4>
                                          <h3 className="text-xl font-black text-slate-900 dark:text-white">Clinical Indications & Uses</h3>
                                       </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                       {(selectedProduct.indications as string[])?.map((ind: string, i: number) => (
                                          <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                             <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{ind}</span>
                                          </div>
                                       ))}
                                    </div>
                                 </section>
                              )}

                              {/* Section: MOA (Mechanism of Action) */}
                              {activeTab === 'How it works' && (
                                 <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400"><HelpCircle size={24} /></div>
                                       <div>
                                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Section 03</h4>
                                          <h3 className="text-xl font-black text-slate-900 dark:text-white">Mechanism of Action (MOA)</h3>
                                       </div>
                                    </div>
                                    <div className="p-8 bg-slate-900 rounded-[2.5rem] relative overflow-hidden group">
                                       <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                       <div className="relative z-10">
                                          <p className="text-blue-400 font-mono text-[10px] uppercase mb-4 tracking-[0.3em]">/// K.D. Tripathi Reference: {selectedProduct.tripathiRef || 'General Pharmacology'}</p>
                                          <p className="text-white text-lg font-bold leading-relaxed mb-6">
                                             {selectedProduct.howItWorks?.description || 'Loading pharmacological logic...'}
                                          </p>
                                          <div className="h-64 bg-black/40 rounded-2xl border border-white/10 overflow-hidden relative">
                                             {selectedProduct.howItWorks?.animationType && (
                                                <PharmacologyAnimation type={selectedProduct.howItWorks.animationType} />
                                             )}
                                          </div>
                                       </div>
                                    </div>
                                 </section>
                              )}

                              {/* Section: Safety Thresholds */}
                              {activeTab === 'Side Effects' && selectedProduct.sideEffects && (
                                 <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400"><ThumbsDown size={24} /></div>
                                       <div>
                                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Section 04</h4>
                                          <h3 className="text-xl font-black text-slate-900 dark:text-white">Safety & Side Effects</h3>
                                       </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                       <div>
                                          <h5 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Common Symptoms</h5>
                                          <ul className="space-y-3">
                                             {selectedProduct.sideEffects.common.map((s: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                                                   <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div> {s}
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
                                       <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-3xl border border-rose-100 dark:border-rose-900/20">
                                          <h5 className="text-[10px] font-black uppercase text-rose-600 mb-4 tracking-widest flex items-center gap-2">Rare & Critical Warnings</h5>
                                          <ul className="space-y-3">
                                             {selectedProduct.sideEffects.rare.map((s: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-black text-rose-600/80">
                                                   <Info size={14} /> {s}
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
                                    </div>
                                 </section>
                              )}

                              {/* Section: Precautions */}
                              {activeTab === 'Precautions' && selectedProduct.warnings && (
                                 <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400"><Lock size={24} /></div>
                                       <div>
                                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Section 05</h4>
                                          <h3 className="text-xl font-black text-slate-900 dark:text-white">Strict Physician Warnings</h3>
                                       </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                       <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                          <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2">Pregnancy</h5>
                                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{selectedProduct.warnings.pregnancy}</p>
                                       </div>
                                       <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                          <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2">Breastfeeding</h5>
                                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{selectedProduct.warnings.breastfeeding}</p>
                                       </div>
                                       <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                          <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2">Kidney Health</h5>
                                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{selectedProduct.warnings.kidney}</p>
                                       </div>
                                       <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                          <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2">Liver Function</h5>
                                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{selectedProduct.warnings.liver}</p>
                                       </div>
                                    </div>
                                 </section>
                              )}
                           </motion.div>
                        </AnimatePresence>
                        
                        {/* Summary Footer */}
                        <div className="pt-12 pb-24 border-t border-slate-100 dark:border-white/5 text-center">
                           <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">Official Noble Dental Care Pharmacy Kit // Clinical OS v2.0</p>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         )}


         {/* Cart Drawer */}
         {isCartOpen && (
            <div className="fixed inset-0 z-[1100] flex justify-end">
               <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
               <div className="relative w-full max-w-md bg-white dark:bg-[#0B1019] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
                  <header className="p-8 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-black/20">
                     <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Prescription Cart.</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{cart.length} Diagnostic Items</p>
                     </div>
                     <button onClick={() => setIsCartOpen(false)} className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><X size={24} /></button>
                  </header>

                  <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                     {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                           <ShoppingBag size={64} className="mb-6" />
                           <p className="text-lg font-bold">Your kit is empty</p>
                           <button onClick={() => setIsCartOpen(false)} className="text-blue-600 font-bold mt-4">Start browsing</button>
                        </div>
                     ) : (
                         cart.map((item: CartItem) => (
                           <div key={item.id} className="flex gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 group">
                              <div className="w-20 h-20 bg-white dark:bg-black/20 rounded-2xl p-2 shrink-0">
                                 <Image src={item.image} alt={item.name} fill className="object-contain" unoptimized />
                              </div>
                              <div className="flex-1">
                                 <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">{item.name}</h4>
                                 <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-3">{item.brand}</p>
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center bg-white dark:bg-black/40 rounded-lg border border-slate-200 dark:border-white/10 px-2 py-1 gap-4">
                                       <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-400 hover:text-blue-600 transition-colors"><Minus size={14} /></button>
                                       <span className="text-xs font-black dark:text-white">{item.quantity}</span>
                                       <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-400 hover:text-blue-600 transition-colors"><Plus size={14} /></button>
                                    </div>
                                    <span className="font-black text-slate-900 dark:text-white">₹{item.clinicPrice * item.quantity}</span>
                                 </div>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="p-2 text-slate-300 hover:text-rose-500 transition-colors self-start"><Trash2 size={16} /></button>
                           </div>
                        ))
                     )}
                  </div>

                  {cart.length > 0 && (
                     <footer className="p-8 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20">
                        <div className="flex justify-between items-center mb-8">
                           <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Payable</span>
                           <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">₹{totalCart}</span>
                        </div>
                        <div className="space-y-4">
                           <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all">
                              Finalize Prescription Order
                           </button>
                           <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                              <Lock size={10} /> Secure Checkout Protected by Healthflo OS
                           </p>
                        </div>
                     </footer>
                  )}
               </div>
            </div>
         )}

         {/* Re-using the BookingModal for Tele-consultation */}
         <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      </div>
   );
}
