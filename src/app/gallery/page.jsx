"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearchPlus, FaCalendarAlt } from "react-icons/fa";

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Brand Color
const brandColor = "#e41e25";

// ================= MOCK DATA =================
// In a real app, this would come from a CMS or API/Database
const heroSlides = [
  {
    id: 1,
    src: "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-2.png", // Replace with actual image path
    title: "Sanjeevni Heights Grand Launch",
    date: "October 2023",
    desc: "A momentous occasion marking the beginning of a new landmark in Jaipur.",
  },
  {
    id: 2,
    src: "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-1.png", // Replace with actual image path
    title: "Annual Customer Appreciation Night",
    date: "December 2023",
    desc: "Celebrating the trust and support of our extended Sanjeevni family.",
  },
  {
    id: 3,
    src: "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-5.png", // Replace with actual image path
    title: "Best Developer Award 2023",
    date: "August 2023",
    desc: "Recognized for excellence in quality and timely delivery.",
  },
];

const galleryCategories = [
  "All",
  "Project Launches",
  "Events",
  "Site Progress",
  "CSR & Community",
];

const galleryImages = [
  // Project Launches
  {
    id: 1,
    src: "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-2.png",
    category: "Project Launches",
    title: "Skyline Towers Bhoomi Pujan",
    date: "Jan 15, 2024",
    featured: true,
  },
  {
    id: 2,
    src: "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-1.png",
    category: "Project Launches",
    title: "Heights Inauguration",
    date: "Oct 10, 2023",
  },
  // Events
  {
    id: 3,
    src: "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-4.png",
    category: "Events",
    title: "Diwali Gala 2023",
    date: "Nov 12, 2023",
    featured: true,
  },
  {
    id: 4,
    src: "/projects/ganesh-vihar/compressed/sanjeevni-buildhome-ganesh-vihar-tonk-road-4.webp",
    category: "Events",
    title: "Holi Celebration at Enclave",
    date: "Mar 25, 2024",
  },
  {
    id: 5,
    src: "/projects/ganesh-vihar/compressed/sanjeevni-buildhome-ganesh-vihar-tonk-road-2.webp",
    category: "Events",
    title: "Brokers Meet 2024",
    date: "Feb 01, 2024",
  },
  // Site Progress
  {
    id: 6,
    src: "/projects/pearl-2/compressed/sanjeevni-buildhome-pearl-2-tonk-road-2.webp",
    category: "Site Progress",
    title: "Phase 2 Construction Update",
    date: "Current",
  },
  {
    id: 7,
    src: "/projects/pearl-2/compressed/sanjeevni-buildhome-pearl-2-tonk-road-4.webp",
    category: "Site Progress",
    title: "Heights Finishing Touches",
    date: "Dec 2023",
    featured: true,
  },
  // CSR
  {
    id: 8,
    src: "/projects/pearl-2/compressed/sanjeevni-buildhome-pearl-2-tonk-road-1.webp",
    category: "CSR & Community",
    title: "Tree Plantation Drive",
    date: "Jul 05, 2023",
  },
];

// ================= MAIN COMPONENT =================
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [lightbox, setLightbox] = useState({ open: false, image: null });

  const openLightbox = (img) => setLightbox({ open: true, image: img });
  const closeLightbox = () => setLightbox({ open: false, image: null });

  // Filter logic
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-white dark:bg-neutral-900 overflow-hidden font-sans text-gray-800 pb-20">
      {/* ================= SECTION 1: HERO SWIPER SLIDER ================= */}
      {/* Using Swiper with EffectFade for a luxurious, smooth transition */}
      <div className="relative h-[60vh] md:h-[75vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // Customizing Swiper navigation color to match brand
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": brandColor,
          }}
          className="h-full w-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover brightness-[0.6]"
                priority={slide.id === 1}
              />
              {/* Slider Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 md:pb-32 text-white z-20"
                >
                  <div className="flex items-center text-sm md:text-base mb-3 opacity-80">
                    <FaCalendarAlt
                      className="mr-2"
                      style={{ color: brandColor }}
                    />
                    {slide.date}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight md:leading-tight max-w-3xl break-words">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-xl max-w-2xl font-light opacity-90 mt-2">
                    {slide.desc}
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ================= SECTION 2: INTRO & FILTERS ================= */}
      <section className="pt-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              Life at <span style={{ color: brandColor }}>Sanjeevni</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
              Explore moments from our grand launches, vibrant community
              gatherings, and milestones in our journey of building dreams.
            </p>
          </motion.div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border-2 ${
                  activeCategory === category
                    ? `bg-[${brandColor}] text-white border-[${brandColor}] shadow-md`
                    : "bg-white dark:bg-neutral-400 dark:text-white dark:border-gray-200  text-gray-600 border-gray-200 hover:border-[#e41e25] hover:text-[#e41e25] dark:hover:border-[#e41e25]"
                }`}
                // Inline style needed for dynamic brand color usage in Tailwind classes sometimes
                style={
                  activeCategory === category
                    ? { backgroundColor: brandColor, borderColor: brandColor }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* ================= SECTION 3: THE FILTERABLE GRID ================= */}
      <section className="px-6 md:px-12 lg:px-24 min-h-[500px]">
        <div className="max-w-7xl mx-auto">
          {/* Using Framer Motion's layout prop for smooth reordering animations when filtering.
            We use CSS Grid for a responsive layout.
          */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <GalleryItem
                  key={image.id}
                  image={image}
                  onOpen={openLightbox}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No images found in this category.
            </p>
          )}
        </div>
      </section>
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image?.src || "/images/placeholder.jpg"}
                alt={lightbox.image?.title || "Image"}
                fill
                className="object-contain"
              />

              <button
                onClick={closeLightbox}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-50 ml-2 text-white bg-[#e41e25] hover:border-[#e41e25] hover:bg-transparent hover:text-[#e41e25] border border-white/60 rounded-2xl p-2 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      ;
    </div>
  );
}

// ================= HELPER COMPONENT: SINGLE GALLERY ITEM =================
// Separated for cleaner code and easier animation management
const GalleryItem = ({ image, index, onOpen }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100 h-64 md:h-72 lg:h-80"
    >
      <Image
        src={image.src || "/images/placeholder.jpg"}
        alt={image.title || "Gallery image"}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={(e) => {
          e.currentTarget.src = "/images/placeholder.jpg";
        }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-20 bg-black/0 transition-all duration-300 group-hover:bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4 text-center cursor-pointer">
        <button
          onClick={() => onOpen(image)}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300"
        >
          <FaSearchPlus size={20} />
        </button>
        <h3 className="text-white font-bold text-lg">{image.title}</h3>
        <span className="text-white/80 text-sm mt-2">
          {image.category} — {image.date}
        </span>
      </div>

      {image.featured && (
        <div
          className="absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider z-30"
          style={{ backgroundColor: brandColor }}
        >
          Highlights
        </div>
      )}
    </motion.div>
  );
};
