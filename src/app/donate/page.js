import Container from "@/components/Container";

export default function Page() {
  return (
    <main className="pb-12 pt-20 min-h-[calc(100vh-266px)]">
      <Container>
        <div className="bg-white rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[30px] sm:text-[40px] font-black">DONATE</h1>
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              Welcome! There are many ways you can support the great things that
              are going on at Hilltop. You can donate money, as a one off, or as
              a regular donation, all of which will go to projects or ongoing
              costs at Hilltop. Buy small items from our Amazon wish list which
              we can take or post out to Kenya, or buy our clothing from Vinted
              to raise funds. No spare money? We are always looking for clothes,
              unwanted Christmas presents, bric-a-brac or anything we can use
              for tombola stalls, tabletop sales and raffles. See our “How much
              do things cost?” page for an idea of where the money goes. Thank
              you so much for your help.
            </p>
            <a
              href="/how_much_do_things_cost"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">
                HOW MUCH DO THINGS COST?
              </p>
            </a>
          </div>

          <div className="text-[18px] [&>*]:mt-8">
            <h2 className="text-3xl font-bold text-dark_green">PAYPAL</h2>
            <p className="!mt-2">
              Donate money through PayPal, with the option of using your credit
              card. You can specify which area you’d like your money to be used
              in if you wish.
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=BM8F853TACTBU"
              target="_blank"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">PAYPAL</p>
            </a>
          </div>

          <div className="text-[18px] [&>*]:mt-8">
            <h2 className="text-3xl font-bold text-dark_green">
              AMAZON WISHLIST
            </h2>
            <p className="!mt-2">
              Small items which can be bought straight from Amazon and sent to
              Vivienne who will forward them to Hilltop. These things aren’t
              available in Homabay.
            </p>
            <a
              href="https://www.amazon.co.uk/hz/wishlist/ls/KK6M9TP0QAHR?ref_=wl_share&fbclid=IwAR3i1_uIjaEZwrKgQD_mi0f50lEmkhxagioiLxDw7wPqJ693Oq-TF1O9UGk"
              target="_blank"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">SEE OUR WISHLIST</p>
            </a>
          </div>
          <div className="text-[18px] [&>*]:mt-8">
            <h2 className="text-3xl font-bold text-dark_green">VINTED</h2>
            <p className="!mt-2">
              We sell good quality second hand clothing on Vinted. Donate your
              unwanted clothing for us to sell, or check out what we have on
              offer. You might find a bargain!
            </p>
            <a
              href="https://www.vinted.co.uk/member/61368076-viv136"
              target="_blank"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">SEE OUR VINTED</p>
            </a>
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
              if you have clothing or any other items to donate, or if you are
              interested in regular giving or sponsorship.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
