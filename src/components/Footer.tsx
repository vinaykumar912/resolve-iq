import { motion } from "framer-motion";
import Logo from "../assets/resolveIQ.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-[#0b3d4f] text-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.img
            src={Logo}
            alt="logo"
            className="h-9 mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          />
          <p className="text-sm text-gray-200">
            Building reliable data platforms, cloud solutions, and enterprise
            applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <motion.li whileHover={{ x: 4 }}>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </motion.li>
            <motion.li whileHover={{ x: 4 }}>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </motion.li>
            {/* <motion.li whileHover={{ x: 4 }}>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </motion.li>
            <motion.li whileHover={{ x: 4 }}>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </motion.li> */}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-200 hover:text-white transition">
            Info@resolveiq.in
          </p>
          {/* <p className="text-sm text-gray-200 hover:text-white transition">
            +91 98765 43210
          </p> */}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-xs text-gray-300 mt-10"
      >
        © {new Date().getFullYear()} Resolve IQ. All rights reserved.
      </motion.div>
    </footer>
  );
};
