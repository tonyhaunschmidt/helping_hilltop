import Image from "next/image";
import maintextImage from "../../public/img/maintext_image.jpg";
import Container from "./Container";

export default function WelcomeSection() {
  return (
    <section className="pt-20 pb-12 min-h-[750px]">
      <Container>
        <Image
          className="2xl:w-[500px] rounded-xl 2xl:h-[600px] w-[400px] h-[500px] mr-10 mb-5 object-cover float-left"
          src={maintextImage}
          alt="Main text Image"
        />
        {/* title */}
        <h1 className="text-logo_green font-bold text-[60px]">
          HELPING HILLTOP!
        </h1>
        <p className="text-light_green">A MESSAGE FROM OUT FOUNDER</p>
        <div className="text-[18px] prose mt-8">
          {/* configure a prose */}
          <p>
            In 2021 I saw a post on a friends facebook page asking for help in
            raising funds for school uniforms for an orphanage in Kenya. I was
            intrigued and messaged him to ask how he found an orphanage to help
            (laughing) as he was in Edinburgh.
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
            I then asked the deal breaker question “if i can do anything for you
            what would it be”. I waited for his response.
          </p>
          <p>“sanitary products for the girls so they no longer miss school”</p>
          <p>
            That was the statement that made me decide i would help in whatever
            way i could.
          </p>
          <p>
            After my visit in 2023, i came back changed and knew this was where
            my help was going to be given.
          </p>
          <p>
            Gratefull for a hug or a prayer, i have never seen such happy people
            in the phase of huge adversity.
          </p>
          <p className="text-logo_green">Vivienne Hannah</p>
        </div>
      </Container>
    </section>
  );
}
