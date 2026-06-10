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
      className="scroll-mt-28 py-24 px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A journey of knowledge, growth, and academic excellence
          </p>
        </div>

        <div className="relative pt-12 md:pt-16">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-30"></div>

          {/* Education Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot - positioned above card on desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-7 z-20">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg border-4 border-white dark:border-gray-900"></div>
                </div>

                {/* Card with proper structure */}
                <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <edu.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content - grows to fill space */}
                  <div className="flex-grow flex flex-col">
                    {/* Degree */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 text-center leading-snug">
                      {edu.degree}
                    </h3>

                    {/* School */}
                    <p className="text-purple-600 dark:text-purple-300 font-semibold text-center text-sm md:text-base mb-2">
                      {edu.school}
                    </p>

                    {/* Year */}
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium text-center mb-4">
                      {edu.year}
                    </p>
                  </div>

                  {/* Percentage Badge */}
                  <div className="mb-4">
                    <span className="block w-full text-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">
                      {edu.percentage}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm text-center">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
