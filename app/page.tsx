import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Casting Background */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-16 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/casting-background6.png" // Your casting image path
            alt="Precision Casting Process"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/60 to-gray-900/80"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-blue-200 text-xs font-medium">Trusted Since 1996</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Precision Casting
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-7xl">
                Excellence
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto px-2 backdrop-blur-sm bg-white/5 rounded-lg py-2">
              Leading manufacturer of <span className="text-white font-semibold">shell moulded castings</span> and{' '}
              <span className="text-white font-semibold">air-cooled liners</span> for the global automotive industry
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-10 max-w-2xl mx-auto px-2">
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg py-3">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-blue-200 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center border-x border-blue-700/50 px-2 backdrop-blur-sm bg-white/10 rounded-lg py-3">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-blue-200 text-xs sm:text-sm">Monthly Production</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg py-3">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-blue-200 text-xs sm:text-sm">Skilled Team</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <Link 
                href="/about" 
                className="group relative bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Discover Our Story
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/products" 
                className="group relative border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm bg-white/10"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Products
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 lg:mt-16 animate-bounce">
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto backdrop-blur-sm bg-white/10">
                <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Achievements Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Decades of excellence in precision casting, serving OEMs and Tier-1 manufacturers 
              with uncompromising quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">25+</div>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">Years of Experience</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1">Since 1996</div>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">10K+</div>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">Monthly Production</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1">Air-Cooled Blocks</div>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">250+</div>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">Skilled Team</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1">Dedicated Professionals</div>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">760g-250kg</div>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">Weight Range</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1">Casting Capability</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Smitha Enterprises?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-3xl mx-auto">
              Our commitment to quality, precision, and reliability has earned us the confidence 
              of leading OEMs, Tier-1, and Tier-2 manufacturers. We take pride in casting 
              reliability that drives long-term partnerships and success.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-800 transition duration-300"
            >
              Learn more about our journey
              <span className="ml-1 sm:ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Preview - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Our 30,000 sq. ft. facility in Harihar, Karnataka is equipped with advanced 
                machinery and testing systems, ensuring consistent performance and efficiency 
                across every stage of production.
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">In-house Phosphating and Painting Unit</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Advanced Testing Systems</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">45000+ sq. ft. Manufacturing Space</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">250+ Skilled Professionals</span>
                </div>
              </div>

              <Link 
                href="/infrastructure" 
                className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition duration-300"
              >
                Explore Our Facility
                <span className="ml-1 sm:ml-2">→</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Metallurgical Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Cast Iron</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm">FG 200</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm">FG 250</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm">FG 300</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">SG Iron</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">400/18</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">500/7</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">600/3</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">700/2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Special Alloys</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs sm:text-sm">High Chrome (up to 35%)</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs sm:text-sm">Ni-Hard Grades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview - Mobile Optimized */}
<section className="py-12 sm:py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
        Our Core Products
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
        Specializing in shell moulded castings with a strong focus on air-cooled liners,
        ranging from 760 grams to 250 kilograms
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">

      {/* Cylinder Liners */}
      <div className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
          <Image
            src="/images/products/cylinder-liner.png"
            alt="Cylinder Liners"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          Cylinder Liners
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Precision-engineered air-cooled liners for optimal thermal performance and durability
        </p>
      </div>

      {/* Cylinder Heads */}
      <div className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
          <Image
            src="/images/products/cylinder-head.png"
            alt="Cylinder Heads"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          Cylinder Heads
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          High-quality cylinder heads manufactured to exacting standards for automotive applications
        </p>
      </div>

      {/* Special Castings */}
      <div className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
          <Image
            src="/images/products/special-castings.png"
            alt="Special Castings"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          Special Castings
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Custom shell moulded castings tailored to specific customer requirements
        </p>
      </div>

    </div>

    <div className="text-center">
      <Link
        href="/products/cylinder-liners"
        className="inline-flex items-center bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition duration-300"
      >
        View All Products
        <span className="ml-1 sm:ml-2">→</span>
      </Link>
    </div>
  </div>
</section>


      {/* CTA Section - Mobile Optimized */}
      
    </div>
  );
}