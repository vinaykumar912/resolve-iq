import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "90-day delivery cycles — not 12-month engagements",
  "Measurable ROI within the first quarter",
  "Enterprise-grade architecture from day one",
  "Experienced engineering leadership, not junior consultants",
  "Dedicated to mid-sized enterprises — not afterthought clients",
  "Transparent pricing with no hidden costs",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const WhatSetsUsApart = () => {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            WHAT SETS US APART
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Built for Mid-Sized Enterprises. <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              Delivered in 90 Days.
            </span>
          </h2>

          <p className="text-gray-500 text-lg mt-6 leading-relaxed">
            Large consultancies treat mid-market clients as second priority. We
            don't. Resolve IQ is purpose-built to help companies like yours
            modernize fast — with senior engineers, proven playbooks, and
            measurable outcomes.
          </p>
        </motion.div>

        {/* Right List */}
        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm hover:shadow-md"
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <CheckCircle className="text-teal-500 w-6 h-6" />
              </motion.div>

              <p className="text-gray-800 font-medium">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
