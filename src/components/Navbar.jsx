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

  return (
    <nav
      className={`${
        navStatus === "static"
          ? "absolute top-0"
          : navStatus === "sticky"
          ? "sticky-nav fixed -top-3 ease-in-out duration-500 transition-all"
          : navStatus === "off_screen" && "fixed -top-20"
      } pt-4 z-50 w-full justify-center space-x-20`}
    >
      <Container>
        <div
          className={`${
            pathname === "/"
              ? "[.sticky-nav_&]:bg-dark_green [.sticky-nav_&]:border-white [.sticky-nav_&]:border"
              : "bg-dark_green border-white border"
          } p-2 hidden lg:flex items-center justify-center space-x-4 w-full rounded-xl text-white`}
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
    </nav>
  );
}
