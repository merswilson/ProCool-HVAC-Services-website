'use client';

import React from 'react';
import { Snowflake, Flame, Phone, Star, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

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
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-sm overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1F5C99]/80" />

        {/* Content above overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">

          {/* Navbar */}
          <nav className="flex items-center justify-between px-6 py-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">

            {/* Logo */}
            <a href="/" aria-label="ProCool HVAC home" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20">
                <Snowflake className="w-4 h-4 text-white absolute" />
                <Flame className="w-3 h-3 text-[#F39C12] relative ml-3 mt-3" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Pro<span className="text-[#F39C12]">Cool</span> HVAC
              </span>
            </a>

            {/* Desktop Nav */}
            <div
              id="menu"
              ref={menuRef}
              className={[
                'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-[#1F5C99]/95 max-md:backdrop-blur',
                'flex items-center gap-8 font-medium text-white',
                'max-md:flex-col max-md:justify-center',
                menuOpen ? 'max-md:w-full' : 'max-md:w-0',
              ].join(' ')}
              aria-hidden={!menuOpen}
            >
              <a href="#" className="hover:text-[#F39C12] transition-colors">Home</a>

              <div className="relative group flex items-center gap-1 cursor-pointer">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" aria-hidden />
                <div className="absolute bg-white text-[#1F5C99] font-normal flex flex-col gap-2 w-52 rounded-xl p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-10 group-hover:opacity-100 transition-all duration-300 shadow-xl z-50">
                  <a href="#" className="hover:translate-x-1 hover:text-[#F39C12] transition-all font-medium">AC Repair</a>
                  <a href="#" className="hover:translate-x-1 hover:text-[#F39C12] transition-all font-medium">AC Installation</a>
                  <a href="#" className="hover:translate-x-1 hover:text-[#F39C12] transition-all font-medium">Tune-Ups</a>
                  <a href="#" className="hover:translate-x-1 hover:text-[#F39C12] transition-all font-medium">Duct Cleaning</a>
                </div>
              </div>

              <a href="#" className="hover:text-[#F39C12] transition-colors">Reviews</a>
              <a href="#" className="hover:text-[#F39C12] transition-colors">About</a>

              <button
                onClick={() => setMenuOpen(false)}
                className="md:hidden bg-white/20 hover:bg-white/30 text-white p-2 rounded-md aspect-square transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden />
              </button>
            </div>

            {/* Desktop CTA */}
            <a
              href="tel:3058427700"
              className="hidden md:flex items-center gap-2 bg-[#F39C12] hover:bg-[#d4880f] text-white px-6 py-3 rounded-full font-bold transition shadow-lg"
            >
              <Phone className="w-4 h-4" />
              (305) 842-7700
            </a>

            {/* Mobile Hamburger */}
            <button
              id="open-menu"
              onClick={() => setMenuOpen(true)}
              className="md:hidden bg-white/20 hover:bg-white/30 text-white p-2 rounded-md aspect-square transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" aria-hidden />
            </button>
          </nav>

          {/* Hero Body */}
          <div className="flex flex-col items-center justify-center flex-1 px-6 py-16 text-center">

            {/* Trust badge */}
            <div className="flex items-center gap-2 border border-white/30 bg-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F39C12] text-[#F39C12]" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4.9 Stars</span>
              <span className="text-white/60 text-sm">—</span>
              <span className="text-white/80 text-sm">187 Reviews</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white max-w-4xl leading-tight tracking-tight mb-6">
              Fast, Reliable HVAC
              <span className="block text-[#F39C12]">Serving Miami Since 2011</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4 font-light">
              AC repair, installation, tune-ups & duct cleaning — Miami-Dade and Broward County.
              Same-day service. No surprises on the bill.
            </p>

            {/* Service area pill */}
            <p className="text-sm text-white/60 mb-10 tracking-wide uppercase font-semibold">
              Miami-Dade · Broward County · Licensed & Insured
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:3058427700"
                className="bg-[#F39C12] hover:bg-[#d4880f] text-white px-8 py-4 rounded-full font-bold text-base transition shadow-xl flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get My Free Estimate
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-base transition hover:bg-white/10"
              >
                See Our Services
                <ChevronRight className="w-4 h-4 text-white/60" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/20 w-full max-w-2xl">
              <div className="text-center">
                <p className="text-3xl font-black text-white">14+</p>
                <p className="text-white/60 text-sm">Years in Business</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">6</p>
                <p className="text-white/60 text-sm">Expert Technicians</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#F39C12]">4.9★</p>
                <p className="text-white/60 text-sm">Google Rating</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">$380</p>
                <p className="text-white/60 text-sm">Avg. Job Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
