import Link from 'next/link';

export default function About() {
  const milestones = [
    {
      year: "1996",
      title: "The Foundation",
      description: "Smitha Enterprises was established in Harihar, Karnataka, with a vision to revolutionize precision casting in the automotive industry.",
      icon: "🏭"
    },
    {
      year: "2001",
      title: "First Major Breakthrough",
      description: "Secured our first major OEM partnership, establishing credibility in the automotive components market.",
      icon: "🚀"
    },
    {
      year: "2008",
      title: "Capacity Expansion",
      description: "Expanded our manufacturing facility to 30,000 sq. ft. and installed advanced shell moulding technology.",
      icon: "📈"
    },
    {
      year: "2015",
      title: "Quality Certification",
      description: "Achieved ISO 9001:2015 certification, marking our commitment to international quality standards.",
      icon: "⭐"
    },
    {
      year: "2020",
      title: "Production Milestone",
      description: "Reached monthly production capacity of 10,000+ air-cooled blocks, serving leading automotive brands.",
      icon: "🎯"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a trusted manufacturer for OEMs and Tier-1 suppliers with 250+ skilled professionals.",
      icon: "👑"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Every component is engineered with exacting standards and attention to detail"
    },
    {
      icon: "🛡️",
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage of production"
    },
    {
      icon: "🤝",
      title: "Customer Partnership",
      description: "Building long-term relationships based on trust and reliability"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Continuously improving processes and adopting advanced technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-6">
              <span className="text-blue-200 text-sm font-medium">Our Legacy Since 1996</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Crafting Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
                Since 1996
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
              From a humble beginning to becoming a trusted name in precision casting, 
              discover the journey that shaped our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">The Smitha Enterprises Story</h2>
                <div className="space-y-3 lg:space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed">
                  <p>
                    Founded in 1996 in the industrial heartland of Harihar, Karnataka, 
                    Smitha Enterprises began with a simple yet powerful vision: to deliver 
                    precision-cast components that set new benchmarks in quality and reliability.
                  </p>
                  <p>
                    What started as a modest operation has today evolved into a 30,000 sq. ft. 
                    state-of-the-art manufacturing facility, trusted by leading OEMs and 
                    Tier-1 manufacturers across the automotive industry.
                  </p>
                  <p>
                    Our journey of over 25 years is a testament to our unwavering commitment 
                    to excellence, innovation, and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-6 lg:p-8 border border-blue-200 w-full">
                <div className="text-center">
                  <div className="text-4xl lg:text-6xl mb-3 lg:mb-4">🏭</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Harihar, Karnataka</h3>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    Strategically located 280 km from Bengaluru, in one of Karnatakas 
                    prominent industrial corridors
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-bold text-blue-600 text-base lg:text-lg">30,000+</div>
                      <div className="text-gray-600 text-xs lg:text-sm">Sq. Ft. Facility</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-bold text-blue-600 text-base lg:text-lg">250+</div>
                      <div className="text-gray-600 text-xs lg:text-sm">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline - Mobile Responsive */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 lg:mb-12">Our Journey Through Time</h2>
              <div className="relative">
                {/* Timeline line - Hidden on mobile, visible on desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
                
                {/* Timeline items */}
                <div className="space-y-8 lg:space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      {/* Mobile Layout */}
                      <div className="lg:hidden bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200">
                        <div className="flex items-center mb-3">
                          <span className="text-xl sm:text-2xl mr-3">{milestone.icon}</span>
                          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                      </div>

                      {/* Desktop Layout */}
                      <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* Content */}
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                            <div className="flex items-center mb-3">
                              <span className="text-2xl mr-3">{milestone.icon}</span>
                              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {milestone.year}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.description}</p>
                          </div>
                        </div>
                        
                        {/* Year marker */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                        
                        {/* Empty space for the other side */}
                        <div className="w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Unmatched Capabilities</h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Leveraging decades of expertise and state-of-the-art infrastructure to deliver excellence
              </p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Production Excellence</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm lg:text-base">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base lg:text-lg">Mass Production Capacity</h4>
                        <p className="text-gray-600 text-xs lg:text-sm">10,000+ air-cooled blocks monthly with consistent quality</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm lg:text-base">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base lg:text-lg">In-house Finishing</h4>
                        <p className="text-gray-600 text-xs lg:text-sm">Complete phosphating and painting unit for superior surface protection</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm lg:text-base">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base lg:text-lg">Wide Weight Range</h4>
                        <p className="text-gray-600 text-xs lg:text-sm">Components from 760 grams to 250 kilograms</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Our Promise</h3>
                  <p className="text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base">
                    Our commitment to quality, precision, and reliability has earned us the confidence 
                    of leading OEMs, Tier-1, and Tier-2 manufacturers.
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base">
                    We take pride in casting reliability that drives long-term partnerships and success 
                    for our clients across the automotive sector.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Metallurgical Mastery</h3>
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center text-base lg:text-lg">
                      <span className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 text-xs lg:text-sm">C</span>
                      Cast Iron Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      {['FG 200', 'FG 250', 'FG 300'].map((grade) => (
                        <span key={grade} className="bg-blue-50 text-blue-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border border-blue-200">
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center text-base lg:text-lg">
                      <span className="w-5 h-5 lg:w-6 lg:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 text-green-600 text-xs lg:text-sm">S</span>
                      SG Iron Specialization
                    </h4>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      {['400/18', '500/7', '600/3', '700/2'].map((grade) => (
                        <span key={grade} className="bg-green-50 text-green-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border border-green-200">
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center text-base lg:text-lg">
                      <span className="w-5 h-5 lg:w-6 lg:h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 text-purple-600 text-xs lg:text-sm">A</span>
                      Advanced Alloys
                    </h4>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      <span className="bg-purple-50 text-purple-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border border-purple-200">
                        High Chrome (up to 35%)
                      </span>
                      <span className="bg-purple-50 text-purple-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border border-purple-200">
                        Ni-Hard Grades
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Our Core Values</h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                The principles that guide every decision and action at Smitha Enterprises
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-105 transition duration-300">
                    <span className="text-2xl lg:text-3xl text-white">{value.icon}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base px-2">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
            Join the growing list of industry leaders who trust Smitha Enterprises for their precision casting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-gray-100 transition duration-300"
            >
              Start a Partnership
            </Link>
            <Link 
              href="/infrastructure" 
              className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Explore Our Facility
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}