import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function Navbar() {
  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about_us" },
    { name: "Donate", link: "/makes_a_donation" },
    {
      name: "Our Wish List",
      link: "https://www.amazon.co.uk/hz/wishlist/ls/KK6M9TP0QAHR?ref_=wl_share&fbclid=IwAR3i1_uIjaEZwrKgQD_mi0f50lEmkhxagioiLxDw7wPqJ693Oq-TF1O9UGk",
      target: "_blank",
    },
    {
      name: "Our Facebook",
      link: "https://www.facebook.com/profile.php?id=100092229692407",
      target: "_blank",
    },
    { name: "Contact Us", link: "/contact_us" },
  ];

  return (
    <nav className="fixed z-50 flex items-start space-x-20">
      <div className="bg-white rounded-br-3xl w-[200px] h-[140px] p-7 pb-6 flex flex-col items-center justify-center">
        <Image
          className="h-full w-auto"
          src={logo}
          alt="Helping Hilltop Logo"
        />
        <h1 className="text-center font-semibold text-logo_grey mt-1">
          HELPING HILLTOP
        </h1>
      </div>
      <div className="pt-10 text-white">
        <div className="flex items-center space-x-8">
          {navbarItems.map((item, index) => (
            <p key={index} className="">
              <a
                className="hover:text-dark_green hover:bg-white rounded-lg py-1 px-2 ease-in-out duration-300 transition-all"
                href={item.link}
                target={item.target}
              >
                {item.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
}
