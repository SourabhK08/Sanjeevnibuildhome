"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons (using react-icons)
import {
  FaHandshake,
  FaBuilding,
  FaAward,
  FaShieldAlt,
  FaChartLine,
  FaDraftingCompass,
} from "react-icons/fa";

// Brand Color
const brandColor = "#e41e25";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUsPage() {
  // Refs for the stats counter section to trigger animation on scroll
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden font-sans text-gray-800 dark:text-gray-100">
      {/* ================= SECTION 1: HERO BANNER ================= */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {/* Replace '/images/hero-bg.jpg' with your actual high-end property image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/ganesh-vihar/compressed/sanjeevni-buildhome-ganesh-vihar-tonk-road-1.webp" // CHANGE THIS PATH
            alt="Sanjeevni Luxury Real Estate"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Building Dreams,{" "}
            <span style={{ color: brandColor }}>Crafting Legacies.</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light opacity-90">
            Welcome to Sanjeevni Buildhome. Where every structure tells a story.
          </p>
          <div className="mt-8 h-1 w-24 bg-[#e41e25] mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* ================= SECTION 2: VISION & MISSION ================= */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side: Image */}
            <motion.div
              variants={fadeInUp}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Replace '/images/vision-bg.jpg' with an image of happy families or modern architecture */}
              <Image
                src="/projects/ganesh-vihar/compressed/sanjeevni-buildhome-ganesh-vihar-tonk-road-3.webp" // CHANGE THIS PATH
                alt="Our Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Shaping Skylines & Lives
                </h3>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <div className="space-y-12">
              {/* Vision */}
              <motion.div
                variants={fadeInUp}
                className="pl-6 border-l-4"
                style={{ borderColor: brandColor }}
              >
                <div className="flex items-center mb-4">
                  <FaDraftingCompass
                    className="text-3xl mr-3"
                    style={{ color: brandColor }}
                  />
                  <h2 className="text-3xl font-bold uppercase tracking-wide">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  At Sanjeevni, our vision is to build more than just homes — we
                  aspire to create vibrant communities where families can grow,
                  dreams can flourish, and every moment finds meaning. We aim to
                  set new benchmarks in real estate by blending modern planning
                  with timeless values of trust, transparency, and quality. Our
                  vision is to be recognized as a developer that doesn’t just
                  shape skylines, but also shapes lives.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                variants={fadeInUp}
                className="pl-6 border-l-4"
                style={{ borderColor: brandColor }}
              >
                <div className="flex items-center mb-4">
                  <FaBuilding
                    className="text-3xl mr-3"
                    style={{ color: brandColor }}
                  />
                  <h2 className="text-3xl font-bold uppercase tracking-wide">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Our mission is to deliver thoughtfully designed, JDA-approved
                  projects that bring together comfort, security, and modern
                  amenities, while keeping affordability and long-term value at
                  the heart of every development. Every project we undertake is
                  a promise — a promise to provide families with a home they can
                  truly call their own, and investors with an asset that grows
                  with time.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: JOURNEY IN NUMBERS (Animated Stats) ================= */}
      {/* Using a dark background here for luxury contrast */}
      <section
        className="py-24 bg-gray-900 text-white relative overflow-hidden"
        ref={statsRef}
      >
        {/* Subtle background pattern overlaid */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-gray-400 dark:text-gray-300 max-w-xl mx-auto">
              Every milestone is built on trust, commitment, and happy families.
            </p>
            <div
              className="mt-6 mx-auto w-16 h-1"
              style={{ backgroundColor: brandColor }}
            ></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Stat Item 1 */}
            <StatItem
              inView={statsInView}
              end={20}
              suffix="+"
              label="Years of Excellence"
              desc="Two Decades Of Building Trust."
            />
            {/* Stat Item 2 */}
            <StatItem
              inView={statsInView}
              end={35}
              suffix="+"
              label="Successful Projects"
              desc="Reflecting Our Promise Of Perfection."
            />
            {/* Stat Item 3 */}
            <StatItem
              inView={statsInView}
              end={5000}
              suffix="+"
              label="Happy Families"
              desc="Found Their Dream Home With Us."
            />
            {/* Stat Item 4 */}
            <StatItem
              inView={statsInView}
              end={100}
              suffix="%"
              label="Commitment & Trust"
              desc="The trust we continue to earn."
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY SANJEEVNI ================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why{" "}
              <span style={{ color: brandColor }}>Sanjeevni Buildhome?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We bring together years of expertise and transparent practices to
              deliver not just properties, but a lifestyle of comfort, security,
              and long-term value.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Feature Card 1 */}
            <FeatureCard
              icon={
                <FaAward
                  className="text-5xl mb-6"
                  style={{ color: brandColor }}
                />
              }
              title="Quality Building"
              desc="Built with premium materials, modern technology, and strict quality control ensuring durability, safety, and timeless design."
            />
            {/* Feature Card 2 */}
            <FeatureCard
              icon={
                <FaShieldAlt
                  className="text-5xl mb-6"
                  style={{ color: brandColor }}
                />
              }
              title="Dispute-Free Properties"
              desc="Clear titles, complete legal due diligence, and transparent documentation so you can invest with complete peace of mind."
            />
            {/* Feature Card 3 */}
            <FeatureCard
              icon={
                <FaChartLine
                  className="text-5xl mb-6"
                  style={{ color: brandColor }}
                />
              }
              title="Best Investment Options"
              desc="Strategically located projects planned for long-term appreciation, offering excellent rental and resale potential in Jaipur."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 5: MEET THE DIRECTORS ================= */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold">
              Meet The <span style={{ color: brandColor }}>Leadership</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
              The visionaries guiding Sanjeevni towards new horizons.
            </p>
            <div
              className="mt-6 mx-auto w-20 h-1"
              style={{ backgroundColor: brandColor }}
            ></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Director 1: Sunil Maheshwari */}
            <DirectorCard
              name="Mr. Sunil Maheshwari"
              // Replace with actual photo path
              imageSrc="/images/director-sunil.jpg"
              bio="Mr. Sunil Maheshwari is a Management Graduate & having 13 years of rich experience in Banking & Finance Industry. He has started his career as an Officer with IndusInd Bank & Grown up to the level of Senior Vice President with Yes Bank. After such a rich experience of Banking Sector he has decided to move in Real Estate Sector as an entrepreneur with a long term vision & Joined hands with Sanjeevni Group in order to take it forward together."
              delay={0.2}
            />

            {/* Director 2: Rajeev Tak */}
            <DirectorCard
              name="Mr. Rajeev Tak"
              // Replace with actual photo path
              imageSrc="/images/director-rajeev.jpg"
              bio="Mr. Rajiv Tak is a Management Graduate from Jaipur & having rich experience of 13 Years in FMCG, Telecommunication & Media & entertainment. He has started his career with Pidilite Industries as an Officer & moved up to the level of Area Sales Manager with Tata Sky Limited. With an intent of entrepreneurship he has Joined hands with Sanjeevni Group."
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

// Helper Component for Stats
function StatItem({ inView, end, suffix, label, desc }) {
  return (
    <div className="p-4">
      <div
        className="text-4xl md:text-6xl font-extrabold mb-2"
        style={{ color: brandColor }}
      >
        {inView ? <CountUp end={end} duration={2.5} separator="," /> : 0}
        {suffix}
      </div>
      <div className="text-xl font-bold mb-2">{label}</div>
      <div className="text-gray-400 text-sm">{desc}</div>
    </div>
  );
}

// Helper Component for Features
function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 text-center"
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600  dark:text-gray-300 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

// Helper Component for Directors
function DirectorCard({ imageSrc, name, bio, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: delay }}
      className="flex flex-col lg:flex-row gap-8 items-start bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-[...] border border-gray-100 dark:border-gray-700"
    >
      <div
        className="w-full lg:w-1/3 shrink-0 relative h-[300px] lg:h-[350px] rounded-xl overflow-hidden border-b-4"
        style={{ borderColor: brandColor }}
      >
        {/* Replace with actual director image */}
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="lg:w-2/3">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {name}
        </h3>

        <div
          className="h-1 w-12 mb-6"
          style={{ backgroundColor: brandColor }}
        ></div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px] text-justify">
          {bio}
        </p>
        <div className="mt-6 flex text-gray-500">
          <FaHandshake className="mr-2 mt-1" style={{ color: brandColor }} />
          <span className="text-sm font-medium">Co-Founder & Director</span>
        </div>
      </div>
    </motion.div>
  );
}
