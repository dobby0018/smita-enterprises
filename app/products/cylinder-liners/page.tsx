"use client";

import { useState } from "react";
import catalog from "../../data/cylinderCatalog.json";

export default function CylinderLinersPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedMake, setSelectedMake] = useState("");

  // Normalize makes: trim and remove empty values, keep original casing for display
  const makesSet = new Set(
    catalog
      .map((item) => (item.MAKE ?? "").toString().trim())
      .filter((m) => m.length > 0)
  );
  const makes = Array.from(makesSet);

  const filtered =
    selectedMake === ""
      ? catalog
      : catalog.filter(
          (item) =>
            (item.MAKE ?? "")
              .toString()
              .trim()
              .toLowerCase() === selectedMake.toString().trim().toLowerCase()
        );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* ---------------- HERO SECTION (slightly decreased height) ---------------- */}
      <section
        className="relative bg-gray-900 text-white py-20 md:py-28 lg:py-32 overflow-hidden"
        aria-hidden={false}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/liner-banner.png')" }}
        >
          <div className="absolute inset-0 bg-blue-900/72 mix-blend-multiply" />
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
              aria-label="Filter by manufacturer"
            >
              <option value="">All Manufacturers</option>
              {makes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="rounded-3xl shadow-2xl border border-blue-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5">
            <h3 className="text-lg font-semibold text-white">Product Specifications</h3>
          </div>

          <div className="divide-y divide-gray-100">
            {filtered.map((row, idx) => (
              <div key={idx} className="group transition-all duration-300 hover:bg-blue-50/70">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-5">
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
                    <p className="font-semibold">{row.H ?? "-"}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-xs">KS Part No</p>
                      <p className="font-semibold">{row.KS_PART_NO}</p>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(row)}
                      className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`View details for ${row.SE_CODE}`}
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

        {/* ---------------- MODAL (compact) ---------------- */}
      {/* ---------------- MODAL (cleaned & non-duplicated) ---------------- */}
{selectedProduct && (
  <div
    className="fixed inset-0 bg-black/25 z-50 flex items-center justify-center"
    role="dialog"
    aria-modal="true"
  >
    <div className="w-full mx-4 max-w-3xl">
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden">

        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-blue-50">
          <div>
            <p className="text-gray-500 text-xs">SE Code</p>
            <p className="font-semibold text-xl sm:text-2xl">
              {selectedProduct.SE_CODE}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {selectedProduct.TYPE}
            </p>
          </div>

          <button
            onClick={() => setSelectedProduct(null)}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 
                       flex items-center justify-center text-lg text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5 max-h-[65vh] overflow-auto">
          <div className="grid gap-5 md:grid-cols-2">

            {/* LEFT: Overview */}
            <div className="rounded-xl border border-blue-100 p-4">
              <p className="text-gray-500 text-xs mb-2">Overview</p>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500 text-xs">Make</p>
                  <p className="font-semibold">{selectedProduct.MAKE}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">Engine Code</p>
                  <p className="font-semibold">{selectedProduct.ENGINE_CODE}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">KS Part No</p>
                  <p className="font-semibold">{selectedProduct.KS_PART_NO}</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Technical Specs */}
            <div className="grid gap-3">
              {[
                ["Bore", selectedProduct.BORE],
                ["A", selectedProduct.A],
                ["C", selectedProduct.C],
                ["H (Shoulder)", selectedProduct.H],
                ["L", selectedProduct.L],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 rounded-xl p-3 border border-blue-100"
                >
                  <p className="text-blue-800 text-xs">{label}</p>
                  <p className="font-semibold text-base">{value ?? "-"}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-blue-50 flex justify-end">
          <button
            onClick={() => setSelectedProduct(null)}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  </div>
)}

      </section>
    </main>
  );
}

/* Compact small field used in modal footer area */
function SmallField({ label, value }: { label: string; value: string | number | undefined }) {
  return (
    <div className="bg-white rounded-lg p-2 border border-blue-50">
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="font-semibold text-sm">{value ?? "-"}</p>
    </div>
  );
}
