'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, CheckCircle2, Bot } from 'lucide-react';

import { useLocation } from '@/context/LocationContext';

interface HeroProps {
  onBookClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const { isLocal } = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);



  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Optimization: Cap pixel ratio to save GPU/CPU on hi-res screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles: any[] = [];
    let animationFrameId: number;

    const initCanvas = () => {
      // prevent forced reflow by reading layout inside rAF
      requestAnimationFrame(() => {
        if (!canvas) return;
        width = canvas.width = canvas.offsetWidth * dpr;
        height = canvas.height = canvas.offsetHeight * dpr;

        // Optimization: Reduce particle count from 40 to 25
        particles = Array.from({ length: 25 }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          orbit: Math.random() * 120 + 40,
          angle: Math.random() * Math.PI * 2
        }));

        draw();
      });
    };

    function draw() {
      if (!context || !canvas) return;
      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = 'lighter';

      particles.forEach((p) => {
        p.angle += 0.002;
        p.x += p.speedX + Math.cos(p.angle) * 0.6;
        p.y += p.speedY + Math.sin(p.angle) * 0.6;

        if (p.x < -p.orbit) p.x = width + p.orbit;
        if (p.x > width + p.orbit) p.x = -p.orbit;
        if (p.y < -p.orbit) p.y = height + p.orbit;
        if (p.y > height + p.orbit) p.y = -p.orbit;

        const gradient = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.orbit);
        gradient.addColorStop(0, 'rgba(84, 179, 255, 0.65)');
        gradient.addColorStop(1, 'rgba(14, 21, 48, 0)');

        context.fillStyle = gradient;
        context.fillRect(p.x - p.orbit, p.y - p.orbit, p.orbit * 2, p.orbit * 2);

        context.fillStyle = 'rgba(255, 158, 94, 0.26)';
        context.beginPath();
        context.arc(p.x, p.y, p.size * 1.6, 0, Math.PI * 2);
        context.fill();
      });

      context.restore();
      animationFrameId = requestAnimationFrame(draw);
    }

    // Optimization: Delay start to allow LCP to paint first
    const startTimeout = setTimeout(() => {
      initCanvas();
    }, 1500);

    const handleResize = () => {
      requestAnimationFrame(() => {
        // Re-read dimensions on resize (forced reflow is acceptable here as it is user-initiated)
        if (!canvas) return;
        width = canvas.width = canvas.offsetWidth * dpr;
        height = canvas.height = canvas.offsetHeight * dpr;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(startTimeout);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">

      {/* Dynamic Visual Particle Canvas */}
      <canvas ref={canvasRef} id="heroCanvas" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Block */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-black text-slate-700 dark:text-cyan-400 uppercase tracking-widest">
                Heart of Nallagandla (Opp. Citizens)
              </span>
            </div>

            <h1 className="text-5xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
              <span className="sr-only">Best Dentist in Nallagandla</span>
              {isLocal ? (
                <>
                  Nallagandla&apos;s <span className="text-blue-600">Most Trusted</span> <br />
                  Family Dental Care.
                </>
              ) : (
                "Trusted Family Dentist."
              )}
            </h1>

            <p className="text-[13px] md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-bold uppercase tracking-tight max-w-lg mb-8 opacity-0 animate-fade-in [animation-delay:600ms]">
              Dr. Dhivakaran&apos;s Owner-Operated Clinic.<br className="hidden md:block" />
              Trusted family dentistry with advanced surgical care and microscopic precision in Nallagandla.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full flex-wrap">
              <button onClick={onBookClick} className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase text-xs shadow-2xl transition-all hover:-translate-y-1">
                Book Surgery Session
              </button>

              <Link href="/healthflo-ai" className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-2xl font-black uppercase text-xs shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <Bot size={18} className="group-hover:animate-bounce" /> Neo AI Check
              </Link>

              <a href="tel:+918610425342" className="px-10 py-5 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2">
                <Phone size={16} /> Contact Specialist
              </a>
            </div>

            {/* App Store Logos */}
            <div className="flex flex-wrap gap-4 mt-8 relative z-30">
              <a href="https://play.google.com/store/apps/details?id=com.noble_dental_care" target="_blank" rel="noopener noreferrer" className="store-link py-1 min-h-[48px] flex items-center" aria-label="Get it on Google Play">
                {/* Google Play Badges */}
                <Image
                  src="/images/google-play-store-download-button-in-black.webp"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="store-badge block dark:hidden"
                  priority
                />
                <Image
                  src="/images/google-play-store-download-button-in-white-color.webp"
                  alt="Get it on Google Play"
                  width={115}
                  height={40}
                  className="store-badge hidden dark:block"
                  priority
                />
              </a>
              <a href="#" className="store-link py-1 min-h-[48px] flex items-center" aria-label="Download on the App Store">
                {/* App Store Badges */}
                <Image
                  src="/images/apple-app-store-black.webp"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="store-badge block dark:hidden"
                  priority
                />
                <Image
                  src="/images/apple-app-store-white.webp"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="store-badge hidden dark:block"
                  priority
                />
              </a>
            </div>
          </div>

          {/* Right: The "Adidas-Style" Clinical Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="adidas-card">
              <div className="card-head">
                <Image
                  src="/assets/images/treatments/whitening-hyderabad.webp"
                  alt="Clinical Background"
                  fill
                  className="surgical-video object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 450px"
                  priority
                />
                <Image
                  src="/images/dentalcare.nallagandla.png"
                  alt="Logo"
                  width={1479}
                  height={1178}
                  className="logo w-[60px] h-auto object-contain"
                  sizes="60px"
                  quality={75}
                  priority
                />
                <h2>ITI_SLActive <span className="light">TITANIUM</span></h2>
                <p className="subtitle">Swiss Grade Implant</p>

                <Image
                  className="product-pop"
                  src="/assets/images/hero-implant-optimized.png"
                  alt="Swiss Implant System"
                  width={300}
                  height={300}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                  fetchPriority="high" // [SEO] LCP Optimization
                  unoptimized={false}
                />

                <span className="nmd">ITI</span>
              </div>

              <div className="card-body">
                <section>
                  <h3>Straumann ITI <span className="badge bg-slate-900 text-white opacity-100 font-black">New</span></h3>
                  <p>Swiss-engineered SLActive® surface technology ensures 50% faster biological bone healing.</p>
                </section>

                <section>
                  <div className="rating">
                    {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    <Star size={14} className="opacity-30" />
                  </div>
                </section>

                <section>
                  <span className="size-label text-slate-700 dark:text-slate-300 font-bold">Implant System</span>
                  <div className="number-options">
                    <span>Noble</span>
                    <span>Zimmer</span>
                    <span className="selected">ITI</span>
                    <span>GC</span>
                    <span>Bio</span>
                  </div>
                </section>

                <section className="relative">
                  <span className="colours-label text-slate-700 dark:text-slate-300 font-bold">Material Grade</span>
                  <div className="colorway">
                    <div className="dot bg-slate-300" title="Titanium G5"></div>
                    <div className="dot bg-white border border-slate-200" title="Zirconia"></div>
                    <div className="dot bg-slate-800 border border-slate-600 shadow-inner" title="Roxolid"></div>
                  </div>

                  <div className="price-badge bg-blue-800 text-white opacity-100 font-black">
                    <span id="amount">₹ 25,000</span>
                  </div>
                </section>
              </div>
            </div>

            {/* Verified Success Decor */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/5 flex items-center gap-4 animate-float">
              <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Surgery Success</p>
                <p className="text-lg font-black text-slate-900 dark:text-white">99.8% Verified</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
