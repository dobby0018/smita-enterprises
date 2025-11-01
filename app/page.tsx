import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-gray-900/50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-blue-200 text-sm font-medium">Trusted Since 1996</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Precision Casting
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Leading manufacturer of <span className="text-white font-semibold">shell moulded castings</span> and{' '}
              <span className="text-white font-semibold">air-cooled liners</span> for the global automotive industry
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center border-x border-blue-700/50">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-blue-200 text-sm">Monthly Production</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-blue-200 text-sm">Skilled Team</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/about" 
                className="group relative bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Discover Our Story
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/products" 
                className="group relative border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 min-w-[200px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Products
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
              <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Decades of excellence in precision casting, serving OEMs and Tier-1 manufacturers 
              with uncompromising quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-semibold">Years of Experience</div>
              <div className="text-gray-500 text-sm mt-2">Since 1996</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-700 font-semibold">Monthly Production</div>
              <div className="text-gray-500 text-sm mt-2">Air-Cooled Blocks</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-700 font-semibold">Skilled Team</div>
              <div className="text-gray-500 text-sm mt-2">Dedicated Professionals</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">760g-250kg</div>
              <div className="text-gray-700 font-semibold">Weight Range</div>
              <div className="text-gray-500 text-sm mt-2">Casting Capability</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Smitha Enterprises?
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our commitment to quality, precision, and reliability has earned us the confidence 
              of leading OEMs, Tier-1, and Tier-2 manufacturers. We take pride in casting 
              reliability that drives long-term partnerships and success.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
              Learn more about our journey
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our 30,000 sq. ft. facility in Harihar, Karnataka is equipped with advanced 
                machinery and testing systems, ensuring consistent performance and efficiency 
                across every stage of production.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">In-house Phosphating and Painting Unit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Advanced Testing Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">30,000+ sq. ft. Manufacturing Space</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">250+ Skilled Professionals</span>
                </div>
              </div>

              <Link 
                href="/infrastructure" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Explore Our Facility
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Metallurgical Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cast Iron</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">FG 200</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">FG 250</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">FG 300</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">SG Iron</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">400/18</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">500/7</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">600/3</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">700/2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Special Alloys</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">High Chrome (up to 35%)</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Ni-Hard Grades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specializing in shell moulded castings with a strong focus on air-cooled liners, 
              ranging from 760 grams to 250 kilograms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔩</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cylinder Liners</h3>
              <p className="text-gray-600 mb-4">
                Precision-engineered air-cooled liners for optimal thermal performance and durability
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cylinder Heads</h3>
              <p className="text-gray-600 mb-4">
                High-quality cylinder heads manufactured to exacting standards for automotive applications
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Special Castings</h3>
              <p className="text-gray-600 mb-4">
                Custom shell moulded castings tailored to specific customer requirements
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/products" 
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300"
            >
              View All Products
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing list of OEMs and manufacturers who trust Smitha Enterprises 
            for their precision casting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get In Touch
            </Link>
            <Link 
              href="/certifications" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              View Certifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}