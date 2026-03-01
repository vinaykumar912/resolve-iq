import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Modernize?
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Fill out the form and one of our senior engineers will reach out
            within 24 hours to discuss your modernization goals.
          </p>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-gray-600 mb-6"
          >
            <Mail className="text-blue-500" size={20} />
            contact@resolveiq.com
          </motion.div>

          {/* Quick Inquiry Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            <MessageCircle size={18} />
            Quick Inquiry
          </motion.button>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="work@company.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              Send Message →
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
