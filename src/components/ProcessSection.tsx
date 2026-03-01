import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Assess & Strategy",
    desc: "We audit your current infrastructure, identify bottlenecks, and build a prioritized modernization roadmap aligned with your business goals.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build & Modernize",
    desc: "Our senior engineers execute the plan — migrating workloads, building data pipelines, and delivering production-ready solutions in 90-day sprints.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Optimize & Scale",
    desc: "We continuously optimize performance, reduce costs, and ensure your platform scales seamlessly as your business grows.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest mb-4">
            OUR PROCESS
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            From Assessment to Impact in 90 Days
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
              >
                <span className="absolute top-6 right-6 text-4xl font-bold text-gray-200">
                  {step.number}
                </span>

                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl text-center py-16 px-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Let's Solve What's Slowing You Down
          </h3>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free assessment from our senior engineers. No commitments. No
            sales pitch. Just solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">
              Book a Free Consultation →
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Your Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
