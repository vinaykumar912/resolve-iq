import { motion } from "framer-motion";

const platforms = ["AWS", "Azure", "Google Cloud", "Snowflake", "Databricks"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50">
      {/* Platforms */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center border-b border-gray-200">
        <motion.p
          className="text-gray-500 text-sm tracking-widest font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          CERTIFIED PARTNERSHIPS & PLATFORMS
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium shadow-sm hover:shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* About Resolve IQ */}
      <motion.div
        className="max-w-3xl mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-600 font-semibold tracking-widest text-sm mb-6">
          ABOUT RESOLVE IQ
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Engineering Leaders Who've Been in Your Shoes
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Resolve IQ was founded by experienced engineering leaders, enterprise
          architects, and cloud specialists who spent decades building and
          scaling technology at Fortune 500 companies. We understand the unique
          challenges mid-sized enterprises face — and we've built a consultancy
          that delivers enterprise-grade solutions without the enterprise
          overhead.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed">
          Our mission is simple: help companies scale securely, modernize
          efficiently, and compete fearlessly.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
