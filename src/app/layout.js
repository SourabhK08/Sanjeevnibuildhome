import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="antialiased bg-white text-gray-900">
        <header className="">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Sanjeevni" className="h-12" />
            </a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/properties" className="hover:text-primary">
                Properties
              </a>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex gap-3">
              <a href="#login" className="text-sm">
                Login
              </a>
              <a
                href="#list"
                className="px-3 py-1 rounded bg-primary text-white text-sm"
              >
                List Property
              </a>
            </div>
          </div>
        </header>
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
