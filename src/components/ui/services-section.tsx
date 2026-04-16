import { Wind, Wrench, Thermometer, Filter, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'AC Repair',
    description: 'Fast diagnosis and repair for any AC issue. Most repairs completed same day. No cool air? We fix it — guaranteed.',
    highlights: ['Same-day service', 'All brands & models', 'Upfront pricing'],
    cta: 'Book a Repair',
  },
  {
    icon: Wind,
    title: 'AC Installation',
    description: 'Full system installs done right the first time. We size your unit correctly so you never overpay on energy bills.',
    highlights: ['Free estimate', 'Financing available', 'Warranty included'],
    cta: 'Get Installation Quote',
  },
  {
    icon: Thermometer,
    title: 'Tune-Ups',
    description: 'Keep your system running at peak performance. A $99 tune-up can prevent a $2,000 breakdown — especially in Miami summers.',
    highlights: ['Full 21-point check', 'Extends system life', 'Save on energy bills'],
    cta: 'Schedule Tune-Up',
  },
  {
    icon: Filter,
    title: 'Duct Cleaning',
    description: 'Dirty ducts mean dirty air. We clean your entire duct system so your family breathes clean, filtered air all year round.',
    highlights: ['Improves air quality', 'Reduces allergens', 'Boosts efficiency'],
    cta: 'Book Duct Cleaning',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F39C12] font-bold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B1628] mt-2 mb-4">
            HVAC Services for Miami Homeowners
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From emergency repairs to full system installs — ProCool has you covered across Miami-Dade and Broward County.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-[#1F5C99]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#1F5C99]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1F5C99] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#1F5C99] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-black text-[#0B1628] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F39C12] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#estimate"
                  className="flex items-center gap-1.5 text-[#1F5C99] font-bold text-sm hover:text-[#F39C12] transition-colors"
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
