import { motion } from "framer-motion";
import heroImage from "../assets/mainbanner-4.webp";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-6">
            ENTERPRISE TECHNOLOGY CONSULTING
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Transform Your <br />
            Technology Into a <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              Growth Engine
            </span>
          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-xl">
            Scalable data platforms. Secure cloud environments. Enterprise-grade
            applications. Delivered with speed. Engineered for impact.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
            >
              Book a Free 30-Minute Consultation →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              📞 Talk to Our Experts
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <img
              src={heroImage}
              alt="Cloud Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
