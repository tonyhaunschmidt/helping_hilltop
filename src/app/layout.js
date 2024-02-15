import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Helping Hilltop",
  description: "Helping Hilltop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-theme_main bg-bg_brown text-text_gray">
        {children}
        <Footer />
      </body>
    </html>
  );
}
