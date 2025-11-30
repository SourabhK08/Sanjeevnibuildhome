"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ p }) {
  // p: { id, slug, title, price, city, images: [...], badges: [...] }
  const imageSrc = p.images?.[0] || "/images/placeholder.png";
  const priceText = p.price
    ? `₹${(p.price / 1000).toLocaleString()} per sq. yard`
    : "Price on request";

  return (
    <article
      className="group bg-white/80 dark:bg-slate-900/60 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
      aria-labelledby={`project-${p.id}-title`}
    >
      <Link href={`/properties/${p.slug}`} className="block relative h-48 sm:h-56 md:h-44 lg:h-52">
        <Image
          src={imageSrc}
          alt={p.title || "project image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-[450ms] ease-out"
          priority={false}
        />
        {/* badges at top-left */}
        <div className="absolute top-3 left-3 flex gap-2">
          {(p.badges || []).slice(0, 2).map((b, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded-full font-semibold ${
                b.toLowerCase().includes("featured")
                  ? "bg-primary text-white"
                  : "bg-amber-300 text-amber-900"
              }`}
            >
              {b}
            </span>
          ))}
        </div>

        {/* quick heart/like button top-right */}
        <button
          aria-label="Save property"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/70 flex items-center justify-center text-rose-500 shadow-sm hover:scale-105 transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 21s-7.5-4.35-10-7.07C-1.5 9.9 3.3 4 7.8 6.3 9.6 7.3 12 8.5 12 8.5s2.4-1.2 4.2-2.2C20.7 4 24.5 9.9 22 13.93 19.5 16.65 12 21 12 21z" />
          </svg>
        </button>
      </Link>

      <div className="p-4">
        <div className="text-sm font-semibold text-primary">{priceText}</div>
        <h3 id={`project-${p.id}-title`} className="mt-2 font-semibold text-lg text-slate-900 dark:text-white">
          {p.title}
        </h3>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-80" aria-hidden>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5" fill="currentColor" />
          </svg>
          <span>{p.city}</span>
        </div>
      </div>
    </article>
  );
}
