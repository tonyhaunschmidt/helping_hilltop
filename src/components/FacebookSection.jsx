import Container from "./Container";
import FacebookLayout from "./FacebookLayout";

export default function FacebookSection() {
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
      <FacebookLayout />
    </section>
  );
}
