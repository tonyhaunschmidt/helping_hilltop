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
              If you want to get involved with the amazing things we are doing,
              we&apos;d love to hear from you!
            </p>
            <p>
              Whether your a business, news outlet, or just someone who wants to
              get involved.
            </p>
            <p>
              Please email Vivienne at{" "}
              <a
                className="hover:text-light_green text-logo_green ease-in-out duration-300 transition-all"
                href="mailto:helpinghilltop23@gmail.com"
              >
                helpinghilltop23@gmail.com
              </a>{" "}
              or give us a ring on{" "}
              <a
                className="hover:text-light_green text-logo_green ease-in-out duration-300 transition-all"
                href="tel:+07455374201"
              >
                07455 374201
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
