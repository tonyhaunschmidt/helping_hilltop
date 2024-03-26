import Footer from "@/components/Footer";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Helping Hilltop",
  description: "Helping Hilltop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-theme_main bg-bg_brown text-text_gray">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
