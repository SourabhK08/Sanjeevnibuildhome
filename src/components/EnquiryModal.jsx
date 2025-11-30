"use client";
import { useState } from "react";

export default function EnquiryModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Request a Callback</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
            rows="3"
          />

          <button className="w-full bg-[#e41e25] text-white py-2 rounded-lg">
            Submit Enquiry
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
