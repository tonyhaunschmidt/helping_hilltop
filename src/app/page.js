import FacebookSection from "@/components/FacebookSection";
import HomepageHero from "@/components/HomepageHero";
import MapSection from "@/components/MapSection";
import QuicklinkSection from "@/components/QuicklinksSection";
import WelcomeSection from "@/components/WelcomeSection";
import MissionSection from "@/components/MissionSection";

export default function Page() {
  return (
    <div>
      <HomepageHero />
      <WelcomeSection />
      <QuicklinkSection />
      <MissionSection />
      {/* <FacebookSection /> */}
      <MapSection />
    </div>
  );
}
