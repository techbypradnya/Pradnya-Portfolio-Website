import { useState } from "react";
import {
  Trophy,
  Award,
  Star,
  Users,
} from "lucide-react";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("academic");

  const tabs = [
    { id: "academic", label: "Academic", icon: Star },
    { id: "competitive", label: "Competitive", icon: Trophy },
    { id: "leadership", label: "Leadership", icon: Users },
  ];

  const data = {
    academic: [
      {
        icon: Star,
        title: "Academic Excellence",
        subtitle: "CGPA 9.43",
        color: "from-yellow-400 to-orange-500",
        year: "2023–2027",
      },
      {
        icon: Award,
        title: "Precision Control Brake – Registered Design (Patent)",
        subtitle: "Design No. 433263-001 • Serial No. 187907",
        color: "from-orange-500 to-red-500",
        year: "2024",
      },
      {
        icon: Award,
        title: "Mock Placement Drive – Consolation Prize",
        subtitle: "Sanjivani College of Engineering",
        color: "from-amber-500 to-yellow-600",
        year: "2025",
      },
      {
        icon: Award,
        title: "NPTEL Certification — Project Management",
        subtitle: "Score: 64%",
        color: "from-purple-500 to-indigo-500",
        year: "2025",
      },
      {
        icon: Award,
        title: "NPTEL Certification — Soft Skills & Personality",
        subtitle: "Score: 73%",
        color: "from-pink-500 to-rose-500",
        year: "2024",
      },
      {
        icon: Award,
        title: "Profest Organization (AIML Domain) – 2nd Rank",
        subtitle: "Recognized by ECE Department",
        color: "from-amber-500 to-yellow-600",
        year: "2025",
      },
      {
        icon: Trophy,
        title: "Udbhav Inter Mentor Batch Competition",
        subtitle: "3rd Prize • Aptitude, GD & Startup Pitch",
        color: "from-amber-500 to-yellow-600",
        year: "2024",
      },
    ],

    competitive: [
      {
        icon: Trophy,
        title: "TCS CodeVita Season 12",
        subtitle: "Global Rank – 1620",
        color: "from-blue-500 to-indigo-500",
        year: "2024",
      },
      {
        icon: Trophy,
        title: "TCS CodeVita Season 13",
        subtitle: "Global Rank – 3755",
        color: "from-cyan-500 to-blue-600",
        year: "2025",
      },
      {
        icon: Trophy,
        title: "WWT Unravel 2025 (Hackathon)",
        subtitle: "Smart Food Recommendation System • Cleared Both Rounds",
        color: "from-amber-500 to-red-500",
        year: "2025",
      },
      {
        icon: Trophy,
        title: "WWT All India Women-Only Hackathon",
        subtitle: "Voice-Based Financial Literacy Assistant (Idea Submission)",
        color: "from-pink-500 to-rose-600",
        year: "2025",
      },
      {
        icon: Trophy,
        title: "HackVega Nationwide Hackathon",
        subtitle: "Recognized as 'Bright Star' • Cleared Aptitude & Technical Rounds",
        color: "from-violet-500 to-purple-600",
        year: "2025",
      },
      {
        icon: Trophy,
        title: "GirlScript Summer of Code (GSSoC) 2025",
        subtitle: "Selected Contributor — Open Source Program",
        color: "from-pink-500 to-violet-600",
        year: "2025",
      },
      {
        icon: Trophy,
        title: "Udbhav Inter Mentor Batch Competition",
        subtitle: "3rd Prize • Aptitude, GD & Startup Pitch",
        color: "from-amber-500 to-yellow-600",
        year: "2024",
      },
    ],

    leadership: [
      {
        icon: Users,
        title: "AI/ML Domain Expert",
        subtitle: "AWS Cloud Club",
        color: "from-green-500 to-teal-500",
        year: "2024–Present",
      },
    ],
  };

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold gradient-text mb-10">
          Achievements & Recognition
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105"
                }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 snap-x snap-mandatory px-2">
            {data[activeTab].map((item, index) => (
              <div
                key={index}
                className="snap-center min-w-[260px] bg-white dark:bg-gray-900 glass
                p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-xl
                transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-4 rounded-xl mx-auto flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-center text-gray-800 dark:text-white">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-purple-600 dark:text-purple-300 text-center font-semibold mt-1">
                  {item.subtitle}
                </p>

                {/* Year */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                  {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-12 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          A journey marked by learning, resilience, innovation, and impact.
        </p>

      </div>
    </section>
  );
};

export default Achievements;
