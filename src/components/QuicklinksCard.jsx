import Image from "next/image";

export default function QuicklinkCard({ card }) {
  return (
    <a href={card.link} target={card.target}>
      <div className="group h-full rounded-xl relative border border-logo_grey overflow-hidden hover:shadow-sm hover:shadow-gray-500 shadow-md shadow-gray-500 ease-in-out duration-300 transition-all">
        <Image
          className="absolute w-full h-full object-cover group-hover:scale-105 ease-in-out duration-300 transition-all"
          src={card.image.img}
          alt={card.image.alt}
        />
        <div className="absolute bottom-0 opacity-0 sm:opacity-100 group-hover:opacity-0 ease-in-out duration-300 transition-all w-full h-[300px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"></div>
        <div className="absolute inset-0 group-hover:opacity-100 sm:opacity-0 ease-in-out duration-300 transition-all bg-dark_green bg-opacity-80 brightness-90"></div>
        <div className="pt-8 px-8 pb-8 flex h-full flex-col items-center text-white text-center relative z-10 sm:top-[calc(100%-125px)] group-hover:top-0 ease-in-out duration-300 transition-all">
          <h1 className="leading-none">
            <span className="text-[20px]">{card.titleFirst}</span>
            <br />
            <span className="text-[30px] font-bold">{card.titleSecond}</span>
          </h1>
          <div className="flex-grow">
            <p className="mt-6 text-[18px] sm:opacity-0 ease-in-out duration-300 transition-all group-hover:delay-300 group-hover:opacity-100">
              {card.subtext}
            </p>
          </div>
          <div className="sm:opacity-0 mt-6 ease-in-out duration-300 transition-all group-hover:delay-300 group-hover:opacity-100">
            <div className="rounded-xl w-fit mx-auto bg-white border border-white text-logo_grey px-6 py-2 hover:bg-dark_green hover:text-white hover:border-white ease-in-out duration-300 transition-all">
              <p className="text-[14px] font-semibold">FIND OUT MORE</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
