"use client";

import Container from "./Container";
import { ParallaxProvider } from "react-scroll-parallax";
import ParralaxBG from "./ParralaxBG";

export default function VisualSection() {
  return (
    <section className="pt-10 pb-10 relative">
      {/* <ParallaxProvider>
        <ParralaxBG />
      </ParallaxProvider> */}
      <div className="absolute z-[-2] inset-0 bg-fixed bg-cover bg-visual_bg"></div>
      <Container></Container>
    </section>
  );
}
