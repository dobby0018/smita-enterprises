'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(0);

  const certifications = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      type: 'Quality Management System',
      certificateNo: 'IND 100 26396975',
      unitNo: 'BAN/AUD/25-26/8305',
      scope: 'Manufacture and Supply of Cylinder Liners, Cast Iron Castings, SG Iron Castings, High Alloyed Castings and Machined Metal Components.',
      validity: '03.02.2026 to 02.02.2029',
      issuedBy: 'TUV INDIA PVT. LTD.',
      status: 'Active',
      issuedDate: '03.02.2026',
      image: '/certificate-iso.jpg'
    },
    {
      id: 2,
      name: 'ISO 45001:2018',
      type: 'Occupational Health & Safety Management',
      certificateNo: 'OH-2018-4587',
      unitNo: '2309871',
      scope: 'Occupational health and safety management across manufacturing operations',
      validity: '2023-03-15 to 2026-03-14',
      issuedBy: 'IRQ',
      status: 'Active',
      issuedDate: '2023-03-15',
      image: null
    },
    {
      id: 3,
      name: 'ISO 14001:2018',
      type: 'Environmental Management System',
      certificateNo: 'EM-2022-7845',
      unitNo: '2214563',
      scope: 'Environmental friendly manufacturing processes',
      validity: '2022-08-01 to 2025-07-31',
      issuedBy: 'IRQ',
      status: 'Active',
      issuedDate: '2022-08-01',
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section (UNCHANGED) */}
      <section className="relative bg-gray-900 text-white py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/certifications-hero-bg.png')" }}
        >
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
              Our commitment to excellence is validated by international certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Certificates Grid (UNCHANGED) */}
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
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ● {cert.status}
                      </span>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                        ISO
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{cert.type}</p>

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

                {/* ✅ IMPROVED IMAGE SECTION */}
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-6 flex items-center justify-center">

                  {certifications[activeCert].image ? (
                    <div className="relative w-full h-[420px] bg-white rounded-xl shadow-xl p-4">
                      <Image
                        key={certifications[activeCert].id}
                        src={certifications[activeCert].image}
                        alt={certifications[activeCert].name}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority={activeCert === 0}
                      />
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold">
                        {certifications[activeCert].name}
                      </h3>
                      <p className="text-blue-100 mt-2">
                        Certificate image not available
                      </p>
                    </div>
                  )}
                </div>

                {/* Details Section (UNCHANGED) */}
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

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <label className="text-sm font-medium text-gray-500 block mb-2">
                      Scope of Certification
                    </label>
                    <p className="text-gray-700 leading-relaxed">
                      {certifications[activeCert].scope}
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 text-center">
                      Certified by {certifications[activeCert].issuedBy} • Valid across all manufacturing facilities
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}