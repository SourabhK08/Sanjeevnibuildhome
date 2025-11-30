"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroImmersive({
  images = [],
  title,
  subtitle,
  pills = [],
}) {
  return (
    <section className="w-full relative">
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="relative"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[65vh] md:h-[75vh] lg:h-[80vh]">
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover w-full h-full kb-scale"
                  priority={idx === 0}
                />
                {/* linear overlay for contrast */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute inset-0 bg-linear-to-t
      from-black/70 via-black/40 to-transparent"
                  />

                  {/* Left vignette for extra readability */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1/3 
      bg-linear-to-r from-black/50 via-black/20 to-transparent"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay content (fixed left column, responsive) */}
      <div className="absolute inset-x-4 md:inset-x-12 top-8 md:top-16 z-50 pointer-events-none">
        <div className="max-w-xl pointer-events-auto text-white">
          <div className="inline-block glass px-3 py-1 rounded-full text-xs mb-4">
            Most affordable JDA Approved properties in Jaipur
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            {title || "JDA - RERA Approved Plots"}
          </h1>

          <p className="mt-3 text-gray-200 max-w-xl">
            {subtitle ||
              "Plots, Villas, and Farmhouse at Jaipur's fastest growing locations"}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {pills.map((p) => (
              <button
                key={p}
                className="px-4 py-1 rounded-full bg-primary text-white text-sm shadow-sm"
              >
                {p}
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-block px-5 py-3 rounded bg-primary text-white font-medium"
            >
              Request Callback
            </a>
            <a
              href="/properties"
              className="inline-block px-5 py-3 rounded border border-white/20 text-white"
            >
              View Listings
            </a>
          </div>
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #e51e25 !important;
          }
          .swiper-pagination-bullet-active {
            background: #e51e25 !important;
          }
        `}</style>
      </div>
    </section>
  );
}
