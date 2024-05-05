"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} w-10 z-50 aspect-square hover:cursor-pointer rounded-full bg-logo_green hover:brightness-75  ease-in-out duration-300 transition-all flex items-center justify-center absolute right-1 sm:right-5 lg:right-10 top-[calc(50%-60px)]`}
      onClick={onClick}
    >
      <span class="material-symbols-outlined text-white text-4xl">
        chevron_right
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-10 z-50 aspect-square hover:cursor-pointer rounded-full bg-logo_green hover:brightness-75 ease-in-out duration-300 transition-all flex items-center justify-center absolute left-1 sm:left-5 lg:left-10 top-[calc(50%-60px)]`}
      onClick={onClick}
    >
      <span class="material-symbols-outlined text-white text-4xl">
        chevron_left
      </span>
    </div>
  );
}

export default function ImageSlideshow({ slides, className }) {
  var sliderSettings = {
    adaptiveHeight: false,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: false,
    fade: true,
    appendDots: (dots) => (
      <div>
        <ul className="h-20 flex items-center justify-center space-x-3">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div>
        <div className="aspect-square w-3 rounded-full bg-logo_grey hover:bg-light_green hover:cursor-pointer [.slick-active_&]:bg-logo_green ease-in-out duration-300 transition-all"></div>
      </div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={`${className} rounded-xl`}>
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="">
            <div className="h-96 flex items-center justify-center">
              <Image
                className="max-h-full w-auto h-auto max-w-full rounded-2xl border border-logo_grey"
                src={slide.image}
                alt={slide.alt}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
