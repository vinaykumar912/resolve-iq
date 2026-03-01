import { TrendingUp, Shield, Zap, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Modernize Legacy Systems",
    desc: "Replace outdated infrastructure with scalable, cloud-native architectures that accelerate growth.",
  },
  {
    icon: Shield,
    title: "Reduce Cloud Costs",
    desc: "Optimize your cloud spend with strategic architecture and right-sized resource allocation.",
  },
  {
    icon: Zap,
    title: "Improve Reliability",
    desc: "Achieve 99.9%+ uptime with fault-tolerant systems and automated monitoring pipelines.",
  },
  {
    icon: Clock,
    title: "Accelerate Delivery",
    desc: "Ship products faster with modern CI/CD, automated testing, and streamlined engineering workflows.",
  },
  {
    icon: BarChart3,
    title: "Unlock Data Insights",
    desc: "Build real-time analytics pipelines that turn raw data into actionable business intelligence.",
  },
];

const WhyResolveIQ = () => {
  return (
    <section className="bg-gray-50 py-24" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            WHY RESOLVE IQ
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Measurable Business Outcomes
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            We don't just deliver technology — we deliver outcomes that move the
            needle for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-teal-400 text-white mb-6">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyResolveIQ;
