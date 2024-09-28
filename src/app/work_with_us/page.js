import Container from "@/components/Container";

export default function Page() {
  return (
    <main className="pb-12 pt-20 min-h-[calc(100vh-266px)]">
      <Container>
        <div className="bg-white rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[30px] sm:text-[40px] font-black">
            WORK WITH US
          </h1>

          <div className="text-[18px] [&>*]:mt-8">
            <p>
              Want to get involved? There are so many things you can do to help.
              Every little helps and is much appreciated.
            </p>
          </div>
          <div className="text-[18px] [&>*]:mt-8">
            <h2 className="text-3xl font-bold text-dark_green">
              Individuals/Groups
            </h2>
            <p className="!mt-2">
              Spread the word! Share our Facebook page and website. Tell people
              about the work we are doing. The more people onboard the better.
            </p>
            <p>
              Donate money or unwanted things we can sell. It all adds up and is
              put to good use.
            </p>
            <p>
              Run a fundraising event yourselves or turn up at ours- buy a
              tombola ticket or throw some coins in the bucket.
            </p>
            <p>
              Doing a sponsored event? Why not have Helping Hilltop as the
              beneficiary through a Just Giving Page.
            </p>
            <p>
              Come and man a stall, bake some cakes, sell raffle tickets. We
              always need more hands.
            </p>
          </div>
          <div className="text-[18px] [&>*]:mt-8">
            <h2 className="text-3xl font-bold text-dark_green">Businesses</h2>
            <p className="!mt-2">
              There are many ways you can help. Would you like to donate goods
              or money to our building projects? Give towards our on-site clean
              water drive? Donate toys/games/books/ IT to help the children’s
              education? Sponsor children through school fees? Anything you can
              give is much appreciated.
            </p>
            <p>
              We will use your name and Logo on our advertising and publicity.
            </p>
          </div>
          <div className="text-[18px] [&>*]:mt-8">
            <p className="font-bold">
              Please contact Vivienne at{" "}
              <a
                className="hover:text-light_green text-logo_green ease-in-out duration-300 transition-all"
                href="mailto:helpinghilltop23@gmail.com"
              >
                helpinghilltop23@gmail.com
              </a>{" "}
              or{" "}
              <a
                className="hover:text-light_green whitespace-nowrap text-logo_green ease-in-out duration-300 transition-all"
                href="tel:+07455374201"
              >
                07455 374201
              </a>{" "}
              if you want to get involved or have any questions.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
