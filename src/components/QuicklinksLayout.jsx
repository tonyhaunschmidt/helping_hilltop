import Container from "./Container";
import QuicklinkCard from "./QuicklinksCard";
//Images
import wishlistImage from "../../public/img/wishlist_ql.jpg";
import donationImage from "../../public/img/donation_ql.jpg";
import facebookImage from "../../public/img/facebook_ql.jpg";

export default function QuicklinkLayout() {
  const quicklinks = [
    {
      titleFirst: "View our",
      titleSecond: "WISHLIST",
      subtext:
        "See our Amazon wishlist and order items that we'll bring to Hilltop",
      image: { img: wishlistImage, alt: "Wishlist Quicklink Image" },
      link: "https://www.amazon.co.uk/hz/wishlist/ls/KK6M9TP0QAHR?ref_=wl_share&fbclid=IwAR3i1_uIjaEZwrKgQD_mi0f50lEmkhxagioiLxDw7wPqJ693Oq-TF1O9UGk",
      target: "_blank",
    },
    {
      titleFirst: "Make a",
      titleSecond: "DONATION",
      subtext: "Find out how to donate and see how we spend the proceeds",
      image: { img: donationImage, alt: "Donation Quicklink Image" },
      link: "/make_a_donation",
    },
    {
      titleFirst: "Follow us on",
      titleSecond: "FACEBOOK",
      subtext: "Keep up to date with all of our news and fundraising events",
      image: { img: facebookImage, alt: "Facebook Quicklink Image" },
      link: "https://www.facebook.com/profile.php?id=100092229692407",
      target: "_blank",
    },
  ];

  return (
    <Container>
      <div className="grid sm:grid-cols-2 text- lg:grid-cols-3 gap-2 xl:gap-6 2xl:gap-8">
        <div className="">
          <QuicklinkCard card={quicklinks[0]} />
        </div>
        <div className="">
          <QuicklinkCard card={quicklinks[1]} />
        </div>
        <div className="sm:col-span-2 lg:px-0 md:px-28 lg:col-span-1">
          <QuicklinkCard card={quicklinks[2]} />
        </div>
      </div>
    </Container>
  );
}
