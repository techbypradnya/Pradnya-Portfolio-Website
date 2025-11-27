import { useEffect, useState, useRef } from "react";
import {
  BookOpen,
  Lightbulb,
  Users,
  Award,
  Code2,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const timeline = [
    {
      icon: BookOpen,
      title: "Electronics & Computer Engineering Student",
      description: "SCOE • Class of 2027 • CGPA: 9.43",
    },

  
    {
      icon: Award,
      title: "All-Rounder Personality",
      description:
        "Tech, creativity, leadership, social work & strong communication",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A passionate learner who blends technology, creativity, and
            compassion — striving to excel in every field with a growth mindset.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-2xl hover:scale-105 transition-all duration-700 shadow-md shadow-purple-500/10 hover:shadow-purple-500/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-400/30">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Story */}
        <div
          className={`mt-12 glass p-10 rounded-2xl transition-all duration-1000 delay-700 shadow-lg shadow-purple-400/20 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Pradnya Shailendra Pangavhane</span>, 
            an engineering student with a strong curiosity for how technology
            shapes the world. I love diving deep into{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Data Structures, Algorithms, and AI
            </span>{" "}
            — the logic behind problem-solving excites me as much as building
            intelligent systems.
            <br />
            <br />
            {/* As an{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              AI/ML Domain Expert at AWS Cloud Club
            </span>
            , I guide workshops, mentor peers, and explore innovations from
            Generative AI to LLMs. I strive to be an{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              all-rounder
            </span>{" "}
            — balancing academics, coding, leadership, and social service.
            <br />
            <br /> */}
            Whether it's solving a tricky DSA problem, training a model,
            creating a project, or helping stray dogs, I put my heart into
            everything I do. My goal is simple:  
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              grow, innovate, and make an impact.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
