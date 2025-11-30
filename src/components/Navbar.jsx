"use client";

import { useState, useEffect } from "react";
import NavbarClientWrapper from "./NavbarClientWrapper";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
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
            <a href="/properties" className="hover:text-[#e41e25]">
              Properties
            </a>
            <a href="#projects" className="hover:text-[#e41e25]">
              Projects
            </a>
            <a href="#media" className="hover:text-[#e41e25]">
              Media
            </a>
            <a href="#contact" className="hover:text-[#e41e25]">
              Contact
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <NavbarClientWrapper />
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
            <a href="/properties" className="block py-2">
              Properties
            </a>
            <a href="#projects" className="block py-2">
              Projects
            </a>
            <a href="#media" className="block py-2">
              Media
            </a>
            <a href="#contact" className="block py-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
