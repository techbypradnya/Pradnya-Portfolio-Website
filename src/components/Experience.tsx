import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "AI/ML Domain Expert",
      org: "AWS Cloud Club - Sanjivani College of Engineering",
      duration: "2024",
      description:
        "Gained in-depth knowledge of Machine Learning, Generative AI, and Cloud technologies while working on real-world projects.",
      color: "from-purple-500 to-blue-500",
    },
    {
      role: "Training & Placement Coordinator",
      org: "ECE Department • Sanjivani College of Engineering, Kopargaon",
      duration: "Aug 2025 – Present",
      description:
        "Actively coordinating placement activities, managing communication between students and companies, and supporting professional development initiatives.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      role: "Open Source Contributor",
      org: "GirlScript Summer of Code (GSSoC 2025)",
      duration: "Aug 2025 – Oct 2025",
      description:
        "Contributed to open-source repositories by fixing issues, adding features, and improving documentation—enhancing skills in Python, Git, GitHub, and collaborative development.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      role: "Magazine Committee Member (SAC)",
      org: "Student Activity Council • Sanjivani College of Engineering",
      duration: "2025 – Present",
      description:
        "Contributing to magazine content curation, design inputs, and creative editorial work as part of the SAC committee.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 flex items-center gap-3 
          bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent tracking-wide"
      >
        <Briefcase size={40} className="text-purple-400" /> Experience
      </motion.h2>

      {/* Vertical Timeline */}
      <div className="relative border-l-4 border-purple-500/40 ml-6 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative pl-10"
          >
            {/* Glowing Node */}
            <div
              className={`absolute -left-5 top-2 w-10 h-10 rounded-full bg-gradient-to-br ${
                exp.color
              } shadow-xl border-[3px] border-white`}
            ></div>

            {/* Card */}
            <div className="glass p-8 rounded-3xl shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-300 mb-1">
                {exp.role}
              </h3>

              <p className="text-gray-300 text-lg font-medium">{exp.org}</p>

              <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>

              <p className="mt-4 text-gray-200 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
