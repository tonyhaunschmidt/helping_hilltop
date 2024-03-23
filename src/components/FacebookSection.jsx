import Container from "./Container";
import FacebookLayout from "./FacebookLayout";

export default function FacebookSection() {
  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full absolute bottom-0 h-1/2 bg-bg_green"></div>
      </div>
      <Container>
        <Container>
          <div className="mb-8 items-center text-center">
            <h1 className="leading-tight">
              <span className="text-[20px]">FOLLOW OUR</span>
              <br />
              <span className="text-[40px] sm:text-[55px] text-dark_green font-black">
                SOCIALS
              </span>
            </h1>
            <div className="h-2 mt-1 w-[100px] mx-auto rounded-full bg-logo_green"></div>
          </div>
        </Container>
      </Container>
      <FacebookLayout />
    </section>
  );
}
