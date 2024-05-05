import Container from "./Container";
import QuicklinkCard from "./QuicklinksCard";
//Images
import wishlistImage from "../../public/img/wishlist_ql.jpg";
import donationImage from "../../public/img/donation_ql.jpg";
import facebookImage from "../../public/img/facebook_ql.jpg";
import workImage from "../../public/img/work_ql.jpg";

export default function QuicklinkLayout() {
  const quicklinks = [
    {
      titleFirst: "MAKE A",
      titleSecond: "DONATION",
      subtext: "Find out how to donate and see how we spend the proceeds",
      image: { img: donationImage, alt: "Donation Quicklink Image" },
      link: "/donate",
    },
    {
      titleFirst: "VIEW OUR",
      titleSecond: "WISHLIST",
      subtext:
        "See our Amazon wishlist and order items that we'll bring to Hilltop",
      image: { img: wishlistImage, alt: "Wishlist Quicklink Image" },
      link: "https://www.amazon.co.uk/hz/wishlist/ls/KK6M9TP0QAHR?ref_=wl_share&fbclid=IwAR3i1_uIjaEZwrKgQD_mi0f50lEmkhxagioiLxDw7wPqJ693Oq-TF1O9UGk",
      target: "_blank",
    },
    {
      titleFirst: "FOLLOW US ON",
      titleSecond: "FACEBOOK",
      subtext: "Keep up to date with all of our news and fundraising events",
      image: { img: facebookImage, alt: "Facebook Quicklink Image" },
      link: "https://www.facebook.com/profile.php?id=100092229692407",
      target: "_blank",
    },
    {
      titleFirst: "WORK",
      titleSecond: "WITH US",
      subtext: "Find out about the many ways to work with our orginisation",
      image: { img: workImage, alt: "Work with us Quicklink Image" },
      link: "/work_with_us",
    },
  ];

  return (
    <Container>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-2">
        <div className="">
          <QuicklinkCard card={quicklinks[0]} />
        </div>
        <div className="">
          <QuicklinkCard card={quicklinks[1]} />
        </div>
        <div className="">
          <QuicklinkCard card={quicklinks[2]} />
        </div>
        <div className="">
          <QuicklinkCard card={quicklinks[3]} />
        </div>
      </div>
    </Container>
  );
}
