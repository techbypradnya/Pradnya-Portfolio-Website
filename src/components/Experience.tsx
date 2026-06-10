import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      org: "Drushya India Pvt. Ltd.",
      duration: "June 2026 – September 2026",
      description:
        "Developed and maintained responsive web applications. Worked on both frontend and backend development. Implemented user-friendly features and optimized website performance. Collaborated with the development team using Git and GitHub. Gained hands-on experience in full-stack web development and software engineering.",
      color: "from-cyan-500 to-blue-600",
      type: "Work",
    },
    {
      role: "AI/ML Domain Expert",
      org: "AWS Cloud Club - Sanjivani College of Engineering",
      duration: "2024 – Present",
      description:
        "Led workshops and mentoring sessions on Machine Learning, Generative AI, and Cloud technologies. Guided peers through real-world AI projects and innovation initiatives, contributing to skill development across the institution.",
      color: "from-purple-500 to-blue-500",
      type: "Leadership",
    },
    {
      role: "Training & Placement Coordinator",
      org: "ECE Department • Sanjivani College of Engineering",
      duration: "Aug 2025 – Present",
      description:
        "Actively coordinating placement activities, managing communication between students and industry recruiters, and supporting professional development initiatives to enhance campus placements.",
      color: "from-yellow-500 to-orange-500",
      type: "Coordination",
    },
    {
      role: "Open Source Contributor",
      org: "GirlScript Summer of Code (GSSoC 2025)",
      duration: "Aug 2025 – Oct 2025",
      description:
        "Contributed to multiple open-source repositories by fixing issues, implementing features, and improving documentation. Enhanced proficiency in Python, Git, GitHub, and collaborative development practices.",
      color: "from-indigo-500 to-purple-500",
      type: "Open Source",
    },
    {
      role: "Magazine Committee Member (SAC)",
      org: "Student Activity Council • Sanjivani College of Engineering",
      duration: "2025 – Present",
      description:
        "Contributing to magazine content curation, design inputs, and creative editorial work. Developing communication and content creation skills through collaborative projects.",
      color: "from-pink-500 to-rose-500",
      type: "Content",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase size={36} className="text-purple-500 dark:text-purple-400" />
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A journey of growth, leadership, and professional development
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-20 hidden md:block transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg border-4 border-white dark:border-gray-900 top-8 transform md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 z-10"></div>

              {/* Card Container */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ml-12 md:ml-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white flex-1">
                      {exp.role}
                    </h3>
                    <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-purple-600 dark:text-purple-300 font-semibold mb-1">
                    {exp.org}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                    {exp.duration}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
