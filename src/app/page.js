import HomepageHero from "@/components/HomepageHero";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <HomepageHero />
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
