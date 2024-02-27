import HomepageHeroOverlay from "./HomepageHeroOverlay";
import HomepageHeroSlider from "./HomepageHeroSlider";

export default function HomepageHero() {
  return (
    <div className="h-screen relative overflow-hidden min-h-[600px]">
      <HomepageHeroSlider />
      <HomepageHeroOverlay />
      <div className="absolute inset-0">
        <div className="w-fit absolute bg-dark_green pt-6 pl-12 bg-opacity-40 pb-4 pr-32 right-0 rounded-tl-[40px] text-white leading-none text-center bottom-0">
          <div className="w-full bg-white h-[6px] mb-2"></div>
          <h1 className="font-bold text-[70px]">HELPING HILLTOP</h1>
          <h2 className="text-[30px]">Helping Orphans in Kenya</h2>
          <div className="w-[340px] mx-auto bg-white h-[6px] mt-4 mb-2"></div>
          <div className="rounded-full absolute right-40 bottom-8 w-6 h-10 mx-auto border-2 border-white">
            <div className="rounded-full aspect-square mx-auto w-2 bg-white mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
