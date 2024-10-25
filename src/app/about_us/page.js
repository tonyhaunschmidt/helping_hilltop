import Container from "@/components/Container";
import Image from "next/image";
import fabianImage from "../../../public/img/fabian.jpg";
import vivienneImage from "../../../public/img/vivienne.jpg";

export default function Page() {
  return (
    <main className="pb-12 pt-20">
      <Container>
        <div className="bg-white rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[30px] sm:text-[40px] font-black">ABOUT US</h1>
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              Helping Hilltop is a small charity started in December 2023
              following 3 years of private fundraising and donations by Vivienne
              Hannah along with family and friends, to help support Hilltop
              Christian Orphanage, home to 81 orphans, aged 5-18 in Godako,
              Homabay County in Kenya. It is run by Fabian Olouch and his wife
              Vivien with the support of the local community. Much has been done
              already to help the children with food, water, clothing, education
              and health but there is still a long way to go. Life is still very
              basic with the children sleeping on the floor in two huts and only
              having one meal a day. Fabian has a small farm which is being
              developed to feed the children and produce excess for sale for
              other needs. The aim is self-sufficiency.
            </p>
            <p>
              Our strength lies not only in the words we stand by, but more
              importantly in action. From the moment we started our work with
              Fabian in 2021, we understood that by working together we could
              help overcome their challenges much more efficiently and that is
              why we ultimately decided to launch Helping Hilltop. We strive to
              make a positive change in all our pursuits.
            </p>
            <p>
              Click here to see more about what we have achieved so far and what
              our plans are for the future!
            </p>
            <a
              href="/our_achievements"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">SEE OUR ACHIEVEMENTS</p>
            </a>
          </div>
          <h2 className="text-3xl mt-8 font-bold text-dark_green">
            FABIAN&apos;S STORY
          </h2>
          <Image
            className="2xl:w-[500px] sm:aspect-square rounded-2xl shadow-md shadow-gray-500 border border-logo_grey sm:h-auto h-[450px] w-full sm:w-[270px] md:w-[300px] lg:w-[350px] xl:w-[420px] sm:ml-14 sm:mt-0 mb-8 mt-4 sm:mb-10 object-cover sm:float-right"
            src={fabianImage}
            alt="Fabian's Story"
          />
          <div className="text-[18px] [&>*]:mt-8">
            <p className="!mt-2">
              My grandmother started all this. Her name was Anastacia Ojwando
              but she was known to the community as “Chuny Mogwedhi.” My sister
              and I lived with her after our parents died when I was about 4.
              During the times when HIV/AIDS was rife, many people in the
              village died and a number of children were left without parents.
              My grandmother began helping the vulnerable children in the
              community. I witnessed this as I would go with her to her sweet
              potato farm and help her carry the sacks of potatoes. She would
              cook these for the children and also sell some to help us get some
              personal items. She provided shelter for the children in some
              basic buildings on a piece of land belonging to the family-
              Hilltop.
            </p>
            <p>
              My grandmother died in my early teenage. Some of the older
              children left for early marriages and some got lost in the
              streets. At age 14 I decided to try and gather some of the younger
              children and engage them in farming our ancestral land. This
              enabled some of us to pay for school tuition in the local public
              school but not all attended.
            </p>
            <p>
              I attribute my full desire to help the orphans to my own
              experience growing up as one myself and to my grandmother. This
              made me drop out of school and stop furthering my education as an
              elementary teacher. Instead of pursuing a path of personal
              financial security, I began a sustainable agriculture at the age
              of 14 to help the destitute children from the slums of Rodi and
              the entire village. At that time, we had post-election violence in
              Kenya and many children were affected. Some were involved in
              rag-picking, and some in anti-social activities. Some girls were
              raped in the streets or beaten due to crime. I began taking
              orphans off the streets in my village into my own home and doing
              agriculture together.
            </p>
            <p>
              I recruited some local widows to help as more children were
              brought to me. The widows could help grow and carry some potatoes
              and grains which my grandmother had introduced as indigenous
              crops. Some of these widows are affected by HIV/AIDS and suffer so
              much at times, so I offered to always take them to church and
              offer them spiritual nourishment. I have a very strong Christian
              faith.
            </p>
          </div>
          <h2 className="text-3xl mt-8 font-bold text-dark_green">
            VIVIENNE&apos;S STORY
          </h2>
          <Image
            className="2xl:w-[500px] sm:aspect-square rounded-2xl shadow-md shadow-gray-500 border border-logo_grey sm:h-auto h-[450px] w-full sm:w-[270px] md:w-[300px] lg:w-[350px] xl:w-[420px] sm:ml-14 sm:mt-0 mb-8 mt-4 sm:mb-10 object-cover sm:float-right"
            src={vivienneImage}
            alt="Vivienne's Story"
          />
          <div className="text-[18px] [&>*]:mt-8">
            <p className="!mt-2">
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
              knew I would help them in any way I could. Since then, we have
              raised money and collected items for them by doing tombolas at
              local markets, bake sales, raffles, collection tins, car boot
              sales, Vinted sales, dress-down days at school, sponsored walk and
              fire walk and auction of donated items. We have also had some
              support from local businesses and pubs, as well as receiving many
              individual donations. In December, Helping Hilltop was registered
              as an official charity and the work goes on.
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
              were orphaned through the Aids pandemic but many also through
              tribal conflicts and violence.
            </p>
            <p>With our support they can achieve anything they want.</p>
          </div>
          {/* <h2 className="text-[25px] font-semibold mt-8">OUR HISTORY</h2>
          <div className="mt-2 h-2 w-[100px] bg-logo_green rounded-full"></div>
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              Our history with Hilltop goes all the way back to the year 2000.
              Click on the button below to see what we have achieved since then!
            </p>
          </div>
          <a
            href="/about_us"
            className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
          >
            <p className="text-[14px] font-semibold">SEE OUR TIMELINE</p>
          </a>*/}
        </div>
      </Container>
    </main>
  );
}
