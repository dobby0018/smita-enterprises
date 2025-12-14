"use client";
import { useState } from "react";
import Image from "next/image";
import catalog from "../data/cylinderCatalog.json";

export default function CylinderLinersPage() {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const makes = [...new Set(catalog.map((item) => item.MAKE))];

  const filtered =
    selectedMake === ""
      ? catalog
      : catalog.filter((item) => item.MAKE === selectedMake);

  return (
    <main className="w-full text-gray-800">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="w-full h-[55vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/liner-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-sky-900/40 backdrop-blur-[1px]" />
        <h1 className="relative text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-xl">
          Cylinder Liners & Sleeves
        </h1>
      </section>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="py-20 container mx-auto px-5 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="leading-7 text-lg text-gray-700">
              Metallic Auto Liners manufactures over 350 models of Wet & Dry
              Cylinder Liners & Sleeves with wall thicknesses from 1mm to 15mm
              and lengths from 125mm to 370mm.
            </p>
            <p className="leading-7 text-lg text-gray-700">
              We supply both semi-finished and fully-finished liners, supporting
              local and export markets. Custom-spec liners are produced as per
              client requirements with precision and consistency.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl shadow-lg border border-sky-100 bg-white p-3">
              <Image
                src="/images/liner-description.jpg"
                width={500}
                height={500}
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="rounded-xl shadow-lg border border-sky-100 bg-white p-3">
              <Image
                src="/images/sleeve-description.jpg"
                width={500}
                height={500}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SPECIFICATIONS SECTION ---------- */}
      <section className="py-20 bg-sky-50 border-y border-sky-100">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-3xl font-bold text-sky-700 text-center mb-14">
            Specifications & Technical Details
          </h2>

          <div className="grid md:grid-cols-2 gap-14">
            {/* Left */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-sky-100 space-y-6">
              <h3 className="text-2xl font-semibold text-sky-600">
                Product Dimensions
              </h3>

              <table className="w-full text-left text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Bore Diameter</td>
                    <td>50–150 mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Total Length</td>
                    <td>125–370 mm</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <h3 className="text-2xl font-semibold text-sky-600 mb-1">
                  Production Capacity
                </h3>
                <p className="text-gray-700 text-lg">100,000 pieces per month</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-sky-600 mb-1">
                  Finishes
                </h3>
                <p className="text-gray-700 text-lg">
                  Semi-finished & Fully-finished
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-sky-100 space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-sky-600 mb-3">
                  Material Standards
                </h3>
                <table className="w-full text-left text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">India</td>
                      <td>HT200, HT250, HT300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">USA</td>
                      <td>NO.30, NO.35, NO.45</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Europe</td>
                      <td>GG20, GG25, GG30</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Japan</td>
                      <td>FC200, FC250, FC300</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-sky-600 mb-3">
                  Chemical Composition
                </h3>
                <table className="w-full text-left text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Carbon</td>
                      <td>2.80–3.50</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Silicon</td>
                      <td>1.80–2.50</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Manganese</td>
                      <td>0.60–1.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Phosphorus</td>
                      <td>0.20–0.50</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sulphur</td>
                      <td>0.00–0.12</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-sky-600 mb-3">
                  Mechanical Properties
                </h3>
                <table className="w-full text-left text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Hardness</td>
                      <td>210–280 BHN</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Tensile Strength</td>
                      <td>210–275 N/mm²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CATALOG ---------- */}
      <section className="py-24 container mx-auto px-5 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
          Aftermarket Cylinder Liner Catalog
        </h2>

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <select
            className="border border-sky-300 rounded-lg px-5 py-3 bg-white shadow-sm text-gray-700 text-lg focus:ring-2 focus:ring-sky-300"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">All Manufacturers</option>
            {makes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-sky-100">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-sky-600 text-white text-sm uppercase tracking-wide">
                <th className="p-4">MAL No</th>
                <th className="p-4">Make</th>
                <th className="p-4">Engine Code</th>
                <th className="p-4">Bore</th>
                <th className="p-4">Length</th>
                <th className="p-4 text-center">Details</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((row, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-sky-50 transition cursor-pointer"
                >
                  <td className="p-4">{row.MAL}</td>
                  <td className="p-4">{row.C}</td>
                  <td className="p-4">{row.ENGINE_CODE}</td>
                  <td className="p-4">{row.BORE}</td>
                  <td className="p-4">{row.LENGTH}</td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => setSelectedProduct(row)}
                      className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm shadow-md hover:bg-sky-700 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------- PRODUCT MODAL ---------- */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 w-full max-w-xl shadow-2xl relative border border-sky-200 animate-scaleIn">
              <button
                className="absolute right-4 top-4 text-gray-500 text-xl hover:text-black transition"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>

              <h3 className="text-3xl font-semibold mb-6 text-sky-700">
                {selectedProduct.MAL}
              </h3>

              <table className="w-full text-left text-gray-700">
                {Object.entries(selectedProduct).map(([key, val]) => {
                  if (["IMAGE", "DRAWING"].includes(key)) return null;
                  return (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium w-1/3">{key}</td>
                      <td className="py-2">{String(val)}</td>
                    </tr>
                  );
                })}
              </table>

              {selectedProduct.DRAWING && (
                <a
                  href={selectedProduct.DRAWING}
                  target="_blank"
                  className="mt-5 inline-block text-sky-600 underline hover:text-sky-800 transition"
                >
                  View Technical Drawing
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
