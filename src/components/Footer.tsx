import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-50 border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo + Description */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4">
              Resolve<span className="text-sky-500">IQ</span>
            </h2>

            <p className="text-gray-500 leading-relaxed">
              We help mid-sized enterprises modernize data infrastructure in 90
              days with measurable ROI.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>

            <ul className="space-y-3 text-gray-500">
              {[
                "Data Engineering",
                "Cloud Strategy & Migration",
                "QA & Automation",
                "Enterprise Applications",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>

            <ul className="space-y-3 text-gray-500">
              {["About Us", "Our Process", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>

            <ul className="space-y-3 text-gray-500">
              <li>contact@resolveiq.com</li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          © 2026 Resolve IQ. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
