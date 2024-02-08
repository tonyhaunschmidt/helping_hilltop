import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Helping Hilltop",
  description: "Helping Hilltop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
