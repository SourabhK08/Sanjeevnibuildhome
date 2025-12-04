"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * ProjectCard
 * Props:
 *  - p: { id, slug, title, price, city, images: [..], badges: ["FOR SELL","FEATURED"] }
 */
export default function ProjectCard({ p }) {
  const images =
    p.images && p.images.length ? p.images : ["/images/placeholder.png"];
  const priceText = p.price
    ? `₹${(p.price / 1000).toLocaleString()} per sq. yard`
    : "Price on request";

  return (
    <article
      className="group bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-400 rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2"
      aria-labelledby={`project-${p.id}-title`}
    >
      {/* IMAGE CAROUSEL */}
      <div className="card-swiper relative">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          slidesPerView={1}
          loop={images.length > 1}
          pagination={{ clickable: true }}
          navigation={images.length > 1}
          a11y={{ enabled: true }}
          className="h-48 sm:h-56 md:h-44 lg:h-52"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full bg-gray-100">
                <Image
                  src={src}
                  alt={`${p.title} image ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BADGES - top-left */}
        <div className="absolute top-3 left-3 flex gap-2 z-20">
          {(p.badges || []).slice(0, 2).map((b, i) => {
            const lb = (b || "").toLowerCase();
            const cls = lb.includes("featured")
              ? "bg-[#e51e25] text-white"
              : lb.includes("sell") ||
                lb.includes("for sell") ||
                lb.includes("for sale") ||
                lb.includes("sold out")
              ? "bg-[#e51e25] text-white"
              : "bg-white/90 dark:bg-[#808080ba] dark:text-white text-charcoal";

            return (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-full font-semibold shadow-sm ${cls}`}
              >
                {b}
              </span>
            );
          })}
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-4">
        <div
          className="text-base font-semibold text-[#e41e25]
"
        >
          {priceText}
        </div>

        <h3
          id={`project-${p.id}-title`}
          className="mt-3 font-semibold text-lg text-slate-900 dark:text-white"
        >
          {p.title}
        </h3>

        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-80"
            aria-hidden
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2.5" fill="currentColor" />
          </svg>
          <span>{p.city}</span>
        </div>
      </div>
    </article>
  );
}
