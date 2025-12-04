/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    // 1. Files in the root 'app' directory (e.g., layout.js, page.js)
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    // 2. Files in the root 'components' directory
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    // 3. Files in the 'src' directory
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    // 4. Ensure root-level files are caught (optional, but safe)
    "./*.{js,jsx,ts,tsx,mdx}",
  ],
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
