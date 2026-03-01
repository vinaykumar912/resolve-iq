import { TrendingUp, Shield, Zap, Clock, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: TrendingUp,
    title: "Modernize Legacy Systems",
    desc: "Replace outdated infrastructure with scalable, cloud-native architectures that accelerate growth.",
  },
  {
    icon: Shield,
    title: "Reduce Cloud Costs",
    desc: "Optimize your cloud spend with strategic architecture and right-sized resource allocation.",
  },
  {
    icon: Zap,
    title: "Improve Reliability",
    desc: "Achieve 99.9%+ uptime with fault-tolerant systems and automated monitoring pipelines.",
  },
  {
    icon: Clock,
    title: "Accelerate Delivery",
    desc: "Ship products faster with modern CI/CD, automated testing, and streamlined engineering workflows.",
  },
  {
    icon: BarChart3,
    title: "Unlock Data Insights",
    desc: "Build real-time analytics pipelines that turn raw data into actionable business intelligence.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyResolveIQ = () => {
  return (
    <section className="bg-gray-50 py-24" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            WHY RESOLVE IQ
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Measurable Business Outcomes
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            We don't just deliver technology — we deliver outcomes that move the
            needle for your business.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white mb-6"
                >
                  <Icon size={22} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyResolveIQ;
