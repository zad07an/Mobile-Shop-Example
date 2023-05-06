import React, { useState } from "react";
import { sliderDB } from "../data/slider-db";
import { BsChevronLeft, BsChevronRight } from "react-icons/all";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () =>
    currentIndex < 1
      ? setCurrentIndex(sliderDB.length - 1)
      : setCurrentIndex((prev) => prev - 1);

  const handleNextSlide = () =>
    currentIndex === sliderDB.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prev) => prev + 1);

  const sliderStyle = { transform: `translate3d(-${currentIndex} * 100%)` };

  return (
    <div className=" flex items-center relative overflow-hidden">
      <div
        className=" w-full h-[600px] transition-all whitespace-nowrap"
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
              <div className=" h-full w-fill flex items-center flex-col justify-center gap-4 " style={{background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))"}}>
                <p className=" text-white text-5xl font-bold uppercase">{slide?.title}</p>
                <p className=" text-white text-xl">{slide?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handlePrevSlide} className=" absolute left-[20px] py-2 px-6 rounded-md text-white text-3xl bg-black">
        <BsChevronLeft />
      </button>
      <button onClick={handleNextSlide} className=" absolute right-[20px] py-2 px-6 rounded-md text-white text-3xl bg-black">
        <BsChevronRight />
      </button>
    </div>
  );
}
