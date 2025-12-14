export default function Infrastructure() {
  const facilities = [
    {
      name: "Manufacturing Area",
      size: "30,000 Sq. Ft.",
      description: "State-of-the-art production floor with advanced machinery",
      features: ["CNC Machining Centers", "Automated Assembly Lines", "Precision Tooling"],
      icon: "🏭"
    },
    {
      name: "Quality Control Lab",
      size: "2,500 Sq. Ft.",
      description: "Dedicated quality assurance and testing facility",
      features: ["Metrology Equipment", "Material Testing", "Dimensional Analysis"],
      icon: "🔬"
    },
    {
      name: "Research & Development",
      size: "1,500 Sq. Ft.",
      description: "Innovation hub for product development and process improvement",
      features: ["Prototype Development", "Process Optimization", "New Material Research"],
      icon: "💡"
    },
    {
      name: "Warehouse & Storage",
      size: "15,000 Sq. Ft.",
      description: "Organized storage for raw materials and finished products",
      features: ["Raw Material Storage", "Finished Goods", "Inventory Management"],
      icon: "📦"
    }
  ];

  const equipment = [
    { name: "CNC Machining Centers", count: "15+", description: "High-precision computer-controlled machines" },
    { name: "Casting Machines", count: "8", description: "Advanced shell moulding and casting equipment" },
    { name: "Heat Treatment Units", count: "4", description: "Controlled atmosphere heat treatment" },
    { name: "Surface Finishing", count: "6", description: "Phosphating and painting facilities" },
    { name: "Quality Testing", count: "12+", description: "Advanced metrology and testing equipment" },
    { name: "Material Handling", count: "10+", description: "Overhead cranes and material movers" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-900 text-white py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/infrastructure-hero-bg.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-6">
              <span className="text-blue-200 text-sm font-medium">State-of-the-Art Facilities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Advanced Infrastructure
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
                Built for Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
              Discover our world-class manufacturing facilities equipped with cutting-edge 
              technology and operated by skilled professionals dedicated to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Manufacturing Ecosystem
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Spanning across a massive 30,000 square feet, our facility integrates 
                advanced manufacturing with quality assurance under one roof.
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 lg:p-8 border border-blue-200 text-center group hover:shadow-lg transition duration-300">
                  <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <div className="text-blue-600 font-semibold text-lg lg:text-xl mb-3">{facility.size}</div>
                  <p className="text-gray-600 text-sm lg:text-base mb-4">{facility.description}</p>
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Equipment and Technology */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                  Advanced Equipment & Technology
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  Equipped with the latest machinery and technology to ensure precision, 
                  efficiency, and consistent quality in every component we manufacture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {equipment.map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg lg:text-xl font-bold text-white">{item.name}</h3>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.count}
                      </span>
                    </div>
                    <p className="text-blue-100 text-sm lg:text-base">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                  Production Capabilities
                </h2>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Manufacturing Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-green-600 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Pattern Making</h4>
                          <p className="text-gray-600 text-sm">Precision pattern development for accurate casting</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-blue-600 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Shell Moulding</h4>
                          <p className="text-gray-600 text-sm">Advanced shell moulding technology for complex shapes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Machining</h4>
                          <p className="text-gray-600 text-sm">CNC machining for precision dimensions and tolerances</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-orange-600 font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                          <p className="text-gray-600 text-sm">Rigorous testing and inspection at every stage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Capacity Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Monthly Production Capacity</span>
                      <span className="font-bold text-blue-600">10,000+ Units</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Manufacturing Area</span>
                      <span className="font-bold text-blue-600">30,000 Sq. Ft.</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Team Strength</span>
                      <span className="font-bold text-blue-600">250+ Professionals</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">Quality Rate</span>
                      <span className="font-bold text-green-600">99.2%</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">On-time Delivery</span>
                      <span className="font-bold text-green-600">98.5%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Quality Standards</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">ISO 9001:2015 Certified</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">In-process Quality Checks</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Final Inspection & Testing</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Documented Quality Procedures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
            Experience Our Manufacturing Excellence
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
            Schedule a visit to witness our advanced infrastructure and manufacturing capabilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-gray-100 transition duration-300">
              Schedule Factory Tour
            </button>
            <button className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Download Facility Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}