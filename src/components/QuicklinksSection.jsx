import Container from "./Container";
import QuicklinkLayout from "./QuicklinksLayout";

export default function QuicklinkSection() {
  return (
    <section className="pt-16 pb-12 relative">
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full absolute bottom-0 h-1/2 bg-bg_green"></div>
      </div>
      <Container>
        <h1 className="text-[40px] mb-7 font-bold text-center text-logo_green">
          - HOW YOU CAN HELP HILLTOP -
        </h1>
      </Container>
      <QuicklinkLayout />
    </section>
  );
}
