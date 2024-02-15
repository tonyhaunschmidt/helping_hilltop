import Image from "next/image";
import maintextImage from "../../public/img/maintext_image.jpg";
import Container from "./Container";

export default function WelcomeSection() {
  return (
    <section className="pt-6 pb-32 min-h-[750px] relative">
      <div className="absolute inset-0 z-[-2] pt-32 pb-20">
        <div className="h-full mx-auto container pl-44 pr-12">
          <div className="w-full h-full rounded-xl shadow-lg bg-white shadow-gray-500 border-logo_green border-2"></div>
        </div>
      </div>
      <Container>
        <Image
          className="2xl:w-[500px] rounded-2xl shadow-md shadow-gray-500 border-2 border-logo_green 2xl:h-[600px] w-[400px] h-[500px] mr-14 mb-10 object-cover float-left"
          src={maintextImage}
          alt="Main text Image"
        />
        {/* title */}
        {/* <div className="rounded-2xl relative right-5 border-2 bg-white px-10 pt-4 pb-6 inline-block border-logo_green shadow-md shadow-gray-500">
          <h1 className="text-logo_green font-bold text-[55px]">
            - HELPING HILLTOP! -
          </h1>
          <div className="bg-logo_green mx-auto rounded-sm w-full h-2"></div>
        </div> */}
        <div className="pl-40 pt-28 pr-4 mt-8">
          <p className="text-logo_green font-bold pr-4 text-center underline text-[20px]">
            - A MESSAGE FROM VIVIENNE -
          </p>
          <div className="text-[18px] [&>*]:mt-8">
            {/* configure a prose */}
            <p>
              In 2021 I saw a post on a friends facebook page asking for help in
              raising funds for school uniforms for an orphanage in Kenya. I was
              intrigued and messaged him to ask how he found an orphanage to
              help (laughing) as he was in Edinburgh.
            </p>
            <p>
              He told me he had connected with him via a friend who was
              volunteering in Uganda. He then connected me with Fabian on
              messenger.
            </p>
            <p>
              I spent the next 3 months asking questions to Fabian about the
              orphanage and the community, his family and how it all began.
            </p>
            <p>
              I was never asked for anything from him in that time, he was
              grateful for prayers and knowing i cared.
            </p>
            <p>
              I then asked the deal breaker question “if i can do anything for
              you what would it be”. I waited for his response.
            </p>
            <p>
              “sanitary products for the girls so they no longer miss school”
            </p>
            <p>
              That was the statement that made me decide i would help in
              whatever way i could.
            </p>
            <p>
              After my visit in 2023, i came back changed and knew this was
              where my help was going to be given.
            </p>
            <p>
              Gratefull for a hug or a prayer, i have never seen such happy
              people in the phase of huge adversity.
            </p>
          </div>
          <p className="text-logo_green mt-8 font-bold text-[20px]">
            Vivienne Hannah
          </p>
          <a className="w-fit rounded-full block" href="/">
            <div className="mt-10 rounded-full shadow-sm shadow-gray-500 w-fit bg-white border-2 border-logo_green text-logo_green px-6 py-2 hover:bg-logo_green hover:text-white ease-in-out duration-300 transition-all">
              <p className="text-[14px] font-semibold">FIND OUT MORE</p>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
