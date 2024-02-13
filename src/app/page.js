import FacebookSection from "@/components/FacebookSection";
import HomepageHero from "@/components/HomepageHero";
import MapSection from "@/components/MapSection";
import QuicklinkSection from "@/components/QuicklinksSection";
import WelcomeSection from "@/components/WelcomeSection";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <HomepageHero />
      <WelcomeSection />
      <QuicklinkSection />
      <MapSection />
      <FacebookSection />
      {/* <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container> */}
    </div>
  );
}
