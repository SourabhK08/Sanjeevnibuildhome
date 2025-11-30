"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

/**
 * ProjectsSection
 * Props:
 *  - items: array of property objects
 *  - pageSize: how many cards per page (default 3)
 */
export default function ProjectsSection({ items = [], pageSize = 3 }) {
  const containerRef = useRef(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pages = useMemo(() => {
    const res = [];
    for (let i = 0; i < totalPages; i++) res.push(i);
    return res;
  }, [totalPages]);

  // Prepare pages: array of arrays (each subarray = cards on that page)
  const pagedItems = useMemo(() => {
    const out = [];
    for (let i = 0; i < totalPages; i++) {
      out.push(items.slice(i * pageSize, i * pageSize + pageSize));
    }
    return out;
  }, [items, pageSize, totalPages]);

  // Scroll to page index (smooth)
  const scrollToPage = (index) => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: index * width, behavior: "smooth" });
    setPage(index);
  };

  // Prev / Next handlers
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  // When page state changes from prev/next/dot, scroll container
  useEffect(() => {
    scrollToPage(page);
  }, [page]); // eslint-disable-line

  // Update page on manual scroll (swipe/drag)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = null;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft;
        const pageWidth = el.clientWidth || 1;
        const idx = Math.round(scrollLeft / pageWidth);
        if (idx !== page) setPage(idx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // resize observer to keep in sync if container width changes
    const ro = new ResizeObserver(() => {
      // re-scroll to current page after layout change
      scrollToPage(page);
    });
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [page]); // eslint-disable-line

  // keyboard left/right for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // run once

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
          Our Top Listed Ongoing Projects
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
          Based on your view history
        </p>
      </div>

      {/* Container with horizontal pages */}
      <div
        ref={containerRef}
        className="relative overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex w-full">
          {pagedItems.map((pageItems, pi) => (
            <div
              key={pi}
              className="snap-start shrink-0 w-full px-2"
              aria-hidden={pi !== page}
            >
              {/* grid inside each page */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((p) => (
                  <ProjectCard key={p.id} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center items-center gap-3">
        {pages.map((i) => {
          const isActive = i === page;
          return (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`relative w-3 h-3 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-primary w-8 h-3 rounded-full"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
