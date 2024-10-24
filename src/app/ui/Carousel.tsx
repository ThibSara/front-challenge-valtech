"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";


interface CarouselItem {
  title: string;
  url: string;
  alt: string;
  description: string;
  type: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    const previousIndex =
      activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(previousIndex);
  };

  const goToNext = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      goToPrevious();
    } else if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <div className="relative w-full" aria-label="carousel" id="carousel">
      <div className="relative h-[454px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative h-[454px]"
              aria-labelledby={`carousel-item-${index}`}
            >
              <Image
                src={item.url}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="block"
              />
              <div className="absolute text-right bottom-4 right-4 text-black pl-10 p-60 ">
                <p
                  id={`carousel-item-${index}`}
                  className="text-lg font-semibold hover:text-primary underline transition-colors
              duration-300 ease-in-out "
                >
                  {item.title}
                </p>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 group">
          <ArrowLeft
            size={28}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-next
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group">
          <ArrowRight
            size={28}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
