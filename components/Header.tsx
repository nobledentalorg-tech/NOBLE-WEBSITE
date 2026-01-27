'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, CalendarCheck, ShoppingBag, Activity, Globe, ShieldCheck, Sparkles, Heart, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onBookClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedTreatment, setExpandedTreatment] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Prevent hydration mismatch for theme icons
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;

  const treatmentCategories = [
    {
      title: "Pain & Surgery",
      icon: <Zap size={18} className="text-red-500" />,
      description: "Urgent & Surgical Care",
      links: [
        { name: "Microscopic RCT", href: "/treatments/root-canal" },
        { name: "Wisdom Tooth Surgery", href: "/treatments/wisdom-tooth-surgery" },
        { name: "Atraumatic Extraction", href: "/treatments/tooth-extraction" },
        { name: "Emergency Dentistry", href: "/treatments/emergency-dentistry" },
        { name: "Gum Disease Treatment", href: "/treatments/gum-disease" },
      ]
    },
    {
      title: "Restoration",
      icon: <ShieldCheck size={18} className="text-blue-500" />,
      description: "Fix & Rebuild",
      links: [
        { name: "Dental Implants", href: "/treatments/dental-implants" },
        { name: "Crowns & Bridges", href: "/treatments/crowns-bridges" },
        { name: "Dentures", href: "/treatments/dentures" },
        { name: "Full Mouth Rehab", href: "/treatments/full-mouth-rehab" },
        { name: "Invisible Fillings", href: "/treatments/tooth-fillings" },
      ]
    },
    {
      title: "Cosmetic",
      icon: <Sparkles size={18} className="text-amber-500" />,
      description: "Smile Aesthetics",
      links: [
        { name: "Smile Designing", href: "/treatments/smile-design" },
        { name: "Veneers / Laminates", href: "/treatments/veneers" },
        { name: "Teeth Whitening", href: "/treatments/teeth-whitening" },
        { name: "Invisalign", href: "/treatments/invisalign" },
        { name: "Cosmetic Bonding", href: "/treatments/cosmetic-bonding" },
      ]
    },
    {
      title: "Family Hub",
      icon: <Heart size={18} className="text-pink-500" />,
      description: "Kids & Wellness",
      links: [
        { name: "Pediatric Dentistry", href: "/treatments/kids-dentistry" },
        { name: "Prenatal Wellness", href: "/treatments/pregnancy-dental-care" },
        { name: "Guided Biofilm Therapy", href: "/treatments/scaling-whitening" },
        { name: "Fluoride & Sealants", href: "/treatments/preventive-sealants" },
      ]
    },
    {
      title: "Alignment",
      icon: <Activity size={18} className="text-purple-500" />,
      description: "Ortho Hub",
      links: [
        { name: "Braces & Ortho", href: "/treatments/braces" },
        { name: "Clear Aligners", href: "/treatments/invisalign" },
        { name: "Interceptive Ortho", href: "/treatments/pre-ortho" },
      ]
    },
    {
      title: "Advanced",
      icon: <Globe size={18} className="text-emerald-500" />,
      description: "Specialized Care",
      links: [
        { name: "Jaw Surgery", href: "/treatments/orthognathic-surgery" },
        { name: "Trauma Care", href: "/treatments/emergency-trauma" },
        { name: "TMJ Disorders", href: "/treatments/tmj-disorders" },
        { name: "Laser Dentistry", href: "/treatments/laser-dentistry" },
        { name: "Oral Medicine", href: "/treatments/oral-medicine" },
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-out ${isScrolled
        ? 'bg-white/70 dark:bg-[#0B1019]/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-white/10 py-3'
        : 'bg-transparent py-4 md:py-6'
        }`}
    >
      <div className="max-w-[95rem] mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative w-10 md:w-12 h-10 transition-all duration-500 group-hover:scale-110">
              {/* Note: Ensure this image exists in your /public/images folder */}
              <Image
                src="/images/dentalcare.nallagandla.png"
                alt="Noble Dental"
                width={48}
                height={40}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <div className="flex flex-col border-l-2 border-slate-200 dark:border-white/10 pl-3">
              <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">NOBLE <span className="text-blue-600 dark:text-cyan-400">DENTAL</span></span>
              <span className="text-[9px] font-black tracking-[0.3em] text-slate-500 dark:text-slate-400 uppercase">MULTISPECIALITY DENTAL CARE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center flex-nowrap gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/50 dark:border-white/10 backdrop-blur-md">
            <Link
              href="/"
              className={`relative px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${isActive('/') ? 'text-white bg-blue-600 shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              Home
            </Link>
            {/* Treatments Mega-Menu */}
            <div className="group/mega">
              <Link
                href="/treatments"
                className={`relative px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-full flex items-center gap-1.5 ${isActive('/treatments') ? 'text-white bg-blue-600 shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                Treatments <ChevronDown size={14} className="group-hover/mega:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Mega Menu Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 w-[90vw] max-w-5xl">
                <div className="bg-white dark:bg-[#0B1019] rounded-[2.5rem] border border-slate-200/50 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {treatmentCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center">
                            {cat.icon}
                          </div>
                          <div>
                            <h4 className="text-[13px] font-black uppercase tracking-wider text-slate-900 dark:text-white">{cat.title}</h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter opacity-60">{cat.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 pl-1.5 border-l border-slate-100 dark:border-white/5 ml-5">
                          {cat.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link
                                href={link.href}
                                className="text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 group/item"
                              >
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 group-hover/item:bg-blue-600 transition-colors" />
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <p className="text-[10px] text-slate-400 font-medium">✨ Powered by Dr. Dhivakaran&apos;s Advanced Protocols</p>
                    <Link href="/treatments" className="text-[10px] font-black text-blue-600 dark:text-cyan-400 hover:underline uppercase tracking-widest">View All 40+ Protocols</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/patient-safety"
              className={`relative px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${isActive('/patient-safety') ? 'text-white bg-blue-600 shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              Patient Safety
            </Link>
            <Link
              href="/team"
              className={`relative px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${isActive('/team') ? 'text-white bg-blue-600 shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              Our Team
            </Link>
            <Link
              href="/insurance"
              className={`px-4 py-2.5 text-[12px] font-black uppercase tracking-wider rounded-full flex items-center gap-2 transition-all ${isActive('/insurance') ? 'bg-indigo-600 text-white shadow-lg' : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                }`}
            >
              <ShieldCheck size={14} /> Insurance
            </Link>
            <Link
              href="/healthflo-ai"
              className={`px-4 py-2.5 text-[12px] font-black uppercase tracking-wider rounded-full flex items-center gap-2 transition-all ${isActive('/healthflo-ai') ? 'bg-blue-600 text-white' : 'text-blue-600 dark:text-cyan-400'
                }`}
            >
              <Activity size={14} /> AI OS
            </Link>
            <Link
              href="/international"
              className={`px-4 py-2.5 text-[12px] font-black uppercase tracking-wider rounded-full flex items-center gap-2 transition-all ${isActive('/international') ? 'bg-amber-100 text-amber-700' : 'text-amber-600 dark:text-amber-500'
                }`}
            >
              <Globe size={14} /> Global Care
            </Link>
            <Link
              href="/case-studies"
              className={`px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider rounded-full transition-all ${isActive('/case-studies') ? 'bg-purple-100 text-purple-700' : 'text-slate-600 dark:text-slate-400 hover:text-purple-600'
                }`}
            >
              Cases
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider rounded-full transition-all ${isActive('/blog') ? 'bg-pink-100 text-pink-700' : 'text-slate-600 dark:text-slate-400 hover:text-pink-600'
                }`}
            >
              Blog
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4">

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-white/10"
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <button
              onClick={onBookClick}
              className="hidden sm:flex h-12 items-center gap-2 rounded-2xl bg-blue-600 px-7 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl hover:-translate-y-1 transition-all"
            >
              <CalendarCheck size={18} /> Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Refined */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="xl:hidden fixed inset-0 z-[100] bg-white/95 dark:bg-[#0B1019]/95 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col pt-24 pb-10 px-6">

              <div className="space-y-6">
                {/* Primary Nav Links */}
                <div className="flex flex-col gap-1">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-slate-900 dark:text-white py-2">
                    Home
                  </Link>

                  {/* Expandable Treatments Section */}
                  <div className="border-y border-slate-100 dark:border-white/5 py-4 my-2">
                    <button
                      onClick={() => setExpandedTreatment(!expandedTreatment)}
                      className="flex items-center justify-between w-full text-3xl font-black text-slate-900 dark:text-white"
                    >
                      Treatments
                      <ChevronDown size={24} className={`transition-transform duration-300 ${expandedTreatment ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {expandedTreatment && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 pb-2 grid grid-cols-1 gap-4">
                            {treatmentCategories.map((cat, idx) => (
                              <div key={idx} className="bg-slate-50 dark:bg-white/5 p-4 rounded-3xl border border-slate-200/50 dark:border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center">
                                    {cat.icon}
                                  </div>
                                  <span className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{cat.title}</span>
                                </div>
                                <div className="grid grid-cols-1 gap-2 pl-11">
                                  {cat.links.slice(0, 3).map((link, lIdx) => (
                                    <Link
                                      key={lIdx}
                                      href={link.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-xs font-bold text-slate-500 dark:text-slate-400"
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                  <Link href="/treatments" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-black text-blue-600 dark:text-cyan-400 mt-1 uppercase">
                                    View Link +
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/patient-safety" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 dark:text-slate-200 py-2">
                    Patient Safety
                  </Link>
                  <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 dark:text-slate-200 py-2">
                    Our Team
                  </Link>
                </div>

                {/* Secondary Feature Links (Grid) */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link href="/healthflo-ai" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl flex flex-col gap-2">
                    <Activity size={20} className="text-blue-600" />
                    <span className="font-bold text-blue-800 dark:text-blue-300">Dental AI</span>
                  </Link>
                  <Link href="/insurance" onClick={() => setIsMobileMenuOpen(false)} className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl flex flex-col gap-2">
                    <ShieldCheck size={20} className="text-indigo-600" />
                    <span className="font-bold text-indigo-800 dark:text-indigo-300">Insurance</span>
                  </Link>
                  <Link href="/international" onClick={() => setIsMobileMenuOpen(false)} className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-2xl flex flex-col gap-2">
                    <Globe size={20} className="text-amber-600" />
                    <span className="font-bold text-amber-800 dark:text-amber-300">Global Patients</span>
                  </Link>
                  <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-2xl flex flex-col gap-2">
                    <Sparkles size={20} className="text-pink-600" />
                    <span className="font-bold text-pink-800 dark:text-pink-300">Blog</span>
                  </Link>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => { setIsMobileMenuOpen(false); onBookClick?.(); }}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl mt-6"
                >
                  Book Appointment
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
