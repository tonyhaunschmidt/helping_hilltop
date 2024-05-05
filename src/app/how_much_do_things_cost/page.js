import Container from "@/components/Container";

export default function Page() {
  const items = [
    {
      item: "20kg Cornseeds",
      cost: "£80/6 months",
    },
    {
      item: "Bunkbed with Mattresses, Bedding and Mosquito Net",
      cost: "£100",
    },
    {
      item: "Notebooks for Primary School Children",
      cost: "£150/year",
    },
    {
      item: "School Exams",
      cost: "£40/year",
    },
    {
      item: "Paper/ Photocopying for Secondary School Children",
      cost: "£80/year",
    },
    {
      item: "Boarding School Fees",
      cost: "£40/month",
    },
    {
      item: "Kit Needed to Start Boarding School",
      cost: "£130",
    },
    {
      item: "Course of Treatment for Malaria",
      cost: "£50",
    },
    {
      item: "A Wheelbarrow",
      cost: "£40",
    },
    {
      item: "Watering Cans",
      cost: "£3.80 each",
    },
    {
      item: "Chicken Feeders",
      cost: "£3.50 each",
    },
    {
      item: "Wheat Flour",
      cost: "£1.45/kg",
    },
    {
      item: "Cooking Oil",
      cost: "£69/20liters/month",
    },
    {
      item: "Soap (need 25 bars/month)",
      cost: "£1.35/bar",
    },
    {
      item: "Sugar",
      cost: "£1.34/kg",
    },
    {
      item: "Transport of Shopping/ Deliveries from Homabay",
      cost: "£9 - £13.50/trip",
    },
    {
      item: "Bucket of Ariel Washing Powder",
      cost: "£15",
    },
    {
      item: "Fencing around the Compound",
      cost: "£913",
    },
    {
      item: "Getting Pit Latrines Emptied and Treated",
      cost: "£105",
    },
    {
      item: "Fishfarm",
      cost: "£550",
    },
  ];

  return (
    <main className="pb-12 pt-20">
      <Container>
        <div className="bg-white rounded-2xl sm:mx-0 -mx-3 px-4 sm:px-6 pt-8 pb-10">
          <h1 className="text-[30px] sm:text-[40px] font-black">
            HOW MUCH DO THINGS COST?
          </h1>
          <div className="mt-8 grid [@media(min-width:450px)]:grid-cols-2 lg:!grid-cols-4 gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col rounded-xl px-4 py-8 border border-logo_green"
              >
                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-dark_green text-2xl font-bold">
                    {item.item}
                  </p>
                </div>
                <p className="mt-4 font-semibold">{item.cost}</p>
              </div>
            ))}
          </div>
          <a
            href="/donate"
            className="mt-6 block rounded-xl w-fit bg-white border border-logo_green text-logo_grey px-6 py-2 hover:border-logo_green hover:bg-dark_green hover:text-white ease-in-out duration-300 transition-all"
          >
            <p className="text-[14px] font-semibold">
              SEE HOW TO MAKE A DONATION
            </p>
          </a>
        </div>
      </Container>
    </main>
  );
}
