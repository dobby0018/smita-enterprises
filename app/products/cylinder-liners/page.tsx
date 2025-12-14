"use client";

import { useState, useEffect } from "react";
import catalog from "../../data/cylinderCatalog.json";

// ---------------- IMAGE GROUPS (PNG) ---------------- //
const imageGroups: Record<string, string[]> = {
  fl912: ["/images/liners/fl912-1.png", "/images/liners/fl912-2.png"],
  vw: [
    "/images/liners/vw-1.png",
    "/images/liners/vw-2.png",
    "/images/liners/vw-3.png",
  ],
  fl413: [
    "/images/liners/fl413-1.png",
    "/images/liners/fl413-2.png",
    "/images/liners/fl413-3.png",
  ],
  fl913: ["/images/liners/fl913-1.png", "/images/liners/fl913-2.png"],
  tatra: [
    "/images/liners/tatra-1.png",
    "/images/liners/tatra-2.png",
  ],
};

// Auto-detect image group
const getImageGroupKey = (seCode: string | undefined): string | null => {
  if (!seCode) return null;
  if (seCode.startsWith("FL-912")) return "fl912";
  if (seCode.startsWith("FL-413")) return "fl413";
  if (seCode.startsWith("FL-913")) return "fl913";
  if (seCode.startsWith("VW")) return "vw";
  if (seCode.startsWith("TATRA")) return "tatra";
  return null;
};

export default function CylinderLinersPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedMake, setSelectedMake] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const makes = [...new Set(catalog.map((item) => item.MAKE))];

  const filtered =
    selectedMake === ""
      ? catalog
      : catalog.filter((item) => item.MAKE === selectedMake);

  const groupKey = getImageGroupKey(selectedProduct?.SE_CODE);
  const currentImages = groupKey ? imageGroups[groupKey] : [];

  useEffect(() => setCurrentImageIndex(0), [selectedProduct]);

  useEffect(() => {
    if (!selectedProduct || currentImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedProduct, currentImages]);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );

  const nextImage = () => 
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/liner-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-4">
            <span className="text-blue-200 text-sm font-medium">Our Product Range</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-3">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Cylinder Liners & Sleeves
            </span>
          </h1>

          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Precision aftermarket cylinder liners designed for automotive, industrial,
            and heavy-duty applications.
          </p>
        </div>
      </section>

      {/* ---------------- FILTER + TABLE ---------------- */}
      <section className="py-14 px-4 max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Cylinder Liner Catalog</h2>
          <p className="text-gray-600 mt-2 md:text-lg">Browse our complete range of aftermarket compatible cylinders.</p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-md bg-white shadow-lg border border-blue-200 rounded-2xl p-3">
            <select
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-blue-300 bg-white text-gray-700 text-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">All Manufacturers</option>
              {makes.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="rounded-3xl shadow-2xl border border-blue-100 bg-white overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5">
            <h3 className="text-lg font-semibold text-white">Product Specifications</h3>
          </div>

          {/* List style for mobile */}
          <div className="divide-y divide-gray-100">
            {filtered.map((row, idx) => (
              <div
                key={idx}
                className="group transition-all duration-300 hover:bg-blue-50/70"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-5">

                  {/* Each item adjusts for phone screens */}
                  <div>
                    <p className="text-gray-500 text-xs">SE Code</p>
                    <p className="font-semibold">{row.SE_CODE}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Make</p>
                    <p className="font-semibold">{row.MAKE}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Engine Code</p>
                    <p className="font-semibold">{row.ENGINE_CODE}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Type</p>
                    <p className="font-semibold">{row.TYPE}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Bore</p>
                    <p className="font-semibold">{row.BORE}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">H (Shoulder)</p>
                    <p className="font-semibold">{row.H || "-"}</p>
                  </div>

                  {/* Button row always stays tidy */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-xs">KS Part No</p>
                      <p className="font-semibold">{row.KS_PART_NO}</p>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(row)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-medium shadow hover:bg-blue-700"
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="h-[3px] bg-transparent group-hover:bg-blue-400" />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- MODAL ---------------- */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-3 z-50">

            <div className="bg-white rounded-3xl p-6 w-full max-w-4xl shadow-2xl border border-blue-200 relative">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 
                           flex items-center justify-center text-xl text-gray-700"
              >
                ✕
              </button>

              {/* Mobile: 1 column | Desktop: 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* IMAGE CAROUSEL */}
                <div className="w-full flex items-center justify-center">

                  <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden 
                                  border border-blue-100 bg-white flex items-center justify-center">

                    <img
                      src={currentImages[currentImageIndex]}
                      alt={selectedProduct.SE_CODE}
                      className="max-h-full max-w-full object-contain p-4"
                    />

                    {/* Arrows */}
                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white 
                                     shadow-md rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          ‹
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white 
                                     shadow-md rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          ›
                        </button>
                      </>
                    )}

                    {/* Dots */}
                    {currentImages.length > 1 && (
                      <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
                        {currentImages.map((_, i) => (
                          <span
                            key={i}
                            className={`h-2.5 w-2.5 rounded-full border border-white ${
                              i === currentImageIndex ? "bg-white" : "bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="grid gap-3 sm:gap-4">
                  {[
                    ["Make", selectedProduct.MAKE],
                    ["Engine Code", selectedProduct.ENGINE_CODE],
                    ["Type", selectedProduct.TYPE],
                    ["Bore", selectedProduct.BORE],
                    ["Shoulder Length (H)", selectedProduct.H || "-"],
                    ["KS Part No", selectedProduct.KS_PART_NO],
                  ].map(([label, value], idx) => (
                    <div key={idx} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-blue-800 text-sm">{label}</p>
                      <p className="font-semibold text-lg break-words">{value}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        )}

      </section>
    </main>
  );
}
