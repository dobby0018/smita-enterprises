'use client';
import { useState } from "react";

interface ProductCarouselProps {
  images: string[];
  productName: string;
}

export default function ProductCarousel({ images, productName }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const goTo = (i: number) => setCurrent(i);

  return (
    <div className="relative bg-white border rounded-xl shadow-sm overflow-hidden">
      
      {/* Image Placeholder (since you don't want to swap your images yet) */}
      <div className="h-64 lg:h-80 bg-sky-50 flex items-center justify-center text-center">
        <div>
          <div className="w-16 h-16 bg-sky-100 rounded-full mx-auto flex items-center justify-center">
            <span className="text-3xl text-sky-700">🖼️</span>
          </div>
          <p className="text-gray-600 mt-2 text-sm">Image {current + 1} of {images.length}</p>
          <p className="text-gray-400 text-xs">{images[current]}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md w-8 h-8 rounded-full hover:bg-sky-50"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md w-8 h-8 rounded-full hover:bg-sky-50"
          >
            ›
          </button>
        </>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === current ? "bg-sky-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Count badge */}
      <div className="absolute top-3 right-3 bg-sky-600 text-white text-xs px-2 py-1 rounded">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
