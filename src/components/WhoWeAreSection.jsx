import Container from "./Container";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function WhoWeAreSection() {
  return (
    <section className="pt-6 overflow-hidden shadow-md shadow-gray-500 border-t-2 relative border-t-white text-white text-center">
      <div className="absolute inset-0 z-[-2] bg-dark_green">
        <Image
          className="absolute opacity-50 left-1/8 rotate-[-12deg]"
          src={logo}
          alt="Helping Hilltop Logo"
        />
      </div>
      <Container>
        <div className="lg:px-36">
          <h1 className="text-[40px] font-bold text-center">- WHO WE ARE -</h1>
          <h2 className="text-[25px] font-bold">Our Roots</h2>
          <p className="text-[18px] mt-4">
            Our strength lies not only in the words we stand by, but most
            importantly in the actions of our initiatives. From the moment we
            started out work in 2000 with Fabian, we understood that by working
            together we could help overcome their challenges much more
            efficiently, and that is why we ultimately decided to launch Helping
            Hilltop. We strive to make a positive change in all our pursuits.
          </p>
          <p>-</p>
        </div>
      </Container>
      <div className="h-3 bg-logo_green mt-8 border-b-2 border-t-2 border-b-dark_green border-t-white "></div>
    </section>
  );
}
