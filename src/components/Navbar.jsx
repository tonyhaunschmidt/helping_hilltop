"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";

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
  ];

  const pathname = usePathname();

  const [navStatus, setNavStatus] = useState("static");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (offset <= 4) {
      setNavStatus("static");
    }
    if (offset < 100 && offset > 4 && navStatus !== "sticky") {
      setNavStatus("static");
    }
    if (offset > 100 && navStatus !== "sticky") {
      setNavStatus("off_screen");
    }

    if (offset > 200) {
      setNavStatus("sticky");
    }
  }, [offset, navStatus]);

  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <nav className={`${pathname === "/" ? "homepage" : "subpage"}`}>
      <div className="lg:hidden">
        <div
          onClick={() => setBurgerMenu(true)}
          className="absolute right-5 top-5 h-10 w-12 rounded-lg hover:bg-light_green hover:cursor-pointer bg-dark_green p-1.5 border-2 [.homepage_&]:border-white [.subpage_&]:border-logo_green justify-between items-stretch flex flex-col ease-in-out duration-300 transition-all"
        >
          <div className="rounded-md bg-white h-[5px]"></div>
          <div className="rounded-md bg-white h-[5px]"></div>
          <div className="rounded-md bg-white h-[5px]"></div>
        </div>
        <div
          className={`${
            burgerMenu ? "w-screen h-screen" : "w-0 h-0"
          } fixed right-0 top-0 z-[999]`}
        >
          <div
            className={`${
              burgerMenu ? "opacity-100" : "opacity-0"
            }  bg-dark_green text-white w-full pt-12 h-full ease-in-out duration-300 transition-all`}
          >
            <Container>
              <span
                onClick={() => setBurgerMenu(false)}
                className="material-symbols-outlined ml-2 hover:cursor-pointer p-1 bg-transparent hover:bg-white rounded-xl hover:text-dark_green ease-in-out duration-300 transition-all text-right font-bold w-fit text-[22px]"
              >
                close
              </span>
              <div className="mt-8 space-y-3">
                {navbarItems.map((item, index) => (
                  <p key={index} className="">
                    <a
                      className="hover:text-dark_green hover:bg-white rounded-lg py-1 px-4 ease-in-out duration-300 transition-all"
                      href={item.link}
                      target={item.target}
                    >
                      {item.name}
                    </a>
                  </p>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div
        className={`${
          navStatus === "static"
            ? "absolute top-0"
            : navStatus === "sticky"
            ? "sticky-nav fixed -top-3 ease-in-out duration-500 transition-all"
            : navStatus === "off_screen" && "fixed -top-20"
        } pt-4 z-50 hidden lg:block w-full justify-center space-x-20`}
      >
        <Container>
          <div
            className={`${
              pathname === "/"
                ? "[.sticky-nav_&]:bg-dark_green w-fit mx-auto [.sticky-nav_&]:border-white [.sticky-nav_&]:border"
                : "bg-dark_green border-white border w-full"
            } p-2 flex items-center justify-center px-10 space-x-4 rounded-xl text-white`}
          >
            {navbarItems.map((item, index) => (
              <p key={index} className="">
                <a
                  className="hover:text-dark_green hover:bg-white rounded-lg py-1 px-4 ease-in-out duration-300 transition-all"
                  href={item.link}
                  target={item.target}
                >
                  {item.name}
                </a>
              </p>
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
}
