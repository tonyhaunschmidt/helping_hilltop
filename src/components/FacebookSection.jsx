import Container from "./Container";
import FacebookLayout from "./FacebookLayout";

export default function FacebookSection() {
  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full absolute bottom-0 h-1/2 bg-bg_green"></div>
      </div>
      <Container>
        <h1 className="text-[40px] mb-4 font-bold text-center text-logo_green">
          <a
            href="https://www.facebook.com/profile.php?id=100092229692407"
            target="_blank"
          >
            - FOLLOW US ON FACEBOOK -
          </a>
        </h1>
      </Container>
      <FacebookLayout />
    </section>
  );
}
