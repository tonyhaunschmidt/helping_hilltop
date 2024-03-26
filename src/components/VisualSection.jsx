import Container from "./Container";

export default function VisualSection() {
  return (
    <section className="pt-10 text-center text-white pb-10 relative">
      <div className="absolute z-[-2] inset-0 bg-fixed bg-cover bg-[url('../../public/img/visual_bg.jpg')]"></div>
      <div className="bg-dark_green bg-opacity-60 absolute z-[-1] inset-0 "></div>
      <Container>
        <h1 className="text-[90px] leading-tight font-bold">
          Helping Hilltop
          <br /> Gives Back
        </h1>
        <p className="text-[24px] mt-5 font-bold">
          Working Toward a Brighter Future
        </p>
      </Container>
    </section>
  );
}
