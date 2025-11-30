"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function NavbarClientWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center gap-4">
        {/* CTA with animated arrow */}
        <button
          onClick={() => setOpen(true)}
          className="group relative inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#e41e25] text-[#e41e25] bg-transparent hover:bg-[#e41e25] hover:text-white transition-all duration-300 ease-out overflow-visible"
          aria-label="Open Enquiry Form"
        >
          <span className="font-medium">Enquire Now</span>

          {/* Arrow SVG */}
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow transform-gpu"
            aria-hidden="true"
          >
            <path
              d="M5 12h11M14 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <EnquiryModal open={open} onClose={() => setOpen(false)} />

      {/* Scoped styles for the arrow animation */}
      <style jsx>{`
        .arrow {
          transform-origin: center;
          transform: rotate(-45deg) translate(0px, -1px);
          transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 400ms ease;
          will-change: transform;
        }

        /* Extremely smooth hover motion */
        :global(.group:hover) .arrow {
          transform: rotate(0deg) translateX(4px);
          opacity: 1;
        }

        /* Soft idle float animation */
        .group:not(:hover) .arrow {
          animation: arrow-idle 5000ms ease-in-out infinite;
        }

        @keyframes arrow-idle {
          0% {
            transform: rotate(-45deg) translate(0px, -1px);
          }
          50% {
            transform: rotate(-45deg) translate(0.5px, -0.7px);
          }
          100% {
            transform: rotate(-45deg) translate(0px, -1px);
          }
        }

        /* Stroke color shift */
        :global(.group:hover) .arrow path {
          stroke: white;
        }
      `}</style>
    </>
  );
}
