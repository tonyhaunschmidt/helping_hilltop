import Image from "next/image";

export default function QuicklinkCard({ card }) {
  return (
    <a href={card.link} target={card.target}>
      <div className="group h-full rounded-xl relative border-2 border-logo_green overflow-hidden hover:shadow-md hover:shadow-gray-500 shadow-lg shadow-gray-500 ease-in-out duration-300 transition-all">
        <Image
          className="absolute w-full h-full object-cover group-hover:scale-105 ease-in-out duration-300 transition-all"
          src={card.image.img}
          alt={card.image.alt}
        />
        <div className="absolute bottom-0 opacity-0 sm:opacity-100 group-hover:opacity-0 ease-in-out duration-300 transition-all w-full h-[230px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 group-hover:opacity-100 sm:opacity-0 ease-in-out duration-300 transition-all bg-dark_green bg-opacity-80 brightness-90"></div>
        <div className="pt-12 px-8 pb-8 text-white text-center relative z-10 sm:top-[calc(100%-150px)] group-hover:top-0 ease-in-out duration-300 transition-all">
          <h1 className="leading-none font-bold">
            <span className="text-[24px]">{card.titleFirst}</span>
            <br />
            <span className="text-[38px]">{card.titleSecond}</span>
          </h1>
          <p className="mt-8 text-[18px] sm:opacity-0 ease-in-out duration-300 transition-all group-hover:delay-300 group-hover:opacity-100">
            {card.subtext}
          </p>
          <div className="sm:opacity-0 ease-in-out duration-300 transition-all group-hover:delay-300 group-hover:opacity-100">
            <div className="mt-12 rounded-full w-fit mx-auto bg-white border-2 border-logo_green text-logo_green px-6 py-2 hover:bg-logo_green hover:text-white hover:border-white ease-in-out duration-300 transition-all">
              <p className="text-[14px] font-semibold">FIND OUT MORE</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
