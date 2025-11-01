'use client';
import { useState } from 'react';

interface ProductCarouselProps {
  images: string[];
  productName: string;
}

export default function ProductCarousel({ images, productName }: ProductCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative h-64 lg:h-80 bg-gray-100 rounded-lg overflow-hidden">
      {/* Main Image Display */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-600 text-sm mb-2">Image {currentImage + 1} of {images.length}</p>
          <p className="text-gray-500 text-xs">{images[currentImage]}</p>
        </div>
      </div>

      {/* Navigation Arrows - Only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition duration-200"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition duration-200"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition duration-200 ${
                index === currentImage ? 'bg-blue-600' : 'bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {currentImage + 1} / {images.length}
        </div>
      )}
    </div>
  );
}