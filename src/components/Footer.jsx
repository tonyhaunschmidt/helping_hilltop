import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-dark_green py-12 text-white">
      <Container>
        <div className="grid grid-cols-3">
          <div>
            <h1 className="text-[18px] font-bold">- CONTACT US -</h1>
            <address>58 Ardenslate rd, kirn, Dunoon</address>
            phone 097907070707 email j ds vasvsav
          </div>
          <div>
            <address>
              Hilltop Christian Centre is in Godako, Homabay County Kenya
            </address>
          </div>
          <div>OSCR LOGO</div>
        </div>
      </Container>
    </footer>
  );
}
