'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Careers() {
  const [openings, setOpenings] = useState(null); // null = not checked yet
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function checkOpenings() {
      try {
        // try to fetch a JSON placed in the public folder at /openings.json
        const res = await fetch('/openings.json', { cache: 'no-store' });
        if (!mounted) return;

        if (!res.ok) {
          // file not found or other HTTP error -> treat as no openings
          setOpenings([]);
          setLoading(false);
          return;
        }

        const data = await res.json();
        // Accept either an array (['openings...']) or an object { openings: [...] }
        const list = Array.isArray(data) ? data : (data.openings || []);
        setOpenings(list);
      } catch (err) {
        // network error or invalid JSON -> treat as no openings
        setOpenings([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    checkOpenings();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/careers-hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-6">
              <span className="text-blue-200 text-sm font-medium">Careers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Work With Us
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
                Join Our Manufacturing Team
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
              We are a manufacturing company looking for hardworking and dedicated people. 
              If you are interested in working with us, please check openings below or contact us.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Simple Intro */}
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide steady work for skilled and semi-skilled workers with a focus on teamwork and discipline.
              </p>
            </div>

            {/* Job Openings (loaded from /public/openings.json) */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                Current Openings
              </h2>

              <div className="space-y-4">
                {loading && (
                  <div className="text-center text-gray-600">Checking for job openings…</div>
                )}

                {!loading && openings && openings.length > 0 && (
                  openings.map((job, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      {job.department && <p className="text-gray-600">Department: {job.department}</p>}
                      {job.experience && <p className="text-gray-600">Experience: {job.experience}</p>}
                      {job.location && <p className="text-gray-600">Location: {job.location}</p>}
                      {job.type && <p className="text-gray-600">Type: {job.type}</p>}
                    </div>
                  ))
                )}

                {!loading && openings && openings.length === 0 && (
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
                    <p className="text-gray-700 font-medium">No current openings at the moment.</p>
                    <p className="text-sm text-gray-500 mt-2">If you’d like to work with us, please contact us and we’ll keep your details on file.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to apply or ask a question?</h2>
              <p className="text-blue-100 mb-6">If you want to contact us about jobs or submit your details, please go to our contact page.</p>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
