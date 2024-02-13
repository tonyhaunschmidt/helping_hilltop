import Image from "next/image";
import maintextImage from "../../public/img/maintext_image.jpg";
import Container from "./Container";

export default function QuicklinkSection() {
  const quicklinks = [
    {
      titleFirst: "View our",
      titleSecond: "SHOP",
      subtext: "",
      image: "",
      link: "",
      target: "",
    },
    {
      titleFirst: "View our",
      titleSecond: "SHOP",
      subtext: "",
      image: "",
      link: "",
      target: "",
    },
    {
      titleFirst: "View our",
      titleSecond: "SHOP",
      subtext: "",
      image: "",
      link: "",
      target: "",
    },
  ];

  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full h-1/2 bg-bg_green"></div>
      </div>
      <Container>
        <h1 className="text-[35px] font-bold text-center text-logo_green">
          HOW YOU CAN HELP HILLTOP
        </h1>
      </Container>
      {/* quicklinks layout */}
      <Container>
        <div className="grid grid-cols-3 gap-2">
          {quicklinks.map((quicklink, index) => (
            <div key={index}>
              {/* quicklinks card */}
              <div className="h-[400px] rounded-xl bg-logo_green"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
