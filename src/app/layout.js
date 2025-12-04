import "./globals.css";
import Navbar from "@/components/Navbar";

import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "./ThemeProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanjeevni Buildhome",
  description: "Trusted real estate builders & developers",
};

export default function RootLayout({ children }) {
  const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  } catch (e) {}
})();
`;

  return (
    <html lang="en">
      <head>
        <Script id="initial-theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>

      {/* <body className="antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100"> */}
      <body className="antialiased ">
        <Navbar /> {/* ✔ Works perfectly, layout stays server */}
        <main>{children}</main>
        <footer className="mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Sanjeevni BuildHome. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
