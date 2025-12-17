"use client";
import { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CarouselLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, src: "/assets/banner/banner1.jpg", alt: "banner 1" },
    { id: 2, src: "/assets/banner/banner2.jpg", alt: "banner 2" },
    { id: 3, src: "/assets/banner/banner3.jpg", alt: "banner 3" },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-56 md:h-96 lg:h-[500px] overflow-hidden rounded-lg bg-base-200">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-sm md:btn-md bg-white/80 hover:bg-white text-gray-800 border-0 transition-all"
        aria-label="Previous slide"
      >
        <BsChevronLeft className="text-xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-sm md:btn-md bg-white/80 hover:bg-white text-gray-800 border-0 transition-all"
        aria-label="Next slide"
      >
        <BsChevronRight className="text-xl" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselLayout;