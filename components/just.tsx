'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { Poppins } from "next/font/google";
const SmithaFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Certifications', href: '/certifications', icon: '📜' },
    { name: 'Careers', href: '/careers', icon: '💼' },
    { name: 'Contact Us', href: '/contact', icon: '📞' },
  ];

  const isProductPage = pathname.startsWith('/products');

  return (
    <div className="min-h-screen flex flex-col">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center space-x-3 group no-underline">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.png"
                  alt="Smitha Enterprises"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className={`text-xl font-bold tracking-tight text-white ${SmithaFont.className}`}>
                  Smitha Enterprises
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1">

              {/* Home + About */}
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    pathname === item.href ? "text-white bg-white/20" : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span className="text-sm tracking-wide">{item.name}</span>
                  </span>
                </Link>
              ))}

              {/* PRODUCTS DROPDOWN (fixed, smooth, instant) */}
              <div
                className="relative hidden lg:block"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2 
                    ${isProductPage ? "text-white bg-white/20" : "text-blue-100 hover:text-white hover:bg-white/10"}`}
                >
                  <span className="text-sm">🔧</span>
                  <span className="text-sm tracking-wide">Products</span>
                  <span className="text-xs">▼</span>
                </button>

                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl 
                                  border border-gray-200 py-2 z-50 animate-fadeIn">

                    <Link
                      href="/products/cylinder-liners"
                      className={`block px-4 py-3 hover:bg-blue-50 ${
                        pathname === "/products/cylinder-liners"
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      Cylinder Liners
                    </Link>
                  </div>
                )}
              </div>

              {/* Infrastructure */}
              <Link
                href="/infrastructure"
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  pathname === "/infrastructure"
                    ? "text-white bg-white/20"
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>🏭</span>
                  <span className="text-sm tracking-wide">Infrastructure</span>
                </span>
              </Link>

              {/* Remaining menu */}
              {navigation.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    pathname === item.href ? "text-white bg-white/20" : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span className="text-sm tracking-wide">{item.name}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1" : "mb-1.5"}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : "mb-1.5"}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>

          {/* MOBILE MENU */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[80vh] opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
              <div className="max-h-[70vh] overflow-y-auto">

                {/* Home + About */}
                {navigation.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 mx-2 my-1 rounded-xl ${
                      pathname === item.href ? "bg-white text-blue-900 shadow-lg" : "text-white hover:bg-white/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium tracking-wide">{item.name}</span>
                  </Link>
                ))}

                {/* MOBILE PRODUCT DROPDOWN */}
                <div className="px-2 lg:hidden">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 mx-2 my-1 rounded-xl text-white hover:bg-white/20"
                  >
                    <span className="flex items-center space-x-3">
                      <span>🔧</span>
                      <span className="font-medium tracking-wide">Products</span>
                    </span>
                    <span className={`transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>

                  {isProductsOpen && (
                    <div className="ml-6 mt-2 space-y-1 animate-fadeIn">
                      <Link
                        href="/products/cylinder-liners"
                        className={`block px-4 py-3 rounded-xl ${
                          pathname === "/products/cylinder-liners"
                            ? "bg-white text-blue-900"
                            : "text-white hover:bg-white/20"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Cylinder Liners
                      </Link>
                    </div>
                  )}
                </div>

                {/* Infrastructure */}
                <Link
                  href="/infrastructure"
                  className={`flex items-center space-x-3 px-4 py-3 mx-2 my-1 rounded-xl ${
                    pathname === "/infrastructure" ? "bg-white text-blue-900 shadow-lg" : "text-white hover:bg-white/20"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>🏭</span>
                  <span className="font-medium tracking-wide">Infrastructure</span>
                </Link>

                {/* Remaining menu */}
                {navigation.slice(2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 mx-2 my-1 rounded-xl ${
                      pathname === item.href ? "bg-white text-blue-900 shadow-lg" : "text-white hover:bg-white/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium tracking-wide">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">

            {/* LOGO */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image src="/logo.png" alt="Smitha Enterprises" fill className="object-contain" />
                </div>
                <h3 className={`text-xl font-bold ${SmithaFont.className}`}>Smitha Enterprises</h3>
              </div>

              <p className="text-gray-300 max-w-md">
                Leading manufacturer of high-quality auto parts with international certifications and decades of expertise.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/products" className="block text-gray-300 hover:text-white py-1">Products</Link>
                <Link href="/infrastructure" className="block text-gray-300 hover:text-white py-1">Infrastructure</Link>
                <Link href="/certifications" className="block text-gray-300 hover:text-white py-1">Certifications</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white py-1">About Us</Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2"><span>📧</span><span>msarun71@yahoo.com</span></p>
                <p className="flex items-center space-x-2"><span>📞</span><span>+91 9845265394</span></p>
                <p className="flex items-center space-x-2"><span>📍</span><span className="text-sm">Harihar, Karnataka</span></p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Smitha Enterprises. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
