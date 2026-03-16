import {
  Users,
  BarChart3,
  Settings,
  Cloud,
  Zap,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Users,
    title: "Technical Talent Assessment",
    desc: "Interview and evaluate candidates for engineering, analytics, and cloud roles.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Enablement",
    desc: "Support GCC teams with data engineering, BI reporting, and analytics platforms.",
  },
  {
    icon: Settings,
    title: "Technology Consulting",
    desc: "Assist GCC teams in designing scalable data architectures and modern analytics environments.",
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Platform Migration Support",
    desc: "Help organizations migrate data platforms from on-premise systems to modern cloud platforms.",
  },
];

const businessValue = [
  {
    icon: Zap,
    text: "Faster technical hiring for GCC teams",
  },
  {
    icon: ShieldCheck,
    text: "Reliable candidate assessment by domain experts",
  },
  {
    icon: TrendingUp,
    text: "Strong data and analytics capability for GCC operations",
  },
  {
    icon: UserCheck,
    text: "Reduced hiring risk and improved team quality",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const GCCEnablementSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest mb-4">
            GCC SUPPORT
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Global Capability Center Enablement
          </h2>

          <p className="text-gray-500 leading-relaxed">
            We support organizations building or expanding Global Capability
            Centers by providing technical hiring support, engineering expertise,
            and data platform capabilities to accelerate GCC operations.
          </p>
        </div>

        {/* Services */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-xl p-6 text-center shadow-sm border 
                ${
                  item.highlight
                    ? "border-blue-300"
                    : "border-gray-200"
                }`}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Business Value */}
        <h3 className="text-center text-xl font-semibold text-gray-900 mb-10">
          Business Value
        </h3>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {businessValue.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                  <Icon size={18} />
                </div>

                <p className="text-gray-700 font-medium text-sm">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GCCEnablementSection;