import Container from "./container";
import Image from "next/image";
import oscr from "../../public/img/oscr_logo.jpg";
import logo from "../../public/img/logo.png";

export default function Footer() {
  return (
    <footer className="border-b-8 relative border-b-logo_grey py-8 text-white">
      <div className="absolute inset-0 z-[-2] bg-dark_green">
        <Image
          className="absolute opacity-50 left-1/8 rotate-[-12deg]"
          src={logo}
          alt="Helping Hilltop Logo"
        />
        <div className="h-3 bg-logo_green absolute w-full bottom-0 border-b-2 border-t-2 border-b-dark_green border-t-white"></div>
      </div>
      <Container>
        <div className="grid grid-cols-3">
          <div>
            <h2 className="text-[18px] font-bold mb-4">- CONTACT US -</h2>
            <h1 className="text-[22px] font-bold">HELPING HILLTOP</h1>
            <address className="not-italic mt-2">
              58 Ardenslate rd, <br />
              Kirn, Dunoon <br />
              <span className="whitespace-nowrap">PA23 8LT</span>
            </address>
            <p className="mt-4">- Vivenne Hannah -</p>
            <address className="not-italic">
              <a
                className="underline whitespace-nowrap decoration-transparent hover:decoration-white ease-in-out duration-300 transition-all"
                href="tel:+07455374201"
              >
                07455 374 201
              </a>
            </address>
            <address className="not-italic">
              <a
                className="underline decoration-transparent hover:decoration-white ease-in-out duration-300 transition-all"
                href="mailto:tc1viv@hotmail.com"
              >
                tc1viv@hotmail.com
              </a>
            </address>
          </div>
          <div>
            <address>
              Hilltop Christian Center <br />
              Godako, <br />
              Homabay, <br />
              Kenya
            </address>
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="h-[100px] w-fit"
              src={oscr}
              alt="OSCR. Scottish charity regulator. www.oscr.org.uk registered SCIO SCO53011"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
