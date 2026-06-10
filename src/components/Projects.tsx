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

  const allProjects = [
    {
      icon: Brain,
      title: "Ask This Page – AI Chrome Extension",
      description:
        "Full-stack AI Chrome Extension converting webpages, PDFs, and videos into conversational chatbots using Gemini + RAG for intelligent information retrieval.",
      tech: ["Chrome Extension", "Flask", "Gemini AI", "LangChain", "FAISS", "NLP"],
      gradient: "from-violet-500 to-indigo-500",
      code: "https://github.com/techbypradnya/smart_page_ai",
      featured: true,
    },
    {
      icon: Heart,
      title: "CareerCompass AI",
      description:
        "AI-powered career guidance system analyzing skills and interests to recommend personalized career paths with intelligent insights.",
      tech: ["AI", "Python", "ML Models", "Career Recommendation", "Data Analysis"],
      gradient: "from-fuchsia-500 to-purple-500",
      code: "https://github.com/techbypradnya/CareerCompass-AI",
      featured: true,
    },
    {
      icon: Database,
      title: "Carbon Emission Analysis System",
      description:
        "DBMS analytics platform for storing and visualizing global CO₂ emission data using MySQL, Python, and Streamlit with interactive visualizations.",
      tech: ["MySQL", "Python", "Streamlit", "Pandas", "Matplotlib"],
      gradient: "from-green-600 to-emerald-500",
      code: "https://github.com/techbypradnya/Carbon-Emission-Analysis-System",
      featured: true,
    },
    {
      icon: Droplets,
      title: "Smart Water Irrigation System",
      description:
        "Intelligent IoT irrigation system using Arduino and soil moisture sensors for efficient automated watering with relay control.",
      tech: ["Arduino", "Soil Moisture Sensor", "Embedded C", "IoT"],
      gradient: "from-blue-500 to-cyan-500",
      code: "https://github.com/techbypradnya/Smart-Water-Irrigation-System/tree/main",
      featured: true,
    },
    {
      icon: Heart,
      title: "Nexus.AI – Intelligent Chatbot",
      description:
        "Flask-based NLP chatbot with machine learning, featuring animated interface for immersive conversational experiences.",
      tech: ["Python", "Flask", "NLP", "SpaCy", "Scikit-Learn"],
      gradient: "from-rose-500 to-pink-600",
      code: "https://github.com/techbypradnya/Nexus.AI-🤖-AI-Powered-Chatbot-using-Linear-Algebra-NLP-Nexus.AI",
      featured: true,
    },
    {
      icon: Database,
      title: "Gemini Image Analysis App",
      description:
        "AI-powered image analysis leveraging Google Gemini API to extract intelligent insights and metadata from images.",
      tech: ["Python", "AI", "Image Analysis", "Gemini API"],
      gradient: "from-indigo-500 to-blue-500",
      code: "https://github.com/techbypradnya/Gemini-Image-Analysis-Application",
      featured: true,
    },
    {
      icon: Heart,
      title: "Blood Connect Pro: Smart Blood Donation & Emergency Donor Finder",
      description:
        "Comprehensive full-stack blood donation platform with 5+ user roles (donor, hospital, blood bank, NGO, admin), secure JWT authentication, 10+ RESTful APIs, real-time donor management, responsive dashboards with SOS emergency workflows, and intelligent donor search with blood inventory tracking.",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "shadcn/ui", "JWT Auth", "REST APIs"],
      gradient: "from-red-600 to-pink-500",
      featured: true,
    },
    {
      icon: Heart,
      title: "Gemini Health App",
      description:
        "AI-powered health application using Google Gemini API for personalized wellness recommendations and health insights.",
      tech: ["AI", "Gemini API", "Healthcare", "Python"],
      gradient: "from-red-500 to-orange-500",
      code: "https://github.com/techbypradnya/Gemini-Health-App",
      featured: false,
    },
    {
      icon: Heart,
      title: "Fitness Challenge App",
      description:
        "Python-based fitness tracking application managing challenges, progress tracking, and user motivation towards health goals.",
      tech: ["Python", "Tkinter", "Fitness Tracker"],
      gradient: "from-green-500 to-lime-500",
      code: "https://github.com/techbypradnya/Fitness-challenge-app-python",
      featured: false,
    },
  ];

  const projects = allProjects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Building innovative solutions to real-world problems with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Code & Demo Buttons */}
              <div className="flex space-x-4 pt-4 border-t border-white/10">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
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
                    aria-label={`View ${project.title} demo`}
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
