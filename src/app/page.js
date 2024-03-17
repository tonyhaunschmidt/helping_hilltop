import FacebookSection from "@/components/FacebookSection";
import HomepageHero from "@/components/HomepageHero";
import MapSection from "@/components/MapSection";
import QuicklinkSection from "@/components/QuicklinksSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import VisualSection from "@/components/VisualSection";

export default function Page() {
  return (
    <div>
      <HomepageHero />
      {/* <WhoWeAreSection /> */}
      <WelcomeSection />
      <QuicklinkSection />
      <VisualSection />
      <FacebookSection />
      <MapSection />
    </div>
  );
}
