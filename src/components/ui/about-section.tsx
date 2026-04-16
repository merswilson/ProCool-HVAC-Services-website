import { Shield, Users, Clock, Award } from 'lucide-react';

const stats = [
  { icon: Clock, value: '14+', label: 'Years Serving Miami' },
  { icon: Users, value: '6', label: 'Certified Technicians' },
  { icon: Award, value: '4.9★', label: 'Google Rating' },
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Story */}
          <div>
            <span className="text-[#F39C12] font-bold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1628] mt-2 mb-6 leading-tight">
              Miami-Born.<br />Miami-Built.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              ProCool HVAC was founded in 2011 by Carlos Rivera — a Miami native who grew up watching his neighbors get ripped off by out-of-town contractors who didn't know the South Florida climate.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Carlos built ProCool on one principle: treat every homeowner like a neighbor. Fair prices. No upsells. No mystery fees. Just honest work done right.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Today, our team of 6 certified technicians serves all of Miami-Dade and Broward County — with 187 five-star reviews to prove it.
            </p>

            <a
              href="tel:3058427700"
              className="inline-flex items-center gap-2 bg-[#1F5C99] hover:bg-[#174d82] text-white px-8 py-4 rounded-full font-bold text-base transition shadow-lg"
            >
              Talk to Carlos's Team
            </a>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#1F5C99]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#1F5C99]" />
                  </div>
                  <p className="text-3xl font-black text-[#0B1628] mb-1">{s.value}</p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </div>
              );
            })}

            {/* Trust badges */}
            <div className="col-span-2 bg-[#1F5C99] rounded-2xl p-6 text-white text-center">
              <p className="font-black text-lg mb-1">Serving Miami Since 2011</p>
              <p className="text-white/70 text-sm">Miami-Dade · Broward County · Licensed & Insured · Same-Day Available</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
