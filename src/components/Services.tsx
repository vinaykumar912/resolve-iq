import { motion } from "framer-motion";

const services = [
  {
    title: "Data Engineering Services",
    desc: "We build reliable, scalable, and high-performance data platforms. Our solutions transform raw and complex data into meaningful insights that drive business decisions.",
    icon: "📊",
  },
  {
    title: "Quality Assurance & Testing",
    desc: "We ensure software quality through rigorous testing practices. Our QA services focus on performance, security, reliability, and cross-platform compatibility.",
    icon: "🧪",
  },
  {
    title: "Cloud Services",
    desc: "We help organizations move to the cloud with confidence. From strategy and migration to optimization and ongoing support, our cloud solutions are secure, scalable, and cost-effective.",
    icon: "☁️",
  },
  {
    title: "Application Development (Java & .NET)",
    desc: "We develop robust enterprise applications using Java and .NET. Our solutions are designed for performance, scalability, and long-term maintainability.",
    icon: "💻",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl font-bold text-center text-[#00AAFF] mb-12"
        >
          Our Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-[#F7F8FF] rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              {/* Optional icon */}
              {/* <div className="text-4xl mb-4">{s.icon}</div> */}

              <h3 className="font-semibold text-[#00AAFF] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
