import { Code2, Brain, FlaskConical, MessageSquare, ClipboardList, UserSearch, TestTube, FileText } from "lucide-react";
import { motion } from "framer-motion";

const evaluations = [
  {
    icon: Code2,
    title: "Technical Skills",
    desc: "Assessment of programming, data engineering, analytics, cloud platforms, and system design capabilities.",
  },
  {
    icon: Brain,
    title: "Problem Solving Ability",
    desc: "Evaluation of how candidates approach complex technical problems and real-world scenarios.",
  },
  {
    icon: FlaskConical,
    title: "Practical Knowledge",
    desc: "Hands-on assessment based on real project situations and industry use cases.",
  },
  {
    icon: MessageSquare,
    title: "Communication & Collaboration",
    desc: "Understanding how candidates explain technical concepts and work within teams.",
  },
];

const process = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Requirement Understanding",
    desc: "We analyze the role, required skills, and experience level.",
  },
  {
    icon: UserSearch,
    number: "02",
    title: "Candidate Technical Interview",
    desc: "Our domain experts conduct structured technical interviews.",
  },
  {
    icon: TestTube,
    number: "03",
    title: "Practical Scenario Evaluation",
    desc: "Candidates are tested using real-world technical problems.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Detailed Evaluation Report",
    desc: "We provide hiring teams with structured insights and final recommendation.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const InterviewServiceSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest mb-4">
            INTERVIEW AS A SERVICE
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Expert-Led Technical Hiring
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Hiring strong technical talent requires deep domain expertise and a
            structured evaluation process. Our IaaS helps companies evaluate
            technical candidates through expert-led interviews, ensuring only
            the most qualified professionals move forward.
          </p>
        </div>

        {/* What We Evaluate */}
        <h3 className="text-center text-xl font-semibold text-gray-900 mb-10">
          What We Evaluate
        </h3>

        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {evaluations.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                  <Icon size={20} />
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process */}
        <h3 className="text-center text-xl font-semibold text-gray-900 mb-10">
          Our Interview Process
        </h3>

        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {process.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -8 }}
                className="relative bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-blue-200">
                  {item.number}
                </span>

                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                  <Icon size={20} />
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default InterviewServiceSection;