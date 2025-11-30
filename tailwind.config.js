/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // we prefer theme switch by toggling .dark on <html>
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E41E25", // YOUR brand color
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
