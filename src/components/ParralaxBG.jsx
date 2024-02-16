"use client";

import Image from "next/image";
import letterImage from "../../public/img/letter_img.jpg";
import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";

export default function ParralaxBG() {
  const target = useRef(null);
  const bg = useParallax({
    speed: 200,
    targetElement: target.current,
  });

  return (
    <div ref={bg.ref} className="w-screen h-screen">
      <Image
        src={letterImage}
        alt="visual backgorund image"
        className="w-screen h-screen"
      />
    </div>
  );
}
