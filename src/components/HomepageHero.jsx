import HomepageHeroOverlay from "./HomepageHeroOverlay";
import HomepageHeroSlider from "./HomepageHeroSlider";

export default function HomepageHero() {
  return (
    <div className="h-screen relative overflow-hidden min-h-[600px]">
      <HomepageHeroSlider />
      <HomepageHeroOverlay />
      <div className="absolute inset-0">
        <div className="w-fit absolute bottom-20 right-32">
          <h1 className="text-white font-bold leading-none text-[70px]">
            HELPING
            <br />
            HILLTOP
          </h1>
        </div>
      </div>
    </div>
  );
}
