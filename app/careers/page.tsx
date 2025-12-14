export default function Careers() {
  const jobOpenings = [
    { 
      title: 'Production Engineer', 
      department: 'Manufacturing',
      experience: '2-5 years',
      location: 'Harihar, Karnataka',
      type: 'Full-time'
    },
    { 
      title: 'Quality Inspector', 
      department: 'Quality Assurance',
      experience: '1-3 years', 
      location: 'Harihar, Karnataka',
      type: 'Full-time'
    },
    { 
      title: 'Sales Executive', 
      department: 'Sales',
      experience: '3-6 years',
      location: 'Harihar, Karnataka', 
      type: 'Full-time'
    },
    { 
      title: 'CNC Machine Operator',
      department: 'Manufacturing',
      experience: '1-4 years',
      location: 'Harihar, Karnataka',
      type: 'Full-time'
    },
    { 
      title: 'Quality Control Manager',
      department: 'Quality Assurance',
      experience: '5-8 years',
      location: 'Harihar, Karnataka',
      type: 'Full-time'
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-standard compensation with performance bonuses"
    },
    {
      icon: "🏥", 
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      icon: "📚",
      title: "Skill Development",
      description: "Regular training programs and skill enhancement workshops"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear growth path with opportunities for advancement"
    },
    {
      icon: "🍽️",
      title: "Meal Facilities",
      description: "Healthy and hygienic meal options at the facility"
    },
    {
      icon: "🚌",
      title: "Transportation",
      description: "Convenient transport services for employees"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-900 text-white py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/careers-hero-bg.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-6">
              <span className="text-blue-200 text-sm font-medium">Join Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Build Your Career
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
                With Industry Leaders
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
              Join our dynamic team of professionals and be part of a company that values innovation, 
              quality, and growth. Discover opportunities to build a rewarding career with us.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the existing content with enhancements */}
      <div className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Smitha Enterprises, we believe our people are our greatest asset. 
                We foster an environment of growth, innovation, and collaboration where 
                every team member can thrive and achieve their full potential.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 lg:p-8 border border-blue-200 text-center group hover:shadow-lg transition duration-300">
                  <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Current Openings */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 lg:mb-12">
                Current Job Openings
              </h2>
              
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-200 hover:shadow-xl transition duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-600 mb-4">
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Department: {job.department}
                          </span>
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Experience: {job.experience}
                          </span>
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Location: {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:items-end">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                          {job.type}
                        </span>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 whitespace-nowrap">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                Don't See Your Dream Role?
              </h2>
              <p className="text-blue-100 text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-gray-100 transition duration-300">
                  Submit Your Resume
                </button>
                <button className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}