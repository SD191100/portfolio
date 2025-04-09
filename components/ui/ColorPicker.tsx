"use client";
import { useState, useRef, useEffect } from "react";
import useColor from "@/lib/hooks/UseColor";

const ColorDropdown = () => {
  const { color, updateColor } = useColor();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log(color, "Hello")

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-white rounded-md px-2"
      >
        {color ? color.charAt(0).toUpperCase() + color.slice(1) : "Select Color"}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 border rounded-md shadow-lg">
          {["blue", "green", "purple"].map((option) => (
            <li
              key={option}
              className={`px-4 py-2 hover:bg-${option}-200 dark:hover:bg-${option}-700 cursor-pointer ${color === option ? "font-semibold" : ""
                }`}
              onClick={() => {
                updateColor(option);
                setIsOpen(false); // Close dropdown after selection
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorDropdown;
