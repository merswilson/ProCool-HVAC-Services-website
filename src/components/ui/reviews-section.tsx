import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria G.',
    location: 'Hialeah, FL',
    rating: 5,
    text: 'My AC broke at 10pm on a Friday. Carlos sent a tech within the hour. Fixed it same night, no extra charge for the after-hours call. Absolutely incredible service.',
    service: 'AC Repair',
  },
  {
    name: 'James T.',
    location: 'Coral Gables, FL',
    rating: 5,
    text: "Got 3 quotes for a new AC install. ProCool was fairly priced and the most professional by far. Clean install, explained everything, and it's been running perfectly for 8 months.",
    service: 'AC Installation',
  },
  {
    name: 'Linda R.',
    location: 'Pembroke Pines, FL',
    rating: 5,
    text: "Had a tune-up done before summer hit. The tech found a refrigerant leak I didn't know about. Saved me from a full breakdown in August. Worth every penny.",
    service: 'Tune-Up',
  },
  {
    name: 'Roberto M.',
    location: 'Doral, FL',
    rating: 5,
    text: "The duct cleaning made a huge difference in our air quality. My daughter's allergies have been way better since. ProCool was thorough and the team was super professional.",
    service: 'Duct Cleaning',
  },
  {
    name: 'Stephanie K.',
    location: 'Hollywood, FL',
    rating: 5,
    text: "Called at 8am, tech was here by noon. Fixed the issue fast, price was exactly what they quoted — no surprises. That's rare. I'm a customer for life.",
    service: 'AC Repair',
  },
  {
    name: 'David C.',
    location: 'Aventura, FL',
    rating: 5,
    text: 'ProCool installed a new system in our office. Great communication, fast turnaround, and they cleaned up after themselves. Super impressed with the whole team.',
    service: 'AC Installation',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#f8fafc] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F39C12] font-bold text-sm uppercase tracking-widest">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B1628] mt-2 mb-4">
            4.9 Stars on Google
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#F39C12] text-[#F39C12]" />
            ))}
          </div>
          <p className="text-gray-500 text-lg">
            187 verified reviews from Miami-Dade and Broward homeowners
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F39C12] text-[#F39C12]" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-[#1F5C99]/20 mb-2" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0B1628] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
                <span className="text-xs bg-[#1F5C99]/10 text-[#1F5C99] font-semibold px-3 py-1 rounded-full">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#d4880f] text-white px-8 py-4 rounded-full font-bold text-base transition shadow-lg shadow-[#F39C12]/25"
          >
            Join Our Happy Customers — Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
