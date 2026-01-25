'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const SmithaFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // used for both desktop hover and mobile accordion
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname() ?? '/';

  useEffect(() => {
    // close menus on route change
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

  const products = [
    { name: 'Cylinder Liners', href: '/products/cylinder-liners' },
    // add more product links here if needed
  ];

  const isProductPage = pathname.startsWith('/products');

  // desktop hover handlers
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 120);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center space-x-3 no-underline">
              <div className="relative w-14 h-14">
                <Image src="/logo.png" alt="Smitha Enterprises" fill className="object-contain" priority />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className={`text-xl font-bold text-white ${SmithaFont.className}`}>
                  Smitha Enterprises
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.slice(0, 2).map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    pathname === item.href
                      ? 'text-white bg-white/20'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </span>
                </Link>
              ))}

              {/* PRODUCTS DROPDOWN – DESKTOP (hover) */}
              <div
                className="relative hidden lg:block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={isProductsOpen}
                  aria-haspopup="menu"
                  className={`px-4 py-2 rounded-lg transition-all font-medium flex items-center space-x-2 ${
                    isProductPage
                      ? 'text-white bg-white/20'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>🔧</span>
                  <span className="text-sm">Products</span>
                  <span className="text-xs">▼</span>
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50
                    transition-all duration-200
                    ${isProductsOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  role="menu"
                >
                  {products.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className={`block px-4 py-3 transition-colors ${
                        pathname === p.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <Link
                href="/infrastructure"
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  pathname === '/infrastructure'
                    ? 'text-white bg-white/20'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>🏭</span>
                  <span className="text-sm">Infrastructure</span>
                </span>
              </Link>

              {navigation.slice(2).map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    pathname === item.href
                      ? 'text-white bg-white/20'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="w-6 h-0.5 bg-white mb-1.5" />
              <span className="w-6 h-0.5 bg-white mb-1.5" />
              <span className="w-6 h-0.5 bg-white" />
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-xl p-2">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href ? 'bg-white/20 text-white' : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* MOBILE Products accordion */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => setIsProductsOpen(prev => !prev)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all font-medium ${
                    isProductPage ? 'bg-white/20 text-white' : 'text-white hover:bg-white/20'
                  }`}
                  aria-expanded={isProductsOpen}
                >
                  <span className="flex items-center">
                    <span className="mr-2">🔧</span>
                    <span>Products</span>
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${isProductsOpen ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height] duration-300 mt-2 ${
                    isProductsOpen ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-1 px-2">
                    {products.map(p => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className={`block px-4 py-3 rounded-lg transition-colors ${
                          pathname === p.href ? 'bg-white/20 text-white' : 'text-white hover:bg-white/20'
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsOpen(false);
                        }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
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
                <Link href="/products/cylinder-liners" className="block text-gray-300 hover:text-white py-1">Products</Link>
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
