// // components/Layout.tsx
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Infrastructure', path: '/infrastructure' },
//     { name: 'Products', path: '/products' },
//     { name: 'Certifications', path: '/certifications' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* App Bar */}
//       <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/" className="text-xl font-bold">Smita Enterprises</Link>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <Link key={item.name} href={item.path} 
//                    className="hover:text-yellow-400 transition duration-300">
//                   {item.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <div className="w-6 h-px bg-white mb-1"></div>
//               <div className="w-6 h-px bg-white mb-1"></div>
//               <div className="w-6 h-px bg-white"></div>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden bg-gray-800 py-4">
//               {navItems.map((item) => (
//                 <Link key={item.name} href={item.path} 
//                    className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
//                    onClick={() => setIsMenuOpen(false)}>
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-grow">
//         {children}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2025 Smita Enterprises. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
/////////////////////////////
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Infrastructure', href: '/infrastructure', icon: '🏭' },
    { name: 'Products', href: '/products', icon: '🔧' },
    { name: 'Certifications', href: '/certifications', icon: '📜' },
    { name: 'Careers', href: '/careers', icon: '💼' },
    { name: 'Contact Us', href: '/contact', icon: '📞' },
  ];

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
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/20 text-white'
              }`}>
                <span className="text-lg font-bold">SE</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } font-['Inter']`}>
                  Smita Enterprises
                </span>
                <span className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-blue-200'
                } font-light tracking-wide`}>
                  Auto Parts Manufacturer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-['Inter'] font-medium ${
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

            {/* Mobile Menu Button - Enhanced */}
            <button
              className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg ${
                isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
              } ${isMenuOpen ? 'space-y-0' : 'space-y-1.5'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className={`py-2 rounded-2xl ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-xl border border-gray-200' 
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}>
              {navigation.map((item, index) => (
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
                  } ${isMenuOpen ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-['Inter'] font-medium tracking-wide">{item.name}</span>
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
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">SE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Inter']">Smita Enterprises</h3>
                  <p className="text-blue-200 text-sm">Auto Parts Manufacturer</p>
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
              <h4 className="font-bold font-['Inter'] mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                {navigation.slice(1, 5).map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition duration-300 py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold font-['Inter'] mb-4 text-lg">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>info@smitaenterprises.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 79 2281 2345</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📍</span>
                  <span className="text-sm">Naroda GIDC, Ahmedabad</span>
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