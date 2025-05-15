"use client"
// components/PhotoCarousel.tsx
import { useState } from 'react';

interface PhotoCarouselProps {
  photos: string[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto select-none">
      <img
        src={photos[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="w-full h-[400px] object-cover rounded-md"
        loading="lazy"
      />
      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Previous photo"
      >
        ‹
      </button>
      {/* Next button */}
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Next photo"
      >
        ›
      </button>
      {/* Pagination */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
