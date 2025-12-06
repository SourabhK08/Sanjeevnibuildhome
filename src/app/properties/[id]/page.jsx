"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaCheckCircle,
  FaPhoneAlt,
  FaArrowLeft,
} from "react-icons/fa";

// IMPORT DATA
import propertiesData from "@/data/properties.json";

const brandColor = "#e41e25";

// Standard animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// PARAMS are automatically passed to pages in dynamic routes
export default function PropertyDetailsPage({ params }) {
  // 1. Find the property that matches the ID in the URL
  // NOTE: params.id is a string, make sure your data IDs are also strings for comparison

  console.log("params->", params.id);
  console.log("properties->", propertiesData);

  const property = propertiesData.find((p) => p.id === params.id);

  // 2. Handle case where invalid ID is entered in URL
  if (!property) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-400 mb-4">
          Property Not Found
        </h2>
        <Link
          href="/properties"
          className="text-[#e41e25] flex items-center gap-2 font-semibold"
        >
          <FaArrowLeft /> Back to All Properties
        </Link>
      </div>
    );
  }

  const isSoldOut = property.badges.includes("SOLD OUT");
  const formattedPrice =
    property.price > 0
      ? `₹${property.price.toLocaleString("en-IN")}`
      : "Price on Request";

  return (
    <div className="bg-white font-sans text-gray-800 pb-20">
      {/* ================= HEADER & HERO IMAGE ================= */}
      {/* Using the first image as a large hero banner */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={property.images[0] || "/images/placeholder.jpg"}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:px-24 text-white z-10">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/properties"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Listings
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
              {property.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`text-sm font-bold px-4 py-1 rounded-full uppercase ${
                    badge === "SOLD OUT" ? "bg-gray-600" : "bg-[#e41e25]"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {property.title}
            </h1>
            <p className="text-xl flex items-center text-white/90">
              <FaMapMarkerAlt className="mr-2" style={{ color: brandColor }} />{" "}
              {property.location}
            </p>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT COLUMN (Details) */}
        <motion.div
          className="lg:col-span-2 space-y-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Overview Specs */}
          <div className="bg-gray-50 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-100">
            <SpecItem label="Property Type" value={property.propertyType} />
            <SpecItem
              label="Project Size"
              value={property.propertySize}
              icon={<FaRulerCombined style={{ color: brandColor }} />}
            />
            <SpecItem label="Development Year" value={property.yearDeveloped} />
            <SpecItem label="City" value={property.city} />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
              About This Project
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Features / Amenities (If they exist in data) */}
          {property.features && (
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                Key Features & Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle
                      className="mr-3 flex-shrink-0"
                      style={{ color: brandColor }}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Simple Image Gallery (Remaining Images) */}
          {property.images.length > 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.images.slice(1).map((imgSrc, index) => (
                  <div
                    key={index}
                    className="relative h-48 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={imgSrc}
                      alt={`Gallery ${index}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* RIGHT COLUMN (Sticky Sidebar) */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="sticky top-24 bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <div className="mb-6">
              <p className="text-gray-500 mb-1">Starting Price</p>
              <h3
                className={`text-3xl font-bold ${
                  isSoldOut ? "text-gray-600" : "text-[#e41e25]"
                }`}
              >
                {formattedPrice}
              </h3>
              {property.price > 0 && property.priceUnit && (
                <p className="text-gray-500 text-sm">{property.priceUnit}</p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button
                disabled={isSoldOut}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isSoldOut
                    ? "bg-gray-400 cursor-not-allowed"
                    : `bg-[${brandColor}] hover:shadow-xl hover:scale-[1.02]`
                }`}
                style={!isSoldOut ? { backgroundColor: brandColor } : {}}
              >
                {isSoldOut ? "Sold Out" : "Schedule a Site Visit"}
              </button>
              <button className="w-full py-4 rounded-xl font-bold text-gray-700 text-lg border-2 border-gray-200 hover:border-[#e41e25] hover:text-[#e41e25] transition-all flex items-center justify-center gap-2">
                <FaPhoneAlt /> Talk to an Expert
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-6">
              Need more details? Call us at +91 98765 43210 or visit our office.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Helper for Specs grid
function SpecItem({ label, value, icon }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
        {icon} {label}
      </p>
      <p
        className="text-lg font-semibold text-gray-800 line-clamp-1"
        title={value}
      >
        {value}
      </p>
    </div>
  );
}
