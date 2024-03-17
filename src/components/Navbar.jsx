export default function Navbar() {
  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about_us" },
    { name: "Donate", link: "/donate" },
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
    {
      name: "Work With Us",
      link: "/work_with_us",
    },
    { name: "Contacts", link: "/contacts" },
  ];

  return (
    <nav className="fixed z-50 flex items-center w-full justify-center space-x-20">
      <div className="pt-8 text-white">
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
