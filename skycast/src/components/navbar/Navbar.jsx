import { useState } from "react";
import { motion } from "framer-motion";
import { CloudSun, MapPin, Home, Info, Sun, Moon } from "lucide-react";
import { navbarAnimation } from "../utils/motionConfig";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

// Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "Weather", icon: <CloudSun size={18} />, href: "/weather" },
    { name: "Maps", icon: <MapPin size={18} />, href: "/maps" },
    { name: "About", icon: <Info size={18} />, href: "/about" },
  ];

  return (
    <motion.nav
      {...navbarAnimation}
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md p-4 sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
            
          <CloudSun size={24} className="text-blue-500" />
          <span>SkyCast</span>

        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">

          {darkMode ? <Sun size={20} /> : <Moon size={20} />}

        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
