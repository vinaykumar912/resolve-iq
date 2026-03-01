import { Database, Cloud, ShieldCheck, Code } from "lucide-react";

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

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            End-to-End Technology Solutions
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-blue-600 mb-6">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Button */}
                <button className="text-blue-600 border border-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                  Schedule a Strategy Call →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
