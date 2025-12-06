"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaArrowRight,
  FaFire,
} from "react-icons/fa";

// IMPORT YOUR DATA
import propertiesData from "@/data/properties.json";

const brandColor = "#e41e25";

// Filter Categories defined exactly as requested
const filterCategories = [
  "All",
  "Ajmer Road",
  "Diggi Road",
  "Tonk Road",
  "Jagatpura",
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

export default function PropertiesListingPage() {
  // State for filtering
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic based on the new locationCategory field
  const filteredProperties =
    activeFilter === "All"
      ? propertiesData
      : propertiesData.filter((item) => item.locationCategory === activeFilter);

  return (
    // Added dark mode background to main container
    <div className="bg-gray-50 dark:bg-black min-h-screen pb-20 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-gray-900 dark:bg-neutral-900 text-white py-24 px-6 text-center relative overflow-hidden">
        {/* Darker pattern overlay for dark mode */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('/images/pattern.png')]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your <span style={{ color: brandColor }}>Dream Space</span>
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-400 leading-relaxed">
            Explore Jaipur's finest residential and investment opportunities,
            curated just for you.
          </p>
        </motion.div>
      </div>

      {/* ================= FILTER TABS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-8 relative z-30 mb-12">
        <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-lg dark:shadow-gray-900/30 flex flex-wrap justify-center gap-3 border border-gray-100 dark:border-gray-400 transition-colors duration-300">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              // Conditional classes for active state AND dark mode support
              className={`px-6 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300 border-2 ${
                activeFilter === category
                  ? `bg-[${brandColor}] text-white border-transparent shadow-md transform scale-105`
                  : "bg-gray-50 dark:bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-400 dark:hover:border-[#e41e25] hover:border-[#e41e25] hover:text-[#e41e25] dark:hover:text-[#e41e25]"
              }`}
              // Inline style needed for dynamic brand color usage in Tailwind sometimes
              style={
                activeFilter === category ? { backgroundColor: brandColor } : {}
              }
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ================= PROPERTIES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        {/* Using AnimatePresence for smooth filtering transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              // Empty state message
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400"
              >
                <h3 className="text-2xl font-bold mb-2">No Properties Found</h3>
                <p>
                  We couldn't find any properties in {activeFilter} at the
                  moment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

// ================= REDESIGNED PROPERTY CARD COMPONENT =================
function PropertyCard({ property }) {
  const isSoldOut = property.badges.includes("SOLD OUT");
  const formattedPrice =
    property.price > 0
      ? `₹${property.price.toLocaleString("en-IN")}`
      : "Price on Request";

  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      // Card container with Dark Mode styles (bg-gray-800, border-gray-700)
      className="bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 group border border-gray-100 dark:border-gray-400 relative"
    >
      {/* >>>>>> THE NEW "HOT" RIBBON BADGE <<<<<< */}
      {/* Only show if featured is true in data */}
      {property.featured && (
        <div
          className="absolute top-0 right-8 z-20 w-10 h-12 flex items-start justify-center pt-2 text-2xl shadow-lg"
          // Using clip-path to create the swallowtail ribbon shape
          style={{
            backgroundColor: brandColor,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
          }}
        >
          <FaFire
            className="animate-pulse drop-shadow-sm text-white"
            aria-label="Hot Deal"
            size={22} // adjust icon size
          />
        </div>
      )}

      {/* Image Thumb & Standard Badges */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={property.images[0] || "/images/placeholder.jpg"}
          alt={property.title}
          fill
          // Added subtle brightness filter in dark mode so images aren't too jarring
          className="object-cover transition-transform duration-700 group-hover:scale-110 dark:brightness-90"
        />
        {/* Standard Badges (Top Left) */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {property.badges.map((badge, index) => (
            <span
              key={index}
              className={`text-[10px] font-extrabold text-white px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm backdrop-blur-md bg-opacity-90 ${
                badge === "SOLD OUT" ? "bg-gray-800" : "bg-[#e41e25]"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
        {/* Dark gradient overlay at bottom of image for text readability */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
      </div>

      {/* Card Content with Dark Mode Text Support */}
      <div className="p-7 relative">
        {/* Location */}
        <div className="mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center font-medium">
            <FaMapMarkerAlt className="mr-1.5" style={{ color: brandColor }} />
            <span className="line-clamp-1">
              {property.area}, {property.city}
            </span>
          </p>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-1 group-hover:text-[#e41e25] dark:group-hover:text-[#e41e25] transition-colors">
          {property.title}
        </h3>

        {/* Key Specs Row (Adapted for Dark Mode) */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-6 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-neutral-800 p-4 rounded-xl">
          {property.bedrooms > 0 && (
            <div className="flex items-center font-medium">
              <FaBed className="mr-2 text-gray-400 dark:text-gray-500" />{" "}
              {property.bedrooms} Beds
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center font-medium">
              <FaBath className="mr-2 text-gray-400 dark:text-gray-500" />{" "}
              {property.bathrooms} Baths
            </div>
          )}
          <div className="flex items-center font-medium">
            <FaRulerCombined className="mr-2 text-gray-400 dark:text-gray-500" />{" "}
            {property.propertySize}
          </div>
        </div>

        {/* Footer: Price and CTA */}
        <div className="flex items-end justify-between border-t border-gray-100 dark:border-gray-400 pt-6">
          <div>
            {property.price > 0 && property.priceUnit && (
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
                Starting From
              </p>
            )}
            <span
              className={`text-2xl font-extrabold ${
                isSoldOut
                  ? "text-gray-500 dark:text-gray-400"
                  : "text-[#e41e25]"
              }`}
            >
              {formattedPrice}
            </span>
            {/* Show unit if price exists */}
            {property.price > 0 && property.priceUnit && !isSoldOut && (
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium ml-1">
                {" "}
                / {property.priceUnit}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <Link href={`/properties/${property.id}`}>
            <button
              className="
      w-12 h-12 rounded-full flex items-center justify-center
      transition-all duration-300 shadow-md
      bg-white text-[#e41e25]
      dark:bg-neutral-800 dark:text-[#e41e25]
      hover:bg-[#e41e25] hover:text-white
      dark:hover:bg-[#e41e25] dark:hover:text-white
      group-hover:scale-110
    "
            >
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
