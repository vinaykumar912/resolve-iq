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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00AAFF] mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#F7F8FF] rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              {/* <div className="text-4xl mb-4">{s.icon}</div> */}
              <h3 className="font-semibold text-[#00AAFF] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
