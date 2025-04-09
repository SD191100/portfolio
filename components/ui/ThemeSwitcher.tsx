"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="group p-2 flex items-center gap-2 rounded-xl transition-all duration-300 hover:scale-105"
    >
      <div className="transition-transform duration-300 transform ">
        <Image
          src={isDarkMode ? "/logos/dark.svg" : "/logos/light.svg"}
          alt={isDarkMode ? "Dark mode" : "Light mode"}
          width={30}
          height={30}
          className="mt-1 transition-all duration-300"
        />
      </div>
      <span
        className="transition-transform duration-300 transform group-hover:scale-110"
      >
        {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>  );
};

export default ThemeSwitcher;
