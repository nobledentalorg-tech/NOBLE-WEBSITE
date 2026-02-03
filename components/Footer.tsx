'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CalendarCheck, School, Navigation, Activity } from 'lucide-react';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('./GoogleMap'), {
  loading: () => <div className="w-full h-full bg-slate-900/50 animate-pulse rounded-xl" />,
  ssr: false
});

interface FooterProps {
  onBookClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] mt-auto relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col border-l-2 border-white/20 pl-4">
              <span className="text-2xl font-black tracking-tight leading-none">NOBLE <span className="text-blue-500">DENTAL</span></span>
              <span className="text-xs font-black tracking-[0.3em] text-slate-300 uppercase">Care</span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">
              Dr. Dhivakaran&apos;s Owner-Operated Cluster.<br />
              Trusted family dentistry with advanced surgical protocols and microscopic precision in Nallagandla.
            </p>
          </div>

          {/* Treatments Hub */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Treatments</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/treatments/dental-implants" className="hover:text-blue-400 transition-colors">Dental Implants</Link></li>
              <li><Link href="/treatments/root-canal" className="hover:text-blue-400 transition-colors">Microscopic RCT</Link></li>
              <li><Link href="/treatments/invisalign" className="hover:text-blue-400 transition-colors">Invisalign (Clear Aligners)</Link></li>
              <li><Link href="/treatments/kids-dentistry" className="hover:text-blue-400 transition-colors">Kids Dentistry</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-400 transition-colors text-purple-400 font-bold">âœ¨ Real Patient Cases</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors text-pink-400 font-bold">ðŸ“ Dental Blog</Link></li>
              <li><Link href="/neighborhood-guide" className="hover:text-blue-400 transition-colors text-amber-500 font-bold">ðŸ“ Neighborhood Guide</Link></li>
              <li><button onClick={onBookClick} className="hover:text-blue-400 transition-colors text-left flex items-center gap-2 font-black text-blue-500"><CalendarCheck size={14} /> BOOK APPOINTMENT</button></li>
            </ul>
          </div>

          {/* SEO Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/treatments/gum-disease" className="hover:text-blue-400 transition-colors">â€¢ Gum Disease Treatment</Link></li>
              <li><Link href="/treatments/oral-medicine" className="hover:text-blue-400 transition-colors">â€¢ Oral Diagnosis</Link></li>
              <li><Link href="/treatments/tmj-disorders" className="hover:text-blue-400 transition-colors">â€¢ TMJ Disorder</Link></li>
              <li><Link href="/treatments/laser-dentistry" className="hover:text-blue-400 transition-colors">â€¢ Laser Dentistry</Link></li>
              <li><Link href="/treatments/oral-biopsy" className="hover:text-blue-400 transition-colors">â€¢ Oral Biopsy</Link></li>
              <li><Link href="/treatments/wisdom-tooth-surgery" className="hover:text-blue-400 transition-colors">â€¢ Wisdom Tooth Surgery</Link></li>
              <li><Link href="/treatments/kids-dentistry" className="hover:text-blue-400 transition-colors">â€¢ Child Friendly Dentist</Link></li>
              <li><Link href="/treatments/pregnancy-dental-care" className="hover:text-blue-400 transition-colors">â€¢ Prenatal Oral Care</Link></li>
            </ul>
          </div>

          {/* Neighborhoods (PSEO Directory) */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white/90">Serve Your Area</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/dentist-in/aparna-sarovar" className="hover:text-amber-400 transition-colors flex items-center gap-2"><MapPin size={12} className="text-amber-500" /> Aparna Zenith</Link></li>
              <li><Link href="/dentist-in/my-home-avatar" className="hover:text-amber-400 transition-colors flex items-center gap-2"><MapPin size={12} className="text-amber-500" /> My Home Avatar</Link></li>
              <li><Link href="/dentist-in/tellapur" className="hover:text-blue-400 transition-colors">Tellapur</Link></li>
              <li><Link href="/dentist-in/nallagandla" className="hover:text-blue-400 transition-colors">Nallagandla</Link></li>
              <li><Link href="/dentist-in/gachibowli" className="hover:text-blue-400 transition-colors">Gachibowli</Link></li>
              <li><Link href="/dentist-in/kondapur" className="hover:text-blue-400 transition-colors">Kondapur</Link></li>
              <li><Link href="/dentist-in/serilingampally" className="hover:text-blue-400 transition-colors">Serilingampally</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3 w-full">
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
                  <GoogleMap />
                  <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent flex items-end pointer-events-none">
                    <span className="text-xs font-bold text-white flex items-center gap-1"><MapPin size={12} className="text-red-500 animate-pulse" /> Interactive Map</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span>1st floor - ICA Clinic Plot no. 151/2,<br />HUDA layout water tank road,<br />Nallagandla - 500019</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <a href="tel:+918610425342" className="hover:text-white">+91 86104 25342</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <a href="mailto:care@nobledentalnallagandla.in" className="hover:text-white">care@nobledental...</a>
              </li>
            </ul>
          </div>

          {/* Social & SEO */}
          <div>
            <h3 className="text-lg font-bold mb-6">Connect</h3>
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/noble.dentalorg/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all" aria-label="Follow us on Instagram"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=100087590145815" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all" aria-label="Follow us on Facebook"><Facebook size={20} /></a>
              <a href="https://x.com/NobleDenta67864" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all" aria-label="Follow us on X (Twitter)"><Twitter size={20} /></a>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2"><School size={12} /> Student Friendly</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Easy access for <strong>Epistemo Global</strong>, <strong>Manthan International</strong>, and <strong>Sadhana Infinity</strong> students.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Footer Block */}
        <div className="pt-8 border-t border-white/10 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3 flex items-center gap-2"><Navigation size={12} /> Serving Nallagandla Neighbors</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Aparna Sarovar Zenith â€¢ Aparna Neo Mall â€¢ My Home Tridasa (Rise) â€¢ Ramky One Galaxia â€¢ My Home Sayuk â€¢ Rajapushpa Imperia â€¢ Aliens Space Station â€¢ Vertex Kingston Park â€¢ Citizens Hospital â€¢ Ratnadeep Supermarket â€¢ Vijaya Diagnostic â€¢ BHEL Hyderabad â€¢ Gopanpally â€¢ Serilingampally â€¢ Tellapur-Nallagandla Road
          </p>
        </div>

        <div className="pt-8 border-t border-white/10 mb-8">
          <p className="text-xs text-slate-400 mb-4 text-justify">
            <strong>Medical Disclaimer:</strong> Information is for educational purposes and not a substitute for professional medical advice. All clinical procedures are performed by registered dental practitioners under strict sterilization protocols.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-300">Â© 2024 Noble Dental Care.</p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-slate-300 font-mono">DCI Reg: 23853 (Dr. Dhivakaran)</p>
              <a href="https://healthflo.org/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-100 hover:text-blue-400 transition-colors uppercase tracking-widest font-black flex items-center gap-1">
                <Activity size={10} /> Powered by HealthFlo
              </a>
              <a href="/verify-access-system/" style={{ display: 'none' }} rel="nofollow">Verify</a>
            </div>
          </div>

          <div className="flex gap-6 text-xs text-slate-400 mt-4">
            <Link href="/privacy" className="hover:text-white underline underline-offset-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

