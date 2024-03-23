import Container from "./Container";
import QuicklinkLayout from "./QuicklinksLayout";

export default function QuicklinkSection() {
  return (
    <section className="pt-8 pb-16 relative">
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full absolute top-0 h-1/2 bg-bg_green"></div>
      </div>
      <Container>
        <div className="mb-8 items-center text-center">
          <h1 className="leading-tight">
            <span className="text-[20px]">HOW YOU CAN</span>
            <br />
            <span className="text-[40px] sm:text-[55px] text-dark_green font-black">
              HELP HILLTOP
            </span>
          </h1>
          <div className="h-2 mt-1 w-[100px] mx-auto rounded-full bg-logo_green"></div>
        </div>
      </Container>
      <QuicklinkLayout />
    </section>
  );
}
