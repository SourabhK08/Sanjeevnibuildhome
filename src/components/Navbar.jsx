"use client";

import { useState, useEffect } from "react";
import NavbarClientWrapper from "./NavbarClientWrapper";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Navbar.jsx

  // Navbar.jsx

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // 1. Update the local state
    setTheme(newTheme);

    // 2. Update the DOM immediately and definitively
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      // CRITICAL: Ensure light is removed, just in case
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      // CRITICAL: Ensure light is added if you rely on it elsewhere (though Tailwind uses absence of dark)
      // document.documentElement.classList.add("light"); // Not usually needed for Tailwind
    }

    // 3. Update localStorage
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    // CRITICAL: Ensure the initial DOM state matches the saved state
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      // Ensure 'dark' is removed if the saved theme is light
      document.documentElement.classList.remove("dark");
    }
  }, []); // The empty array ensures this only runs ONCE on mount

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* <div className="backdrop-blur-md bg-white/70 dark:bg-black/60 transition-shadow"> */}
      <div className="backdrop-blur-md bg-white/70 dark:bg-black/60 transition-shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Sanjeevni BuildHome" className="h-12" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="/" className="hover:text-[#e41e25]">
              Home
            </a>
            <a href="/about-us" className="hover:text-[#e41e25]">
              About Us
            </a>
            <a href="/properties" className="hover:text-[#e41e25]">
              Our Properties
            </a>
            <a href="#media" className="hover:text-[#e41e25]">
              Our Gallery
            </a>
            <a href="/contact-us" className="hover:text-[#e41e25]">
              Contact Us
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <NavbarClientWrapper />
            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? (
                // Moon icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                // Sun icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 dark:bg-black/70 border-t border-gray-100 dark:border-gray-800 px-4 py-4">
            <a href="/" className="block py-2">
              Home
            </a>
            <a href="#projects" className="block py-2">
              About Us
            </a>
            <a href="/properties" className="block py-2">
              Properties
            </a>

            <a href="#media" className="block py-2">
              Our Gallery
            </a>
            <a href="#contact" className="block py-2">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
