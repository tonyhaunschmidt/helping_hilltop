import Container from "./Container";
// import { ParallaxProvider } from "react-scroll-parallax";
// import ParralaxBG from "./ParralaxBG";
import Image from "next/image";
import visualBG from "../../public/img/visual_bg.jpg";

export default function VisualSection() {
  return (
    <section className="pt-10 border-y-2 text-center text-white border-y-logo_green shadow-md shadow-gray-500 pb-10 relative">
      {/* <ParallaxProvider>
        <ParralaxBG />
      </ParallaxProvider> */}
      <Image
        className="absolute z-[-2] w-full h-full object-cover top-0 left-0"
        src={visualBG}
        alt="Helping Hilltop Logo"
      />
      {/* <div className="absolute z-[-2] inset-0 bg-fixed bg-cover bg-visual_bg"></div> */}
      <div className="bg-dark_green bg-opacity-50 absolute z-[-1] inset-0 "></div>
      <Container>
        <h1 className="text-[90px] leading-tight font-bold">
          Helping Hilltop
          <br /> Gives Back
        </h1>
        <p className="text-[24px] mt-5 font-bold">
          Working Toward a Brighter Future
        </p>
      </Container>
    </section>
  );
}
