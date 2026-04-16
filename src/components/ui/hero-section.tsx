'use client';

import React from 'react';
import { Phone, Star, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

// Wind/airflow SVG matching the ProCool logo icon
function WindIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14 Q28 14 36 14 Q48 14 52 8 Q56 2 50 2 Q44 2 44 8" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <line x1="8" y1="28" x2="58" y2="28" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="14" y1="28" x2="14" y2="28" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M8 42 Q32 42 44 42 Q56 42 60 48 Q64 54 58 54 Q52 54 52 48" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <line x1="8" y1="14" x2="8" y2="42" stroke="transparent"/>
    </svg>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <section className="relative w-full min-h-screen bg-[#0B1628] text-sm overflow-hidden">

      {/* Subtle radial glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(41,171,226,0.12),transparent_70%)]" />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-6 py-5 md:px-16 lg:px-24 xl:px-32 w-full">

          {/* Logo */}
          <a href="/" aria-label="ProCool HVAC home" className="flex items-center gap-3">
            <WindIcon className="w-9 h-7" />
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-xl italic tracking-tight">ProCool</span>
              <span className="text-[#29ABE2] font-bold text-[11px] tracking-[0.2em] uppercase">HVAC Services</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div
            id="menu"
            ref={menuRef}
            className={[
              'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-[#0B1628]/98 max-md:backdrop-blur',
              'flex items-center gap-8 font-medium text-white/80',
              'max-md:flex-col max-md:justify-center',
              menuOpen ? 'max-md:w-full' : 'max-md:w-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#" className="hover:text-[#29ABE2] transition-colors">Home</a>

            <div className="relative group flex items-center gap-1 cursor-pointer">
              <span className="hover:text-[#29ABE2] transition-colors">Services</span>
              <ChevronDown className="w-4 h-4" aria-hidden />
              <div className="absolute bg-[#0f1e35] border border-white/10 text-white/80 font-normal flex flex-col gap-2 w-52 rounded-xl p-4 top-8 left-0 opacity-0 pointer-events-none translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 shadow-2xl z-50">
                <a href="#" className="hover:translate-x-1 hover:text-[#29ABE2] transition-all">AC Repair</a>
                <a href="#" className="hover:translate-x-1 hover:text-[#29ABE2] transition-all">AC Installation</a>
                <a href="#" className="hover:translate-x-1 hover:text-[#29ABE2] transition-all">Tune-Ups</a>
                <a href="#" className="hover:translate-x-1 hover:text-[#29ABE2] transition-all">Duct Cleaning</a>
              </div>
            </div>

            <a href="#" className="hover:text-[#29ABE2] transition-colors">Reviews</a>
            <a href="#" className="hover:text-[#29ABE2] transition-colors">About</a>

            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop CTA */}
          <a
            href="tel:3058427700"
            className="hidden md:flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1e96cc] text-white px-6 py-3 rounded-full font-bold transition shadow-lg shadow-[#29ABE2]/20"
          >
            <Phone className="w-4 h-4" />
            (305) 842-7700
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* ── Hero Body ── */}
        <div className="flex flex-col items-center justify-center flex-1 px-6 py-16 text-center">

          {/* Announcement pill */}
          <div className="flex items-center gap-2 border border-[#29ABE2]/30 bg-[#29ABE2]/10 rounded-full px-4 py-2 mb-10">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#29ABE2] text-[#29ABE2]" />
              ))}
            </div>
            <span className="text-white/90 font-semibold text-sm">4.9 Stars</span>
            <span className="text-white/30 text-sm">·</span>
            <span className="text-white/60 text-sm">187 Google Reviews</span>
            <button className="flex items-center gap-1 text-[#29ABE2] font-semibold text-sm ml-1">
              <span>See Reviews</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white max-w-4xl leading-[1.05] tracking-tight mb-6">
            Fast, Reliable HVAC
            <span className="block text-[#29ABE2] italic">Serving Miami Since 2011</span>
          </h1>

          {/* Cyan divider line — like the logo */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#29ABE2] to-transparent mb-6" />

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/60 max-w-xl mb-3">
            AC repair, installation, tune-ups & duct cleaning.
            Miami-Dade and Broward County. Same-day service.
          </p>

          <p className="text-xs text-white/30 mb-10 tracking-widest uppercase font-semibold">
            Miami-Dade · Broward County · Licensed & Insured
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#estimate"
              className="bg-[#F39C12] hover:bg-[#d4880f] text-white px-8 py-4 rounded-full font-bold text-base transition shadow-xl shadow-[#F39C12]/30 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get My Free Estimate
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 border border-white/20 hover:border-[#29ABE2]/60 text-white/80 hover:text-white px-8 py-4 rounded-full font-semibold text-base transition hover:bg-white/5"
            >
              See Our Services
              <ChevronRight className="w-4 h-4 text-white/40" />
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-10 mt-20 pt-8 border-t border-white/10 w-full max-w-2xl">
            <div className="text-center">
              <p className="text-3xl font-black text-white">14+</p>
              <p className="text-white/40 text-xs tracking-wide uppercase mt-1">Years in Business</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">6</p>
              <p className="text-white/40 text-xs tracking-wide uppercase mt-1">Expert Technicians</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-black text-[#29ABE2]">4.9★</p>
              <p className="text-white/40 text-xs tracking-wide uppercase mt-1">Google Rating</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">$380</p>
              <p className="text-white/40 text-xs tracking-wide uppercase mt-1">Avg. Job Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
