import { Database, Cloud, ShieldCheck, Code } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Design and build modern data pipelines, lakehouse architectures, and real-time streaming platforms that unlock the full value of your data assets.",
  },
  {
    icon: Cloud,
    title: "Cloud Strategy & Migration",
    desc: "Seamlessly migrate workloads to AWS, Azure, or GCP with zero-downtime strategies, cost optimization, and cloud-native best practices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Automation",
    desc: "Implement comprehensive test automation frameworks, CI/CD pipelines, and quality gates that catch issues before they reach production.",
  },
  {
    icon: Code,
    title: "Java & .NET Enterprise Apps",
    desc: "Build and modernize mission-critical enterprise applications with microservices architecture, API-first design, and scalable backends.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-gray-50 py-13">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            End-to-End Technology Solutions
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-blue-600 mb-6"
                >
                  <Icon size={24} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="text-blue-600 border border-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition"
                >
                  Schedule a Strategy Call →
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
