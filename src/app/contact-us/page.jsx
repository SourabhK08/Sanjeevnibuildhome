"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

// Brand Color defined for consistency
const brandColor = "#e41e25";

// Animation Variants (reused from About Us page for consistency)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

export default function ContactUsPage() {
  // Form state placeholder (you would connect this to a backend later)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectInterest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest in Sanjeevni Buildhome. We will contact you shortly."
    );
    // Add backend submission logic here
  };

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden font-sans text-gray-800 dark:text-gray-100">
      {/* ================= SECTION 1: HERO BANNER ================= */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Replace with a high-end reception or architectural image */}
          <Image
            src="/projects/ganesh-vihar/Compressed/sanjeevni-buildhome-ganesh-vihar-tonk-road-1.webp" // CHANGE THIS PATH
            alt="Contact Sanjeevni Buildhome"
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
            Get In <span style={{ color: brandColor }}>Touch</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90">
            Start your journey towards your dream home today. We are here to
            assist you.
          </p>
          <div className="mt-8 h-1 w-24 bg-[#e41e25] mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* ================= SECTION 2: MAIN CONTACT CONTENT ================= */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left Column: Contact Info & Map */}
            <motion.div variants={fadeInUp} className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Whether you are an investor looking for the next big
                  opportunity or a family searching for your forever home, our
                  team at Sanjeevni Buildhome is ready to answer all your
                  questions.
                </p>

                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<FaMapMarkerAlt />}
                    title="Corporate Office"
                    content={
                      <>
                        Sanjeevni Heights, Plot No. 123,
                        <br /> Vaishali Nagar, Jaipur, Rajasthan 302021
                      </>
                    }
                  />
                  <ContactInfoItem
                    icon={<FaPhoneAlt />}
                    title="Call Us"
                    content={
                      <>
                        +91 141 234 5678 <br /> +91 98765 43210
                      </>
                    }
                  />
                  <ContactInfoItem
                    icon={<FaEnvelope />}
                    title="Email Us"
                    content="info@sanjeevnibuildhome.com"
                  />
                  <ContactInfoItem
                    icon={<FaClock />}
                    title="Working Hours"
                    content={
                      <>
                        Mon - Sat: 9:30 AM - 6:30 PM
                        <br />
                        Sunday: Closed
                      </>
                    }
                  />
                </div>
              </div>

              {/* Google Map Embed (Placeholder pointing to central Jaipur) */}
              <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative z-0 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.07916252756!2d75.75395282931998!3d26.91249395258234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4164e407a2b%3A0x9676d86636551a05!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Sanjeevni Office Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
                {/* Decorative top border */}
                <div
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ background: brandColor }}
                ></div>

                <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Your Name*"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Phone Number*"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      
                    />
                  </div>
                  <InputField
                    label="Email Address*"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  {/* Select Dropdown for Project Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Interested In
                    </label>
                    <select
                      name="projectInterest"
                      value={formData.projectInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 focus:border-[#e41e25] focus:ring-1 focus:ring-[#e41e25] outline-none transition-all"
                    >
                      <option value="">Select Requirement</option>
                      <option value="Residential Apartment">
                        Residential Apartment
                      </option>
                      <option value="Luxury Villa">Luxury Villa</option>
                      <option value="Commercial Space">Commercial Space</option>
                      <option value="Plot/Land Investment">
                        Plot/Land Investment
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 focus:border-[#e41e25] focus:ring-1 focus:ring-[#e41e25] outline-none transition-all resize-none "
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                    style={{ background: brandColor }}
                  >
                    Send Message <FaPaperPlane className="text-sm" />
                  </motion.button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: SCHEDULE VISIT CTA ================= */}
      <section className="py-16 px-6 relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience Sanjeevni quality in person?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
            Schedule an exclusive site visit with our sales executives today.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: brandColor,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all border-2 border-[#e41e25]"
            style={{ background: brandColor }}
          >
            Schedule a Site Visit
          </motion.button>
        </div>
      </section>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function ContactInfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start">
      <div
        className="shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-2xl mr-4 border border-red-100 dark:bg-red-900/30 dark:border-red-700"
        style={{ color: brandColor }}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 leading-snug">
          {content}
        </p>
      </div>
    </div>
  );
}

function InputField({ label, name, type, value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#e41e25] focus:ring-1 focus:ring-[#e41e25] outline-none transition-all dark:bg-gray-800"
      />
    </div>
  );
}
