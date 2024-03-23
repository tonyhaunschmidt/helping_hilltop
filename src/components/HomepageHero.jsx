"use client";
import Image from "next/image";
import HomepageHeroOverlay from "./HomepageHeroOverlay";
import HomepageHeroSlider from "./HomepageHeroSlider";
import logo from "../../public/img/logo.png";

export default function HomepageHero() {
  const scrollToID = (id) => {
    window.scrollTo({
      top:
        document.getElementById(id).getBoundingClientRect().top +
        document.documentElement.scrollTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:h-screen relative overflow-hidden h-[300px] lg:min-h-[600px]">
      <HomepageHeroSlider />
      <HomepageHeroOverlay />
      <div className="absolute hidden lg:block inset-0">
        <div className="text-white flex w-fit items-center leading-none absolute left-20 bottom-20 space-x-6">
          <div className="rounded-3xl border w-fit bg-white p-6">
            <Image
              className="w-auto h-40"
              src={logo}
              alt="Helping Hilltop Logo"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-[70px]">HELPING HILLTOP</h1>
            <h2 className="text-[30px] pl-1 tracking-widest">
              Helping Orphans in Kenya
            </h2>
          </div>
        </div>
        <div className="absolute pt-4 px-4 w-fit right-16 bottom-0 overflow-hidden">
          <div
            onClick={() => scrollToID("welcome-text")}
            className="mx-auto hover:cursor-pointer hover:text-light_green hover:scale-105 ease-in-out duration-300 transition-all bg-bg_brown rounded-full aspect-square w-20 -mb-10"
          >
            <div className="h-1/2 w-full flex items-center justify-center">
              <span className="material-symbols-outlined scale-110 mt-1">
                arrow_downward
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
