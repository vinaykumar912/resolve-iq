import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type FormDataType = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeGBful0Iy4Gm403RfI_Be_1Fpx1W-gl5NiDDGyWJDA_91cfw/formResponse";

    const data = new FormData();

    // Replace entry IDs with your Google Form entry IDs
    data.append("entry.575392914", formData.name);
    data.append("entry.613065167", formData.company);
    data.append("entry.487086849", formData.email);
    data.append("entry.1141861853", formData.message);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

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

          <div className="flex items-center gap-3 text-gray-600 mb-6">
            <Mail className="text-blue-500" size={20} />
            contact@resolveiq.in
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 border border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            <MessageCircle size={18} />
            Quick Inquiry
          </motion.button>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="work@company.com"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message →"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;