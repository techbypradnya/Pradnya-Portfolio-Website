import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-24 right-6 z-50 p-3 rounded-full glass hover:scale-110 transition-transform duration-300 gradient-glow"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-purple-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
