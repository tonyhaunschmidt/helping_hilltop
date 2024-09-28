import Image from "next/image";
import welcomeImage from "../../public/img/welcome_img.jpg";
import Container from "./Container";

export default function WelcomeSection() {
  return (
    <section id="welcome-text" className="pt-8 lg:pt-16 pb-16 relative">
      <Container>
        <div className="bg-white text-center sm:text-left rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <Image
            className="2xl:w-[522px] hidden lg:block aspect-square rounded-2xl shadow-md shadow-gray-500 border border-logo_grey w-[350px] xl:w-[420px] mr-14 mb-10 object-cover float-left"
            src={welcomeImage}
            alt="Main text Image"
          />
          <div className="lg:pt-5">
            <h1 className="leading-tight sm:text-left text-center">
              <span>WELCOME TO</span>
              <br />
              <span className="text-[40px] text-dark_green sm:text-[50px] xl:text-[60px] font-black">
                HELPING HILLTOP
              </span>
            </h1>
            <div className="w-[150px] sm:w-[200px] mt-2 lg:mt-0 mx-auto sm:mx-0 lg:inline-block bg-logo_green h-2 rounded-full"></div>
            <div className="text-[18px] [&>*]:mt-8">
              {/* configure a prose */}
              <p>
                Helping Hilltop is a small charity started in December 2023
                following 3 years of private fundraising and donations by
                Vivienne Hannah along with family and friends, to help support
                Hilltop Christian Centre, which is home to 81 orphans, aged 5-18
                in Godako, Homabay County in Kenya. It is run by Fabian Olouch
                and his wife Vivien with the support of the local community.
                Fabian has a small farm which is being developed to feed the
                children and produce excess for sale for other needs. The aim is
                self-sufficiency.
              </p>
              <p>
                In 2021 the buildings that the children slept in were subject to
                an arson attack and became uninhabitable. The children were all
                taken in by Fabian and many local widows. Fabian does really
                well in supporting the children and the widows. They get
                together at weekends and remain a big family. The charity has
                been working hard to repair the building and adhere to local
                regulations – the building was repaired, bunk beds were bought,
                and a perimeter fence put up. We thought we were vey nearly
                ready to welcome the children back but received very difficult
                news from Government officials whilst visiting Hilltop in June
                2024. Due to a new law, they would no longer allow the children
                to return to Hilltop as the site is too small. They insist on a
                newbuild on a bigger piece of land, a huge mountain for us to
                climb. This is still our long- term aim. The priority meantime
                is to develop the farm to help support the children and the
                widows while also fundraising for the new orphanage.
              </p>
              <p>
                Much has been done already to help the children with food,
                water, clothing, education and health but there is still a long
                way to go.
              </p>
              <p>
                Our strength lies not only in the words we stand by, but more
                importantly in action. From the moment we started our work with
                Fabian in 2020, we understood that by working together we could
                help overcome their challenges much more efficiently and that is
                why we ultimately decided to launch Helping Hilltop. We strive
                to make a positive change in all our pursuits.
              </p>
              <a
                href="/about_us"
                className="mt-12 block rounded-xl w-fit mx-auto bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
              >
                <p className="text-[14px] font-semibold">FIND OUT MORE</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className=" text-center">
            <span className="text-[30px] font-theme_cursiv">
              “Try to be a Rainbow in Someone’s Cloud”
            </span>
            <br />
            Maya Angelou
          </p>
        </div>
      </Container>
    </section>
  );
}
