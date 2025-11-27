import { useEffect, useState, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Technical Skills
  const technicalSkills = [
    {
      icon: "💻",
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: "🧠",
      title: "AI / ML Technologies",
      skills: ["Machine Learning", "Deep Learning", "LLMs", "Generative AI"],
    },
    {
      icon: "🌐",
      title: "Web Development",
      skills: ["React","Tailwind CSS", "Vite","Framer Motion", "REST APIs","Node.js","Firebase"],
    },
    {
      icon: "🗄️",
      title: "Databases",
      skills: ["MySQL", "SQLite"],
    },
    {
      icon: "🔧",
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      icon: "⚙️",
      title: "Tech Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "OpenCV"],
    },
  ];

  // Engineering Skills
  const engineeringSkills = [
    {
      icon: "🔌",
      title: "Core Electronics",
      skills: ["Circuits", "Sensors", "Microcontrollers", "PCB Design"],
    },
    {
      icon: "📘",
      title: "Computer Science Fundamentals",
      skills: ["OS", "DBMS", "CN", "OOP"],
    },
    {
      icon: "🧩",
      title: "Problem Solving",
      skills: ["Data Structures", "Algorithms", "Competitive Coding"],
    },
  ];

  // Interpersonal Skills – new design
  const softSkills = [
    { name: "Communication", emoji: "🗣️", desc: "Clear & confident", color: "from-indigo-500 to-blue-500" },
    { name: "Teamwork", emoji: "🤝", desc: "Collaborative & supportive", color: "from-purple-500 to-pink-500" },
    { name: "Leadership", emoji: "🌟", desc: "Guiding with purpose", color: "from-blue-500 to-cyan-500" },
    { name: "Adaptability", emoji: "⚡", desc: "Quick & flexible", color: "from-purple-600 to-indigo-500" },
    { name: "Creativity", emoji: "🎨", desc: "Thinking outside the box", color: "from-pink-500 to-orange-400" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-24 bg-transparent dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
            A perfect blend of technical skills, engineering excellence & human qualities.
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Technical Skills
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {technicalSkills.map((cat, index) => (
            <div
              key={index}
              className={`bg-white/70 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/40 dark:border-gray-700/40 transition-all duration-700 hover:scale-[1.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {cat.icon} {cat.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ENGINEERING SKILLS */}
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Core Engineering Skills
        </h3>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {engineeringSkills.map((cat, index) => (
            <div
              key={index}
              className={`bg-white/70 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200/40 dark:border-gray-700/40 transition-all duration-700 hover:scale-[1.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {cat.icon} {cat.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

       {/* INTERPERSONAL SKILLS — FIXED SINGLE ROW */}
<h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
  Interpersonal Skills
</h3>

<div className="overflow-x-auto pb-4">
  <div className="flex gap-6 min-w-max justify-center md:justify-between">
    {softSkills.map((skill, index) => (
      <div
        key={index}
        className={`p-6 w-60 rounded-2xl shadow-lg transition-all duration-700 hover:scale-105 bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${200 + index * 150}ms` }}
      >
        <div
          className={`mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center text-3xl text-white bg-gradient-to-br ${skill.color}`}
        >
          {skill.emoji}
        </div>

        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
          {skill.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {skill.desc}
        </p>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default Skills;
