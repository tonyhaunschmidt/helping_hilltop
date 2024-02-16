import Container from "./Container";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function WhoWeAreSection() {
  return (
    <section className="pt-8 pb-12 overflow-hidden shadow-md shadow-gray-500 border-t-2 relative border-t-white text-white text-center">
      <div className="absolute inset-0 z-[-2] bg-dark_green">
        <Image
          className="absolute opacity-50 left-1/8 rotate-[-12deg]"
          src={logo}
          alt="Helping Hilltop Logo"
        />
        <div className="h-3 bg-logo_green absolute w-full bottom-0 border-b-2 border-t-2 border-b-dark_green border-t-white"></div>
      </div>
      <Container>
        <div className="lg:px-36">
          <h1 className="text-[40px] font-bold text-center">- WHO WE ARE -</h1>
          <h2 className="text-[25px] mt-2 font-bold">Our Roots</h2>
          <p className="text-[18px] mt-4">
            Our strength lies not only in the words we stand by, but most
            importantly in the actions of our initiatives. From the moment we
            started out work in 2000 with Fabian, we understood that by working
            together we could help overcome their challenges much more
            efficiently, and that is why we ultimately decided to launch Helping
            Hilltop. We strive to make a positive change in all our pursuits.
          </p>
          <a className="w-fit mx-auto rounded-full block" href="/about_us">
            <div className="mt-10 rounded-full shadow-sm shadow-gray-500 w-fit bg-white border-2 border-logo_green text-logo_green px-6 py-2 hover:bg-logo_green hover:border-white hover:text-white ease-in-out duration-300 transition-all">
              <p className="text-[14px] font-semibold">FIND OUT MORE</p>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
