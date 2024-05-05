import Container from "@/components/Container";
import Image from "next/image";
import ImageSlideshow from "@/components/ImageSlideshow";
import uniforms from "../../../public/img/uniforms.jpg";
import water1 from "../../../public/img/water1.jpg";
import water2 from "../../../public/img/water2.jpg";
import water3 from "../../../public/img/water3.jpg";
import water4 from "../../../public/img/water4.jpg";
import farm1 from "../../../public/img/farm1.jpg";
import farm2 from "../../../public/img/farm2.jpg";
import farm3 from "../../../public/img/farm3.jpg";
import farm4 from "../../../public/img/farm4.jpg";
import farm5 from "../../../public/img/farm5.jpg";
import farm6 from "../../../public/img/farm6.jpg";
import farm7 from "../../../public/img/farm7.jpg";
import farm8 from "../../../public/img/farm8.jpg";
import farm9 from "../../../public/img/farm9.jpg";
import farm10 from "../../../public/img/farm10.jpg";
import farm11 from "../../../public/img/farm11.jpg";
import accommodation1 from "../../../public/img/accommodation1.jpg";
import accommodation2 from "../../../public/img/accommodation2.jpg";
import accommodation3 from "../../../public/img/accommodation3.jpg";
import accommodation4 from "../../../public/img/accommodation4.jpg";
import health1 from "../../../public/img/health1.jpg";
import health2 from "../../../public/img/health2.jpg";
import chess from "../../../public/img/chess.jpg";
import swing from "../../../public/img/swing.jpg";
import bike from "../../../public/img/bike.jpg";

export default function Page() {
  // const educationSlides = [{ image: uniforms, alt: "School Uniforms" }];
  const waterSlides = [
    { image: water1, alt: "Dirty drinking pond" },
    { image: water2, alt: "village drinking pump" },
    { image: water3, alt: "Water tank" },
    { image: water4, alt: "Water from the tank" },
  ];
  const farmSlides = [
    { image: farm1, alt: "Ploughed field" },
    { image: farm2, alt: "Filed with crops" },
    { image: farm3, alt: "Poly tunnel" },
    { image: farm4, alt: "Poly tunnel" },
    { image: farm5, alt: "Crops" },
    { image: farm6, alt: "Harvest" },
    { image: farm7, alt: "Harvest" },
    { image: farm8, alt: "Chicken" },
    { image: farm9, alt: "Cow" },
    { image: farm10, alt: "Rack-shade-garden" },
    { image: farm11, alt: "Rack-shade-garden with crops" },
  ];
  const accommodationSlides = [
    { image: accommodation1, alt: "Arson attack damage" },
    { image: accommodation2, alt: "Building repaired" },
    { image: accommodation3, alt: "Perimieter Fence" },
    { image: accommodation4, alt: "Bunk bed" },
  ];
  const healthSlides = [
    { image: health1, alt: "Children with their toothbrushes" },
    { image: health2, alt: "Children with there shoesfarm" },
  ];
  const playSlides = [
    { image: chess, alt: "playing chess" },
    { image: swing, alt: "playing on the swing" },
  ];
  // const otherSlides = [{ image: bike, alt: "fabian's bike" }];

  return (
    <main className="pb-12 pt-20">
      <Container>
        <div className="bg-white rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[30px] sm:text-[40px] font-black">
            WHAT WE HAVE ACHIEVED
          </h1>
          <h2 className="text-3xl mt-8 font-bold text-dark_green">EDUCATION</h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>
              All children now have school uniform – they are not permitted to
              attend without this
            </p>
            <p>Hair trimmers supplied for regulation short haircut</p>
            <p>Stationary, pens, pencils, geometry sets</p>
            <p>
              Money sent for exam fees – compulsory from aged 12-16. Cannot
              continue without passing these
            </p>
            <p>
              Two 16 year old girls attending boarding school for further
              education. Ongoing school fees paid and money for compulsory
              school kit (bedding, cutlery, crockery, uniform, paper etc paid)
            </p>
            <p>
              Reusable sanitary towels so girls not missing school due to
              periods
            </p>
          </div>
          <Image
            className="w-full h-auto lg:h-96 lg:w-auto mx-auto mt-12 rounded-2xl border border-logo_grey"
            src={uniforms}
            alt="School Uniforms"
          />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">WATER</h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>From a dirty pond for washing and watering plants</p>
            <p>And a village pump which is sometimes dry to...</p>
            <p>Drinking water delivered weekly (no cholera since)</p>
            <p>
              Rain-water collection system fed from gutters on Fabian’s house to
              a 10,000-litre water butt
            </p>
          </div>
          <ImageSlideshow className={"mt-12"} slides={waterSlides} />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">
            THE FARM - TOWARDS SELF-SUFFICIENCY
          </h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>
              Fallow field ploughed after years of disuse and planted with maize
            </p>
            <p>Polytunnel recovered and planted with Kale</p>
            <p>
              Also growing bananas, sweet potatoes, carrots, mangoes, coriander
            </p>
            <p>
              The harvest was excellent – spare food is being bartered for goods
              and school fees
            </p>
            <p>
              Two chickens were bought – these are now 40 and used for bartering
            </p>
            <p>
              A pregnant cow was purchased, now 2 and to be used for breeding
            </p>
          </div>
          <ImageSlideshow className={"mt-12"} slides={farmSlides} />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">
            ACCOMMODATION
          </h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>
              In November 2021 disaster struck and the two dormitory huts that
              the children sleep in was subject to an arson attack, damaging the
              walls and roof and destroying stored food, seating and other
              items. They were uninhabitable and the children had to be found
              places to sleep around the village.
            </p>
            <p>The building has been fully repaired</p>
            <p>A perimeter fence was constructed</p>
            <p>Money was provided to replace the lost food and other items</p>
            <p>
              Bunk beds are gradually being provided so the children don’t have
              to sleep on the floor
            </p>
          </div>
          <ImageSlideshow className={"mt-12"} slides={accommodationSlides} />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">HEALTH</h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>Reusable sanitary towels and underwear for the girls</p>
            <p>Toothbrushes, toothpaste and soap were very welcome</p>
            <p>Mosquito nets</p>
            <p>3 courses of Malaria treatment paid for</p>
            <p>Clothes and shoes provided</p>
            <p>Latrines emptied and treated</p>
          </div>
          <ImageSlideshow className={"mt-12"} slides={healthSlides} />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">PLAY</h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>
              Small Christmas gifts for all through the sponsor a child for
              Christmas scheme.
            </p>
            <p>Toys and games gifted</p>
            <p>
              David built 2 swings (the first they’d seen) when he visited in
              2023
            </p>
            <p>
              Christmas treats and a goat for Christmas dinner – the only meat
              all year
            </p>
          </div>
          <ImageSlideshow className={"mt-12"} slides={playSlides} />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">OTHER</h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>
              Someone bought Fabian a bike. Now he has had driving lessons and
              passed his driving test
            </p>
            <p>A laptop and a mobile phone have been a godsend</p>
          </div>
          <Image
            className="h-96 w-auto mx-auto mt-12 rounded-2xl border border-logo_grey"
            src={bike}
            alt="Fabian's bike"
          />
          <h2 className="text-3xl mt-8 font-bold text-dark_green">
            THE FUTURE
          </h2>
          <div className="text-[18px] [&>*]:mt-2">
            <p>So, what next? Our main ambitions are:</p>
            <p>
              Building a water irrigation system with water pipes coming from
              the water butt to irrigate the greenhouse and field, continuing to
              grow the farm
            </p>
            <p>Compostable latrines</p>
            <p>
              A covered dining and cooking area – hopefully the big build in
              2025
            </p>
            <p>More bunk beds so all the kids have a bed</p>
            <p>
              A well to provide reliable, continuous, safe water for the
              compound
            </p>
            <p>Continuing to support the children’s education – more laptops</p>
            <p>A vehicle for Fabian</p>
            <p>To make a fish farm on the compound</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
