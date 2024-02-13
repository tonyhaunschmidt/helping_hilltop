import Image from "next/image";
import maintextImage from "../../public/img/maintext_image.jpg";
import Container from "./Container";

export default function FacebookSection() {
  const facebookFeed = ["", "", "", ""];

  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full absolute bottom-0 h-1/2 bg-bg_green"></div>
      </div>
      <Container>
        <h1 className="text-[35px] font-bold text-center text-logo_green">
          FOLLOW US ON FACEBOOK
        </h1>
      </Container>
      {/* facebook layout */}
      <Container>
        <div className="grid grid-cols-4 gap-2">
          {facebookFeed.map((card, index) => (
            <div key={index}>
              {/* facebook card */}
              <div className="h-[320px] rounded-xl bg-logo_green"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
