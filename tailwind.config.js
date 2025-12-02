/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E41E25",
        secondary: "#BE1D2E",
        charcoal: "#403F3F",
      },
      boxShadow: {
        card: "0 10px 30px rgba(8,8,8,0.25)",
      },
    },
  },
  plugins: [],
};
