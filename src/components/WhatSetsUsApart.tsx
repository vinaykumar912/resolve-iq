import { CheckCircle } from "lucide-react";

const points = [
  "90-day delivery cycles — not 12-month engagements",
  "Measurable ROI within the first quarter",
  "Enterprise-grade architecture from day one",
  "Experienced engineering leadership, not junior consultants",
  "Dedicated to mid-sized enterprises — not afterthought clients",
  "Transparent pricing with no hidden costs",
];

const WhatSetsUsApart = () => {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            WHAT SETS US APART
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Built for Mid-Sized Enterprises. <br />
            <span className="bg-linear-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              Delivered in 90 Days.
            </span>
          </h2>

          <p className="text-gray-500 text-lg mt-6 leading-relaxed">
            Large consultancies treat mid-market clients as second priority. We
            don't. Resolve IQ is purpose-built to help companies like yours
            modernize fast — with senior engineers, proven playbooks, and
            measurable outcomes.
          </p>
        </div>

        {/* Right List */}
        <div className="space-y-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm"
            >
              <CheckCircle className="text-teal-500 w-6 h-6" />
              <p className="text-gray-800 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
