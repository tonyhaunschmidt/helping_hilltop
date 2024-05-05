"use client";
import Container from "./Container";

import React from "react";
import Slider from "react-slick";

export default function MissionSection() {
  var sliderSettings = {
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
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
        <div className="aspect-square w-3 rounded-full bg-white hover:bg-light_green hover:cursor-pointer [.slick-active_&]:bg-logo_green ease-in-out duration-300 transition-all"></div>
      </div>
    ),
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pt-12 text-center text-white pb-10 relative">
      <div className="absolute z-[-2] inset-0 bg-fixed bg-cover bg-[url('../../public/img/mission_bg.jpg')]"></div>
      <div className="bg-dark_green bg-opacity-60 absolute z-[-1] inset-0 "></div>
      <Container>
        <h1 className="text-[20px] leading-tight font-bold">
          FABIAN&apos;S MISSION STATEMENT
        </h1>
        <div className="text-[35px] mt-10 xl:px-20 2xl:px-56">
          <Slider {...sliderSettings}>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>
                  To provide the children with safe accommodation and good
                  nutrition
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>
                  To have a permanent safe water system to provide clean water
                  for the children and to water the farm
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>
                  To grow food and introduce the children to sustainable
                  agriculture
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>
                  To provide better health care for the children by employing a
                  home nurse
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>
                  To provide schooling within the centre for the younger
                  children, to start their basic education without travel or
                  fees
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>
                  To establish computer training for the children for digital
                  literacy and to connect them with the world
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>To farm in a permaculture way</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center min-h-[370px] sm:min-h-0 sm:h-[160px] lg:h-[105px]">
                <p>To become self-sufficient</p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
}
