import heroImage from "../../public/img/hero_image.jpg";

export default function HomepageHero() {
  return (
    <div className=" h-screen bg-logo_green min-h-[600px]">
      <image className="w-full h-full object-cover" src={heroImage} />
    </div>
  );
}
