'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  // Updated navigation order - Products before Infrastructure
  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Certifications', href: '/certifications', icon: '📜' },
    { name: 'Careers', href: '/careers', icon: '💼' },
    { name: 'Contact Us', href: '/contact', icon: '📞' },
  ];

  const productCategories = [
    { name: 'Cylinder Liners', href: '/products/cylinder-liners' },
    { name: 'Cylinder Blocks', href: '/products/cylinder-blocks' },
    { name: 'Pistons', href: '/products/pistons' },
    { name: 'Crankshaft', href: '/products/crankshaft' },
    { name: 'Piston Rings', href: '/products/piston-rings' },
    { name: 'Engine Bearings', href: '/products/engine-bearings' },
    { name: 'Oil Seal Rings', href: '/products/oil-seal-rings' },
    { name: 'King Pin Kits', href: '/products/king-pin-kits' },
    { name: 'Engine Valves', href: '/products/engine-valves' },
    { name: 'Connecting Rods', href: '/products/connecting-rods' },
    { name: 'Piston Pin', href: '/products/piston-pin' },
  ];

  const isProductPage = pathname.startsWith('/products');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced App Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-blue-900 to-gray-900'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section with Image */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group no-underline"
            >
              {/* Logo Image Container */}
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-12 h-12' : 'w-14 h-14'
              }`}>
                <Image
                  src="/logo.png" // Replace with your logo path
                  alt="Smitha Enterprises"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 56px, 48px"
                />
              </div>
              
              {/* Company Name - Hidden on mobile, shown on desktop */}
              <div className="hidden sm:flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Smitha Enterprises
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-medium ${
                    pathname === item.href
                      ? isScrolled 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm tracking-wide">{item.name}</span>
                  </span>
                  
                  {/* Active indicator */}
                  {pathname === item.href && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-yellow-400'
                    }`}></div>
                  )}
                </Link>
              ))}
              
              {/* Products Dropdown - NOW BEFORE INFRASTRUCTURE */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-medium flex items-center space-x-2 ${
                    isProductPage
                      ? isScrolled 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">🔧</span>
                  <span className="text-sm tracking-wide">Products</span>
                  <span className="text-xs">▼</span>
                </button>

                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {productCategories.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className={`block px-4 py-3 transition-all duration-200 hover:bg-blue-50 ${
                          pathname === product.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Infrastructure - NOW AFTER PRODUCTS */}
              <Link
                href="/infrastructure"
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-medium ${
                  pathname === '/infrastructure'
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm">🏭</span>
                  <span className="text-sm tracking-wide">Infrastructure</span>
                </span>
                
                {/* Active indicator */}
                {pathname === '/infrastructure' && (
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    isScrolled ? 'bg-blue-600' : 'bg-yellow-400'
                  }`}></div>
                )}
              </Link>

              {/* Rest of navigation items */}
              {navigation.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-medium ${
                    pathname === item.href
                      ? isScrolled 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm tracking-wide">{item.name}</span>
                  </span>
                  
                  {/* Active indicator */}
                  {pathname === item.href && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-yellow-400'
                    }`}></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg ${
                isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className={`py-2 rounded-2xl ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-xl border border-gray-200' 
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}>
              {/* Home and About Us */}
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 mx-2 my-1 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? isScrolled
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-blue-900 shadow-lg'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                        : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium tracking-wide">{item.name}</span>
                  {pathname === item.href && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-yellow-400"></span>
                  )}
                </Link>
              ))}
              
              {/* Mobile Products Dropdown - NOW BEFORE INFRASTRUCTURE */}
              <div className="px-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 mx-2 my-1 rounded-xl transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">🔧</span>
                    <span className="font-medium tracking-wide">Products</span>
                  </span>
                  <span className={`transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {/* Mobile Products Submenu */}
                {isProductsOpen && (
                  <div className="ml-6 mt-2 space-y-1">
                    {productCategories.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                          pathname === product.href
                            ? isScrolled
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-blue-900'
                            : isScrolled
                              ? 'text-gray-700 hover:bg-gray-100'
                              : 'text-white hover:bg-white/20'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Infrastructure - NOW AFTER PRODUCTS */}
              <Link
                href="/infrastructure"
                className={`flex items-center space-x-3 px-4 py-3 mx-2 my-1 rounded-xl transition-all duration-300 ${
                  pathname === '/infrastructure'
                    ? isScrolled
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-blue-900 shadow-lg'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                      : 'text-white hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg">🏭</span>
                <span className="font-medium tracking-wide">Infrastructure</span>
                {pathname === '/infrastructure' && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-yellow-400"></span>
                )}
              </Link>

              {/* Rest of navigation items */}
              {navigation.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 mx-2 my-1 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? isScrolled
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-blue-900 shadow-lg'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                        : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium tracking-wide">{item.name}</span>
                  {pathname === item.href && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-yellow-400"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png" // Same logo as header
                    alt="Smita Enterprises"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Smita Enterprises</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading manufacturer of high-quality auto parts with international 
                certifications and decades of expertise in automotive components.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer">
                  <span className="text-sm">📷</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer">
                  <span className="text-sm">💼</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/products" className="block text-gray-300 hover:text-white transition duration-300 py-1 no-underline">
                  Products
                </Link>
                <Link href="/infrastructure" className="block text-gray-300 hover:text-white transition duration-300 py-1 no-underline">
                  Infrastructure
                </Link>
                <Link href="/certifications" className="block text-gray-300 hover:text-white transition duration-300 py-1 no-underline">
                  Certifications
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition duration-300 py-1 no-underline">
                  About Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>msarun71@yahoo.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 9845265394</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📍</span>
                  <span className="text-sm">Harihar, Karnataka</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Smita Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}