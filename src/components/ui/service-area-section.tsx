import { MapPin, Check } from 'lucide-react';

const miamidade = [
  'Miami', 'Hialeah', 'Coral Gables', 'Doral', 'Homestead',
  'Kendall', 'Miami Beach', 'South Miami', 'Aventura', 'Cutler Bay',
];

const broward = [
  'Fort Lauderdale', 'Hollywood', 'Pembroke Pines', 'Miramar',
  'Coral Springs', 'Davie', 'Sunrise', 'Plantation', 'Weston', 'Hallandale Beach',
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-[#0B1628] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F39C12] font-bold text-sm uppercase tracking-widest">Where We Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            Serving All of South Florida
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            ProCool covers Miami-Dade and Broward County — same-day service available throughout the area.
          </p>
        </div>

        {/* Two county columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">

          {/* Miami-Dade */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="w-5 h-5 text-[#F39C12]" />
              <h3 className="font-black text-white text-lg">Miami-Dade County</h3>
            </div>
            <ul className="space-y-2">
              {miamidade.map((city) => (
                <li key={city} className="flex items-center gap-2 text-white/70 text-sm">
                  <Check className="w-4 h-4 text-[#29ABE2] flex-shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Broward */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="w-5 h-5 text-[#F39C12]" />
              <h3 className="font-black text-white text-lg">Broward County</h3>
            </div>
            <ul className="space-y-2">
              {broward.map((city) => (
                <li key={city} className="flex items-center gap-2 text-white/70 text-sm">
                  <Check className="w-4 h-4 text-[#29ABE2] flex-shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA bar */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-5">Not sure if we cover your area? Just call us.</p>
          <a
            href="tel:3058427700"
            className="inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#d4880f] text-white px-8 py-4 rounded-full font-bold text-base transition shadow-lg shadow-[#F39C12]/25"
          >
            <MapPin className="w-5 h-5" />
            Check My Area — Call (305) 842-7700
          </a>
        </div>
      </div>
    </section>
  );
}
