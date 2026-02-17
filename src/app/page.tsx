import { AuthorIntro } from "@/components/AuthorIntro";
import { BookSpotlight } from "@/components/BookSpotlight";
import { EmailOptIn } from "@/components/EmailOptIn";
import { Hero } from "@/components/Hero";
import { PillarsGrid } from "@/components/PillarsGrid";
import { Section } from "@/components/Section";
import { TestimonialRail } from "@/components/TestimonialRail";
import { homeContent } from "@/lib/siteContent";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero {...homeContent.hero} />

      <Section {...homeContent.intro} />

      <PillarsGrid pillars={homeContent.pillars} />

      <AuthorIntro {...homeContent.authorIntro} />

      <BookSpotlight {...homeContent.bookSpotlight} />

      <TestimonialRail heading={homeContent.testimonials.heading} items={homeContent.testimonials.items} />

      <EmailOptIn {...homeContent.emailOptIn} />
    </div>
  );
}
