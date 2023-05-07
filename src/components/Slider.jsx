import React, { useState } from "react";
import { sliderDB } from "../data/slider-db";
import { BsChevronLeft, BsChevronRight } from "react-icons/all";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () =>
    setCurrentIndex((prev) => (prev < 1 ? sliderDB?.length - 1 : prev - 1));

  const handleNextSlide = () =>
    setCurrentIndex((prev) => (prev === sliderDB?.length - 1 ? 0 : prev + 1));

  return (
    <div className=" flex items-center relative overflow-hidden">
      <div
        className=" w-full h-[600px] transition-[all_ease-in-out] duration-[1s] whitespace-nowrap"
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
        {sliderDB?.map((slide, index) => {
          return (
            <div
              key={slide?.id}
              className=" h-full w-full inline-block overflow-hidden"
              style={{
                background: `url('${slide?.url}') no-repeat center / cover`,
              }}
            >
              <div
                className=" h-full w-fill flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
                }}
              >
                <div className=" flex items-center flex-col gap-4">
                  <p className=" text-white text-5xl font-bold uppercase">
                    {slide?.title}
                  </p>
                  <p className=" text-white text-xl">{slide?.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full flex justify-center items-center gap-4 absolute bottom-10">
        {sliderDB?.map((_, index) => {
          return (
            <div
              key={index}
              className=" w-4 h-4 rounded-full transition-all duration-700 bg-primary-black border border-gray-600 cursor-pointer"
              style={{
                background: index === currentIndex ? "#E06714" : null,
                width: index === currentIndex ? "40px" : null,
                border: index === currentIndex ? "none" : null,
              }}
              onClick={() => setCurrentIndex(index)}
            ></div>
          );
        })}
      </div>
      <button
        onClick={handlePrevSlide}
        className=" absolute left-[20px] py-2 px-6 rounded-md text-white text-3xl bg-primary-black"
      >
        <BsChevronLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className=" absolute right-[20px] py-2 px-6 rounded-md text-white text-3xl bg-primary-black"
      >
        <BsChevronRight />
      </button>
    </div>
  );
}
