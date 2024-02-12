import Image from "next/image";
import heroImage from "../../public/img/hero_image.jpg";

export default function HomepageHero() {
  return (
    <div className="h-screen relative min-h-[600px]">
      <Image
        className="w-full h-full brightness-95 object-cover"
        src={heroImage}
        alt="hero image"
      />
      {/* chage to slider and have as own component (HEROSLIDER)  */}
      <div className="absolute inset-0">
        {/* HEROOVERLAY  */}
        <div className="h-[200px] w-full bg-gradient-to-t absolute top-0 left-0 from-transparent to-[rgba(0,0,0,0.7)]"></div>
        <div className="h-[300px] w-full bg-gradient-to-b absolute bottom-0 left-0 from-transparent to-[rgba(0,0,0,0.5)]"></div>
        {/* Hero Logo */}
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
