"use client";
import { useState, useEffect } from "react";

const useColor = () => {
  const [color, setColor] = useState<string>("green");

  useEffect(() => {
    // Load color from localStorage on mount
    const savedColor = localStorage.getItem("color") || "green";
    setColor(savedColor);

    // Listen for changes from other components
    const handleStorageChange = () => {
      setColor(localStorage.getItem("color") || "");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const updateColor = (newColor: string) => {
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };

  return { color, updateColor };
};

export default useColor;
