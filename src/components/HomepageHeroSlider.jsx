"use client";
import Image from "next/image";
import heroImage1 from "../../public/img/hero_images/hero_image1.jpg";
import heroImage2 from "../../public/img/hero_images/hero_image2.jpg";
import heroImage3 from "../../public/img/hero_images/hero_image3.jpg";
import heroImage4 from "../../public/img/hero_images/hero_image4.jpg";
import heroImage5 from "../../public/img/hero_images/hero_image5.jpg";

import React from "react";
import Slider from "react-slick";

export default function HomepageHeroSlider() {
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
  ];

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
        <ul className="w-fit left-[305px] z-50 absolute flex items-center justify-center space-x-3 bottom-24">
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {heroImages.map((image, index) => (
        <Image
          className="w-screen h-[300px] lg:h-screen lg:min-h-[600px] object-cover"
          key={index}
          src={image}
          alt="hero image"
        />
      ))}
    </Slider>
  );
}
