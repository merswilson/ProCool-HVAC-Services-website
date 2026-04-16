'use client';

import React from 'react';
import { Phone, Mail, Wrench, MapPin, MessageSquare, Lock, CheckCircle, ClipboardList, PhoneCall } from 'lucide-react';

const services = [
  'AC Repair',
  'AC Installation',
  'Tune-Up',
  'Duct Cleaning',
  'Other / Not Sure',
];

const steps = [
  {
    icon: ClipboardList,
    title: '1. Fill Out the Form',
    description: "Takes 30 seconds. Tell us what's going on with your HVAC system.",
  },
  {
    icon: PhoneCall,
    title: '2. We Call or Text You',
    description: 'Expect a text from Carlos within 5 minutes to schedule your visit.',
  },
  {
    icon: CheckCircle,
    title: '3. Free Estimate Visit',
    description: 'A certified ProCool tech comes to you. No hidden fees. Clear quote.',
  },
];

export default function EstimateFormSection() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="estimate" className="bg-[#f0f6ff] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Top header */}
        <div className="text-center mb-12">
          <span className="text-[#F39C12] font-bold text-sm uppercase tracking-widest">Free Estimate</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B1628] mt-2 mb-3">
            Get My Free HVAC Estimate
          </h2>
          <p className="text-gray-500 text-lg">
            Fill out the form below — we'll text you within 5 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-[#0B1628] mb-2">You're All Set!</h3>
                <p className="text-gray-500">Carlos's team will text you within 5 minutes to confirm your free estimate visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Best Number to Reach You *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="(305) 000-0000"
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed *</label>
                  <div className="relative">
                    <Wrench className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      required
                      defaultValue=""
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition appearance-none bg-white text-gray-500"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Zip */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Zip Code</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="33101"
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Briefly Describe Your Issue (optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      rows={3}
                      placeholder="e.g. AC blowing warm air, making noise, stopped working..."
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#1F5C99] transition resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#F39C12] hover:bg-[#d4880f] text-white py-4 rounded-xl font-bold text-base transition shadow-lg shadow-[#F39C12]/25 flex items-center justify-center gap-2"
                >
                  <Wrench className="w-5 h-5" />
                  Get My Free Estimate
                </button>

                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  Your information is private. We'll text you within 5 minutes.
                </p>
              </form>
            )}
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-2xl font-black text-[#0B1628] mb-8">How It Works — 3 Simple Steps</h3>
            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-[#1F5C99]" />
                    </div>
                    <div>
                      <p className="font-black text-[#0B1628] text-base mb-1">{step.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call CTA */}
            <div className="mt-10 bg-[#1F5C99] rounded-2xl p-6 text-white">
              <p className="font-black text-lg mb-1">Prefer to call?</p>
              <p className="text-white/70 text-sm mb-4">Talk to a real person right now — no robots.</p>
              <a
                href="tel:3058427700"
                className="inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#d4880f] text-white px-6 py-3 rounded-full font-bold text-sm transition"
              >
                <Phone className="w-4 h-4" />
                (305) 842-7700
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
