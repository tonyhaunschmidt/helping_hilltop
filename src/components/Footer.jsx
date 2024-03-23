import Container from "./Container";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function Footer() {
  return (
    <footer className="relative py-12 border-b-8 border-b-black border-t-2 border-logo_green text-white bg-dark_green">
      <Container>
        <div className="grid sm:grid-cols-2 gap-y-8 lg:grid-cols-4">
          <div className="sm:col-span-2 relative">
            <div className="flex lg:space-x-4">
              <div className="bg-white absolute right-0 lg:static h-full hidden sm:block lg:h-[90px] rounded-xl p-2">
                <Image
                  className="h-full w-auto"
                  alt="hilltop logo"
                  src={logo}
                />
              </div>
              <div className="leading-tight">
                <h1 className="text-[34px] font-bold">HELPING HILLTOP</h1>
                <h2 className="text-[18px]">Helping Orphans in Kenya</h2>
              </div>
            </div>
            <address className="not-italic mt-5 lg:mt-1 lg:pl-24">
              58 Ardenslate rd, Kirn, Dunoon{" "}
              <span className="whitespace-nowrap">PA23 8LT</span>
            </address>
            <div className="h-0.5 mt-2 w-16 bg-logo_green rounded-full lg:ml-24"></div>
            <address className="not-italic mt-2 lg:pl-24">
              Hilltop Christian Center, Godako, Homabay, Kenya
            </address>
          </div>
          <div className="xl:pl-0 lg:pl-12">
            <h2 className="font-bold">CONTACT US</h2>
            <div className="h-1 w-16 bg-logo_green mt-0.5 rounded-full"></div>
            <p className="mt-4">Vivenne Hannah</p>
            <address className="not-italic font-bold">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="tel:+07455374201"
              >
                07455 374201
              </a>
            </address>
            <address className="not-italic">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="helpinghilltop23@gmail.com"
              >
                helpinghilltop23@gmail.com
              </a>
            </address>
            <div className="h-0.5 mt-2 w-16 bg-logo_green rounded-full"></div>
            <address className="not-italic whitespace-nowrap mt-2">
              Registered SCIO- SCO53011
            </address>
          </div>
          <div className="sm:text-right sm:pt-4">
            <p className="">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="/"
              >
                HOME
              </a>
            </p>
            <p className="">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="/"
              >
                ABOUT US
              </a>
            </p>
            <p className="">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="/"
              >
                DONATE
              </a>
            </p>
            <p className="">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="/"
              >
                AMAZON WISHLIST
              </a>
            </p>
            <p className="">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="/"
              >
                FACEBOOK
              </a>
            </p>
            <p className="">
              <a
                className="hover:text-light_green ease-in-out duration-300 transition-all"
                href="/"
              >
                WORK WITH US
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
