import { Search, Wrench, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Assess & Strategy",
    desc: "We audit your current infrastructure, identify bottlenecks, and build a prioritized modernization roadmap aligned with your business goals.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build & Modernize",
    desc: "Our senior engineers execute the plan — migrating workloads, building data pipelines, and delivering production-ready solutions in 90-day sprints.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Optimize & Scale",
    desc: "We continuously optimize performance, reduce costs, and ensure your platform scales seamlessly as your business grows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProcessSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="process" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 text-sm font-semibold tracking-widest mb-4">
            OUR PROCESS
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            From Assessment to Impact in 90 Days
          </h2>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg"
              >
                {/* Light Blue Step Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-blue-200 tracking-wide">
                  {step.number}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                >
                  <Icon size={20} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl text-center py-16 px-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Let's Solve What's Slowing You Down
          </h3>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free assessment from our senior engineers. No commitments. No
            sales pitch. Just solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Book a Free Consultation →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Schedule Your Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
