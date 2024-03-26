"use client";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

export default function Page() {
  const [doPaypal, setDoPaypal] = useState(false);
  useEffect(() => {
    setDoPaypal(true);
  }, []);

  return (
    <main className="pb-12 pt-20 min-h-[calc(100vh-266px)]">
      <Container>
        <div className="bg-white rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[30px] sm:text-[40px] font-black">DONATE</h1>
          <div className="text-[18px] [&>*]:mt-8">
            <p>intro and what the money goes towards</p>
          </div>
          <h2 className="text-[25px] font-semibold mt-8">PAYPAL</h2>
          <div className="mt-2 h-1.5 w-[100px] bg-logo_green rounded-full"></div>
          <div className="text-[18px] [&>*]:mt-8">
            <p>information about paypal...</p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=G5XRATWN5SVMY"
              target="_blank"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">PAYPAL</p>
            </a>
          </div>
          <h2 className="text-[25px] font-semibold mt-8">AMAZON WISHLIST</h2>
          <div className="mt-2 h-1.5 w-[100px] bg-logo_green rounded-full"></div>
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              See our wishlist on Amazon. Items purchased will be sent to
              Vivienne who will take them with her to Hilltop when she visits or
              post them out.
            </p>
            <a
              href="https://www.amazon.co.uk/hz/wishlist/ls/KK6M9TP0QAHR?ref_=wl_share&fbclid=IwAR3i1_uIjaEZwrKgQD_mi0f50lEmkhxagioiLxDw7wPqJ693Oq-TF1O9UGk"
              target="_blank"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">SEE OUR AMAZON</p>
            </a>
          </div>
          <h2 className="text-[25px] font-semibold mt-8">VINTED</h2>
          <div className="mt-2 h-1.5 w-[100px] bg-logo_green rounded-full"></div>
          <div className="text-[18px] [&>*]:mt-8">
            <p>
              Donate clothes which we can sell on Vinted or buy our advertised
              clothes.
            </p>
            <p>
              If you have any clothes you would like to donate, please contact
              Vivienne at{" "}
              <a
                className="hover:text-light_green text-logo_green ease-in-out duration-300 transition-all"
                href="mailto:helpinghilltop23@gmail.com"
              >
                helpinghilltop23@gmail.com
              </a>{" "}
              or{" "}
              <a
                className="hover:text-light_green text-logo_green ease-in-out duration-300 transition-all"
                href="tel:+07455374201"
              >
                07455 374201
              </a>
            </p>
            <a
              href="https://www.vinted.co.uk/member/61368076-viv136"
              target="_blank"
              className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
            >
              <p className="text-[14px] font-semibold">SEE OUR VINTED</p>
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
