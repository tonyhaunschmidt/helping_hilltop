import FacebookSection from "@/components/FacebookSection";
import HomepageHero from "@/components/HomepageHero";
import MapSection from "@/components/MapSection";
import QuicklinkSection from "@/components/QuicklinksSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";

export default function Page() {
  return (
    <div>
      <HomepageHero />
      <WhoWeAreSection />
      <WelcomeSection />
      <QuicklinkSection />

      <FacebookSection />
      <MapSection />
    </div>
  );
}
