'use client';
import { useState } from 'react';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(0);

  const certifications = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      type: 'Quality Management System',
      certificateNo: '189402-2016',
      unitNo: '1905644',
      scope: 'Manufacturing of Auto Parts, Engine Components, and Precision Automotive Components',
      validity: '2020-01-01 to 2025-12-31',
      issuedBy: 'TÜV Rheinland Group',
      status: 'Active',
      issuedDate: '2019-12-31',
      image: '/certificate-iso.jpg'
    },
    {
      id: 2,
      name: 'IATF 16949:2016',
      type: 'Automotive Quality Management',
      certificateNo: 'AQF-2023-4587',
      unitNo: '2309871',
      scope: 'Design and Manufacturing of Automotive Parts and Components',
      validity: '2023-03-15 to 2026-03-14',
      issuedBy: 'TÜV Rheinland Group',
      status: 'Active',
      issuedDate: '2023-03-15',
      image: '/certificate-iatf.jpg'
    },
    {
      id: 3,
      name: 'ISO 14001:2015',
      type: 'Environmental Management System',
      certificateNo: 'EM-2022-7845',
      unitNo: '2214563',
      scope: 'Environmental Friendly Manufacturing Processes',
      validity: '2022-08-01 to 2025-07-31',
      issuedBy: 'TÜV Rheinland Group',
      status: 'Active',
      issuedDate: '2022-08-01',
      image: '/certificate-14001.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image - EXACTLY matching Infrastructure Page */}
      <section className="relative bg-gray-900 text-white py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/certifications-hero-bg.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-6">
              <span className="text-blue-200 text-sm font-medium">Quality Certified</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Certifications & Accreditations
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
                Global Quality Standards
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
              Our commitment to excellence is validated by international certifications that demonstrate 
              our adherence to the highest quality, environmental, and automotive industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the content remains exactly the same */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Certificates Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`bg-white rounded-xl shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    activeCert === index 
                      ? 'border-blue-500 scale-105' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setActiveCert(index)}
                >
                  <div className="p-6">
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ● {cert.status}
                      </span>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
                        ISO
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{cert.type}</p>

                    {/* Certificate Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Certificate No:</span>
                        <span className="font-medium">{cert.certificateNo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Valid Until:</span>
                        <span className="font-medium">{cert.validity.split(' to ')[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {activeCert === index && (
                    <div className="bg-blue-500 text-white text-center py-2 rounded-b-xl">
                      <span className="text-sm font-medium">Currently Viewing</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed Certificate View */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="md:flex">
                {/* Certificate Image/Placeholder */}
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{certifications[activeCert].name}</h3>
                    <p className="text-blue-100">{certifications[activeCert].type}</p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="md:w-3/5 p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500 block mb-1">
                          Certificate Number
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {certifications[activeCert].certificateNo}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-500 block mb-1">
                          Unit Certificate No.
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {certifications[activeCert].unitNo}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-500 block mb-1">
                          Issued By
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {certifications[activeCert].issuedBy}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500 block mb-1">
                          Validity Period
                        </label>
                        <p className="text-lg font-semibold text-green-600">
                          {certifications[activeCert].validity}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-500 block mb-1">
                          Issue Date
                        </label>
                        <p className="text-lg font-semibold text-gray-900">
                          {certifications[activeCert].issuedDate}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-500 block mb-1">
                          Status
                        </label>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          ● {certifications[activeCert].status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Scope Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <label className="text-sm font-medium text-gray-500 block mb-2">
                      Scope of Certification
                    </label>
                    <p className="text-gray-700 leading-relaxed">
                      {certifications[activeCert].scope}
                    </p>
                  </div>

                  {/* Certificate Notice */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 text-center">
                      Certified by TÜV Rheinland Group • Valid across all manufacturing facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-sm text-gray-600">International standards compliance</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Recognition</h3>
                <p className="text-sm text-gray-600">Accepted by international clients</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                <p className="text-sm text-gray-600">Regular audits and updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}