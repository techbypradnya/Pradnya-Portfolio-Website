import { useEffect, useState, useRef } from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      icon: GraduationCap,
      degree: "B.Tech in Electronics & Computer Engineering",
      school: "Sanjivani College of Engineering, Kopargaon",
      year: "2023 – 2027",
      percentage: "CGPA — 9.43",
      description:
        "Blending intelligence, design, and engineering to build the technology of tomorrow",
      gradient: "from-purple-500 to-blue-500",
    },
    
    {
      icon: School,
      degree: "Higher Secondary Education (HSC)",
      school: "Rayat Shikshan Sansthas Radhabai Kale Kanya Vidhya Mandir and Junior College -Arts & Science , Kopargaon",
      year: "2021 – 2023",
      percentage: "73.83%",   // ⭐ ADD YOUR PERCENTAGE HERE
      description:
        "Completed HSC with strong academic performance in the Science Stream.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: BookOpen,
      degree: "Secondary School Certificate (SSC)",
      school: "Rayat Shikshan Sansthas Radhabai Kale Kanya Vidhya Mandir, Kolpewadi",
      year: "2020 – 2021",
      percentage: "86.20%",   // ⭐ ADD YOUR PERCENTAGE HERE
      description:
        "Achieved excellent academic results with consistent performance.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="scroll-mt-28 py-24 px-4 min-h-screen"
    >
      <div
        className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A journey of knowledge, growth, and excellence.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-60 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-10 h-10 rounded-full bg-purple-600 shadow-xl border-[3px] border-white"></div>

              <div className="glass p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300 mt-10 text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <edu.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>

                <p className="text-purple-600 dark:text-purple-300 font-semibold">
                  {edu.school}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {edu.year}
                </p>

                {/* ⭐ PERCENTAGE BADGE */}
                <span className="inline-block mt-3 mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">
                  {edu.percentage}
                </span>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
