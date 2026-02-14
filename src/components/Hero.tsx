import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0b3d4f] py-20 min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Technology Solutions That Drive{" "}
          <span className="bg-[#00AAFF] text-white px-2 rounded inline-block mt-2">
            Business Growth
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          We build scalable data platforms, cloud solutions, and enterprise
          applications that help organizations make better decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="bg-[#00AAFF] text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Our Services
          </motion.a>

          {/*
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-[#1D04C3] text-[#1D04C3] px-8 py-3 rounded-lg hover:bg-[#1D04C3] hover:text-white transition"
          >
            Contact Us
          </motion.a>
          */}
        </motion.div>
      </div>
    </section>
  );
};
