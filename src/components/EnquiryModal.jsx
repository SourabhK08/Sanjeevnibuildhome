"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function EnquiryModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      setMsg("Your enquiry has been sent successfully!");
      e.target.reset();
      setTimeout(() => onClose(), 1500);
    } else {
      setMsg("Something went wrong. Please try again.");
    }
  };

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl z-10 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Request a Callback</h2>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="ml-2 text-[#e41e25] hover:bg-[#e41e25] hover:text-white border border-[#e41e25]  rounded-2xl p-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-[#e41e25] focus:ring-2 focus:ring-[#e41e25]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            pattern="^[0-9]{10}$"
            maxLength="10"
            inputMode="numeric"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-[#e41e25] focus:ring-2 focus:ring-[#e41e25]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-[#e41e25] focus:ring-2 focus:ring-[#e41e25]"
          />

          <button
            type="submit"
            className="w-full bg-[#e41e25] text-white py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>

          {msg && <p className="text-center text-sm text-green-600">{msg}</p>}
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
