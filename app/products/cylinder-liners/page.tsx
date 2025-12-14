"use client";

import { useState, useEffect } from "react";
import catalog from "../../data/cylinderCatalog.json";

/* ---------------- TYPES ---------------- */

type CylinderLiner = {
  SE_CODE: string;
  MAKE: string;
  ENGINE_CODE: string;
  TYPE: string;
  BORE: string;
  H?: string;
  KS_PART_NO: string;
};

/* ---------------- IMAGE GROUPS ---------------- */

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
  tatra: ["/images/liners/tatra-1.png", "/images/liners/tatra-2.png"],
};

/* ---------------- HELPERS ---------------- */

const getImageGroupKey = (
  seCode?: string
): keyof typeof imageGroups | null => {
  if (!seCode) return null;
  if (seCode.startsWith("FL-912")) return "fl912";
  if (seCode.startsWith("FL-413")) return "fl413";
  if (seCode.startsWith("FL-913")) return "fl913";
  if (seCode.startsWith("VW")) return "vw";
  if (seCode.startsWith("TATRA")) return "tatra";
  return null;
};

/* ---------------- PAGE ---------------- */

export default function CylinderLinersPage() {
  const [selectedProduct, setSelectedProduct] =
    useState<CylinderLiner | null>(null);

  const [selectedMake, setSelectedMake] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const makes = [...new Set(catalog.map((item: CylinderLiner) => item.MAKE))];

  const filtered: CylinderLiner[] =
    selectedMake === ""
      ? catalog
      : catalog.filter((item: CylinderLiner) => item.MAKE === selectedMake);

  const groupKey = getImageGroupKey(selectedProduct?.SE_CODE);

  const currentImages: string[] =
    groupKey && imageGroups[groupKey]
      ? imageGroups[groupKey]
      : [];

  /* Reset carousel when product changes */
  useEffect(() => {
    if (!selectedProduct) return;
    setCurrentImageIndex(0);
  }, [selectedProduct]);

  /* Auto slide */
  useEffect(() => {
    if (!selectedProduct || currentImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % currentImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedProduct, currentImages]);

  const prevImage = () => {
    if (currentImages.length === 0) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  const nextImage = () => {
    if (currentImages.length === 0) return;
    setCurrentImageIndex(
      (prev) => (prev + 1) % currentImages.length
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/liner-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Cylinder Liners & Sleeves
            </span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg">
            Precision aftermarket cylinder liners for automotive and industrial engines.
          </p>
        </div>
      </section>

      {/* ---------------- FILTER + TABLE ---------------- */}
      <section className="py-14 px-4 max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Cylinder Liner Catalog
          </h2>
        </div>

        {/* FILTER */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-md bg-white shadow-lg border border-blue-200 rounded-2xl p-3">
            <select
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-blue-300 bg-white text-gray-700"
            >
              <option value="">All Manufacturers</option>
              {makes.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* LIST */}
        <div className="rounded-3xl shadow-2xl border border-blue-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5">
            <h3 className="text-lg font-semibold text-white">
              Product Specifications
            </h3>
          </div>

          <div className="divide-y">
            {filtered.map((row, idx) => (
              <div key={idx} className="hover:bg-blue-50 transition">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-5 text-sm">
                  <div><p className="text-gray-500">SE Code</p><p className="font-semibold">{row.SE_CODE}</p></div>
                  <div><p className="text-gray-500">Make</p><p className="font-semibold">{row.MAKE}</p></div>
                  <div><p className="text-gray-500">Engine</p><p className="font-semibold">{row.ENGINE_CODE}</p></div>
                  <div><p className="text-gray-500">Type</p><p className="font-semibold">{row.TYPE}</p></div>
                  <div><p className="text-gray-500">Bore</p><p className="font-semibold">{row.BORE}</p></div>
                  <div><p className="text-gray-500">H</p><p className="font-semibold">{row.H || "-"}</p></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500">KS No</p>
                      <p className="font-semibold">{row.KS_PART_NO}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProduct(row)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs hover:bg-blue-700"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- MODAL ---------------- */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-3 z-50">
            <div className="bg-white rounded-3xl p-6 w-full max-w-4xl shadow-2xl relative">

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* IMAGE */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-60 sm:h-72 rounded-2xl border bg-white flex items-center justify-center">
                    {currentImages.length > 0 && (
                      <img
                        src={currentImages[currentImageIndex]}
                        alt={selectedProduct.SE_CODE}
                        className="max-h-full max-w-full object-contain p-4"
                      />
                    )}

                    {currentImages.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-3">‹</button>
                        <button onClick={nextImage} className="absolute right-3">›</button>
                      </>
                    )}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="grid gap-3">
                  {[
                    ["Make", selectedProduct.MAKE],
                    ["Engine", selectedProduct.ENGINE_CODE],
                    ["Type", selectedProduct.TYPE],
                    ["Bore", selectedProduct.BORE],
                    ["H", selectedProduct.H || "-"],
                    ["KS No", selectedProduct.KS_PART_NO],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-blue-50 p-4 rounded-xl">
                      <p className="text-blue-800 text-sm">{label}</p>
                      <p className="font-semibold">{value}</p>
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
