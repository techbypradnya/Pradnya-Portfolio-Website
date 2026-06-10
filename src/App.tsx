import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import FloatingShapes from './components/FloatingShapes';
import Education from './components/Education'; 
import Experience from "./components/Experience";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <FloatingShapes />
      <Navigation />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;
