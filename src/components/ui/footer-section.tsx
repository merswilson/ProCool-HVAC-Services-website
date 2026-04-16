import { Phone, Mail, MapPin, Star } from 'lucide-react';

function WindIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14 Q28 14 36 14 Q48 14 52 8 Q56 2 50 2 Q44 2 44 8" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <line x1="8" y1="28" x2="58" y2="28" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M8 42 Q32 42 44 42 Q56 42 60 48 Q64 54 58 54 Q52 54 52 48" stroke="#29ABE2" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-[#060e1a] text-white px-6 md:px-16 lg:px-24 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-5">
              <WindIcon className="w-9 h-7" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl italic tracking-tight">ProCool</span>
                <span className="text-[#29ABE2] font-bold text-[11px] tracking-[0.2em] uppercase">HVAC Services</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              Miami's most trusted HVAC company. Serving Miami-Dade and Broward County since 2011 — same-day service, licensed and insured.
            </p>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F39C12] text-[#F39C12]" />
              ))}
              <span className="text-white/60 text-sm ml-2">4.9 · 187 Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white/40 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['AC Repair', 'AC Installation', 'Tune-Ups', 'Duct Cleaning'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 hover:text-[#29ABE2] text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white/40 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:3058427700" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-[#F39C12] flex-shrink-0" />
                  (305) 842-7700
                </a>
              </li>
              <li>
                <a href="mailto:carlos@procoolhvac.com" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 text-[#F39C12] flex-shrink-0" />
                  carlos@procoolhvac.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#F39C12] flex-shrink-0 mt-0.5" />
                Miami, FL 33101<br />Miami-Dade · Broward County
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ProCool HVAC Services. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Miami, FL · Licensed & Insured · FL License #CAC123456
          </p>
        </div>
      </div>
    </footer>
  );
}
