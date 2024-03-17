import Container from "@/components/Container";
import Image from "next/image";
import welcomeImage from "../../../public/img/welcome_img.jpg";

export default function Page() {
  return (
    <main className="pb-12 pt-24">
      <Container>
        <div className="bg-white rounded-2xl px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[40px] font-black">ABOUT US</h1>
          <p className="mt-2">
            here is a breif description about the company and what is to follow
            on this page ******
          </p>
          <h2 className="text-[25px] font-semibold mt-8">
            VIVIENNE&apos;S STORY
          </h2>
          <div className="mt-2 h-2 w-[100px] bg-logo_green rounded-full"></div>
          <Image
            className="2xl:w-[500px] aspect-square rounded-2xl shadow-md shadow-gray-500 border border-logo_grey w-full sm:w-[240px] lg:w-[350px] xl:w-[420px] ml-14 mb-10 object-cover float-right"
            src={welcomeImage}
            alt="Main text Image"
          />
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              In 2000 I saw a post on a friend’s Facebook page asking for help
              raising funds for school uniforms for an orphanage in Kenya.
              Intrigued, I asked him how he had found an orphanage to help as he
              was in Edinburgh. He had connected with the orphanage via a friend
              who was volunteering in Uganda. He subsequently put me in touch,
              via Messenger, with another orphanage run by Fabian. I spent the
              next 3 months asking Fabian questions about the orphanage, his
              family, the community and how it all began. He never asked for
              anything during that time and was just grateful for prayers and
              knowing I cared.
            </p>
            <p>
              I then asked the deal-breaker question; “If I could do anything
              for you what would it be?” I waited for his response. “Sanitary
              products for the girls so they no longer miss school.” From then I
              knew I would help them in any way I could.
            </p>
            <p>
              Since then, we have raised money and collected items for them by
              doing tombolas at local markets, bake sales, raffles, collection
              tins, car boot sales, Vinted sales, dress-down days at school,
              sponsored walk and fire walk and auction of donated items. We have
              also had some support from local businesses and pubs, as well as
              receiving many individual donations. In December, Helping Hilltop
              was registered as an official charity and the work goes on.
            </p>
            <p>
              I April 2023 I was able to visit Hilltop, along with my son David,
              and see for myself the many trials they still face. Grateful for a
              hug or a prayer, I have never seen such happy people in the face
              of such huge adversity. I found there the lived values of love,
              support, education and making life better. I came back changed and
              knew that this was where I wanted to continue to give my help.
            </p>
            <p>
              The farm is vital to the set up. It is the main source of food for
              the children providing one meal a day of rice and beans and
              sometimes kale. Food is also exchanged for items they cannot grow
              and is exchanged for school fees. It also provides food for the
              wider community; the widows of Hilltop whose help with the
              children’s care is vital. The farm is gradually being developed
              with a permaculture ethos where everything is used and reused to
              ensure the best organic growth. It is farmed by Fabian, Big David,
              who was an original orphan and now works for Fabian for his keep,
              the local widows and the children when they are not at school.
              This is where the self-sufficiency will ultimately come from.
            </p>
            <p>
              There are approximately 3.6 million orphans under the age of 18 in
              Kenya. Accessing nutrition, clean water, healthcare, shelter and
              safety is hampered by extreme poverty in the country. Helping
              Hilltop is about helping to improve the lives of 81 orphans cared
              for by Fabian, his wife and a small community who are family. All
              the children are there through no fault of their own. The majority
              were orphaned through the Aids pandemic.
            </p>
            <p>With our support they can achieve anything they want.</p>
          </div>
          <h2 className="text-[25px] font-semibold mt-8">
            FABIAN&apos;S STORY
          </h2>
          <div className="mt-2 h-2 w-[100px] bg-logo_green rounded-full"></div>
          <Image
            className="2xl:w-[500px] hidden lg:block aspect-square rounded-2xl shadow-md shadow-gray-500 border border-logo_grey w-[350px] xl:w-[420px] ml-14 mb-10 object-cover float-right"
            src={welcomeImage}
            alt="Main text Image"
          />
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              My grandmother started all this. Her name was Anastacia Ojwando
              but she was known to the community as “Chuny Mogwedhi.” My sister
              and I lived with her after our parents died when I was about 4.
              During the times when HIV/AIDS was rife, many people in the
              village died and a number of children were left without parents.
              My grandmother began helping the vulnerable children in the
              community. I witnessed this as I would go with her to her sweet
              potato farm and help her carry the sacks of potatoes. She would
              cook these for the children and also sell some to help us get some
              personal items.
            </p>
            <p>
              My grandmother died when I was 7. I grew up in a very poor local
              family. Some of the older children left for early marriages and
              some got lost in the streets. I decided to try and gather some of
              the younger children and engage them in farming our ancestral
              land. This enabled some of us to pay for school tuition in the
              local public school but not all attended.
            </p>
            <p>
              I attribute my full desire to help the orphans to my own
              experience growing up as one and to my grandmother. This made me
              drop out of school and stop furthering my education as an
              elementary teacher. Instead of pursuing a path of personal
              financial security, I began a sustainable agriculture at the age
              of 14 to help the destitute children from the slums of Rodi and
              the entire village. At that time, we had post-election violence in
              Kenya and many children were affected. Some were involved in
              rag-picking, and some in anti-social activities. Some girls were
              raped in the streets or beaten due to crime. I begun taking
              orphans off the streets in my village into my own home and doing
              agriculture together.
            </p>
            <p>
              I recruited some local widows to help as more children were
              brought to me. The widows could carry some potatoes and grains
              which my grandmother had introduced as indigenous crops. Some of
              these widows are affected by HIV/AIDS and suffer so much at times,
              so I offered to always take them to church and offer them
              spiritual nourishment. I have a very strong Christian faith.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
