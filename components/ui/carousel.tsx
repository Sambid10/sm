"use client";
import React, { useState, useRef, useId, useEffect } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface SlideData {
  title: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <li
      ref={slideRef}
      className="shrink-0 w-full h-full relative text-center transition-transform duration-500"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          current !== index
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-md bg-[#1D1F2F] transition-transform duration-150"
        style={{
          transform:
            current === index
              ? "translate3d(calc(var(--x)/30), calc(var(--y)/30), 0)"
              : "none",
        }}
      >
        <img
          src={slide.src}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        {current === index && <div className="absolute inset-0 bg-black/20" />}
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-12 h-12 cursor-pointer flex items-center justify-center mx-2 bg-white border border-black dark:bg-neutral-800 rounded-full focus:outline-none ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };
  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };
  const id = useId();

  return (
    <div className="relative h-[70vh]">
      <ul
        className="flex transition-transform duration-600 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute bottom-4 backdrop-blur-sm rounded-md px-5 py-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <CarouselControl
          type="previous"
          title="Previous"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Next"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};