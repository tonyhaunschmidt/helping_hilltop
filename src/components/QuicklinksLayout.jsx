import Container from "./Container";
import QuicklinkCard from "./QuicklinksCard";
//Images
import shopImage from "../../public/img/shop_ql.jpg";
import donationImage from "../../public/img/shop_ql.jpg";
import facebookImage from "../../public/img/shop_ql.jpg";

export default function QuicklinkLayout() {
  const quicklinks = [
    {
      titleFirst: "View our",
      titleSecond: "SHOP",
      subtext: "",
      image: { img: shopImage, alt: "Shop Quicklink Image" },
      link: "",
      target: "",
    },
    {
      titleFirst: "Make a",
      titleSecond: "DONATION",
      subtext: "",
      image: { img: donationImage, alt: "Donation Quicklink Image" },
      link: "",
      target: "",
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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-5">
        <div className="">
          <QuicklinkCard card={quicklinks[0]} />
        </div>
        <div className="">
          <QuicklinkCard card={quicklinks[1]} />
        </div>
        <div className="col-span-2 lg:px-0 px-28 lg:col-span-1">
          <QuicklinkCard card={quicklinks[2]} />
        </div>
      </div>
    </Container>
  );
}
