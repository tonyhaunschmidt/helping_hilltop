"use client";
import Image from "next/image";
import heroImage1 from "../../public/img/hero_images/hero_image1.jpg";
import heroImage2 from "../../public/img/hero_images/hero_image2.jpg";
import heroImage3 from "../../public/img/hero_images/hero_image3.jpg";

import React from "react";
import Slider from "react-slick";

export default function HomepageHeroSlider() {
  const heroImages = [heroImage1, heroImage2, heroImage3];

  var sliderSettings = {
    dotsClass: "hero_dots",
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        setting: {
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {heroImages.map((image, index) => (
        <Image
          className="w-screen h-screen min-h-[600px] brightness-95 object-cover"
          key={index}
          src={image}
          alt="hero image"
        />
      ))}
    </Slider>
  );
}