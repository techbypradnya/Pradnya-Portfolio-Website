import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  ChevronDown,
  Instagram,
  FileDown,
} from "lucide-react";
import myphoto from "../assets/Pradnya_Profile.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 dark:from-purple-900/20 dark:to-blue-900/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">

          {/* Profile Photo */}
          <div
            className={`mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative inline-block">
              {/* Outer glowing circular border (bigger size) */}
              <div className="w-64 h-64 mx-auto rounded-full gradient-purple-blue p-[4px] shadow-xl shadow-purple-500/30">
                {/* Inner image */}
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={myphoto}
                    alt="Profile photo of Pradnya Shailendra Pangavhane"
                    className="w-full h-full object-cover object-center scale-105"
                  />
                </div>
              </div>

              {/* Glow Animation */}
              <div className="absolute inset-0 rounded-full animate-pulse shadow-[0_0_60px_15px_rgba(139,92,246,0.35)]"></div>
            </div>
          </div>

          {/* Name */}
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="gradient-text">
              Pradnya Shailendra Pangavhane
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-2xl text-gray-500 dark:text-gray-300 mb-10 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="px-3 py-1 rounded-full bg-purple-600/20 dark:bg-purple-400/20 text-purple-700 dark:text-purple-300 font-medium backdrop-blur-md">
              AI & ML Enthusiast
            </span>{" "}
            • Electronics & Computer Engineering Student
          </p>

          {/* Social Media Icons */}
          <div
            className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              {
                icon: <Github className="w-6 h-6" />,
                link: "https://github.com/techbypradnya",
                glow: "hover:shadow-purple-500/50",
                label: "GitHub",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                link: "https://linkedin.com/in/pradnya-pangavhane-446793289",
                glow: "hover:shadow-blue-500/50",
                label: "LinkedIn",
              },
              {
                icon: <Instagram className="w-6 h-6" />,
                link: "https://www.instagram.com/pradnyapangavhane._?igsh=MWdmemxvamQxczlhYg==",
                glow: "hover:shadow-pink-500/50",
                label: "Instagram",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className={`p-3 glass rounded-full transition-all duration-300 ${item.glow}
                hover:scale-125 hover:-rotate-6 hover:bg-gradient-to-br from-purple-500/20 to-blue-500/20`}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Coding Profile Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://leetcode.com/u/Pradnya_Pangavhane_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              title="LeetCode - Pradnya_Pangavhane_"
              className="px-5 py-2 rounded-full glass text-gray-700 dark:text-gray-200 hover:gradient-purple-blue hover:text-white transition-all"
            >
              LeetCode
            </a>
            <a
              href="https://www.hackerrank.com/profile/pradnyapangavha2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank profile"
              title="HackerRank - pradnyapangavha2"
              className="px-5 py-2 rounded-full glass text-gray-700 dark:text-gray-200 hover:gradient-purple-blue hover:text-white transition-all"
            >
              HackerRank
            </a>
            <a
              href="https://www.codechef.com/users/pradnya_001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef profile"
              title="CodeChef - pradnya_001"
              className="px-5 py-2 rounded-full glass text-gray-700 dark:text-gray-200 hover:gradient-purple-blue hover:text-white transition-all"
            >
              CodeChef
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/pradnyapanmrwx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GeeksforGeeks profile"
              title="GfG - pradnyapanmrwx"
              className="px-5 py-2 rounded-full glass text-gray-700 dark:text-gray-200 hover:gradient-purple-blue hover:text-white transition-all"
            >
              GFG
            </a>
          </div>

          {/* Download CV */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
          <a
            href="/Pradnya_Pangavhane_CV.pdf"
            download="Pradnya_Pangavhane_CV.pdf"
            aria-label="Download Pradnya Pangavhane CV"
            title="Download CV - Pradnya Pangavhane"
            className="px-8 py-3 font-semibold rounded-full gradient-purple-blue text-white shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 inline-flex items-center gap-2"
          >
            <FileDown className="w-5 h-5" />
            Download My CV
          </a>
          </div>

          {/* Scroll Down */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            aria-label="Scroll to About section"
            className="mt-12 inline-block"
          >
            <ChevronDown className="w-10 h-10 text-purple-600 dark:text-purple-400 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
    
    
  );
};

export default Hero;
