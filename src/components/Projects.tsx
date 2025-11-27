import { useEffect, useState, useRef } from 'react';
import { Droplets, Database, Heart,Brain, Music, BookOpen, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      icon: Droplets,
      title: "Smart Water Irrigation System",
      description:
        "An intelligent irrigation system using Arduino, soil moisture sensing, and a relay-controlled water pump for efficient watering.",
      tech: ["Arduino", "Soil Moisture Sensor", "Relay Module", "Water Pump", "Arduino IDE", "Embedded C"],
      gradient: "from-blue-500 to-cyan-500",
      code: "https://github.com/techbypradnya/Smart-Water-Irrigation-System/tree/main",
      // demo: "https://your-demo-link.com",
    },
{
  icon: Brain,
  title: "Ask This Page – AI Chrome Extension",
  description:
    "A full-stack AI Chrome Extension that turns any webpage, PDF, or YouTube video into a conversational chatbot using Gemini + RAG.",
  tech: ["Chrome Extension", "Flask", "Gemini AI", "LangChain", "FAISS", "NLP"],
  gradient: "from-violet-500 to-indigo-500",
  code: "https://github.com/techbypradnya/smart_page_ai",
  // demo: "https://youtu.be/B4ss3dL2DF0",
},


    {
  icon: Heart,
  title: "CareerCompass AI",
  description:
    "An AI-powered career guidance system that analyzes user skills, interests, and goals to recommend personalized career paths using intelligent insights.",
  tech: ["AI", "Python", "ML Models", "Career Recommendation", "Data Analysis"],
  gradient: "from-fuchsia-500 to-purple-500",
  code: "https://github.com/techbypradnya/CareerCompass-AI",
  demo: "",
},
{
  icon: ExternalLink,
  title: "Personal Portfolio Website",
  description:
    "A stunning, animation-rich personal portfolio built with React and Tailwind CSS, showcasing projects, skills, and achievements with a modern UI/UX.",
  tech: ["React", "Tailwind CSS", "Vite", "JavaScript", "Responsive Design"],
  gradient: "from-purple-600 to-indigo-600",
  code: "https://github.com/techbypradnya/your-portfolio-repo",
  // demo: "https://your-portfolio-live-link.com",
},

{
  icon: Heart,
  title: "Nexus.AI – Intelligent Chatbot",
  description:
    "A Flask-based AI chatbot powered by NLP and machine learning, featuring a beautifully animated bird-themed interface for an immersive chat experience.",
  tech: ["Python", "Flask", "NLP", "SpaCy", "Machine Learning", "Scikit-Learn"],
  gradient: "from-rose-500 to-pink-600",
  code: "https://github.com/techbypradnya/Nexus.AI-🤖-AI-Powered-Chatbot-using-Linear-Algebra-NLP-Nexus.AI",
  demo: "",
},


    // {
    //   icon: Database,
    //   title: "Student Data & Score Management System",
    //   description:
    //     "A complete system for managing student details, grades, and performance insights.",
    //   tech: ["Python", "Database", "Data Management"],
    //   gradient: "from-purple-500 to-pink-500",
    //   code: "https://github.com/YOUR_USERNAME/student-data-system",
    //   demo: "https://your-demo-link.com",
    // },

    {
      icon: Heart,
      title: "Gemini Health App",
      description:
        "An AI-powered health application using Google Gemini API for personalized wellness recommendations.",
      tech: ["AI", "Gemini API", "Healthcare", "Python"],
      gradient: "from-red-500 to-orange-500",
      code: "https://github.com/techbypradnya/Gemini-Health-App",
      // demo: "https://your-demo-link.com",
    },
     {
  icon: Heart,
  title: "Fitness Challenge App",
  description:
    "A Python-based app to manage fitness challenges, track progress, and motivate users towards their health goals.",
  tech: ["Python", "Fitness Tracker", "Tkinter"],
  gradient: "from-green-500 to-lime-500",
  code: "https://github.com/techbypradnya/Fitness-challenge-app-python",
  demo: "",
},
{
  icon: Database,
  title: "Gemini Image Analysis App",
  description:
    "An AI-powered image analysis application that uses Google Gemini to analyze and extract insights from images.",
  tech: ["Python", "AI", "Image Analysis", "Gemini API"],
  gradient: "from-indigo-500 to-blue-500",
  code: "https://github.com/techbypradnya/Gemini-Image-Analysis-Application",
  demo: "",
},
{
  icon: Database,
  title: "Carbon Emission Analysis System",
  description:
    "A DBMS-based analytics system that stores and visualizes global CO₂ emission data using MySQL, Python, and Streamlit.",
  tech: ["MySQL", "Python", "Streamlit", "Pandas", "Matplotlib", "SQLAlchemy"],
  gradient: "from-green-600 to-emerald-500",
  code: "https://github.com/techbypradnya/Carbon-Emission-Analysis-System",
  demo: "",
},


    // {
    //   icon: Music,
    //   title: "Media Player in C with SDL2",
    //   description:
    //     "A multimedia player built in C using SDL2, supporting multiple audio formats.",
    //   tech: ["C", "SDL2", "Multimedia", "Systems Programming"],
    //   gradient: "from-indigo-500 to-purple-500",
    //   code: "https://github.com/YOUR_USERNAME/media-player-sdl2",
    //   demo: "https://your-demo-link.com",
    // },

    // {
    //   icon: BookOpen,
    //   title: "Library Management System",
    //   description:
    //     "A management tool for book cataloging, issuing, and returning with automated reminders.",
    //   tech: ["Database", "Python", "System Design"],
    //   gradient: "from-green-500 to-teal-500",
    //   code: "https://github.com/YOUR_USERNAME/library-management",
    //   demo: "https://your-demo-link.com",
    // },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Building innovative solutions to real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-2xl group hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Code & Demo Buttons */}
              <div className="flex space-x-4">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
