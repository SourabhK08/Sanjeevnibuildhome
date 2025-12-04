import "./globals.css";
import Navbar from "@/components/Navbar";

import { Geist, Geist_Mono } from "next/font/google";

import Script from "next/script";
import { ThemeProvider } from "./ThemeProvider";

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
 

  return (
    <html lang="en">
    

     <body className="antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100">
      
      {/* <body className="antialiased "> */}
      <ThemeProvider>
        <Navbar /> 
        <main>{children}</main>
        <footer className="mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Sanjeevni BuildHome. All rights
            reserved.
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
